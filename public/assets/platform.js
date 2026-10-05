/* ROMImente / Clínica El Amparo. Demonstration workflows, never clinical storage. */
const todayISO = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
const uid = (prefix) => prefix + crypto.randomUUID();
const fmtDate = (value) =>
  new Date(value.slice(0, 10) + "T12:00:00").toLocaleDateString("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
const iconPaths = {
  home: '<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18"/>',
  people:
    '<circle cx="9" cy="8" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3m0-17a3 3 0 0 1 0 6m3 4a6 6 0 0 1 3 5v2"/>',
  file: '<path d="M5 3h10l4 4v14H5zM14 3v5h5M8 12h8m-8 4h6"/>',
  book: '<path d="M12 5v16M3 3c4 0 7 1 9 3 2-2 5-3 9-3v16c-4 0-7 0-9 2-2-2-5-2-9-2z"/>',
  chart: '<path d="M3 3v18h18M7 16l4-6 4 3 6-8"/>',
  heart:
    '<path d="M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-4 4 1 9 8 15 7-6 12-11 8-15Z"/>',
  settings:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',
  shield:
    '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6z"/><path d="m8 12 3 3 5-6"/>',
  mic: '<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>',
  money:
    '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20m-15 5h3"/>',
  pen: '<path d="m3 21 1-6L16 3l5 5L9 20zM14 5l5 5"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  leaf: '<path d="M20 3C5 2 1 9 6 16s16 2 14-13ZM4 21 16 8"/>',
};
const ico = (name, size = 20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.file}</svg>`;
function audit(action, subject = "") {
  data.audit ??= [];
  data.audit.unshift({
    id: uid("EV-"),
    at: new Date().toISOString(),
    actor: role,
    action,
    subject,
  });
  data.audit = data.audit.slice(0, 250);
  save();
}
function initPlatform() {
  data.journal ??= {};
  data.programs ??= {};
  data.social ??= {
    projects: [
      {
        id: "PSOC-01",
        name: "Cuidarnos en comunidad",
        focus: "Bienestar emocional",
        place: "Clínica El Amparo",
        date: todayISO(),
        capacity: 20,
        status: "Activo",
        description:
          "Taller demostrativo de habilidades y redes de apoyo para la comunidad.",
      },
      {
        id: "PSOC-02",
        name: "Espacio joven",
        focus: "Adolescentes y familias",
        place: "Centro comunitario",
        date: todayISO(),
        capacity: 15,
        status: "Planeación",
        description:
          "Propuesta de acompañamiento y orientación familiar. Alcance por validar con la clínica.",
      },
    ],
    intakes: [],
  };
  data.psychometrics ??= {};
  data.patientResponses ??= {};
  data.audit ??= [];
  if (!data.amparoSeed) {
    data.amparoSeed = true;
    const base = new Date(todayISO() + "T12:00:00");
    data.appointments.forEach((a, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + Math.floor(i / 2));
      a.date = d.toISOString().slice(0, 10);
    });
    data.patients.forEach((p) => {
      p.email = p.id.toLowerCase() + "@example.test";
      p.contact = "2220001000";
      p.last = fmtDate(todayISO());
    });
    data.journal["PS-0001"] = {
      draft: {
        mood: "Regular",
        text: "",
        emotion: "",
        intensity: 4,
        skill: "",
      },
      entries: [
        {
          id: "J-DEMO-1",
          date: new Date().toISOString(),
          mood: "Regular",
          text: "Esta semana practiqué la pausa antes de responder. Me gustaría conversar sobre cómo mantenerla cuando tengo muchas tareas.",
          emotion: "Inquietud",
          intensity: 4,
          skill: "Pausa consciente",
          read: false,
        },
      ],
    };
    data.programs["PS-0001"] = {
      kind: "ACT",
      start: todayISO(),
      sessions: {
        0: {
          status: "Realizada",
          date: todayISO(),
          notes: "Sesión ilustrativa de orientación.",
          mode: "Individual",
          block: "General",
          shared: true,
        },
      },
      owner: "psi1",
    };
    data.tasks["PS-0001"].forEach((t) => {
      t.visibility = "ahora";
    });
    const k = c14Store("PS-0001");
    k.kit = {
      visibility: "ahora",
      fields: {
        "Autocalmar · Cinco sentidos":
          "Mi fotografía favorita y una textura suave.",
        Distracción: "Mi libreta de dibujos y una lista de música.",
        Significado: "Puedo pedir compañía. No tengo que resolver todo ahora.",
        "Respiración y cuerpo": "Repasar las prácticas acordadas en sesión.",
        Anclaje: "Mirar alrededor y nombrar cosas que reconozco.",
        Recordatorios: "Un paso a la vez.",
        "Plan de crisis":
          "Contactar a mi red de apoyo y seguir el plan acordado con mi profesional.",
      },
    };
  }
  for (const list of Object.values(data.tasks || {}))
    for (const t of list)
      if (t.visibility === "paciente") t.visibility = "ahora";
  for (const c of Object.values(data.care14 || {}))
    if (c.kit?.visibility === "paciente") c.kit.visibility = "ahora";
  save();
}
initPlatform();
let space = "clinical";
const clinicalNav = [
  ["inicio", "home", "Mi consulta"],
  ["agenda", "calendar", "Agenda"],
  ["pacientes", "people", "Pacientes"],
  ["programas", "leaf", "Programas ACT / DBT"],
  ["evaluaciones", "file", "Evaluaciones"],
  ["biblioteca", "book", "Biblioteca"],
  ["plantillas", "pen", "Plantillas"],
  ["resultados", "chart", "Resultados"],
  ["sesiones", "mic", "Sesiones virtuales"],
  ["cobros", "money", "Cobros y pagos"],
  ["indicadores", "chart", "Indicadores"],
  ["bitacora", "shield", "Bitácora"],
  ["uso", "file", "Declaración de uso"],
  ["config", "settings", "Configuración"],
];
const patientNav = [
  ["inicio", "home", "Mi espacio"],
  ["diario", "pen", "Mi diario"],
  ["programas", "leaf", "Mi plan"],
  ["agenda", "calendar", "Mis citas"],
  ["evaluaciones", "file", "Mis cuestionarios"],
  ["resultados", "chart", "Mi progreso"],
  ["documentos", "book", "Mis materiales"],
  ["sesiones", "mic", "Sesiones virtuales"],
  ["cobros", "money", "Mis pagos"],
  ["privacidad", "shield", "Mi privacidad"],
  ["config", "settings", "Mi cuenta"],
];
renderNav = function () {
  const nav = isPatient()
    ? patientNav
    : space === "social"
      ? [
          ["social", "heart", "Proyecto social"],
          ["uso", "file", "Declaración de uso"],
          ["bitacora", "shield", "Bitácora"],
        ]
      : clinicalNav;
  $("#nav").innerHTML =
    `<div class="nav-section">${isPatient() ? "MI ACOMPAÑAMIENTO" : space === "social" ? "COMUNIDAD" : "ESPACIO CLÍNICO"}</div>` +
    nav
      .map(
        ([key, icon, label]) =>
          `<button class="navBtn ${current === key ? "active" : ""}" onclick="go('${key}')" title="${label}" aria-label="${label}" ${current === key ? 'aria-current="page"' : ""}>${ico(icon)}<span>${label}</span></button>`,
      )
      .join("");
  $("#spaceSwitcher")?.classList.toggle("hidden", isPatient());
  document
    .querySelectorAll("[data-space]")
    .forEach((b) => b.classList.toggle("selected", b.dataset.space === space));
  $("#patientKit")?.classList.toggle("hidden", !isPatient());
};
function switchSpace(next) {
  space = next;
  go(next === "social" ? "social" : "inicio");
}
const inheritedGo = go;
go = function (v) {
  if (isPatient() && !patientNav.some((n) => n[0] === v) && v !== "kit")
    v = "inicio";
  current = v;
  renderNav();
  const extra = {
    inicio: homeView,
    social: socialView,
    diario: journalView,
    programas: programsView,
    uso: usageView,
    privacidad: privacyView,
    kit: patientKitView,
    bitacora: auditView,
  };
  if (extra[v]) {
    $("#page").innerHTML = extra[v]();
    window.scrollTo(0, 0);
  } else inheritedGo(v);
  $("#page").setAttribute("data-view", v);
  $("#page").setAttribute(
    "aria-label",
    document.querySelector("#page h1")?.textContent || v,
  );
  if (v === "expediente") audit("Consulta de expediente", pid);
  enhanceForms();
};
login = function () {
  evPage = "list";
  patientFilter = "Activo";
  patientQuery = "";
  space = "clinical";
  baseLogin();
  const s = settingsProfile();
  $("#username").textContent = isPatient() ? "Andrea López" : s.fullName;
  $("#avatar").textContent = isPatient() ? "AL" : settingsInitials(s.fullName);
  audit("Acceso a perfil de demostración");
  go("inicio");
};
const oldLogout = logout;
logout = function () {
  audit("Salida de perfil");
  stopLocalVoice?.();
  closeModal();
  oldLogout();
};
function enhanceForms() {
  document.querySelectorAll("input,select,textarea").forEach((el, i) => {
    if (!el.id) el.id = "field-" + i;
    const label = el
      .closest(".field,.c14-field,.hc16-field")
      ?.querySelector("label");
    if (label && !label.htmlFor) label.htmlFor = el.id;
    if (!el.getAttribute("aria-label") && !label && !el.labels?.length)
      el.setAttribute("aria-label", el.placeholder || el.name || el.id);
  });
}
function homeView() {
  if (isPatient()) return patientHome();
  const patients = mine(),
    active = patients.filter((p) => !p.closed && p.status === "Activo"),
    apps = data.appointments
      .filter(
        (a) =>
          a.owner === role && a.status === "Programada" && a.date >= todayISO(),
      )
      .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  const unread = patients.reduce(
    (n, p) =>
      n + (data.journal[p.id]?.entries || []).filter((e) => !e.read).length,
    0,
  );
  const plans = patients.filter((p) => data.programs[p.id]).length;
  const d = new Date();
  return (
    header(
      "CLÍNICA EL AMPARO",
      `Hola, ${esc(settingsProfile().fullName.split(" ")[0])}.`,
      "Un espacio para acompañar, escuchar y dar continuidad.",
      `<button class="btn primary" onclick="newPatient()">＋ Nuevo paciente</button>`,
    ) +
    `
 <div class="overview-grid"><section class="clock-card"><div class="card-eyebrow">TU DÍA, CON CALMA</div><div class="live-clock" id="liveClock">${new Intl.DateTimeFormat("es-MX", { timeZone: "America/Mexico_City", hour: "2-digit", minute: "2-digit", hour12: false }).format(d)}</div><p>${d.toLocaleDateString("es-MX", { timeZone: "America/Mexico_City", weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p><span class="clock-decoration">${ico("leaf", 84)}</span></section>
 <button class="metric-card" onclick="go('programas')"><span class="metric-icon">${ico("leaf")}</span><span>Planes activos</span><strong>${plans}</strong><small>Procesos de acompañamiento ${ico("arrow", 15)}</small></button>
 <button class="metric-card" onclick="go('agenda')"><span class="metric-icon peach">${ico("calendar")}</span><span>Consultas esta semana</span><strong>${apps.filter((a) => new Date(a.date + "T12:00:00") - new Date(todayISO() + "T12:00:00") < 7 * 86400000).length}</strong><small>${apps.length} programadas en total ${ico("arrow", 15)}</small></button>
 <button class="metric-card" onclick="go('pacientes')"><span class="metric-icon lilac">${ico("people")}</span><span>Pacientes en seguimiento</span><strong>${patients.filter((p) => ["Seguimiento", "Alto"].includes(p.risk)).length}</strong><small>${active.length} activos · ${unread} registro(s) nuevo(s) ${ico("arrow", 15)}</small></button></div>
 <div class="home-columns section"><section class="card schedule-card"><div class="section-title"><div><div class="eyebrow">CADA ENCUENTRO CUENTA</div><h2>Próximas consultas</h2></div><button class="text-btn" onclick="go('agenda')">Ver agenda ${ico("arrow", 16)}</button></div>${
   apps
     .slice(0, 4)
     .map(
       (a) =>
         `<button class="appointment-line" onclick="showAppointment('${a.id}')"><span class="appointment-time">${esc(a.time)}<small>${fmtDate(a.date)}</small></span><span class="appointment-person"><b>${esc(a.people.map(person).join(", "))}</b><small>${esc(a.type)} · ${esc(a.format)}</small></span><span class="dot-pill">${apptStatus(a)}</span>${ico("arrow", 17)}</button>`,
     )
     .join("") ||
   '<div class="empty">Tu agenda está libre. Programa una primera consulta.</div>'
 }</section>
 <section class="card follow-card"><div class="eyebrow">ENTRE SESIONES</div><h2>Dar seguimiento también es cuidar.</h2><p>Lo que cada persona comparte te ayuda a preparar el siguiente encuentro.</p>${patients
   .map((p) => {
     const n = (data.journal[p.id]?.entries || []).filter(
       (e) => !e.read,
     ).length;
     return `<button class="follow-row" onclick="openP('${p.id}');openPatientJournal()"><span class="avatar">${settingsInitials(p.name)}</span><span><b>${esc(p.name.split(" ").slice(0, 2).join(" "))}</b><small>${n ? n + " registro nuevo" : "Sin registros nuevos"}</small></span>${n ? '<span class="unread-dot"></span>' : ico("arrow", 16)}</button>`;
   })
   .join("")}</section></div>
 <div class="home-columns section"><section class="card"><div class="section-title"><h2>Mis pacientes</h2><button class="text-btn" onclick="go('pacientes')">Ver todos ${ico("arrow", 16)}</button></div>${patients.map((p) => `<button class="patient-home-row" onclick="openP('${p.id}')"><span class="avatar">${settingsInitials(p.name)}</span><span><b>${esc(p.name)}</b><small>${p.id} · ${age(p)} años</small></span>${tag(p.status)}${ico("arrow", 17)}</button>`).join("")}</section><section class="resource-card"><div class="eyebrow">A MANO PARA TU CONSULTA</div><h2>Un recurso para cada momento.</h2><p>Explora actividades, plantillas y sesiones de los programas ACT y DBT.</p><div class="btnrow"><button class="btn primary" onclick="go('biblioteca')">Explorar biblioteca ${ico("arrow", 16)}</button><button class="btn" onclick="go('programas')">Ver programas</button></div><div class="resource-tags"><span>ACT · 13 sesiones</span><span>DBT · 13 sesiones</span><span>Formatos clínicos</span></div></section></div>`
  );
}
setInterval(() => {
  if ($("#liveClock"))
    $("#liveClock").textContent = new Intl.DateTimeFormat("es-MX", {
      timeZone: "America/Mexico_City",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
}, 30000);
function patientHome() {
  const p = data.patients.find((p) => p.id === "PS-0001"),
    a = data.appointments
      .filter(
        (a) =>
          a.people.includes(p.id) &&
          a.status === "Programada" &&
          a.date >= todayISO(),
      )
      .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))[0];
  return (
    header(
      "TU ESPACIO DE ACOMPAÑAMIENTO",
      "Hola, Andrea.",
      "Tu proceso, a tu ritmo. Cada pequeño paso cuenta.",
      `<button class="btn soft" onclick="go('kit')">${ico("heart")} Mi kit ante las crisis</button>`,
    ) +
    `<section class="patient-welcome"><div><div class="eyebrow">UN MOMENTO PARA TI</div><h2>¿Cómo llegas hoy?</h2><p>Puedes escribir, reconocer cómo te sientes y compartirlo cuando estés lista.</p><button class="btn primary" onclick="go('diario')">Abrir mi diario ${ico("arrow", 17)}</button></div><div class="welcome-flower">${ico("leaf", 100)}</div></section><div class="three section"><section class="card"><span class="metric-icon">${ico("calendar")}</span><h3>Tu próxima cita</h3><p>${a ? fmtDate(a.date) + " · " + a.time : "Aún no hay una cita programada"}</p><button class="text-btn" onclick="go('agenda')">Ver mis citas →</button></section><section class="card"><span class="metric-icon peach">${ico("leaf")}</span><h3>Mi plan de tratamiento</h3><p>${data.programs[p.id]?.kind || "Plan por acordar"} · avances y materiales compartidos</p><button class="text-btn" onclick="go('programas')">Continuar mi plan →</button></section><section class="card"><span class="metric-icon lilac">${ico("shield")}</span><h3>Tu privacidad, clara</h3><p>Elige qué compartes con tu terapeuta.</p><button class="text-btn" onclick="go('privacidad')">Quién ve lo que escribo →</button></section></div><section class="card section"><h2>Mis actividades</h2>${patientActivities()}</section>`
  );
}
function journalRoot() {
  return (data.journal["PS-0001"] ??= {
    draft: { mood: "", text: "", emotion: "", intensity: 0, skill: "" },
    entries: [],
  });
}
function journalView() {
  const j = journalRoot(),
    d = j.draft;
  return (
    header(
      "ENTRE SESIONES",
      "Mi diario",
      "Un lugar para poner en palabras lo que estás viviendo.",
      `<button class="btn soft" onclick="go('kit')">${ico("heart")} Mi kit</button>`,
    ) +
    `<div class="journal-layout"><section class="card"><div class="section-title"><h2>¿Cómo llegas hoy?</h2><small>${fmtDate(todayISO())}</small></div><div class="mood-options">${["Difícil", "Regular", "Bien"].map((m, i) => `<button aria-label="${m}" aria-pressed="${d.mood === m}" class="mood ${d.mood === m ? "selected" : ""}" onclick="setMood('${m}')"><span>${["☁", "◒", "☀"][i]}</span>${m}</button>`).join("")}</div><label class="field-label" for="journalText">Lo que quiero contar</label><textarea id="journalText" class="journal-text" placeholder="Hoy me di cuenta de que…">${esc(d.text)}</textarea><details class="daily-card" open><summary>Mi tarjeta diaria · emociones y habilidades</summary><div class="formgrid">${inputField("Emoción principal", "journalEmotion", "text", d.emotion)}<div class="field"><label for="journalIntensity">Intensidad (0–10)</label><input type="number" min="0" max="10" id="journalIntensity" value="${d.intensity}"></div><div class="field wide"><label for="journalSkill">Habilidad que puse en práctica</label><input id="journalSkill" value="${esc(d.skill)}" placeholder="Por ejemplo: una pausa consciente"></div></div></details><p class="sharing-note">${ico("shield", 18)} Tu terapeuta leerá lo que envíes antes de tu próxima sesión. Los borradores no se muestran en su vista.</p><div class="btnrow"><button class="btn" onclick="saveJournal(false)">Guardar borrador</button><button class="btn primary" onclick="saveJournal(true)">Enviar a mi expediente ${ico("arrow", 17)}</button></div><p class="hint">No es un canal de atención inmediata. Usa únicamente información ficticia en este demo.</p></section><section><div class="card"><h2>Lo que he compartido</h2>${
      j.entries
        .slice()
        .reverse()
        .map(
          (e) =>
            `<article class="journal-entry"><div class="between flex"><b>${esc(e.mood)}</b><small>${fmtDate(e.date)}</small></div><p>${esc(e.text)}</p><small>${e.read ? "Leído por tu terapeuta" : "Enviado a tu expediente"}</small></article>`,
        )
        .join("") ||
      '<p class="muted">Tus registros enviados aparecerán aquí.</p>'
    }</div></section></div>`
  );
}
function captureJournal() {
  return {
    mood: journalRoot().draft.mood,
    text: $("#journalText").value.trim(),
    emotion: $("#journalEmotion").value.trim(),
    intensity: Number($("#journalIntensity").value),
    skill: $("#journalSkill").value.trim(),
  };
}
function setMood(m) {
  const draft = captureJournal();
  draft.mood = m;
  journalRoot().draft = draft;
  go("diario");
}
function saveJournal(send) {
  const d = captureJournal();
  if (!Number.isFinite(d.intensity) || d.intensity < 0 || d.intensity > 10)
    return notify("La intensidad debe estar entre 0 y 10");
  if (send && (!d.text || !d.mood))
    return notify("Selecciona cómo llegas hoy y escribe tu registro");
  const j = journalRoot();
  if (send) {
    j.entries.push({
      ...d,
      id: uid("J-"),
      date: new Date().toISOString(),
      read: false,
    });
    j.draft = { mood: "", text: "", emotion: "", intensity: 0, skill: "" };
    audit("Registro del paciente compartido", "PS-0001");
  } else j.draft = d;
  save();
  go("diario");
  notify(
    send
      ? "Registro compartido con tu terapeuta"
      : "Borrador guardado solo para ti",
  );
}
function openPatientJournal() {
  if (isPatient()) return;
  const entries = data.journal[pid]?.entries || [];
  modal(
    "Lo que escribió el paciente",
    `<p class="muted">${esc(pat().name)} · Solo registros enviados por la persona. Los borradores no se incluyen.</p>${
      entries
        .slice()
        .reverse()
        .map(
          (e) =>
            `<article class="journal-entry"><div class="between flex"><b>${esc(e.mood)}</b>${tag(e.read ? "Leído" : "Nuevo")}</div><small>${new Date(e.date).toLocaleString("es-MX")}</small><p>${esc(e.text)}</p><p class="muted">Emoción: ${esc(e.emotion || "No registrada")} · Intensidad: ${e.intensity}/10<br>Habilidad: ${esc(e.skill || "No registrada")}</p></article>`,
        )
        .join("") ||
      '<div class="empty">Todavía no hay registros compartidos.</div>'
    }`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="markJournalRead()">Marcar como leído</button>`,
  );
}
function markJournalRead() {
  (data.journal[pid]?.entries || []).forEach((e) => (e.read = true));
  audit("Lectura de registros compartidos", pid);
  closeModal();
  go(current);
  notify("Registros marcados como leídos");
}
function patientActivities() {
  return (
    (data.tasks["PS-0001"] || [])
      .map((t, i) =>
        c14Visible(t)
          ? `<article class="activity-item"><div class="between flex"><b>${esc(t.name)}</b>${tag(t.done ? "Realizada" : "Pendiente")}</div><p>${esc(t.instructions || "Realiza la actividad acordada con tu terapeuta y registra cómo te fue.")}</p><button class="btn soft" onclick="respondTask(${i})">${t.response ? "Ver / editar mi respuesta" : "Escribir respuesta"}</button></article>`
          : "",
      )
      .join("") ||
    '<p class="muted">Tu terapeuta aún no ha compartido actividades.</p>'
  );
}
function respondTask(i) {
  const t = data.tasks["PS-0001"]?.[i];
  if (!t || !c14Visible(t)) return;
  modal(
    esc(t.name),
    `<label class="field-label" for="taskResponse">Mi respuesta para mi terapeuta</label><textarea id="taskResponse" class="journal-text">${esc(t.response || "")}</textarea><p class="sharing-note">Tu respuesta enviada será visible para tu terapeuta.</p>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="saveTaskResponse(${i})">Enviar respuesta</button>`,
  );
}
function saveTaskResponse(i) {
  const t = data.tasks["PS-0001"][i],
    response = $("#taskResponse").value.trim();
  if (!response) return notify("Escribe tu respuesta");
  t.response = response;
  t.done = true;
  t.responseAt = new Date().toISOString();
  audit("Respuesta a actividad compartida", "PS-0001");
  closeModal();
  go(current);
  notify("Respuesta guardada y compartida");
}
function patientKitView() {
  const k = c14Store("PS-0001").kit;
  return (
    header(
      "A UN TOQUE",
      "Mi kit ante las crisis",
      "Recursos que has acordado con tu terapeuta.",
    ) +
    (k && c14Visible(k)
      ? `<div class="notice">Si hay peligro inmediato, busca atención de emergencia en tu localidad. Este kit no sustituye esa atención.</div><div class="kit-grid section">${c14KitAreas.map(([n, desc], i) => `<section class="card"><span class="kit-number">0${i + 1}</span><h2>${esc(n)}</h2><p>${esc(k.fields?.[n] || "Por completar en sesión.")}</p><small>${esc(desc)}</small></section>`).join("")}</div>`
      : '<div class="empty">Tu terapeuta todavía no ha compartido el kit. Podrán construirlo juntos en sesión.</div>')
  );
}
function privacyView() {
  return (
    header(
      "TU INFORMACIÓN",
      "Quién ve lo que escribo",
      "Un acuerdo claro para acompañarte con confianza.",
    ) +
    `<div class="two"><section class="card"><h2>Tu terapeuta puede ver</h2><p>Los registros que envías desde tu diario, tu tarjeta diaria, respuestas a actividades y cuestionarios.</p><p>Las notas internas del profesional no se muestran en el portal del paciente. Aquí aparecen únicamente los materiales que ha compartido contigo.</p></section><section class="card"><h2>Tus borradores</h2><p>El botón “Guardar borrador” conserva tu texto para que decidas después. “Enviar a mi expediente” lo incorpora a la vista del profesional en este demo.</p><p>Este sitio usa datos ficticios y almacenamiento de este navegador. Cambiar de perfil no es un inicio de sesión seguro.</p></section></div><section class="card section"><h2>Privacidad y solicitudes</h2><p>Para una implementación clínica, El Amparo debe definir al responsable, su aviso de privacidad, los canales de acceso, rectificación, cancelación y oposición, los plazos y el tratamiento de datos de menores. Este demo no recibe ni tramita solicitudes reales.</p><button class="btn" onclick="usageModal()">Consultar declaración de uso</button></section>`
  );
}
function usageText() {
  return `DECLARACIÓN DE USO DE SOFTWARE\nROMImente · Clínica El Amparo\nBorrador para revisión institucional · ${fmtDate(todayISO())}\n\n1. Objeto\nROMImente presenta una plataforma para organizar el expediente de psicología, acompañamiento terapéutico y proyecto social de Clínica El Amparo. Este documento describe el alcance de la demostración y no constituye una autorización para operar con información clínica real.\n\n2. Alcance de esta versión\nIncluye perfiles simulados de profesionales y paciente; admisión, historia clínica por edad, notas de evolución y SOAP, actividades, ACT/DBT, valoraciones pre/post, agenda, documentos, alta de servicio, cierre administrativo, pagos simulados e indicadores. El proyecto social es una propuesta inicial pendiente de validación institucional.\n\n3. Uso permitido\nExploración, presentación y pruebas con datos ficticios. El usuario de la demostración se compromete a no registrar nombres, documentos, audios ni información de pacientes reales.\n\n4. Datos y resguardo\nLos cambios se guardan en el navegador del dispositivo y no se sincronizan entre personas o equipos. Los archivos y grabaciones se guardan localmente. Borrar los datos del navegador elimina estos registros. La bitácora es demostrativa y editable desde las herramientas del navegador; no ofrece garantías de auditoría.\n\n5. Funciones simuladas\nLa selección de perfil no verifica identidad ni controla acceso clínico real. La asistencia automatizada y transcripción de ejemplo son simulaciones. Zoom, pagos, envío de mensajes, firmas y certificaciones no están conectados a servicios de producción. El dictado opcional depende del reconocimiento de voz del navegador y puede usar el servicio de su proveedor.\n\n6. Responsabilidad profesional\nLa valoración, diagnóstico, intervención, interpretación de instrumentos, consentimiento y validación de documentos corresponden al profesional responsable. Los instrumentos externos se registran por resultados y no se reproducen cuadernillos licenciados. El sistema no sustituye el juicio clínico ni presta atención de emergencia.\n\n7. Antes de uso clínico\nSe requiere acordar y verificar autenticación real, permisos en servidor, base de datos protegida, respaldos, manejo de menores, retención, aviso de privacidad, consentimientos, firma aplicable, gestión de incidentes y revisión institucional y jurídica del sistema. No se declara cumplimiento normativo o certificación a partir de este demo.\n\n8. Aceptación institucional (pendiente)\nResponsable de Clínica El Amparo: ____________________\nResponsable técnico: ____________________\nVersión y fecha autorizadas: ____________________\nObservaciones: ____________________\nFirmas: ____________________\n\nDocumento de trabajo. Completar y aprobar por las personas responsables antes de su adopción.`;
}
function usageView() {
  return (
    header(
      "CLÍNICA EL AMPARO",
      "Declaración de uso de software",
      "Borrador institucional editable antes de su adopción.",
      `<button class="btn" onclick="downloadUsage()">Descargar texto</button><button class="btn primary" onclick="printUsage()">Imprimir / PDF</button>`,
    ) +
    `<section class="document-page"><span class="pill amber">BORRADOR · DEMOSTRACIÓN</span><pre>${esc(usageText())}</pre></section>`
  );
}
function usageModal() {
  modal(
    "Declaración de uso",
    `<pre class="readable-pre">${esc(usageText())}</pre>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="downloadUsage()">Descargar declaración</button>`,
  );
}
function downloadBlob(content, name, type = "text/plain;charset=utf-8") {
  const u = URL.createObjectURL(new Blob([content], { type })),
    a = document.createElement("a");
  a.href = u;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}
function downloadUsage() {
  downloadBlob(usageText(), "Declaracion-de-uso-ROMImente-El-Amparo.txt");
}
function printUsage() {
  printPage(
    "Declaración de uso · Clínica El Amparo",
    `<pre>${esc(usageText())}</pre>`,
  );
}
function auditView() {
  return (
    header(
      "TRAZABILIDAD DEL DEMO",
      "Bitácora de actividad",
      "Eventos locales. No es una auditoría clínica inmutable.",
    ) +
    `<section class="card tableWrap"><table><thead><tr><th>Fecha y hora</th><th>Perfil</th><th>Acción</th><th>Referencia</th></tr></thead><tbody>${data.audit
      .filter((e) => e.actor === role)
      .map(
        (e) =>
          `<tr><td>${new Date(e.at).toLocaleString("es-MX")}</td><td>${esc(e.actor)}</td><td>${esc(e.action)}</td><td>${esc(e.subject)}</td></tr>`,
      )
      .join("")}</tbody></table></section>`
  );
}
function resetDemo() {
  modal(
    "Restablecer demostración",
    "<p>Se eliminarán los datos ficticios, archivos y grabaciones de este demo en este navegador. Esta acción no modifica ningún expediente externo.</p>",
    '<button class="btn" onclick="closeModal()">Conservar datos</button><button class="btn danger" onclick="performReset()">Restablecer datos del demo</button>',
  );
}
function performReset() {
  localStorage.removeItem(SKEY);
  indexedDB.deleteDatabase("romimente-demo-files");
  location.reload();
}
// Bootstrap the shell; same clinical visual identity as the supplied prototype.
$("#login .loginArt").innerHTML =
  `<div class="login-brand">ROMI<span>mente</span></div><div class="login-copy"><span class="login-kicker">CLÍNICA EL AMPARO</span><h1>El cuidado empieza<br>por escuchar.</h1><p>Un espacio que conecta la atención psicológica, el acompañamiento y la comunidad.</p></div><div class="login-orbit">${ico("leaf", 160)}</div><div class="login-bottom"><span>Psicología con sentido humano.</span><span>01 / DEMO</span></div>`;
$("#login .loginForm").innerHTML =
  `<div class="eyebrow">BIENVENIDO A TU ESPACIO</div><h2>Todo tu acompañamiento,<br>en un mismo lugar.</h2><p class="muted">Explora la experiencia de ROMImente.</p><label for="role">Elige un perfil de demostración</label><select id="role"><option value="psi1">Elena Ríos · Psicóloga</option><option value="psi2">Daniel Mora · Psicólogo</option><option value="patient">Andrea López · Paciente</option></select><div class="profile-description">${ico("shield", 20)}<span>Perfiles y expedientes ficticios.<br>Los cambios se guardan en este navegador.</span></div><button class="btn primary login-submit" onclick="login()">Entrar al demo ${ico("arrow", 19)}</button><button class="text-btn" onclick="usageModal()">Declaración de uso de software ↗</button><div class="login-disclaimer">Versión de demostración · No ingreses información de pacientes reales.</div>`;
$(".sidebar .brand").insertAdjacentHTML(
  "afterend",
  `<div class="clinic-label">CLÍNICA EL AMPARO</div><div id="spaceSwitcher" class="space-switcher"><button class="selected" data-space="clinical" onclick="switchSpace('clinical')">Consulta</button><button data-space="social" onclick="switchSpace('social')">Proyecto social</button></div>`,
);
$(".main").insertAdjacentHTML(
  "afterbegin",
  `<div class="app-topbar"><span><span class="live-dot"></span> Espacio de demostración</span><div><button id="patientKit" class="text-btn hidden" onclick="go('kit')">${ico("heart", 17)} Mi kit</button><button class="text-btn" onclick="resetDemo()" title="Restablecer datos ficticios">Restablecer demo</button></div></div>`,
);
$("#toast").setAttribute("role", "status");
$("#toast").setAttribute("aria-live", "polite");
const oldModal = modal;
let modalOpener;
modal = function (title, body, footer) {
  modalOpener = document.activeElement;
  oldModal(title, body, footer);
  const box = $(".modalBox");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", title.replace(/<[^>]*>/g, ""));
  enhanceForms();
  box.querySelector("input,textarea,select,button")?.focus();
};
const inheritedClose = closeModal;
closeModal = function () {
  inheritedClose();
  modalOpener?.focus?.();
};
document.addEventListener("keydown", (e) => {
  const box = $(".modalBox");
  if (!box) return;
  if (e.key === "Escape") {
    closeModal();
    return;
  }
  if (e.key === "Tab") {
    const a = [
      ...box.querySelectorAll("button,input,select,textarea,a[href]"),
    ].filter((x) => !x.disabled && x.offsetParent !== null);
    if (!a.length) return;
    if (e.shiftKey && document.activeElement === a[0]) {
      e.preventDefault();
      a.at(-1).focus();
    } else if (!e.shiftKey && document.activeElement === a.at(-1)) {
      e.preventDefault();
      a[0].focus();
    }
  }
});
