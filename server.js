/* Servidor da plataforma de roadmap de estudos.
   Seguranca: senhas com bcrypt, sessoes assinadas, banco via db.js (Turso ou SQLite local).
   headers via helmet, rate limit em auth. */
const path = require("path");
const fs = require("fs");
const express = require("express");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const bcrypt = require("bcryptjs");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const { dbInit, dbGet, dbAll, dbRun, getMode } = require("./db");

const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || "troque-este-segredo-em-producao";
const DATA_DIR = __dirname;

/* ---------- Carregar trilhas dos arquivos de dados ---------- */
function loadAreas() {
  const areas = [];
  const files = fs.readdirSync(DATA_DIR)
    .filter(f => /^data-.*\.js$/.test(f))
    .sort();
  const sandbox = { window: { RMAP: areas } };
  for (const f of files) {
    const code = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
    new Function("window", code)(sandbox.window);
  }
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
      if (expl && expl.explainStage) s.explain = expl.explainStage(a.id, s.id, s.start);
      if (lessonsMod && lessonsMod.buildLesson) s.lesson = lessonsMod.buildLesson(a.id, s, lessonsOverrides[`${a.id}/${s.id}`]);
    }
  }
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
const AREAS = loadAreas();

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
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let row = await dbGet("SELECT * FROM users WHERE github_id = ?", [profile.id]);
      if (!row) {
        const uname = (profile.username || "gh" + profile.id).toLowerCase();
        const exists = await dbGet("SELECT id FROM users WHERE username = ?", [uname]);
        const finalName = exists ? `${uname}_${profile.id}` : uname;
        const info = await dbRun(
          "INSERT INTO users (username, email, github_id, created_at, last_login) VALUES (?, ?, ?, ?, ?)",
          [finalName, profile.emails && profile.emails[0] && profile.emails[0].value, profile.id, Date.now(), Date.now()]
        );
        row = await dbGet("SELECT * FROM users WHERE id = ?", [info.lastInsertRowid]);
      } else {
        await dbRun("UPDATE users SET last_login = ? WHERE id = ?", [Date.now(), row.id]);
      }
      return done(null, row);
    } catch (e) { return done(e); }
  }));
}
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try { const u = await dbGet("SELECT id, username, email, github_id FROM users WHERE id = ?", [id]); done(null, u); }
  catch (e) { done(e); }
});

/* ---------- App ---------- */
const app = express();
app.set("trust proxy", 1);
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
  store: new SQLiteStore({ db: "sessions.db", dir: DATA_DIR, tableName: "sessions" }),
  cookie: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 7 * 24 * 3600 * 1000 }
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
  res.json({ githubEnabled: !!(GH_CLIENT && GH_SECRET), dbMode: getMode() });
});

app.get("/api/progress", async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const rows = await dbAll("SELECT area_id, stage_id, exercise_idx, done FROM progress WHERE user_id = ?", [req.user.id]);
  const stars = await dbAll("SELECT area_id, starred FROM stars WHERE user_id = ?", [req.user.id]);
  const prog = {};
  rows.forEach(r => { prog[`${r.area_id}/${r.stage_id}/${r.exercise_idx}`] = r.done; });
  const starMap = {};
  stars.forEach(s => { starMap[s.area_id] = s.starred; });
  res.json({ progress: prog, stars: starMap });
});

app.post("/api/progress", async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const { area_id, stage_id, exercise_idx, done } = req.body || {};
  if (!area_id || !stage_id || exercise_idx === undefined) return res.status(400).json({ error: "campos" });
  await dbRun(
    "INSERT INTO progress (user_id, area_id, stage_id, exercise_idx, done, updated_at) VALUES (?, ?, ?, ?, ?, ?) " +
    "ON CONFLICT(user_id, area_id, stage_id, exercise_idx) DO UPDATE SET done = excluded.done, updated_at = excluded.updated_at",
    [req.user.id, area_id, stage_id, exercise_idx, done ? 1 : 0, Date.now()]
  );
  res.json({ ok: true });
});

app.post("/api/star", async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "nao_autenticado" });
  const { area_id, starred } = req.body || {};
  if (!area_id) return res.status(400).json({ error: "campos" });
  await dbRun(
    "INSERT INTO stars (user_id, area_id, starred) VALUES (?, ?, ?) " +
    "ON CONFLICT(user_id, area_id) DO UPDATE SET starred = excluded.starred",
    [req.user.id, area_id, starred ? 1 : 0]
  );
  res.json({ ok: true });
});

/* ---------- Auth: senha (registro ativa conta direto; e-mail opcional) ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
app.post("/api/register", authLimiter, async (req, res) => {
  const { username, password, email } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "campos" });
  if (username.length < 3 || username.length > 30) return res.status(400).json({ error: "usuario_3_30" });
  if (password.length < 8) return res.status(400).json({ error: "senha_min_8" });
  if (email && !EMAIL_RE.test(email)) return res.status(400).json({ error: "email_invalido" });
  const exists = await dbGet("SELECT id FROM users WHERE username = ?", [username]);
  if (exists) return res.status(409).json({ error: "usuario_existe" });
  const hash = bcrypt.hashSync(password, 12);
  const info = await dbRun("INSERT INTO users (username, email, pass_hash, created_at, last_login) VALUES (?, ?, ?, ?, ?)",
    [username, email || null, hash, Date.now(), Date.now()]);
  const user = await dbGet("SELECT id, username, email, github_id FROM users WHERE id = ?", [info.lastInsertRowid]);
  req.login(user, () => res.json({ ok: true }));
});

app.post("/api/login", authLimiter, async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: "campos" });
  const row = await dbGet("SELECT * FROM users WHERE username = ?", [username]);
  if (!row || !row.pass_hash || !bcrypt.compareSync(password, row.pass_hash))
    return res.status(401).json({ error: "credenciais_invalidas" });
  await dbRun("UPDATE users SET last_login = ? WHERE id = ?", [Date.now(), row.id]);
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

/* ---------- Start (aguarda dbInit) ---------- */
dbInit().then(() => {
  app.listen(PORT, () => {
    console.log(`Roadmap de estudos rodando em ${BASE_URL} (db: ${getMode()})`);
    if (!GH_CLIENT || !GH_SECRET) console.log("Aviso: GitHub OAuth nao configurado (defina GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET).");
    if (SESSION_SECRET === "troque-este-segredo-em-producao") console.log("Aviso: defina SESSION_SECRET em producao.");
    if (!process.env.DATABASE_URL) console.log("Aviso: DATABASE_URL ausente — usando SQLite local (nao persistente no deploy).");
  });
}).catch((e) => {
  console.error("Falha ao iniciar banco:", e);
  process.exit(1);
});
