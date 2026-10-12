/* Quiz REM : logique de l'application. Aucune donnée n'est envoyée : la progression reste dans le navigateur. */

const EXAM_SIZE = 30;
const EXAM_SECONDS = 30 * 60;
const STORE_KEY = "quiz-rem-v1";

// Identifiants stables pour chaque question fixe et chaque générateur de calcul
QUESTIONS.forEach((q, i) => { q.id = "q" + i; });
const GEN_IDS = Object.keys(GENERATORS).map(k => "g:" + k);

/* ---------- Stockage local (meilleurs scores, erreurs) ---------- */
function load() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
}
function save(data) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (e) { /* navigation privée */ }
}
let store = Object.assign({ best: {}, wrong: [] }, load());

/* ---------- Outils ---------- */
const $ = id => document.getElementById(id);
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function themeOf(id) { return THEMES.find(t => t.id === id); }
function parseNum(s) {
  s = String(s).replace(/\s| |€|%/g, "").replace(",", ".");
  return s === "" || isNaN(s) ? null : parseFloat(s);
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

/* Transforme un identifiant en question prête à afficher */
function build(id) {
  if (id.startsWith("g:")) {
    const g = GENERATORS[id.slice(2)]();
    return Object.assign({ id, t: "calc", type: "calc" }, g);
  }
  const q = QUESTIONS.find(x => x.id === id);
  if (!q) return null;
  if (q.type === "qcm") {
    const order = shuffle(q.c.map((_, i) => i));
    return Object.assign({}, q, { choices: order.map(i => q.c[i]), answer: order.indexOf(q.a) });
  }
  return Object.assign({}, q, { choices: ["Vrai", "Faux"], answer: q.a ? 0 : 1 });
}

function poolFor(theme) {
  const ids = QUESTIONS.filter(q => q.t === theme).map(q => q.id);
  return theme === "calc" ? ids.concat(GEN_IDS) : ids;
}

/* ---------- Navigation ---------- */
function show(view) {
  document.querySelectorAll(".view").forEach(v => { v.hidden = v.id !== "view-" + view; });
  window.scrollTo(0, 0);
  if (view === "home") renderHome();
}
document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) { e.preventDefault(); if (go.dataset.go === "home") stopTimer(); show(go.dataset.go); }
});
$("homeLink").addEventListener("click", e => { e.preventDefault(); stopTimer(); show("home"); });

/* ---------- Accueil ---------- */
let count = 10;
$("countSeg").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  count = +b.dataset.n;
  [...$("countSeg").children].forEach(x => x.classList.toggle("on", x === b));
});

function renderHome() {
  $("themeGrid").innerHTML = THEMES.map(t => {
    const n = poolFor(t.id).length, best = store.best[t.id];
    return `<button class="card" data-theme="${t.id}">
      <span class="icon">${t.icon}</span>
      <span class="card-title">${esc(t.title)}</span>
      <span class="card-sub">${esc(t.sub)} · ${n} questions${t.id === "calc" ? " et exercices" : ""}</span>
      <span class="best">${best != null ? "Meilleur score : " + best + "/20" : ""}</span>
    </button>`;
  }).join("");
  $("bestExam").textContent = store.best.exam != null ? "Meilleur score : " + store.best.exam + "/20" : "";
  const nw = store.wrong.length;
  $("errorsSub").textContent = nw ? `${nw} question${nw > 1 ? "s" : ""} à retravailler.` : "Aucune erreur enregistrée pour l’instant.";
}
$("themeGrid").addEventListener("click", e => {
  const c = e.target.closest("[data-theme]"); if (c) startTheme(c.dataset.theme);
});
$("examBtn").addEventListener("click", startExam);
$("errorsBtn").addEventListener("click", () => {
  if (!store.wrong.length) { alert("Aucune erreur à revoir pour l’instant. Faites d’abord un quiz !"); return; }
  startQuiz({ mode: "errors", title: "🔁 Revoir mes erreurs", ids: shuffle(store.wrong) });
});

