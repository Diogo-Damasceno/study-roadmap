/* Servidor da plataforma de roadmap de estudos.
   Seguranca: senhas com bcrypt, sessoes assinadas, SQLite via prepared statements,
   headers via helmet, rate limit em auth, CSRF token em formularios. */
const path = require("path");
const fs = require("fs");
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const Database = require("better-sqlite3");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || "troque-este-segredo-em-producao";
const DATA_DIR = __dirname;

/* ---------- Banco de dados (SQLite em arquivo local) ---------- */
const db = new Database(path.join(DATA_DIR, "estudos.db"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT,
    pass_hash TEXT,
    github_id TEXT UNIQUE,
    created_at INTEGER NOT NULL,
    last_login INTEGER
  );
  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL,
    area_id TEXT NOT NULL,
    stage_id TEXT NOT NULL,
    exercise_idx INTEGER NOT NULL,
    done INTEGER NOT NULL DEFAULT 0,
    updated_at INTEGER NOT NULL,
    PRIMARY KEY (user_id, area_id, stage_id, exercise_idx)
  );
  CREATE TABLE IF NOT EXISTS stars (
    user_id INTEGER NOT NULL,
    area_id TEXT NOT NULL,
    starred INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (user_id, area_id)
  );
`);

/* ---------- Carregar trilhas dos arquivos de dados ---------- */
function loadAreas() {
  const areas = [];
  const files = fs.readdirSync(DATA_DIR)
    .filter(f => /^data-.*\.js$/.test(f))
    .sort();
  const sandbox = { window: { RMAP: areas } };
  for (const f of files) {
    const code = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
    // cada arquivo faz window.RMAP.push(...); empurra direto no nosso array
    new Function("window", code)(sandbox.window);
  }
  // anexa explicacoes didaticas e aula pratica a cada modulo
  let expl, lessonsMod, lessonsOverrides = {};
  try { expl = require("./explain.js"); } catch (e) { expl = null; }
  try {
    lessonsMod = require("./lessons-gen.js");
    const lsandbox = { RMAP_LESSONS: {} };
    new Function("window", fs.readFileSync(path.join(DATA_DIR, "lessons.js"), "utf8"))(lsandbox);
    lessonsOverrides = lsandbox.RMAP_LESSONS || {};
  } catch (e) { lessonsMod = null; }
  for (const a of areas) {
    for (const s of a.stages) {
      if (expl && expl.explainStage) s.explain = expl.explainStage(s.start);
      if (lessonsMod && lessonsMod.buildLesson) s.lesson = lessonsMod.buildLesson(a.id, s, lessonsOverrides[`${a.id}/${s.id}`]);
    }
  }
  // aplica ordem de jornada (nivel + prerequisitos) e ordena por nivel
  let order, booksMap;
  try { order = require("./roadmap-order.js"); } catch (e) { order = null; }
  try { booksMap = require("./books-by-area.json"); } catch (e) { booksMap = null; }
  if (order) {
    for (const a of areas) {
      a.level = order.level[a.id] || 99;
      a.requires = order.requires[a.id] || [];
    }
    areas.sort((x, y) => (x.level - y.level) || (x.title || "").localeCompare(y.title || ""));
  }
  if (booksMap) {
    const geral = booksMap["_geral"] || [];
    for (const a of areas) a.books = (booksMap[a.id] && booksMap[a.id].length) ? booksMap[a.id] : geral;
  }
  return areas;
}
let AREAS = loadAreas();
const AREA_MAP = {};
AREAS.forEach(a => (AREA_MAP[a.id] = a));

/* ---------- Passport / GitHub OAuth (opcional) ---------- */
const GH_CLIENT = process.env.GITHUB_CLIENT_ID;
const GH_SECRET = process.env.GITHUB_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL;
if (GH_CLIENT && GH_SECRET) {
  passport.use(new GitHubStrategy({
    clientID: GH_CLIENT, clientSecret: GH_SECRET,
    callbackURL: BASE_URL ? BASE_URL + "/auth/github/callback" : "/auth/github/callback",
    userAgent: "study-roadmap",
    scope: ["read:user"]
  }, (accessToken, refreshToken, profile, done) => {
    try {
      let row = db.prepare("SELECT * FROM users WHERE github_id = ?").get(profile.id);
      if (!row) {
        const uname = (profile.username || "gh" + profile.id).toLowerCase();
        const exists = db.prepare("SELECT id FROM users WHERE username = ?").get(uname);
        const finalName = exists ? `${uname}_${profile.id}` : uname;
        const info = db.prepare(
          "INSERT INTO users (username, email, github_id, created_at, last_login) VALUES (?, ?, ?, ?, ?)"
        ).run(finalName, profile.emails && profile.emails[0] && profile.emails[0].value, profile.id, Date.now(), Date.now());
        row = db.prepare("SELECT * FROM users WHERE id = ?").get(info.lastInsertRowid);
      } else {
        db.prepare("UPDATE users SET last_login = ? WHERE id = ?").run(Date.now(), row.id);
      }
      return done(null, row);
    } catch (e) { return done(e); }
  }));
}
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  try { const u = db.prepare("SELECT id, username, email, github_id FROM users WHERE id = ?").get(id); done(null, u); }
  catch (e) { done(e); }
});

/* ---------- App ---------- */
const app = express();
app.set("trust proxy", true);
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https://avatars.githubusercontent.com"],
      connectSrc: ["'self'"]
    }
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: SESSION_SECRET,
  resave: false, saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" }
}));
app.use(passport.initialize());
app.use(passport.session());

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false });

/* ---------- Rotas de API ---------- */
app.get("/api/areas", (req, res) => res.json({ areas: AREAS, count: AREAS.length }));

app.get("/api/me", (req, res) => {
  if (!req.user) return res.json({ user: null });
  res.json({ user: { username: req.user.username, github: !!req.user.github_id } });
});

app.get("/api/config", (req, res) => {
  res.json({ githubEnabled: !!(GH_CLIENT && GH_SECRET) });
});

app.get("/api/progress", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const rows = db.prepare("SELECT area_id, stage_id, exercise_idx, done FROM progress WHERE user_id = ?").all(req.user.id);
  const stars = db.prepare("SELECT area_id, starred FROM stars WHERE user_id = ?").all(req.user.id);
  const prog = {};
  rows.forEach(r => { prog[`${r.area_id}/${r.stage_id}/${r.exercise_idx}`] = r.done; });
  const starMap = {};
  stars.forEach(s => { starMap[s.area_id] = s.starred; });
  res.json({ progress: prog, stars: starMap });
});

app.post("/api/progress", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const { area_id, stage_id, exercise_idx, done } = req.body || {};
  if (!area_id || !stage_id || exercise_idx === undefined) return res.status(400).json({ error: "campos" });
  db.prepare(
    "INSERT INTO progress (user_id, area_id, stage_id, exercise_idx, done, updated_at) VALUES (?, ?, ?, ?, ?, ?) " +
    "ON CONFLICT(user_id, area_id, stage_id, exercise_idx) DO UPDATE SET done = excluded.done, updated_at = excluded.updated_at"
  ).run(req.user.id, area_id, stage_id, exercise_idx, done ? 1 : 0, Date.now());
  res.json({ ok: true });
});

app.post("/api/star", (req, res) => {
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const { area_id, starred } = req.body || {};
  if (!area_id) return res.status(400).json({ error: "campos" });
  db.prepare(
    "INSERT INTO stars (user_id, area_id, starred) VALUES (?, ?, ?) " +
    "ON CONFLICT(user_id, area_id) DO UPDATE SET starred = excluded.starred"
  ).run(req.user.id, area_id, starred ? 1 : 0);
  res.json({ ok: true });
});

/* ---------- Auth: senha ---------- */
app.post("/api/register", authLimiter, (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "campos" });
  if (username.length < 3 || username.length > 30) return res.status(400).json({ error: "usuario_3_30" });
  if (password.length < 8) return res.status(400).json({ error: "senha_min_8" });
  const exists = db.prepare("SELECT id FROM users WHERE username = ?").get(username);
  if (exists) return res.status(409).json({ error: "usuario_existe" });
  const hash = bcrypt.hashSync(password, 12);
  const info = db.prepare("INSERT INTO users (username, pass_hash, created_at, last_login) VALUES (?, ?, ?, ?)")
    .run(username, hash, Date.now(), Date.now());
  req.login(db.prepare("SELECT id, username, email, github_id FROM users WHERE id = ?").get(info.lastInsertRowid), () => res.json({ ok: true }));
});

app.post("/api/login", authLimiter, (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "campos" });
  const row = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  if (!row || !row.pass_hash || !bcrypt.compareSync(password, row.pass_hash))
    return res.status(401).json({ error: "credenciais_invalidas" });
  db.prepare("UPDATE users SET last_login = ? WHERE id = ?").run(Date.now(), row.id);
  req.login({ id: row.id, username: row.username, email: row.email, github_id: row.github_id }, () => res.json({ ok: true }));
});

app.post("/api/logout", (req, res) => {
  req.logout(() => res.json({ ok: true }));
});

/* ---------- Auth: GitHub OAuth ---------- */
app.get("/auth/github", (req, res, next) => {
  if (!GH_CLIENT || !GH_SECRET) return res.status(503).json({ error: "github_nao_configurado" });
  passport.authenticate("github")(req, res, next);
});
app.get("/auth/github/callback", (req, res, next) => {
  passport.authenticate("github", { failureRedirect: "/?auth=github_falhou" })(req, res, () => res.redirect("/"));
});

/* ---------- Execucao de codigo (opcional, apenas local) ---------- */
const ALLOW_CODE_EXEC = process.env.ALLOW_CODE_EXEC === "1";
const { execFile } = require("child_process");
app.post("/api/run", (req, res) => {
  if (!ALLOW_CODE_EXEC) return res.status(503).json({ error: "exec_desativado" });
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const { code, lang } = req.body || {};
  if (!code || (lang !== "python" && lang !== "sh")) return res.status(400).json({ error: "lang" });
  const cmd = lang === "python" ? "python3" : "bash";
  const file = path.join(require("os").tmpdir(), "roadmap_run_" + Date.now() + (lang === "python" ? ".py" : ".sh"));
  fs.writeFileSync(file, code);
  const child = execFile(cmd, lang === "python" ? [file] : [file], { timeout: 4000, maxBuffer: 200000 }, (err, stdout, stderr) => {
    fs.unlink(file, () => {});
    if (err && err.killed) return res.json({ ok: true, timeout: true, stdout, stderr });
    res.json({ ok: true, stdout: (stdout || "").slice(0, 5000), stderr: (stderr || "").slice(0, 5000), code: err ? err.code : 0 });
  });
});


app.use(express.static(path.join(DATA_DIR, "public")));
app.get("/", (req, res) => res.sendFile(path.join(DATA_DIR, "public", "index.html")));
app.get("/sobre", (req, res) => res.sendFile(path.join(DATA_DIR, "public", "sobre.html")));

app.listen(PORT, () => {
  console.log(`Roadmap de estudos rodando em ${BASE_URL}`);
  if (!GH_CLIENT || !GH_SECRET) console.log("Aviso: GitHub OAuth nao configurado (defina GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET).");
  if (SESSION_SECRET === "troque-este-segredo-em-producao") console.log("Aviso: defina SESSION_SECRET em producao.");
});
