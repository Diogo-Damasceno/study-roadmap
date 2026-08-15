/* Frontend da plataforma de roadmap de estudos.
   Consome a API do servidor; progresso e favoritos ficam por usuario. */
const $ = (s) => document.querySelector(s);
const state = { areas: [], progress: {}, stars: {}, user: null, onlyStarred: false, filter: "" };

async function api(path, opts) {
  const r = await fetch(path, Object.assign({ headers: { "Content-Type": "application/json" } }, opts));
  if (r.status === 401) { return null; }
  return r.json();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

async function refreshUser() {
  const me = await api("/api/me");
  state.user = me && me.user;
  renderUserBox();
  if (state.user) {
    const p = await api("/api/progress");
    if (p) { state.progress = p.progress || {}; state.stars = p.stars || {}; }
  }
}

function renderUserBox() {
  const box = $("#userbox");
  if (state.user) {
    box.innerHTML = `<span style="color:var(--muted);margin-right:8px">Olá, ${escapeHtml(state.user.username)}</span>
      <button class="btn sm" id="logoutBtn">Sair</button>`;
    $("#logoutBtn").onclick = async () => { await api("/api/logout", { method: "POST" }); location.reload(); };
  } else {
    box.innerHTML = `<button class="btn sm primary" id="goLogin">Entrar / Criar conta</button>`;
    $("#goLogin").onclick = showLogin;
  }
}

function showLogin() {
  $("#login").classList.remove("hidden");
  $("#dashboard").classList.add("hidden");
  $("#detail").classList.add("hidden");
}

function showApp() {
  $("#login").classList.add("hidden");
  $("#dashboard").classList.remove("hidden");
  renderAreas();
}

function reqTitle(id) {
  const a = (state.areas || []).find(x => x.id === id);
  return a ? a.title : id;
}

function renderAreas() {
  const cont = $("#areas");
  const q = state.filter.toLowerCase();
  const list = state.areas.filter(a => {
    if (state.onlyStarred && !state.stars[a.id]) return false;
    if (q && !(a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q))) return false;
    return true;
  });
  cont.innerHTML = list.map(a => {
    const total = a.stages.reduce((n, s) => n + s.exercises.length, 0);
    const done = countDone(a);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const starred = !!state.stars[a.id];
    return `<div class="card area-card" data-id="${a.id}">
      <button class="star ${starred ? "on" : ""}" data-star="${a.id}">${starred ? "★" : "☆"}</button>
      <div><div class="area-icon">${a.icon || "▢"}</div>
      <div class="area-title">${escapeHtml(a.title)}</div>
      <div class="area-desc">${escapeHtml(a.desc || "")}</div>
      ${a.level ? `<span class="badge level-badge">Nível ${a.level}</span>` : ""}
      ${a.requires && a.requires.length ? `<div class="area-meta" style="margin-top:4px">Antes: ${a.requires.map(r => `<span class="badge req">${escapeHtml(reqTitle(r))}</span>`).join(" ")}</div>` : ""}
      </div>
      <div>
        <div class="area-meta"><span class="badge">${a.stages.length} módulos</span><span class="badge">${total} atividades</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="area-meta" style="margin-top:4px">${done}/${total} concluídas</div>
      </div>
    </div>`;
  }).join("");
  cont.querySelectorAll(".area-card").forEach(c => c.onclick = (e) => {
    if (e.target.dataset.star) return;
    openArea(c.dataset.id);
  });
  cont.querySelectorAll("[data-star]").forEach(b => b.onclick = async (e) => {
    e.stopPropagation();
    const id = b.dataset.star;
    const next = !state.stars[id];
    state.stars[id] = next;
    b.classList.toggle("on", next); b.textContent = next ? "★" : "☆";
    await api("/api/star", { method: "POST", body: JSON.stringify({ area_id: id, starred: next }) });
  });
}

function countDone(area) {
  let n = 0;
  area.stages.forEach(s => s.exercises.forEach((ex, i) => {
    if (state.progress[`${area.id}/${s.id}/${i}`]) n++;
  }));
  return n;
}