/* ---------- Démarrage des quiz ---------- */
function startTheme(theme) {
  const t = themeOf(theme), pool = shuffle(poolFor(theme));
  startQuiz({ mode: "theme", key: theme, title: t.icon + " " + t.title, ids: count ? pool.slice(0, count) : pool });
}
function startExam() {
  // 5 questions par thème, dont 5 exercices chiffrés pour le thème calculs
  let ids = [];
  THEMES.forEach(t => {
    const pool = t.id === "calc" ? GEN_IDS : poolFor(t.id);
    ids = ids.concat(shuffle(pool).slice(0, EXAM_SIZE / THEMES.length));
  });
  startQuiz({ mode: "exam", key: "exam", title: "⏱️ Examen blanc", ids: shuffle(ids), timed: true });
}

let quiz = null, timer = null;

function startQuiz(opts) {
  stopTimer();
  quiz = Object.assign({ i: 0, answers: [] }, opts);
  quiz.items = opts.ids.map(build).filter(Boolean);
  $("quizTheme").textContent = opts.title;
  $("quizTimer").hidden = !opts.timed;
  if (opts.timed) {
    quiz.left = EXAM_SECONDS;
    tick();
    timer = setInterval(() => { quiz.left--; tick(); if (quiz.left <= 0) finish(); }, 1000);
  }
  show("quiz");
  renderQuestion();
}
function tick() {
  const m = Math.floor(Math.max(quiz.left, 0) / 60), s = Math.max(quiz.left, 0) % 60;
  $("quizTimer").textContent = `${m}:${String(s).padStart(2, "0")}`;
  $("quizTimer").classList.toggle("low", quiz.left <= 120);
}
function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }

/* ---------- Affichage d'une question ---------- */
function renderQuestion() {
  const q = quiz.items[quiz.i], n = quiz.items.length;
  $("quizCount").textContent = `${quiz.i + 1} / ${n}`;
  $("progressBar").style.width = (quiz.i / n * 100) + "%";
  const t = themeOf(q.t);
  $("qTag").textContent = t.icon + " " + t.title + (q.type === "vf" ? " · Vrai ou faux" : q.type === "calc" ? " · Calcul" : "");
  $("qText").textContent = q.q;
  $("feedback").hidden = true;
  $("nextBtn").hidden = true;

  if (q.type === "calc") {
    $("qAnswers").innerHTML = `<form class="calcrow" id="calcForm">
        <input id="calcInput" inputmode="decimal" autocomplete="off" placeholder="Votre réponse">
        ${q.unit ? `<span class="unit">${esc(q.unit)}</span>` : ""}
        <button class="btn gold" type="submit">Valider</button>
      </form>
      <p class="hint">${q.d ? "Arrondissez à 2 décimales si besoin (virgule ou point acceptés)." : "Réponse en nombre entier."}</p>`;
    $("calcForm").addEventListener("submit", e => {
      e.preventDefault();
      const v = parseNum($("calcInput").value);
      if (v == null) { $("calcInput").focus(); return; }
      answer(v);
    });
    $("calcInput").focus();
  } else {
    $("qAnswers").innerHTML = q.choices.map((c, i) => `<button class="choice" data-i="${i}">${esc(c)}</button>`).join("");
    $("qAnswers").querySelectorAll(".choice").forEach(b => b.addEventListener("click", () => answer(+b.dataset.i)));
  }
}

function isRight(q, v) {
  if (q.type !== "calc") return v === q.answer;
  const tol = q.d ? 0.06 : 0.001;
  return Math.abs(v - q.a) <= tol;
}
function rightText(q) {
  return q.type === "calc" ? `${Number(q.a).toLocaleString("fr-FR", { maximumFractionDigits: 2 })} ${q.unit || ""}`.trim() : q.choices[q.answer];
}
function givenText(q, v) {
  return q.type === "calc" ? `${Number(v).toLocaleString("fr-FR", { maximumFractionDigits: 4 })} ${q.unit || ""}`.trim() : q.choices[v];
}

