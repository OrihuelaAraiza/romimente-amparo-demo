/* ROMImente · prototipo sin backend. EXCLUSIVAMENTE INFORMACIÓN FICTICIA. */
const seed = [
  {
    id: "PS-0001",
    name: "Andrea López Martínez",
    dob: "2002-04-14",
    sex: "Femenino",
    gender: "Mujer",
    civil: "Soltera",
    occupation: "Estudiante",
    diagnosis: "En evaluación",
    emergency: "María Martínez",
    phone: "222 000 1001",
    type: "adulto",
    owner: "psi1",
    status: "Activo",
    risk: "Bajo",
    last: "24 sep 2026",
    reason: "Ansiedad y regulación emocional",
    scores: [19, 16, 13, 10],
    planEnd: "2026-10-09",
  },
  {
    id: "PS-0002",
    name: "Mateo Torres Díaz",
    dob: "2010-01-19",
    sex: "Masculino",
    gender: "Hombre",
    civil: "No aplica",
    occupation: "Estudiante",
    diagnosis: "En evaluación",
    emergency: "Paola Díaz (tutora)",
    phone: "222 000 1002",
    type: "adolescente",
    owner: "psi2",
    status: "Activo",
    risk: "Seguimiento",
    last: "23 sep 2026",
    reason: "Estrés académico y sueño",
    scores: [21, 18, 17],
    planEnd: "2026-10-02",
  },
  {
    id: "PS-0003",
    name: "Lucía Vega Ramos",
    dob: "1994-05-07",
    sex: "Femenino",
    gender: "Mujer",
    civil: "Casada",
    occupation: "Docente",
    diagnosis: "En evaluación",
    emergency: "Carlos Vega",
    phone: "222 000 1003",
    type: "adulto",
    owner: "psi1",
    status: "Activo",
    risk: "Bajo",
    last: "22 sep 2026",
    reason: "Adaptación a cambios vitales",
    scores: [16, 12, 11],
    planEnd: "2026-11-04",
  },
  {
    id: "PS-0004",
    name: "Javier Solís Mora",
    dob: "1998-03-22",
    sex: "Masculino",
    gender: "Hombre",
    civil: "Soltero",
    occupation: "Diseñador",
    diagnosis: "Proceso concluido",
    emergency: "Ana Mora",
    phone: "222 000 1004",
    type: "adulto",
    owner: "psi2",
    status: "Alta",
    risk: "Bajo",
    last: "18 sep 2026",
    reason: "Proceso concluido",
    scores: [17, 12, 8, 6],
    planEnd: "2026-09-18",
  },
];
const initialAppointments = [
  {
    id: "A1",
    date: "2026-09-28",
    time: "09:00",
    duration: 50,
    people: ["PS-0001"],
    type: "Seguimiento",
    format: "Presencial",
    owner: "psi1",
    status: "Programada",
  },
  {
    id: "A2",
    date: "2026-09-28",
    time: "11:30",
    duration: 50,
    people: ["PS-0003"],
    type: "Sesión",
    format: "Virtual",
    owner: "psi1",
    status: "Programada",
  },
  {
    id: "A3",
    date: "2026-09-28",
    time: "16:00",
    duration: 50,
    people: ["PS-0002"],
    type: "Seguimiento",
    format: "Presencial",
    owner: "psi2",
    status: "Programada",
  },
  {
    id: "A4",
    date: "2026-09-29",
    time: "10:00",
    duration: 60,
    people: ["PS-0001"],
    type: "Evaluación",
    format: "Virtual",
    owner: "psi1",
    status: "Programada",
  },
  {
    id: "A5",
    date: "2026-09-30",
    time: "12:00",
    duration: 50,
    people: ["PS-0002"],
    type: "Sesión",
    format: "Virtual",
    owner: "psi2",
    status: "Programada",
  },
];
const startData = {
  patients: seed,
  appointments: initialAppointments,
  fields: {},
  notes: {},
  docs: {},
  evaluations: {},
  tasks: {
    "PS-0001": [
      {
        name: "Registro de emociones",
        date: "2026-09-15",
        done: true,
        positive: "Identificó situaciones que aumentaban su ansiedad.",
      },
      {
        name: "Práctica de respiración",
        date: "2026-09-20",
        done: true,
        positive:
          "Completó cuatro prácticas y registró una mejor autorregulación percibida.",
      },
      { name: "Acción opuesta", date: "2026-09-28", done: false, positive: "" },
    ],
    "PS-0002": [
      {
        name: "Registro de situaciones estresantes",
        date: "2026-09-28",
        done: false,
        positive: "",
      },
    ],
  },
  risk: {},
  recordings: {},
  charges: [
    {
      id: "CO-1001",
      patient: "PS-0001",
      appointment: "A1",
      label: "Sesión individual · seguimiento",
      amount: 700,
      paid: 0,
      date: "2026-09-28",
      due: "2026-09-30",
      status: "Pendiente",
      method: "Sin registrar",
      owner: "psi1",
      link: "PAGO-DEMO-1001",
    },
    {
      id: "CO-1002",
      patient: "PS-0003",
      appointment: "A2",
      label: "Paquete de 4 sesiones",
      amount: 2600,
      paid: 1300,
      date: "2026-09-28",
      due: "2026-10-02",
      status: "Parcial",
      method: "Transferencia (demo)",
      owner: "psi1",
      link: "PAGO-DEMO-1002",
    },
    {
      id: "CO-1003",
      patient: "PS-0002",
      appointment: "A3",
      label: "Evaluación inicial",
      amount: 800,
      paid: 800,
      date: "2026-09-28",
      due: "2026-09-28",
      status: "Pagado",
      method: "Efectivo (demo)",
      owner: "psi2",
      link: "PAGO-DEMO-1003",
    },
  ],
};
const safeGet = (k) => {
  try {
    return window.localStorage.getItem(k);
  } catch (e) {
    return null;
  }
};
const safeSet = (k, v) => {
  try {
    window.localStorage.setItem(k, v);
  } catch (e) {}
};
const SKEY = "romimente_amparo_demo_v1";
let data;
try {
  data = JSON.parse(safeGet(SKEY)) || JSON.parse(JSON.stringify(startData));
} catch (e) {
  data = JSON.parse(JSON.stringify(startData));
}
let role = "psi1",
  current = "inicio",
  pid = "PS-0001",
  tab = "ficha",
  scale = "GAD7",
  scaleTarget = "PS-0001",
  assessmentMode = "clinico",
  docType = "Consentimiento informado",
  recActive = false,
  search = "",
  cfgTab = "perfil",
  accountTab = "profile";
const $ = (s) => document.querySelector(s),
  esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const save = () => safeSet(SKEY, JSON.stringify(data)),
  isPatient = () => role === "patient",
  age = (p) => {
    if (!p.dob) return 0;
    const now = new Date();
    const b = new Date(p.dob + "T12:00:00");
    return Math.max(
      0,
      now.getFullYear() -
        b.getFullYear() -
        (now.getMonth() < b.getMonth() ||
        (now.getMonth() === b.getMonth() && now.getDate() < b.getDate())
          ? 1
          : 0),
    );
  };
const mine = () =>
    data.patients.filter((p) =>
      isPatient() ? p.id === "PS-0001" : p.owner === role,
    ),
  pat = () => data.patients.find((p) => p.id === pid),
  patientsAllowed = () => mine().filter((p) => p.status !== "Alta"),
  person = (id) => data.patients.find((p) => p.id === id)?.name || id;
const tag = (x) =>
  `<span class="pill ${["Seguimiento", "Pendiente", "Programada"].includes(x) ? "amber" : ["Alto", "Cancelada"].includes(x) ? "rose" : x === "Alta" ? "gray" : ""}">${esc(x)}</span>`;
function notify(msg) {
  const x = $("#toast");
  x.textContent = msg;
  x.style.display = "block";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => (x.style.display = "none"), 3600);
}
function baseLogin() {
  role = $("#role").value;
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#app").classList.toggle("patientMode", isPatient());
  pid = isPatient() ? "PS-0001" : mine()[0]?.id || "PS-0001";
  $("#username").textContent =
    role === "psi1"
      ? "Elena Ríos"
      : role === "psi2"
        ? "Daniel Mora"
        : "Andrea López";
  $("#userrole").textContent = isPatient()
    ? "Portal del paciente"
    : "Psicología clínica";
  $("#avatar").textContent =
    role === "psi1" ? "ER" : role === "psi2" ? "DM" : "AL";
  $("#romiChat").classList.add("hidden");
  $("#romiChatContent").innerHTML = "";
  $("#romiLaunch").setAttribute("aria-expanded", "false");
  renderNav();
  go("inicio");
}
function logout() {
  $("#login").classList.remove("hidden");
  $("#app").classList.add("hidden");
  recActive = false;
}
const navPro = [
  ["inicio", "⌂", "Dashboard"],
  ["agenda", "▦", "Agenda"],
  ["pacientes", "♙", "Pacientes"],
  ["evaluaciones", "▧", "Evaluaciones"],
  ["biblioteca", "☰", "Biblioteca"],
  ["plantillas", "▤", "Plantillas de actividades"],
  ["resultados", "◫", "Resultados clínicos"],
  ["sesiones", "◉", "Sesiones virtuales"],
  ["cobros", "＄", "Cobros y pagos"],
  ["indicadores", "▥", "Indicadores"],
  ["config", "⚙", "Configuración"],
];
const navPat = [
  ["inicio", "⌂", "Mi espacio"],
  ["agenda", "▦", "Mis citas"],
  ["evaluaciones", "▧", "Mis cuestionarios"],
  ["resultados", "◫", "Mi progreso"],
  ["sesiones", "◉", "Sesiones virtuales"],
  ["documentos", "▣", "Mis documentos"],
  ["cobros", "＄", "Mis pagos"],
  ["config", "⚙", "Mi cuenta"],
];
function renderNav() {
  $("#nav").innerHTML = (isPatient() ? navPat : navPro)
    .map(
      (n) =>
        `<button class="navBtn ${current === n[0] ? "active" : ""}" onclick="go('${n[0]}')"><i>${n[1]}</i>${n[2]}</button>`,
    )
    .join("");
}
function go(v) {
  if (v === "ia") {
    toggleAssistant(true);
    return;
  }
  current = v;
  renderNav();
  const f = {
    inicio: dashboard,
    agenda: agenda,
    pacientes: patientsView,
    expediente: expediente,
    evaluaciones: evaluationsView,
    biblioteca: biblioteca,
    plantillas: activityTemplatesView,
    resultados: resultados,
    sesiones: sesiones,
    indicadores: indicadores,
    config: config,
    documentos: documentos,
    ia: aiView,
    cobros: paymentsView,
  };
  $("#page").innerHTML = (f[v] || dashboard)();
  if (v === "expediente" && detailPane === "historia") hc16ConditionalUpdate();
  window.scrollTo(0, 0);
}
function header(k, title, sub, buttons = "") {
  return `<div class="top"><div><div class="eyebrow">${k}</div><h1>${title}</h1><div class="muted">${sub}</div></div><div class="btnrow">${buttons}</div></div>`;
}
const opt = (arr) =>
  arr
    .map(
      (x) => `<option value="${esc(x.id ?? x)}">${esc(x.name ?? x)}</option>`,
    )
    .join("");
function selector(selected = pid) {
  return `<select id="patientSelector" class="btn compact" onchange="pid=this.value;tab='ficha';go(current)">${mine()
    .map(
      (p) =>
        `<option value="${p.id}" ${selected === p.id ? "selected" : ""}>${p.id} · ${esc(p.name)}</option>`,
    )
    .join("")}</select>`;
}
function dashboardClock(dateObj) {
  return (
    String(dateObj.getHours()).padStart(2, "0") +
    ":" +
    String(dateObj.getMinutes()).padStart(2, "0")
  );
}
function dashboardEsDate(d) {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return {
    dayName: days[d.getDay()],
    day: d.getDate(),
    monthName: months[d.getMonth()],
    year: d.getFullYear(),
    short: `${days[d.getDay()].slice(0, 3)} ${d.getDate()} ${months[d.getMonth()].slice(0, 3)}`,
  };
}
function parseShortEsDate(txt) {
  if (!txt) return null;
  const m = {
    ene: 0,
    feb: 1,
    mar: 2,
    abr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dic: 11,
  };
  let x = String(txt)
    .trim()
    .toLowerCase()
    .match(/(\d{1,2})\s+([a-záéíóú]{3})\w*\s+(\d{4})/i);
  if (!x) return null;
  let mon = (x[2] || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .slice(0, 3);
  return new Date(Number(x[3]), m[mon] ?? 0, Number(x[1]));
}
function dashboardMiniCalendar(dateObj) {
  const y = dateObj.getFullYear(),
    m = dateObj.getMonth(),
    today = dateObj.getDate();
  const first = new Date(y, m, 1);
  const start = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const prevDays = new Date(y, m, 0).getDate();
  let cells = [];
  for (let i = 0; i < 42; i++) {
    let num,
      cls = "miniDay";
    if (i < start) {
      num = prevDays - start + i + 1;
      cls += " muted";
    } else if (i >= start + daysInMonth) {
      num = i - (start + daysInMonth) + 1;
      cls += " muted";
    } else {
      num = i - start + 1;
      if (num === today) cls += " active";
    }
    cells.push(`<div class="${cls}">${num}</div>`);
  }
  return `<div class="miniMonth"><div class="miniMonthHead"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div><div class="miniMonthGrid">${cells.join("")}</div></div>`;
}
function dashboard() {
  if (isPatient())
    return (
      header(
        "PORTAL DEL PACIENTE",
        "Mi espacio",
        "Tus citas, cuestionarios y actividades en un mismo lugar.",
      ) +
      `<div class="grid"><div class="card"><div class="statlabel">PRÓXIMA CITA</div><div class="stat" style="font-size:23px">29 sep</div><p>10:00 h · Virtual</p><button class="btn soft" onclick="go('agenda')">Consultar</button></div><div class="card"><div class="statlabel">MIS ACTIVIDADES</div><div class="stat">${(data.tasks["PS-0001"] || []).filter(c14Visible).length}</div><p>Asignadas por psicología</p><button class="btn soft" onclick="go('documentos')">Mis materiales</button></div><div class="card"><div class="statlabel">EVALUACIONES</div><div class="stat">${Object.values(data.evaluations).filter((e) => e.patient === "PS-0001").length}</div><p>Registradas</p><button class="btn soft" onclick="go('evaluaciones')">Responder</button></div><div class="card"><div class="statlabel">MI EVOLUCIÓN</div><div class="stat">4</div><p>Seguimientos ilustrativos</p><button class="btn soft" onclick="go('resultados')">Consultar</button></div></div><div class="two section"><div class="card"><h2>Próximas sesiones</h2>${listApp(data.appointments.filter((a) => a.people.includes("PS-0001") && a.status === "Programada"))}</div><div class="card"><h2>Mis actividades</h2>${c14PatientTaskList("PS-0001")}<div class="notice section">Este portal no sustituye atención urgente. Si hay peligro inmediato, utiliza los servicios de emergencia de tu localidad.</div></div></div>`
    );
  const today = new Date();
  const d = dashboardEsDate(today);
  const pp = mine();
  const apps = data.appointments.filter(
    (a) => a.owner === role && a.status === "Programada",
  );
  const active = pp.filter((p) => p.status === "Activo").length;
  const activePlans = pp.filter(
    (p) => p.status === "Activo" && p.planEnd,
  ).length;
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);
  const consults = apps.filter((a) => {
    let dt = new Date(a.date + "T" + (a.time || "00:00"));
    return dt >= weekStart && dt <= weekEnd;
  }).length;
  const follow = pp.filter((p) =>
    ["Seguimiento", "Alto"].includes(p.risk),
  ).length;
  const priority = [...pp].sort((a, b) => {
    const ra = (v) => (v === "Alto" ? 2 : v === "Seguimiento" ? 1 : 0);
    return (
      ra(b.risk) - ra(a.risk) ||
      (parseShortEsDate(a.last) || 0) - (parseShortEsDate(b.last) || 0)
    );
  })[0];
  const lastDt = parseShortEsDate(priority?.last);
  const daysNoContact = lastDt
    ? Math.max(0, Math.round((today - lastDt) / 86400000))
    : 0;
  const initials = (priority?.name || "P")
    .split(/\s+/)
    .map((x) => x[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const priorityText = daysNoContact
    ? `${daysNoContact} día${daysNoContact === 1 ? "" : "s"} sin contacto — conviene seguimiento`
    : "Revisar seguimiento clínico";
  const nextApps = apps
    .slice()
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
    .slice(0, 4);
  return `<div class="dashHero"><div><h1>Buenos días, ${esc($("#username").textContent)}.</h1><div class="muted">${active} paciente${active === 1 ? "" : "s"} activo${active === 1 ? "" : "s"} · ${follow} requiere${follow === 1 ? "" : "n"} seguimiento. · ${d.short}</div></div><div class="dashActions"><button class="btn ghostGreen" onclick="toggleAssistant(true)">✧ Ideas con IA</button><button class="btn primary" onclick="newPatient()">＋ Nuevo paciente</button></div></div><div class="psychBoard"><div class="pbCard pbTone1 pbTime"><div class="pbLabel">Hora actual</div><div class="pbStat">${dashboardClock(today)}</div><div class="pbSub"><b style="display:block;color:#55674e;font-size:17px;margin-bottom:3px;text-transform:capitalize">${d.dayName}</b>${d.day} de ${d.monthName} de ${d.year}</div></div><div class="pbCard pbTone2 pbPlans"><div class="pbLabel">Planes activos</div><div class="pbStat">${activePlans}</div><div class="pbSub">Pacientes con plan de intervención terapéutica vigente.</div><a class="pbLink" href="javascript:go('pacientes')">Ver pacientes →</a></div><div class="pbCard pbTone1 pbConsults"><div class="pbLabel">Consultas</div><div class="pbStat">${consults}</div><div class="pbSub"><b>${consults}</b> esta semana<br><b>${apps.length}</b> programadas en total</div></div><div class="pbCard pbTone3 pbNew"><div class="pbLabel">Pacientes en seguimiento</div><div class="pbStat">${follow}</div><div class="pbSub">Casos con revisión clínica o contacto prioritario.</div><a class="pbLink" href="javascript:go('resultados')">Ver seguimiento →</a></div><div class="pbCard pbCal"><div class="pbTopline"><div><div class="pbMonthTitle">${d.monthName} de ${d.year}</div></div><div class="pbSub"><b>${apps.filter((a) => a.date.startsWith("2026-09")).length}</b> citas</div></div>${dashboardMiniCalendar(today)}<a class="pbLink" href="javascript:go('agenda')" style="margin-top:16px">Ver agenda →</a></div><div class="pbCard pbRef"><div class="pbLabel">Referencia clínica rápida</div><input class="search" id="dashQuery" placeholder="Instrumento, diagnóstico, técnica o tarea terapéutica..." onfocus="go('biblioteca')" oninput="filterDashboard()"><div class="pbRefHelp">Consulta cuestionarios, escalas, plantillas y recursos del repertorio sin salir del panel.</div></div><div class="pbCard pbPriority"><div class="priorityWrap"><div class="priorityIdentity"><div class="priorityAvatar">${esc(initials)}</div><div class="priorityMeta"><div class="priorityFlag">⚡ Acción priorizada</div><h3>${esc(priority?.name || "Sin paciente")}</h3><div class="muted">${esc(priorityText)}</div></div></div><div class="btnrow"><button class="btn primary" onclick="openP('${priority?.id || pp[0]?.id || ""}','notas')">Contactar</button><button class="btn" onclick="openP('${priority?.id || pp[0]?.id || ""}')">Expediente →</button></div></div></div><div class="pbCard pbUpcoming"><div class="toolbar"><h2>Próximas citas</h2><button class="inlineLink" onclick="go('agenda')">Calendario →</button></div><div class="nextList">${nextApps.map((a) => `<div class="nextItem"><div class="nextTime">${esc(a.date)}<br><small>${esc(a.time)} h</small></div><div class="nextBody"><b>${esc(a.type)} · ${esc(a.format)}</b><div class="muted">${a.people.map(person).map(esc).join(", ")}</div></div>${tag(a.status)}</div>`).join("") || '<p class="muted">Sin citas próximas.</p>'}</div></div><div class="pbCard pbPatients"><div class="toolbar"><h2>Mis pacientes</h2><button class="inlineLink" onclick="go('pacientes')">Ver todos →</button></div><div class="tinyHead"><div>Paciente</div><div>Estado</div><div>Riesgo</div><div></div></div><div id="dashRows">${pp.map(rowPatient).join("")}</div></div></div>`;
}
function rowPatient(p) {
  return `<div class="tinyRow"><div><b>${esc(p.name)}</b><div class="muted">${esc(p.id)} · ${esc(p.reason || p.diagnosis || "")}</div></div><div>${tag(p.status)}</div><div><span class="tinyRisk ${p.risk === "Seguimiento" || p.risk === "Alto" ? "warn" : ""}">${esc(p.risk)}</span></div><div><button class="btn" onclick="openP('${p.id}')">Abrir</button></div></div>`;
}
function filterDashboard() {
  const q = ($("#dashQuery")?.value || "").toLowerCase();
  const holder = $("#dashRows");
  if (!holder) return;
  holder.innerHTML =
    mine()
      .filter((p) =>
        [p.name, p.id, p.diagnosis, p.reason].some((s) =>
          String(s || "")
            .toLowerCase()
            .includes(q),
        ),
      )
      .map(rowPatient)
      .join("") || '<div class="empty">No se encontraron pacientes.</div>';
}

function listApp(arr) {
  return arr.length
    ? arr
        .map(
          (a) =>
            `<div class="listitem"><div><b>${esc(a.date)} · ${esc(a.time)}</b><br><small>${a.type} · ${a.format} · ${a.people.map(person).join(", ")}</small></div>${tag(a.status)}</div>`,
        )
        .join("")
    : '<p class="muted">No hay citas para mostrar.</p>';
}

function toggle(id) {
  const e = $("#" + id);
  if (e) e.classList.toggle("hidden");
}
function selectField(label, id, options) {
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}">${options.map((x) => `<option>${esc(x)}</option>`).join("")}</select></div>`;
}
function inputField(label, id, type = "text", value = "") {
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${type}" value="${esc(value)}"></div>`;
}

const tabs = [
  ["ficha", "Ficha de identificación"],
  ["historia", "Historia clínica"],
  ["inicial", "Evaluación inicial"],
  ["plan", "Plan terapéutico"],
  ["notas", "Notas de evolución"],
  ["evaluaciones", "Psicometría pre / post"],
  ["riesgo", "Riesgo y alertas"],
  ["actividades", "Actividades"],
  ["documentos", "Documentos"],
  ["alta", "Alta psicológica"],
];

function expContentV13() {
  let p = pat(),
    d = data.fields[p.id] || {};
  if (tab === "ficha")
    return `<h2>Ficha de identificación</h2><p class="muted">Los campos de identidad se generan al registrar al paciente y se recuperan automáticamente en el expediente y los documentos.</p><div class="formgrid">${inputField("Número de expediente", "pf_id", "text", p.id)}${inputField("Nombre completo", "pf_name", "text", p.name)}${inputField("Fecha de nacimiento", "pf_dob", "date", p.dob)}${inputField("Edad (cálculo de demostración)", "pf_age", "text", age(p) + " años")}${inputField("Sexo", "pf_sex", "text", p.sex)}${inputField("Género", "pf_gender", "text", p.gender)}${inputField("Estado civil", "pf_civil", "text", p.civil)}${inputField("Ocupación", "pf_occupation", "text", p.occupation)}${inputField("Diagnóstico / formulación", "pf_diagnosis", "text", p.diagnosis)}${inputField("Contacto de emergencia, nombre", "pf_emergency", "text", p.emergency)}${inputField("Contacto de emergencia, teléfono", "pf_phone", "tel", p.phone)}${selectField("Estado del expediente", "pf_status", ["Activo", "Alta", "Suspendido"])}</div><div class="section"><button class="btn primary" onclick="saveIdentity()">Actualizar ficha de identificación</button></div><div class="notice section">La NOM-004-SSA3-2012 contempla datos de identificación y requisitos documentales del expediente; el folio PS-0001 es una convención interna demostrativa, no un código de numeración impuesto por la norma.</div>`;
  if (tab === "historia") {
    let adult = [
      "Motivo de consulta",
      "Problema actual e inicio",
      "Antecedentes personales y familiares",
      "Antecedentes médicos",
      "Antecedentes psicológicos y psiquiátricos",
      "Medicamentos y tratamientos",
      "Consumo de sustancias",
      "Dinámica familiar y red de apoyo",
      "Sueño y hábitos",
      "Historia escolar y laboral",
      "Exploración inicial y funcionamiento",
      "Situaciones de riesgo y factores protectores",
    ];
    let teen = [
      "Motivo de consulta expresado por adolescente",
      "Perspectiva de la madre, padre o tutor",
      "Responsable legal y datos de contacto",
      "Contexto escolar y social",
      "Antecedentes del desarrollo",
      "Antecedentes médicos y psicológicos",
      "Relaciones familiares y red de apoyo",
      "Sueño, hábitos y regulación emocional",
      "Privacidad, asentimiento y límites explicados",
      "Situaciones de riesgo y factores protectores",
    ];
    return `<div class="toolbar"><div><h2>Historia clínica · ${p.type}</h2><p class="muted">Plantilla diferenciada por etapa de vida.</p></div><button class="btn soft" onclick="toggle('histRec')">◎ Abrir grabadora auxiliar</button></div><div id="histRec" class="hidden">${recorderPanel("historia")}</div><div class="formgrid">${(p.type === "adolescente" ? teen : adult).map((n) => expField(n, d["hist_" + n] || "", "hist_")).join("")}</div><div class="section"><button class="btn primary" onclick="saveSection('hist_')">Guardar historia clínica</button></div>`;
  }
  if (tab === "inicial")
    return `<h2>Evaluación psicológica inicial</h2><div class="formgrid">${["Fecha de entrevista", "Profesional responsable", "Demanda de atención", "Observación clínica", "Instrumentos seleccionados", "Factores protectores", "Formulación clínica provisional", "Recomendaciones y derivación"].map((n) => expField(n, d["init_" + n] || "", "init_")).join("")}</div><button class="btn primary section" onclick="saveSection('init_')">Guardar evaluación</button>`;
  if (tab === "plan")
    return `<h2>Plan de intervención terapéutica</h2><div class="formgrid">${["Necesidades identificadas", "Objetivos acordados", "Enfoque terapéutico", "Frecuencia de sesiones", "Actividades previstas", "Indicadores para seguimiento", "Criterios de revisión", "Criterios de alta"].map((n) => expField(n, d["plan_" + n] || "", "plan_")).join("")}${inputField("Fecha prevista de revisión / culminación", "planEnd", "date", p.planEnd)}</div><button class="btn primary section" onclick="saveSection('plan_')">Guardar plan terapéutico</button>`;
  if (tab === "notas")
    return `<div class="toolbar"><div><h2>Notas de evolución</h2><p class="muted">Documenta una sesión, revisa el borrador generado y registra el plan siguiente.</p></div><button class="btn soft" onclick="toggle('noteRec')">◎ Dictado / grabadora</button></div><div id="noteRec" class="hidden">${recorderPanel("nota")}</div><div class="sheet"><div class="formgrid">${inputField("Fecha", "noteDate", "date", "2026-09-28")}${inputField("Número de sesión", "noteNumber", "number", String((data.notes[p.id] || []).length + 1))}${inputField("Objetivo de la sesión", "noteGoal")}${selectField("Modalidad", "noteMode", ["Presencial", "Virtual"])}<div class="field wide bigfield"><label>Resumen / evolución</label><textarea id="noteSummary" placeholder="Descripción clínica de la sesión"></textarea></div><div class="field wide bigfield"><label>Intervenciones y respuesta</label><textarea id="noteInterventions"></textarea></div><div class="field wide bigfield"><label>Plan para la siguiente sesión</label><textarea id="noteNext"></textarea></div></div><div class="btnrow section"><button class="btn primary" onclick="addNote()">Guardar borrador de nota</button><button class="btn" onclick="printReport()">Imprimir resumen</button></div></div><div class="timeline">${
      (data.notes[p.id] || [])
        .slice()
        .reverse()
        .map(
          (n) =>
            `<div class="note"><div class="notehead"><b>Sesión ${esc(n.num)} · ${esc(n.date)}</b>${tag(n.signed ? "Firmada" : "Borrador")}</div><p><b>Profesional:</b> ${esc(n.author || "Sin registrar")} · ${esc(n.time || "Hora no registrada")}</p><p><b>Objetivo:</b> ${esc(n.goal)}</p><p>${esc(n.summary)}</p><small>Plan próximo: ${esc(n.next)}</small>${!n.signed ? `<div class="section"><button class="btn" onclick="signNote('${n.id}')">Revisar y firmar (demo)</button></div>` : ""}</div>`,
        )
        .join("") || '<p class="muted">No hay notas nuevas registradas.</p>'
    }</div>`;
  if (tab === "evaluaciones")
    return `<div class="toolbar"><h2>Evaluaciones pre y post tratamiento</h2><button class="btn primary" onclick="scaleTarget=pid;go('evaluaciones')">+ Aplicar valoración</button></div>${evalList(p.id)}`;
  if (tab === "riesgo")
    return `<h2>Seguimiento de riesgo y alertas</h2><div class="notice warn">Los instrumentos de tamizaje no sustituyen una evaluación clínica de seguridad. Una respuesta relevante requiere revisión profesional y actuación según protocolo.</div><div class="formgrid section">${selectField("Nivel registrado", "riskLevel", ["Sin evaluar", "Bajo", "Seguimiento", "Alto"])}<div class="field"><label>Fecha de revisión</label><input type="date" id="riskDate" value="2026-09-28"></div><div class="field wide bigfield"><label>Hallazgos, factores de riesgo y protectores</label><textarea id="riskDetail">${esc(data.risk[p.id]?.detail || "")}</textarea></div><div class="field wide bigfield"><label>Medidas y plan de seguridad / derivación</label><textarea id="riskPlan">${esc(data.risk[p.id]?.plan || "")}</textarea></div></div><button class="btn primary" onclick="saveRisk()">Registrar revisión clínica</button>`;
  if (tab === "actividades")
    return `<div class="toolbar"><h2>Actividades dentro y fuera de sesión</h2><button class="btn primary" onclick="toggle('taskForm')">+ Nueva actividad</button></div><div class="sheet hidden" id="taskForm">${inputField("Actividad", "taskName")}<div class="field"><label>Comentario de seguimiento</label><textarea id="taskPositive"></textarea></div><button class="btn primary" onclick="addTask()">Asignar actividad</button></div>${taskList(p.id, false)}<div class="filebox"><b>Actividades escaneadas (simulación)</b><p class="muted tiny">Puedes seleccionar el archivo, pero la demo no lo carga en un servidor.</p><input type="file" onchange="notify('Archivo elegido: '+this.files[0]?.name)"></div>`;
  if (tab === "documentos") return documentos(true);
  if (tab === "alta")
    return `<h2>Alta del servicio de psicología</h2><p class="muted">Formato inspirado en el material documental recibido.</p><div class="formgrid">${["Fecha de egreso", "Motivo de alta", "Resumen del proceso", "Objetivos logrados", "Resultados de evaluaciones", "Indicaciones y seguimiento", "Profesional responsable"].map((n) => expField(n, d["alta_" + n] || "", "alta_")).join("")}</div><div class="section btnrow"><button class="btn primary" onclick="saveSection('alta_')">Guardar nota de alta</button><button class="btn" onclick="markDischarged()">Marcar expediente en alta</button></div>`;
  return "";
}
function expField(label, val, prefix) {
  return `<div class="field ${label.length > 26 ? "wide" : ""}"><label>${esc(label)}</label><textarea data-key="${esc(prefix + label)}">${esc(val)}</textarea></div>`;
}
function saveIdentity() {
  let p = pat();
  p.name = $("#pf_name").value.trim() || p.name;
  p.dob = $("#pf_dob").value;
  p.sex = $("#pf_sex").value;
  p.gender = $("#pf_gender").value;
  p.civil = $("#pf_civil").value;
  p.occupation = $("#pf_occupation").value;
  p.diagnosis = $("#pf_diagnosis").value;
  p.emergency = $("#pf_emergency").value;
  p.phone = $("#pf_phone").value;
  p.status = $("#pf_status").value;
  p.type = age(p) < 18 ? "adolescente" : "adulto";
  save();
  go("expediente");
  notify("Ficha actualizada; la información se reflejará en los documentos");
}
function saveSection(prefix) {
  let d = data.fields[pid] || {};
  document
    .querySelectorAll("[data-key]")
    .forEach((el) => (d[el.dataset.key] = el.value));
  data.fields[pid] = d;
  if (prefix === "plan_") pat().planEnd = $("#planEnd").value;
  save();
  notify("Borrador guardado (solo en este navegador)");
}
function addNote() {
  const goal = $("#noteGoal").value,
    summary = $("#noteSummary").value;
  if (!summary.trim()) {
    notify("Escribe un resumen de la sesión");
    return;
  }
  (data.notes[pid] ??= []).push({
    date: $("#noteDate").value,
    num: $("#noteNumber").value,
    goal,
    summary,
    interventions: $("#noteInterventions").value,
    next: $("#noteNext").value,
    mode: $("#noteMode").value,
    id: "N-" + Date.now(),
    author: $("#username").textContent,
    time: new Date().toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    signed: false,
  });
  save();
  go("expediente");
  notify("Borrador de nota registrado");
}
function signNote(id) {
  let n = (data.notes[pid] || []).find((x) => x.id === id);
  if (!n || n.signed) return;
  if (!confirm("Simular firma de esta nota tras revisión profesional?")) return;
  n.signed = true;
  n.signedAt = new Date().toISOString();
  save();
  go("expediente");
  notify("Nota marcada como firmada (solo demostración)");
}
function saveRisk() {
  pat().risk = $("#riskLevel").value;
  data.risk[pid] = {
    level: pat().risk,
    date: $("#riskDate").value,
    detail: $("#riskDetail").value,
    plan: $("#riskPlan").value,
  };
  save();
  go("expediente");
  notify("Seguimiento clínico registrado");
}
function markDischarged() {
  if (!confirm("¿Cambiar el estado del expediente ficticio a Alta?")) return;
  pat().status = "Alta";
  save();
  go("expediente");
}
function addTask() {
  let name = $("#taskName").value.trim();
  if (!name) return notify("Indica una actividad");
  (data.tasks[pid] ??= []).push({
    name,
    date: "2026-09-28",
    done: false,
    positive: $("#taskPositive").value,
  });
  save();
  go("expediente");
  notify("Actividad agregada");
}
function taskList(id, patientView) {
  let arr = data.tasks[id] || [];
  return arr.length
    ? arr
        .map(
          (t, i) =>
            `<div class="listitem"><div><b>${esc(t.name)}</b><br><small>${t.date} · ${t.done ? "Completada" : "Pendiente"}</small>${t.positive ? `<p class="muted tiny" style="margin:5px 0">${esc(t.positive)}</p>` : ""}</div><button class="btn ${t.done ? "soft" : ""}" onclick="toggleTask('${id}',${i})">${t.done ? "✓ Hecha" : "Marcar realizada"}</button></div>`,
        )
        .join("")
    : '<div class="empty">Aún no hay actividades asignadas.</div>';
}
function toggleTask(id, i) {
  if (isPatient() && id !== "PS-0001") return;
  data.tasks[id][i].done = !data.tasks[id][i].done;
  save();
  go(current);
  notify("Actividad actualizada");
}
function recorderPanel(place) {
  return `<div class="voice section"><div class="lbl">Grabadora auxiliar · ${place === "historia" ? "Historia clínica" : "Nota de evolución"}</div><div class="wave">▂ ▆ ▃ ▇ ▄ ▆ ▂</div><p>Transcripción a borrador editable. La grabación no debe convertirse automáticamente en una nota firmada.</p><div class="notice">La demo no activa el micrófono ni guarda audio. Una versión real necesita consentimiento específico por cada grabación, indicador visible, gestión de acceso y conservación.</div><div class="field" style="margin:14px auto;max-width:480px"><label><input type="checkbox" id="recordConsent"> Confirmo que existe autorización específica para esta sesión.</label></div><div class="btnrow" style="justify-content:center"><button class="btn primary" onclick="demoRecording()">◉ Iniciar simulación</button><button class="btn" onclick="notify('Simulación detenida: no se capturó audio')">Detener</button></div><div class="field" style="margin-top:13px"><label>Texto transcrito / dictado de demostración (editable)</label><textarea id="voiceDraft" placeholder="Aquí aparecería la transcripción, pendiente de revisión profesional."></textarea></div><button class="btn soft" onclick="copyVoice('${place}')">Incorporar al borrador</button></div>`;
}
function demoRecording() {
  if (!$("#recordConsent")?.checked)
    return notify("Primero confirma la autorización específica");
  $("#voiceDraft").value =
    "[Transcripción de demostración] La persona describe dificultades durante la semana. La profesional revisa el objetivo de la sesión y acuerda una actividad para el seguimiento.";
  notify("Ejemplo de transcripción generado. No se activó ningún micrófono.");
}
function copyVoice(place) {
  let v = $("#voiceDraft")?.value;
  if (!v) return notify("No hay texto para incorporar");
  if (place === "nota") {
    $("#noteSummary").value = ($("#noteSummary").value + "\n" + v).trim();
  } else {
    let first = document.querySelector('[data-key^="hist_"]');
    if (first) first.value = (first.value + "\n" + v).trim();
  }
  notify("Texto añadido como borrador editable");
}
// Las preguntas se adaptan al español a partir de los materiales facilitados. Revisar licencia/versiones antes de uso clínico.
const instruments = {
  GAD7: {
    name: "GAD-7 · Ansiedad generalizada",
    sub: "Durante las últimas dos semanas, ¿con qué frecuencia te han molestado los siguientes problemas?",
    choices: [
      "Nunca",
      "Varios días",
      "Más de la mitad de los días",
      "Casi todos los días",
    ],
    items: [
      "Sentirte nervioso/a, ansioso/a o con los nervios de punta.",
      "No poder dejar de preocuparte o controlar la preocupación.",
      "Preocuparte demasiado por diferentes cosas.",
      "Tener dificultad para relajarte.",
      "Estar tan inquieto/a que te resulta difícil permanecer sentado/a.",
      "Molestarte o irritarte fácilmente.",
      "Sentir miedo, como si algo terrible pudiera suceder.",
    ],
    max: 21,
  },
  PHQ9: {
    name: "PHQ-9 · Síntomas depresivos",
    sub: "Durante las últimas dos semanas, ¿con qué frecuencia te han molestado los siguientes problemas?",
    choices: [
      "Nunca",
      "Varios días",
      "Más de la mitad de los días",
      "Casi todos los días",
    ],
    items: [
      "Poco interés o placer al hacer cosas.",
      "Sentirte decaído/a, deprimido/a o sin esperanza.",
      "Dificultad para dormir, mantener el sueño o dormir demasiado.",
      "Sentirte cansado/a o con poca energía.",
      "Poco apetito o comer en exceso.",
      "Sentirte mal contigo mismo/a, pensar que has fracasado o que has decepcionado a tu familia.",
      "Dificultad para concentrarte, por ejemplo, al leer o ver televisión.",
      "Moverte o hablar tan lentamente que otras personas lo noten, o lo contrario: estar muy inquieto/a.",
      "Pensar que sería mejor estar muerto/a o hacerte daño de alguna manera.",
    ],
    max: 27,
  },
  DASS21: {
    name: "DASS-21 · Depresión, ansiedad y estrés",
    sub: "Indica cuánto se aplica cada frase a ti durante la última semana.",
    choices: [
      "No se aplica a mí en absoluto",
      "Se aplica a mí hasta cierto punto",
      "Se aplica a mí en un grado considerable",
      "Se aplica mucho a mí, la mayoría del tiempo",
    ],
    items: [
      "Me resulta difícil relajarme.",
      "Noté sequedad en mi boca.",
      "Parecía que no podía experimentar ningún sentimiento positivo.",
      "Tuve dificultades para respirar (por ejemplo, respiración excesivamente rápida o dificultad para respirar sin esfuerzo físico).",
      "Me resultó difícil tener iniciativa para hacer cosas.",
      "Tendía a reaccionar en exceso ante las situaciones.",
      "Tuve temblores (por ejemplo, en las manos).",
      "Sentí que estaba usando mucha energía nerviosa.",
      "Estuve preocupado/a por situaciones en las que podría entrar en pánico y parecer un tonto/a.",
      "Sentí que no tenía nada que esperar.",
      "Me encontré agitado/a.",
      "Tuve dificultades para relajarme.",
      "Me sentí abatido/a y triste.",
      "No toleraba nada que me impidiera continuar con lo que estaba haciendo.",
      "Sentí que estaba cerca del pánico.",
      "No pude entusiasmarme con nada.",
      "Sentí que no valía mucho como persona.",
      "Sentí que estaba bastante susceptible.",
      "Fui consciente del trabajo de mi corazón en ausencia de esfuerzo físico.",
      "Sentí miedo sin ninguna razón.",
      "Sentí que la vida no valía nada.",
    ],
    max: 126,
  },
  SISCO21: {
    name: "SISCO SV-21 · Estrés académico",
    sub: "Responde primero la pregunta filtro. Para cada dimensión, indica con qué frecuencia experimentas lo descrito.",
    choices: [
      "Nunca",
      "Casi nunca",
      "Rara vez",
      "Algunas veces",
      "Casi siempre",
      "Siempre",
    ],
    items: [
      "La sobrecarga de tareas y trabajos escolares que tengo que realizar todos los días.",
      "La personalidad y el carácter de los/as profesores/as que me imparten clases.",
      "La forma de evaluación de mis profesores/as (ensayos, trabajos de investigación, búsquedas en Internet, etc.).",
      "El nivel de exigencia de mis profesores/as.",
      "El tipo de trabajo que me piden los profesores (consultas de temas, fichas de trabajo, ensayos, mapas conceptuales, etc.).",
      "Tener tiempo limitado para hacer el trabajo que me encargan los/as profesores/as.",
      "La poca claridad que tengo sobre lo que quieren los/as profesores/as.",
      "Fatiga crónica (cansancio permanente).",
      "Sentimientos de depresión y tristeza (decaído/a).",
      "Ansiedad, angustia o desesperación.",
      "Problemas de concentración.",
      "Sentimientos de agresividad o aumento de irritabilidad.",
      "Conflictos o tendencia a polemizar o discutir.",
      "Desgano para realizar las labores escolares.",
      "Concentrarse en resolver la situación que me preocupa.",
      "Establecer soluciones concretas para resolver la situación que me preocupa.",
      "Analizar lo positivo y negativo de las soluciones pensadas para solucionar la situación que me preocupa.",
      "Mantener el control sobre mis emociones para que no me afecte lo que me estresa.",
      "Recordar situaciones similares ocurridas anteriormente y pensar en cómo las solucioné.",
      "Elaboración de un plan para enfrentar lo que me estresa y ejecución de sus tareas.",
      "Fijarse o tratar de obtener lo positivo de la situación que preocupa.",
    ],
    max: null,
  },
};

function renderScale() {
  document.querySelector("#scaleContainer").innerHTML = scaleForm();
}
function scaleForm() {
  let s = instruments[scale];
  let isS = scale === "SISCO21";
  return `<div class="toolbar"><div><h2>${s.name}</h2><p class="muted">${s.sub}</p></div>${tag("Autoinforme")}</div><form id="instrumentForm" onsubmit="submitScale(event)">${isS ? `<div class="sheet"><p><b>1.</b> Durante el transcurso de este semestre, ¿has tenido momentos de preocupación o nerviosismo?</p><label style="margin-right:20px"><input type="radio" name="filter" value="Si" onchange="siscoToggle()" required> Sí</label><label><input type="radio" name="filter" value="No" onchange="siscoToggle()"> No</label><p class="hint">Si seleccionas «No», el cuestionario termina. Si seleccionas «Sí», continúa con las preguntas.</p></div><div id="siscoRest"><div class="sheet"><p><b>2.</b> Señala tu nivel de preocupación o nerviosismo de 1 (poco) a 5 (mucho).</p><div class="flex">${[1, 2, 3, 4, 5].map((n) => `<label><input type="radio" name="intensity" value="${n}" required> ${n}</label>`).join("")}</div></div>` : ""}<div class="scrollX"><div class="scaleRow ${isS ? "six" : ""} scaleHead"><span>N.º</span><span>Ítem</span>${s.choices.map((c, i) => `<span title="${esc(c)}">${isS ? ["N", "CN", "RV", "AV", "CS", "S"][i] : c}</span>`).join("")}</div><div id="questionBlock">${s.items.map((it, i) => `${isS && [0, 7, 14].includes(i) ? `<h3 style="margin:16px 5px 5px">${["Dimensión estresores", "Dimensión síntomas", "Dimensión estrategias"][[0, 7, 14].indexOf(i)]}</h3>` : ""}<div class="scaleRow ${isS ? "six" : ""}"><b>${i + 1}</b><span>${esc(it)}</span>${s.choices.map((c, j) => `<label title="${esc(c)}"><input type="radio" name="q${i}" value="${j}" required aria-label="${i + 1}: ${esc(c)}"></label>`).join("")}</div>`).join("")}</div></div>${isS ? "</div>" : ""}<div class="btnrow section"><button class="btn primary" type="submit">Guardar respuestas y calcular resultado</button><button class="btn" type="reset">Limpiar</button></div></form><div class="hint">Las puntuaciones se interpretan por instrumento; no representan por sí mismas un diagnóstico.</div>`;
}
function siscoToggle() {
  const yes =
    document.querySelector("input[name=filter]:checked")?.value === "Si";
  $("#siscoRest").style.display = yes ? "block" : "none";
  $("#siscoRest")
    .querySelectorAll("input")
    .forEach((el) => (el.disabled = !yes));
}
function submitScale(ev) {
  ev.preventDefault();
  const form = new FormData($("#instrumentForm")),
    s = instruments[scale],
    isS = scale === "SISCO21",
    skipped = isS && form.get("filter") === "No";
  let answers = skipped
    ? []
    : s.items.map((_, i) => Number(form.get("q" + i)) + (isS ? 1 : 0));
  let result = {
    instrument: scale,
    patient: isPatient() ? "PS-0001" : scaleTarget,
    date: todayISO(),
    moment: isPatient()
      ? "Autoinforme paciente"
      : $("#evalMoment")?.value || "Aplicación clínica",
    answers,
    filter: isS ? form.get("filter") : null,
    intensity: isS && !skipped ? Number(form.get("intensity")) : null,
  };
  if (skipped) {
    result.score = "Cuestionario concluido por filtro negativo";
  } else if (scale === "DASS21") {
    const sets = {
      depresion: [3, 5, 10, 13, 16, 17, 21],
      ansiedad: [2, 4, 7, 9, 15, 19, 20],
      estres: [1, 6, 8, 11, 12, 14, 18],
    };
    result.score = Object.fromEntries(
      Object.entries(sets).map(([k, items]) => [
        k,
        2 * items.reduce((sum, i) => sum + answers[i - 1], 0),
      ]),
    );
  } else if (isS) {
    const mean = (arr) =>
      Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 100) / 100;
    result.score = {
      estresores: mean(answers.slice(0, 7)),
      sintomas: mean(answers.slice(7, 14)),
      estrategias: mean(answers.slice(14, 21)),
      intensidad: result.intensity,
    };
  } else result.score = answers.reduce((a, b) => a + b, 0);
  result.id = "E" + Date.now();
  data.evaluations[result.id] = result;
  let pending = (data.evalAssignments || []).find(
    (a) =>
      a.patient === result.patient &&
      a.instrument === result.instrument &&
      a.status !== "Completado",
  );
  if (pending) {
    pending.status = "Completado";
    pending.resultId = result.id;
    pending.completedAt = result.date;
  }
  save();
  notify("Valoración guardada en expediente ficticio");
  evPage = "list";
  go("evaluaciones");
}
function evalList(patientId) {
  let arr = Object.values(data.evaluations).filter(
    (x) => x.patient === patientId,
  );
  return arr.length
    ? arr
        .map(
          (e) =>
            `<div class="listitem"><div><b>${instruments[e.instrument]?.name || e.instrument}</b><br><small>${e.date} · ${esc(e.moment)}</small><br><small>Resultado: ${esc(
              typeof e.score === "object"
                ? Object.entries(e.score)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join(" · ")
                : e.score,
            )}</small></div>${tag("Registrada")}</div>`,
        )
        .join("")
    : '<p class="muted">Aún no hay valoraciones registradas.</p>';
}
function copyInvitation() {
  const url = location.href.split("#")[0] + "#paciente-evaluacion=" + scale;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(url)
      .then(() =>
        notify(
          "Enlace demostrativo copiado; no es un enlace privado ni autenticado",
        ),
      )
      .catch(() => prompt("Copia el enlace:", url));
  } else prompt("Copia el enlace:", url);
}
function previewPatient() {
  role = "patient";
  pid = "PS-0001";
  $("#app").classList.add("patientMode");
  $("#username").textContent = "Andrea López";
  $("#userrole").textContent = "Portal del paciente";
  $("#avatar").textContent = "AL";
  evPage = "fill";
  go("evaluaciones");
  notify(
    "Vista demostrativa del paciente; utiliza Cerrar sesión para cambiar de perfil",
  );
}
function areaGraph(vals, labels, title) {
  const n = vals.length;
  if (n < 2)
    return '<div class="empty">Se requieren al menos dos registros equivalentes.</div>';
  let max = Math.max(1, ...vals) + 3,
    w = 600,
    h = 200,
    left = 42,
    right = 16,
    top = 16,
    bottom = 32;
  let pts = vals.map((v, i) => ({
    x: left + (i * (w - left - right)) / (n - 1),
    y: top + ((max - v) * (h - top - bottom)) / max,
    v,
  }));
  let path = "M " + pts.map((p) => `${p.x} ${p.y}`).join(" L "),
    fill =
      path + ` L ${pts.at(-1).x} ${h - bottom} L ${pts[0].x} ${h - bottom} Z`;
  return `<div class="areaWrap"><div class="lbl">${esc(title)}</div><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Gráfica de área de seguimiento">${[0, 1, 2, 3].map((i) => `<line x1="${left}" y1="${top + i * 50}" x2="${w - right}" y2="${top + i * 50}" stroke="#e0eae5" />`).join("")}<path d="${fill}" fill="#91beb0" fill-opacity=".27"/><path d="${path}" fill="none" stroke="#4b837f" stroke-width="3"/>${pts.map((p, i) => `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#4b837f"/><text x="${p.x}" y="${p.y - 12}" text-anchor="middle" fill="#3f625d" font-size="13">${p.v}</text><text x="${p.x}" y="${h - 10}" text-anchor="middle" fill="#748983" font-size="11">${esc(labels[i])}</text>`).join("")}</svg></div>`;
}
function resultados() {
  let p = isPatient() ? data.patients[0] : pat(),
    evaluations = Object.values(data.evaluations).filter(
      (e) => e.patient === p.id,
    ),
    tasks = data.tasks[p.id] || [];
  let byScale = {};
  for (const e of evaluations) {
    if (typeof e.score === "number") {
      (byScale[e.instrument] ??= []).push(e);
    }
  }
  let keys = Object.keys(byScale).filter((k) => byScale[k].length >= 2),
    chosen = keys[0];
  let values = chosen ? byScale[chosen].map((e) => e.score) : p.scores || [];
  let labels = chosen
    ? byScale[chosen].map((_, i) => "T" + (i + 1))
    : values.map((_, i) => "S" + (i + 1));
  return (
    header(
      "RESULTADOS Y SEGUIMIENTO",
      isPatient() ? "Mi progreso" : "Resultados clínicos",
      "Gráfica de área y avances documentados durante las actividades.",
      isPatient() ? "" : selector(),
    ) +
    `<div class="two"><div class="card"><h2>Evolución longitudinal · ${p.id}</h2>${areaGraph(values, labels, chosen ? instruments[chosen].name : "Serie ilustrativa de seguimiento (sin escala asignada)")}<p class="hint">Para una comparación válida, utiliza el mismo instrumento y el mismo método de puntuación en cada momento. La serie ilustrativa inicial no equivale a respuesta terapéutica.</p>${keys.length > 1 ? `<div class="lbl">Instrumentos con aplicaciones repetidas: ${keys.map((k) => esc(instruments[k].name)).join(", ")}</div>` : ""}</div><div class="card"><h2>Aspectos positivos de las actividades</h2>${
      tasks
        .filter((t) => t.done)
        .map(
          (t) =>
            `<div class="note"><b>✓ ${esc(t.name)}</b><p class="muted" style="margin:6px 0">${esc(t.positive || "Actividad completada. Pendiente de observaciones clínicas.")}</p></div>`,
        )
        .join("") ||
      '<p class="muted">No hay actividades completadas todavía.</p>'
    }<hr class="divider"><div class="three"><div><div class="stat">${tasks.length}</div><small>Asignadas</small></div><div><div class="stat">${tasks.filter((t) => t.done).length}</div><small>Realizadas</small></div><div><div class="stat">${evaluations.length}</div><small>Valoraciones</small></div></div></div></div><div class="card section"><h2>Registro de evaluaciones</h2>${evalList(p.id)}</div>`
  );
}

const docOptions = [
  "Consentimiento informado",
  "Aviso de privacidad",
  "Entrevista inicial de admisión",
  "Convenio de confidencialidad del costo del tratamiento",
  "Contrato de tratamiento ambulatorio",
  "Entrevista familiar (historia clínica)",
  "Notas de evolución (documentos)",
  "Actividades escaneadas",
  "Evaluaciones psicométricas pre y postratamiento",
  "Consentimiento de telepsicología",
  "Autorización específica de grabación",
  "Documento adicional",
];
function documentosV13(embedded = false) {
  let p = isPatient() ? data.patients[0] : pat();
  let x = header(
    "ARCHIVO DOCUMENTAL",
    isPatient() ? "Mis documentos" : "Documentos del expediente",
    "El consentimiento informado admite nuevas versiones y aplicaciones en distintas fechas.",
    isPatient() ? "" : selector(),
  );
  return (
    (embedded ? "" : x) +
    `<div class="two"><div><div class="card"><h2>Carpetas y plantillas</h2>${docOptions.map((d, i) => `<div class="docItem"><div><b>${esc(d)}</b><br><small>${(data.docs[p.id] || []).filter((v) => v.type === d).length} registro(s)</small></div><button class="btn" onclick="setDoc(${i},${embedded})">Abrir</button></div>`).join("")}</div></div><div><div class="card docform"><div class="toolbar"><h2>Formulario editable</h2>${tag("Borrador")}</div><div class="field"><label>Tipo de documento</label><select id="docSelect" onchange="docType=this.value;go('${embedded ? "expediente" : "documentos"}')">${docOptions.map((d) => `<option ${d === docType ? "selected" : ""}>${esc(d)}</option>`).join("")}</select></div>${inputField("Expediente", "docPatient", "text", p.id + " · " + p.name)}${inputField("Fecha de emisión", "docDate", "date", "2026-09-28")}<div class="field"><label>Detalles, respuestas o acuerdos</label><textarea id="docBody" rows="8" placeholder="Redacta o completa un documento ficticio para comprobar el flujo. El formato final debe validarse por la clínica."></textarea></div><div class="field"><label>Nombre del profesional / representante</label><input id="docSigner" placeholder="Nombre"></div><div class="btnrow"><button class="btn primary" onclick="saveDoc()">Guardar documento</button><button class="btn" onclick="printDoc()">Imprimir / Guardar PDF</button></div><hr class="divider"><h3>Imprimir, firmar y subir</h3><p class="muted tiny">Seleccionar un archivo únicamente guarda su nombre en el navegador del prototipo, no el archivo ni su contenido.</p><input type="file" id="docFile" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"><button class="btn section" onclick="attachDoc()">Registrar archivo seleccionado (demo)</button><h3 class="section">Historial</h3>${
      (data.docs[p.id] || [])
        .slice()
        .reverse()
        .map(
          (d) =>
            `<div class="listitem"><div><b>${esc(d.type)}</b><br><small>${esc(d.date)} · ${esc(d.signer || "Pendiente de firma")} · ${esc(d.file || "Sin archivo adjunto")}</small></div>${tag("Registrado")}</div>`,
        )
        .join("") ||
      '<p class="muted">Todavía no hay documentos registrados.</p>'
    }</div></div></div>`
  );
}
function setDoc(i, embedded) {
  docType = docOptions[i];
  if (embedded) {
    tab = "documentos";
    go("expediente");
  } else go("documentos");
}
function saveDoc() {
  let p = isPatient() ? data.patients[0] : pat();
  (data.docs[p.id] ??= []).push({
    type: $("#docSelect").value,
    date: $("#docDate").value,
    body: $("#docBody").value,
    signer: $("#docSigner").value,
    file: "",
  });
  save();
  notify("Nueva versión de documento guardada en navegador");
}
function attachDoc() {
  let f = $("#docFile").files[0];
  if (!f) return notify("Selecciona un archivo");
  let p = isPatient() ? data.patients[0] : pat();
  (data.docs[p.id] ??= []).push({
    type: $("#docSelect").value,
    date: $("#docDate").value,
    body: "",
    signer: "Archivo aportado",
    file: f.name,
  });
  save();
  notify("Solo se registró el nombre; no se almacenó el contenido del archivo");
}
function printPage(title, body) {
  let w = window.open("", "_blank");
  if (!w) return notify("Autoriza ventanas emergentes para imprimir");
  w.document
    .write(`<html lang="es"><head><meta charset="utf-8"><title>${esc(title)}</title><style>body{font:14px Arial;max-width:760px;margin:55px auto;line-height:1.7;color:#293e48}h1{font-size:24px;border-bottom:1px solid #ccd8d4;padding-bottom:15px}pre{white-space:pre-wrap;font:inherit}.mark{color:#a45d4c;font-weight:bold}footer{margin-top:50px;color:#71817a;font-size:11px}.patientDirectory{padding:0;overflow:hidden}.directoryTabs{padding:5px 22px 0;margin:0}.directoryTabs button{cursor:pointer}.countBadge{display:inline-block;border-radius:6px;padding:2px 7px;background:#f1e9e5;color:#674954;margin-left:5px}.directoryTools{margin:0;padding:18px 22px}.directoryTools .headsearch{width:min(460px,55vw);max-width:460px}.directoryTable{width:100%;border-collapse:collapse}.directoryTable th{text-align:left;background:#faf7f5;color:#72656a;font-size:11px;letter-spacing:.06em;text-transform:uppercase}.directoryTable th,.directoryTable td{padding:17px 16px;border-bottom:1px solid var(--line);vertical-align:middle}.directoryTable tr:last-child td{border-bottom:0}.directoryPerson{display:flex;align-items:center;gap:10px;min-width:160px}.directoryPerson .avatar{background:#efe8ee;color:#543345;flex:none}.directoryTable small{color:var(--muted)}.rowActions{display:flex;gap:7px;white-space:nowrap}.rowActions .btn{font-size:12px;padding:9px 12px}@media(max-width:960px){.directoryTable{min-width:900px}}

.lib-controls{display:grid;grid-template-columns:minmax(260px,1.4fr) repeat(2,minmax(180px,.6fr));gap:12px;align-items:end}.lib-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}.lib-item{padding:18px 22px;border-bottom:1px solid var(--line);border-right:1px solid var(--line);display:flex;justify-content:space-between;gap:18px;align-items:flex-start}.lib-item:nth-child(2n){border-right:0}.lib-item:nth-last-child(-n+2){border-bottom:0}.lib-item h3{font-size:18px;margin:0 0 6px}.lib-item p{margin:0 0 8px;line-height:1.55;color:#5f6d72}.lib-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:8px}.lib-tag{display:inline-flex;align-items:center;padding:5px 10px;border-radius:999px;background:#eef4f1;color:#55756d;font-size:11px;font-weight:700}.lib-arrow{border:0;background:transparent;color:#80908b;font-size:28px;line-height:1;padding:8px 0 0}.lib-arrow:hover{color:#456760}.lib-stats{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:14px 0 16px}.lib-count{font-weight:800;color:#304c4d}.lib-note{font-size:12px;color:#7a888d}.lib-add-form{margin-bottom:16px}.lib-empty{padding:32px;text-align:center;color:var(--muted);border:1px dashed #d5e1db;border-radius:14px;background:#fafcfb}.lib-badge{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:5px 10px;font-size:11px;font-weight:800;background:#f1f5f3;color:#58726c}.lib-badge.custom{background:#f6eee8;color:#9a6b46}.lib-toolbarTop{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px;flex-wrap:wrap}.lib-card-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}.lib-detail p{margin:6px 0;line-height:1.6}@media(max-width:900px){.lib-grid{grid-template-columns:1fr}.lib-item,.lib-item:nth-child(2n){border-right:0}.lib-item:not(:last-child){border-bottom:1px solid var(--line)}.lib-item:nth-last-child(-n+2){border-bottom:1px solid var(--line)}.lib-item:last-child{border-bottom:0}.lib-controls{grid-template-columns:1fr}}

</style></head><body><h1>ROMImente · ${esc(title)}</h1><p class="mark">PROTOTIPO · DATOS FICTICIOS · DOCUMENTO NO VALIDADO PARA USO CLÍNICO</p>${body}<footer>Versión de demostración. Revisar contenido, autoría y firma antes de su uso institucional.</footer><div id="activityPrintRoot" style="display:none"></div></body></html>`);
  w.document.close();
  w.focus();
  w.print();
}
function printDoc() {
  let p = isPatient() ? data.patients[0] : pat();
  printPage(
    $("#docSelect").value,
    `<p><b>Expediente:</b> ${esc(p.id)}<br><b>Paciente:</b> ${esc(p.name)}<br><b>Fecha:</b> ${esc($("#docDate").value)}</p><h3>Contenido completado</h3><pre>${esc($("#docBody").value)}</pre><br><p>__________________________________<br>${esc($("#docSigner").value || "Firma pendiente")}</p>`,
  );
}
function printReport() {
  let p = pat(),
    n = data.notes[p.id] || [],
    e = Object.values(data.evaluations).filter((x) => x.patient === p.id);
  printPage(
    "Resumen del expediente " + p.id,
    `<p><b>Paciente:</b> ${esc(p.name)}<br><b>Folio interno:</b> ${esc(p.id)}<br><b>Fecha de nacimiento:</b> ${esc(p.dob)}<br><b>Edad:</b> ${age(p)}<br><b>Sexo / género:</b> ${esc(p.sex)} / ${esc(p.gender)}<br><b>Diagnóstico:</b> ${esc(p.diagnosis)}<br><b>Estado:</b> ${esc(p.status)}</p><h2>Notas de evolución</h2>${n.map((x) => `<p><b>Sesión ${esc(x.num)} (${esc(x.date)})</b><br>${esc(x.summary)}</p>`).join("") || "<p>Sin notas.</p>"}<h2>Valoraciones</h2>${e.map((x) => `<p>${esc(instruments[x.instrument].name)} · ${esc(x.moment)} · ${esc(typeof x.score === "object" ? JSON.stringify(x.score) : x.score)}</p>`).join("") || "<p>Sin valoraciones nuevas.</p>"}`,
  );
}
function indicadores() {
  if (isPatient())
    return header(
      "MI CUENTA",
      "Configuración",
      "Sin indicadores globales disponibles para pacientes.",
    );
  let p = mine(),
    a = data.appointments.filter((a) => a.owner === role);
  return (
    header(
      "GESTIÓN DEL SERVICIO",
      "Indicadores clínicos",
      "Métricas descriptivas del profesional y sus expedientes asignados.",
    ) +
    `<div class="grid">${[
      ["Pacientes activos", p.filter((x) => x.status === "Activo").length],
      ["Pacientes inactivos", p.filter((x) => x.status !== "Activo").length],
      [
        "Sesiones programadas",
        a.filter((x) => x.status === "Programada").length,
      ],
      ["Sesiones canceladas", a.filter((x) => x.status === "Cancelada").length],
      [
        "Altas documentadas",
        p.reduce(
          (sum, x) => sum + (data.care14?.[x.id]?.discharges?.length || 0),
          0,
        ),
      ],
    ]
      .map(
        (v) =>
          `<div class="card"><div class="statlabel">${v[0]}</div><div class="stat">${v[1]}</div></div>`,
      )
      .join(
        "",
      )}</div><div class="card section"><div class="toolbar"><h2>Exportación de datos de demostración</h2><button class="btn primary" onclick="csvExport()">↓ CSV compatible con Excel</button></div><p class="muted">La exportación contiene únicamente los casos visibles para el perfil y datos ficticios.</p></div>`
  );
}
function csvExport() {
  if (isPatient())
    return notify("La exportación de indicadores es exclusiva del profesional");
  let rows = [
      [
        "Folio",
        "Nombre ficticio",
        "Fecha nacimiento",
        "Edad",
        "Tipo",
        "Estado",
        "Riesgo",
        "Fecha de revisión del plan",
      ],
      ...mine().map((p) => [
        p.id,
        p.name,
        p.dob,
        age(p),
        p.type,
        p.status,
        p.risk,
        p.planEnd,
      ]),
    ],
    csv =
      "\ufeff" +
      rows
        .map((r) =>
          r
            .map((c) => '"' + String(c ?? "").replaceAll('"', '""') + '"')
            .join(","),
        )
        .join("\r\n");
  let u = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8" }),
    ),
    a = document.createElement("a");
  a.href = u;
  a.download = "ROMImente_indicadores_demo.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}
function baseConfig() {
  return (
    header(
      "MI CUENTA",
      "Configuración",
      "Preferencias básicas del portal del paciente.",
    ) +
    `<div class="card"><h2>Perfil</h2><p>${esc($("#username").textContent)} · ${isPatient() ? "Paciente" : "Profesional clínico"}</p><div class="listitem">Expedientes visibles ${tag(isPatient() ? "Propio" : "Asignados")}</div><div class="listitem">Notas internas ${tag(isPatient() ? "No visible" : "Accesible")}</div><div class="listitem">Indicadores globales ${tag(isPatient() ? "No visible" : "Asignados")}</div></div>`
  );
}

// V4: la navegación del paciente concentra Sesiones, Detalles y Archivos.
data.sessionRecords ||= {};
data.templates ||= {};
data.aiThreads ||= {};
let patientPane = "sesiones",
  detailPane = "ficha",
  quickVisible = false,
  activeRecording = null,
  recordPieces = [],
  recordObjectURL = null;
function login() {
  baseLogin();
  if (!isPatient() && !safeGet("romi_profile_" + role)) showOnboarding();
}
function closeModal() {
  if (activeRecording?.state === "recording") activeRecording.stop();
  $("#modalRoot").innerHTML = "";
}
function modal(title, body, footer = "") {
  $("#modalRoot").innerHTML =
    `<div class="modalBackdrop" onclick="if(event.target===this)closeModal()"><div class="modalBox"><div class="modalHead"><h2>${title}</h2><button class="btn" onclick="closeModal()" aria-label="Cerrar">✕</button></div><div class="modalBody">${body}</div><div class="modalFoot">${footer || '<button class="btn" onclick="closeModal()">Cerrar</button>'}</div></div></div>`;
}
function showOnboarding() {
  if (isPatient()) return;
  modal(
    "Cuéntanos acerca de ti",
    `<div style="text-align:center;margin:8px 0 25px"><div style="font-size:35px;color:#a77667">✿</div><h2 style="font-size:27px;margin:8px 0">Configura tu espacio profesional</h2><small>Solo datos ficticios en esta demostración.</small></div><div class="formgrid">${inputField("Nombre *", "obName", "text", role === "psi1" ? "Elena" : "Daniel")}${inputField("Apellidos *", "obSurname", "text", role === "psi1" ? "Ríos" : "Mora")}${selectField("País", "obCountry", ["México"])}${selectField("Puesto", "obPosition", ["Psicóloga clínica", "Psicólogo clínico", "Coordinación clínica"])}${selectField("Especialidad", "obSpecialty", ["Psicología clínica", "Psicoterapia cognitivo-conductual", "Psicología de adolescentes", "Psicología general", "Otro"])}</div><label class="flex section"><input type="checkbox" id="obAccept"> He leído los avisos de uso demostrativo y confidencialidad.</label><p class="muted tiny">El consentimiento para grabaciones de pacientes se solicita por separado, por sesión. Este perfil no equivale a verificación de identidad profesional.</p>`,
    `<button class="btn" onclick="closeModal()">Después</button><button class="btn primary" onclick="saveOnboarding()">Guardar perfil</button>`,
  );
}
function saveOnboarding() {
  if (
    !$("#obName").value.trim() ||
    !$("#obSurname").value.trim() ||
    !$("#obAccept").checked
  )
    return notify("Completa los campos y confirma la lectura de los avisos");
  let name = ($("#obName").value + " " + $("#obSurname").value).trim();
  safeSet(
    "romi_profile_" + role,
    JSON.stringify({
      name,
      country: $("#obCountry").value,
      position: $("#obPosition").value,
      specialty: $("#obSpecialty").value,
    }),
  );
  $("#username").textContent = name;
  $("#userrole").textContent = $("#obSpecialty").value;
  closeModal();
  notify("Perfil de demostración actualizado");
}
function newPatient() {
  if (isPatient()) return;
  modal(
    "Crear nuevo paciente",
    `<p class="demoFlag">Alta · Folio automático interno PS-XXXX</p><div class="formgrid">${inputField("Nombre *", "npName")}${inputField("Apellidos *", "npSurname")}${inputField("Fecha de nacimiento *", "npDob", "date")}${selectField("Sexo", "npSex", ["Por registrar", "Femenino", "Masculino", "Intersexual", "Prefiere no decirlo"])}${inputField("Género", "npGender")}${selectField("Estado civil", "npCivil", ["Por registrar", "Soltera/o", "Casada/o", "Unión libre", "Divorciada/o", "Viuda/o", "No aplica"])}${inputField("Ocupación", "npOccupation")}${inputField("Correo electrónico", "npEmail", "email")}${inputField("Teléfono", "npContact", "tel")}${inputField("Contacto de emergencia: nombre", "npEmergency")}${inputField("Contacto de emergencia: teléfono", "npEmergencyPhone", "tel")}<div class="field wide"><label>Motivo inicial de consulta</label><textarea id="npReason" placeholder="Registro descriptivo, sin diagnóstico automático"></textarea></div><div class="field wide"><label>Antecedentes médicos referidos</label><textarea id="npHistory"></textarea></div><div class="field wide"><label>Medicación actual referida</label><textarea id="npMeds"></textarea></div><div class="field wide"><label>Alergias referidas</label><textarea id="npAllergies"></textarea></div><div class="field wide"><label>Notas administrativas adicionales</label><textarea id="npExtra"></textarea></div></div><p class="notice section">Esta alta crea un folio consecutivo de demostración. La historia clínica, los consentimientos y la evaluación se documentan después, dentro del expediente individual.</p>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="saveNewPatient()">Guardar paciente</button>`,
  );
}
function saveNewPatient() {
  let name = $("#npName").value.trim(),
    surname = $("#npSurname").value.trim(),
    dob = $("#npDob").value;
  if (!name || !surname || !dob || dob > todayISO())
    return notify("Completa nombre, apellidos y una fecha válida");
  let max = Math.max(
      0,
      ...data.patients.map((p) => Number(p.id.slice(3)) || 0),
    ),
    id = "PS-" + String(max + 1).padStart(4, "0");
  let p = {
    id,
    name: name + " " + surname,
    dob,
    sex: $("#npSex").value,
    gender: $("#npGender").value || "Por registrar",
    civil: $("#npCivil").value,
    occupation: $("#npOccupation").value || "Por registrar",
    email: $("#npEmail").value,
    contact: $("#npContact").value,
    emergency: $("#npEmergency").value || "Por registrar",
    phone: $("#npEmergencyPhone").value || "Por registrar",
    type: age({ dob }) < 18 ? "adolescente" : "adulto",
    diagnosis: "En evaluación",
    reason: $("#npReason").value,
    owner: role,
    status: "Activo",
    risk: "Sin evaluar",
    last: "Pendiente",
    planEnd: "",
    scores: [],
  };
  data.patients.push(p);
  data.fields[id] = {
    "hist_Antecedentes médicos": $("#npHistory").value,
    "hist_Medicamentos y tratamientos": $("#npMeds").value,
    "hist_Alergias referidas": $("#npAllergies").value,
    admin_Observaciones: $("#npExtra").value,
  };
  save();
  closeModal();
  pid = id;
  patientPane = "detalles";
  detailPane = "ficha";
  go("expediente");
  notify("Expediente ficticio " + id + " creado");
}

function quickAction(a) {
  if (a === "sesion") {
    patientPane = "sesiones";
    tab = "notas";
    go("expediente");
    toggle("sessionComposer");
  }
  if (a === "tarea") {
    patientPane = "detalles";
    detailPane = "actividades";
    tab = "actividades";
    go("expediente");
    toggle("taskForm");
  }
  if (a === "plantilla") {
    activityTarget = pid;
    go("plantillas");
  }
  if (a === "pdf") {
    patientPane = "archivos";
    go("expediente");
    toggle("uploadComposer");
  }
}
function patientSessions() {
  let p = pat(),
    arr = data.sessionRecords[p.id] || [],
    noteArr = data.notes[p.id] || [];
  return `<div class="toolbar"><div><h2>Sesiones del paciente</h2><small>Registro por fecha, número de sesión y estado documental.</small></div><button class="btn primary" onclick="toggle('sessionComposer')">＋ Nueva sesión</button></div><div class="card hidden" id="sessionComposer"><h2>Crear nueva sesión</h2><div class="formgrid">${inputField("Fecha", "sessDate", "date", "2026-09-28")}${inputField("Hora", "sessHour", "time", "17:00")}${inputField("Duración (min)", "sessLength", "number", "50")}${selectField("Modalidad", "sessMode", ["Presencial", "Virtual"])}${inputField("Objetivo de la sesión", "sessGoal")}</div><div class="btnrow section"><button class="btn primary" onclick="createSession()">Crear sesión y abrir transcriptor</button><button class="btn" onclick="toggle('sessionComposer')">Cancelar</button></div></div>${
    arr.length
      ? `<div class="sessionGrid"><div class="card"><h2>Historial</h2>${arr
          .slice()
          .reverse()
          .map(
            (s) =>
              `<div class="listitem"><div><b>Sesión ${s.num} · ${esc(s.date)} · ${esc(s.hour)} h</b><br><small>${esc(s.mode)} · ${esc(s.length)} minutos · ${esc(s.goal || "Objetivo por documentar")}</small></div><button class="btn" onclick="openSession('${s.id}')">Abrir →</button></div>`,
          )
          .join(
            "",
          )}${noteArr.length ? `<h3 class="section">Notas previas</h3>${noteArr.map((n) => `<div class="listitem"><span>Nota ${esc(n.num)} · ${esc(n.date)}</span>${tag(n.signed ? "Firmada" : "Borrador")}</div>`).join("")}` : ""}</div><div class="card"><h2>Acciones por paciente</h2>${actionTiles()}<p class="muted tiny section">Las notas firmadas se conservan diferenciadas de borradores y transcripciones.</p></div></div>`
      : `<div class="emptyBig card"><div style="font-size:48px;color:#b78269">◌ ▤ ✎</div><h2>Inicia una nueva sesión</h2><p class="muted">Crea un registro vinculado a ${esc(p.name)} para documentar la consulta.</p><button class="btn primary" onclick="toggle('sessionComposer')">＋ Nueva sesión</button><div class="section">${noteArr.length ? noteArr.map((n) => `<div class="listitem"><b>Nota previa · ${esc(n.date)}</b>${tag(n.signed ? "Firmada" : "Borrador")}</div>`).join("") : ""}</div></div>`
  }`;
}
function actionTiles() {
  return `<div class="actionTiles"><button onclick="quickAction('sesion')"><span>◉</span>Sesión</button><button onclick="quickAction('tarea')"><span>☑</span>Tarea</button><button onclick="quickAction('plantilla')"><span>▤</span>Plantilla</button><button onclick="quickAction('pdf')"><span>▧</span>Formulario PDF</button></div>`;
}
function createSession() {
  let date = $("#sessDate").value,
    hour = $("#sessHour").value,
    length = Number($("#sessLength").value);
  if (!date || !hour || length < 1 || length > 600)
    return notify("Revisa fecha, hora y duración");
  let arr = (data.sessionRecords[pid] ??= []);
  let id = "S-" + Date.now();
  arr.push({
    id,
    num: arr.length + 1,
    date,
    hour,
    length,
    mode: $("#sessMode").value,
    goal: $("#sessGoal").value,
    status: "Borrador",
    draft: "",
  });
  save();
  openSession(id);
}
function openSession(id) {
  let s = (data.sessionRecords[pid] || []).find((x) => x.id === id);
  if (!s) return notify("Sesión no encontrada");
  modal(
    `Sesión ${s.num} · ${esc(s.date)}`,
    `<div class="toolbar"><p>${esc(pat().name)} · ${esc(s.hour)} h · ${esc(s.mode)} · ${esc(s.length)} min</p>${tag(s.status)}</div><div class="recordCard"><div class="recordIcon" style="text-align:center">▂ ▆ ▃ ▇ ▅ ▂</div><h2>Grabación y transcripción</h2><p class="muted">La grabación es opcional. Antes de iniciar, registra autorización independiente del consentimiento terapéutico. No se almacena audio en el expediente de esta demo.</p><label class="flex"><input id="sessConsent" type="checkbox"> Confirmo autorización específica para grabar esta sesión.</label><div class="btnrow section"><button class="btn primary" id="startMic" onclick="startBrowserRecording()">● Iniciar grabación local</button><button class="btn" id="stopMic" onclick="stopBrowserRecording()">■ Detener</button><button class="btn" onclick="fillDemoTranscript()">Ver ejemplo de transcripción</button></div><div id="micStatus" class="hint">Micrófono apagado. Para grabar, el navegador debe autorizar su uso.</div><div id="audioDownload"></div><div class="field"><label>Transcripción / apuntes (borrador editable)</label><textarea id="sessionTranscript" rows="5" placeholder="La transcripción automática requiere integrar un proveedor autorizado; puedes escribir o pegar tus apuntes aquí.">${esc(s.draft || "")}</textarea></div><p class="muted tiny">Revisar, corregir y seleccionar contenido pertinente antes de incorporarlo a la nota. El texto de ejemplo es ficticio.</p></div><div class="section btnrow"><button class="btn" onclick="saveSessionTranscript('${s.id}')">Guardar borrador</button><button class="btn primary" onclick="sendToNote('${s.id}')">Crear nota de evolución →</button></div>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button>`,
  );
}
function saveSessionTranscript(id) {
  let s = (data.sessionRecords[pid] || []).find((x) => x.id === id);
  if (s) {
    s.draft = $("#sessionTranscript").value;
    save();
    notify("Borrador vinculado a sesión");
  }
}
function fillDemoTranscript() {
  $("#sessionTranscript").value =
    "[EJEMPLO FICTICIO, NO TRANSCRIPCIÓN REAL] Se revisó el objetivo acordado; la persona comenta el registro de emociones y las dificultades durante la semana. El contenido debe revisarse antes de documentar.";
}
function sendToNote(id) {
  let s = (data.sessionRecords[pid] || []).find((x) => x.id === id);
  if (!s) return;
  let txt = $("#sessionTranscript").value;
  s.draft = txt;
  save();
  closeModal();
  patientPane = "detalles";
  detailPane = "notas";
  tab = "notas";
  go("expediente");
  if ($("#noteSummary")) $("#noteSummary").value = txt;
  if ($("#noteGoal")) $("#noteGoal").value = s.goal || "";
  if ($("#noteNumber")) $("#noteNumber").value = s.num;
  if ($("#noteDate")) $("#noteDate").value = s.date;
  notify(
    "Borrador transferido; el profesional debe revisar y completar la nota",
  );
}
async function startBrowserRecording() {
  if (!$("#sessConsent").checked)
    return notify("Confirma autorización específica antes de iniciar");
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder)
    return notify("Este navegador o contexto local no permite grabar audio");
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordPieces = [];
    activeRecording = new MediaRecorder(stream);
    activeRecording.ondataavailable = (e) => {
      if (e.data.size) recordPieces.push(e.data);
    };
    activeRecording.onstop = () => {
      let blob = new Blob(recordPieces, {
        type: activeRecording.mimeType || "audio/webm",
      });
      if (recordObjectURL) URL.revokeObjectURL(recordObjectURL);
      recordObjectURL = URL.createObjectURL(blob);
      let target = $("#audioDownload");
      if (target)
        target.innerHTML = `<div class="section"><audio controls src="${recordObjectURL}"></audio><br><a href="${recordObjectURL}" download="ROMImente_audio_demo.webm">↓ Descargar audio local (no se sube)</a></div>`;
      stream.getTracks().forEach((t) => t.stop());
      activeRecording = null;
    };
    activeRecording.start();
    $("#micStatus").textContent =
      "● Grabando localmente. La transcripción automática no está conectada.";
  } catch (e) {
    notify("No se pudo acceder al micrófono: " + e.name);
  }
}
function stopBrowserRecording() {
  if (activeRecording?.state === "recording") {
    activeRecording.stop();
    let st = $("#micStatus");
    if (st)
      st.textContent =
        "Grabación detenida. Descarga el audio si deseas conservarlo localmente.";
  } else notify("No hay grabación activa");
}
function patientDetailsV13() {
  let p = pat();
  let details = [
    ["ficha", "Identificación"],
    ["historia", "Historia clínica"],
    ["inicial", "Evaluación inicial"],
    ["plan", "Plan terapéutico"],
    ["notas", "Notas de evolución"],
    ["evaluaciones", "Psicometría"],
    ["riesgo", "Riesgo clínico"],
    ["actividades", "Tareas"],
    ["alta", "Alta"],
  ];
  tab = detailPane;
  return `<div class="innerNav">${details.map(([k, n]) => `<button class="btn ${detailPane === k ? "selected" : ""}" onclick="detailPane='${k}';go('expediente')">${n}</button>`).join("")}</div><div class="card">${expContent()}</div>`;
}
function patientFilesV13() {
  let p = pat();
  return `<div class="toolbar"><div><h2>Archivos y documentos</h2><p class="muted">Documentos ligados a ${esc(p.id)}; conserva nuevas versiones de consentimientos y formularios.</p></div><button class="btn primary" onclick="toggle('uploadComposer')">＋ Subir archivo</button></div><div class="twoPanel"><div class="card"><h2>Documentación del expediente</h2>${docOptions.map((n, i) => `<div class="listitem"><div><b>${esc(n)}</b><br><small>${(data.docs[p.id] || []).filter((d) => d.type === n).length} registros / versiones</small></div><button class="btn" onclick="docType=docOptions[${i}];$('#docSelect').value=docType;$('#templateComposer').classList.remove('hidden')">Abrir</button></div>`).join("")}<h3 class="section">Archivos aportados</h3>${
    (data.docs[p.id] || [])
      .filter((x) => x.file)
      .map(
        (d) =>
          `<div class="listitem"><span>▧ ${esc(d.file)}<br><small>${esc(d.date)} · ${esc(d.type)}</small></span>${tag("Referencia demo")}</div>`,
      )
      .join("") || '<p class="muted">No hay archivos registrados.</p>'
  }</div><div><div class="card hidden" id="uploadComposer"><h2>Adjuntar archivo</h2><p class="muted tiny">La demostración almacena únicamente el nombre, nunca el contenido del archivo.</p>${selectField("Categoría", "upType", docOptions)}${inputField("Fecha", "upDate", "date", "2026-09-28")}<div class="field"><label>Archivo PDF / imagen</label><input type="file" id="upFile" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"></div><button class="btn primary section" onclick="uploadPatientFile()">Registrar referencia</button></div><div class="card" id="templateComposer"><h2>Plantillas y formularios</h2><div class="field"><label>Tipo</label><select id="docSelect" onchange="docType=this.value">${docOptions.map((x) => `<option ${x === docType ? "selected" : ""}>${esc(x)}</option>`).join("")}</select></div>${inputField("Fecha", "docDate", "date", "2026-09-28")}<div class="field"><label>Contenido editable / acuerdos</label><textarea id="docBody" rows="7" placeholder="Completar con información revisada por profesional; no es un consentimiento validado."></textarea></div>${inputField("Profesional / persona firmante", "docSigner")}<div class="btnrow section"><button class="btn primary" onclick="saveDoc()">Guardar versión</button><button class="btn" onclick="printDoc()">↓ Formulario PDF (imprimir)</button></div><div class="notice section">Para documentos que requieran firma, imprimir, recabar la firma correspondiente y cargar el archivo firmado en la plataforma real. Aquí solo se simula el registro.</div></div></div></div>`;
}
function uploadPatientFile() {
  let f = $("#upFile").files[0];
  if (!f) return notify("Selecciona un archivo");
  (data.docs[pid] ??= []).push({
    type: $("#upType").value,
    date: $("#upDate").value,
    file: f.name,
    signer: "Archivo aportado",
    body: "",
  });
  save();
  go("expediente");
  notify("Referencia de archivo registrada; no se subió el contenido");
}
let aiSelected = "PS-0001";
function aiView() {
  go("inicio");
  toggleAssistant(true);
  return "";
}
function renderAssistantContent() {
  if (isPatient()) return;
  if (!mine().some((p) => p.id === aiSelected))
    aiSelected = mine()[0]?.id || pid;
  let p = data.patients.find((x) => x.id === aiSelected);
  $("#romiChatContent").innerHTML =
    `<div class="romi-chat-pick"><label for="aiPatientSelector">Expediente de referencia</label><select id="aiPatientSelector" onchange="aiSelected=this.value;renderAssistantContent()">${mine()
      .map(
        (x) =>
          `<option value="${x.id}" ${x.id === aiSelected ? "selected" : ""}>${x.id} · ${esc(x.name)}</option>`,
      )
      .join("")}</select></div>
 <div class="romi-chat-messages" id="aiConversation" role="log" aria-live="polite"><div class="aiBubble">Puedo recuperar notas registradas, tareas, evaluaciones y citas ficticias de ${esc(p.name)}. No genero diagnósticos ni infiero riesgos clínicos a partir de texto libre. Esta demostración no consulta un modelo externo.</div></div>
 <div class="romi-chat-suggestions">${["Resumir sesiones", "Mostrar tareas pendientes", "Ver evaluaciones", "Revisar próximos pasos", "Preparar borrador de informe"].map((t) => `<button type="button" onclick="$('#aiQuestion').value='${t}';askRomi()">${t}</button>`).join("")}</div>
 <div class="romi-chat-compose"><textarea id="aiQuestion" rows="2" aria-label="Consulta clínica" placeholder="Pregúntale sobre este expediente…" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();askRomi()}"></textarea><button class="romi-chat-send" type="button" title="Consultar" aria-label="Consultar" onclick="askRomi()">➤</button></div>
 <p class="romi-chat-disclaimer">Solo datos de demostración. Verifica las fuentes del expediente y utiliza tu criterio clínico.</p>`;
}
function toggleAssistant(force) {
  if (isPatient()) return;
  const box = $("#romiChat");
  const open =
    typeof force === "boolean" ? force : box.classList.contains("hidden");
  box.classList.toggle("hidden", !open);
  $("#romiLaunch").setAttribute("aria-expanded", String(open));
  if (open) {
    if (!$("#romiChatContent").hasChildNodes()) {
      aiSelected = mine().some((p) => p.id === pid) ? pid : mine()[0]?.id;
      renderAssistantContent();
    }
    setTimeout(() => $("#aiQuestion")?.focus(), 30);
  }
}
function askRomi() {
  let q = $("#aiQuestion").value.trim();
  if (!q) return;
  let p = data.patients.find((x) => x.id === aiSelected) || pat(),
    n = data.notes[p.id] || [],
    t = data.tasks[p.id] || [],
    e = Object.values(data.evaluations).filter((x) => x.patient === p.id),
    answer = "";
  let low = q.toLowerCase();
  if (/tarea|actividad/.test(low))
    answer = t.length
      ? t
          .map((x) => `• ${x.name}: ${x.done ? "Realizada" : "Pendiente"}`)
          .join("\n")
      : "No hay tareas registradas.";
  else if (/evaluaci|escala|psicom/.test(low))
    answer = e.length
      ? e
          .map(
            (x) =>
              `• ${instruments[x.instrument]?.name || x.instrument} · ${x.date} · ${typeof x.score === "object" ? JSON.stringify(x.score) : x.score}`,
          )
          .join("\n")
      : "No hay evaluaciones capturadas.";
  else if (/sesion|nota|resum/.test(low))
    answer = n.length
      ? n
          .map(
            (x) => `• Sesión ${x.num} (${x.date}): ${x.summary.slice(0, 200)}`,
          )
          .join("\n")
      : "No hay notas de evolución registradas. Las sesiones sin nota no se interpretan como atención documentada.";
  else if (/informe|borrador/.test(low))
    answer = `BORRADOR, NO APTO PARA FIRMAR AUTOMÁTICAMENTE\nExpediente: ${p.id}\nMotivo: ${p.reason || "Sin registro"}\nNotas de evolución: ${n.length}\nTareas realizadas: ${t.filter((x) => x.done).length}/${t.length}\nEvaluaciones: ${e.length}\nCompletar manualmente: hallazgos, valoración, tratamiento y firma.`;
  else if (/proxim|plan/.test(low))
    answer = `Plan de revisión registrado: ${p.planEnd || "Sin fecha asignada"}. Próximas citas: ${
      data.appointments
        .filter((a) => a.people.includes(p.id) && a.status === "Programada")
        .map((a) => a.date + " " + a.time + " · " + a.type)
        .join("; ") || "No registradas"
    }. Verificar directamente con el profesional.`;
  else
    answer =
      "Selecciona una consulta sobre notas, tareas, evaluaciones, citas o borrador de informe. El prototipo solo recupera datos registrados en este expediente.";
  $("#aiConversation").innerHTML +=
    `<div class="aiBubble user">${esc(q)}</div><div class="aiBubble">${esc(answer).replace(/\\n/g, "<br>")}</div>`;
  $("#aiQuestion").value = "";
  $("#aiConversation").scrollTop = $("#aiConversation").scrollHeight;
}

// MÓDULO FINANCIERO: únicamente demostración local; jamás captura tarjeta/CVV ni confirma pagos reales.
const money = (n) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(
    Number(n) || 0,
  );
const charges = () => data.charges ?? (data.charges = []);
const due = (c) => Math.max(0, Number(c.amount) - Number(c.paid || 0));
const myCharges = () =>
  charges().filter((c) =>
    isPatient() ? c.patient === "PS-0001" : c.owner === role,
  );
const statusCharge = (c) =>
  c.status === "Cancelado" || c.status === "Reembolsado"
    ? c.status
    : due(c) < 0.001
      ? "Pagado"
      : Number(c.paid) > 0
        ? "Parcial"
        : "Pendiente";
function paymentRows(items, patientView = false) {
  return items.length
    ? `<div class="tableWrap"><table><thead><tr><th>Referencia</th>${patientView ? "" : "<th>Paciente</th>"}<th>Concepto</th><th>Importe</th><th>Abonado</th><th>Pendiente</th><th>Estado</th><th>Acción</th></tr></thead><tbody>${items.map((c) => `<tr><td><b>${esc(c.id)}</b><br><small>${esc(c.date || "")}</small></td>${patientView ? "" : `<td>${esc(person(c.patient))}</td>`}<td>${esc(c.label)}<br><small>Vence: ${esc(c.due || "No definida")}</small></td><td>${money(c.amount)}</td><td>${money(c.paid)}</td><td>${money(due(c))}</td><td>${tag(statusCharge(c))}</td><td><button class="btn soft" onclick="showPayment('${c.id}')">Ver detalle →</button></td></tr>`).join("")}</tbody></table></div>`
    : '<div class="empty">No hay cobros registrados en este perfil.</div>';
}
function paymentsView() {
  let items = myCharges(),
    pending = items.filter(
      (c) => !["Cancelado", "Reembolsado"].includes(c.status),
    ),
    total = pending.reduce((s, c) => s + Number(c.amount), 0),
    paid = pending.reduce((s, c) => s + Number(c.paid), 0),
    unpaid = pending.reduce((s, c) => s + due(c), 0);
  if (isPatient())
    return (
      header(
        "PORTAL DEL PACIENTE",
        "Mis pagos",
        "Consulta tus cargos y referencias de pago de demostración.",
      ) +
      `<div class="grid"><div class="card"><div class="statlabel">IMPORTE REGISTRADO</div><div class="stat">${money(total)}</div></div><div class="card"><div class="statlabel">ABONADO</div><div class="stat">${money(paid)}</div></div><div class="card"><div class="statlabel">PENDIENTE</div><div class="stat">${money(unpaid)}</div></div><div class="card"><div class="statlabel">MONEDA</div><div class="stat">MXN</div><small>Pesos mexicanos</small></div></div><div class="card section"><div class="toolbar"><h2>Mis cargos</h2></div>${paymentRows(items, true)}<div class="notice section">Este prototipo no recibe pagos reales ni solicita datos bancarios. En producción abrirá una pantalla de cobro segura del proveedor externo.</div></div>`
    );
  return (
    header(
      "ADMINISTRACIÓN",
      "Cobros y pagos",
      "Control de honorarios, anticipos, paquetes y conciliación de demostración.",
      `<button class="btn primary" onclick="newCharge()">＋ Crear cobro</button><button class="btn" onclick="exportCharges()">↓ Exportar CSV</button>`,
    ) +
    `<div class="grid"><div class="card"><div class="statlabel">TOTAL REGISTRADO</div><div class="stat">${money(total)}</div></div><div class="card"><div class="statlabel">PAGOS / ANTICIPOS</div><div class="stat">${money(paid)}</div></div><div class="card"><div class="statlabel">SALDO POR COBRAR</div><div class="stat">${money(unpaid)}</div></div><div class="card"><div class="statlabel">CARGOS ABIERTOS</div><div class="stat">${pending.filter((c) => due(c) > 0).length}</div></div></div><div class="card section"><div class="toolbar"><h2>Movimientos por paciente</h2><button class="btn primary" onclick="newCharge()">＋ Nuevo cargo</button></div>${paymentRows(items)}<div class="notice section">La confirmación manual se representa solo en esta demostración. En producción el cambio a «Pagado» debe recibirse del proveedor mediante una notificación verificada en el servidor. La contabilidad queda separada de las notas clínicas.</div></div>`
  );
}
function patientPaymentDetail() {
  let p = pat(),
    cs = charges().filter((c) => c.patient === p.id && c.owner === role);
  return `<div class="toolbar"><div><h2>Pagos de ${esc(p.name)}</h2><p class="muted">Administración financiera independiente de la documentación clínica.</p></div><button class="btn primary" onclick="newCharge('${p.id}')">＋ Nuevo cobro</button></div><div class="grid"><div class="card"><div class="statlabel">COBROS</div><div class="stat">${cs.length}</div></div><div class="card"><div class="statlabel">IMPORTE</div><div class="stat">${money(cs.filter((c) => !["Cancelado", "Reembolsado"].includes(c.status)).reduce((s, c) => s + Number(c.amount), 0))}</div></div><div class="card"><div class="statlabel">ABONADO</div><div class="stat">${money(cs.filter((c) => !["Cancelado", "Reembolsado"].includes(c.status)).reduce((s, c) => s + Number(c.paid), 0))}</div></div><div class="card"><div class="statlabel">POR COBRAR</div><div class="stat">${money(cs.filter((c) => !["Cancelado", "Reembolsado"].includes(c.status)).reduce((s, c) => s + due(c), 0))}</div></div></div><div class="card section">${paymentRows(cs)}</div>`;
}
function newCharge(id = "") {
  if (isPatient()) return;
  let available = mine(),
    selected = id || pid;
  modal(
    "Crear nuevo cobro",
    `<p class="muted">Define el servicio y emite una referencia de demostración, sin captura de tarjetas.</p><div class="formgrid"><div class="field wide"><label>Paciente</label><select id="chgPatient">${available.map((p) => `<option value="${p.id}" ${p.id === selected ? "selected" : ""}>${p.id} · ${esc(p.name)}</option>`).join("")}</select></div><div class="field"><label>Tipo de cobro</label><select id="chgType"><option>Sesión individual</option><option>Evaluación psicológica</option><option>Sesión grupal</option><option>Paquete de sesiones</option><option>Anticipo</option><option>Otro servicio</option></select></div><div class="field"><label>Modalidad</label><select id="chgMode"><option>Presencial</option><option>Virtual</option><option>Mixta</option></select></div><div class="field wide"><label>Concepto / descripción</label><input id="chgLabel" placeholder="Ej. Seguimiento individual · sesión 4"></div><div class="field"><label>Importe (MXN) *</label><input id="chgAmount" type="number" min="1" max="999999" step="0.01" placeholder="700.00"></div><div class="field"><label>Fecha de vencimiento</label><input id="chgDue" type="date" value="${todayISO()}"></div><div class="field"><label>Vincular cita (opcional)</label><select id="chgAppointment"><option value="">Sin vincular</option>${data.appointments
      .filter((a) => a.owner === role)
      .map(
        (a) =>
          `<option value="${esc(a.id)}">${esc(a.id)} · ${esc(a.date)} · ${esc(a.time)} (${esc(a.type)})</option>`,
      )
      .join(
        "",
      )}</select></div><div class="field"><label>Forma de cobro prevista</label><select id="chgMethod"><option>Enlace de pago</option><option>Transferencia</option><option>Efectivo</option><option>Terminal externa</option></select></div></div><div class="notice section">La referencia y el enlace que genere esta demo no cobran dinero. Para operar, será necesario conectar el servidor con una pasarela de pagos autorizada.</div>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="saveCharge()">Generar cargo de prueba</button>`,
  );
}
function saveCharge() {
  let id = $("#chgPatient").value,
    p = data.patients.find((x) => x.id === id),
    amount = Number($("#chgAmount").value);
  if (
    !p ||
    p.owner !== role ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    amount > 999999
  )
    return notify("Selecciona un paciente e importe válido");
  let num =
      charges().reduce(
        (m, c) => Math.max(m, Number((c.id || "").replace("CO-", "")) || 0),
        1000,
      ) + 1,
    code = "CO-" + num;
  charges().push({
    id: code,
    patient: id,
    appointment: $("#chgAppointment").value,
    label: $("#chgLabel").value.trim() || $("#chgType").value,
    service: $("#chgType").value,
    format: $("#chgMode").value,
    amount: Math.round(amount * 100) / 100,
    paid: 0,
    date: "2026-09-29",
    due: $("#chgDue").value,
    status: "Pendiente",
    method: $("#chgMethod").value,
    owner: role,
    link: "PAGO-DEMO-" + num,
  });
  save();
  closeModal();
  showPayment(code);
  notify("Cargo ficticio creado");
}
function showPayment(id) {
  let c = charges().find(
    (x) =>
      x.id === id && (isPatient() ? x.patient === "PS-0001" : x.owner === role),
  );
  if (!c) return notify("Cargo no disponible");
  let link = "https://romimente.example/pago/" + encodeURIComponent(c.link),
    status = statusCharge(c),
    buttons = isPatient()
      ? `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="notify('Demo: en producción aquí se abre la pasarela externa. No se efectúa ningún cobro.')">Pagar en pasarela (demo)</button>`
      : `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="copyPayRef('${c.id}')">Copiar referencia de prueba</button>`;
  modal(
    "Detalle de cobro · " + esc(c.id),
    `<div class="card" style="box-shadow:none"><div class="toolbar"><div><div class="eyebrow">${isPatient() ? "TU CARGO" : "CARGO DE " + esc(person(c.patient))}</div><h2>${esc(c.label)}</h2></div>${tag(status)}</div><div class="three"><div><small>Importe</small><h2>${money(c.amount)}</h2></div><div><small>Abonado</small><h2>${money(c.paid)}</h2></div><div><small>Saldo</small><h2>${money(due(c))}</h2></div></div><p><b>Fecha de cargo:</b> ${esc(c.date)} · <b>Vencimiento:</b> ${esc(c.due)}</p><p><b>Referencia:</b> ${esc(c.link)}</p><p><b>Método informado:</b> ${esc(c.method)}</p><div class="notice">Enlace ilustrativo: ${esc(link)}<br>No es un dominio activo ni procesa transacciones. En la aplicación real se obtendrá una URL temporal del proveedor.</div></div>${!isPatient() && !["Cancelado", "Reembolsado"].includes(c.status) ? `<div class="sheet section"><h3>Acciones administrativas de prueba</h3><p class="muted tiny">Registrar un abono simulado no confirma una transacción bancaria. Los pagos en línea reales se actualizarán por webhook verificado.</p><div class="formgrid"><div class="field"><label>Registrar abono ficticio (MXN)</label><input type="number" id="addPaid" min="0.01" max="${due(c)}" step="0.01" value="${due(c)}"></div><div class="field"><label>Medio informado</label><select id="paidMethod"><option>Transferencia (demo)</option><option>Efectivo (demo)</option><option>Terminal (demo)</option></select></div></div><div class="btnrow"><button class="btn soft" onclick="demoPayment('${c.id}')">Guardar abono de prueba</button><button class="btn danger" onclick="cancelCharge('${c.id}')">Cancelar cargo</button></div></div>` : ""}`,
    buttons,
  );
}
function copyPayRef(id) {
  let c = charges().find((x) => x.id === id && x.owner === role);
  if (!c) return;
  let msg = `ROMImente · referencia de demostración\n${c.id} · ${c.link}\n${c.label}\nImporte ${money(c.amount)} · Saldo ${money(due(c))}\nEste mensaje NO constituye un enlace de pago real.`;
  if (navigator.clipboard?.writeText)
    navigator.clipboard
      .writeText(msg)
      .then(() => notify("Referencia de prueba copiada"))
      .catch(() => notify(msg));
  else prompt("Copiar referencia", msg);
}
function demoPayment(id) {
  let c = charges().find((x) => x.id === id && x.owner === role),
    amount = Number($("#addPaid")?.value);
  if (!c || !Number.isFinite(amount) || amount <= 0 || amount > due(c) + 0.001)
    return notify("Abono superior al saldo o importe inválido");
  c.paid = Math.round((Number(c.paid) + amount) * 100) / 100;
  c.status = statusCharge(c);
  c.method = $("#paidMethod").value;
  save();
  closeModal();
  showPayment(id);
  notify("Abono ficticio registrado. No se procesó dinero.");
}
function cancelCharge(id) {
  let c = charges().find((x) => x.id === id && x.owner === role);
  if (!c || Number(c.paid) > 0)
    return notify(
      "Hay un abono registrado. Requiere conciliación / reembolso fuera de esta demo.",
    );
  if (confirm("¿Cancelar este cargo ficticio?")) {
    c.status = "Cancelado";
    save();
    closeModal();
    go("cobros");
  }
}
function exportCharges() {
  let items = myCharges(),
    cols = [
      "Referencia",
      "Expediente",
      "Paciente",
      "Concepto",
      "Importe MXN",
      "Abonado MXN",
      "Saldo MXN",
      "Estado",
      "Método",
      "Vencimiento",
    ];
  let rows = items.map((c) => [
      c.id,
      c.patient,
      person(c.patient),
      c.label,
      c.amount,
      c.paid,
      due(c),
      statusCharge(c),
      c.method,
      c.due,
    ]),
    csv = [cols, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
  let b = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }),
    url = URL.createObjectURL(b),
    a = document.createElement("a");
  a.href = url;
  a.download = "ROMImente_cobros_demo.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Personalización accesible desde Configuración.
function defaultSettingsForRole(r) {
  const base =
    r === "psi2"
      ? {
          fullName: "Daniel Mora",
          email: "daniel.mora@romi.demo",
          phone: "222 555 1902",
          license: "87654321",
          specialty: "Psicología clínica y terapia breve",
          clinic: "Centro Integral de Psicología",
          address: "Puebla, Pue.",
          instagram: "@danielmora.psic",
          website: "danielmora-psicologia.mx",
        }
      : {
          fullName: "Elena Ríos",
          email: "elena.rios@romi.demo",
          phone: "222 555 1901",
          license: "12345678",
          specialty: "Psicología clínica",
          clinic: "Consultorio de Psicología Integral",
          address: "Puebla, Pue.",
          instagram: "@elena.rios.psic",
          website: "elenarios-psicologia.mx",
        };
  return {
    ...base,
    brandColor: "#9AAA7A",
    pdfTheme: "editorial",
    includeLogo: true,
    pdfFooter: "Consultorio de Psicología · WhatsApp 222 555 1901",
    calendarGoogle: "https://calendar.google.com/calendar/embed?src=...",
    calendly: "https://calendly.com/tu-usuario",
    planName: "Profesional",
    planStatus: "Activa",
    renewDate: "2026-10-29",
    billingEmail: base.email,
    planPrice: "$1,290 MXN / mes",
    seatCount: "1 usuaria/o",
    storage: "5 GB",
    maintenanceRate: 4,
    maintenanceAreas: ["Agenda", "Expediente clínico"],
    maintenanceComment: "",
    techCompany:
      "Instituto de Innovación Tecnológica y de Inteligencia Artificial Avanzada STARK",
    techEmail: "contacto@romiai.com.mx",
    techPhone: "Por definir",
    logo: "",
  };
}
function settingsProfile() {
  data.settings ??= { profiles: {} };
  data.settings.profiles ??= {};
  if (!data.settings.profiles[role]) {
    data.settings.profiles[role] = defaultSettingsForRole(role);
    save();
  }
  return data.settings.profiles[role];
}
function settingsInitials(name) {
  return (
    String(name || "P")
      .split(/\s+/)
      .map((x) => x[0] || "")
      .slice(0, 2)
      .join("")
      .toUpperCase() || "P"
  );
}
function settingsMenuItem(id, label) {
  return `<button class="${cfgTab === id ? "active" : ""}" onclick="cfgTab='${id}';go('config')">${label}</button>`;
}
function colorSwatch(hex, current) {
  return `<button type="button" class="swatch ${current === hex ? "active" : ""}" style="background:${hex}" title="${hex}" onclick="setBrandColor('${hex}')"></button>`;
}
function pdfThemeCard(id, title, sub, colors, current) {
  return `<button type="button" class="themeCard ${current === id ? "active" : ""}" onclick="setPdfTheme('${id}')"><div class="themePreview">${colors.map((c) => `<span style="background:${c};width:${c === colors[0] ? 56 : 44}px"></span>`).join("")}</div><b>${title}</b><div class="muted">${sub}</div>${current === id ? '<div class="formHint">✓ Activo</div>' : ""}</button>`;
}
function profileSettingsTab(s) {
  return `<div class="settingsCard"><div class="settingsHead"><h2>Mi perfil</h2></div><div class="settingsBody"><div class="profileHero"><div class="profileAvatar">${esc(settingsInitials(s.fullName))}</div><div><h3 style="margin-bottom:4px">${esc(s.fullName)}</h3><div class="muted">Este perfil se utiliza como referencia del profesional, en el encabezado del sistema y en salidas documentales.</div><div class="infoChip">${esc(s.specialty)}</div><div class="infoChip">Cédula ${esc(s.license)}</div></div></div></div></div><div class="settingsCard"><div class="settingsHead"><h2>Información personal</h2></div><div class="settingsBody"><div class="settingsGrid2">${inputField("Nombre completo *", "cfgFullName", "text", s.fullName)}${inputField("Email *", "cfgEmail", "email", s.email)}${inputField("Teléfono", "cfgPhone", "text", s.phone)}<div class="field"><label for="cfgLicense">Cédula profesional</label><div style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px"><input id="cfgLicense" value="${esc(s.license)}"><button class="btn" type="button" onclick="notify('Validación demostrativa: en la app real se consultaría el registro correspondiente.')">Verificar</button></div><div class="formHint">La cédula puede mostrarse en el perfil y en documentos institucionales.</div></div></div></div></div><div class="settingsCard"><div class="settingsHead"><h2>Información profesional</h2></div><div class="settingsBody"><div class="settingsGrid2">${inputField("Especialidad", "cfgSpecialty", "text", s.specialty)}${inputField("Nombre del consultorio / clínica", "cfgClinic", "text", s.clinic)}<div class="field wide"><label for="cfgAddress">Dirección</label><input id="cfgAddress" value="${esc(s.address)}"></div></div><div class="saveBar"><button class="btn primary" type="button" onclick="saveProfileSettings()">Guardar cambios</button></div></div></div>`;
}
function brandSettingsTab(s) {
  const colors = [
    "#9AAA7A",
    "#3669D8",
    "#7C4BE4",
    "#EB3B30",
    "#1C98B9",
    "#E58800",
    "#18A16D",
    "#1E1E1E",
    "#B89D7C",
  ];
  return `<div class="settingsCard"><div class="settingsHead"><h2>Marca y personalización</h2></div><div class="settingsBody"><div class="logoUploader"><div class="logoPreview">${s.logo ? `<img src="${s.logo}" alt="Logo">` : `<div class="logoFallback">✦</div>`}</div><div><div style="font-weight:700;margin-bottom:6px">Logo de clínica / consultorio</div><div class="muted" style="margin-bottom:10px">Se utilizará en planes de actividades, PDFs, reportes y documentos con formato institucional.</div><input class="uploadHidden" id="brandLogoInput" type="file" accept="image/png,image/jpeg,image/webp" onchange="handleLogoUpload(event)"><div class="btnrow"><button class="btn" type="button" onclick="document.getElementById('brandLogoInput').click()">Cambiar logo</button>${s.logo ? '<button class="btn danger" type="button" onclick="removeLogo()">Eliminar</button>' : ""}</div><div class="formHint">JPG o PNG, máximo 2 MB.</div></div></div><div style="margin-top:22px"><div style="font-weight:700">Color de marca</div><div class="muted">Se usará en planes institucionales, PDFs y elementos de identidad clínica.</div><div class="swatchRow">${colors.map((c) => colorSwatch(c, s.brandColor)).join("")}</div></div></div></div><div class="settingsCard"><div class="settingsHead"><h2>Tu marca en los PDFs</h2></div><div class="settingsBody"><div style="font-weight:700;margin-bottom:6px">Estilo del PDF</div><div class="muted">Define la apariencia base para reportes, planes de actividades y formatos descargables.</div><div class="themeRow">${pdfThemeCard("editorial", "Editorial", "Premium · serif", ["#F6EFE6", s.brandColor, "#45632B"], s.pdfTheme)}${pdfThemeCard("clinico", "Clínico", "Sobrio · azul", ["#F5F7FB", "#1D6A98", "#0D4B73"], s.pdfTheme)}${pdfThemeCard("minimal", "Minimal", "B/N · impresión", ["#F8F8F8", "#111111", "#E8E8E8"], s.pdfTheme)}</div><label class="checkline"><input id="cfgIncludeLogo" type="checkbox" ${s.includeLogo ? "checked" : ""}><span><b>Incluir tu logo en los PDFs</b><br><span class="muted">Aparece en la portada y encabezado de cada documento institucional.</span></span></label><div class="settingsGrid2"><div class="field"><label for="cfgPdfFooter">Footer del PDF (opcional)</label><input id="cfgPdfFooter" value="${esc(s.pdfFooter)}" placeholder="Consultorio · WhatsApp · Sitio web"></div><div></div><div class="field"><label for="cfgInstagram">Instagram</label><input id="cfgInstagram" value="${esc(s.instagram)}" placeholder="@tuusuario"></div><div class="field"><label for="cfgWebsite">Sitio web</label><input id="cfgWebsite" value="${esc(s.website)}" placeholder="tusitio.com"></div></div><div class="inlineNoteBox" style="margin-top:16px"><div class="toolbar"><div><b>¿Cómo se verá tu PDF?</b><div class="muted">Descarga un PDF de ejemplo con un plan ficticio y tu configuración actual.</div></div><button class="btn" type="button" onclick="previewPdfSettings()">Ver ejemplo</button></div></div><div class="saveBar"><button class="btn primary" type="button" onclick="saveBrandSettings()">Guardar cambios</button></div></div></div>`;
}
function calendarSettingsTab(s) {
  return `<div class="settingsCard"><div class="settingsHead"><h2>Integraciones de calendario</h2></div><div class="settingsBody"><div class="settingsGrid2"><div class="field wide"><label for="cfgGoogleCalendar">Google Calendar (URL de embed)</label><input id="cfgGoogleCalendar" value="${esc(s.calendarGoogle)}" placeholder="https://calendar.google.com/calendar/embed?src=..."><div class="formHint">¿Cómo obtengo la URL? Desde Google Calendar &gt; Configuración del calendario &gt; Integrar calendario &gt; URL de inserción.</div></div><div></div><div class="field wide"><label for="cfgCalendly">Calendly</label><input id="cfgCalendly" value="${esc(s.calendly)}" placeholder="https://calendly.com/tu-usuario"><div class="formHint">Puedes usarlo como enlace externo de reserva si más adelante deseas publicarlo.</div></div><div></div></div><div class="notice section">Las videollamadas del prototipo pueden seguir utilizándose con Zoom. Estas integraciones son complementarias para sincronización o agenda externa.</div><div class="saveBar"><button class="btn primary" type="button" onclick="saveCalendarSettings()">Guardar cambios</button></div></div></div>`;
}
function subscriptionSettingsTab(s) {
  return `<div class="settingsCard"><div class="settingsHead"><h2>Suscripción</h2></div><div class="settingsBody"><div class="subCards"><div class="subCard"><div class="eyebrow">PLAN ACTUAL</div><h3>${esc(s.planName)}</h3><div class="muted">Estado: <b>${esc(s.planStatus)}</b><br>Renovación: <b>${esc(s.renewDate)}</b><br>Precio: <b>${esc(s.planPrice)}</b></div></div><div class="subCard"><div class="eyebrow">CAPACIDAD</div><h3>${esc(s.seatCount)}</h3><div class="muted">Almacenamiento incluido: <b>${esc(s.storage)}</b><br>Recordatorios automáticos para agenda y tareas activados en demo.</div></div><div class="subCard"><div class="eyebrow">FACTURACIÓN</div><h3>Email de cobro</h3><div class="muted">${esc(s.billingEmail)}</div></div></div><div class="settingsGrid2 section"><div><h3>Incluye actualmente</h3><ul class="featureList"><li>Expediente psicológico y documentación clínica</li><li>Agenda, sesiones y recordatorios</li><li>Biblioteca / repertorio clínico</li><li>Planes de actividades y plantillas PDF</li><li>Asistente clínico IA en modo demostración</li></ul></div><div><h3>Gestión administrativa</h3>${inputField("Correo de facturación", "cfgBillingEmail", "email", s.billingEmail)}${inputField("Plan / referencia comercial", "cfgPlanName", "text", s.planName)}<div class="formHint">En la aplicación real este apartado se conectaría con pasarela de pago y facturación.</div></div></div><div class="saveBar"><button class="btn primary" type="button" onclick="saveSubscriptionSettings()">Guardar cambios</button></div></div></div>`;
}
function maintenanceSettingsTab(s) {
  const rate = Number(s.maintenanceRate || 0);
  const areas = [
    "Agenda",
    "Expediente clínico",
    "Evaluaciones",
    "Biblioteca",
    "Cobros",
    "Asistente IA",
  ];
  return `<div class="settingsCard"><div class="settingsHead"><h2>Mantenimiento</h2></div><div class="settingsBody"><div class="maintenanceBoxes"><div class="settingsCard" style="margin:0"><div class="settingsHead"><h2>Control de calidad</h2></div><div class="settingsBody"><div class="muted">Ayúdanos a priorizar mejoras del sistema. Esta encuesta es demostrativa y sirve para el seguimiento interno de calidad.</div><div style="margin-top:14px;font-weight:700">Califica la experiencia general</div><div class="qaScale">${[1, 2, 3, 4, 5].map((n) => `<button type="button" class="${rate === n ? "active" : ""}" onclick="setMaintenanceRate(${n})">${n}</button>`).join("")}</div><div style="font-weight:700;margin:12px 0 6px">¿Qué deseas mejorar primero?</div><div class="checkStack">${areas.map((a) => `<label class="checkline optionTile"><input type="checkbox" class="maintArea" value="${esc(a)}" ${(s.maintenanceAreas || []).includes(a) ? "checked" : ""}><span>${esc(a)}</span></label>`).join("")}</div><div class="field" style="margin-top:12px"><label for="cfgMaintenanceComment">Comentarios o sugerencias</label><textarea id="cfgMaintenanceComment" placeholder="Cuéntanos qué mejorarías, qué te hizo falta o qué proceso deseas optimizar.">${esc(s.maintenanceComment || "")}</textarea></div></div></div><div class="contactPanel"><h3>Contacto de la empresa de tecnología</h3><p class="muted">Para incidencias, soporte, mejoras o seguimiento técnico del proyecto.</p><p><b>Empresa:</b> ${esc(s.techCompany)}</p><p><b>Correo:</b> ${esc(s.techEmail)}</p><p><b>Teléfono / WhatsApp:</b> ${esc(s.techPhone)}</p><p><b>Horario de atención:</b> Lunes a viernes · 09:00 a 18:00 h</p><div class="btnrow"><button class="btn" type="button" onclick="notify('Se enviaría un mensaje al área tecnológica en la versión real.')">Contactar soporte</button><button class="btn" type="button" onclick="notify('Se abriría un ticket de mejora en la versión real.')">Solicitar mejora</button></div></div></div><div class="saveBar"><button class="btn primary" type="button" onclick="saveMaintenanceSettings()">Guardar cambios</button></div></div></div>`;
}
function accountSettingsTab(s) {
  return `<div class="settingsCard"><div class="settingsHead"><h2>Cuenta</h2></div><div class="settingsBody"><div class="accountLaunch"><div><h3 style="margin-bottom:4px">Administración de la cuenta</h3><div class="muted">Consulta tus datos de acceso, correos vinculados, seguridad y dispositivos activos.</div><div class="miniMeta"><span>Correo principal: <b>${esc(s.email)}</b></span><span>Estado: <b>Activa</b></span></div></div><button class="btn primary" type="button" onclick="openAccountModal('profile')">Abrir panel de cuenta</button></div><div class="inlineNoteBox section"><b>Seguridad y acceso</b><div class="muted">Desde el panel de cuenta podrás revisar el perfil, correos electrónicos vinculados, seguridad básica, dispositivos activos y acciones de cuenta.</div></div></div></div>`;
}
function renderSettingsTab(s) {
  return cfgTab === "perfil"
    ? profileSettingsTab(s)
    : cfgTab === "marca"
      ? brandSettingsTab(s)
      : cfgTab === "calendario"
        ? calendarSettingsTab(s)
        : cfgTab === "suscripcion"
          ? subscriptionSettingsTab(s)
          : cfgTab === "mantenimiento"
            ? maintenanceSettingsTab(s)
            : accountSettingsTab(s);
}
function config() {
  if (isPatient()) return baseConfig();
  const s = settingsProfile();
  return (
    header(
      "AJUSTES",
      "Configuración",
      "Administra tu perfil profesional, identidad institucional e integraciones.",
    ) +
    `<div class="settingsLayout"><aside class="settingsNav"><h3>Mi cuenta</h3>${settingsMenuItem("perfil", "Mi perfil")}${settingsMenuItem("marca", "Marca y PDF")}${settingsMenuItem("calendario", "Calendario")}${settingsMenuItem("suscripcion", "Suscripción")}${settingsMenuItem("mantenimiento", "Mantenimiento")}${settingsMenuItem("cuenta", "Cuenta")}</aside><section class="settingsMain">${renderSettingsTab(s)}</section></div>`
  );
}
function saveProfileSettings() {
  const s = settingsProfile();
  s.fullName = $("#cfgFullName").value.trim() || s.fullName;
  s.email = $("#cfgEmail").value.trim() || s.email;
  s.phone = $("#cfgPhone").value.trim();
  s.license = $("#cfgLicense").value.trim();
  s.specialty = $("#cfgSpecialty").value.trim();
  s.clinic = $("#cfgClinic").value.trim();
  s.address = $("#cfgAddress").value.trim();
  save();
  $("#username").textContent = s.fullName;
  $("#userrole").textContent = s.specialty || "Psicología clínica";
  $("#avatar").textContent = settingsInitials(s.fullName);
  go("config");
  notify("Perfil actualizado");
}
function saveBrandSettings() {
  const s = settingsProfile();
  s.includeLogo = !!$("#cfgIncludeLogo").checked;
  s.pdfFooter = $("#cfgPdfFooter").value.trim();
  s.instagram = $("#cfgInstagram").value.trim();
  s.website = $("#cfgWebsite").value.trim();
  save();
  go("config");
  notify("Personalización institucional guardada");
}
function saveCalendarSettings() {
  const s = settingsProfile();
  s.calendarGoogle = $("#cfgGoogleCalendar").value.trim();
  s.calendly = $("#cfgCalendly").value.trim();
  save();
  notify("Integraciones de calendario actualizadas");
}
function saveSubscriptionSettings() {
  const s = settingsProfile();
  s.billingEmail = $("#cfgBillingEmail").value.trim() || s.billingEmail;
  s.planName = $("#cfgPlanName").value.trim() || s.planName;
  save();
  go("config");
  notify("Datos de suscripción guardados");
}
function saveMaintenanceSettings() {
  const s = settingsProfile();
  s.maintenanceAreas = [...document.querySelectorAll(".maintArea:checked")].map(
    (x) => x.value,
  );
  s.maintenanceComment = $("#cfgMaintenanceComment").value.trim();
  save();
  go("config");
  notify("Retroalimentación de mantenimiento guardada");
}
function setBrandColor(hex) {
  const s = settingsProfile();
  s.brandColor = hex;
  save();
  go("config");
}
function setPdfTheme(id) {
  const s = settingsProfile();
  s.pdfTheme = id;
  save();
  go("config");
}
function setMaintenanceRate(n) {
  const s = settingsProfile();
  s.maintenanceRate = n;
  save();
  go("config");
}
function handleLogoUpload(ev) {
  const f = ev.target.files?.[0];
  if (!f) return;
  if (!/^image\//.test(f.type)) return notify("Selecciona una imagen válida");
  if (f.size > 2 * 1024 * 1024) return notify("El archivo supera 2 MB");
  const r = new FileReader();
  r.onload = (e) => {
    const s = settingsProfile();
    s.logo = e.target.result;
    save();
    go("config");
    notify("Logo actualizado");
  };
  r.readAsDataURL(f);
}
function removeLogo() {
  const s = settingsProfile();
  s.logo = "";
  save();
  go("config");
  notify("Logo eliminado");
}
function previewPdfSettings() {
  const s = settingsProfile();
  const accent = s.brandColor || "#9AAA7A";
  modal(
    "Vista previa de PDF institucional",
    `<div style="border:1px solid #e4e9e4;border-radius:18px;overflow:hidden;background:#fff"><div style="padding:18px 20px;background:${accent};color:#fff;display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.9">Plan de actividades</div><h2 style="margin:4px 0 0;color:#fff">Formato institucional</h2></div>${s.logo ? `<img src="${s.logo}" alt="Logo" style="width:54px;height:54px;border-radius:12px;object-fit:cover;background:#fff;padding:4px">` : ""}</div><div style="padding:20px"><p><b>Profesional:</b> ${esc(s.fullName)}</p><p><b>Consultorio:</b> ${esc(s.clinic)}</p><p><b>Actividad:</b> Registro de emociones y práctica breve de respiración.</p><p><b>Objetivo:</b> Fortalecer autorregulación emocional y seguimiento entre sesiones.</p><div class="notice">Pie institucional: ${esc(s.pdfFooter || "Se usará el nombre del consultorio y los datos profesionales.")}</div></div></div>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="notify('En la app real aquí se descargaría el PDF de ejemplo.')">Descargar ejemplo</button>`,
  );
}
function openAccountModal(tabName = "profile") {
  accountTab = tabName;
  renderAccountModal();
}
function renderAccountModal() {
  const s = settingsProfile();
  const profileActive = accountTab === "profile",
    securityActive = accountTab === "security";
  $("#modalRoot").innerHTML =
    `<div class="accountModalBackdrop" onclick="if(event.target===this)closeModal()"><div class="accountModal"><aside class="accountSide"><h2>Account</h2><p>Manage your account info.</p><button class="accountTab ${profileActive ? "active" : ""}" onclick="accountTab='profile';renderAccountModal()">◉ Profile</button><button class="accountTab ${securityActive ? "active" : ""}" onclick="accountTab='security';renderAccountModal()">◌ Security</button><div class="accountFoot">Cuenta de demostración · autenticación no conectada</div></aside><section class="accountMain"><button class="accountClose" onclick="closeModal()">×</button>${profileActive ? accountProfileMarkup(s) : accountSecurityMarkup(s)}</section></div></div>`;
}
function accountProfileMarkup(s) {
  return `<div class="accountSectionTitle">Profile details</div><div class="accountRow"><div>Profile</div><div class="profileHero" style="margin:0"><div class="profileAvatar" style="width:52px;height:52px;font-size:19px">${esc(settingsInitials(s.fullName))}</div><div>${esc(s.fullName)}</div></div><div><button class="btn" onclick="closeModal();cfgTab='perfil';go('config')">Update profile</button></div></div><div class="accountRow"><div>Email addresses</div><div>${esc(s.email)} <span class="accountTag">Primary</span><div style="margin-top:12px;font-weight:700;cursor:pointer" onclick="notify('En la app real aquí agregarías otro correo.')">＋ Add email address</div></div><div>⋯</div></div><div class="accountRow"><div>Connected accounts</div><div>Google · ${esc(s.email)}<div style="margin-top:12px;font-weight:700;cursor:pointer" onclick="notify('En la app real aquí conectarías otra cuenta.')">＋ Connect account</div></div><div>⋯</div></div>`;
}
function accountSecurityMarkup(s) {
  return `<div class="accountSectionTitle">Security</div><div class="accountRow"><div>Password</div><div>Set password</div><div></div></div><div class="accountRow"><div>Active devices</div><div class="deviceBox"><div class="deviceIcon"></div><div><div><b>Macintosh</b> <span class="accountTag">This device</span></div><div class="muted">Navegador ficticio<br>Ubicación no consultada<br>Sesión de demostración</div></div></div><div></div></div><div class="accountRow"><div>Delete account</div><div class="dangerLink" onclick="notify('Acción deshabilitada en el prototipo.')">Delete account</div><div></div></div>`;
}

// Un enlace de ejemplo abre la vista del paciente, sin autenticación real.
window.addEventListener("load", () => {
  let match = location.hash.match(
    /paciente-evaluacion=(GAD7|PHQ9|DASS21|SISCO21)/,
  );
  if (match) {
    scale = match[1];
    evPage = "fill";
    $("#role").value = "patient";
    login();
    go("evaluaciones");
  }
});

/* ROMImente | agenda con datos de contacto, confirmaciones y Zoom. Sin servidor ni notificaciones reales. */
const appointmentParticipant = (a, id) =>
  (a.attendees || []).find((x) => x.patient === id);
function attendeeList(a) {
  return a.attendees?.length
    ? a.attendees
    : (a.people || []).map((id) => {
        let p = data.patients.find((x) => x.id === id);
        return {
          patient: id,
          name: p?.name || id,
          email: p?.email || "",
          phone: p?.contact || "",
          response: "Pendiente",
        };
      });
}
function cleanPhone(v) {
  return String(v || "").replace(/[^\d+]/g, "");
}
function apptStatus(a) {
  if (a.status === "Cancelada") return "Cancelada";
  let r = attendeeList(a).map((x) => x.response || "Pendiente");
  return r.length && r.every((x) => x === "Confirmada")
    ? "Confirmada"
    : r.some((x) => x === "Rechazada")
      ? "Requiere seguimiento"
      : "Por confirmar";
}
function escapeJS(v) {
  return esc(JSON.stringify(String(v)));
}
function apptZoom(a) {
  return /^https:\/\/(?:[\w-]+\.)?zoom\.us\/(j|my|w)\/[\w?=&%-]+$/i.test(
    a.zoom || "",
  )
    ? a.zoom
    : "";
}
function attendeeInput(p) {
  return `<div class="sheet attendeeBlock" style="margin:8px 0" data-patient="${esc(p.id)}"><div class="toolbar"><b>${esc(p.id)} · ${esc(p.name)}</b><small>Datos editables para esta cita</small></div><div class="formgrid">${inputField("Nombre completo *", "an_" + p.id, "text", p.name)}${inputField("Correo electrónico *", "ae_" + p.id, "email", p.email || "")}${inputField("Teléfono *", "at_" + p.id, "tel", p.contact || "")}</div></div>`;
}
function agenda() {
  let arr = data.appointments.filter((a) =>
    isPatient() ? a.people.includes("PS-0001") : a.owner === role,
  );
  return (
    header(
      "PROGRAMACIÓN",
      isPatient() ? "Mis citas" : "Agenda",
      "Atenciones individuales y grupales · Confirmaciones y enlace de Zoom",
      isPatient()
        ? ""
        : `<button class="btn primary" onclick="toggle('newAppointment')">＋ Agendar cita</button>`,
    ) +
    (!isPatient()
      ? `<div class="card hidden" id="newAppointment"><div class="toolbar"><h2>Nueva cita</h2><span class="pill amber">Datos ficticios · No se enviarán mensajes reales</span></div><div class="formgrid">${selectField("Servicio", "apptType", ["Seguimiento", "Sesión", "Evaluación"])}${selectField("Tipo de cita", "apptGroup", ["Individual", "Grupal"])}${selectField("Modalidad", "apptMode", ["Presencial", "Virtual"])}${inputField("Fecha *", "apptDate", "date", todayISO())}${inputField("Hora *", "apptTime", "time", "10:00")}${inputField("Duración en minutos *", "apptDuration", "number", "50")}<div class="field wide"><label>Selecciona participantes del expediente</label><div class="flex">${mine()
          .filter((p) => p.status === "Activo")
          .map(
            (p) =>
              `<label style="display:flex;gap:5px;align-items:center"><input type="checkbox" name="apptPerson" value="${p.id}" onchange="renderApptContacts()"> ${esc(p.name)} (${p.id})</label>`,
          )
          .join(
            "",
          )}</div></div><div class="field wide" id="apptContacts"><p class="muted">Selecciona un paciente para visualizar nombre, correo y teléfono.</p></div><div class="field wide"><label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="apptGuest" onchange="renderApptContacts()"> Agregar acompañante / participante externo (opcional)</label></div><div class="field wide" id="apptGuestBox"></div><div class="field wide" id="apptZoomBox"><div class="sheet"><h3>Sesión virtual · Zoom</h3>${inputField("Enlace de Zoom (https://...)", "apptZoom", "url", "")}<p class="muted tiny">Introduce el enlace de la reunión creada desde tu cuenta de Zoom. El demo no crea reuniones automáticamente. Comparte el enlace únicamente con participantes autorizados.</p></div></div><div class="field wide"><label style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="apptSend" checked> Preparar invitaciones y solicitud de confirmación para los participantes</label><small>Se preparan mensajes para abrir en tu correo o copiar; no hay envío automático desde este archivo local.</small></div></div><div class="section btnrow"><button class="btn primary" onclick="addAppointment()">Guardar y preparar invitaciones</button><button class="btn" onclick="toggle('newAppointment')">Cancelar</button></div></div>`
      : "") +
    `<div class="card section"><div class="toolbar"><h2>Citas registradas</h2><small>Confirmaciones por asistente y recordatorio demostrativo</small></div><div class="tableWrap"><table><thead><tr><th>Fecha / hora</th><th>Duración</th><th>Servicio</th><th>Asistentes y contacto</th><th>Modalidad</th><th>Respuesta</th><th>Acciones</th></tr></thead><tbody>${arr
      .slice()
      .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
      .map(
        (a) =>
          `<tr><td><b>${esc(a.date)}</b><br>${esc(a.time)} h</td><td>${a.duration} min</td><td>${esc(a.type)} ${attendeeList(a).length > 1 ? "· Grupal" : ""}</td><td>${attendeeList(
            a,
          )
            .map(
              (x) =>
                `<b>${esc(x.name)}</b><br><small>${esc(x.email || "Sin correo")} · ${esc(x.phone || "Sin teléfono")}<br>${esc(x.response || "Pendiente")}</small>`,
            )
            .join(
              '<hr style="border:0;border-top:1px solid #eee;">',
            )}</td><td>${tag(a.format)}${a.format === "Virtual" && apptZoom(a) ? "<br><small>Zoom asociado</small>" : ""}</td><td>${tag(apptStatus(a))}</td><td><div style="display:flex;gap:5px;flex-wrap:wrap">${isPatient() ? (a.status === "Programada" ? `<button class="btn soft" onclick="respondAppointment(${escapeJS(a.id)},'PS-0001','Confirmada')">Confirmar</button><button class="btn" onclick="respondAppointment(${escapeJS(a.id)},'PS-0001','Rechazada')">No asistiré</button>` : "") : `<button class="btn" onclick="showAppointment(${escapeJS(a.id)})">Detalles / avisos</button>${a.status === "Programada" ? `<button class="btn danger" onclick="cancelAppointment(${escapeJS(a.id)})">Cancelar</button>` : ""}`}${a.format === "Virtual" && apptZoom(a) && a.status === "Programada" ? `<button class="btn soft" onclick="GenZoom(${escapeJS(a.id)})">Zoom ↗</button>` : ""}</div></td></tr>`,
      )
      .join("")}</tbody></table></div></div>`
  );
}
function renderApptContacts() {
  let root = $("#apptContacts");
  if (!root) return;
  let ids = [...document.querySelectorAll('[name="apptPerson"]:checked')].map(
    (n) => n.value,
  );
  root.innerHTML = ids.length
    ? `<h3>Contacto para invitaciones (${ids.length})</h3>` +
      ids
        .map((id) => attendeeInput(data.patients.find((p) => p.id === id)))
        .join("")
    : '<p class="muted">Selecciona un paciente para visualizar nombre, correo y teléfono.</p>';
  let guest = $("#apptGuestBox");
  if (guest)
    guest.innerHTML = $("#apptGuest")?.checked
      ? `<div class="sheet"><h3>Acompañante / asistente externo</h3><div class="formgrid">${inputField("Nombre completo *", "guestName")}${inputField("Correo electrónico *", "guestEmail", "email")}${inputField("Teléfono *", "guestPhone", "tel")}</div><small>Su asistencia debe ser conocida y autorizada por las personas pertinentes.</small></div>`
      : "";
}
function validateAttendee(x) {
  return (
    x.name &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x.email) &&
    cleanPhone(x.phone).replace(/^\+/, "").length >= 10
  );
}
function addAppointment() {
  let ids = [...document.querySelectorAll('[name="apptPerson"]:checked')].map(
      (e) => e.value,
    ),
    group = $("#apptGroup").value;
  if (!ids.length) return notify("Selecciona al menos un paciente");
  let attendees = ids.map((id) => ({
    patient: id,
    name: ($("#an_" + id)?.value || "").trim(),
    email: ($("#ae_" + id)?.value || "").trim(),
    phone: ($("#at_" + id)?.value || "").trim(),
    response: "Pendiente",
  }));
  if ($("#apptGuest")?.checked)
    attendees.push({
      patient: "",
      name: ($("#guestName")?.value || "").trim(),
      email: ($("#guestEmail")?.value || "").trim(),
      phone: ($("#guestPhone")?.value || "").trim(),
      response: "Pendiente",
    });
  if (group === "Individual" && attendees.length !== 1)
    return notify("La cita individual requiere una sola persona");
  if (group === "Grupal" && attendees.length < 2)
    return notify("Selecciona dos o más asistentes para una sesión grupal");
  if (!attendees.every(validateAttendee))
    return notify(
      "Completa nombre, correo válido y teléfono de cada asistente",
    );
  let date = $("#apptDate").value,
    time = $("#apptTime").value,
    duration = Number($("#apptDuration").value),
    mode = $("#apptMode").value,
    zoom = ($("#apptZoom")?.value || "").trim();
  if (
    !date ||
    !time ||
    !Number.isFinite(duration) ||
    duration < 10 ||
    duration > 360
  )
    return notify("Revisa fecha, hora y duración (10–360 min)");
  if (
    mode === "Virtual" &&
    zoom &&
    !/^https:\/\/(?:[\w-]+\.)?zoom\.us\/(j|my|w)\/[\w?=&%-]+$/i.test(zoom)
  )
    return notify("Introduce una URL HTTPS de Zoom válida, o déjala pendiente");
  if (
    data.appointments.some(
      (a) =>
        a.owner === role &&
        a.status === "Programada" &&
        a.date === date &&
        Number(a.time.slice(0, 2)) * 60 + Number(a.time.slice(3)) <
          Number(time.slice(0, 2)) * 60 + Number(time.slice(3)) + duration &&
        Number(time.slice(0, 2)) * 60 + Number(time.slice(3)) <
          Number(a.time.slice(0, 2)) * 60 +
            Number(a.time.slice(3)) +
            Number(a.duration),
    )
  )
    return notify("El horario se superpone con una cita existente");
  let id = "A" + Date.now();
  data.appointments.push({
    id,
    date,
    time,
    duration,
    people: ids,
    attendees,
    type: $("#apptType").value,
    format: mode,
    zoom: mode === "Virtual" ? zoom : "",
    owner: role,
    status: "Programada",
    invitesPrepared: !!$("#apptSend")?.checked,
    notices: [],
  });
  save();
  go("agenda");
  if ($("#" + id)) {
  }
  showAppointment(id);
  notify(
    "Cita creada. Invitaciones preparadas; envío automático aún no disponible",
  );
}
function inviteText(a, x, reminder = false) {
  let zoom =
    a.format === "Virtual"
      ? apptZoom(a)
        ? `\nEnlace Zoom: ${a.zoom}`
        : "\nEl enlace Zoom se compartirá por el profesional."
      : "\nModalidad presencial. Consulta la ubicación con la clínica.";
  let intro = reminder
    ? "Recordatorio de tu cita en ROMImente"
    : "Invitación a una cita con ROMImente";
  return `${intro}\n\nHola, ${x.name}.\nServicio: ${a.type}\nFecha: ${a.date}\nHora: ${a.time} (hora local de la clínica)\nDuración: ${a.duration} minutos.${zoom}\n\nPor favor, confirma tu asistencia o avisa si necesitas cancelar contactando con la clínica.\nMensaje demostrativo: no ha sido enviado automáticamente.`;
}
function showAppointment(id) {
  let a = data.appointments.find(
    (x) =>
      x.id === id &&
      (isPatient() ? x.people.includes("PS-0001") : x.owner === role),
  );
  if (!a) return;
  let ats = attendeeList(a);
  modal(
    "Detalle de cita · " + esc(id),
    `<div class="sheet"><h2>${esc(a.type)} · ${esc(a.date)} ${esc(a.time)}</h2><p>${esc(a.format)} · ${a.duration} min · ${esc(a.status)}</p>${a.format === "Virtual" ? `<p><b>Zoom:</b> ${apptZoom(a) ? `<a target="_blank" rel="noopener noreferrer" href="${esc(a.zoom)}">Abrir enlace de la reunión ↗</a>` : "Pendiente de registrar"}</p>` : ""}<h3>Respuestas de los participantes</h3>${ats.map((x, i) => `<div class="listitem"><div><b>${esc(x.name)}</b><br><small>${esc(x.email)} · ${esc(x.phone)}</small></div>${tag(x.response || "Pendiente")}</div>${!isPatient() ? `<div class="btnrow"><button class="btn soft" onclick="copyAppointment(${escapeJS(id)},${i},false)">Copiar invitación</button><button class="btn" onclick="emailAppointment(${escapeJS(id)},${i})">Abrir correo ↗</button><button class="btn" onclick="copyAppointment(${escapeJS(id)},${i},true)">Copiar recordatorio</button><button class="btn" onclick="manualResponse(${escapeJS(id)},${i})">Registrar respuesta</button></div>` : ""}`).join("")}<div class="notice section">El demo genera mensajes para copiar y registrar confirmaciones en este navegador; no envía emails, SMS o WhatsApp reales. En producción se usará un enlace de confirmación individual, temporal y protegido.</div></div>`,
    `<button class="btn primary" onclick="closeModal()">Cerrar</button>`,
  );
}
function copyAppointment(id, i, reminder) {
  let a = data.appointments.find((x) => x.id === id && x.owner === role),
    x = a && attendeeList(a)[i];
  if (!x) return;
  let str = inviteText(a, x, reminder);
  if (navigator.clipboard?.writeText)
    navigator.clipboard
      .writeText(str)
      .then(() =>
        notify("Mensaje copiado; pégalo en tu correo o canal autorizado"),
      )
      .catch(() => window.prompt("Copia el mensaje:", str));
  else window.prompt("Copia el mensaje:", str);
  a.notices ??= [];
  a.notices.push({
    kind: reminder ? "Recordatorio preparado" : "Invitación preparada",
    to: x.name,
    date: new Date().toISOString(),
  });
  save();
}
function emailAppointment(id, i) {
  let a = data.appointments.find((x) => x.id === id && x.owner === role),
    x = a && attendeeList(a)[i];
  if (!x?.email) return notify("El participante no tiene correo registrado");
  let subject = encodeURIComponent("ROMImente · Invitación a cita " + a.date),
    body = encodeURIComponent(inviteText(a, x, false));
  window.location.href =
    "mailto:" +
    encodeURIComponent(x.email) +
    "?subject=" +
    subject +
    "&body=" +
    body;
  notify(
    "Se abrió el correo predeterminado; verifica el destinatario antes de enviar",
  );
}
function manualResponse(id, i) {
  let a = data.appointments.find((x) => x.id === id && x.owner === role);
  if (!a || a.status === "Cancelada") return;
  let ats = attendeeList(a),
    x = ats[i];
  let choice = prompt(
    `Respuesta de ${x.name}: escribe C (confirmada), R (rechazada) o P (pendiente).`,
    "C",
  );
  if (choice === null) return;
  let val = { c: "Confirmada", r: "Rechazada", p: "Pendiente" }[
    choice.trim().toLowerCase()
  ];
  if (!val) return notify("Respuesta no válida");
  a.attendees = ats;
  x.response = val;
  save();
  closeModal();
  go("agenda");
  notify("Respuesta guardada para esta cita");
}
function respondAppointment(id, patient, response) {
  let a = data.appointments.find(
    (x) =>
      x.id === id && x.people.includes(patient) && x.status === "Programada",
  );
  if (!a) return notify("La cita no está disponible");
  let ats = attendeeList(a),
    x = ats.find((v) => v.patient === patient);
  if (!x) return notify("No se encontró al participante");
  x.response = response;
  a.attendees = ats;
  save();
  go("agenda");
  notify(
    response === "Confirmada"
      ? "Asistencia confirmada (demostración)"
      : "Aviso de no asistencia registrado",
  );
}
function cancelAppointment(id) {
  let a = data.appointments.find((x) => x.id === id && x.owner === role);
  if (
    a &&
    confirm(
      "¿Cancelar la cita? Deberás avisar a los participantes por el canal autorizado.",
    )
  ) {
    a.status = "Cancelada";
    a.notices ??= [];
    a.notices.push({
      kind: "Cancelación pendiente de notificar",
      date: new Date().toISOString(),
    });
    save();
    go("agenda");
    notify("Cita cancelada. Recuerda enviar el aviso a los participantes");
  }
}
function GenZoom(id) {
  let a = data.appointments.find((x) => x.id === id);
  if (a && apptZoom(a)) window.open(a.zoom, "_blank", "noopener,noreferrer");
  else notify("No se ha registrado un enlace de Zoom válido");
}
function sesiones() {
  let arr = data.appointments.filter(
    (a) =>
      a.format === "Virtual" &&
      (isPatient() ? a.people.includes("PS-0001") : a.owner === role),
  );
  return (
    header(
      "ATENCIÓN A DISTANCIA",
      "Sesiones virtuales",
      "Reuniones de Zoom vinculadas con fecha, hora, asistentes y confirmación.",
      isPatient()
        ? ""
        : `<button class="btn primary" onclick="go('agenda');toggle('newAppointment');$('#apptMode').value='Virtual'">＋ Agendar en Zoom</button>`,
    ) +
    `<div class="two"><div class="card"><h2>Reuniones registradas</h2>${
      arr
        .map(
          (a) =>
            `<div class="sheet"><div class="toolbar"><b>${esc(a.date)} · ${esc(a.time)} h</b>${tag(apptStatus(a))}</div><p>${esc(a.type)} · ${a.duration} minutos</p><p class="muted"><b>Asistentes:</b> ${attendeeList(
              a,
            )
              .map(
                (x) =>
                  esc(x.name) + " (" + esc(x.response || "Pendiente") + ")",
              )
              .join(
                ", ",
              )}</p>${apptZoom(a) ? `<button class="btn primary" onclick="GenZoom(${escapeJS(a.id)})" ${a.status === "Cancelada" ? "disabled" : ""}>Abrir Zoom ↗</button>` : '<p class="muted">El profesional aún no ha añadido el enlace de Zoom.</p>'} <button class="btn" onclick="showAppointment(${escapeJS(a.id)})">Ver invitación</button></div>`,
        )
        .join("") ||
      '<p class="muted">No hay sesiones virtuales registradas.</p>'
    }</div><div class="card"><h2>Antes de conectar</h2><p>Verifica identidad, privacidad, ubicación y contacto telefónico para cualquier interrupción.</p><div class="notice">ROMImente abre enlaces de Zoom proporcionados por el profesional. No crea reuniones ni graba Zoom automáticamente. Cualquier grabación exige consentimiento específico.</div></div></div>`
  );
}

/* V7: El menú Pacientes es una lista; los expedientes se abren individualmente. */
let patientFilter = "Activo",
  patientQuery = "";
function patientsView() {
  if (isPatient()) return dashboard();
  const all = mine(),
    active = all.filter((x) => x.status === "Activo").length,
    inactive = all.length - active;
  const tabs = [
    ["Activo", "Activos", active],
    ["Inactivo", "Inactivos", inactive],
    ["Todos", "Todos", all.length],
  ];
  const selected = all.filter(
    (p) =>
      (patientFilter === "Todos" ||
        (patientFilter === "Activo"
          ? p.status === "Activo"
          : p.status !== "Activo")) &&
      [p.name, p.id, p.contact, p.email, p.phone].some((v) =>
        String(v || "")
          .toLowerCase()
          .includes(patientQuery.toLowerCase()),
      ),
  );
  return (
    header(
      "GESTIÓN DE PACIENTES",
      "Pacientes",
      "Fichas clínicas, citas y notas vinculadas a cada persona.",
      `<button class="btn primary" onclick="newPatient()">＋ Nuevo paciente</button>`,
    ) +
    `<div class="card patientDirectory"><div class="segTabs directoryTabs">${tabs.map(([id, label, count]) => `<button class="${patientFilter === id ? "on" : ""}" onclick="patientFilter='${id}';go('pacientes')">${label} <span class="countBadge">${count}</span></button>`).join("")}</div>
 <div class="toolbar directoryTools"><div class="flex"><input id="patientsQuery" class="headsearch" placeholder="Buscar nombre, expediente, teléfono o correo" value="${esc(patientQuery)}" oninput="searchPatients(this.value)"><button class="btn" onclick="searchPatients($('#patientsQuery').value)">Buscar</button></div><small id="directoryCount">${selected.length} paciente(s)</small></div>
 <div class="tableWrap"><table class="directoryTable"><thead><tr><th>Paciente</th><th>Contacto</th><th>Próxima cita</th><th>Última sesión</th><th>Estado</th><th>Acciones</th></tr></thead><tbody id="directoryRows">${selected.map(directoryRow).join("") || '<tr><td colspan="6" class="muted" style="padding:28px">No hay pacientes que coincidan con la búsqueda.</td></tr>'}</tbody></table></div></div>`
  );
}
function directoryRow(p) {
  const appointments = data.appointments
    .filter((a) => a.people.includes(p.id) && a.status === "Programada")
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  const recent = [...(data.sessionRecords?.[p.id] || [])].sort((a, b) =>
    (b.date || "").localeCompare(a.date || ""),
  )[0];
  const lastNote = [...(data.notes?.[p.id] || [])].sort((a, b) =>
    (b.date || "").localeCompare(a.date || ""),
  )[0];
  const initials = p.name
    .split(/\s+/)
    .map((x) => x.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return `<tr><td><div class="directoryPerson"><div class="avatar" aria-hidden="true">${esc(initials)}</div><div><b>${esc(p.name)}</b><br><small>Exp. ${esc(p.id)}</small></div></div></td><td><div>${esc(p.contact || "Sin teléfono")}</div><small>${esc(p.email || "Sin correo")}</small></td><td>${appointments.length ? esc(appointments[0].date + " · " + appointments[0].time) : '<span class="muted">Sin programar</span>'}</td><td>${esc(recent?.date || lastNote?.date || "Sin sesiones")}</td><td>${tag(p.status)}</td><td><div class="rowActions"><button class="btn" onclick="scheduleFromPatient('${p.id}')">Agendar</button><button class="btn soft" onclick="openP('${p.id}','sesiones')">Abrir expediente →</button></div></td></tr>`;
}
function searchPatients(q) {
  patientQuery = q;
  const caret = $("#patientsQuery")?.selectionStart || 0;
  go("pacientes");
  const input = $("#patientsQuery");
  if (input) {
    input.focus();
    input.setSelectionRange(
      Math.min(caret, input.value.length),
      Math.min(caret, input.value.length),
    );
  }
}
function scheduleFromPatient(id) {
  if (!mine().some((p) => p.id === id)) return;
  go("agenda");
  const comp = $("#newAppointment");
  if (comp) comp.classList.remove("hidden");
  const ch = document.querySelector(`[name="apptPerson"][value="${id}"]`);
  if (ch) {
    ch.checked = true;
    renderApptContacts();
  }
  window.scrollTo(0, 0);
}

/* ROMImente V8: catálogo de instrumentos y seguimiento de aplicaciones */
const additionalAssessments = [
  {
    id: "MINIIPIP",
    name: "Mini-IPIP",
    topic: "Rasgos de personalidad",
    about:
      "Inventario breve de personalidad. Se añade como ficha documental; revisar versión y condiciones de aplicación.",
    group: "Personalidad",
  },
  {
    id: "SALAMANCA",
    name: "Cuestionario Salamanca",
    topic: "Cribado de rasgos de personalidad",
    about:
      "Instrumento orientativo de cribado. No equivale a diagnóstico ni sustituye entrevista clínica.",
    group: "Personalidad",
  },
  {
    id: "BAT12",
    name: "BAT-12",
    topic: "Síntomas de burnout",
    about:
      "Versión breve del Burnout Assessment Tool; requiere formato y corrección validados.",
    group: "Bienestar laboral",
  },
  {
    id: "SATISFACCION",
    name: "Escala General de Satisfacción",
    topic: "Satisfacción laboral",
    about:
      "Identificar y validar la versión específica antes de digitalizar o puntuar.",
    group: "Bienestar laboral",
  },
  {
    id: "APGAR",
    name: "APGAR familiar",
    topic: "Funcionamiento familiar percibido",
    about:
      "Registro de funcionamiento familiar; solicitar versión en español y verificar reglas de interpretación.",
    group: "Familia",
  },
  {
    id: "ASRS",
    name: "ASRS-v1.1",
    topic: "Tamizaje de síntomas de TDAH en adultos",
    about:
      "Instrumento de cribado. No reemplaza una valoración diagnóstica integral.",
    group: "Atención",
  },
  {
    id: "VANDERBILT",
    name: "Vanderbilt para padres",
    topic: "Reporte de cuidadores sobre conducta y atención",
    about: "Confirmar versión, adecuación a la edad y permisos de aplicación.",
    group: "Atención",
  },
];
let evPage = "list",
  evFilter = "Pendientes",
  evSearch = "",
  evSelected = "GAD7",
  evMoment = "Inicial (pretratamiento)";
function ensureAssessments() {
  if (!Array.isArray(data.evalAssignments)) {
    data.evalAssignments = [
      {
        id: "T-DEMO-01",
        patient: "PS-0001",
        instrument: "GAD7",
        status: "Pendiente",
        assigned: "2026-09-28",
        moment: "Inicial (pretratamiento)",
        progress: 0,
      },
      {
        id: "T-DEMO-02",
        patient: "PS-0002",
        instrument: "SISCO21",
        status: "Pendiente",
        assigned: "2026-09-28",
        moment: "Inicial (pretratamiento)",
        progress: 0,
      },
    ];
    save();
  }
  return data.evalAssignments;
}
function instDisplay(k) {
  return (
    instruments[k]?.name ||
    additionalAssessments.find((a) => a.id === k)?.name ||
    k
  );
}
function evPerson(id) {
  return data.patients.find((p) => p.id === id);
}
function evalEntries() {
  ensureAssessments();
  const allowed = isPatient() ? ["PS-0001"] : mine().map((p) => p.id);
  let as = data.evalAssignments
    .filter((a) => allowed.includes(a.patient))
    .map((a) => ({ ...a, entryType: "assigned" }));
  let used = new Set(as.filter((a) => a.resultId).map((a) => a.resultId));
  let completed = Object.values(data.evaluations)
    .filter((e) => allowed.includes(e.patient) && !used.has(e.id))
    .map((e) => ({
      id: e.id,
      patient: e.patient,
      instrument: e.instrument,
      status: "Completado",
      assigned: e.date,
      moment: e.moment,
      resultId: e.id,
      entryType: "recorded",
    }));
  return [...as, ...completed];
}
function evalStats(arr) {
  return {
    p: arr.filter((a) => a.status !== "Completado").length,
    c: arr.filter((a) => a.status === "Completado").length,
    t: arr.length,
  };
}
function evaluationsView() {
  ensureAssessments();
  let arr = evalEntries(),
    counts = evalStats(arr);
  if (isPatient() && evPage === "fill")
    return (
      header(
        "MI ESPACIO",
        "Responder evaluación",
        "Formulario de demostración.",
      ) + evalFilling()
    );
  if (isPatient())
    return (
      header(
        "MI ESPACIO",
        "Mis evaluaciones",
        "Responde los cuestionarios que tu profesional haya asignado.",
      ) +
      `<div class="card ev-panel"><div class="ev-switch"><button class="selected">Asignadas <span class="ev-badge">${arr.length}</span></button></div>${evalTable(true)}</div><div class="notice section">Tu profesional interpretará los resultados. La demostración no envía respuestas a un servidor ni dispone de autenticación real.</div>`
    );
  return (
    header(
      "VALORACIÓN PSICOMÉTRICA",
      "Evaluaciones psicológicas",
      "Listado de aplicaciones por paciente. Los instrumentos se asignan desde la ficha individual.",
      `<button class="btn" onclick="evPage='catalog';go('evaluaciones')">▦ Catálogo de instrumentos</button>`,
    ) +
    (evPage === "catalog"
      ? evalCatalogue()
      : evPage === "fill"
        ? evalFilling()
        : `<div class="card ev-panel"><div class="ev-switch">${[
            ["Pendientes", counts.p],
            ["Completados", counts.c],
            ["Todos", counts.t],
          ]
            .map(
              ([name, n]) =>
                `<button class="${evFilter === name ? "selected" : ""}" onclick="evFilter='${name}';refreshEvalPanel()">${name} <span class="ev-badge">${n}</span></button>`,
            )
            .join(
              "",
            )}</div><div class="ev-toolbar"><input class="search" id="evFind" placeholder="Buscar por paciente, prueba o expediente" value="${esc(evSearch)}" oninput="evSearch=this.value;refreshEvalPanel()"><div class="btnrow"><button class="btn" onclick="evSearch='';refreshEvalPanel()">Limpiar búsqueda</button><button class="btn primary" onclick="evPage='catalog';go('evaluaciones')">＋ Asignar prueba</button></div></div><div id="evalRows">${evalTable(false)}</div><div class="ev-footnote">Las aplicaciones nuevas aparecen como pendientes hasta completar las respuestas. Los resultados se conservan asociados al expediente individual.</div></div>`)
  );
}
function refreshEvalPanel() {
  const p = document.querySelector(".ev-panel");
  if (!p) {
    go("evaluaciones");
    return;
  }
  const counts = evalStats(evalEntries());
  p.querySelector(".ev-switch").innerHTML = [
    ["Pendientes", counts.p],
    ["Completados", counts.c],
    ["Todos", counts.t],
  ]
    .map(
      ([name, n]) =>
        `<button class="${evFilter === name ? "selected" : ""}" onclick="evFilter='${name}';refreshEvalPanel()">${name} <span class="ev-badge">${n}</span></button>`,
    )
    .join("");
  let f = $("#evFind");
  if (f && f.value !== evSearch) f.value = evSearch;
  let r = $("#evalRows");
  if (r) r.innerHTML = evalTable(false);
}
function evalTable(patient) {
  let entries = evalEntries().filter(
    (a) =>
      patient ||
      evFilter === "Todos" ||
      (evFilter === "Completados"
        ? a.status === "Completado"
        : a.status !== "Completado"),
  );
  if (!patient && evSearch.trim()) {
    let q = evSearch.toLocaleLowerCase("es");
    entries = entries.filter((a) =>
      [evPerson(a.patient)?.name, a.patient, instDisplay(a.instrument)].some(
        (v) =>
          String(v || "")
            .toLocaleLowerCase("es")
            .includes(q),
      ),
    );
  }
  return `<div class="tableWrap"><table class="ev-table"><thead><tr>${patient ? "" : "<th>Paciente</th>"}<th>Test</th><th>Estado</th><th>Asignado</th><th>Acciones</th></tr></thead><tbody>${entries.map((a) => `<tr>${patient ? "" : `<td><b>${esc(evPerson(a.patient)?.name || a.patient)}</b><br><small>${esc(a.patient)}</small></td>`}<td><b>${esc(instDisplay(a.instrument))}</b><br><small>${esc(a.moment || "Aplicación")}</small></td><td><span class="pill ${a.status === "Completado" ? "ev-done" : "ev-tint"}">${a.status === "Completado" ? "Completado" : "Pendiente · " + (a.progress || 0) + "%"}</span></td><td>${esc(a.assigned || "—")}</td><td><div class="btnrow">${patient ? (a.status === "Completado" ? '<span class="muted">Enviado</span>' : `<button class="btn primary" onclick="scale='${a.instrument}';scaleTarget='PS-0001';evPage='fill';go('evaluaciones')">Responder</button>`) : `<button class="btn" onclick="openEvalPatient('${a.patient}')">Tests del paciente</button><button class="btn" onclick="evalStatus('${a.id}')">Ver estado</button>`}</div></td></tr>`).join("") || `<tr><td colspan="${patient ? 4 : 5}" style="padding:40px;text-align:center;color:var(--muted)">No hay evaluaciones en este filtro.</td></tr>`}</tbody></table></div>`;
}
function openEvalPatient(id) {
  scaleTarget = id;
  pid = id;
  evPage = "catalog";
  go("evaluaciones");
}
function evalStatus(id) {
  let a = evalEntries().find((x) => x.id === id);
  if (!a) return;
  let e = data.evaluations[a.resultId];
  modal(
    "Estado de evaluación",
    `<div class="sheet"><p><b>Paciente:</b> ${esc(evPerson(a.patient)?.name || a.patient)} (${esc(a.patient)})</p><p><b>Instrumento:</b> ${esc(instDisplay(a.instrument))}</p><p><b>Asignación:</b> ${esc(a.assigned || "—")}</p><p><b>Estado:</b> ${esc(a.status)}</p><p><b>Momento:</b> ${esc(a.moment || "—")}</p>${e ? `<p><b>Puntuación registrada:</b> ${esc(typeof e.score === "object" ? JSON.stringify(e.score) : e.score)}</p>` : '<p class="muted">Sin resultado recibido todavía.</p>'}</div><div class="notice">Prototipo con datos ficticios y almacenamiento local. Las respuestas requieren revisión profesional.</div>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="closeModal();pid='${a.patient}';tab='ficha';go('expediente')">Abrir expediente</button>`,
  );
}
function evalCatalogue() {
  let p = evPerson(scaleTarget) || mine()[0];
  let basic = Object.entries(instruments).map(([id, s]) => ({
    id,
    name: s.name,
    topic:
      id === "GAD7"
        ? "Ansiedad"
        : id === "PHQ9"
          ? "Síntomas depresivos"
          : id === "DASS21"
            ? "Depresión, ansiedad y estrés"
            : "Estrés académico",
    about: s.sub,
    live: true,
  }));
  let all = [...basic, ...additionalAssessments];
  return `<button class="ev-crumb" onclick="evPage='list';go('evaluaciones')">← Volver al seguimiento de evaluaciones</button><div class="card ev-panel"><div class="ev-toolbar"><div><h2 style="margin-bottom:6px">Catálogo de instrumentos</h2><p class="muted" style="margin-bottom:0">Selecciona una escala para registrar o asignar su aplicación.</p></div><div class="field ev-field"><label>Paciente</label><select id="catalogPatient" onchange="scaleTarget=this.value;pid=this.value;go('evaluaciones')">${mine()
    .map(
      (x) =>
        `<option value="${x.id}" ${p?.id === x.id ? "selected" : ""}>${esc(x.name)} · ${x.id}</option>`,
    )
    .join(
      "",
    )}</select></div></div><div class="ev-catalog">${all.map((i) => `<div class="ev-instrument"><div class="ev-topline"><span class="ev-code">${i.topic || i.group}</span><span class="pill ${i.live ? "ev-done" : "amber"}">${i.live ? "Formulario digital" : "Ficha / PDF externo"}</span></div><h3>${esc(i.name)}</h3><p>${esc(i.about)}</p><div class="btnrow">${i.live ? `<button class="btn primary" onclick="assignEval('${i.id}')">＋ Asignar al paciente</button><button class="btn" onclick="scale='${i.id}';evSelected=scale;evPage='fill';go('evaluaciones')">Aplicar aquí</button>` : `<button class="btn" onclick="showExternalEval('${i.id}')">Ver ficha y registro PDF</button>`}</div></div>`).join("")}</div><div class="ev-footnote">Las pruebas adicionales proceden de tu segunda referencia. Solo se ofrecen como fichas documentales hasta incorporar una versión autorizada y validada; no se han inventado sus ítems ni baremos. Los instrumentos no son intercambiables por defecto.</div></div>`;
}
function assignEval(code) {
  const p = evPerson(scaleTarget);
  if (!p) return notify("Selecciona un paciente");
  let a = {
    id: "T" + Date.now(),
    patient: p.id,
    instrument: code,
    status: "Pendiente",
    assigned: new Date().toISOString().slice(0, 10),
    moment: "Inicial (pretratamiento)",
    progress: 0,
  };
  ensureAssessments().push(a);
  save();
  modal(
    "Prueba asignada",
    `<p>Se asignó <b>${esc(instDisplay(code))}</b> a <b>${esc(p.name)}</b>.</p><p class="muted">En la demostración, el enlace abre el portal ficticio PS-0001 y no identifica al destinatario. Para producir enlaces individuales será necesario backend y autenticación por token.</p><button class="btn" onclick="scale='${code}';copyInvitation()">⧉ Copiar enlace demostrativo</button>`,
    `<button class="btn primary" onclick="closeModal();evPage='list';evFilter='Pendientes';go('evaluaciones')">Ver seguimiento</button>`,
  );
}
function showExternalEval(code) {
  let x = additionalAssessments.find((a) => a.id === code);
  if (!x) return;
  modal(
    esc(x.name),
    `<p><b>Área:</b> ${esc(x.topic)}</p><p>${esc(x.about)}</p><div class="notice">Este instrumento aparece como recurso documental; todavía no incluye cuestionario digital, corrección automatizada ni enlace de respuestas. Para registrar una aplicación externa, incorpora el PDF autorizado en Archivos del expediente y anota su interpretación profesional.</div>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="closeModal();pid=scaleTarget;tab='archivos';go('expediente')">Ir al expediente</button>`,
  );
}
function evalFilling() {
  if (!isPatient() && !instruments[scale]) return evalCatalogue();
  let p = isPatient() ? data.patients[0] : evPerson(scaleTarget);
  return `<button class="ev-crumb" onclick="evPage='${isPatient() ? "list" : "catalog"}';go('evaluaciones')">← Volver</button><div class="card"><div class="ev-toolbar"><div><h2>${esc(instDisplay(scale))}</h2><p class="muted">${esc(p?.name || "Paciente")} · ${esc(p?.id || "")}</p></div>${isPatient() ? "" : `<div class="field"><label>Momento</label><select id="evalMoment"><option>Inicial (pretratamiento)</option><option>Intermedia</option><option>Final (postratamiento)</option><option>Seguimiento</option></select></div>`}</div><div id="scaleContainer">${scaleForm()}</div></div>`;
}
// La vista del portal del paciente mantiene separados los cuestionarios asignados de los del catálogo clínico.

/* V10: biblioteca / repertorio clínico y reubicación del asistente */
let libraryQuery = "",
  libraryArea = "Todos los enfoques",
  libraryType = "Todos los tipos",
  libraryMode = "all";
function ensureLibraryItems() {
  if (!Array.isArray(data.libraryItems)) {
    data.libraryItems = [];
    save();
  }
  return data.libraryItems;
}
function libraryBaseItems() {
  const digital = [
    {
      id: "GAD7",
      name: "GAD-7",
      kind: "Cuestionario",
      area: "Ansiedad",
      format: "Digital",
      summary: "Tamizaje breve de ansiedad generalizada en 7 ítems.",
      tags: ["Ansiedad", "Tamizaje"],
      custom: false,
    },
    {
      id: "PHQ9",
      name: "PHQ-9",
      kind: "Cuestionario",
      area: "Estado de ánimo",
      format: "Digital",
      summary: "Detección y seguimiento de síntomas depresivos en 9 ítems.",
      tags: ["Depresión", "Seguimiento"],
      custom: false,
    },
    {
      id: "DASS21",
      name: "DASS-21",
      kind: "Instrumento",
      area: "Estrés y afecto negativo",
      format: "Digital",
      summary:
        "Escala de depresión, ansiedad y estrés para seguimiento clínico.",
      tags: ["Estrés", "Ansiedad", "Depresión"],
      custom: false,
    },
    {
      id: "SISCO21",
      name: "SISCO SV-21",
      kind: "Cuestionario",
      area: "Estrés académico",
      format: "Digital",
      summary:
        "Instrumento breve para explorar estrés académico y estrategias de afrontamiento.",
      tags: ["Estrés académico", "Tamizaje"],
      custom: false,
    },
  ];
  const external = additionalAssessments.map((a) => ({
    id: a.id,
    name: a.name,
    kind: "Cuestionario",
    area: a.topic || a.group || "Psicología clínica",
    format: "Ficha / PDF",
    summary: a.about,
    tags: [a.group || "Psicología clínica", a.topic].filter(Boolean),
    custom: false,
  }));
  const tools = [
    {
      id: "HERR-ENTREVISTA",
      name: "Guía de entrevista inicial",
      kind: "Herramienta",
      area: "Evaluación clínica",
      format: "Plantilla",
      summary:
        "Estructura para motivo de consulta, antecedentes, contexto y objetivos iniciales.",
      tags: ["Entrevista", "Admisión"],
      custom: false,
    },
    {
      id: "HERR-NOTA",
      name: "Plantilla de nota de sesión",
      kind: "Herramienta",
      area: "Documentación clínica",
      format: "Plantilla",
      summary:
        "Formato para síntesis clínica, intervención, tareas y plan de seguimiento.",
      tags: ["Nota clínica", "Seguimiento"],
      custom: false,
    },
    {
      id: "HERR-TAREAS",
      name: "Plantilla de tareas terapéuticas",
      kind: "Herramienta",
      area: "Intervención",
      format: "Plantilla",
      summary:
        "Recurso para asignar tareas entre sesiones y dar seguimiento a su cumplimiento.",
      tags: ["Tareas", "Psicoeducación"],
      custom: false,
    },
    {
      id: "HERR-TELE",
      name: "Checklist de teleatención",
      kind: "Herramienta",
      area: "Telepsicología",
      format: "Checklist",
      summary:
        "Verificación de consentimiento, privacidad, plan de contingencia y conexión antes de una sesión virtual.",
      tags: ["Telepsicología", "Seguridad"],
      custom: false,
    },
  ];
  return [...digital, ...external, ...tools];
}
function allLibraryItems() {
  return [
    ...libraryBaseItems(),
    ...ensureLibraryItems().filter((x) => !x.owner || x.owner === role),
  ];
}
function libraryFiltered() {
  let items = allLibraryItems();
  if (libraryMode === "mine")
    items = items.filter((i) => i.custom || i.owner === role);
  let q = libraryQuery.trim().toLocaleLowerCase("es");
  if (q)
    items = items.filter((i) =>
      [
        i.name,
        i.summary,
        i.area,
        i.kind,
        i.format,
        (i.tags || []).join(" "),
      ].some((v) =>
        String(v || "")
          .toLocaleLowerCase("es")
          .includes(q),
      ),
    );
  if (libraryArea !== "Todos los enfoques")
    items = items.filter((i) => (i.area || "") === libraryArea);
  if (libraryType !== "Todos los tipos")
    items = items.filter((i) => (i.kind || "") === libraryType);
  return items;
}
function libraryAreas() {
  return [
    "Todos los enfoques",
    ...new Set(
      allLibraryItems()
        .map((i) => i.area)
        .filter(Boolean),
    ),
  ];
}
function libraryTypes() {
  return [
    "Todos los tipos",
    ...new Set(
      allLibraryItems()
        .map((i) => i.kind)
        .filter(Boolean),
    ),
  ];
}
function libraryCard(i) {
  return `<div class="lib-item"><div style="flex:1;min-width:0"><div class="lib-card-head"><span class="lib-badge">${esc(i.kind)}</span><span class="lib-badge">${esc(i.format || "Recurso")}</span>${i.custom ? '<span class="lib-badge custom">Añadido por ti</span>' : ""}</div><h3>${esc(i.name)}</h3><p>${esc(i.summary)}</p><div class="lib-tags">${(
    i.tags || []
  )
    .slice(0, 4)
    .map((t) => `<span class="lib-tag">${esc(t)}</span>`)
    .join(
      "",
    )}${i.area ? `<span class="lib-tag">${esc(i.area)}</span>` : ""}</div></div><button class="lib-arrow" title="Ver detalle" onclick="openLibraryItem(${escapeJS(i.id)})">›</button></div>`;
}
function biblioteca() {
  if (isPatient()) return dashboard();
  let items = libraryFiltered(),
    areas = libraryAreas(),
    types = libraryTypes(),
    mineCount = allLibraryItems().filter(
      (i) => i.custom || i.owner === role,
    ).length;
  return (
    header(
      "BIBLIOTECA CLÍNICA",
      "Biblioteca / repertorio",
      "Instrumentos, herramientas y cuestionarios para psicología clínica.",
      `<button class="btn" onclick="libraryMode=libraryMode==='all'?'mine':'all';go('biblioteca')">${libraryMode === "all" ? "Mi biblioteca" : "Ver todo"}${mineCount ? ` (${mineCount})` : ""}</button><button class="btn primary" onclick="toggle('newLibraryItem')">＋ Agregar nuevo</button>`,
    ) +
    `<div class="card"><div class="lib-toolbarTop"><div><h2 style="margin-bottom:6px">Catálogo de recursos</h2><div class="muted">Incluye los instrumentos ya integrados, cuestionarios documentales y herramientas prácticas para la atención psicológica.</div></div><div class="lib-count">${items.length} recurso(s)</div></div><div class="sheet lib-add-form hidden" id="newLibraryItem"><h3>Agregar nuevo recurso</h3><div class="formgrid">${inputField("Nombre del recurso *", "libName")}${selectField("Tipo *", "libKind", ["Instrumento", "Cuestionario", "Herramienta", "Plantilla"])}${inputField("Área / enfoque *", "libArea")}${selectField("Formato", "libFormat", ["Digital", "Ficha / PDF", "Plantilla", "Checklist", "Enlace externo"])}<div class="field wide"><label for="libSummary">Descripción breve *</label><textarea id="libSummary" placeholder="Describe para qué sirve, cómo se usa o qué evalúa."></textarea></div>${inputField("Etiquetas (separadas por comas)", "libTags")}</div><div class="btnrow section"><button class="btn primary" onclick="addLibraryItem()">Guardar recurso</button><button class="btn" onclick="toggle('newLibraryItem')">Cancelar</button></div></div><div class="lib-controls"><div class="field"><label>Buscar recurso</label><input class="search" placeholder="Buscar por nombre, área, etiqueta o utilidad" value="${esc(libraryQuery)}" oninput="libraryQuery=this.value;go('biblioteca')"></div><div class="field"><label>Enfoque</label><select onchange="libraryArea=this.value;go('biblioteca')">${areas.map((a) => `<option ${a === libraryArea ? "selected" : ""}>${esc(a)}</option>`).join("")}</select></div><div class="field"><label>Tipo</label><select onchange="libraryType=this.value;go('biblioteca')">${types.map((t) => `<option ${t === libraryType ? "selected" : ""}>${esc(t)}</option>`).join("")}</select></div></div><div class="lib-stats"><div class="lib-note">Usa este repertorio como apoyo clínico y documental. La aplicación real debe respetar licencias, derechos de uso y la normativa del expediente clínico.</div><div class="lib-note">Modo: <b>${libraryMode === "all" ? "Catálogo completo" : "Mi biblioteca"}</b></div></div>${items.length ? `<div class="lib-grid">${items.map(libraryCard).join("")}</div>` : '<div class="lib-empty">No hay recursos en este filtro. Prueba otro criterio o agrega un nuevo elemento.</div>'}</div>`
  );
}
function openLibraryItem(id) {
  let item = allLibraryItems().find((x) => x.id === id);
  if (!item) return;
  let isAssessment = !!(
    instruments[item.id] || additionalAssessments.find((a) => a.id === item.id)
  );
  let body = `<div class="lib-detail"><p><b>Tipo:</b> ${esc(item.kind)}</p><p><b>Área / enfoque:</b> ${esc(item.area || "Sin especificar")}</p><p><b>Formato:</b> ${esc(item.format || "Recurso")}</p><p><b>Descripción:</b> ${esc(item.summary || "Sin descripción")}</p><p><b>Etiquetas:</b> ${(item.tags || []).map((t) => `<span class="lib-tag">${esc(t)}</span>`).join(" ") || '<span class="muted">Sin etiquetas</span>'}</p>${item.custom ? '<div class="notice section">Este recurso fue añadido manualmente a tu biblioteca personal. Revisa su validez clínica, derechos de uso y trazabilidad documental antes de emplearlo.</div>' : ""}${isAssessment ? '<div class="notice mint section">Este recurso está vinculado con el flujo de evaluaciones. Desde allí podrás asignarlo a un paciente, aplicarlo o registrar su uso documental.</div>' : '<div class="notice section">Las herramientas y plantillas pueden utilizarse como apoyo al expediente, tareas o documentación clínica. Conserva revisión profesional antes de integrarlas al registro definitivo.</div>'}</div>`;
  let buttons = `<button class="btn" onclick="closeModal()">Cerrar</button>`;
  buttons += isAssessment
    ? `<button class="btn primary" onclick="closeModal();evPage='catalog';scaleTarget=pid||mine()[0]?.id;go('evaluaciones')">Abrir en evaluaciones</button>`
    : `<button class="btn primary" onclick="closeModal();pid=pid||mine()[0]?.id;tab='archivos';go('expediente')">Ir al expediente</button>`;
  if (item.custom)
    buttons += `<button class="btn danger" onclick="removeLibraryItem(${escapeJS(item.id)})">Eliminar</button>`;
  modal(esc(item.name), body, buttons);
}
function addLibraryItem() {
  let name = ($("#libName")?.value || "").trim(),
    kind = ($("#libKind")?.value || "").trim(),
    area = ($("#libArea")?.value || "").trim(),
    format = ($("#libFormat")?.value || "").trim(),
    summary = ($("#libSummary")?.value || "").trim(),
    tags = ($("#libTags")?.value || "")
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  if (!name || !kind || !area || !summary)
    return notify("Completa nombre, tipo, área y descripción");
  ensureLibraryItems().push({
    id: "LIB-" + Date.now(),
    name,
    kind,
    area,
    format,
    summary,
    tags,
    owner: role,
    custom: true,
  });
  save();
  libraryMode = "mine";
  go("biblioteca");
  notify("Recurso agregado a tu biblioteca");
}
function removeLibraryItem(id) {
  if (!confirm("¿Eliminar este recurso personalizado de tu biblioteca?"))
    return;
  data.libraryItems = ensureLibraryItems().filter((x) => x.id !== id);
  save();
  closeModal();
  go("biblioteca");
  notify("Recurso eliminado");
}

/* V13 · Editor modular de actividades psicológicas; datos de demostración únicamente. */
let tplView = "catalog",
  tplQuery = "",
  tplEdit = null,
  tplTarget = "";
let activityTarget = "";
function tplRecords() {
  if (!Array.isArray(data.activityTemplates)) {
    data.activityTemplates = [
      {
        id: "TPL-EJ-01",
        owner: role,
        name: "Registro de emociones",
        description:
          "Hoja para observar situación, emoción, intensidad y respuesta.",
        category: "Autorregistro",
        theme: "editorial",
        blocks: [
          { kind: "heading", text: "Registro emocional semanal" },
          {
            kind: "paragraph",
            text: "Completa la tabla con una situación de cada día. Revisa el registro con tu terapeuta en la siguiente sesión.",
          },
          {
            kind: "table",
            rows: [
              ["Situación", "Emoción", "Intensidad (0–10)", "Respuesta"],
              ["", "", "", ""],
              ["", "", "", ""],
              ["", "", "", ""],
            ],
          },
          { kind: "response", text: "¿Qué aprendí durante esta semana?" },
        ],
        updated: "2026-09-29",
      },
      {
        id: "TPL-EJ-02",
        owner: role,
        name: "Mi ventana de regulación",
        description:
          "Ejercicio psicoeducativo original de reconocimiento de activación y recursos de regulación.",
        category: "Psicoeducación",
        theme: "clinico",
        blocks: [
          { kind: "heading", text: "Reconocer mi estado emocional" },
          {
            kind: "paragraph",
            text: "Observa tus señales corporales y registra qué acciones pueden ayudarte a recuperar una sensación de seguridad.",
          },
          {
            kind: "table",
            rows: [
              ["Activación elevada", "Zona de tolerancia", "Activación baja"],
              [
                "¿Qué noto en mi cuerpo?",
                "¿Cómo sé que estoy presente?",
                "¿Qué señales percibo?",
              ],
              [
                "¿Qué recurso podría usar?",
                "¿Qué deseo mantener?",
                "¿Qué acción suave puedo probar?",
              ],
            ],
          },
          { kind: "response", text: "Mi plan personal de autorregulación" },
        ],
        updated: "2026-09-29",
      },
    ];
    save();
  }
  return data.activityTemplates;
}
function tplMine() {
  return tplRecords().filter((t) => t.owner === role);
}
function tplFresh(base = "blank") {
  const defs = {
    blank: [],
    editorial: [
      { kind: "heading", text: "Actividad para la próxima sesión" },
      {
        kind: "paragraph",
        text: "Objetivo de la actividad y recomendaciones para el paciente.",
      },
      { kind: "response", text: "Mi reflexión" },
    ],
    clinico: [
      { kind: "heading", text: "Plan de práctica terapéutica" },
      {
        kind: "paragraph",
        text: "Indicaciones para completar esta actividad.",
      },
      {
        kind: "table",
        rows: [
          ["Situación", "Registro", "Observaciones"],
          ["", "", ""],
          ["", "", ""],
        ],
      },
    ],
    minimal: [
      { kind: "heading", text: "Hoja de trabajo" },
      { kind: "response", text: "Escribe aquí tus respuestas." },
    ],
  };
  return {
    id: "TPL-" + Date.now(),
    owner: role,
    name: "Nueva plantilla",
    description:
      "Material de intervención para sesiones y trabajo entre consultas.",
    category: "Actividad",
    theme: base === "blank" ? "editorial" : base,
    blocks: structuredClone(defs[base] || defs.blank),
    updated: "Sin guardar",
  };
}
function tplGo(view) {
  tplView = view;
  go("plantillas");
}
function tplStart(base = "blank") {
  tplEdit = tplFresh(base);
  tplGo("editor");
}
function tplEditStored(id) {
  const t = tplMine().find((x) => x.id === id);
  if (!t) return notify("Plantilla no disponible");
  tplEdit = structuredClone(t);
  tplGo("editor");
}
function tplDuplicate(id) {
  const t = tplMine().find((x) => x.id === id);
  if (!t) return;
  const n = structuredClone(t);
  n.id = "TPL-" + Date.now();
  n.name += " (copia)";
  n.updated = new Date().toISOString().slice(0, 10);
  tplRecords().push(n);
  save();
  go("plantillas");
  notify("Plantilla duplicada");
}
function tplDelete(id) {
  const t = tplMine().find((x) => x.id === id);
  if (
    !t ||
    !confirm(
      "¿Eliminar esta plantilla guardada? Esta acción no modifica notas ni expedientes.",
    )
  )
    return;
  data.activityTemplates = data.activityTemplates.filter((x) => x.id !== id);
  save();
  go("plantillas");
  notify("Plantilla eliminada");
}
function tplBlockTitle(k) {
  return (
    {
      heading: "Título / sección",
      paragraph: "Texto",
      table: "Tabla editable",
      image: "Imagen",
      response: "Espacio de respuesta",
    }[k] || k
  );
}
function tplUpdateFromDom() {
  if (!tplEdit || tplView !== "editor") return;
  const n = $("#tplName"),
    d = $("#tplDesc"),
    cat = $("#tplCategory"),
    theme = $("#tplTheme");
  if (n) tplEdit.name = n.value;
  if (d) tplEdit.description = d.value;
  if (cat) tplEdit.category = cat.value;
  if (theme) tplEdit.theme = theme.value;
  tplEdit.blocks.forEach((b, i) => {
    const node = document.querySelector(`[data-tpl-idx="${i}"]`);
    if (!node) return;
    if (["heading", "paragraph", "response"].includes(b.kind)) {
      const f = node.querySelector("[data-tpl-text]");
      if (f) b.text = f.value;
    } else if (b.kind === "image") {
      const f = node.querySelector("[data-tpl-caption]");
      if (f) b.caption = f.value;
    } else if (b.kind === "table") {
      b.rows = b.rows.map((row, r) =>
        row.map((c, col) => {
          const f = node.querySelector(`[data-cell="${r}-${col}"]`);
          return f ? f.value : c;
        }),
      );
    }
  });
}
function tplRefreshPreview() {
  tplUpdateFromDom();
  let p = $("#tplLivePreview");
  if (p)
    p.innerHTML = tplPreview(
      tplEdit,
      document.querySelector("#tplPatient")?.selectedOptions?.[0]?.dataset
        ?.name || "",
    );
  const n = $("#tplLiveName");
  if (n) n.textContent = tplEdit.name || "Sin título";
}
function tplAddBlock(k) {
  tplUpdateFromDom();
  let block =
    k === "table"
      ? {
          kind: k,
          rows: [
            ["Columna 1", "Columna 2", "Columna 3"],
            ["", "", ""],
            ["", "", ""],
          ],
        }
      : k === "image"
        ? { kind: k, src: "", caption: "" }
        : {
            kind: k,
            text:
              k === "response"
                ? "Escribe tu respuesta"
                : k === "heading"
                  ? "Nueva sección"
                  : "Añade las indicaciones aquí.",
          };
  tplEdit.blocks.push(block);
  tplGo("editor");
}
function tplMoveBlock(i, dir) {
  tplUpdateFromDom();
  let j = i + dir;
  if (j < 0 || j >= tplEdit.blocks.length) return;
  [tplEdit.blocks[i], tplEdit.blocks[j]] = [
    tplEdit.blocks[j],
    tplEdit.blocks[i],
  ];
  tplGo("editor");
}
function tplRemoveBlock(i) {
  tplUpdateFromDom();
  tplEdit.blocks.splice(i, 1);
  tplGo("editor");
}
function tplAddTableRow(i) {
  tplUpdateFromDom();
  const b = tplEdit.blocks[i];
  if (b?.kind !== "table" || b.rows.length >= 12) return;
  b.rows.push(Array(b.rows[0]?.length || 3).fill(""));
  tplGo("editor");
}
function tplDelTableRow(i) {
  tplUpdateFromDom();
  const b = tplEdit.blocks[i];
  if (b?.kind !== "table" || b.rows.length <= 2) return;
  b.rows.pop();
  tplGo("editor");
}
function tplAddTableCol(i) {
  tplUpdateFromDom();
  const b = tplEdit.blocks[i];
  if (b?.kind !== "table" || b.rows[0].length >= 6) return;
  b.rows.forEach((r, j) => r.push(j ? "" : "Nueva columna"));
  tplGo("editor");
}
function tplDelTableCol(i) {
  tplUpdateFromDom();
  const b = tplEdit.blocks[i];
  if (b?.kind !== "table" || b.rows[0].length <= 2) return;
  b.rows.forEach((r) => r.pop());
  tplGo("editor");
}
function tplUploadImage(i, event) {
  const f = event.target.files?.[0];
  if (!f) return;
  if (!["image/jpeg", "image/png", "image/webp"].includes(f.type))
    return notify("Utiliza JPG, PNG o WEBP.");
  if (f.size > 700 * 1024)
    return notify("Para esta demo, reduce la imagen a menos de 700 KB.");
  tplUpdateFromDom();
  const reader = new FileReader();
  reader.onload = () => {
    tplEdit.blocks[i].src = reader.result;
    tplGo("editor");
    notify("Imagen añadida a la actividad");
  };
  reader.readAsDataURL(f);
}
function tplSave() {
  tplUpdateFromDom();
  if (!tplEdit?.name?.trim()) return notify("Asigna un nombre a la plantilla");
  tplEdit.name = tplEdit.name.trim();
  tplEdit.updated = new Date().toISOString().slice(0, 10);
  let arr = tplRecords(),
    j = arr.findIndex((x) => x.id === tplEdit.id && x.owner === role);
  if (j >= 0) arr[j] = structuredClone(tplEdit);
  else arr.unshift(structuredClone(tplEdit));
  try {
    save();
  } catch (e) {
    return notify("No se pudo guardar. Reduce el tamaño de las imágenes.");
  }
  notify("Plantilla guardada en este navegador");
  tplGo("catalog");
}
function tplSafeColor(c) {
  return /^#[0-9a-fA-F]{6}$/.test(c || "") ? c : "#538782";
}
function tplPreview(t, patientName = "") {
  if (!t) return "";
  const s = settingsProfile(),
    color = tplSafeColor(s.brandColor),
    font =
      t.theme === "editorial"
        ? "Georgia,serif"
        : t.theme === "minimal"
          ? "Arial,sans-serif"
          : "Manrope,Arial,sans-serif";
  const blocks = (t.blocks || [])
    .map((b) => {
      if (b.kind === "heading")
        return `<h3 style="font-family:${font};color:${t.theme === "minimal" ? "#222" : color}">${esc(b.text)}</h3>`;
      if (b.kind === "paragraph") return `<p>${esc(b.text)}</p>`;
      if (b.kind === "response")
        return `<div style="margin:17px 0"><b style="font-size:12px">${esc(b.text || "Respuesta")}</b><div class="tplReply" style="min-height:95px;background:transparent"></div></div>`;
      if (b.kind === "image")
        return b.src
          ? `<figure style="margin:16px 0"><img class="tplFigure" src="${b.src}" alt="Ilustración de actividad"><figcaption class="tplFigureCaption">${esc(b.caption || "")}</figcaption></figure>`
          : `<p style="padding:20px;border:1px dashed #cbd7ce;color:#8d9891;text-align:center">Añade una ilustración</p>`;
      if (b.kind === "table")
        return `<table class="tplDocTable"><tbody>${(b.rows || []).map((r, i) => `<tr>${r.map((v) => (i === 0 ? `<th>${esc(v)}</th>` : `<td>${esc(v) || "&nbsp;"}</td>`)).join("")}</tr>`).join("")}</tbody></table>`;
      return "";
    })
    .join("");
  return `<article class="tplPage" style="--template-color:${color};font-family:${font}"><header class="tplPageHead"><div class="clinic">${esc(s.clinic || "ROMImente · Psicología")}<br><small style="font-weight:500;letter-spacing:0">${esc(s.fullName || "Profesional clínico")}</small></div>${s.includeLogo && s.logo ? `<img alt="Logo institucional" src="${s.logo}">` : ""}</header><div class="eyebrow">ACTIVIDAD TERAPÉUTICA${patientName ? " PARA" : ""}</div><h2 class="tplPageTitle" style="font-family:${font}">${esc(t.name || "Nueva plantilla")}</h2>${patientName ? `<p class="tplPageLead"><b>Paciente:</b> ${esc(patientName)}</p>` : ""}<p class="tplPageLead">${esc(t.description || "")}</p>${blocks || '<div class="tplReply">Agrega contenido desde el editor.</div>'}<footer class="tplPageFooter">${esc(s.pdfFooter || s.clinic || "Material de apoyo para la sesión")} · Revisión del profesional antes de entregar.</footer></article>`;
}
function tplControl(b, i) {
  let body = "";
  if (["heading", "paragraph", "response"].includes(b.kind))
    body = `<label>${b.kind === "heading" ? "Encabezado" : b.kind === "response" ? "Pregunta o consigna" : "Texto e indicaciones"}</label><textarea data-tpl-text oninput="tplRefreshPreview()">${esc(b.text)}</textarea>`;
  if (b.kind === "image")
    body = `<label>Imagen JPG, PNG o WEBP</label><input type="file" accept="image/png,image/jpeg,image/webp" onchange="tplUploadImage(${i},event)">${b.src ? '<span class="tplTiny">Imagen cargada ✓</span>' : '<span class="tplTiny">Sin imagen</span>'}<label style="margin-top:10px">Pie de imagen</label><input data-tpl-caption value="${esc(b.caption || "")}" oninput="tplRefreshPreview()">`;
  if (b.kind === "table")
    body = `<div class="tplBlockRow" style="grid-template-columns:repeat(${(b.rows || [])[0]?.length || 3},minmax(0,1fr))">${(b.rows || []).map((row, r) => row.map((val, c) => `<input aria-label="Fila ${r + 1} columna ${c + 1}" data-cell="${r}-${c}" value="${esc(val)}" oninput="tplRefreshPreview()">`).join("")).join("")}</div><div class="btnrow" style="margin-top:9px"><button class="btn" onclick="tplAddTableRow(${i})">+ Fila</button><button class="btn" onclick="tplDelTableRow(${i})">− Fila</button><button class="btn" onclick="tplAddTableCol(${i})">+ Columna</button><button class="btn" onclick="tplDelTableCol(${i})">− Columna</button></div>`;
  return `<div class="tplBlock" data-tpl-idx="${i}"><div class="tplBlockHead"><b>${i + 1}. ${tplBlockTitle(b.kind)}</b><button title="Subir" onclick="tplMoveBlock(${i},-1)">↑</button><button title="Bajar" onclick="tplMoveBlock(${i},1)">↓</button><button title="Eliminar bloque" onclick="tplRemoveBlock(${i})">×</button></div><div class="tplBlockBody">${body}</div></div>`;
}
function tplPrint() {
  tplUpdateFromDom();
  const target = $("#activityPrintRoot");
  target.innerHTML = tplPreview(tplEdit, $("#tplPatient")?.value || "");
  target.style.display = "block";
  window.print();
  target.style.display = "none";
}
function tplCatalogMarkup() {
  const items = tplMine().filter((t) =>
    [t.name, t.description, t.category].some((x) =>
      String(x || "")
        .toLowerCase()
        .includes(tplQuery.toLowerCase()),
    ),
  );
  return `<div class="tplNavline"><div class="tplTabbar"><button class="sel">Mis plantillas <b>${tplMine().length}</b></button></div><button class="btn primary" onclick="tplStart('blank')">＋ Nueva plantilla</button></div><div class="card" style="margin-bottom:18px"><div class="toolbar"><input class="search" style="max-width:460px" id="tplFind" value="${esc(tplQuery)}" placeholder="Buscar por nombre, categoría o descripción" oninput="tplQuery=this.value;tplUpdateCatalog()"><small>Editar, duplicar, exportar o eliminar recursos anteriores.</small></div><div class="tplTools">${[
    ["editorial", "Editorial"],
    ["clinico", "Clínico"],
    ["minimal", "Minimal"],
  ]
    .map(
      ([id, label]) =>
        `<button onclick="tplStart('${id}')">Crear desde ${label}</button>`,
    )
    .join(
      "",
    )}</div><div id="tplCatalogResults">${tplCatalogTiles(items)}</div></div>`;
}
function tplCatalogTiles(items) {
  return items.length
    ? `<div class="tplCatalog">${items.map((t) => `<div class="tplTile"><div class="tplTilePreview"><div style="width:75%;background:${tplSafeColor(settingsProfile().brandColor)};height:6px"></div><div style="width:85%"></div><div style="width:60%"></div><div style="width:90%;height:38px;margin-top:13px;background:#edf1ed"></div></div><div class="tplTileInfo"><span class="pill">${esc(t.category || "Actividad")}</span><h3 style="margin-top:11px">${esc(t.name)}</h3><p>${esc(t.description || "")}</p><small>Actualizada: ${esc(t.updated || "—")} · ${t.blocks.length} bloques</small><div class="tplActions section"><button class="btn primary" onclick="tplEditStored('${t.id}')">Editar</button><button class="btn" onclick="tplDuplicate('${t.id}')">Duplicar</button><button class="btn" onclick="tplEditStored('${t.id}');tplPrint()">PDF</button><button class="btn danger" onclick="tplDelete('${t.id}')">Eliminar</button></div></div></div>`).join("")}</div>`
    : '<div class="tplEmpty">No hay plantillas que coincidan con tu búsqueda. Puedes crear una nueva.</div>';
}
function tplUpdateCatalog() {
  let x = $("#tplCatalogResults");
  if (x)
    x.innerHTML = tplCatalogTiles(
      tplMine().filter((t) =>
        [t.name, t.description, t.category].some((v) =>
          String(v || "")
            .toLowerCase()
            .includes(tplQuery.toLowerCase()),
        ),
      ),
    );
}
function tplEditorMarkup() {
  if (!tplEdit) tplEdit = tplFresh();
  let p = tplEdit;
  return `<div class="tplNavline"><button class="btn" onclick="if(confirm('¿Volver al catálogo? Guarda antes de salir para conservar tus cambios.'))tplGo('catalog')">← Catálogo</button><div class="btnrow"><button class="btn" onclick="tplPrint()">↓ Exportar / imprimir PDF</button><button class="btn" onclick="tplAssign()">Asignar al paciente</button><button class="btn primary" onclick="tplSave()">Guardar plantilla</button></div></div><div class="tplEditor"><section class="tplControls"><h2>Editor de actividades</h2><div class="field"><label>Nombre de plantilla *</label><input id="tplName" value="${esc(p.name)}" oninput="tplRefreshPreview()"></div><div class="field"><label>Descripción</label><textarea id="tplDesc" oninput="tplRefreshPreview()">${esc(p.description)}</textarea></div><div class="formgrid"><div class="field"><label>Categoría</label><input id="tplCategory" value="${esc(p.category)}" oninput="tplRefreshPreview()"></div><div class="field"><label>Estilo</label><select id="tplTheme" onchange="tplRefreshPreview()">${[
    ["editorial", "Editorial"],
    ["clinico", "Clínico"],
    ["minimal", "Minimal"],
  ]
    .map(
      ([id, n]) =>
        `<option value="${id}" ${p.theme === id ? "selected" : ""}>${n}</option>`,
    )
    .join(
      "",
    )}</select></div></div><hr class="divider"><h3>Agregar un bloque</h3><div class="tplTools">${[
    ["heading", "Título"],
    ["paragraph", "Texto"],
    ["table", "Tabla"],
    ["image", "Imagen"],
    ["response", "Respuesta"],
  ]
    .map(([k, n]) => `<button onclick="tplAddBlock('${k}')">＋ ${n}</button>`)
    .join(
      "",
    )}</div><div class="tplTiny">Puedes cambiar el orden con las flechas, ajustar columnas y filas, y quitar cualquier bloque.</div><div id="tplBlocks">${p.blocks.length ? p.blocks.map(tplControl).join("") : '<div class="tplEmptyEditor">Todavía no hay bloques. Selecciona Texto, Tabla, Imagen u otro elemento para comenzar.</div>'}</div></section><aside class="tplPreviewPane"><div class="tplPreviewTop"><div><b>Vista previa institucional</b><small style="display:block;color:#74877b" id="tplLiveName">${esc(p.name)}</small></div><div><select class="btn" id="tplPatient" onchange="tplRefreshPreview()"><option value="">Datos de muestra (sin paciente)</option>${mine()
    .map(
      (x) =>
        `<option value="${esc(x.name)}" data-name="${esc(x.name)}" ${activityTarget === x.id ? "selected" : ""}>${esc(x.name)} · ${esc(x.id)}</option>`,
    )
    .join(
      "",
    )}</select></div></div><div id="tplLivePreview">${tplPreview(p)}</div><p class="tplTiny section">El formato utiliza la identidad institucional de Configuración &gt; Marca y PDF. Antes de entregar cualquier material al paciente debe revisarlo el profesional.</p></aside></div>`;
}

function tplAssign() {
  tplUpdateFromDom();
  const sel = $("#tplPatient"),
    personName = sel?.selectedOptions?.[0]?.dataset?.name;
  if (!personName)
    return notify(
      "Elige un paciente en la vista previa para asignar la actividad.",
    );
  const p = mine().find((x) => x.name === personName);
  if (!p) return notify("Paciente no disponible");
  (data.tasks[p.id] ??= []).push({
    name: tplEdit.name,
    date: new Date().toISOString().slice(0, 10),
    done: false,
    positive: "Actividad vinculada a plantilla: " + tplEdit.name,
    templateSnapshot: structuredClone(tplEdit),
  });
  save();
  notify(
    "Actividad asignada a " +
      p.name +
      ". Podrás consultarla desde su expediente.",
  );
}
function activityTemplatesView() {
  if (isPatient())
    return header(
      "MI ESPACIO",
      "Plantillas",
      "Los recursos compartidos por tu profesional se consultan dentro de tus documentos.",
    );
  tplRecords();
  return `<div class="tplTop"><div><div class="eyebrow">BIBLIOTECA DE ACTIVIDADES</div><h1>Plantillas de actividades</h1><div class="muted">Crea y edita materiales de sesión con texto, tablas, imágenes y espacios para responder.<br>Conserva tus plantillas anteriores en el catálogo.</div></div>${tplView === "catalog" ? '<button class="btn primary" onclick="tplStart()">＋ Crear actividad</button>' : ""}</div>${tplView === "editor" ? tplEditorMarkup() : tplCatalogMarkup()}`;
}

/* V14 · Admision, HC diferenciada, genograma, triage, kit, visibilidad y cierre separado */
let c14AdmType = "Consentimiento informado",
  c14AdmDraft = null;
function c14Store(id = pid) {
  data.care14 ??= {};
  if (!data.care14[id])
    data.care14[id] = {
      fields: {},
      family: [],
      kit: { visibility: "clinico", availableOn: "", fields: {} },
      triage: {
        level: "Sin valorar",
        flags: [],
        details: "",
        actions: "",
        reviewer: "",
        date: "",
      },
      discharges: [],
    };
  return data.care14[id];
}
const c14Date = () => new Date().toISOString().slice(0, 10);
const c14DocDefs = {
  "Consentimiento informado": [
    "Propósito y modalidad de la intervención",
    "Alcances, beneficios esperados y limitaciones",
    "Confidencialidad, excepciones y manejo de situaciones de riesgo",
    "Voluntariedad y retiro",
    "Profesional responsable",
    "Paciente o persona representante legal",
    "Asentimiento del adolescente (cuando corresponda)",
  ],
  "Aviso de privacidad": [
    "Identidad y domicilio del responsable",
    "Datos personales y datos sensibles tratados",
    "Finalidades del tratamiento de datos",
    "Transferencias, cuando procedan",
    "Medios para ejercer derechos ARCO",
    "Medio para comunicar modificaciones del aviso",
    "Constancia de entrega o acuse",
  ],
  "Entrevista inicial de admisión": [
    "Responsable legal y número de contacto",
    "Ocupación del responsable y miembros de la familia",
    "Con quién vive",
    "Ocupación / escolaridad del paciente",
    "Motivo de consulta",
    "Sustancias de consumo y duración (si aplica)",
    "Diagnóstico psiquiátrico referido",
    "Medicamentos y/o tratamiento médico actual",
    "Antecedentes de enfermedades crónicas referidas",
    "Internamientos previos: lugar y duración",
    "Observaciones del área de admisión",
  ],
  "Convenio de confidencialidad del costo de tratamiento": [
    "Costo de sesión / paquete",
    "Número y duración de sesiones",
    "Forma y fechas de pago",
    "Condiciones de cancelación y reprogramación",
    "Alcances de la confidencialidad del acuerdo económico",
    "Nombre de quien contrata",
  ],
  "Contrato de tratamiento ambulatorio": [
    "Servicio contratado y duración acordada",
    "Sesiones, periodicidad y modalidad",
    "Honorarios, pagos y cancelaciones",
    "Responsabilidades de la persona usuaria y del profesional",
    "Límites de atención ambulatoria y protocolo de crisis",
    "Condiciones de suspensión, derivación y terminación",
    "Paciente o tutor responsable",
  ],
};
function c14Text(label, value = "", id = "", multi = true) {
  return `<div class="c14-field"><label>${esc(label)}</label>${multi ? `<textarea data-f14="${esc(id || label)}">${esc(value || "")}</textarea>` : `<input data-f14="${esc(id || label)}" value="${esc(value || "")}">`}</div>`;
}
function c14GetFields(sec) {
  return c14Store().fields[sec] || {};
}
function c14FieldGroup(sec, items) {
  const d = c14GetFields(sec);
  return `<div class="c14-grid">${items.map((x) => c14Text(x, d[x], x)).join("")}</div>`;
}
function c14SaveFields(sec) {
  const all = { ...c14GetFields(sec) };
  document
    .querySelectorAll("#clinicalV14 [data-f14]")
    .forEach((e) => (all[e.dataset.f14] = e.value));
  c14Store().fields[sec] = all;
  save();
  notify("Se guardó el borrador del expediente " + pid);
}
function c14Sections(sec, title, groups, sub = "") {
  let p = pat();
  return `<div id="clinicalV14"><div class="c14-head"><div><h2>${esc(title)}</h2><div class="c14-sub">${esc(sub)} · ${esc(p.id)} · ${esc(p.name)}</div></div><span class="c14-chip">${p.type === "adolescente" ? "Adolescente" : "Adulto"}</span></div><div class="c14-wrap">${groups.map((g, i) => `<details class="c14-section" ${i === 0 ? "open" : ""}><summary>${esc(g[0])}<span>⌄</span></summary><div style="padding-top:14px">${c14FieldGroup(sec, g[1])}</div></details>`).join("")}</div><div class="c14-tools"><button class="btn primary" onclick="c14SaveFields('${sec}')">Guardar borrador</button><button class="btn" onclick="c14PrintFields('${sec}')">Imprimir formulario</button></div><div class="notice section">Los datos conservan la atribución del expediente. La autoría, fecha, hora y firma legalmente aplicable deben verificarse antes de utilizar este formato en producción.</div></div>`;
}
const c14AdultGroups = [
  [
    "Datos de filiación y contexto",
    [
      "Lugar de nacimiento y procedencia",
      "Institución o centro de trabajo/estudios",
      "Escolaridad y ocupación",
      "Estado civil, pareja e hijos",
      "Residencia y convivencia actual",
      "Religión (solo si es pertinente y proporcionada voluntariamente)",
      "Informante y vínculo",
    ],
  ],
  [
    "Problema actual",
    [
      "Motivo de consulta referido por la persona",
      "Inicio y curso de los síntomas",
      "Episodios previos: duración y circunstancias",
      "Factores desencadenantes, agravantes e impacto funcional",
      "Estrategias que ha intentado utilizar",
      "Tratamientos físicos, psicológicos o psiquiátricos previos",
      "Autodescripción y recursos personales",
    ],
  ],
  [
    "Historia personal y desarrollo",
    [
      "Gestación y nacimiento (si clínicamente pertinente)",
      "Desarrollo psicomotor y del lenguaje",
      "Infancia, crianza y experiencias significativas",
      "Relaciones con pares y familia durante la niñez",
      "Historia escolar y formación",
      "Adolescencia, autonomía y relaciones",
      "Experiencias vitales y cambios relevantes",
    ],
  ],
  [
    "Contexto actual y antecedentes",
    [
      "Antecedentes familiares de salud mental relevantes",
      "Relaciones afectivas y redes de apoyo",
      "Vivienda y situación laboral/económica",
      "Hábitos, sueño, alimentación y actividad física",
      "Consumo de alcohol y otras sustancias",
      "Antecedentes médicos, medicamentos y alergias",
      "Sexualidad y relaciones íntimas (solo información pertinente y consentida)",
      "Enfermedades, accidentes y hospitalizaciones",
    ],
  ],
  [
    "Exploración y síntesis clínica",
    [
      "Apariencia general, conducta y actitud",
      "Conciencia, orientación y atención",
      "Lenguaje, pensamiento y estado de ánimo",
      "Percepción, memoria y juicio",
      "Evaluaciones realizadas y hallazgos",
      "Formulación / hipótesis clínica",
      "Diagnóstico clínico documentado, si procede",
      "Propuesta inicial de intervención y derivación",
    ],
  ],
];
const c14TeenGroups = [
  [
    "Identificación, informantes y autorizaciones",
    [
      "Responsable legal, vínculo y contacto",
      "Quién respondió la entrevista",
      "Consentimiento del tutor y asentimiento del adolescente",
      "Lugar de nacimiento, escuela, grado e institución",
      "Motivo de consulta en palabras del adolescente",
      "Perspectiva del responsable legal",
    ],
  ],
  [
    "Problema y funcionamiento actual",
    [
      "Áreas principales de preocupación: aprendizaje, lenguaje, conducta, emociones, relaciones, hábitos",
      "Inicio, curso e impacto en casa, escuela y actividades",
      "Cambios recientes: mudanza, pérdidas, separación o conflicto",
      "Acciones intentadas por la familia y resultados",
      "Atención o diagnósticos previos",
      "Perspectiva del adolescente y expectativas de atención",
    ],
  ],
  [
    "Historia perinatal y desarrollo (según pertinencia)",
    [
      "Gestación y antecedentes prenatales relevantes",
      "Nacimiento y antecedentes perinatales",
      "Hitos del desarrollo motor y lenguaje",
      "Control de esfínteres y hábitos de infancia",
      "Alimentación temprana y desarrollo general",
      "Juego infantil, intereses y relación con pares",
    ],
  ],
  [
    "Salud y antecedentes",
    [
      "Enfermedades, accidentes y hospitalizaciones",
      "Medicamentos, alergias y tratamientos actuales",
      "Sueño, alimentación y actividad física",
      "Antecedentes psicológicos, psiquiátricos y familiares",
      "Consumo de sustancias, cuando corresponda por edad y contexto",
      "Cambios en estado de ánimo y regulación emocional",
    ],
  ],
  [
    "Dinámica familiar y escolar",
    [
      "Composición de la familia y personas con quienes convive",
      "Crianza, acuerdos, conflictos y apoyos",
      "Vínculo con responsables legales y hermanos",
      "Adaptación escolar, rendimiento, aprendizaje y cambios de escuela",
      "Convivencia con pares, acoso y participación social",
      "Intereses, recreación, autonomía y actividades",
    ],
  ],
  [
    "Exploración clínica del adolescente",
    [
      "Apariencia, actitud y conducta observada",
      "Orientación, atención, memoria y lenguaje",
      "Estado de ánimo, pensamiento y afecto",
      "Fortalezas y factores protectores",
      "Necesidades de valoración especializada",
      "Síntesis y plan inicial de intervención",
    ],
  ],
];
function c14AdmitMarkup() {
  let p = pat(),
    arr = data.docs[p.id] || [],
    names = Object.keys(c14DocDefs),
    vals =
      c14AdmDraft && c14AdmDraft.type === c14AdmType
        ? c14AdmDraft.values || {}
        : {};
  const previous = arr.filter((x) => x.type === c14AdmType);
  return `<div class="c14-head"><div><h2>Admisión y formatos</h2><div class="c14-sub">Cada guardado agrega una versión fechada. El consentimiento puede recabarse más de una vez.</div></div><span class="c14-chip">${arr.filter((x) => names.includes(x.type)).length} registros</span></div><div class="c14-amber">Formatos de demostración basados en los materiales proporcionados. Deben ser revisados y aprobados por la clínica antes de utilizarse con pacientes reales. Una casilla marcada no equivale a una firma válida.</div><div class="c14-grid section"><div class="c14-field"><label>Documento</label><select onchange="c14AdmType=this.value;c14AdmDraft=null;go('expediente')">${names.map((n) => `<option ${c14AdmType === n ? "selected" : ""}>${esc(n)}</option>`).join("")}</select></div><div class="c14-field"><label>Fecha de nueva versión</label><input type="date" id="adm14Date" value="${esc(c14Date())}"></div></div><div class="c14-section" id="c14AdmForm"><div class="c14-grid"><div class="c14-field"><label>Folio</label><input value="${esc(p.id)}" readonly></div><div class="c14-field"><label>Paciente</label><input value="${esc(p.name)}" readonly></div></div><div class="c14-grid" style="margin-top:12px">${(c14DocDefs[c14AdmType] || []).map((k) => c14Text(k, vals[k] || "", k)).join("")}</div><div class="c14-grid section"><div class="c14-field"><label>Nombre de la persona que firma / recibe</label><input id="adm14Signer" value="${esc(c14AdmDraft?.signer || "")}"></div><div class="c14-field"><label>Constancia documental</label><select id="adm14SignStatus"><option>Pendiente de impresión / firma</option><option ${c14AdmDraft?.signStatus === "Firma física recabada (referencia)" ? "selected" : ""}>Firma física recabada (referencia)</option></select></div></div><div class="c14-tools"><button class="btn primary" onclick="c14SaveAdmission()">Guardar nueva versión</button><button class="btn" onclick="c14PrintAdmission()">Imprimir formato</button></div></div><h3 class="section">Versiones anteriores · ${esc(c14AdmType)}</h3><div class="c14-versions">${
    previous
      .slice()
      .reverse()
      .map(
        (v, i) =>
          `<div class="c14-docrow"><div><b>${esc(v.type)} · ${esc(v.date)}</b><small>${esc(v.signer || "Sin firma registrada")} · ${esc(v.signStatus || "Pendiente")} · versión ${previous.length - i}</small></div><div class="btnrow"><button class="btn" onclick="c14InspectAdmission(${arr.indexOf(v)})">Ver</button><button class="btn" onclick="c14DuplicateAdmission(${arr.indexOf(v)})">Nueva versión desde esta</button></div></div>`,
      )
      .join("") ||
    '<p class="muted">Aún no existen versiones de este formato.</p>'
  }</div>`;
}
function c14SaveAdmission() {
  const p = pat();
  if (!p) return;
  const box = $("#c14AdmForm");
  if (!box) return;
  const values = {};
  box
    .querySelectorAll("[data-f14]")
    .forEach((e) => (values[e.dataset.f14] = e.value));
  let entry = {
    type: c14AdmType,
    date: $("#adm14Date").value || c14Date(),
    signer: $("#adm14Signer").value,
    signStatus: $("#adm14SignStatus").value,
    values,
    body: Object.entries(values)
      .map(([k, v]) => k + ": " + v)
      .join("\n\n"),
    file: "",
    source: "V14 formulario editable",
    author: $("#username")?.textContent || "",
  };
  (data.docs[p.id] ??= []).push(entry);
  save();
  c14AdmDraft = null;
  go("expediente");
  notify("Se agregó una nueva versión a Admisión");
}
function c14InspectAdmission(index) {
  let x = data.docs[pid]?.[index];
  if (!x) return;
  modal(
    "Documento registrado",
    `<p><b>${esc(x.type)}</b> · ${esc(x.date)}<br><small>${esc(x.signStatus || "Pendiente de firma")}</small></p><div class="sheet" style="max-height:50vh;overflow:auto">${
      Object.entries(x.values || {})
        .map(
          ([k, v]) => `<p><b>${esc(k)}</b><br>${esc(v || "Sin completar")}</p>`,
        )
        .join("") || `<pre>${esc(x.body || "Sin contenido")}</pre>`
    }</div>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn primary" onclick="c14DuplicateAdmission(${index})">Crear nueva versión</button>`,
  );
}
function c14DuplicateAdmission(index) {
  let x = data.docs[pid]?.[index];
  if (!x) return;
  c14AdmType = x.type;
  c14AdmDraft = {
    type: x.type,
    values: { ...(x.values || {}) },
    signer: x.signer,
    signStatus: x.signStatus,
  };
  closeModal();
  patientPane = "detalles";
  detailPane = "admision";
  go("expediente");
}
function c14PrintAdmission() {
  let p = pat(),
    body = [
      `<p>Paciente: <b>${esc(p.name)}</b> · Folio ${esc(p.id)}<br>Fecha: ${esc($("#adm14Date")?.value || c14Date())}</p>`,
    ];
  $("#c14AdmForm")
    ?.querySelectorAll("[data-f14]")
    .forEach((e) =>
      body.push(
        `<p><b>${esc(e.dataset.f14)}</b><br>${esc(e.value || "________________________")}</p>`,
      ),
    );
  body.push(
    `<p>Firma: ____________________________<br>${esc($("#adm14Signer")?.value || "")}</p>`,
  );
  printPage(c14AdmType, body.join(""));
}
function c14PrintFields(section) {
  let p = pat(),
    body = [`<p>${esc(p.name)} · ${esc(p.id)} · ${esc(c14Date())}</p>`];
  document
    .querySelectorAll("#clinicalV14 [data-f14]")
    .forEach((e) =>
      body.push(
        `<p><b>${esc(e.dataset.f14)}</b><br>${esc(e.value || "_______________________")}</p>`,
      ),
    );
  printPage(
    section === "teen-hc"
      ? "Historia clínica adolescente"
      : section === "adult-hc"
        ? "Historia clínica adulta"
        : "Entrevista familiar",
    body.join(""),
  );
}
function c14Family() {
  const groups = [
    [
      "Contexto familiar",
      [
        "Informante y vínculo con el paciente",
        "Personas con quienes vive",
        "Composición del hogar y responsabilidades",
        "Acuerdos de crianza y pautas de comunicación",
        "Conflictos, pérdidas y cambios importantes",
        "Recursos de apoyo y personas de confianza",
      ],
    ],
    [
      "Historia y antecedentes familiares",
      [
        "Antecedentes relevantes de la rama paterna",
        "Antecedentes relevantes de la rama materna",
        "Antecedentes psicológicos, psiquiátricos o médicos referidos",
        "Relaciones con hermanos, pareja u otras personas significativas",
        "Factores protectores y acontecimientos significativos",
      ],
    ],
  ];
  return c14Sections(
    "entrevista-familiar",
    "Entrevista familiar",
    groups,
    "Documento complementario de la historia clínica",
  );
}
function c14Genogram() {
  const c = c14Store(),
    p = pat();
  return `<div class="c14-head"><div><h2>Genograma familiar</h2><div class="c14-sub">Formato básico editable para documentar parentesco, convivencia y observaciones. Construcción e interpretación a cargo del profesional.</div></div><button class="btn primary" onclick="c14AddMember()">＋ Agregar integrante</button></div><div class="c14-amber">Simbología: □ masculino, ○ femenino, ◇ sin especificar. La disposición visual es orientativa, no reemplaza un genograma clínico completo con relaciones y simbología profesional.</div><div class="c14-section section"><h3>Persona índice</h3><div class="c14-genogram"><div class="c14-genPerson"><i>◇</i><b>${esc(p.name)}</b><small>Paciente índice · ${esc(p.id)}</small></div>${c.family.map((x) => `<div class="c14-genPerson"><i>${x.sex === "Masculino" ? "□" : x.sex === "Femenino" ? "○" : "◇"}</i><b>${esc(x.name || "Sin nombre")}</b><small>${esc(x.relation || "Relación sin definir")}<br>${esc(x.cohabits || "")}</small></div>`).join("")}</div><hr class="c14-sep"><h3>Registro de integrantes</h3><div class="c14-person"><span class="muted">Símbolo</span><span class="muted">Nombre</span><span class="muted">Parentesco</span><span class="muted">Edad</span><span class="muted">Convive / notas</span><span></span></div>${c.family.map((m, i) => `<div class="c14-person"><select id="fmSex${i}"><option ${m.sex === "Sin especificar" ? "selected" : ""}>Sin especificar</option><option ${m.sex === "Femenino" ? "selected" : ""}>Femenino</option><option ${m.sex === "Masculino" ? "selected" : ""}>Masculino</option></select><input id="fmName${i}" value="${esc(m.name)}"><input id="fmRelation${i}" value="${esc(m.relation)}" placeholder="Madre, padre, pareja..."><input id="fmAge${i}" value="${esc(m.age)}" placeholder="Edad"><input id="fmCohabit${i}" value="${esc(m.cohabits)}" placeholder="Convive / observaciones"><button class="btn danger" onclick="c14DeleteMember(${i})" title="Eliminar integrante">×</button></div>`).join("") || '<p class="muted">Sin integrantes agregados. Utiliza «Agregar integrante» para iniciar.</p>'}<div class="c14-tools"><button class="btn primary" onclick="c14SaveFamily()">Guardar genograma</button><button class="btn" onclick="c14PrintGenogram()">Imprimir ficha familiar</button></div></div>`;
}
function c14SaveFamily() {
  let family = c14Store().family;
  family.forEach((m, i) => {
    m.sex = $("#fmSex" + i)?.value || "";
    m.name = $("#fmName" + i)?.value || "";
    m.relation = $("#fmRelation" + i)?.value || "";
    m.age = $("#fmAge" + i)?.value || "";
    m.cohabits = $("#fmCohabit" + i)?.value || "";
  });
  save();
  notify("Genograma guardado");
}
function c14AddMember() {
  c14SaveFamily();
  c14Store().family.push({
    sex: "Sin especificar",
    name: "",
    relation: "",
    age: "",
    cohabits: "",
  });
  save();
  go("expediente");
}
function c14DeleteMember(i) {
  c14SaveFamily();
  if (!confirm("¿Eliminar este integrante del genograma de demostración?"))
    return;
  c14Store().family.splice(i, 1);
  save();
  go("expediente");
}
function c14PrintGenogram() {
  c14SaveFamily();
  let p = pat();
  printPage(
    "Genograma y composición familiar",
    `<p>${esc(p.name)} · ${esc(p.id)}</p><table><thead><tr><th>Nombre</th><th>Parentesco</th><th>Sexo referido</th><th>Edad</th><th>Notas</th></tr></thead><tbody>${c14Store()
      .family.map(
        (m) =>
          `<tr><td>${esc(m.name)}</td><td>${esc(m.relation)}</td><td>${esc(m.sex)}</td><td>${esc(m.age)}</td><td>${esc(m.cohabits)}</td></tr>`,
      )
      .join("")}</tbody></table>`,
  );
}
const c14TriageFlags = {
  Alto: [
    "Alteración del estado de conciencia",
    "Desorientación marcada",
    "Agitación psicomotora importante",
    "Ideación o conducta suicida referida",
    "Síntomas psicóticos o disociativos agudos",
    "Riesgo de daño inmediato hacia sí o terceros",
  ],
  Moderado: [
    "Alteración parcial de atención o memoria",
    "Alteración cognitiva o emocional",
    "Autolesión referida: requiere valoración inmediata del contexto",
    "Inhibición psicomotriz o mutismo",
    "Signos físicos preocupantes referidos: requiere valoración médica",
  ],
  Leve: [
    "Malestar emocional o disforia",
    "Funcionamiento conservado según evaluación actual",
  ],
};
function c14TriageView() {
  let t = c14Store().triage,
    p = pat();
  return `<div class="c14-head"><div><h2>Triage psicológico</h2><div class="c14-sub">Registro profesional basado en observaciones, entrevista y contexto. No realiza diagnósticos ni asignación automática de riesgo.</div></div><span class="c14-chip">${esc(t.level || "Sin valorar")}</span></div><div class="c14-danger"><b>Revisión inmediata cuando proceda:</b> si se identifica ideación o conducta suicida, alteración de conciencia, síntomas agudos o riesgo para la integridad, no esperar un cálculo de escala ni la siguiente cita. Activar el protocolo clínico y los servicios de emergencia pertinentes según valoración profesional.</div><div class="c14-section section"><h3>Nivel de prioridad decidido por el profesional</h3><div class="c14-triage-level">${["Leve", "Moderado", "Alto"].map((x) => `<label><input type="radio" name="tri14Level" value="${x}" ${t.level === x ? "checked" : ""}>${x}</label>`).join("")}</div><p class="muted tiny section">La clasificación se basa en el cuadro de triage de referencia aportado, adaptado a un registro clínico. La presencia de un signo por sí sola no debe sustituir la valoración integral.</p></div><div class="c14-section section"><h3>Hallazgos observados o referidos</h3>${Object.entries(
    c14TriageFlags,
  )
    .map(
      ([group, arr]) =>
        `<h4 class="section">${group}</h4><div class="c14-checkgrid">${arr.map((f) => `<label><input class="tri14Flag" type="checkbox" value="${esc(f)}" ${(t.flags || []).includes(f) ? "checked" : ""}>${esc(f)}</label>`).join("")}</div>`,
    )
    .join(
      "",
    )}</div><div class="c14-section section"><div class="c14-grid">${c14Text("Evaluación clínica y contexto", t.details, "details")}${c14Text("Acción tomada / plan de seguridad / derivación", t.actions, "actions")}${c14Text("Profesional responsable", t.reviewer, "reviewer", false)}<div class="c14-field"><label>Fecha de revisión</label><input type="date" id="tri14Date" value="${esc(t.date || c14Date())}"></div></div><div class="c14-tools"><button class="btn primary" onclick="c14SaveTriage()">Guardar triage</button><button class="btn" onclick="c14PrintTriage()">Imprimir registro</button></div></div>`;
}
function c14SaveTriage() {
  const c = c14Store(),
    selected = document.querySelector('[name="tri14Level"]:checked');
  if (!selected) return notify("Selecciona un nivel según tu evaluación");
  c.triage = {
    level: selected.value,
    flags: [...document.querySelectorAll(".tri14Flag:checked")].map(
      (x) => x.value,
    ),
    details: document.querySelector('[data-f14="details"]')?.value || "",
    actions: document.querySelector('[data-f14="actions"]')?.value || "",
    reviewer: document.querySelector('[data-f14="reviewer"]')?.value || "",
    date: $("#tri14Date")?.value || c14Date(),
  };
  pat().risk =
    selected.value === "Alto"
      ? "Alto"
      : selected.value === "Moderado"
        ? "Seguimiento"
        : "Bajo";
  save();
  go("expediente");
  notify("Se registró la clasificación manual de triage");
  if (
    selected.value === "Alto" ||
    c.triage.flags.some((x) => /suicida|inmediato|conciencia/i.test(x))
  )
    modal(
      "Revisión clínica prioritaria",
      `<div class="c14-danger"><b>Atención prioritaria.</b><p>Revisa los hallazgos y aplica el protocolo de atención, contacto y derivación de la institución. La clasificación no constituye una evaluación automatizada.</p></div>`,
      `<button class="btn primary" onclick="closeModal()">Entendido</button>`,
    );
}
function c14PrintTriage() {
  let t = c14Store().triage;
  printPage(
    "Triage psicológico",
    `<p>${esc(pat().id)} · ${esc(pat().name)} · ${esc(t.date)}</p><p><b>Prioridad registrada:</b> ${esc(t.level)}</p><p><b>Hallazgos:</b> ${esc((t.flags || []).join("; "))}</p><p><b>Evaluación:</b> ${esc(t.details)}</p><p><b>Acción:</b> ${esc(t.actions)}</p><p><b>Profesional:</b> ${esc(t.reviewer)}</p>`,
  );
}
function c14Visible(item) {
  if (!item) return false;
  let v = item.visibility || "clinico";
  if (v === "ahora") return true;
  if (v === "fecha") return !!item.availableOn && item.availableOn <= c14Date();
  return false;
}
function c14VisibilityBlock(v = "clinico", date = "", prefix = "act14") {
  return `<div class="c14-visibility"><b>¿Cuándo puede ver el paciente este recurso?</b><div class="formgrid"><div class="c14-field"><label>Visibilidad</label><select id="${prefix}Vis"><option value="clinico" ${v === "clinico" ? "selected" : ""}>Solo profesional (no publicar)</option><option value="ahora" ${v === "ahora" ? "selected" : ""}>Visible desde ahora</option><option value="fecha" ${v === "fecha" ? "selected" : ""}>Visible a partir de una fecha</option></select></div><div class="c14-field"><label>Disponible desde</label><input type="date" id="${prefix}Date" value="${esc(date || "")}"></div></div><div class="formHint">En producción la publicación requiere permisos reales por paciente. Aquí se simula su visualización local.</div></div>`;
}
function c14ActivitiesView() {
  let p = pat(),
    arr = data.tasks[p.id] || [];
  return `<div class="c14-head"><div><h2>Actividades terapéuticas</h2><div class="c14-sub">Material para sesiones o trabajo entre consultas, con fecha de publicación controlada.</div></div><button class="btn" onclick="activityTarget=pid;go('plantillas')">▤ Abrir editor de plantillas</button></div><div class="c14-section" id="c14ActNew"><h3>Asignar una actividad</h3><div class="c14-grid"><div class="c14-field"><label>Nombre / actividad</label><input id="act14Name" placeholder="Ej. Registro semanal de emociones"></div><div class="c14-field"><label>Fecha de asignación</label><input id="act14AssignDate" type="date" value="${c14Date()}"></div><div class="c14-field" style="grid-column:1/-1"><label>Indicaciones y espacio de reflexión</label><textarea id="act14Instructions" placeholder="Consignas concretas para la persona usuaria."></textarea></div></div>${c14VisibilityBlock("clinico", "", "act14")}<div class="c14-tools"><button class="btn primary" onclick="c14AddActivity()">Guardar actividad</button></div></div><h3 class="section">Actividades anteriores</h3><div class="c14-list">${arr.map((a, i) => `<div class="c14-listItem"><b>${esc(a.name)}</b> <span class="c14-chip">${c14Visible(a) ? "Visible para el paciente" : a.visibility === "fecha" ? "Programada" : "Solo profesional"}</span><p>${esc(a.date || "")} · ${a.done ? "Completada" : "Pendiente"}<br>${esc(a.instructions || a.positive || "")}</p><div class="tools"><button class="btn" onclick="c14EditActivity(${i})">Editar / visibilidad</button><button class="btn danger" onclick="c14DeleteActivity(${i})">Eliminar</button>${a.templateSnapshot ? '<span class="muted">Vinculada a plantilla</span>' : ""}</div></div>`).join("") || '<p class="muted">Todavía no hay actividades asignadas.</p>'}</div>`;
}
function c14AddActivity() {
  let name = $("#act14Name")?.value.trim(),
    date = $("#act14AssignDate")?.value,
    inst = $("#act14Instructions")?.value,
    visibility = $("#act14Vis")?.value,
    availableOn = $("#act14Date")?.value;
  if (!name) return notify("Escribe un nombre para la actividad");
  if (visibility === "fecha" && !availableOn)
    return notify("Selecciona una fecha de publicación");
  (data.tasks[pid] ??= []).push({
    name,
    date,
    done: false,
    positive: "",
    instructions: inst,
    visibility,
    availableOn,
  });
  save();
  go("expediente");
  notify("Actividad registrada");
}
function c14EditActivity(i) {
  const a = data.tasks[pid]?.[i];
  if (!a) return;
  modal(
    "Editar actividad",
    `<div id="act14Modal"><div class="c14-field"><label>Nombre</label><input id="act14EditName" value="${esc(a.name)}"></div><div class="c14-field section"><label>Indicaciones</label><textarea id="act14EditText">${esc(a.instructions || "")}</textarea></div><div class="section">${c14VisibilityBlock(a.visibility || "clinico", a.availableOn || "", "actEdit14")}</div></div>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="c14SaveActivityEdit(${i})">Guardar cambios</button>`,
  );
}
function c14SaveActivityEdit(i) {
  const a = data.tasks[pid]?.[i];
  if (!a) return;
  let vis = $("#actEdit14Vis")?.value,
    date = $("#actEdit14Date")?.value;
  if (vis === "fecha" && !date)
    return notify("Indica la fecha desde la cual será visible");
  a.name = $("#act14EditName").value.trim() || a.name;
  a.instructions = $("#act14EditText").value;
  a.visibility = vis;
  a.availableOn = date;
  save();
  closeModal();
  go("expediente");
  notify("Actividad y visibilidad actualizadas");
}
function c14DeleteActivity(i) {
  if (!confirm("¿Eliminar esta actividad ficticia?")) return;
  data.tasks[pid]?.splice(i, 1);
  save();
  go("expediente");
}
const c14KitAreas = [
  [
    "Autocalmar · Cinco sentidos",
    "Objetos, imágenes, sonidos, aromas, texturas o sabores seguros",
  ],
  [
    "Distracción",
    "Actividades breves que ayuden a atravesar el pico de malestar",
  ],
  ["Significado", "Carta a sí mismo, valores y recordatorios con sentido"],
  [
    "Respiración y cuerpo",
    "Ejercicios de respiración pautados y relajación practicados en consulta",
  ],
  ["Anclaje", "Orientación al presente y recursos de grounding"],
  ["Recordatorios", "Frases útiles, apoyos y aprendizajes previos"],
  [
    "Plan de crisis",
    "Señales de alerta propias, personas de apoyo, profesionales y recursos de emergencia",
  ],
];
function c14KitView() {
  let k = c14Store().kit || {},
    p = pat();
  return `<div class="c14-head"><div><h2>Kit de emergencia · DBT</h2><div class="c14-sub">Material de autocuidado y plan de crisis elaborado con la persona durante sesiones.</div></div><span class="c14-chip">${c14Visible(k) ? "Compartido con el paciente" : k.visibility === "fecha" ? "Publicación programada" : "Uso interno"}</span></div><div class="c14-amber"><b>Complemento, no sustituto de atención inmediata.</b> Este recurso debe adaptarse a la persona y revisarse con el profesional. Ante peligro inmediato deben activarse los servicios de emergencia locales y el protocolo institucional.</div><div id="clinicalV14" class="c14-section section"><div class="c14-wrap">${c14KitAreas.map(([n, desc], i) => `<details class="c14-section" ${i === 0 ? "open" : ""}><summary>${i + 1}. ${esc(n)}</summary><p class="muted tiny section">${esc(desc)}</p>${c14Text("Contenido acordado con el paciente", k.fields?.[n] || "", n)}</details>`).join("")}</div><div class="section">${c14VisibilityBlock(k.visibility || "clinico", k.availableOn || "", "kit14")}</div><div class="c14-tools"><button class="btn primary" onclick="c14SaveKit()">Guardar kit y visibilidad</button><button class="btn" onclick="c14PrintKit()">Imprimir kit</button></div></div>`;
}
function c14SaveKit() {
  const k = c14Store().kit || { fields: {} };
  k.fields ??= {};
  document
    .querySelectorAll("#clinicalV14 [data-f14]")
    .forEach((e) => (k.fields[e.dataset.f14] = e.value));
  k.visibility = $("#kit14Vis").value;
  k.availableOn = $("#kit14Date").value;
  if (k.visibility === "fecha" && !k.availableOn)
    return notify("Selecciona una fecha de publicación");
  c14Store().kit = k;
  save();
  go("expediente");
  notify("Kit DBT actualizado");
}
function c14PrintKit() {
  let k = c14Store().kit || {};
  const body = `<p>${esc(pat().name)} · ${esc(pat().id)}</p>${c14KitAreas.map(([n]) => `<h3>${esc(n)}</h3><pre>${esc(k.fields?.[n] || "Pendiente de completar con profesional")}</pre>`).join("")}`;
  printPage("Kit de emergencia · DBT", body);
}
function c14PsyView() {
  let p = pat(),
    items = evalEntries().filter((x) => x.patient === p.id);
  let other = Object.values(data.evaluations || {}).filter(
    (x) => x.patient === p.id && !items.some((a) => a.resultId === x.id),
  );
  return `<div class="c14-head"><div><h2>Valoraciones psicométricas pre y post tratamiento</h2><div class="c14-sub">Cada escala conserva su momento de aplicación, fecha y registro separado; no se equiparan instrumentos diferentes.</div></div><button class="btn primary" onclick="scaleTarget=pid;evPage='catalog';go('evaluaciones')">＋ Asignar prueba</button></div><div class="c14-grid"><div class="c14-section"><h3>Inicial / pretratamiento</h3>${
    items
      .filter((x) => /Inicial|pre/i.test(x.moment || ""))
      .map(c14EvalRow)
      .join("") ||
    '<p class="muted">Sin aplicaciones iniciales registradas.</p>'
  }</div><div class="c14-section"><h3>Final / postratamiento</h3>${
    items
      .filter((x) => /Final|post/i.test(x.moment || ""))
      .map(c14EvalRow)
      .join("") || '<p class="muted">Sin aplicaciones finales registradas.</p>'
  }</div></div><div class="c14-section section"><h3>Intermedias / seguimiento / otras</h3>${
    items
      .filter((x) => !/Inicial|pre|Final|post/i.test(x.moment || ""))
      .map(c14EvalRow)
      .join("") || '<p class="muted">Sin registros adicionales.</p>'
  }${other.map((x) => `<div class="listitem"><div><b>${esc(instDisplay(x.instrument))}</b><br><small>${esc(x.moment || "")} · ${esc(x.date || "")}</small></div>${tag("Registrado")}</div>`).join("")}</div><div class="notice section">Los resultados de tamizaje deben interpretarse junto con entrevista, contexto y observación clínica. El módulo de triage es independiente de las puntuaciones psicométricas.</div>`;
}
function c14EvalRow(a) {
  return `<div class="listitem"><div><b>${esc(instDisplay(a.instrument))}</b><br><small>${esc(a.assigned || "")} · ${esc(a.moment || "")}</small></div>${tag(a.status)}</div>`;
}
const c14AltaFields = [
  "Fecha de alta de servicio",
  "Motivo de ingreso y demanda inicial",
  "Intervenciones realizadas y objetivos trabajados",
  "Instrumentos pre y post aplicados",
  "Hallazgos clínicos y resultados pertinentes",
  "Estado y evolución al cierre del servicio",
  "Recomendaciones y seguimiento ofrecido",
  "Derivación o cita abierta, si corresponde",
  "Nombre y cédula del profesional",
];
function c14Discharge() {
  const c = c14Store(),
    p = pat();
  return `<div class="c14-head"><div><h2>Alta del servicio de psicología</h2><div class="c14-sub">Documento clínico de finalización o transición del tratamiento.</div></div><span class="c14-chip">${c.discharges.length} alta(s)</span></div><div class="c14-outcome"><b>El alta del servicio no cierra ni inactiva automáticamente el expediente.</b><p class="muted">El cierre administrativo se realiza por separado en la sección «Cierre del expediente», mediante confirmación explícita del profesional.</p></div><div class="c14-section section" id="c14DischargeForm"><div class="c14-grid">${c14AltaFields.map((name, i) => (i === 0 ? `<div class="c14-field"><label>${esc(name)}</label><input type="date" data-a14="${esc(name)}" value="${esc(c14Date())}"></div>` : `<div class="c14-field"><label>${esc(name)}</label><textarea data-a14="${esc(name)}">${esc(i === 8 ? $("#username")?.textContent || "" : "")}</textarea></div>`)).join("")}</div><div class="c14-tools"><button class="btn primary" onclick="c14SaveDischarge()">Guardar alta de psicología</button><button class="btn" onclick="c14PrintDischargeDraft()">Imprimir borrador</button></div></div><h3 class="section">Historial de altas</h3>${
    c.discharges
      .slice()
      .reverse()
      .map(
        (d, i) =>
          `<div class="c14-docrow"><div><b>Alta de servicio · ${esc(d.date)}</b><small>Firmante: ${esc(d.author)} · Expediente: ${esc(p.status)} · permanece ${p.closed ? "cerrado" : "abierto"}</small></div><button class="btn" onclick="c14PrintSavedDischarge(${c.discharges.length - i - 1})">Imprimir</button></div>`,
      )
      .join("") ||
    '<p class="muted">No se ha registrado un alta de servicio.</p>'
  }`;
}
function c14DischargeFormValues() {
  let o = {};
  document
    .querySelectorAll("#c14DischargeForm [data-a14]")
    .forEach((e) => (o[e.dataset.a14] = e.value));
  return o;
}
function c14SaveDischarge() {
  const v = c14DischargeFormValues();
  if (
    !v["Fecha de alta de servicio"] ||
    !v["Intervenciones realizadas y objetivos trabajados"]?.trim()
  )
    return notify("Registra fecha e intervenciones realizadas");
  c14Store().discharges.push({
    date: v["Fecha de alta de servicio"],
    author: $("#username").textContent,
    values: v,
  });
  save();
  go("expediente");
  notify("Alta clínica registrada; el expediente permanece abierto");
}
function c14DischargeHTML(d) {
  return `<p><b>${esc(pat().name)}</b> · ${esc(pat().id)}</p>${Object.entries(
    d.values || {},
  )
    .map(([k, v]) => `<p><b>${esc(k)}</b><br>${esc(v || "Pendiente")}</p>`)
    .join("")}<p>Firma profesional: __________________________________</p>`;
}
function c14PrintDischargeDraft() {
  printPage(
    "Alta de servicio de psicología",
    c14DischargeHTML({ values: c14DischargeFormValues() }),
  );
}
function c14PrintSavedDischarge(i) {
  let x = c14Store().discharges[i];
  if (x) printPage("Alta de servicio de psicología", c14DischargeHTML(x));
}
function c14ClosureView() {
  const p = pat(),
    closed = !!p.closed;
  return `<div class="c14-head"><div><h2>Cierre administrativo del expediente</h2><div class="c14-sub">Acción distinta del alta de servicio psicológico.</div></div>${tag(closed ? "Cerrado" : "Activo")}</div><div class="c14-section"><div class="c14-outcome"><b>Estado actual: ${closed ? "Expediente cerrado" : "Expediente abierto"}</b><p>El alta clínica registrada no modifica este estado. El cierre debe ser una decisión consciente del profesional responsable, con motivo y fecha.</p></div>${closed ? `<div class="section"><p><b>Fecha:</b> ${esc(p.closedAt || "")}<br><b>Motivo:</b> ${esc(p.closureReason || "")}<br><b>Profesional:</b> ${esc(p.closedBy || "")}</p><button class="btn" onclick="c14Reopen()">Reabrir expediente</button></div>` : `<div class="section c14-field"><label>Motivo de cierre administrativo</label><textarea id="c14ClosureReason" placeholder="Motivo y observaciones para el archivo administrativo."></textarea></div><label class="c14-choice section"><input id="c14CloseConsent" type="checkbox">Soy el profesional responsable y confirmo voluntariamente el cierre de este expediente. Comprendo que el alta clínica y el cierre administrativo son acciones independientes.</label><button class="btn danger section" onclick="c14CloseRecord()">Cerrar expediente</button>`}</div><div class="notice section">Cerrar equivale aquí a modificar el estado de la ficha; no borra la documentación. La conservación, firma, control de acceso y auditoría deberán implementarse antes de tratar datos reales.</div>`;
}
function c14CloseRecord() {
  let p = pat(),
    reason = $("#c14ClosureReason")?.value.trim();
  if (!$("#c14CloseConsent")?.checked)
    return notify("Marca la casilla de confirmación explícita");
  if (!reason) return notify("Registra el motivo de cierre");
  if (
    !confirm("¿Confirmas el cierre administrativo del expediente " + p.id + "?")
  )
    return;
  p.closed = true;
  p.status = "Cerrado";
  p.closedAt = c14Date();
  p.closedBy = $("#username")?.textContent || "";
  p.closureReason = reason;
  save();
  go("expediente");
  notify("Expediente cerrado por decisión del profesional");
}
function c14Reopen() {
  let p = pat();
  if (!confirm("¿Reabrir este expediente ficticio?")) return;
  p.closed = false;
  p.status = "Activo";
  p.reopenedAt = c14Date();
  save();
  go("expediente");
  notify("Expediente reabierto");
}
function c14FileEntry() {
  let p = pat(),
    files = (data.docs[p.id] || []).filter((x) => x.file);
  return `<div class="c14-head"><div><h2>Archivos y documentos</h2><div class="c14-sub">Control documental por paciente. Los archivos en esta demo guardan solo nombre y metadatos.</div></div><button class="btn primary" onclick="toggle('uploadComposer')">＋ Registrar archivo</button></div><div class="c14-grid"><div class="c14-section"><h3>Documentos de admisión</h3>${Object.keys(
    c14DocDefs,
  )
    .map(
      (x, i) =>
        `<div class="c14-docrow"><div><b>${esc(x)}</b><small>${(data.docs[p.id] || []).filter((d) => d.type === x).length} versión(es)</small></div><button class="btn" onclick="c14AdmType=${escapeJS(x)};patientPane='detalles';detailPane='admision';go('expediente')">Abrir</button></div>`,
    )
    .join(
      "",
    )}</div><div><div id="uploadComposer" class="c14-section hidden"><h3>Adjuntar documentación</h3><div class="notice">En el HTML local se almacena solo el nombre del archivo. El archivo no se transmite ni se conserva.</div><div class="field"><label>Tipo</label><select id="upType">${docOptions.map((n) => `<option>${esc(n)}</option>`).join("")}</select></div><div class="field"><label>Fecha</label><input type="date" id="upDate" value="${c14Date()}"></div><div class="field"><label>Archivo</label><input id="upFile" type="file" accept=".pdf,.png,.jpeg,.jpg,.doc,.docx"></div><button class="btn primary section" onclick="uploadPatientFile()">Registrar nombre de archivo</button></div><div class="c14-section"><h3>Referencias de archivos previos</h3>${files.map((d) => `<div class="c14-docrow"><div><b>▧ ${esc(d.file)}</b><small>${esc(d.date || "")} · ${esc(d.type || "Archivo adicional")}</small></div>${tag("Referencia demo")}</div>`).join("") || '<p class="muted">Sin referencias de documentos adjuntos.</p>'}</div></div></div>`;
}
/* Override cleanly while preserving the complete V13 modules via aliases. */
function patientDetails() {
  const p = pat();
  let details = [
    ["ficha", "Identificación"],
    ["admision", "A · Admisión"],
    ["historia", "B · Historia clínica"],
    ["familiar", "Entrevista familiar"],
    ["genograma", "Genograma"],
    ["inicial", "Evaluación inicial"],
    ["plan", "Plan terapéutico"],
    ["notas", "Notas de evolución"],
    ["evaluaciones", "Pre / post TX"],
    ["riesgo", "Triage"],
    ["actividades", "Actividades"],
    ["kit", "Kit DBT"],
    ["alta", "Alta psicológica"],
    ["cierre", "Cierre del expediente"],
  ];
  tab = detailPane;
  return `<div class="innerNav">${details.map(([k, n]) => `<button class="btn ${detailPane === k ? "selected" : ""}" onclick="detailPane='${k}';go('expediente')">${n}</button>`).join("")}</div><div class="card">${expContent()}</div>`;
}
function expContent() {
  let p = pat();
  if (!p) return '<div class="card">No existe este expediente.</div>';
  switch (detailPane) {
    case "ficha": {
      let status = p.closed
        ? "Cerrado"
        : p.status === "Suspendido"
          ? "Suspendido"
          : "Activo";
      return `<div class="c14-head"><div><h2>Ficha de identificación</h2><div class="c14-sub">Se precarga al crear el paciente. Los documentos utilizan este folio interno.</div></div><button class="btn" onclick="detailPane='cierre';go('expediente')">Estado: ${esc(status)} →</button></div><div class="formgrid">${inputField("Número de expediente", "pf_id", "text", p.id)}${inputField("Nombre completo", "pf_name", "text", p.name)}${inputField("Fecha de nacimiento", "pf_dob", "date", p.dob)}${inputField("Edad", "pf_age", "text", age(p) + " años")}${inputField("Sexo", "pf_sex", "text", p.sex)}${inputField("Género", "pf_gender", "text", p.gender)}${inputField("Estado civil", "pf_civil", "text", p.civil)}${inputField("Ocupación", "pf_occupation", "text", p.occupation)}${inputField("Diagnóstico / formulación", "pf_diagnosis", "text", p.diagnosis)}${inputField("Contacto de emergencia: nombre", "pf_emergency", "text", p.emergency)}${inputField("Contacto de emergencia: teléfono", "pf_phone", "tel", p.phone)}<div class="field"><label>Estado administrativo (el cierre requiere confirmación independiente)</label><select id="pf_status">${(p.closed ? ["Cerrado"] : ["Activo", "Suspendido"]).map((x) => `<option ${status === x ? "selected" : ""}>${x}</option>`).join("")}</select></div></div><div class="c14-tools"><button class="btn primary" onclick="saveIdentity()">Guardar identificación</button></div>`;
    }
    case "admision":
      return c14AdmitMarkup();
    case "historia":
      return hc16View();
    case "soap16":
      return hc16SoapView();
    case "familiar":
      return c14Family();
    case "genograma":
      return c14Genogram();
    case "evaluaciones":
      return c14PsyView();
    case "riesgo":
      return c14TriageView();
    case "actividades":
      return c14ActivitiesView();
    case "kit":
      return c14KitView();
    case "alta":
      return c14Discharge();
    case "cierre":
      return c14ClosureView();
    default:
      tab = detailPane;
      return expContentV13();
  }
}
function patientFiles() {
  return c14FileEntry();
}
function documentos(embedded = false) {
  if (!isPatient()) return documentosV13(embedded);
  const id = "PS-0001",
    p = data.patients.find((x) => x.id === id),
    c = c14Store(id),
    tasks = (data.tasks[id] || []).filter(c14Visible),
    kit = c.kit;
  return (
    header(
      "PORTAL PERSONAL",
      "Materiales compartidos",
      "El profesional decide cuándo publicar actividades y kit de crisis.",
    ) +
    `<div class="two"><div class="card"><h2>Actividades disponibles</h2>${tasks.map((x) => `<div class="c14-portalCard"><b>${esc(x.name)}</b><p class="muted">${esc(x.instructions || x.positive || "Revisa la consigna con tu profesional.")}</p>${tag(x.done ? "Completada" : "Pendiente")}</div>`).join("") || '<p class="muted">No hay actividades publicadas para este perfil.</p>'}</div><div class="card"><h2>Kit de emergencia</h2>${c14Visible(kit) ? `<p class="muted">Material elaborado con tu profesional. No sustituye la atención urgente.</p>${c14KitAreas.map(([n]) => `<div class="listitem"><div><b>${esc(n)}</b><br><small>${esc(kit.fields?.[n] || "Aún no completado")}</small></div></div>`).join("")}` : '<p class="muted">El kit todavía no está publicado para ti.</p>'}<div class="notice section">Ante peligro inmediato, contacta a los servicios de emergencia locales o al equipo responsable de tu atención.</div></div></div>`
  );
}

function c14PatientTaskList(id) {
  let arr = (data.tasks[id] || [])
    .map((x, i) => ({ ...x, index: i }))
    .filter(c14Visible);
  return arr.length
    ? arr
        .map(
          (t) =>
            `<div class="listitem"><div><b>${esc(t.name)}</b><br><small>${esc(t.date || "")} · ${t.done ? "Completada" : "Pendiente"}</small><p class="muted tiny">${esc(t.instructions || t.positive || "")}</p></div><button class="btn" onclick="toggleTask('${id}',${t.index})">${t.done ? "✓ Hecha" : "Marcar realizada"}</button></div>`,
        )
        .join("")
    : '<p class="muted">Tu profesional todavía no ha publicado actividades para ti.</p>';
}

/* Normalización de la muestra heredada: alta previa no constituye cierre administrativo. */
if (data?.patients?.length) {
  let changed = false;
  for (const p of data.patients) {
    if (p.status === "Alta" && !p.closed) {
      p.status = "Activo";
      p.legacyAltaImported = true;
      changed = true;
    }
  }
  if (changed) save();
}

/* V15: identification card stays visible; the remainder is arranged as worksheet tabs. */
let v15HistoryPane = "historia",
  v15EvolutionPane = "notas",
  v15ResourcePane = "actividades";
const v15Tabs = [
  ["resumen", "Resumen"],
  ["sesiones", "Sesiones"],
  ["admision", "Admisión"],
  ["historia", "Historia clínica"],
  ["evolucion", "Evolución"],
  ["evaluaciones", "Evaluaciones"],
  ["recursos", "Recursos"],
  ["archivos", "Archivos"],
  ["triage", "Triage"],
  ["historial", "Historial"],
  ["pagos", "Pagos"],
];
function v15Sheet() {
  if (patientPane === "detalles")
    return (
      {
        ficha: "identificacion",
        admision: "admision",
        historia: "historia",
        familiar: "historia",
        genograma: "historia",
        inicial: "historia",
        plan: "historia",
        notas: "evolucion",
        alta: "evolucion",
        cierre: "evolucion",
        evaluaciones: "evaluaciones",
        riesgo: "triage",
        actividades: "recursos",
        kit: "recursos",
      }[detailPane] || "resumen"
    );
  return [
    "resumen",
    "sesiones",
    "admision",
    "historia",
    "evolucion",
    "evaluaciones",
    "recursos",
    "archivos",
    "triage",
    "historial",
    "pagos",
    "identificacion",
  ].includes(patientPane)
    ? patientPane
    : "resumen";
}
function v15Select(sheet) {
  patientPane = sheet;
  if (sheet === "historia") detailPane = v15HistoryPane;
  else if (sheet === "evolucion") detailPane = v15EvolutionPane;
  else if (sheet === "recursos") detailPane = v15ResourcePane;
  else if (sheet === "admision") detailPane = "admision";
  else if (sheet === "evaluaciones") detailPane = "evaluaciones";
  else if (sheet === "triage") detailPane = "riesgo";
  else if (sheet === "identificacion") detailPane = "ficha";
  go("expediente");
}
function v15DetailsChoice(group, item) {
  if (group === "historia") v15HistoryPane = item;
  if (group === "evolucion") v15EvolutionPane = item;
  if (group === "recursos") v15ResourcePane = item;
  detailPane = item;
  patientPane = group;
  go("expediente");
}
function v15Schedule() {
  let id = pid;
  go("agenda");
  const form = $("#newAppointment");
  if (form) {
    form.classList.remove("hidden");
    const checkbox = [
      ...document.querySelectorAll('[name=\"apptPerson\"]'),
    ].find((el) => el.value === id);
    if (checkbox) {
      checkbox.checked = true;
      renderApptContacts();
    }
  }
}
function v15Initials(p) {
  return String(p.name || "P")
    .split(/\s+/)
    .slice(0, 2)
    .map((x) => x[0])
    .join("")
    .toUpperCase();
}
function v15Datum(label, value, wide = false) {
  return `<div class="v15-datum ${wide ? "wide" : ""}"><dt>${esc(label)}</dt><dd>${value || '<span style="color:#9c9195">Sin registrar</span>'}</dd></div>`;
}
function v15SafeLink(protocol, value) {
  let v = String(value || "").trim();
  if (!v || v === "Por registrar") return esc(v || "Sin registrar");
  let href =
    protocol === "tel"
      ? "tel:" + v.replace(/[^\d+]/g, "")
      : "mailto:" + encodeURIComponent(v);
  return `<a href="${esc(href)}">${esc(v)}</a>`;
}
function v15IdCard(p) {
  let links = p.links || [],
    start = p.createdAt || p.enrollmentDate || "",
    emer = p.emergency || "",
    phone = p.phone || "",
    gender = p.gender || "",
    email = p.email || "",
    contact = p.contact || "";
  return `<aside class="v15-idcard" aria-label="Ficha de identificación de ${esc(p.name)}"><div class="v15-idtop"><div class="v15-ididentity"><div class="v15-monogram">${esc(v15Initials(p))}</div><div class="v15-idnames"><h2>${esc(p.name)}</h2><div class="v15-idstatus ${p.closed ? "closed" : ""}">${esc(p.closed ? "Expediente cerrado" : p.status === "Suspendido" ? "Atención suspendida" : "Paciente activo")}</div></div><button class="v15-editcard" onclick="v15Select('identificacion')" title="Editar ficha de identificación" aria-label="Editar ficha">✎</button></div><p class="v15-idminor">${start ? "En atención desde el " + esc(start) : "Folio de registro: " + esc(p.id)}</p></div><dl class="v15-idfields">${v15Datum("Edad", age(p) + " años")}${v15Datum("Documento / expediente", esc(p.id))}${v15Datum("Sexo", esc(p.sex || ""))}${v15Datum("Teléfono", v15SafeLink("tel", contact))}${v15Datum("Correo electrónico", v15SafeLink("mailto", email))}${v15Datum("Dirección", esc(p.address || ""))}${v15Datum("Fecha de nacimiento", esc(p.dob || ""))}${v15Datum("Género", esc(gender))}${v15Datum("Estado civil", esc(p.civil || ""))}${v15Datum("Ocupación", esc(p.occupation || ""))}${v15Datum("Contacto de emergencia", `${esc(emer || "Sin registrar")}${phone ? "<br>" + v15SafeLink("tel", phone) : ""}`, true)}${v15Datum("Diagnóstico / formulación", esc(p.diagnosis || "En evaluación"), true)}</dl><div class="v15-links"><div class="v15-links-head"><b>VÍNCULOS</b><button onclick="v15LinkModal()">＋ Vincular</button></div>${links.length ? links.map((l, i) => `<div class="v15-linked"><span>${esc(l.relation || "Vínculo")}: <strong>${esc(l.name || "Sin nombre")}</strong></span>${l.legal ? '<span class="v15-linkpill">Tutor/a legal</span>' : ""}<button class="v15-linkremove" onclick="v15RemoveLink(${i})" aria-label="Quitar vínculo">×</button></div>`).join("") : emer ? `<div class="v15-linked"><span>Contacto: <strong>${esc(emer)}</strong></span>${p.type === "adolescente" ? '<span class="v15-linkpill">Responsable por verificar</span>' : ""}</div>` : '<p class="v15-quiet">Sin vínculos registrados. Puedes añadir responsable o familiar.</p>'}</div></aside>`;
}
function v15LinkModal() {
  let p = pat();
  if (!p) return;
  modal(
    "Vincular contacto al expediente",
    `<p class="muted">Registrar vínculos no crea automáticamente permisos para consultar el expediente.</p><div class="formgrid">${inputField("Nombre completo", "v15LinkName")}${selectField("Relación", "v15LinkRelation", ["Madre", "Padre", "Tutor/a", "Pareja", "Hijo/a", "Hermano/a", "Otro"])}${inputField("Teléfono", "v15LinkPhone", "tel")}<label class="field"><span>Responsable legal documentado</span><input type="checkbox" id="v15LinkLegal" style="width:auto"></label></div>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="v15SaveLink()">Guardar vínculo</button>`,
  );
}
function v15SaveLink() {
  let p = pat(),
    name = $("#v15LinkName")?.value.trim();
  if (!p || !name) return notify("Registra el nombre del vínculo");
  p.links ||= [];
  p.links.push({
    name,
    relation: $("#v15LinkRelation").value,
    phone: $("#v15LinkPhone").value.trim(),
    legal: $("#v15LinkLegal").checked,
  });
  save();
  closeModal();
  go("expediente");
  notify("Vínculo registrado");
}
function v15RemoveLink(i) {
  let p = pat();
  if (!p?.links?.[i] || !confirm("¿Quitar este vínculo de demostración?"))
    return;
  p.links.splice(i, 1);
  save();
  go("expediente");
}
function v15IdentityEditor() {
  let p = pat();
  let status = p.closed
    ? "Cerrado"
    : p.status === "Suspendido"
      ? "Suspendido"
      : "Activo";
  return `<div class="v15-sumhead"><h2>Editar identificación</h2><button class="btn" onclick="v15Select('resumen')">← Volver al resumen</button></div><p class="muted">La ficha de la izquierda se actualiza al guardar. El folio del expediente se conserva como identificador interno.</p><div class="formgrid">${inputField("Número de expediente (solo lectura)", "pf_id", "text", p.id)}${inputField("Nombre completo", "pf_name", "text", p.name)}${inputField("Fecha de nacimiento", "pf_dob", "date", p.dob)}${inputField("Edad", "pf_age", "text", age(p) + " años")}${inputField("Sexo", "pf_sex", "text", p.sex)}${inputField("Género", "pf_gender", "text", p.gender)}${inputField("Estado civil", "pf_civil", "text", p.civil)}${inputField("Ocupación", "pf_occupation", "text", p.occupation)}${inputField("Diagnóstico / formulación", "pf_diagnosis", "text", p.diagnosis)}${inputField("Correo electrónico", "v15Email", "email", p.email || "")}${inputField("Teléfono personal", "v15Contact", "tel", p.contact || "")}${inputField("Dirección", "v15Address", "text", p.address || "")}${inputField("Contacto de emergencia: nombre", "pf_emergency", "text", p.emergency)}${inputField("Contacto de emergencia: teléfono", "pf_phone", "tel", p.phone)}<div class="field"><label>Estado administrativo</label><select id="pf_status">${(p.closed ? ["Cerrado"] : ["Activo", "Suspendido"]).map((x) => `<option ${status === x ? "selected" : ""}>${x}</option>`).join("")}</select></div></div><div class="btnrow section"><button class="btn primary" onclick="v15SaveIdentity()">Guardar ficha</button><button class="btn" onclick="v15Select('resumen')">Cancelar</button></div><div class="notice section">El alta de psicología no cierra el expediente. Para el cierre administrativo utiliza Evolución → Cierre.</div>`;
}
function v15SaveIdentity() {
  let p = pat();
  if (!p) return;
  let name = $("#pf_name")?.value.trim(),
    dob = $("#pf_dob")?.value;
  if (!name || !/^\d{4}-\d{2}-\d{2}$/.test(dob || ""))
    return notify("Completa nombre y fecha de nacimiento válida");
  p.name = name;
  p.dob = dob;
  p.sex = $("#pf_sex").value;
  p.gender = $("#pf_gender").value;
  p.civil = $("#pf_civil").value;
  p.occupation = $("#pf_occupation").value;
  p.diagnosis = $("#pf_diagnosis").value;
  p.email = $("#v15Email").value.trim();
  p.contact = $("#v15Contact").value.trim();
  p.address = $("#v15Address").value.trim();
  p.emergency = $("#pf_emergency").value;
  p.phone = $("#pf_phone").value;
  p.type = age(p) < 18 ? "adolescente" : "adulto";
  if (!p.closed) p.status = $("#pf_status").value;
  save();
  v15Select("resumen");
  notify("Ficha actualizada");
}
function v15NextAppt(id) {
  let today = new Date().toISOString().slice(0, 10);
  let a = data.appointments
    .filter(
      (x) =>
        x.people?.includes(id) && x.status === "Programada" && x.date >= today,
    )
    .slice()
    .sort((x, y) => (x.date + x.time).localeCompare(y.date + y.time));
  return a[0] || null;
}
function v15LastSession(id) {
  return (
    (data.sessionRecords?.[id] || [])
      .slice()
      .sort((a, b) => (b.date + b.hour).localeCompare(a.date + a.hour))[0] ||
    null
  );
}
function v15Summary() {
  let p = pat(),
    n = v15NextAppt(p.id),
    last = v15LastSession(p.id),
    docs = data.docs?.[p.id] || [],
    consents = docs.filter((d) =>
      String(d.type || "")
        .toLowerCase()
        .includes("consentimiento"),
    ),
    count = (data.sessionRecords?.[p.id] || []).length;
  return `<div class="v15-process"><div class="v15-sumhead"><h2>Procesos</h2><button class="btn" onclick="v15Select('historia')">Ver historia clínica →</button></div><div class="v15-processrow"><div><b>Atención psicológica individual</b><span class="v15-success">${p.closed ? "Cerrado" : "En curso"}</span><div class="muted">${esc(p.name)} · ${esc(p.id)}</div></div><div class="v15-summaryActions"><button class="btn" onclick="v15DetailsChoice('historia','plan')">Plan terapéutico</button><button class="btn" onclick="v15DetailsChoice('evolucion','cierre')">Estado del expediente</button></div></div></div><section class="v15-block"><div class="v15-sumhead"><h3>Resumen del caso</h3><button class="btn soft" onclick="toggleAssistant(true)">✧ Consultar con IA</button></div><p>Los datos se muestran a partir de los registros ficticios del expediente. Cualquier síntesis asistida requiere revisión y validación del profesional.</p><h3 style="margin-top:18px">Motivo de consulta</h3><p>${esc(p.reason || "Motivo de consulta pendiente de documentar.")}</p></section><section class="v15-block"><h3>Seguimiento</h3><div class="v15-sumrow"><span>Próxima cita</span><span>${n ? esc(n.date + " · " + n.time + " h · " + n.format) : "Sin citas programadas"}</span></div><div class="v15-sumrow"><span>Última sesión</span><span>${last ? esc(last.date + " · " + last.hour + " h") : esc(p.last || "Sin registro")}</span></div><div class="v15-sumrow"><span>Sesiones registradas</span><span>${count}</span></div><div class="v15-sumrow"><span>Consentimiento informado</span><span><span class="v15-docTag ${consents.length ? "ok" : ""}">${consents.length ? consents.length + " versión(es)" : "Pendiente"}</span></span></div><div class="v15-sumrow"><span>Seguimiento de riesgo</span><span>${esc(c14Store(p.id).triage?.level || p.risk || "Sin valorar")}</span></div></section><section class="v15-block"><h3>Accesos a este expediente</h3><div class="v15-summaryActions"><button class="btn" onclick="v15Select('sesiones')">Sesiones</button><button class="btn" onclick="v15Select('admision')">Documentos de admisión</button><button class="btn" onclick="v15Select('evaluaciones')">Evaluaciones</button><button class="btn" onclick="v15Select('recursos')">Actividades y kit</button><button class="btn" onclick="v15Select('triage')">Triage</button></div></section>`;
}
function v15Subtabs(group, values, active) {
  return `<div class="v15-subtabs">${values.map(([k, n]) => `<button class="${active === k ? "on" : ""}" onclick="v15DetailsChoice('${group}','${k}')">${n}</button>`).join("")}</div>`;
}
function v15InnerContent(sheet) {
  if (sheet === "resumen") return v15Summary();
  if (sheet === "identificacion") return v15IdentityEditor();
  if (sheet === "sesiones") return patientSessions();
  if (sheet === "admision") {
    detailPane = "admision";
    return expContent();
  }
  if (sheet === "historia") {
    let choices = [
      ["historia", "Historia clínica"],
      ["familiar", "Entrevista familiar"],
      ["genograma", "Genograma"],
      ["inicial", "Evaluación inicial"],
      ["plan", "Plan terapéutico"],
    ];
    if (!choices.some((x) => x[0] === detailPane)) detailPane = v15HistoryPane;
    v15HistoryPane = detailPane;
    return v15Subtabs("historia", choices, detailPane) + expContent();
  }
  if (sheet === "evolucion") {
    let choices = [
      ["notas", "Notas de evolución"],
      ["soap16", "Nota SOAP · Excel"],
      ["alta", "Alta psicológica"],
      ["cierre", "Cierre del expediente"],
    ];
    if (!choices.some((x) => x[0] === detailPane))
      detailPane = v15EvolutionPane;
    v15EvolutionPane = detailPane;
    return v15Subtabs("evolucion", choices, detailPane) + expContent();
  }
  if (sheet === "evaluaciones") {
    detailPane = "evaluaciones";
    return expContent();
  }
  if (sheet === "recursos") {
    let choices = [
      ["actividades", "Actividades terapéuticas"],
      ["kit", "Kit de emergencia DBT"],
    ];
    if (!choices.some((x) => x[0] === detailPane)) detailPane = v15ResourcePane;
    v15ResourcePane = detailPane;
    return (
      v15Subtabs("recursos", choices, detailPane) +
      `<div class="btnrow section" style="margin-bottom:12px"><button class="btn" onclick="activityTarget=pid;go('plantillas')">Abrir editor de plantillas →</button></div>` +
      expContent()
    );
  }
  if (sheet === "archivos") return patientFiles();
  if (sheet === "triage") {
    detailPane = "riesgo";
    return expContent();
  }
  if (sheet === "historial") return v15Timeline();
  if (sheet === "pagos") return patientPaymentDetail();
  return v15Summary();
}
function v15Timeline() {
  let p = pat(),
    items = [
      ...(data.sessionRecords?.[p.id] || []).map((s) => ({
        date: s.date,
        title: "Sesión " + (s.num || ""),
        detail: s.goal || s.mode || "",
      })),
      ...(data.docs?.[p.id] || []).map((d) => ({
        date: d.date || "",
        title: d.type || "Documento",
        detail: d.file || "Versión registrada",
      })),
      ...(c14Store(p.id).discharges || []).map((d) => ({
        date: d.date || "",
        title: "Alta de servicio de psicología",
        detail: "El alta no cierra el expediente",
      })),
    ];
  if (p.closed)
    items.push({
      date: p.closedAt || "",
      title: "Cierre administrativo del expediente",
      detail: p.closureReason || "",
    });
  items.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return `<h2>Historial del expediente</h2><p class="muted">Eventos y referencias documentales por fecha. Las notas, consentimientos y archivos se consultan en su pestaña correspondiente.</p>${items.length ? items.map((x) => `<div class="listitem"><div><b>${esc(x.title)}</b><br><small>${esc(x.date)} · ${esc(x.detail)}</small></div></div>`).join("") : '<div class="empty">Aún no hay eventos documentados.</div>'}`;
}
function expediente() {
  if (isPatient())
    return (
      header(
        "PORTAL PERSONAL",
        "Mi información",
        "Tus documentos, tareas y evaluaciones.",
      ) +
      `<div class="two"><div class="card"><h2>Mis datos</h2><p>Andrea López Martínez · PS-0001</p><button class="btn" onclick="go('documentos')">Ver documentos compartidos</button></div><div class="card"><h2>Actividades</h2>${c14PatientTaskList("PS-0001")}</div></div>`
    );
  let p = pat();
  if (!p || !mine().some((x) => x.id === p.id))
    return `<div class="card">No tienes acceso a este expediente.</div>`;
  let sheet = v15Sheet();
  let active = sheet === "identificacion" ? "resumen" : sheet;
  let page = `<div class="v15-headline"><div><div class="v15-crumb"><button onclick="go('inicio')">Inicio</button> / <button onclick="go('pacientes')">Pacientes</button> / ${esc(p.name)}</div><h1>Ficha del paciente</h1><p>${esc(p.name)} · Expediente ${esc(p.id)}</p></div><div class="v15-head-actions"><button class="btn primary" onclick="v15Schedule()">▦ Agendar cita</button><button class="btn" onclick="v15Select('evolucion');v15DetailsChoice('evolucion','notas')">✎ Nota de sesión</button><button class="btn" onclick="printReport()">↓ Informe PDF</button><button class="btn" onclick="go('pacientes')">← Pacientes</button></div></div>`;
  return (
    page +
    `<div class="v15-workspace">${v15IdCard(p)}<section class="v15-sheetwrap"><nav class="v15-sheets" aria-label="Hojas del expediente">${v15Tabs.map(([key, label]) => `<button class="${active === key ? "active" : ""}" onclick="v15Select('${key}')">${label}</button>`).join("")}</nav><div class="v15-sheetcontent">${v15InnerContent(sheet)}</div></section></div>`
  );
}
/* Profile navigation opens the new two-column record on the Resumen sheet. */
function openP(id, target = "resumen") {
  if (isPatient() || !mine().some((p) => p.id === id)) {
    notify("Sin acceso a este expediente");
    return;
  }
  pid = id;
  let m = {
    ficha: "identificacion",
    documentos: "archivos",
    notas: "evolucion",
    historia: "historia",
    inicial: "historia",
    plan: "historia",
    evaluaciones: "evaluaciones",
    riesgo: "triage",
    actividades: "recursos",
    kit: "recursos",
    alta: "evolucion",
    cierre: "evolucion",
  };
  if (
    [
      "ficha",
      "historia",
      "inicial",
      "plan",
      "notas",
      "evaluaciones",
      "riesgo",
      "actividades",
      "documentos",
      "alta",
      "kit",
      "cierre",
    ].includes(target)
  )
    detailPane = target === "documentos" ? "ficha" : target;
  patientPane = m[target] || target;
  go("expediente");
}

const hc16Schema = {
  adult: [
    {
      id: "Ficha",
      title: "Ficha de identificación",
      fields: [
        {
          id: "Ficha_0",
          label: "No. expediente",
          type: "readonly",
          required: true,
          hint: "Autogenerado por el sistema. No editable.",
          question: "N/A",
          kind: "Identificador único (código numérico o alfanumérico autoasignado de manera consecutiva)",
          options: [],
        },
        {
          id: "Ficha_1",
          label: "Nombre completo",
          type: "readonly",
          required: true,
          hint: "Recomiendo campos internos: nombre(s), primer apellido, segundo apellido.",
          question: "¿Cuál es su nombre completo?",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "Ficha_2",
          label: "Fecha de Nacimiento",
          type: "readonly",
          required: true,
          hint: "Guardar en ISO (YYYY-MM-DD) y mostrar dd/mm/aaaa.",
          question: "¿Cuál es su fecha de nacimiento?",
          kind: "Fecha corta dd/mm/aaaa",
          options: [],
        },
        {
          id: "Ficha_3",
          label: "Edad",
          type: "readonly",
          required: true,
          hint: "Autocalculada desde fecha de nacimiento (no editable).",
          question: "N/A",
          kind: "Número entero",
          options: [],
        },
        {
          id: "Ficha_4",
          label: "Sexo",
          type: "readonly",
          required: true,
          hint: "Catálogo codificado. Mantener separado de identidad de género.",
          question: "¿Con qué sexo fue registrado al nacer?",
          kind: "Catálogo",
          options: [
            "Femenino",
            "Masculino",
            "Intersexual",
            "Prefiero no decir",
          ],
        },
        {
          id: "Ficha_5",
          label: "Identidad de género",
          type: "selectExtra",
          required: false,
          hint: "Catálogo codificado + “Otro: ____”. Permitir “Prefiero no decir”.",
          question: "¿Con qué género se identifica?",
          kind: "Catálogo (con opción “otro” + texto)",
          options: [
            "Mujer",
            "Hombre",
            "No binaria",
            "Otra",
            "Prefiero no decir",
          ],
        },
        {
          id: "Ficha_6",
          label: "Nacionalidad",
          type: "select",
          required: true,
          hint: "Catálogo codificado (país). Búsqueda por texto, guardar clave.",
          question: "¿Cuál es su nacionalidad?",
          kind: "Catálogo",
          options: ["Mexicana", "Otra", "Prefiero no decir"],
        },
        {
          id: "Ficha_7",
          label: "Entidad",
          type: "short",
          required: false,
          hint: "Catálogo codificado; ideal cascada con municipio/localidad.",
          question: "¿En qué estado vive?",
          kind: "Catálogo",
          options: [],
        },
        {
          id: "Ficha_8",
          label: "Municipio",
          type: "short",
          required: false,
          hint: "Depende de Entidad; guardar clave.",
          question: "¿En qué municipio vive?",
          kind: "Catálogo dependiente",
          options: [],
        },
        {
          id: "Ficha_9",
          label: "Localidad",
          type: "short",
          required: false,
          hint: "Depende de Municipio; permitir “Otro (texto)” si no está en catálogo.",
          question: "¿En qué localidad/ciudad vive?",
          kind: "Catálogo dependiente",
          options: [],
        },
        {
          id: "Ficha_10",
          label: "Domicilio",
          type: "long",
          required: false,
          hint: "Ideal compuesto (calle/número/colonia/CP); en MVP puede ser multilinea + CP separado opcional.",
          question: "¿Cuál es su domicilio?",
          kind: "Texto (multilínea) o compuesto",
          options: [],
        },
        {
          id: "Ficha_11",
          label: "Correo Electrónico",
          type: "readonly",
          required: true,
          hint: "Validación de formato; normalizar a minúsculas; opcional confirmación doble.",
          question: "¿Cuál es su correo electrónico?",
          kind: "Texto corto (validación email)",
          options: [],
        },
        {
          id: "Ficha_12",
          label: "Teléfono móvil",
          type: "readonly",
          required: true,
          hint: "Guardar en formato estandarizable (E.164 recomendado, +52…). Validar longitud.",
          question: "¿Cuál es su número de teléfono celular?",
          kind: "Texto corto (teléfono)",
          options: [],
        },
      ],
    },
    {
      id: "AHF",
      title: "Antecedentes heredofamiliares",
      fields: [
        {
          id: "AHF_0",
          label: "Enfermedad",
          type: "short",
          required: true,
          hint: "Registro repetible: crear una entrada por cada enfermedad familiar. Catálogo codificado (ideal: CIE-10 interno). Permitir “Otro” con texto libre.",
          question:
            "¿Alguno de sus familiares cercanos (padres, hermanos o abuelos) padece alguna enfermeadad como como diabetes, hipertensión, cáncer o psiquiátrica)? ¿Cuál(es)?",
          kind: "Catálogo (con opción “otro” + texto)",
          options: [
            "Diabetes",
            "Hipertensión",
            "Cáncer",
            "Condición psiquiátrica",
            "Otra",
          ],
        },
        {
          id: "AHF_1",
          label: "Parentesco",
          type: "select",
          required: true,
          hint: "Catálogo mínimo: padre, madre, hermano/a, hijo/a, abuelo/a, tío/a, primo/a, otro.",
          question: "¿Qué familiar la presentó?",
          kind: "Catálogo",
          options: [
            "Padre",
            "Madre",
            "Hermano/a",
            "Hijo/a",
            "Abuelo/a",
            "Tío/a",
            "Primo/a",
            "Otro",
          ],
        },
        {
          id: "AHF_2",
          label: "Edad al diagnóstico",
          type: "number",
          required: false,
          hint: "Validación: 0–120. Permitir “Desconoce/No recuerda” (null).",
          question: "¿Recuerda a qué edad se la diagnosticaron?",
          kind: "Número entero",
          options: [],
        },
        {
          id: "AHF_3",
          label: "Estado vital del familiar",
          type: "select",
          required: false,
          hint: "Catálogo: vive, falleció, desconoce. Si falleció, permitir subcampo opcional “edad al fallecer” o “causa de muerte” (solo si lo quieres en MVP).",
          question: "¿Ese familiar vive actualmente o falleció?",
          kind: "Catálogo",
          options: ["Vive", "Falleció", "Desconoce"],
        },
      ],
    },
    {
      id: "APNP",
      title: "Antecedentes personales no patológicos",
      fields: [
        {
          id: "APNP_0",
          label: "Estado civil",
          type: "select",
          required: false,
          hint: "Catálogo: soltero/a, casado/a, unión libre, separado/a, divorciado/a, viudo/a, otra, prefiero no decir.",
          question: "¿Cuál es su estado civil?",
          kind: "Catálogo",
          options: [
            "Soltero/a",
            "Casado/a",
            "Unión libre",
            "Separado/a",
            "Divorciado/a",
            "Viudo/a",
            "Otra",
            "Prefiero no decir",
          ],
        },
        {
          id: "APNP_1",
          label: "Nivel educativo",
          type: "select",
          required: false,
          hint: "Catálogo: sin escolaridad, primaria, secundaria, bachillerato, técnico, licenciatura, posgrado, otro.",
          question: "¿Cuál es el nivel más alto de estudios que completó?",
          kind: "Catálogo",
          options: [
            "Sin escolaridad",
            "Primaria",
            "Secundaria",
            "Bachillerato",
            "Técnico",
            "Licenciatura",
            "Posgrado",
            "Otro",
          ],
        },
        {
          id: "APNP_2",
          label: "Ocupación",
          type: "selectExtra",
          required: false,
          hint: "Catálogo: empleado/a, autoempleo, estudiante, hogar, pensionado/a, desempleado/a, otro + texto.",
          question: "¿A qué se dedica actualmente?",
          kind: "Catálogo + texto corto",
          options: [
            "Empleado/a",
            "Autoempleo",
            "Estudiante",
            "Hogar",
            "Pensionado/a",
            "Desempleado/a",
            "Otro",
          ],
        },
        {
          id: "APNP_3",
          label: "Situación laboral",
          type: "select",
          required: false,
          hint: "Catálogo: estable, inestable, desempleado/a, incapacidad, licencia, estudiante, otro.",
          question: "¿Cómo describiría su situación laboral actualmente?",
          kind: "Catálogo",
          options: [
            "Estable",
            "Inestable",
            "Desempleado/a",
            "Incapacidad",
            "Licencia",
            "Estudiante",
            "Otro",
          ],
        },
        {
          id: "APNP_4",
          label: "Religión / espiritualidad",
          type: "select",
          required: false,
          hint: "Mantener opción “Ninguna” y “Prefiero no decir”. Evitar capturar detalles sensibles si no aportan.",
          question:
            "¿Tiene alguna religión o práctica espiritual que sea importante para usted?",
          kind: "Catálogo + opción “prefiero no decir”",
          options: ["Ninguna", "Prefiero no decir", "Otra"],
        },
        {
          id: "APNP_5",
          label: "Convivencia",
          type: "multi",
          required: false,
          hint: "Catálogo: solo/a, pareja, padres, hijos, familia extendida, roomies, otro.",
          question: "¿Con quién vive actualmente?",
          kind: "Multiselección (catálogo)",
          options: [
            "Solo/a",
            "Pareja",
            "Padres",
            "Hijos",
            "Familia extendida",
            "Compañeros de vivienda",
            "Otro",
          ],
        },
        {
          id: "APNP_6",
          label: "Red de apoyo",
          type: "multi",
          required: false,
          hint: "Multiselección: pareja, familia, amigos, comunidad, trabajo/escuela, ninguno, otro + texto. Alto valor clínico.",
          question: "¿Con quién cuenta como apoyo si lo necesita?",
          kind: "Multiselección + texto",
          options: [
            "Pareja",
            "Familia",
            "Amigos",
            "Comunidad",
            "Trabajo/escuela",
            "Ninguno",
            "Otro",
          ],
        },
        {
          id: "APNP_7",
          label: "Calidad de alimentación",
          type: "select",
          required: false,
          hint: "Catálogo: buena, regular, mala. (Si quieres extra: “apetito aumentado/disminuido” se puede mover a EEM/ROS).",
          question: "¿Cómo describiría su alimentación en general?",
          kind: "Catálogo",
          options: ["Buena", "Regular", "Mala"],
        },
        {
          id: "APNP_8",
          label: "Actividad física",
          type: "select",
          required: false,
          hint: "Catálogo: nunca, 1–2 días/sem, 3–4 días/sem, ≥5 días/sem. (Sin intensidad para no hacerlo pesado).",
          question: "¿Con qué frecuencia realiza actividad física?",
          kind: "Catálogo",
          options: [
            "Nunca",
            "1–2 días/sem",
            "3–4 días/sem",
            "5 o más días/sem",
          ],
        },
        {
          id: "APNP_9",
          label: "Calidad de sueño",
          type: "number",
          required: false,
          hint: "Campo 1: calidad (buena/regular/mala). Campo 2: horas promedio (número decimal).",
          question:
            "¿Cómo ha sido su sueño en general? ¿Cuántas horas duerme en promedio?",
          kind: "Catálogo + número",
          options: ["Buena", "Regular", "Mala"],
        },
        {
          id: "APNP_10",
          label: "Consumo de alcohol (tamiz breve)",
          type: "select",
          required: false,
          hint: "Catálogo estatus: nunca, exconsumo, actual. Frecuencia: esporádico, mensual, semanal, 2–3/sem, diario. Sin “cantidades” en MVP.",
          question: "¿Consume alcohol? Si sí, ¿con qué frecuencia?",
          kind: "Catálogo + frecuencia",
          options: ["Nunca", "Exconsumo", "Actual"],
        },
        {
          id: "APNP_11",
          label: "Consumo de tabaco (tamiz breve)",
          type: "select",
          required: false,
          hint: "Estatus: nunca, exfumador, actual. Frecuencia: ocasional, diario. (Paquetes-año se puede dejar para patológicos si lo requieren).",
          question: "¿Fuma o consume nicotina actualmente?",
          kind: "Catálogo + frecuencia",
          options: ["Nunca", "Exfumador/a", "Actual"],
        },
        {
          id: "APNP_12",
          label: "Consumo de drogas (tamiz breve)",
          type: "selectExtra",
          required: false,
          hint: "Catálogo: nunca, alguna vez, en el último año, actual. Texto corto opcional: “¿cuál?”. Sin desglose de vía/dosis en MVP.",
          question: "¿Ha consumido alguna droga o sustancia psicoactiva?",
          kind: "Catálogo + texto corto",
          options: ["Nunca", "Alguna vez", "En el último año", "Actual"],
        },
        {
          id: "APNP_13",
          label: "Seguridad/violencia (tamiz)",
          type: "selectExtra",
          required: false,
          hint: "Mantenerlo breve: Sí/No/Prefiero no decir + comentario opcional. Muy relevante en salud mental.",
          question:
            "¿Actualmente se siente seguro/a en su casa y entorno? ¿Ha vivido alguna situación de violencia reciente?",
          kind: "Catálogo (sí/no) + texto",
          options: ["Sí", "No", "Prefiero no decir"],
        },
      ],
    },
    {
      id: "APP",
      title: "Antecedentes personales patológicos",
      fields: [
        {
          id: "APP_0",
          label: "Alergias (tiene)",
          type: "select",
          required: false,
          hint: "Si “Sí”, habilitar subcampos mínimos.",
          question: "¿Es alérgico/a a algo?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APP_1",
          label: "Alergia – ¿a qué?",
          type: "short",
          required: false,
          hint: "Un campo de texto por entrada.",
          question: "¿A qué es alérgico/a?",
          kind: "Texto corto (con sugerencias/autocomplete)",
          options: [],
          condition: { parent: "APP_0", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_2",
          label: "Alergia – reacción",
          type: "short",
          required: false,
          hint: "Un campo de texto por entrada.",
          question: "¿Qué reacción le da?",
          kind: "Texto corto",
          options: [],
          condition: { parent: "APP_0", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_3",
          label: "Diagnósticos previos",
          type: "select",
          required: false,
          hint: "Si “Sí”, habilitar lista de entrada de diagnóstico",
          question: "¿Le han diagnosticado alguna enfermedad previamente?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APP_4",
          label: "Diagnóstico (lista)",
          type: "repeat",
          required: false,
          hint: "Una entrada por cada diagnóstico.",
          question: "¿Cuál(es) diagnóstico(s)?",
          kind: "Objeto repetible (lista)",
          options: [],
          condition: { parent: "APP_3", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_5",
          label: "Diagnóstico – inicio (año o edad)",
          type: "number",
          required: false,
          hint: "Un solo campo con selector “Año/Edad” para simplificar.",
          question: "¿En qué año fue o qué edad tenía?",
          kind: "Año (YYYY) o número entero (edad)",
          options: [],
          condition: { parent: "APP_3", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_6",
          label: "Diagnóstico – tratamiento actual",
          type: "long",
          required: false,
          hint: "Sí/No y un texto corto si desea especificar.",
          question: "¿Actualmente recibe tratamiento? ¿Cuál?",
          kind: "Catálogo (Sí/No) + texto corto opcional",
          options: [],
          condition: { parent: "APP_3", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_7",
          label: "Diagnóstico – estado actual",
          type: "select",
          required: false,
          hint: "Catálogo simple: controlado, en tratamiento, no controlado, resuelto, no sabe.",
          question: "¿Cómo está actualmente?",
          kind: "Catálogo",
          options: [
            "Controlado",
            "En tratamiento",
            "No controlado",
            "Resuelto",
            "No sabe",
          ],
          condition: { parent: "APP_3", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_8",
          label: "Cirugías previas",
          type: "select",
          required: false,
          hint: "Si “Sí”, habilitar lista breve.",
          question: "¿Le han realizado alguna cirugía?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APP_9",
          label: "Cirugía – procedimiento",
          type: "short",
          required: false,
          hint: "MVP: texto libre.",
          question: "¿Qué cirugía fue?",
          kind: "Catálogo del CIE-9",
          options: [],
          condition: { parent: "APP_8", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_10",
          label: "Cirugía – año",
          type: "number",
          required: false,
          hint: "Un solo campo con selector “Año/Edad” para simplificar.",
          question: "¿Recuerda en qué año fue o qué edad tenía?",
          kind: "Año (YYYY) o número entero (edad)",
          options: [],
          condition: { parent: "APP_8", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_11",
          label: "Traumatismos previos",
          type: "select",
          required: false,
          hint: "Si “Sí”, habilitar lista.",
          question:
            "¿Ha tenido fracturas, esguinces o golpes importantes (incluyendo en la cabeza)?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APP_12",
          label: "Trauma – tipo",
          type: "short",
          required: false,
          hint: "",
          question: "¿Podría especificar que fue y en que parte del cuerpo?",
          kind: "Texto corto",
          options: [],
          condition: { parent: "APP_11", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_13",
          label: "Trauma – edad",
          type: "number",
          required: false,
          hint: "Un solo campo con selector “Año/Edad” para simplificar.",
          question: "¿Recuerda en qué años fue o qué edad tenía?",
          kind: "Año (YYYY) o número entero (edad)",
          options: [],
          condition: { parent: "APP_11", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_14",
          label: "Transfusiones (tiene)",
          type: "select",
          required: false,
          hint: "Si “Sí”, pedir año y si hubo reacción (sin más).",
          question: "¿Alguna vez le han transfundido sangre?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APP_15",
          label: "Transfusión – año",
          type: "number",
          required: false,
          hint: "Campo único.",
          question: "¿En qué año fue aproximadamente?",
          kind: "Año (YYYY)",
          options: [],
          condition: { parent: "APP_14", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_16",
          label: "Transfusión – reacción",
          type: "select",
          required: false,
          hint: "Sin detalle en MVP (puede agregarse texto luego).",
          question: "¿Tuvo alguna reacción?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No", "No sabe"],
          condition: { parent: "APP_14", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_17",
          label: "Medicación actual (tiene)",
          type: "select",
          required: false,
          hint: "Si “Sí”, habilitar lista mínima.",
          question: "¿Toma actualmente algún medicamento o suplemento?",
          kind: "Catálogo (Sí/No)",
          options: ["Sí", "No"],
        },
        {
          id: "APP_18",
          label: "Medicamento (lista)",
          type: "repeat",
          required: false,
          hint: "Una entrada por medicamento.",
          question: "¿Cuál(es)?",
          kind: "Objeto repetible (lista)",
          options: [],
          condition: { parent: "APP_17", equals: "Sí", startsWith: false },
        },
        {
          id: "APP_19",
          label: "Medicamento – frecuencia",
          type: "select",
          required: false,
          hint: "Diario / a veces / solo si lo necesita / otro.",
          question: "¿Cada cuándo?",
          kind: "Catálogo",
          options: ["Diario", "A veces", "Solo si lo necesita", "Otro"],
          condition: { parent: "APP_17", equals: "Sí", startsWith: false },
        },
      ],
    },
    {
      id: "APsic",
      title: "Antecedentes psicológicos",
      fields: [
        {
          id: "APsic_0",
          label: "Motivo de consulta en salud mental (histórico)",
          type: "short",
          required: false,
          hint: "Texto breve (1–2 frases). Útil para contexto longitudinal.",
          question:
            "¿Cuál fue el principal motivo por el que buscó atención en salud mental?",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "APsic_1",
          label: "Inicio de síntomas (aprox.)",
          type: "number",
          required: false,
          hint: "Un solo campo con selector “Año/Edad” para simplificar (igual que en APP).",
          question: "¿Desde cuando se ha sentido de esta forma?",
          kind: "Año (YYYY) o número entero (edad)",
          options: [],
        },
        {
          id: "APsic_2",
          label: "Diagnósticos previos de salud mental (tiene)",
          type: "select",
          required: false,
          hint: "Si “Sí”, habilitar lista “una entrada por diagnóstico”.",
          question: "¿Alguna vez le han dado un diagnóstico en salud mental?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APsic_3",
          label: "Diagnóstico de salud mental (lista)",
          type: "repeat",
          required: false,
          hint: "Una entrada por diagnóstico.",
          question: "¿Cuál(es) diagnóstico(s)?",
          kind: "Objeto repetible (lista)",
          options: [],
          condition: { parent: "APsic_2", equals: "Sí", startsWith: false },
        },
        {
          id: "APsic_4",
          label: "Diagnóstico – en tratamiento actual",
          type: "select",
          required: false,
          hint: "Para no duplicar con “medicación actual”, dejarlo en Sí/No.",
          question: "¿Actualmente está en tratamiento por esto?",
          kind: "Catálogo (Sí/No)",
          options: ["Sí", "No"],
          condition: { parent: "APsic_2", equals: "Sí", startsWith: false },
        },
        {
          id: "APsic_5",
          label: "Hospitalizaciones psiquiátricas (tiene)",
          type: "select",
          required: false,
          hint: "Si “Sí”, pedir cuántas y año del más reciente (simple).",
          question:
            "¿Alguna vez ha sido hospitalizado/a por un motivo de salud mental?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APsic_6",
          label: "Hospitalización – número aproximado",
          type: "number",
          required: false,
          hint: "MVP: un número. Versión avanzada: lista por evento.",
          question: "¿Cuántas veces aproximadamente?",
          kind: "Número entero",
          options: [],
          condition: { parent: "APsic_5", equals: "Sí", startsWith: false },
        },
        {
          id: "APsic_7",
          label: "Hospitalización – año del último evento",
          type: "number",
          required: false,
          hint: "Mantener simple.",
          question: "¿En qué año fue la última?",
          kind: "Año (YYYY)",
          options: [],
          condition: { parent: "APsic_5", equals: "Sí", startsWith: false },
        },
        {
          id: "APsic_8",
          label: "Urgencias por salud mental (tiene)",
          type: "select",
          required: false,
          hint: "Si “Sí”, capturar año del último evento y motivo general.",
          question: "¿Ha acudido a urgencias por un motivo de salud mental?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: ["Sí", "No"],
        },
        {
          id: "APsic_9",
          label: "Urgencias – año del último evento",
          type: "number",
          required: false,
          hint: "MVP.",
          question: "¿En qué año fue la última vez?",
          kind: "Año (YYYY)",
          options: [],
          condition: { parent: "APsic_8", equals: "Sí", startsWith: false },
        },
        {
          id: "APsic_10",
          label: "Urgencias – motivo (general)",
          type: "selectExtra",
          required: false,
          hint: "Catálogo: crisis de ansiedad, intento/ideación suicida, agitación, consumo/intoxicación, insomnio severo, otro + texto.",
          question: "¿Por qué motivo fue?",
          kind: "Catálogo + texto corto",
          options: [
            "Crisis de ansiedad",
            "Intento/ideación suicida",
            "Agitación",
            "Consumo/intoxicación",
            "Insomnio severo",
            "Otro",
          ],
          condition: { parent: "APsic_8", equals: "Sí", startsWith: false },
        },
        {
          id: "APsic_11",
          label: "Historia de suicidio/autolesión (tamiz)",
          type: "select",
          required: true,
          hint: "Recomiendo hacerlo obligatorio por seguridad clínica. Si marca cualquier “Sí”, abrir subcampos mínimos.",
          question:
            "¿Ha tenido ideas de hacerse daño o suicidarse, o ha intentado hacerlo alguna vez?",
          kind: "Catálogo (No / Sí ideación / Sí intento / Sí autolesión / Prefiero no decir)",
          options: [
            "No",
            "Sí: ideación",
            "Sí: intento",
            "Sí: autolesión",
            "Prefiero no decir",
          ],
        },
        {
          id: "APsic_12",
          label: "Suicidio/autolesión – último evento (año/edad)",
          type: "number",
          required: false,
          hint: "MVP: solo “último evento”.",
          question: "¿Cuándo fue la última vez (año o edad)?",
          kind: "Año o edad",
          options: [],
          condition: { parent: "APsic_11", equals: "Sí", startsWith: true },
        },
        {
          id: "APsic_13",
          label: "Suicidio/autolesión – atención médica",
          type: "short",
          required: false,
          hint: "Permite alertas y derivación.",
          question: "¿Requirió atención médica o urgencias?",
          kind: "Catálogo (Sí/No/No sabe)",
          options: [],
          condition: { parent: "APsic_11", equals: "Sí", startsWith: true },
        },
        {
          id: "APsic_14",
          label: "Suicidio/autolesión – comentario breve",
          type: "short",
          required: false,
          hint: "Limitar a pocas palabras; en psicología conviene capturar en nota clínica más que aquí.",
          question: "Si desea, ¿puede dar un detalle breve?",
          kind: "Texto corto",
          options: [],
          condition: { parent: "APsic_11", equals: "Sí", startsWith: true },
        },
      ],
    },
  ],
  teen: [
    {
      id: "T0",
      title: "Datos iniciales",
      fields: [
        {
          id: "T0_0",
          label: "Número de expediente",
          type: "readonly",
          required: true,
          hint: "Identificador único / alfanumérico.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T0_1",
          label: "Fecha de consulta",
          type: "date",
          required: true,
          hint: "Selector de fecha (dd/mm/aaaa).",
          kind: "Fecha",
          options: [],
        },
      ],
    },
    {
      id: "T1",
      title: "I. Datos de filiación",
      fields: [
        {
          id: "T1_0",
          label: "Nombre completo",
          type: "readonly",
          required: true,
          hint: "—",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_1",
          label: "Edad",
          type: "readonly",
          required: false,
          hint: "Años cumplidos.",
          kind: "Número entero",
          options: [],
        },
        {
          id: "T1_2",
          label: "Fecha de nacimiento",
          type: "readonly",
          required: true,
          hint: "dd/mm/aaaa.",
          kind: "Fecha",
          options: [],
        },
        {
          id: "T1_3",
          label: "Lugar de nacimiento",
          type: "short",
          required: false,
          hint: "Ciudad, estado y país.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_4",
          label: "Institución",
          type: "short",
          required: false,
          hint: "Si aplica.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_5",
          label: "Ocupación",
          type: "short",
          required: false,
          hint: "—",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_6",
          label: "Estado civil",
          type: "select",
          required: false,
          hint: "Soltero/a; casado/a; unión libre; separado/a; divorciado/a; viudo/a; otro; prefiero no responder.",
          kind: "Menú desplegable",
          options: [
            "Soltero/a",
            "casado/a",
            "unión libre",
            "separado/a",
            "divorciado/a",
            "viudo/a",
            "otro",
            "prefiero no responder",
          ],
        },
        {
          id: "T1_7",
          label: "Religión",
          type: "short",
          required: false,
          hint: "Opcional; permitir «Ninguna» y «Prefiero no responder».",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_8",
          label: "Nombre del cónyuge o pareja",
          type: "short",
          required: false,
          hint: "Condicional: si corresponde.",
          kind: "Texto corto",
          options: [],
          condition: { parent: "T1_6", in: ["Casado/a", "Unión libre"] },
        },
        {
          id: "T1_9",
          label: "Teléfono del cónyuge o pareja",
          type: "short",
          required: false,
          hint: "Condicional; teléfono en formato libre.",
          kind: "Texto corto",
          options: [],
          condition: { parent: "T1_6", in: ["Casado/a", "Unión libre"] },
        },
        {
          id: "T1_10",
          label: "¿Tiene hijos?",
          type: "select",
          required: false,
          hint: "Sí; No; Prefiero no responder.",
          kind: "Opción única",
          options: ["Sí", "No", "Prefiero no responder"],
        },
        {
          id: "T1_11",
          label: "Número de hijos",
          type: "number",
          required: false,
          hint: "Condicional: si tiene hijos.",
          kind: "Número entero",
          options: [],
          condition: { parent: "T1_10", in: ["Sí"] },
        },
        {
          id: "T1_12",
          label: "Edad de cada hijo",
          type: "repeat",
          required: false,
          hint: "Agregar una entrada por hijo.",
          kind: "Texto corto repetible",
          options: [],
          condition: { parent: "T1_10", in: ["Sí"] },
        },
        {
          id: "T1_13",
          label: "Centro de estudios y/o trabajo",
          type: "short",
          required: false,
          hint: "—",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_14",
          label: "Grado",
          type: "short",
          required: false,
          hint: "Si corresponde a estudios.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_15",
          label: "Ciclo",
          type: "short",
          required: false,
          hint: "Si corresponde a estudios.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_16",
          label: "Lugar de residencia",
          type: "short",
          required: false,
          hint: "Localidad, municipio/estado.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_17",
          label: "Tiempo de residencia",
          type: "short",
          required: false,
          hint: "Años/meses.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_18",
          label: "Procedencia",
          type: "short",
          required: false,
          hint: "—",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_19",
          label: "Teléfono(s)",
          type: "repeat",
          required: false,
          hint: "Agregar teléfonos de contacto.",
          kind: "Texto corto repetible",
          options: [],
        },
        {
          id: "T1_20",
          label: "Correo electrónico",
          type: "short",
          required: false,
          hint: "Validación de formato e-mail.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T1_21",
          label: "Informante",
          type: "select",
          required: false,
          hint: "Paciente; madre; padre; tutor/a; pareja; otro familiar; otra persona.",
          kind: "Menú desplegable",
          options: [
            "Paciente",
            "madre",
            "padre",
            "tutor/a",
            "pareja",
            "otro familiar",
            "otra persona",
          ],
        },
        {
          id: "T1_22",
          label: "Nombre del informante",
          type: "short",
          required: false,
          hint: "Si es distinto del paciente.",
          kind: "Texto corto",
          options: [],
          condition: {
            parent: "T1_21",
            in: [
              "Madre",
              "Padre",
              "Tutor/a",
              "Pareja",
              "Otro familiar",
              "Otra persona",
            ],
          },
        },
      ],
    },
    {
      id: "T2",
      title: "II. Problema actual",
      fields: [
        {
          id: "T2_0",
          label: "1. Motivo de consulta / problema actual",
          type: "long",
          required: false,
          hint: "Descripción literal y contexto del motivo de consulta.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_1",
          label: "2. Inicio de los síntomas",
          type: "long",
          required: false,
          hint: "Cuándo y cómo iniciaron.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_2",
          label: "2. Curso de los síntomas",
          type: "long",
          required: false,
          hint: "Evolución, frecuencia, duración e intensidad.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_3",
          label: "3. ¿Ha tenido episodios previos?",
          type: "select",
          required: false,
          hint: "Sí; No; No recuerda.",
          kind: "Opción única",
          options: ["Sí", "No", "No recuerda"],
        },
        {
          id: "T2_4",
          label: "3. Tiempo de evolución del problema",
          type: "short",
          required: false,
          hint: "Tiempo aproximado.",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T2_5",
          label: "3. ¿Qué sucedió el día del episodio?",
          type: "long",
          required: false,
          hint: "Condicional: si refiere un episodio.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T2_3", in: ["Sí"] },
        },
        {
          id: "T2_6",
          label: "3. ¿Qué sucedió el día anterior?",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T2_3", in: ["Sí"] },
        },
        {
          id: "T2_7",
          label: "3. ¿Qué hizo durante el episodio?",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T2_3", in: ["Sí"] },
        },
        {
          id: "T2_8",
          label: "3. ¿Cómo se calmó o qué hizo para afrontarlo?",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T2_3", in: ["Sí"] },
        },
        {
          id: "T2_9",
          label: "3. ¿Habló con alguien del problema?",
          type: "select",
          required: false,
          hint: "Sí; No; Prefiero no responder.",
          kind: "Opción única",
          options: ["Sí", "No", "Prefiero no responder"],
        },
        {
          id: "T2_10",
          label: "3. ¿Con quién habló?",
          type: "short",
          required: false,
          hint: "Condicional: si respondió Sí.",
          kind: "Texto corto",
          options: [],
          condition: { parent: "T2_9", in: ["Sí"] },
        },
        {
          id: "T2_11",
          label: "4. Factores desencadenantes",
          type: "long",
          required: false,
          hint: "Acontecimientos y circunstancias.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_12",
          label: "4. Factores agravantes",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_13",
          label: "4. Repercusión en la vida social",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_14",
          label: "4. Riesgo para sí mismo/a",
          type: "long",
          required: false,
          hint: "Sí; No; No determinado. Si Sí o no determinado, documentar evaluación clínica.",
          kind: "Opción única + texto largo",
          options: [],
        },
        {
          id: "T2_15",
          label: "4. Riesgo para otras personas",
          type: "long",
          required: false,
          hint: "Sí; No; No determinado. Si Sí o no determinado, documentar evaluación clínica.",
          kind: "Opción única + texto largo",
          options: [],
        },
        {
          id: "T2_16",
          label: "5. ¿Ha recibido tratamientos previos?",
          type: "select",
          required: false,
          hint: "Sí; No; No recuerda.",
          kind: "Opción única",
          options: ["Sí", "No", "No recuerda"],
        },
        {
          id: "T2_17",
          label: "5. Fecha de tratamiento previo",
          type: "repeat",
          required: false,
          hint: "Una entrada por tratamiento; si desconoce fecha, texto aproximado.",
          kind: "Fecha repetible",
          options: [],
          condition: { parent: "T2_16", in: ["Sí"] },
        },
        {
          id: "T2_18",
          label: "5. Tipo de tratamiento",
          type: "repeat",
          required: false,
          hint: "Psicológico; psiquiátrico; farmacológico; médico no psiquiátrico; otro.",
          kind: "Menú desplegable repetible",
          options: [],
          condition: { parent: "T2_16", in: ["Sí"] },
        },
        {
          id: "T2_19",
          label: "5. Descripción del tratamiento",
          type: "repeat",
          required: false,
          hint: "Opcional; asociar a cada tratamiento.",
          kind: "Texto largo repetible",
          options: [],
          condition: { parent: "T2_16", in: ["Sí"] },
        },
        {
          id: "T2_20",
          label: "6. ¿Cómo describe su personalidad?",
          type: "long",
          required: false,
          hint: "Respuesta abierta.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T2_21",
          label: "6. ¿Cuál es su filosofía de vida?",
          type: "long",
          required: false,
          hint: "Respuesta abierta.",
          kind: "Texto largo",
          options: [],
        },
      ],
    },
    {
      id: "T3",
      title: "III. Gestación, parto y desarrollo",
      fields: [
        {
          id: "T3_0",
          label: "1. Edad de la madre al nacimiento",
          type: "number",
          required: false,
          hint: "En años; admitir «No sabe».",
          kind: "Número entero",
          options: [],
        },
        {
          id: "T3_1",
          label: "1. Antecedentes de gestación / prenatalidad",
          type: "long",
          required: false,
          hint: "Si se dispone de la información.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_2",
          label: "2. Tipo de parto",
          type: "select",
          required: false,
          hint: "Eutócico; distócico; desconocido.",
          kind: "Opción única",
          options: ["Eutócico", "distócico", "desconocido"],
        },
        {
          id: "T3_3",
          label: "2. Motivo del parto distócico",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T3_2", in: ["Distócico"] },
        },
        {
          id: "T3_4",
          label: "2. Atención del parto",
          type: "select",
          required: false,
          hint: "Hospitalaria; extrahospitalaria; no sabe; otra.",
          kind: "Menú desplegable",
          options: ["Hospitalaria", "extrahospitalaria", "no sabe", "otra"],
        },
        {
          id: "T3_5",
          label: "2. ¿Fue a término?",
          type: "select",
          required: false,
          hint: "Sí; No; No sabe.",
          kind: "Opción única",
          options: ["Sí", "No", "No sabe"],
        },
        {
          id: "T3_6",
          label: "2. Presentación y procedimientos de parto",
          type: "multi",
          required: false,
          hint: "Cefálica; pélvica; fórceps; cesárea; otro; no sabe. Permitir combinación pertinente.",
          kind: "Casillas de verificación",
          options: [
            "Cefálica",
            "pélvica",
            "fórceps",
            "cesárea",
            "otro",
            "no sabe",
          ],
        },
        {
          id: "T3_7",
          label: "2. Antecedentes posnatales",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_8",
          label: "2. Estatura al nacer",
          type: "number",
          required: false,
          hint: "cm; permitir dato desconocido.",
          kind: "Número decimal",
          options: [],
        },
        {
          id: "T3_9",
          label: "2. Peso al nacer",
          type: "number",
          required: false,
          hint: "g o kg; indicar unidad.",
          kind: "Número decimal",
          options: [],
        },
        {
          id: "T3_10",
          label: "2. Perímetro cefálico al nacer",
          type: "number",
          required: false,
          hint: "cm; permitir dato desconocido.",
          kind: "Número decimal",
          options: [],
        },
        {
          id: "T3_11",
          label: "2. Reflejos neonatales / observaciones",
          type: "long",
          required: false,
          hint: "Si hay información disponible.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_12",
          label: "3. Desarrollo del lenguaje",
          type: "long",
          required: false,
          hint: "Hitos y dificultades referidas.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_13",
          label: "3. Desarrollo del juego",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_14",
          label: "3. Edad a la que caminó",
          type: "number",
          required: false,
          hint: "Meses; permitir «No sabe».",
          kind: "Número decimal",
          options: [],
        },
        {
          id: "T3_15",
          label: "3. ¿Presentó encopresis?",
          type: "select",
          required: false,
          hint: "Sí; No; No sabe.",
          kind: "Opción única",
          options: ["Sí", "No", "No sabe"],
        },
        {
          id: "T3_16",
          label: "3. Edad de control intestinal",
          type: "number",
          required: false,
          hint: "Años/meses; indicar unidad.",
          kind: "Número decimal",
          options: [],
        },
        {
          id: "T3_17",
          label: "3. ¿Presentó enuresis?",
          type: "select",
          required: false,
          hint: "Sí; No; No sabe.",
          kind: "Opción única",
          options: ["Sí", "No", "No sabe"],
        },
        {
          id: "T3_18",
          label: "3. Edad de control urinario",
          type: "number",
          required: false,
          hint: "Años/meses; indicar unidad.",
          kind: "Número decimal",
          options: [],
        },
        {
          id: "T3_19",
          label: "3. Motricidad fina",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_20",
          label: "3. Motricidad gruesa",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T3_21",
          label: "3. Movimiento de pinza",
          type: "short",
          required: false,
          hint: "Edad/hito u observaciones.",
          kind: "Texto corto",
          options: [],
        },
      ],
    },
    {
      id: "T4",
      title: "III. Infancia y escolaridad",
      fields: [
        {
          id: "T4_0",
          label: "4. Alimentación durante la infancia",
          type: "long",
          required: false,
          hint: "Tipo, dificultades o datos relevantes.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_1",
          label: "5. Personas a cargo de la crianza",
          type: "multi",
          required: false,
          hint: "Madre; padre; ambos; abuelos/as; otros familiares; tutor/a; otras personas.",
          kind: "Casillas de verificación",
          options: [
            "Madre",
            "padre",
            "ambos",
            "abuelos/as",
            "otros familiares",
            "tutor/a",
            "otras personas",
          ],
        },
        {
          id: "T4_2",
          label: "5. Crianza por parte de la madre",
          type: "long",
          required: false,
          hint: "Si aplica.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_3",
          label: "5. Crianza por parte del padre",
          type: "long",
          required: false,
          hint: "Si aplica.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_4",
          label: "5. Crianza por parte de otros parientes",
          type: "long",
          required: false,
          hint: "Identificar vínculo y participación.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_5",
          label: "6. Modalidad de juego infantil",
          type: "select",
          required: false,
          hint: "Principalmente solo/a; con otros niños/as; ambas; no sabe.",
          kind: "Opción única",
          options: [
            "Principalmente solo/a",
            "con otros niños/as",
            "ambas",
            "no sabe",
          ],
        },
        {
          id: "T4_6",
          label: "6. ¿Tuvo amigos imaginarios?",
          type: "select",
          required: false,
          hint: "Sí; No; No sabe.",
          kind: "Opción única",
          options: ["Sí", "No", "No sabe"],
        },
        {
          id: "T4_7",
          label: "6. Descripción del juego infantil",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_8",
          label: "7. Carácter y comportamiento en los primeros años",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_9",
          label: "8. Relación con los padres",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_10",
          label: "8. Relación con los hermanos",
          type: "long",
          required: false,
          hint: "Si aplica.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_11",
          label: "8. Relación con otros familiares",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_12",
          label: "8. Relación con conocidos",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_13",
          label:
            "8. Relación con personas desconocidas de igual o distinta edad",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_14",
          label: "8. Grado de integración social",
          type: "long",
          required: false,
          hint: "Observaciones descriptivas.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_15",
          label: "9. Edad de ingreso a la escuela",
          type: "number",
          required: false,
          hint: "Años; permitir desconocido.",
          kind: "Número entero",
          options: [],
        },
        {
          id: "T4_16",
          label: "9. ¿Se adaptó al ingreso escolar?",
          type: "select",
          required: false,
          hint: "Sí; Parcialmente; No; No sabe.",
          kind: "Opción única",
          options: ["Sí", "Parcialmente", "No", "No sabe"],
        },
        {
          id: "T4_17",
          label: "9. Descripción de la adaptación escolar",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_18",
          label: "9. Integración con compañeros",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_19",
          label: "9. Comportamiento en el salón de clases",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_20",
          label: "9. Comportamiento durante recreos",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_21",
          label: "9. Relación con los demás",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_22",
          label: "9. ¿Presentó aislamiento?",
          type: "select",
          required: false,
          hint: "Sí; No; No sabe.",
          kind: "Opción única",
          options: ["Sí", "No", "No sabe"],
        },
        {
          id: "T4_23",
          label: "9. Explicación del aislamiento",
          type: "long",
          required: false,
          hint: "Condicional si refiere aislamiento.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T4_22", in: ["Sí"] },
        },
        {
          id: "T4_24",
          label: "10. Experiencias en estudios primarios",
          type: "long",
          required: false,
          hint: "Recursos/apoyos, conducta, dificultades y afrontamiento de exámenes.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_25",
          label: "11. Experiencias en estudios secundarios",
          type: "long",
          required: false,
          hint: "Recursos/apoyos, conducta, dificultades y afrontamiento de exámenes.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_26",
          label: "12. Experiencias en estudios superiores",
          type: "long",
          required: false,
          hint: "Si aplica; incluir recursos/apoyos y dificultades.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_27",
          label: "13. Problemas afectivos o de conducta en la niñez",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_28",
          label: "14. Particularidades de la adolescencia",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T4_29",
          label: "15. Problemas afectivos o de conducta en la adolescencia",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
      ],
    },
    {
      id: "T5",
      title: "III. Desarrollo y contexto actual",
      fields: [
        {
          id: "T5_0",
          label: "16. Concordancia entre madurez biológica y psicológica",
          type: "long",
          required: false,
          hint: "Observación y fuente de información; evitar inferir solo por apariencia.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_1",
          label: "17. Desarrollo de la voluntad: rapidez, decisión y ejecución",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_2",
          label: "18. Autonomía en deliberación y acción",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_3",
          label: "19. Persistencia en el esfuerzo",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_4",
          label: "20. Jerarquía de valores y concepción de la vida",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_5",
          label: "20. Estilo de vida",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_6",
          label: "20. Sexualidad / información relevante",
          type: "long",
          required: false,
          hint: "Opcional, pertinente a la consulta y con consentimiento.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_7",
          label: "21. ¿Refiere problemas legales?",
          type: "select",
          required: false,
          hint: "Sí; No; Prefiero no responder.",
          kind: "Opción única",
          options: ["Sí", "No", "Prefiero no responder"],
        },
        {
          id: "T5_8",
          label: "21. Descripción de problemas legales",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T5_7", in: ["Sí"] },
        },
        {
          id: "T5_9",
          label: "21. Normas y dinámica familiar",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_10",
          label: "22. Hábitos e intereses",
          type: "long",
          required: false,
          hint: "Sueño, ocio, ejercicio y actividades relevantes.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_11",
          label: "22. Consumo de alcohol",
          type: "select",
          required: false,
          hint: "Actual; previo; nunca; prefiero no responder.",
          kind: "Opción única",
          options: ["Actual", "previo", "nunca", "prefiero no responder"],
        },
        {
          id: "T5_12",
          label: "22. Consumo de tabaco/nicotina",
          type: "select",
          required: false,
          hint: "Actual; previo; nunca; prefiero no responder.",
          kind: "Opción única",
          options: ["Actual", "previo", "nunca", "prefiero no responder"],
        },
        {
          id: "T5_13",
          label: "22. Consumo de otras sustancias",
          type: "select",
          required: false,
          hint: "Actual; previo; nunca; prefiero no responder.",
          kind: "Opción única",
          options: ["Actual", "previo", "nunca", "prefiero no responder"],
        },
        {
          id: "T5_14",
          label: "22. Detalles de consumo, cuando proceda",
          type: "long",
          required: false,
          hint: "Sustancia, cantidad, frecuencia y repercusión.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_15",
          label: "23. Enfermedades desde la niñez hasta la actualidad",
          type: "long",
          required: false,
          hint: "Cronología si es posible.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_16",
          label: "23. Accidentes desde la niñez hasta la actualidad",
          type: "long",
          required: false,
          hint: "Cronología, secuelas si las hay.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_17",
          label: "24. Modalidad de elección profesional u oficio",
          type: "select",
          required: false,
          hint: "Libre; influenciada; forzada; mixta; no aplica.",
          kind: "Menú desplegable",
          options: ["Libre", "influenciada", "forzada", "mixta", "no aplica"],
        },
        {
          id: "T5_18",
          label: "24. Descripción de la elección profesional",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_19",
          label: "25. Vivienda",
          type: "long",
          required: false,
          hint: "Condiciones actuales.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_20",
          label: "25. Situación económica",
          type: "long",
          required: false,
          hint: "Descripción contextual.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_21",
          label:
            "25. Relación con jefes, superiores, compañeros o subordinados",
          type: "long",
          required: false,
          hint: "Si aplica.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_22",
          label: "25. Crecimiento psicosocial",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_23",
          label: "25. Aspiraciones laborales",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_24",
          label: "25. Cambios de profesión, oficio o trabajo",
          type: "long",
          required: false,
          hint: "Frecuencia, circunstancias y causas.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_25",
          label: "25. Cuadro o composición familiar actual",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_26",
          label: "25. Relaciones interpersonales actuales",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_27",
          label: "25. Religión / creencias actuales",
          type: "short",
          required: false,
          hint: "Opcional; «Ninguna» o «Prefiero no responder».",
          kind: "Texto corto",
          options: [],
        },
        {
          id: "T5_28",
          label: "25. Recreación",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_29",
          label: "26. Historia y conducta sexual relevante",
          type: "long",
          required: false,
          hint: "Opcional; evitar presuponer orientación o prácticas.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_30",
          label: "26. Relaciones con otras personas",
          type: "long",
          required: false,
          hint: "Según pertinencia clínica.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_31",
          label: "27. ¿Le cuesta elegir pareja?",
          type: "select",
          required: false,
          hint: "Sí; No; A veces; No aplica; prefiero no responder.",
          kind: "Opción única",
          options: [
            "Sí",
            "No",
            "A veces",
            "No aplica",
            "prefiero no responder",
          ],
        },
        {
          id: "T5_32",
          label: "27. Autopercepción sobre fidelidad y exigencia",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_33",
          label: "27. Número de noviazgos/relaciones relevantes",
          type: "number",
          required: false,
          hint: "Opcional.",
          kind: "Número entero",
          options: [],
        },
        {
          id: "T5_34",
          label: "27. Duración de relaciones relevantes",
          type: "repeat",
          required: false,
          hint: "Vincular con cada relación; opcional.",
          kind: "Texto corto repetible",
          options: [],
        },
        {
          id: "T5_35",
          label: "27. ¿Ha contraído matrimonio?",
          type: "select",
          required: false,
          hint: "Sí; No; Prefiero no responder.",
          kind: "Opción única",
          options: ["Sí", "No", "Prefiero no responder"],
        },
        {
          id: "T5_36",
          label: "27. Edad de paciente al contraer matrimonio",
          type: "number",
          required: false,
          hint: "Condicional.",
          kind: "Número entero",
          options: [],
          condition: { parent: "T5_35", in: ["Sí"] },
        },
        {
          id: "T5_37",
          label: "27. Edad de pareja al contraer matrimonio",
          type: "number",
          required: false,
          hint: "Condicional; si se conoce.",
          kind: "Número entero",
          options: [],
          condition: { parent: "T5_35", in: ["Sí"] },
        },
        {
          id: "T5_38",
          label: "27. Opinión sobre el matrimonio",
          type: "long",
          required: false,
          hint: "Opcional.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_39",
          label: "27. Particularidades del día de la boda",
          type: "long",
          required: false,
          hint: "Condicional y solo si es clínicamente pertinente.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T5_35", in: ["Sí"] },
        },
        {
          id: "T5_40",
          label: "27. Descripción de la vida matrimonial",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T5_35", in: ["Sí"] },
        },
        {
          id: "T5_41",
          label: "27. ¿Ha habido separación?",
          type: "select",
          required: false,
          hint: "Sí; No; No aplica; prefiero no responder.",
          kind: "Opción única",
          options: ["Sí", "No", "No aplica", "prefiero no responder"],
        },
        {
          id: "T5_42",
          label: "27. Información sobre la separación",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T5_41", in: ["Sí"] },
        },
        {
          id: "T5_43",
          label: "27. ¿Ha habido divorcio?",
          type: "select",
          required: false,
          hint: "Sí; No; No aplica; prefiero no responder.",
          kind: "Opción única",
          options: ["Sí", "No", "No aplica", "prefiero no responder"],
        },
        {
          id: "T5_44",
          label: "27. Causas referidas del divorcio",
          type: "long",
          required: false,
          hint: "Condicional.",
          kind: "Texto largo",
          options: [],
          condition: { parent: "T5_43", in: ["Sí"] },
        },
        {
          id: "T5_45",
          label: "28. Periodos críticos de la vida",
          type: "long",
          required: false,
          hint: "Incluido climaterio o menopausia si corresponde.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T5_46",
          label: "28. Síntesis de lo encontrado",
          type: "long",
          required: false,
          hint: "—",
          kind: "Texto largo",
          options: [],
        },
      ],
    },
    {
      id: "T6",
      title: "IV. Antecedentes familiares",
      fields: [
        {
          id: "T6_0",
          label: "Antecedentes familiares: rama paterna / abuelo",
          type: "long",
          required: false,
          hint: "Filiación, relación y antecedentes relevantes; permitir desconocido.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_1",
          label: "Antecedentes familiares: rama paterna / abuela",
          type: "long",
          required: false,
          hint: "Ídem.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_2",
          label: "Antecedentes familiares: rama paterna / padre",
          type: "long",
          required: false,
          hint: "Ídem.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_3",
          label: "Antecedentes familiares: rama paterna / tíos",
          type: "repeat",
          required: false,
          hint: "Una entrada por familiar relevante.",
          kind: "Texto largo repetible",
          options: [],
        },
        {
          id: "T6_4",
          label: "Antecedentes familiares: rama materna / abuelo",
          type: "long",
          required: false,
          hint: "Ídem.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_5",
          label: "Antecedentes familiares: rama materna / abuela",
          type: "long",
          required: false,
          hint: "Ídem.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_6",
          label: "Antecedentes familiares: rama materna / madre",
          type: "long",
          required: false,
          hint: "Ídem.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_7",
          label: "Antecedentes familiares: rama materna / tíos",
          type: "repeat",
          required: false,
          hint: "Una entrada por familiar relevante.",
          kind: "Texto largo repetible",
          options: [],
        },
        {
          id: "T6_8",
          label: "Antecedentes de hermanos/as",
          type: "repeat",
          required: false,
          hint: "Una entrada por hermano/a relevante.",
          kind: "Texto largo repetible",
          options: [],
        },
        {
          id: "T6_9",
          label: "Antecedentes de esposo/a o pareja",
          type: "long",
          required: false,
          hint: "Si aplica.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T6_10",
          label: "Antecedentes de hijos/as",
          type: "repeat",
          required: false,
          hint: "Si aplica; una entrada por hijo/a relevante.",
          kind: "Texto largo repetible",
          options: [],
        },
        {
          id: "T6_11",
          label: "Antecedentes de otros familiares colaterales",
          type: "repeat",
          required: false,
          hint: "Antecedentes de salud física/mental, conductuales u otros relevantes, sin juicios de valor.",
          kind: "Texto largo repetible",
          options: [],
        },
      ],
    },
    {
      id: "T7",
      title: "V. Sumario diagnóstico, tratamiento y evolución",
      fields: [
        {
          id: "T7_0",
          label: "1. Batería o instrumento de evaluación aplicado",
          type: "repeat",
          required: false,
          hint: "Registrar nombre exacto del instrumento por aplicación.",
          kind: "Texto corto repetible",
          options: [],
        },
        {
          id: "T7_1",
          label: "1. Fecha de aplicación",
          type: "repeat",
          required: false,
          hint: "Asociar a cada instrumento.",
          kind: "Fecha repetible",
          options: [],
        },
        {
          id: "T7_2",
          label: "1. Resultado de cada batería/instrumento",
          type: "repeat",
          required: false,
          hint: "Puntuación, interpretación y límites, según manual correspondiente.",
          kind: "Texto largo repetible",
          options: [],
        },
        {
          id: "T7_3",
          label: "1. Síntesis de hallazgos en las baterías",
          type: "long",
          required: false,
          hint: "Integrar resultados sin confundir tamizaje con diagnóstico.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T7_4",
          label: "1. Apariencia general y actitud",
          type: "long",
          required: false,
          hint: "Registro observacional.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T7_5",
          label: "1. Estado de consciencia",
          type: "select",
          required: false,
          hint: "Alerta; somnoliento/a; obnubilado/a; otro; no evaluado. Detallar si procede.",
          kind: "Menú desplegable + texto corto",
          options: [
            "Alerta",
            "somnoliento/a",
            "obnubilado/a",
            "otro",
            "no evaluado. Detallar si procede",
          ],
        },
        {
          id: "T7_6",
          label: "1. Estado de ánimo",
          type: "long",
          required: false,
          hint: "Estado referido por paciente y observación, si corresponde.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T7_7",
          label: "2. Examen mental",
          type: "long",
          required: false,
          hint: "Registro clínico estructurado; ampliar en subcampos si se desea.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T7_8",
          label: "3. Diagnóstico / impresión diagnóstica",
          type: "long",
          required: false,
          hint: "Sustento y grado de certeza; código/clasificación si procede.",
          kind: "Texto largo",
          options: [],
        },
        {
          id: "T7_9",
          label: "4. Programa de tratamiento propuesto",
          type: "long",
          required: false,
          hint: "Objetivos, abordaje, frecuencia y seguimiento previstos.",
          kind: "Texto largo",
          options: [],
        },
      ],
    },
  ],
  note: [
    {
      id: "N_0",
      label: "Nombre del usuario/a",
      type: "readonly",
      required: true,
      hint: "Autollenado desde la ficha de identificación.",
      kind: "Texto corto (solo lectura)",
      options: [],
    },
    {
      id: "N_1",
      label: "Edad",
      type: "readonly",
      required: true,
      hint: "Autocalculada a partir de la fecha de nacimiento.",
      kind: "Número entero (solo lectura)",
      options: [],
    },
    {
      id: "N_2",
      label: "Sexo",
      type: "readonly",
      required: true,
      hint: "Autollenado desde la ficha de identificación.",
      kind: "Catálogo (solo lectura)",
      options: ["Femenino", "Masculino", "Intersexual", "Prefiero no decir"],
    },
    {
      id: "N_3",
      label: "Fecha",
      type: "readonly",
      required: true,
      hint: "Autollenada con la fecha actual. Puede ajustarse en producción si se habilita edición.",
      kind: "Fecha (solo lectura)",
      options: [],
    },
    {
      id: "N_4",
      label: "Hora",
      type: "readonly",
      required: true,
      hint: "Autollenada con la hora actual.",
      kind: "Hora (solo lectura)",
      options: [],
    },
    {
      id: "N_5",
      label: "No. de sesión",
      type: "short",
      required: false,
      hint: "Número consecutivo de sesión clínica.",
      kind: "Número entero",
      options: [],
    },
    {
      id: "N_6",
      label: "Objetivo de la sesión",
      type: "long",
      required: true,
      hint: "Objetivo o propósito terapéutico trabajado en la sesión.",
      kind: "Texto largo",
      options: [],
    },
    {
      id: "N_7",
      label: "Resumen de la sesión",
      type: "long",
      required: true,
      hint: "Síntesis de los temas abordados, técnicas utilizadas y contenidos relevantes.",
      kind: "Texto largo",
      options: [],
    },
    {
      id: "N_8",
      label: "Resultados de la sesión (conducta y disposición)",
      type: "long",
      required: true,
      hint: "Describir respuesta del usuario, disposición, conducta observada y avances o dificultades.",
      kind: "Texto largo",
      options: [],
    },
    {
      id: "N_9",
      label: "Plan terapéutico para la siguiente sesión",
      type: "long",
      required: true,
      hint: "Plan, metas o enfoque sugerido para el siguiente encuentro.",
      kind: "Texto largo",
      options: [],
    },
    {
      id: "N_10",
      label: "Actividades asignadas para el usuario",
      type: "long",
      required: false,
      hint: "Tareas, ejercicios o actividades indicadas al usuario.",
      kind: "Texto largo",
      options: [],
    },
    {
      id: "N_11",
      label: "Observaciones",
      type: "long",
      required: false,
      hint: "Comentarios adicionales relevantes para seguimiento clínico.",
      kind: "Texto largo",
      options: [],
    },
    {
      id: "N_12",
      label: "Fecha de la próxima sesión",
      type: "date",
      required: false,
      hint: "Fecha programada o tentativa del siguiente encuentro.",
      kind: "Fecha",
      options: [],
    },
  ],
};

let hc16Active = { adult: "Ficha", teen: "T0" };
function hc16Mode() {
  return pat()?.type === "adolescente" ? "teen" : "adult";
}
function hc16Root() {
  data.care16 ??= {};
  data.care16[pid] ??= { adult: {}, teen: {}, notes: [] };
  return data.care16[pid];
}
function hc16CurrentSchema(mode = hc16Mode()) {
  const groups = hc16Schema[mode];
  let id = hc16Active[mode];
  if (!groups.some((g) => g.id === id)) {
    id = groups[0].id;
    hc16Active[mode] = id;
  }
  return groups.find((g) => g.id === id);
}
function hc16Val(f, record) {
  let p = pat();
  const name = f.label;
  let pre = {
    "No. expediente": p.id,
    "Número de expediente": p.id,
    "Nombre completo": p.name,
    "Fecha de Nacimiento": p.dob,
    "Fecha de nacimiento": p.dob,
    Edad: age(p),
    Sexo: p.sex,
    "Correo Electrónico": p.email || p.mail || "",
    "Teléfono móvil": p.contact || p.phone || "",
  };
  if (f.type === "readonly" && Object.prototype.hasOwnProperty.call(pre, name))
    return pre[name];
  return Object.prototype.hasOwnProperty.call(record || {}, f.id)
    ? record[f.id]
    : "";
}
function hc16SafeOptions(f) {
  return Array.isArray(f.options) ? f.options : [];
}
function hc16Input(f, val, repeat = false) {
  const value = val ?? "",
    type = f.type;
  if (type === "readonly")
    return `<input type="${/fecha|nacimiento/i.test(f.label) ? "date" : "text"}" readonly value="${esc(value)}" aria-label="${esc(f.label)}">`;
  if (type === "long")
    return `<textarea data-hc-input="${f.id}" rows="3" aria-label="${esc(f.label)}">${esc(value)}</textarea>`;
  if (type === "multi")
    return `<div class="hc16-pills" data-hc-multi="${f.id}">${hc16SafeOptions(f)
      .map(
        (o) =>
          `<label class="hc16-check"><input type="checkbox" value="${esc(o)}" ${Array.isArray(value) && value.includes(o) ? "checked" : ""} onchange="hc16ConditionalUpdate()"><span>${esc(o)}</span></label>`,
      )
      .join("")}</div>`;
  if (type === "select" || type === "selectExtra") {
    let choice =
      value && typeof value === "object" && !Array.isArray(value)
        ? value.value || ""
        : value;
    return `<select data-hc-input="${f.id}" onchange="hc16ConditionalUpdate()" aria-label="${esc(f.label)}"><option value="">Seleccionar…</option>${hc16SafeOptions(
      f,
    )
      .map(
        (o) =>
          `<option value="${esc(o)}" ${String(choice) === o ? "selected" : ""}>${esc(o)}</option>`,
      )
      .join(
        "",
      )}</select>${type === "selectExtra" ? `<textarea style="margin-top:7px;min-height:58px" data-hc-extra="${f.id}" placeholder="Observaciones complementarias">${esc(value && typeof value === "object" ? value.extra || "" : "")}</textarea>` : ""}`;
  }
  if (type === "repeat")
    return `<div class="hc16-repeater" data-hc-repeat="${f.id}">${(Array.isArray(value) && value.length ? value : [""]).map((x) => `<div class="hc16-repeaterRow"><input type="text" value="${esc(x)}" aria-label="${esc(f.label)}"><button type="button" class="hc16-remove" onclick="this.parentElement.remove()" title="Eliminar entrada">×</button></div>`).join("")}</div><button class="hc16-add" onclick="hc16AddRepeat('${f.id}')" type="button">＋ Añadir registro</button>`;
  const htmlType =
    type === "date" ? "date" : type === "number" ? "number" : "text";
  return `<input data-hc-input="${f.id}" type="${htmlType}" ${htmlType === "number" ? 'step="any"' : ""} value="${esc(value)}" onchange="hc16ConditionalUpdate()" aria-label="${esc(f.label)}">`;
}
function hc16Field(f, record) {
  let val = hc16Val(f, record),
    conditional = !!f.condition;
  return `<div class="hc16-field ${f.type === "long" || f.type === "multi" || f.type === "repeat" ? "long" : ""} ${conditional ? "hc16-conditional" : ""}" data-hc-id="${f.id}" ${conditional ? 'data-hc-cond="1"' : ""}><label class="hc16-label">${esc(f.label)} ${f.required ? '<span class="req">*</span>' : ""}</label>${hc16Input(f, val)}${f.hint ? `<div class="hint">${esc(f.hint)}</div>` : ""}</div>`;
}
function hc16AddRepeat(id) {
  let target = document.querySelector(`[data-hc-repeat="${id}"]`);
  if (!target) return;
  let row = document.createElement("div");
  row.className = "hc16-repeaterRow";
  let input = document.createElement("input");
  input.type = "text";
  input.setAttribute("aria-label", "Registro adicional");
  let b = document.createElement("button");
  b.type = "button";
  b.className = "hc16-remove";
  b.textContent = "×";
  b.onclick = () => row.remove();
  row.append(input, b);
  target.append(row);
  input.focus();
}
function hc16DomVal(id) {
  let box = document.querySelector(`[data-hc-id="${id}"]`);
  if (!box) return "";
  let list = box.querySelector("[data-hc-repeat]");
  if (list)
    return [...list.querySelectorAll("input")]
      .map((x) => x.value.trim())
      .filter(Boolean);
  let checks = box.querySelector("[data-hc-multi]");
  if (checks)
    return [...checks.querySelectorAll("input:checked")].map((x) => x.value);
  let el = box.querySelector("[data-hc-input]");
  if (box.querySelector("[data-hc-extra]"))
    return {
      value: el?.value ?? "",
      extra: box.querySelector("[data-hc-extra]").value,
    };
  return el?.value ?? "";
}
function hc16ConditionMet(f) {
  let c = f.condition;
  if (!c) return true;
  let val = hc16DomVal(c.parent);
  if (val && typeof val === "object" && !Array.isArray(val)) val = val.value;
  if (c.startsWith) return String(val).startsWith(c.equals || "Sí");
  if (c.in) return c.in.includes(val);
  return String(val) === String(c.equals);
}
function hc16ConditionalUpdate() {
  const g = hc16CurrentSchema(),
    fields = g.fields;
  for (let f of fields) {
    if (!f.condition) continue;
    const box = document.querySelector(`[data-hc-id="${f.id}"]`);
    if (!box) continue;
    const show = hc16ConditionMet(f);
    box.hidden = !show;
    box.style.display = show ? "" : "none";
    box.querySelectorAll("input,textarea,select").forEach((x) => {
      x.disabled = !show;
    });
  }
}
function hc16AddLabels(g) {
  return g.fields.length + " variables · respuestas según documento de origen";
}
function hc16View() {
  const p = pat(),
    mode = hc16Mode(),
    g = hc16CurrentSchema(mode),
    stored = hc16Root()[mode][g.id] || {},
    groups = hc16Schema[mode];
  let collected = Object.values(stored).filter((v) =>
    Array.isArray(v) ? v.length : String(v || "").trim(),
  ).length;
  let intro =
    mode === "adult"
      ? `Ficha, antecedentes heredofamiliares, personales no patológicos, patológicos y psicológicos, conforme al Excel adjunto. Los datos básicos se cargan desde la identificación.`
      : `Formulario de la Historia_Clinica_Psicologica_Tipos_de_Campo(1).docx, con todas las secciones y los tipos de respuesta especificados. Los apartados no pertinentes pueden quedar sin contestar.`;
  return `<div class="hc16-intro"><div><div class="hc16-titleline"><h2>Historia clínica psicológica · ${mode === "adult" ? "Adultos" : "Adolescentes"}</h2><span class="hc16-tag">${mode === "adult" ? "Fuente: Excel" : "Fuente: Word"}</span></div><p>${intro}</p></div><span class="hc16-tag">${esc(p.id)} · ${esc(p.name)}</span></div><div class="hc16-sectabs">${groups.map((t) => `<button class="${g.id === t.id ? "active" : ""}" onclick="hc16Switch('${t.id}')">${esc(t.title)}</button>`).join("")}</div><div id="hc16Form"><div class="hc16-group"><div class="hc16-groupHeader"><h3>${esc(g.title)}</h3><small>${hc16AddLabels(g)}</small></div>${g.id === "APsic" ? '<div class="hc16-alert">Ante respuestas afirmativas a antecedentes de autolesión o suicidio, corresponde al profesional realizar una valoración clínica de seguridad y registrar el triage. El formulario no establece por sí mismo un nivel de riesgo.</div>' : ""}<div class="hc16-fields">${g.fields.map((f) => hc16Field(f, stored)).join("")}</div></div></div><div class="hc16-footer"><div class="muted"><b>Guardado por apartado.</b> Permite continuar en varias consultas. ${collected} variables con información guardada en esta hoja.<br>Los campos con * se señalan para revisión; guardar un borrador no equivale a validar ni firmar una historia clínica.</div><div class="btnrow"><button class="btn primary" onclick="hc16Save(true)">Guardar borrador</button><button class="btn" onclick="hc16Print()">Imprimir hoja</button></div></div>`;
}
function hc16Save(message = false) {
  const mode = hc16Mode(),
    g = hc16CurrentSchema(mode),
    form = document.querySelector("#hc16Form");
  if (!form) return;
  let store = hc16Root(),
    record = { ...(store[mode][g.id] || {}) };
  for (let f of g.fields) {
    let box = form.querySelector(`[data-hc-id="${f.id}"]`);
    if (!box || f.type === "readonly" || (f.condition && !hc16ConditionMet(f)))
      continue;
    record[f.id] = hc16DomVal(f.id);
  }
  store[mode][g.id] = record;
  store.lastSaved = {
    at: new Date().toISOString(),
    author: $("#username")?.textContent || "",
    mode,
    section: g.id,
  };
  save();
  if (message)
    notify("Borrador de " + g.title + " guardado para " + pat().name);
}
function hc16Switch(id) {
  hc16Save(false);
  let mode = hc16Mode();
  if (!hc16Schema[mode].some((x) => x.id === id)) return;
  hc16Active[mode] = id;
  go("expediente");
  hc16ConditionalUpdate();
}
function hc16Print() {
  hc16Save(false);
  let g = hc16CurrentSchema(),
    record = hc16Root()[hc16Mode()][g.id] || {},
    p = pat();
  let rows = g.fields.map((f) => {
    let value = hc16Val(f, record);
    if (Array.isArray(value)) value = value.join("; ");
    if (value && typeof value === "object")
      value = [value.value, value.extra].filter(Boolean).join(" · ");
    return `<p style="page-break-inside:avoid"><b>${esc(f.label)}</b><br>${esc(value || "No registrado")}</p>`;
  });
  printPage(
    `Historia clínica ${hc16Mode() === "adult" ? "adulta" : "adolescente"} · ${g.title}`,
    `<p><b>${esc(p.id)}</b> · ${esc(p.name)}</p>${rows.join("")}`,
  );
}
/* Nota de evolución psicológica derivada del formato solicitado por la usuaria. */
function hc16SoapView() {
  let p = pat(),
    root = hc16Root(),
    g = { id: "SOAP", fields: hc16Schema.note },
    stored = root.soapDraft || {};
  let now = new Date();
  let dateNow = now.toLocaleDateString("es-MX");
  let timeNow = now.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let pre = {
    "Nombre del usuario/a": p.name,
    Edad: age(p),
    Sexo: p.sex,
    Fecha: dateNow,
    Hora: timeNow,
  };
  return `<div class="hc16-intro"><div><h2>Nota de evolución psicológica</h2><p>Formato de nota de evolución conforme al esquema compartido. Puede guardarse como borrador o registrar versiones sucesivas del seguimiento clínico.</p></div><span class="hc16-tag">${esc(p.id)}</span></div><div class="hc16-control">Identificación · objetivo · resumen · resultados · plan · actividades · observaciones</div><div id="hc16SoapForm"><div class="hc16-fields">${g.fields.map((f) => hc16Field(f, { ...stored, [f.id]: pre[f.label] !== undefined ? pre[f.label] : stored[f.id] })).join("")}</div><div class="hc16-footer"><div class="muted">Las notas se registran como versiones de evolución. Los campos de identificación se autocompletan desde la ficha del paciente. En producción puede agregarse firma electrónica y bloqueo de edición.</div><div class="btnrow"><button class="btn" onclick="hc16SaveSOAP(false)">Guardar borrador</button><button class="btn primary" onclick="hc16SaveSOAP(true)">Registrar nota de evolución</button></div></div></div><div class="section"><h3>Notas de evolución anteriores</h3>${
    (root.notes || [])
      .slice()
      .reverse()
      .map(
        (n, i) =>
          `<div class="listitem"><div><b>${esc(n.date)} · ${esc(n.author)}</b><br><small>${esc(n.status)} · versión ${root.notes.length - i}</small></div><button class="btn" onclick="hc16InspectSOAP(${root.notes.length - i - 1})">Ver nota</button></div>`,
      )
      .join("") || '<p class="muted">No hay notas de evolución registradas.</p>'
  }</div>`;
}
function hc16SaveSOAP(record = false) {
  let form = document.querySelector("#hc16SoapForm");
  if (!form) return;
  let root = hc16Root(),
    values = { ...(root.soapDraft || {}) };
  for (let f of hc16Schema.note) {
    if (f.type === "readonly") continue;
    if (f.condition && !hc16ConditionMetSOAP(f)) continue;
    let box = form.querySelector(`[data-hc-id="${f.id}"]`);
    if (!box) continue;
    let arr = box.querySelector("[data-hc-repeat]"),
      m = box.querySelector("[data-hc-multi]"),
      e = box.querySelector("[data-hc-input]");
    values[f.id] = arr
      ? [...arr.querySelectorAll("input")].map((x) => x.value).filter(Boolean)
      : m
        ? [...m.querySelectorAll("input:checked")].map((x) => x.value)
        : e?.value || "";
  }
  root.soapDraft = values;
  if (record) {
    let required = hc16Schema.note.filter(
      (f) =>
        f.required &&
        f.type !== "readonly" &&
        !String(values[f.id] || "").trim(),
    );
    if (required.length)
      return notify(
        "Completa los campos obligatorios antes de registrar: " +
          required
            .slice(0, 2)
            .map((x) => x.label)
            .join(", "),
      );
    (root.notes ??= []).push({
      date: new Date().toLocaleString("es-MX"),
      author: settingsProfile().fullName,
      license: settingsProfile().license,
      status: "Registrada",
      values: { ...values },
    });
    root.soapDraft = {};
  }
  save();
  go("expediente");
  notify(record ? "Nota de evolución registrada" : "Borrador de nota guardado");
}
function hc16ConditionMetSOAP(f) {
  if (!f.condition) return true;
  const p = hc16Schema.note.find((x) => x.id === f.condition.parent);
  const el = document.querySelector(
    `#hc16SoapForm [data-hc-id="${p?.id}"] [data-hc-input]`,
  );
  return el?.value === f.condition.equals;
}
function hc16InspectSOAP(i) {
  let n = hc16Root().notes?.[i];
  if (!n) return;
  let fields = hc16Schema.note.filter((f) => n.values[f.id] != null);
  modal(
    "Nota de evolución · " + esc(n.date),
    `<p><b>Responsable:</b> ${esc(n.author)}${n.license ? ` · cédula: ${esc(n.license)}` : ""} · <b>${esc(n.status)}</b></p><div class="sheet" style="max-height:55vh;overflow:auto">${fields.map((f) => `<p><b>${esc(f.label)}</b><br>${esc(Array.isArray(n.values[f.id]) ? n.values[f.id].join("; ") : n.values[f.id] || "No registrado")}</p>`).join("")}</div>`,
  );
}