function openArea(id) {
  const a = state.areas.find(x => x.id === id);
  if (!a) return;
  $("#dashboard").classList.add("hidden");
  $("#detail").classList.remove("hidden");
  const html = a.stages.map((s, si) => {
    const ex = s.exercises.map((ex, ei) => {
      const key = `${a.id}/${s.id}/${ei}`;
      const done = !!state.progress[key];
      return renderEx(ex, key, done);
    }).join("");
    const sched = (s.schedule || []).map(w => `${w.wk}: ${w.go}`).join(" · ");
    return `<div class="stage card">
      <h3>Módulo ${si + 1}: ${escapeHtml(s.title)}</h3>
      <div class="blurb">${escapeHtml(s.blurb || "")}</div>
      <div class="field"><strong style="color:var(--muted);font-size:14px">Por onde começar:</strong>
        <div class="area-meta">${(s.start || []).map(x => `<span class="badge">${escapeHtml(x)}</span>`).join(" ")}</div></div>
      ${renderExplain(s)}
      ${ex}
      ${renderLesson(s, a)}
      ${sched ? `<div class="sched">Cronograma sugerido — ${escapeHtml(sched)}</div>` : ""}
      ${s.deep && s.deep.length ? `<div class="deep">${(s.deep || []).map(d => `<a href="${escapeHtml(d.url)}" target="_blank" rel="noopener" class="badge">${escapeHtml(d.label)} ↗</a>`).join("")}</div>` : ""}
    </div>`;
  }).join("");
  const booksSec = renderBooks(a);
  $("#detailContent").innerHTML = `<div class="card"><h2 style="margin-top:0">${escapeHtml(a.title)}</h2>
    <p style="color:var(--muted)">${escapeHtml(a.desc || "")}</p></div>${html}${booksSec}`;
  $("#detailContent").querySelectorAll(".chk").forEach(c => c.onchange = async () => {
    const parts = c.dataset.k.split("/");
    await api("/api/progress", { method: "POST", body: JSON.stringify({ area_id: a.id, stage_id: parts[1], exercise_idx: Number(parts[2]), done: c.checked }) });
    state.progress[c.dataset.k] = c.checked ? 1 : 0;
  });
  $("#detailContent").querySelectorAll("[data-check]").forEach(b => b.onclick = async () => {
    const kind = b.dataset.check, box = b.dataset.box, msg = $("#msg_" + box);
    if (kind === "choice") {
      const sel = document.querySelector(`input[name="${b.dataset.name}"]:checked`);
      if (!sel) { msg.textContent = "Selecione uma opção."; msg.className = "msg err"; return; }
      const ok = Number(sel.value) === Number(b.dataset.ans);
      msg.textContent = ok ? "✓ Correto!" : "✗ Tente de novo.";
      msg.className = "msg " + (ok ? "ok" : "err");
    } else if (kind === "contains") {
      const val = (document.querySelector(`[data-box="${box}"]`).value || "").toLowerCase();
      const words = b.dataset.words.split("|").map(w => w.toLowerCase());
      const ok = words.every(w => val.includes(w));
      msg.textContent = ok ? "✓ Parece certo! (contém os termos esperados)" : "✗ Ainda não — inclua: " + words.join(", ");
      msg.className = "msg " + (ok ? "ok" : "err");
    } else if (kind === "code") {
      const code = document.querySelector(`[data-box="${box}"]`).value || "";
      const r = await api("/api/run", { method: "POST", body: JSON.stringify({ code, lang: b.dataset.lang }) });
      if (!r) { msg.textContent = "Não autenticado."; msg.className = "msg err"; return; }
      if (r.error === "exec_desativado") { msg.textContent = "Execução de código desativada neste servidor (uso local apenas). Verificação por gabarito:"; }
      else {
        const expect = b.dataset.expect.split("|").map(w => w.toLowerCase());
        const out = ((r.stdout || "") + (r.stderr || "")).toLowerCase();
        const ok = expect.every(w => out.includes(w));
        msg.textContent = "STDOUT:\n" + (r.stdout || "") + "\nSTDERR:\n" + (r.stderr || "") + (r.timeout ? "\n(tempo esgotado)" : "") +
          (expect.length && expect[0] ? "\n\nGabarito: " + (ok ? "✓ saída compatível" : "✗ saída não bateu com o esperado") : "");
        msg.className = "msg " + (ok ? "ok" : "err");
        return;
      }
      const expect = b.dataset.expect.split("|").map(w => w.toLowerCase());
      const val = code.toLowerCase();
      const ok = expect.every(w => val.includes(w));
      msg.textContent += ok ? " ✓ código contém o esperado." : " ✗ inclua: " + expect.join(", ");
      msg.className = "msg " + (ok ? "ok" : "err");
    }
  });
}

function renderExplain(s) {
  const list = s.explain;
  if (!list || !list.length) return "";
  const items = list.map(e => `<li style="margin-bottom:8px"><strong>${escapeHtml(e.topic.replace(/\.$/, ""))}</strong> — ${escapeHtml(e.text)}</li>`).join("");
  return `<div class="field" style="margin-top:10px"><strong style="color:var(--muted);font-size:14px">O que é cada coisa:</strong>
    <ul style="margin:8px 0 0 18px;padding:0;color:var(--text);font-size:15px;line-height:1.55">${items}</ul></div>`;
}