function answer(v) {
  const q = quiz.items[quiz.i], ok = isRight(q, v);
  quiz.answers[quiz.i] = { v, ok };
  trackError(q.id, ok);

  // Verrouille la question
  $("qAnswers").querySelectorAll("button, input").forEach(el => { el.disabled = true; });

  if (quiz.mode === "exam") {
    // Pas de correction pendant l'examen blanc
    if (q.type !== "calc") $("qAnswers").querySelector(`[data-i="${v}"]`).classList.add("picked");
    next();
    return;
  }

  if (q.type !== "calc") {
    $("qAnswers").querySelector(`[data-i="${q.answer}"]`).classList.add("right");
    if (!ok) $("qAnswers").querySelector(`[data-i="${v}"]`).classList.add("wrong");
  }
  const fb = $("feedback");
  fb.className = "feedback " + (ok ? "ok" : "ko");
  fb.innerHTML = `<strong>${ok ? "✅ Bonne réponse !" : "❌ Mauvaise réponse. Réponse attendue : " + esc(rightText(q))}</strong>${esc(q.e)}`;
  fb.hidden = false;
  $("nextBtn").textContent = quiz.i + 1 < quiz.items.length ? "Suivant" : "Voir mon score";
  $("nextBtn").hidden = false;
  $("nextBtn").focus();
}

function next() {
  if (quiz.i + 1 < quiz.items.length) { quiz.i++; renderQuestion(); }
  else finish();
}
$("nextBtn").addEventListener("click", next);
$("quitBtn").addEventListener("click", () => {
  if (!quiz.answers.length || confirm("Arrêter le quiz ? Les questions déjà répondues seront comptées.")) finish();
});

function trackError(id, ok) {
  const set = new Set(store.wrong);
  if (ok) set.delete(id); else set.add(id);
  store.wrong = [...set];
  save(store);
}

/* ---------- Résultat ---------- */
function finish() {
  stopTimer();
  const done = quiz.items.map((q, i) => ({ q, a: quiz.answers[i] }));
  const total = quiz.mode === "exam" ? done.length : done.filter(x => x.a).length;
  const good = done.filter(x => x.a && x.a.ok).length;
  const note = total ? Math.round(good / total * 20 * 10) / 10 : 0;

  if (quiz.key && total) {
    if (store.best[quiz.key] == null || note > store.best[quiz.key]) store.best[quiz.key] = note;
    save(store);
  }

  $("resTitle").textContent = quiz.title;
  $("resScore").textContent = note.toLocaleString("fr-FR");
  $("resDetail").textContent = `${good} bonne${good > 1 ? "s" : ""} réponse${good > 1 ? "s" : ""} sur ${total}` +
    (quiz.mode === "exam" && quiz.left <= 0 ? " · temps écoulé" : "");
  $("resMsg").textContent = note >= 16 ? "Excellent, vous maîtrisez ce sujet !" : note >= 12 ? "Bien joué, encore un petit effort." :
    note >= 10 ? "C’est la moyenne : revoyez les questions ratées." : "À retravailler : relisez la fiche puis recommencez.";

  // Détail par thème
  const by = {};
  done.forEach(x => {
    if (quiz.mode !== "exam" && !x.a) return;
    by[x.q.t] = by[x.q.t] || { g: 0, n: 0 };
    by[x.q.t].n++; if (x.a && x.a.ok) by[x.q.t].g++;
  });
  $("resThemes").innerHTML = Object.keys(by).length > 1 ? THEMES.filter(t => by[t.id]).map(t =>
    `<div>${t.icon} ${esc(t.title)} : <b>${by[t.id].g}/${by[t.id].n}</b></div>`).join("") : "";

  // Correction : erreurs d'abord
  const list = done.filter(x => x.a || quiz.mode === "exam").sort((a, b) => (a.a && a.a.ok) - (b.a && b.a.ok));
  $("reviewTitle").hidden = !list.length;
  $("review").innerHTML = list.map(({ q, a }) => {
    const ok = a && a.ok;
    return `<div class="rev ${ok ? "ok" : ""}">
      <p class="q">${ok ? "✅" : "❌"} ${esc(q.q)}</p>
      ${!ok ? `<p class="yours">Votre réponse : ${a ? esc(givenText(q, a.v)) : "pas de réponse"}</p>` : ""}
      <p class="good">Bonne réponse : ${esc(rightText(q))}</p>
      <p class="ex">${esc(q.e)}</p>
    </div>`;
  }).join("");

  const replay = quiz.mode === "exam" ? startExam : quiz.mode === "errors" ? () => $("errorsBtn").click() : () => startTheme(quiz.key);
  $("replayBtn").onclick = replay;
  show("result");
}

renderHome();