function mdInline(t) {
  return escapeHtml(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderLesson(s, a) {
  const les = s.lesson;
  if (!les) return "";
  const intro = les.intro ? `<p style="color:var(--muted);margin:6px 0 10px">${mdInline(les.intro)}</p>` : "";
  const secs = (les.sections || []).map(sec => {
    let body = "";
    if (sec.doc) body += `<div style="font-size:15px;line-height:1.6;margin:8px 0">${mdInline(sec.doc)}</div>`;
    if (sec.steps && sec.steps.length) {
      body += `<div style="margin:8px 0"><strong style="color:var(--muted)">Passo a passo:</strong><ul style="margin:6px 0 0 18px">${sec.steps.map(x => `<li>${mdInline(x)}</li>`).join("")}</ul></div>`;
    }
    if (sec.cmd) body += `<pre style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:10px;overflow:auto;font-size:13px;white-space:pre-wrap">${escapeHtml(sec.cmd)}</pre>`;
    if (sec.code) body += `<pre style="background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:10px;overflow:auto;font-size:13px;white-space:pre-wrap">${escapeHtml(sec.code)}</pre>`;
    if (sec.note) body += `<div style="color:var(--muted);font-size:14px;margin:6px 0">📝 ${mdInline(sec.note)}</div>`;
    if (sec.risk) body += `<div style="color:#ffb4a8;font-size:14px;margin:6px 0">⚠️ ${mdInline(sec.risk)}</div>`;
    if (sec.exercises && sec.exercises.length) {
      body += `<div style="margin-top:10px"><strong style="color:var(--muted)">Exercícios desta etapa:</strong>${sec.exercises.map((ex, ei) => {
        const key = `${a.id}/${s.id}/${ei}`;
        const done = !!state.progress[key];
        return renderEx(ex, key, done);
      }).join("")}</div>`;
    }
    return `<div class="field" style="margin-top:12px;padding-top:10px;border-top:1px solid var(--border)">
      <h4 style="margin:0 0 4px">${escapeHtml(sec.h)}</h4>${body}</div>`;
  }).join("");
  return `<div class="card" style="margin-top:14px;background:rgba(40,43,52,0.6)">
    <h3 style="margin-top:0">📘 Aula prática</h3>${intro}${secs}</div>`;
}

function renderBooks(a) {
  const books = a.books;
  if (!books || !books.length) return "";
  const items = books.slice(0, 12).map(b => `<li style="margin-bottom:6px"><a href="${escapeHtml(b.u)}" target="_blank" rel="noopener">${escapeHtml(b.t)} ↗</a></li>`).join("");
  const note = books.length > 12 ? `<div style="color:var(--muted);font-size:13px;margin-top:6px">Mostrando 12 de ${books.length} — veja a lista completa no repositório EbookFoundation.</div>` : "";
  return `<div class="card" style="margin-top:14px;background:rgba(40,43,52,0.6)">
    <h3 style="margin-top:0">📚 Livros gratuitos (PT-BR)</h3>
    <p style="color:var(--muted);font-size:14px;margin:4px 0 10px">Indicações da comunidade <a href="https://github.com/EbookFoundation/free-programming-books" target="_blank" rel="noopener">EbookFoundation</a>. Leitura complementar para esta trilha.</p>
    <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.5">${items}</ul>${note}</div>`;
}
function renderEx(ex, key, done) {
  const head = `<span><span class="t">${escapeHtml(ex.t)}</span>${ex.tip ? `<div class="tip">Dica: ${escapeHtml(ex.tip)}</div>` : ""}</span>`;
  const c = ex.check;
  if (!c) {
    return `<div class="ex"><label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer">
      <input type="checkbox" class="chk" data-k="${key}" ${done ? "checked" : ""}>${head}</label></div>`;
  }
  const boxId = "chk_" + key.replace(/[^a-z0-9]/gi, "_");
  if (c.type === "choice") {
    const opts = c.opts.map((o, i) =>
      `<label style="display:block;margin:4px 0;cursor:pointer"><input type="radio" name="${boxId}" value="${i}"> ${escapeHtml(o)}</label>`).join("");
    return `<div class="ex"><div class="t">${escapeHtml(ex.t)}</div>
      ${ex.tip ? `<div class="tip">Dica: ${escapeHtml(ex.tip)}</div>` : ""}
      <div class="field">${opts}</div>
      <button class="btn sm" data-check="choice" data-ans="${c.answer}" data-name="${boxId}">Verificar</button>
      <span class="msg" id="msg_${boxId}"></span></div>`;
  }
  if (c.type === "contains") {
    return `<div class="ex"><div class="t">${escapeHtml(ex.t)}</div>
      ${ex.tip ? `<div class="tip">Dica: ${escapeHtml(ex.tip)}</div>` : ""}
      <textarea class="ans" data-box="${boxId}" rows="2" style="width:100%;background:var(--panel2);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:8px" placeholder="sua resposta..."></textarea>
      <button class="btn sm" data-check="contains" data-words="${escapeHtml((c.words || []).join("|"))}" data-box="${boxId}">Verificar</button>
      <span class="msg" id="msg_${boxId}"></span></div>`;
  }
  if (c.type === "code") {
    return `<div class="ex"><div class="t">${escapeHtml(ex.t)}</div>
      ${ex.tip ? `<div class="tip">Dica: ${escapeHtml(ex.tip)}</div>` : ""}
      <textarea class="ans" data-box="${boxId}" rows="4" style="width:100%;font-family:monospace;background:var(--panel2);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:8px" placeholder="escreva seu código em ${c.lang}..."></textarea>
      <button class="btn sm" data-check="code" data-lang="${c.lang}" data-expect="${escapeHtml((c.expect || []).join("|"))}" data-box="${boxId}">Rodar / Verificar</button>
      <pre class="msg" id="msg_${boxId}" style="white-space:pre-wrap"></pre></div>`;
  }
  return `<div class="ex"><label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer">
    <input type="checkbox" class="chk" data-k="${key}" ${done ? "checked" : ""}>${head}</label></div>`;
}

/* auth handlers */
$("#loginForm").onsubmit = async (e) => {
  e.preventDefault();
  const r = await api("/api/login", { method: "POST", body: JSON.stringify({ username: $("#li_user").value, password: $("#li_pass").value }) });
  if (r && r.ok) { await refreshUser(); showApp(); } else setMsg("authMsg", "Credenciais inválidas.", false);
};
$("#regForm").onsubmit = async (e) => {
  e.preventDefault();
  const r = await api("/api/register", { method: "POST", body: JSON.stringify({ username: $("#rg_user").value, password: $("#rg_pass").value, email: $("#rg_email").value }) });
  if (r && r.ok) {
    if (r.sent) setMsg("authMsg", "Conta criada! Enviamos um e-mail de confirmação. Abra o link para ativar.", true);
    else if (r.debugLink) setMsg("authMsg", "E-mail de confirmação desativado no servidor. Use este link para ativar (apenas dev): " + location.origin + r.debugLink, true);
    else setMsg("authMsg", "Cadastro recebido, mas não informou e-mail. Sem confirmação a conta não é ativada.", false);
  } else setMsg("authMsg", errMsg(r), false);
};
$("#ghBtn").onclick = () => { window.location.href = "/auth/github"; };
$("#backBtn").onclick = () => { $("#detail").classList.add("hidden"); $("#dashboard").classList.remove("hidden"); renderAreas(); };
$("#search").oninput = (e) => { state.filter = e.target.value; renderAreas(); };
$("#onlyStarred").onclick = () => { state.onlyStarred = !state.onlyStarred; renderAreas(); };

function setMsg(id, txt, ok) { const el = $(id); el.textContent = txt; el.className = "msg " + (ok ? "ok" : "err"); }
function errMsg(r) {
  const m = { usuario_existe: "Usuário já existe.", senha_min_8: "Senha precisa de 8+ caracteres.", usuario_3_30: "Usuário entre 3 e 30 caracteres.", campos: "Preencha todos os campos.", email_invalido: "E-mail inválido." };
  return (r && r.error && m[r.error]) || "Não foi possível concluir.";
}

(async function init() {
  const data = await api("/api/areas");
  if (data) state.areas = data.areas;
  const cfg = await api("/api/config");
  if (cfg && !cfg.githubEnabled) { const b = $("#ghBtn"); if (b) b.style.display = "none"; }
  // fluxo de confirmacao por e-mail: /confirm?token=...
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  if (token) {
    const cr = await api("/api/confirm?token=" + encodeURIComponent(token));
    if (cr && cr.ok) { await refreshUser(); showApp(); }
    else { setMsg("authMsg", "Link de confirmação inválido ou expirado.", false); showLogin(); }
  } else {
    await refreshUser();
    if (state.user) showApp(); else showLogin();
  }
})();
