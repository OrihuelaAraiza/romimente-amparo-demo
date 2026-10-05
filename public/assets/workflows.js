/* Additional workflows derived from the Drive resources and audio brief. */
trainingLibrary.DBT = trainingLibrary.DBT.filter((s) =>
  /^SESIÓN/.test(s.title),
);
let programKind = "ACT",
  programSession = 0;
function programPatient() {
  return isPatient()
    ? "PS-0001"
    : mine().some((p) => p.id === pid)
      ? pid
      : mine()[0]?.id;
}
function programsView() {
  const id = programPatient(),
    p = data.patients.find((p) => p.id === id),
    plan = data.programs[id];
  if (plan) programKind = plan.kind;
  const sessions = trainingLibrary[programKind],
    done = Object.values(plan?.sessions || {}).filter(
      (s) => s.status === "Realizada",
    ).length;
  return (
    header(
      "ACOMPAÑAMIENTO ESTRUCTURADO",
      isPatient() ? "Mi plan de tratamiento" : "Programas terapéuticos",
      "ACT y DBT · 13 sesiones por módulo, según los materiales proporcionados.",
      isPatient() ? "" : selector(id),
    ) +
    `<div class="program-hero"><div><span class="eyebrow">${isPatient() ? "TU PROCESO" : esc(p?.name || "Selecciona un paciente")}</span><h2>${programKind === "ACT" ? "Aceptación y compromiso" : "Habilidades para la vida"}</h2><p>${programKind === "ACT" ? "Una vida orientada a lo que importa." : "Mindfulness, relaciones, regulación emocional y tolerancia al malestar."}</p><div class="progress"><b style="width:${(done / 13) * 100}%"></b></div><small>${done} de 13 sesiones realizadas</small></div>${isPatient() ? "" : `<div class="program-choice"><label for="programKind">Programa a asignar</label><select id="programKind"><option ${programKind === "ACT" ? "selected" : ""}>ACT</option><option ${programKind === "DBT" ? "selected" : ""}>DBT</option></select><button class="btn primary" onclick="assignProgram()">${plan ? "Cambiar programa" : "Asignar programa"}</button></div>`}</div>${!plan ? '<div class="notice section">Aún no hay un programa asignado a este expediente. Puedes explorar el catálogo.</div>' : ""}<div class="program-list section">${sessions
      .map((s, i) => {
        const r = plan?.sessions?.[i];
        return `<button class="program-session" onclick="openProgramSession(${i})"><span class="session-number">${String(i + 1).padStart(2, "0")}</span><span><b>${esc(s.title.replace(/^SESIÓN \d+ · /, ""))}</b><small>${r?.date ? fmtDate(r.date) : "Fecha por acordar"} · ${isPatient() ? (r?.shared ? "Material compartido" : "Material por compartir") : r?.mode || "Individual o grupal"}</small></span>${tag(r?.status || "Pendiente")}${ico("arrow", 18)}</button>`;
      })
      .join("")}</div>`
  );
}
function assignProgram() {
  const id = programPatient(),
    kind = $("#programKind").value;
  if (data.programs[id] && data.programs[id].kind !== kind) {
    modal(
      "Cambiar programa",
      "<p>El plan actual se conservará en el historial y comenzará un módulo nuevo.</p>",
      `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="confirmProgram('${kind}')">Asignar ${kind}</button>`,
    );
    return;
  }
  confirmProgram(kind);
}
function confirmProgram(kind) {
  const id = programPatient();
  if (data.programs[id]?.kind !== kind) {
    data.programHistory ??= {};
    (data.programHistory[id] ??= []).push(data.programs[id]);
    data.programs[id] = { kind, start: todayISO(), sessions: {}, owner: role };
  }
  programKind = kind;
  audit("Programa asignado: " + kind, id);
  closeModal();
  go("programas");
  notify("Programa asignado al expediente");
}
function openProgramSession(i) {
  const id = programPatient(),
    plan = data.programs[id],
    kind = plan?.kind || programKind,
    s = trainingLibrary[kind][i],
    r = plan?.sessions[i] || {};
  if (isPatient() && !r.shared)
    return notify("Tu terapeuta aún no ha compartido este material");
  programSession = i;
  modal(
    s.title,
    `<p class="muted">${kind} · Sesión ${i + 1} · Contenido del material proporcionado por la clínica.</p><details ${isPatient() ? "open" : ""}><summary>Ver guía de actividades</summary><pre class="readable-pre">${esc(s.content)}</pre></details>${isPatient() ? `<p>${esc(r.patientInstructions || "Revisa estas actividades con tu terapeuta durante la sesión.")}</p>` : `<div class="formgrid section">${inputField("Fecha de sesión", "programDate", "date", r.date || todayISO())}<div class="field"><label for="programStatus">Estado</label><select id="programStatus">${["Pendiente", "Programada", "Realizada"].map((x) => `<option ${r.status === x ? "selected" : ""}>${x}</option>`).join("")}</select></div><div class="field"><label for="programMode">Modalidad</label><select id="programMode">${["Individual", "Grupal"].map((x) => `<option ${r.mode === x ? "selected" : ""}>${x}</option>`).join("")}</select></div><div class="field"><label for="programBlock">Bloque aplicado</label><select id="programBlock">${(kind === "DBT" ? ["Adicciones", "TCA", "Ambos"] : ["General"]).map((x) => `<option ${r.block === x ? "selected" : ""}>${x}</option>`).join("")}</select></div><div class="field wide"><label for="programNotes">Registro de aplicación · observaciones del profesional</label><textarea id="programNotes">${esc(r.notes || "")}</textarea></div><div class="field wide"><label for="programInstructions">Indicaciones para el paciente</label><textarea id="programInstructions">${esc(r.patientInstructions || "")}</textarea></div></div><label class="flex section"><input id="programShared" type="checkbox" ${r.shared ? "checked" : ""}>Compartir material e indicaciones con el paciente</label>`}`,
    `<button class="btn" onclick="closeModal()">Cerrar</button>${isPatient() ? "" : `<button class="btn primary" onclick="saveProgramSession()" ${!plan ? "disabled" : ""}>Guardar sesión</button>`}`,
  );
}
function saveProgramSession() {
  const id = programPatient(),
    p = data.programs[id];
  if (!p) return;
  const date = $("#programDate").value;
  if (!date) return notify("Indica la fecha de sesión");
  p.sessions[programSession] = {
    date,
    status: $("#programStatus").value,
    mode: $("#programMode").value,
    block: $("#programBlock").value,
    notes: $("#programNotes").value,
    patientInstructions: $("#programInstructions").value,
    shared: $("#programShared").checked,
    at: new Date().toISOString(),
    author: settingsProfile().fullName,
  };
  audit("Sesión " + (programSession + 1) + " de " + p.kind + " guardada", id);
  closeModal();
  go("programas");
  notify("Sesión guardada");
}
function socialView() {
  const s = data.social;
  return (
    header(
      "CLÍNICA EL AMPARO · COMUNIDAD",
      "Proyecto social",
      "Acercar el acompañamiento psicológico a más personas.",
      `<button class="btn primary" onclick="newSocialProject()">＋ Nueva iniciativa</button>`,
    ) +
    `<div class="social-intro"><div><span class="eyebrow">EL CUIDADO TRASCIENDE LA CONSULTA</span><h2>Más cerca de nuestra comunidad.</h2><p>Organiza iniciativas, registra solicitudes ficticias de acompañamiento y vincula a las personas con la atención clínica.</p></div>${ico("heart", 100)}</div><p class="hint">Propuesta de demostración: objetivos, criterios de acceso y operación del proyecto social pendientes de validación con El Amparo.</p><div class="three section"><section class="card"><div class="statlabel">INICIATIVAS</div><div class="stat">${s.projects.length}</div></section><section class="card"><div class="statlabel">SOLICITUDES</div><div class="stat">${s.intakes.length}</div></section><section class="card"><div class="statlabel">VINCULACIONES CLÍNICAS</div><div class="stat">${s.intakes.filter((i) => i.patient).length}</div></section></div><div class="two section">${s.projects.map((p) => `<section class="card social-project"><div class="section-title"><span class="metric-icon">${ico("heart")}</span>${tag(p.status)}</div><h2>${esc(p.name)}</h2><p>${esc(p.description)}</p><div class="project-meta"><span>${esc(p.focus)}</span><span>${esc(p.place)}</span><span>${p.capacity} lugares · ${fmtDate(p.date)}</span></div><button class="btn soft" onclick="newSocialIntake('${p.id}')">Registrar solicitud →</button></section>`).join("")}</div><section class="card section"><div class="section-title"><h2>Solicitudes de acompañamiento</h2><button class="btn" onclick="exportSocial()">Exportar CSV</button></div><div class="tableWrap"><table><thead><tr><th>Persona ficticia</th><th>Iniciativa</th><th>Estado</th><th>Seguimiento</th></tr></thead><tbody>${s.intakes.map((i) => `<tr><td><b>${esc(i.name)}</b><br><small>${esc(i.email)}</small></td><td>${esc(s.projects.find((p) => p.id === i.project)?.name)}</td><td>${tag(i.patient ? "Vinculada" : "Por contactar")}</td><td>${i.patient ? `<button class="btn" onclick="switchSpace('clinical');openP('${i.patient}')">Abrir expediente</button>` : `<button class="btn" onclick="referSocial('${i.id}')">Vincular a consulta</button>`}</td></tr>`).join("") || '<tr><td colspan="4"><div class="empty">Registra una primera solicitud desde una iniciativa.</div></td></tr>'}</tbody></table></div></section>`
  );
}
function newSocialProject() {
  modal(
    "Nueva iniciativa social",
    `<div class="formgrid">${inputField("Nombre de la iniciativa *", "socialName")}${inputField("Población / enfoque *", "socialFocus")}${inputField("Lugar *", "socialPlace", "text", "Clínica El Amparo")}${inputField("Fecha *", "socialDate", "date", todayISO())}${inputField("Cupo *", "socialCapacity", "number", 20)}<div class="field wide"><label for="socialDescription">Descripción</label><textarea id="socialDescription"></textarea></div></div>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="saveSocialProject()">Crear iniciativa</button>`,
  );
}
function saveSocialProject() {
  const name = $("#socialName").value.trim(),
    focus = $("#socialFocus").value.trim(),
    place = $("#socialPlace").value.trim(),
    date = $("#socialDate").value,
    capacity = Number($("#socialCapacity").value);
  if (
    !name ||
    !focus ||
    !place ||
    !date ||
    !Number.isInteger(capacity) ||
    capacity < 1
  )
    return notify("Completa los campos y un cupo entero mayor a cero");
  data.social.projects.push({
    id: uid("SOC-"),
    name,
    focus,
    place,
    date,
    capacity,
    status: "Planeación",
    description: $("#socialDescription").value,
  });
  audit("Iniciativa social creada");
  closeModal();
  go("social");
}
function newSocialIntake(project) {
  modal(
    "Solicitud de acompañamiento",
    `<p class="muted">Utiliza datos ficticios. La solicitud permanece en este navegador.</p><div class="formgrid">${inputField("Nombre completo *", "intakeName")}${inputField("Fecha de nacimiento *", "intakeDob", "date")}${inputField("Correo de ejemplo *", "intakeEmail", "email")}${inputField("Teléfono de ejemplo", "intakePhone", "tel")}</div><label class="flex section"><input id="intakeConsent" type="checkbox">Confirmo que son datos ficticios y se puede simular su vinculación clínica.</label>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="saveSocialIntake('${project}')">Registrar solicitud</button>`,
  );
}
function saveSocialIntake(project) {
  const name = $("#intakeName").value.trim(),
    dob = $("#intakeDob").value,
    email = $("#intakeEmail").value.trim();
  if (
    !name ||
    !dob ||
    dob > todayISO() ||
    !$("#intakeEmail").checkValidity() ||
    !email ||
    !$("#intakeConsent").checked
  )
    return notify("Completa los datos y confirma el uso ficticio");
  data.social.intakes.push({
    id: uid("IN-"),
    project,
    name,
    dob,
    email,
    phone: $("#intakePhone").value,
    date: new Date().toISOString(),
    owner: role,
  });
  audit("Solicitud social registrada");
  closeModal();
  go("social");
}
function referSocial(id) {
  const i = data.social.intakes.find((i) => i.id === id);
  if (!i || i.patient) return;
  const patient =
    "PS-" +
    String(
      Math.max(0, ...data.patients.map((p) => Number(p.id.slice(3)) || 0)) + 1,
    ).padStart(4, "0");
  data.patients.push({
    id: patient,
    name: i.name,
    dob: i.dob,
    email: i.email,
    contact: i.phone,
    phone: "",
    sex: "Por registrar",
    gender: "Por registrar",
    civil: "Por registrar",
    occupation: "Por registrar",
    emergency: "Por registrar",
    diagnosis: "En evaluación",
    reason: "Vinculación desde proyecto social",
    type: age(i) < 18 ? "adolescente" : "adulto",
    owner: role,
    status: "Activo",
    risk: "Sin evaluar",
    last: "Pendiente",
    scores: [],
    planEnd: "",
  });
  i.patient = patient;
  audit("Solicitud social vinculada", patient);
  go("social");
  notify("Expediente ficticio creado y vinculado");
}
function csvCell(s) {
  const v = String(s ?? "");
  return (
    '"' + (/^[=+\-@\t\r]/.test(v) ? "'" + v : v).replaceAll('"', '""') + '"'
  );
}
function exportSocial() {
  const rows = [
    ["Nombre", "Iniciativa", "Fecha", "Expediente"],
    ...data.social.intakes.map((i) => [
      i.name,
      data.social.projects.find((p) => p.id === i.project)?.name,
      i.date,
      i.patient || "Pendiente",
    ]),
  ];
  downloadBlob(
    "\uFEFF" + rows.map((r) => r.map(csvCell).join(",")).join("\r\n"),
    "proyecto-social-demo.csv",
    "text/csv;charset=utf-8",
  );
}
// Structured notes: psychological and SOAP stay distinct, versioned, and attributed.
const noteFields = {
  psych: [
    "Objetivo de la sesión",
    "Resumen de la sesión",
    "Resultados de la sesión (conducta y disposición)",
    "Plan terapéutico para la siguiente sesión",
    "Actividades asignadas para el usuario",
    "Observaciones",
  ],
  soap: [
    "S · Subjetivo",
    "O · Objetivo",
    "A · Análisis / formulación clínica",
    "P · Plan de intervención",
  ],
};
function recordNotes() {
  return ((data.clinicalNotes ??= {})[pid] ??= []);
}
let noteKind = "psych",
  editingNote = null;
function clinicalNotesView(kind = "psych") {
  noteKind = kind;
  const notes = recordNotes(),
    draft = (data.noteDrafts ??= {})[pid + "-" + kind] || {};
  return `<div class="section-title"><div><h2>${kind === "soap" ? "Nota SOAP" : "Notas de evolución psicológica"}</h2><p class="muted">${esc(pat().name)} · ${esc(settingsProfile().fullName)} · creación automática con fecha y hora.</p></div><button class="btn" onclick="openPatientJournal()">Lo que escribió el paciente</button></div><section class="voice-tools"><span>${ico("mic")} Notas por voz</span><button class="btn" onclick="openVoiceRecorder()">Grabar nota rápida</button><button class="btn" onclick="startDictation()">Dictar al campo activo</button><button class="btn soft" onclick="fillNoteExample()">Cargar ejemplo</button><small>Transcripción de ejemplo identificada. Dictado según compatibilidad del navegador.</small></section><div class="formgrid" id="clinicalNoteForm">${noteFields[kind].map((f, i) => `<div class="field ${i === 1 ? "wide" : ""}"><label for="note_${i}">${esc(f)} ${i < 2 || kind === "soap" ? "*" : ""}</label><textarea id="note_${i}" data-note-field="${i}" onfocus="activeDictationField=this.id">${esc(draft[f] || "")}</textarea></div>`).join("")}<div class="field"><label for="noteNext">Próxima sesión</label><input type="date" id="noteNext" value="${esc(draft.next || "")}"></div></div><div class="btnrow section"><button class="btn" onclick="saveClinicalNote(false)">Guardar borrador</button><button class="btn primary" onclick="saveClinicalNote(true)">Guardar nota de evolución</button></div><h3 class="section">Historial de notas</h3>${
    notes
      .filter((n) => n.kind === kind)
      .slice()
      .reverse()
      .map(
        (n) =>
          `<div class="listitem"><div><b>${new Date(n.createdAt).toLocaleString("es-MX")}</b><br><small>${esc(n.author)} · ${n.locked ? "Cerrada para edición" : "Editable"}${n.updatedAt ? " · versión " + n.version : ""}</small></div><div class="btnrow"><button class="btn" onclick="viewClinicalNote('${n.id}')">Ver nota</button><button class="btn" onclick="toggleNoteLock('${n.id}')">${n.locked ? "Abrir candado" : "Cerrar candado"}</button></div></div>`,
      )
      .join("") ||
    '<div class="empty section">Las notas guardadas aparecerán aquí.</div>'
  }`;
}
function noteValues() {
  const values = {};
  noteFields[noteKind].forEach(
    (f, i) => (values[f] = $("#note_" + i).value.trim()),
  );
  values.next = $("#noteNext").value;
  return values;
}
function saveClinicalNote(final) {
  const values = noteValues();
  if (
    final &&
    noteFields[noteKind].some(
      (f, i) => (i < 2 || noteKind === "soap") && !values[f],
    )
  )
    return notify("Completa los campos obligatorios de la nota");
  if (final) {
    recordNotes().push({
      id: uid("N-"),
      kind: noteKind,
      values,
      createdAt: new Date().toISOString(),
      author: settingsProfile().fullName,
      license: settingsProfile().license,
      locked: true,
      version: 1,
    });
    delete data.noteDrafts[pid + "-" + noteKind];
    audit("Nota de evolución registrada", pid);
  } else {
    data.noteDrafts[pid + "-" + noteKind] = values;
    save();
  }
  go("expediente");
  notify(
    final ? "Nota guardada con fecha, autor y candado" : "Borrador guardado",
  );
}
function fillNoteExample() {
  noteFields[noteKind].forEach(
    (f, i) =>
      ($("#note_" + i).value = (
        noteKind === "soap"
          ? [
              "La persona refiere haber practicado la actividad acordada.",
              "Participación y disposición observadas en esta sesión ficticia.",
              "Se revisan avances y dificultades para explorar en la próxima consulta.",
              "Continuar el plan acordado y revisar el registro de actividades.",
            ]
          : [
              "Revisar el uso de una pausa consciente.",
              "La persona comparte su experiencia con las actividades entre sesiones.",
              "Participa en la práctica y reconoce una situación cotidiana.",
              "Revisar el registro de la semana y ajustar la actividad.",
              "Completar un registro de emociones.",
              "Contenido ficticio de demostración.",
            ]
      )[i]),
  );
  notify("Ejemplo ficticio cargado; revisa antes de guardar");
}
function viewClinicalNote(id) {
  const n = recordNotes().find((n) => n.id === id);
  if (!n) return;
  modal(
    n.kind === "soap" ? "Nota SOAP" : "Nota de evolución",
    `<p>${esc(pat().name)} · ${new Date(n.createdAt).toLocaleString("es-MX")}<br>${esc(n.author)} · cédula ${esc(n.license || "de demostración")} · versión ${n.version}</p>${Object.entries(
      n.values,
    )
      .filter(([k]) => k !== "next")
      .map(
        ([k, v]) =>
          `<h3>${esc(k)}</h3><p class="preserve-lines">${esc(v || "Sin registro")}</p>`,
      )
      .join("")}`,
    `<button class="btn" onclick="closeModal()">Cerrar</button>${!n.locked ? `<button class="btn" onclick="editClinicalNote('${n.id}')">Editar nota</button>` : ""}<button class="btn primary" onclick="printClinicalNote('${id}')">Imprimir / PDF</button>`,
  );
}
function toggleNoteLock(id) {
  const n = recordNotes().find((n) => n.id === id);
  if (!n) return;
  n.locked = !n.locked;
  audit(n.locked ? "Nota bloqueada" : "Nota desbloqueada", pid);
  go("expediente");
}
function editClinicalNote(id) {
  const n = recordNotes().find((n) => n.id === id);
  if (!n || n.locked) return;
  modal(
    "Editar nota · se conserva la versión anterior",
    noteFields[n.kind]
      .map(
        (f, i) =>
          `<div class="field"><label for="editNote_${i}">${esc(f)}</label><textarea id="editNote_${i}">${esc(n.values[f])}</textarea></div>`,
      )
      .join(""),
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="updateClinicalNote('${id}')">Guardar nueva versión</button>`,
  );
}
function updateClinicalNote(id) {
  const n = recordNotes().find((n) => n.id === id);
  if (!n || n.locked) return;
  const values = { ...n.values };
  noteFields[n.kind].forEach(
    (f, i) => (values[f] = $("#editNote_" + i).value.trim()),
  );
  if (
    noteFields[n.kind].some(
      (f, i) => (i < 2 || n.kind === "soap") && !values[f],
    )
  )
    return notify("Completa los campos obligatorios");
  (n.history ??= []).push({
    version: n.version,
    values: { ...n.values },
    at: n.updatedAt || n.createdAt,
  });
  n.values = values;
  n.version++;
  n.updatedAt = new Date().toISOString();
  audit("Nueva versión de nota", pid);
  closeModal();
  go("expediente");
}
function printClinicalNote(id) {
  const n = recordNotes().find((n) => n.id === id);
  if (n)
    printPage(
      n.kind === "soap" ? "Nota SOAP" : "Nota de evolución",
      `<p>${esc(pat().name)} · ${new Date(n.createdAt).toLocaleString("es-MX")}<br>${esc(n.author)} · ${esc(n.license || "Cédula de demostración")}</p>${Object.entries(
        n.values,
      )
        .map(
          ([k, v]) =>
            `<h3>${esc(k === "next" ? "Próxima sesión" : k)}</h3><pre>${esc(v)}</pre>`,
        )
        .join(
          "",
        )}<p>Registro demostrativo · versión ${n.version} · no constituye firma electrónica.</p>`,
    );
}
const inheritedExpContent = expContent;
expContent = function () {
  if (detailPane === "notas") return clinicalNotesView("psych");
  if (detailPane === "soap16") return clinicalNotesView("soap");
  return inheritedExpContent();
};
const originalSummary = v15Summary;
v15Summary = function () {
  return (
    `<div class="record-shortcuts"><button class="btn soft" onclick="openPatientJournal()">${ico("pen", 17)} Lo que escribió el paciente</button><button class="btn" onclick="go('programas')">${ico("leaf", 17)} Programa terapéutico</button></div>` +
    originalSummary()
  );
};
// Six external instruments: capture licensed results without reproducing test booklets.
const externalTests = [
  "Inventario Clínico Multiaxial de Millon",
  "Neuropsi BREVE",
  "SCL-90-R",
  "ASSIST",
  "Inventario de Ansiedad de Beck",
  "Inventario de Depresión de Beck",
];
const inheritedPsy = c14PsyView;
c14PsyView = function () {
  const rows = data.psychometrics[pid] || [];
  return (
    inheritedPsy() +
    `<section class="card section"><div class="section-title"><h3>Registro de pruebas externas · pre / post</h3><button class="btn primary" onclick="newPsychometric()">＋ Registrar resultado</button></div><p class="muted">Registra la escala, puntuación e interpretación del profesional. No se calculan diagnósticos ni se reproducen reactivos licenciados.</p><div class="tableWrap"><table><thead><tr><th>Prueba / escala</th><th>Momento</th><th>Puntuación</th><th>Fecha</th><th>Interpretación</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${esc(r.test)}<br><small>${esc(r.subscale)}</small></td><td>${esc(r.moment)}</td><td>${r.score}</td><td>${fmtDate(r.date)}</td><td class="wrap-cell">${esc(r.interpretation)}</td></tr>`).join("") || '<tr><td colspan="5">Sin resultados externos registrados.</td></tr>'}</tbody></table></div></section>`
  );
};
function newPsychometric() {
  modal(
    "Registrar valoración psicométrica",
    `<div class="formgrid"><div class="field wide"><label for="psyTest">Prueba</label><select id="psyTest">${externalTests.map((t) => `<option>${esc(t)}</option>`).join("")}</select></div>${inputField("Subescala / índice", "psySubscale")}<div class="field"><label for="psyMoment">Momento</label><select id="psyMoment"><option>Pretratamiento</option><option>Intermedia</option><option>Postratamiento</option></select></div>${inputField("Puntuación *", "psyScore", "number")}${inputField("Fecha *", "psyDate", "date", todayISO())}<div class="field wide"><label for="psyInterpretation">Interpretación profesional *</label><textarea id="psyInterpretation"></textarea></div></div>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="savePsychometric()">Guardar resultado</button>`,
  );
}
function savePsychometric() {
  const score = Number($("#psyScore").value),
    interpretation = $("#psyInterpretation").value.trim(),
    date = $("#psyDate").value;
  if (
    $("#psyScore").value === "" ||
    !Number.isFinite(score) ||
    !date ||
    !interpretation
  )
    return notify("Completa puntuación, fecha e interpretación");
  (data.psychometrics[pid] ??= []).push({
    id: uid("PSY-"),
    test: $("#psyTest").value,
    subscale: $("#psySubscale").value,
    moment: $("#psyMoment").value,
    score,
    date,
    interpretation,
    author: settingsProfile().fullName,
    at: new Date().toISOString(),
  });
  audit("Valoración psicométrica registrada", pid);
  closeModal();
  go("expediente");
}
// Store binary files locally in IndexedDB so uploads remain usable after a reload.
function fileDB() {
  return new Promise((resolve, reject) => {
    const r = indexedDB.open("romimente-demo-files", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("files");
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}
async function putFile(id, blob) {
  const db = await fileDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(blob, id);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}
async function getFile(id) {
  const db = await fileDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files"),
      r = tx.objectStore("files").get(id);
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
    tx.oncomplete = () => db.close();
  });
}
function fileSection() {
  const files = (data.localFiles ??= []).filter((f) => f.patient === pid);
  return `<div class="section-title"><div><h2>Archivos del expediente</h2><p class="muted">Archivos ficticios conservados en este navegador, sin extraer su contenido.</p></div></div><section class="file-uploader"><div class="formgrid"><div class="field"><label for="localFile">Archivo · PDF, imagen, Word, PowerPoint o ZIP (máx. 10 MB)</label><input type="file" id="localFile" accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.ppt,.pptx,.zip"></div><div class="field"><label for="localFileType">Categoría</label><select id="localFileType"><option>Archivo previo</option><option>Kit ante las crisis</option><option>Actividad terapéutica</option><option>Valoración psicométrica</option></select></div></div><label class="flex section"><input type="checkbox" id="localFileShare">Compartir con el paciente</label><button class="btn primary section" onclick="uploadLocalFile()">Guardar archivo local</button></section><div class="section">${files.map(fileRow).join("") || '<div class="empty">Aún no hay archivos. Los documentos de admisión se encuentran en su propia pestaña.</div>'}</div>`;
}
function fileRow(f) {
  return `<div class="listitem"><div><b>${esc(f.name)}</b><br><small>${esc(f.category)} · ${Math.ceil(f.size / 1024)} KB · ${new Date(f.at).toLocaleString("es-MX")} · ${f.shared ? "Compartido" : "Interno"}</small></div><button class="btn" onclick="openLocalFile('${f.id}')">${/^image\//.test(f.type) || f.type === "application/pdf" ? "Ver archivo" : "Descargar"}</button></div>`;
}
async function uploadLocalFile() {
  const file = $("#localFile").files[0];
  if (!file) return notify("Selecciona un archivo");
  if (file.size > 10 * 1024 * 1024) return notify("El límite es de 10 MB");
  if (!/\.(pdf|png|jpe?g|webp|docx?|pptx?|zip)$/i.test(file.name))
    return notify("Formato no permitido");
  const id = uid("FILE-");
  try {
    await putFile(id, file);
    (data.localFiles ??= []).push({
      id,
      patient: pid,
      name: file.name,
      type: file.type,
      size: file.size,
      category: $("#localFileType").value,
      shared: $("#localFileShare").checked,
      at: new Date().toISOString(),
      author: role,
    });
    audit("Archivo local añadido", pid);
    go("expediente");
    notify("Archivo guardado en este navegador");
  } catch {
    notify(
      "No se pudo guardar el archivo. Revisa el espacio disponible del navegador.",
    );
  }
}
async function openLocalFile(id) {
  const f = (data.localFiles || []).find(
    (f) =>
      f.id === id &&
      (isPatient()
        ? f.patient === "PS-0001" && f.shared
        : mine().some((p) => p.id === f.patient)),
  );
  if (!f) return;
  try {
    const blob = await getFile(id);
    if (!blob)
      return notify("El archivo ya no está disponible en este navegador");
    const u = URL.createObjectURL(blob);
    if (
      /^image\/(png|jpeg|webp)$/.test(f.type) ||
      f.type === "application/pdf"
    ) {
      modal(
        esc(f.name),
        f.type === "application/pdf"
          ? `<iframe title="Vista previa de PDF" src="${u}" class="pdf-frame"></iframe><p><a class="btn" href="${u}" download="${esc(f.name)}">Descargar PDF</a></p>`
          : `<img class="file-image" alt="${esc(f.name)}" src="${u}">`,
      );
    } else {
      const a = document.createElement("a");
      a.href = u;
      a.download = f.name;
      a.click();
    }
    setTimeout(() => URL.revokeObjectURL(u), 180000);
  } catch {
    notify("No fue posible abrir el archivo");
  }
}
patientFiles = fileSection;
const inheritedDocs = documentos;
documentos = function (embedded = false) {
  if (!isPatient()) return inheritedDocs(embedded);
  return (
    header(
      "MATERIALES COMPARTIDOS",
      "Mis materiales",
      "Actividades y archivos que tu terapeuta ha publicado para ti.",
    ) +
    `<section class="card">${patientActivities()}</section><section class="card section"><h2>Archivos compartidos</h2>${
      (data.localFiles || [])
        .filter((f) => f.patient === "PS-0001" && f.shared)
        .map(fileRow)
        .join("") || '<p class="muted">Todavía no hay archivos compartidos.</p>'
    }</section>`
  );
};
const inheritedPatientKit = patientKitView;
patientKitView = function () {
  return (
    inheritedPatientKit() +
    `<section class="card section"><h2>Mi kit descargable</h2>${
      (data.localFiles || [])
        .filter(
          (f) =>
            f.patient === "PS-0001" &&
            f.shared &&
            f.category === "Kit ante las crisis",
        )
        .map(fileRow)
        .join("") ||
      '<p class="muted">Tu terapeuta puede compartir aquí un PDF, PowerPoint o ZIP personalizado.</p>'
    }</section>`
  );
};
// Voice recording is explicit, consented, and local. Nothing uploads to ROMImente.
let localRecorder = null,
  voiceStream = null,
  voiceChunks = [],
  voiceOwner = "",
  activeDictationField = "note_1",
  recognition = null;
function openVoiceRecorder() {
  const files = (data.voiceNotes || []).filter((f) => f.patient === pid);
  modal(
    "Nota de voz · expediente " + pid,
    `<p>Graba únicamente un ejemplo ficticio. El audio original se conserva en este navegador.</p><label class="flex"><input type="checkbox" id="voiceConsent">Confirmo que puedo grabar este audio y que no contiene datos reales.</label><div class="voice-status" id="voiceStatus">Listo para grabar</div><div class="btnrow"><button class="btn primary" id="recordVoice" onclick="startLocalVoice()">${ico("mic")} Comenzar grabación</button><button class="btn" id="stopVoice" disabled onclick="stopLocalVoice()">Detener y guardar</button></div><h3 class="section">Audios del expediente</h3>${files.map((f) => `<div class="listitem"><span>${new Date(f.at).toLocaleString("es-MX")}</span><button class="btn" onclick="playVoice('${f.id}')">Escuchar</button></div>`).join("") || '<p class="muted">Aún no hay grabaciones.</p>'}`,
  );
}
async function startLocalVoice() {
  if (!$("#voiceConsent")?.checked)
    return notify("Confirma el permiso para grabar");
  if (!navigator.mediaDevices?.getUserMedia)
    return notify("La grabación requiere HTTPS y un navegador compatible");
  try {
    voiceStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    voiceOwner = pid;
    voiceChunks = [];
    localRecorder = new MediaRecorder(voiceStream);
    localRecorder.ondataavailable = (e) => {
      if (e.data.size) voiceChunks.push(e.data);
    };
    localRecorder.onstop = async () => {
      voiceStream?.getTracks().forEach((t) => t.stop());
      if (!voiceChunks.length) return;
      const blob = new Blob(voiceChunks, { type: localRecorder.mimeType }),
        id = uid("VOICE-");
      try {
        await putFile(id, blob);
        (data.voiceNotes ??= []).push({
          id,
          patient: voiceOwner,
          at: new Date().toISOString(),
          type: blob.type,
        });
        audit("Nota de voz local guardada", voiceOwner);
        notify("Audio original guardado en este navegador");
        if ($("#voiceStatus"))
          $("#voiceStatus").textContent = "Grabación guardada";
        if ($("#recordVoice")) $("#recordVoice").disabled = false;
        if ($("#stopVoice")) $("#stopVoice").disabled = true;
      } catch {
        notify("No se pudo guardar la grabación");
      }
    };
    localRecorder.start();
    $("#voiceStatus").textContent = "● Grabando…";
    $("#recordVoice").disabled = true;
    $("#stopVoice").disabled = false;
  } catch {
    voiceStream?.getTracks().forEach((t) => t.stop());
    notify("No se obtuvo acceso al micrófono");
  }
}
function stopLocalVoice() {
  if (localRecorder?.state === "recording") localRecorder.stop();
  voiceStream?.getTracks().forEach((t) => t.stop());
  recognition?.stop();
}
async function playVoice(id) {
  const f = (data.voiceNotes || []).find(
    (f) => f.id === id && mine().some((p) => p.id === f.patient),
  );
  if (!f) return;
  const blob = await getFile(id);
  if (!blob) return notify("Audio no disponible");
  const u = URL.createObjectURL(blob);
  modal(
    "Escuchar nota de voz",
    `<audio controls src="${u}" style="width:100%"></audio><p>Grabación local de demostración.</p>`,
  );
  setTimeout(() => URL.revokeObjectURL(u), 180000);
}
function startDictation() {
  const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Speech)
    return notify(
      "Este navegador no ofrece dictado. Puedes grabar audio o usar el ejemplo editable.",
    );
  const target = document.getElementById(activeDictationField);
  if (!target) return notify("Selecciona un campo de la nota antes de dictar");
  modal(
    "Dictado del navegador",
    "<p>Dictará sobre el último campo seleccionado. El reconocimiento puede utilizar el servicio del proveedor de tu navegador. Usa únicamente un ejemplo ficticio.</p>",
    '<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn primary" onclick="beginDictation()">Iniciar dictado</button>',
  );
}
function beginDictation() {
  closeModal();
  const Speech = window.SpeechRecognition || window.webkitSpeechRecognition,
    target = document.getElementById(activeDictationField);
  if (!Speech || !target) return;
  recognition = new Speech();
  recognition.lang = "es-MX";
  recognition.continuous = false;
  recognition.onresult = (e) => {
    target.value +=
      (target.value ? " " : "") +
      [...e.results].map((r) => r[0].transcript).join(" ");
    notify("Dictado incorporado. Revisa la transcripción.");
  };
  recognition.onerror = () => notify("No se pudo completar el dictado");
  recognition.start();
  notify("Escuchando el dictado…");
}
const priorClose = closeModal;
closeModal = function () {
  stopLocalVoice();
  priorClose();
};
window.addEventListener("pagehide", stopLocalVoice);
// Create a broader chronological record, with date/time and note locks.
const inheritedTimeline = v15Timeline;
v15Timeline = function () {
  const additional = [
    ...recordNotes().map((n) => ({
      at: n.createdAt,
      title: n.kind === "soap" ? "Nota SOAP" : "Nota de evolución",
      body: n.locked ? "Candado cerrado" : "Editable",
    })),
    ...(data.localFiles || [])
      .filter((f) => f.patient === pid)
      .map((f) => ({ at: f.at, title: f.category, body: f.name })),
    ...(data.journal[pid]?.entries || []).map((e) => ({
      at: e.date,
      title: "Registro enviado por el paciente",
      body: e.mood,
    })),
    ...(data.psychometrics[pid] || []).map((r) => ({
      at: r.at,
      title: "Valoración psicométrica",
      body: r.test,
    })),
  ].sort((a, b) => b.at.localeCompare(a.at));
  return (
    inheritedTimeline() +
    additional
      .map(
        (e) =>
          `<div class="listitem"><div><b>${esc(e.title)}</b><br><small>${new Date(e.at).toLocaleString("es-MX")} · ${esc(e.body)}</small></div>${tag("Registrado")}</div>`,
      )
      .join("")
  );
};
// Carry profile attribution into forms and remove manual credential prompts.
const priorEnhance = enhanceForms;
enhanceForms = function () {
  priorEnhance();
  $("#pf_id")?.setAttribute("readonly", "");
  $("#pf_age")?.setAttribute("readonly", "");
  document.querySelectorAll("[data-a14],[data-f14]").forEach((el) => {
    const key = el.dataset.a14 || el.dataset.f14;
    if (/Nombre y cédula del profesional|Profesional responsable/i.test(key)) {
      el.value =
        settingsProfile().fullName +
        " · " +
        (settingsProfile().license || "Cédula de demostración");
      el.readOnly = true;
    }
  });
};
// Prototype defaults remain fictional and clinic-specific.
data.settings ??= { profiles: {} };
data.settings.profiles ??= {};
for (const r of ["psi1", "psi2"]) {
  if (!data.settings.profiles[r]) {
    data.settings.profiles[r] = defaultSettingsForRole(r);
    data.settings.profiles[r].clinic = "Clínica El Amparo";
    data.settings.profiles[r].pdfFooter =
      "Clínica El Amparo · Documento de demostración";
  }
}
save();
// Requested priority rule is explicitly a demo rule, subject to institutional validation.
function triageSuggestion(flags) {
  return (
    ["Alto", "Moderado", "Leve"].find((level) =>
      c14TriageFlags[level].some((f) => flags.includes(f)),
    ) || "Sin valorar"
  );
}
c14TriageView = function () {
  const t = c14Store().triage;
  return `<div class="c14-head"><div><h2>Triage psicológico</h2><p class="muted">Prioridad orientativa del demo. El protocolo debe validarse con la clínica.</p></div>${tag(t.level || "Sin valorar")}</div><div class="notice">El demo toma el nivel más alto de los hallazgos marcados. La clasificación requiere valoración profesional; no establece un diagnóstico.</div><section class="card section"><h3>Hallazgos observados o referidos</h3>${Object.entries(
    c14TriageFlags,
  )
    .map(
      ([level, flags]) =>
        `<h4 class="section">${level}</h4>${flags.map((f) => `<label class="triage-choice"><span>${esc(f)}</span><select class="triage-select" data-flag="${esc(f)}" aria-label="${esc(f)}" onchange="updateTriagePreview()"><option value="">Sin evaluar</option><option value="no" ${t.assessments?.[f] === "no" ? "selected" : ""}>No</option><option value="yes" ${(t.flags || []).includes(f) ? "selected" : ""}>Sí</option></select></label>`).join("")}`,
    )
    .join(
      "",
    )}<p class="triage-preview">Prioridad orientativa: <b id="triagePreview">${triageSuggestion(t.flags || [])}</b></p></section><section class="card section"><div class="field"><label for="triageDetails">Evaluación clínica y contexto *</label><textarea id="triageDetails">${esc(t.details || "")}</textarea></div><div class="field"><label for="triageActions">Acción tomada / plan de seguridad / derivación *</label><textarea id="triageActions">${esc(t.actions || "")}</textarea></div><p class="hint">Profesional: ${esc(settingsProfile().fullName)}. La fecha y hora de creación se registran al guardar.</p><div class="btnrow"><button class="btn primary" onclick="c14SaveTriage()">Guardar triage</button><button class="btn" onclick="c14PrintTriage()">Imprimir registro</button></div></section>`;
};
function updateTriagePreview() {
  const flags = [...document.querySelectorAll(".triage-select")]
    .filter((e) => e.value === "yes")
    .map((e) => e.dataset.flag);
  $("#triagePreview").textContent = triageSuggestion(flags);
}
c14SaveTriage = function () {
  const flags = [...document.querySelectorAll(".triage-select")]
      .filter((e) => e.value === "yes")
      .map((e) => e.dataset.flag),
    assessments = Object.fromEntries(
      [...document.querySelectorAll(".triage-select")].map((e) => [
        e.dataset.flag,
        e.value,
      ]),
    ),
    details = $("#triageDetails").value.trim(),
    actions = $("#triageActions").value.trim(),
    level = triageSuggestion(flags);
  if (level === "Sin valorar" || !details || !actions)
    return notify("Registra los hallazgos, contexto y acción tomada");
  const c = c14Store();
  (c.triageHistory ??= []).push(c.triage);
  c.triage = {
    level,
    flags,
    assessments,
    details,
    actions,
    reviewer: settingsProfile().fullName,
    date: todayISO(),
    createdAt: new Date().toISOString(),
  };
  pat().risk =
    level === "Alto" ? "Alto" : level === "Moderado" ? "Seguimiento" : "Bajo";
  audit("Triage registrado: " + level, pid);
  go("expediente");
  notify("Triage guardado con fecha, hora y profesional");
};
// Child history uses the fields from Historia clínica.pdf, distinct from adolescent history.
const childGroups = [
  [
    "Identificación",
    [
      "Nombre del niño(a)",
      "Institución educativa y grado",
      "Nombre de quien responde",
      "Parentesco de quien responde",
      "Teléfono de contacto",
    ],
  ],
  [
    "Motivo de consulta",
    [
      "Áreas principales de preocupación",
      "Descripción del problema observado",
      "Inicio y evolución del problema",
      "Impacto en casa y escuela",
      "Intentos previos de afrontamiento",
      "Valoraciones previas y sugerencias",
    ],
  ],
  [
    "Desarrollo y salud",
    [
      "Embarazo, parto y nacimiento",
      "Desarrollo motor y lenguaje",
      "Alimentación y control de esfínteres",
      "Antecedentes médicos y medicamentos",
      "Sueño, hábitos y uso de pantallas",
    ],
  ],
  [
    "Salud emocional y conducta",
    [
      "Cambios de ánimo observados",
      "Temores y ansiedad",
      "Conductas de autolesión o ideas de muerte referidas",
      "Violencia o acoso referidos",
      "Conducta y regulación emocional",
    ],
  ],
  [
    "Familia y escuela",
    [
      "Personas con quienes vive",
      "Antecedentes familiares",
      "Relaciones con cuidadores y hermanos",
      "Crianza, límites y acuerdos",
      "Aprendizaje y desempeño escolar",
      "Relaciones con pares y docentes",
      "Acontecimientos significativos",
    ],
  ],
  [
    "Expectativas y plan",
    [
      "Fortalezas e intereses",
      "Expectativas de los cuidadores",
      "Expectativas del niño(a)",
      "Objetivos acordados",
      "Plan inicial y seguimiento",
    ],
  ],
];
hc16Schema.child = childGroups.map(([title, fields], i) => ({
  id: "CH" + i,
  title,
  fields: fields.map((label, j) => ({
    id: "CH" + i + "_" + j,
    label,
    type: "long",
    required: false,
    options: [],
    hint: "Registrar información referida y observada; puede completarse por consulta.",
  })),
}));
hc16Active.child = "CH0";
hc16Mode = function () {
  return age(pat()) < 12 ? "child" : age(pat()) < 18 ? "teen" : "adult";
};
const originalHCRoot = hc16Root;
hc16Root = function () {
  const r = originalHCRoot();
  r.child ??= {};
  return r;
};
const originalHCView = hc16View;
hc16View = function () {
  let html = originalHCView();
  if (hc16Mode() === "child")
    html = html
      .replaceAll("Adolescentes", "Niñez")
      .replaceAll("Fuente: Word", "Fuente: Historia clínica.pdf")
      .replace(
        "Formulario de la Historia_Clinica_Psicologica_Tipos_de_Campo(1).docx, con todas las secciones y los tipos de respuesta especificados. Los apartados no pertinentes pueden quedar sin contestar.",
        "Historia de desarrollo, contexto familiar y escolar, salud y expectativas. Información referida por cuidadores y observación profesional.",
      );
  return html;
};
// Tie the patient's calendar to the session area.
const oldSessions = patientSessions;
patientSessions = function () {
  return (
    `<section class="card" style="margin-bottom:20px"><h3>Citas de este expediente</h3>${
      data.appointments
        .filter((a) => a.people.includes(pid))
        .map(
          (a) =>
            `<div class="listitem"><span><b>${fmtDate(a.date)} · ${a.time}</b><br><small>${esc(a.type)} · ${esc(a.format)} · ${esc(a.status)}</small></span><button class="btn" onclick="showAppointment('${a.id}')">Ver cita</button></div>`,
        )
        .join("") || '<p class="muted">Sin citas registradas.</p>'
    }</section>` + oldSessions()
  );
};
// Author and exact creation time come from the active demo profile.
const saveAdmissionOriginal = c14SaveAdmission;
c14SaveAdmission = function () {
  saveAdmissionOriginal();
  const doc = data.docs[pid]?.at(-1);
  if (doc) {
    doc.createdAt = new Date().toISOString();
    doc.author = settingsProfile().fullName;
    doc.license = settingsProfile().license;
    doc.locked = true;
    audit("Documento de admisión registrado", pid);
  }
};
const dischargeOriginal = c14SaveDischarge;
c14SaveDischarge = function () {
  const before = c14Store().discharges.length;
  dischargeOriginal();
  if (c14Store().discharges.length > before) {
    const d = c14Store().discharges.at(-1);
    d.createdAt = new Date().toISOString();
    d.author = settingsProfile().fullName;
    d.license = settingsProfile().license;
    audit("Alta de servicio documentada; expediente abierto", pid);
  }
};
const oldTriagePrint = c14PrintTriage;
c14PrintTriage = function () {
  if (!c14Store().triage.createdAt)
    return notify("Guarda el triage antes de imprimir");
  oldTriagePrint();
};
// A reusable activity snapshot is visible to its recipient when explicitly shared.
const oldActivityView = c14ActivitiesView;
c14ActivitiesView = function () {
  return (
    oldActivityView() +
    `<section class="card section"><h3>Respuestas del paciente</h3>${
      (data.tasks[pid] || [])
        .filter((t) => t.response)
        .map(
          (t) =>
            `<article class="journal-entry"><b>${esc(t.name)}</b><p>${esc(t.response)}</p><small>${new Date(t.responseAt).toLocaleString("es-MX")}</small></article>`,
        )
        .join("") || '<p class="muted">Aún no hay respuestas enviadas.</p>'
    }</section>`
  );
};
const oldPatientActivities = patientActivities;
patientActivities = function () {
  return (
    oldPatientActivities() +
    `<div class="section">${(data.tasks["PS-0001"] || []).map((t, i) => (t.templateSnapshot && c14Visible(t) ? `<button class="btn" onclick="viewAssignedTemplate(${i})">Ver material: ${esc(t.name)}</button>` : "")).join("")}</div>`
  );
};
function viewAssignedTemplate(i) {
  const t = data.tasks["PS-0001"]?.[i];
  if (!t?.templateSnapshot || !c14Visible(t)) return;
  modal(esc(t.name), tplPreview(t.templateSnapshot, "Andrea López Martínez"));
}
// Print an up-to-date report, including the new structured notes.
printReport = function () {
  const p = pat();
  if (!mine().some((x) => x.id === p.id)) return;
  printPage(
    "Resumen del expediente " + p.id,
    `<p><b>${esc(p.name)}</b> · ${age(p)} años · ${esc(p.id)}</p><p>Estado: ${esc(p.status)} · Motivo: ${esc(p.reason)}</p><h2>Notas de evolución</h2>${
      recordNotes()
        .map(
          (n) =>
            `<h3>${n.kind === "soap" ? "SOAP" : "Psicológica"} · ${new Date(n.createdAt).toLocaleString("es-MX")}</h3>${Object.entries(
              n.values,
            )
              .map(([k, v]) => `<p><b>${esc(k)}</b><br>${esc(v)}</p>`)
              .join("")}`,
        )
        .join("") || "<p>Sin notas guardadas.</p>"
    }<h2>Valoraciones externas</h2>${(data.psychometrics[pid] || []).map((r) => `<p>${esc(r.test)} · ${esc(r.moment)} · ${r.score}<br>${esc(r.interpretation)}</p>`).join("") || "<p>Sin valoraciones externas.</p>"}<h2>Programa</h2><p>${esc(data.programs[pid]?.kind || "Sin asignar")}</p><p>Profesional: ${esc(settingsProfile().fullName)}</p>`,
  );
};
// Session drafts feed the active psychological note form.
sendToNote = function (id) {
  const s = (data.sessionRecords[pid] || []).find((x) => x.id === id);
  if (!s) return;
  s.draft = $("#sessionTranscript").value;
  data.noteDrafts ??= {};
  data.noteDrafts[pid + "-psych"] = {
    "Objetivo de la sesión": s.goal || "",
    "Resumen de la sesión": s.draft,
  };
  save();
  closeModal();
  v15DetailsChoice("evolucion", "notas");
  notify("Apuntes incorporados al borrador para revisión");
};
// Data-grounded assistant simulation reads the same records shown elsewhere.
askRomi = function () {
  const q = $("#aiQuestion").value.trim();
  if (!q) return;
  const p = mine().find((p) => p.id === aiSelected) || mine()[0];
  if (!p) return;
  const n = data.clinicalNotes?.[p.id] || [],
    t = data.tasks[p.id] || [],
    e = Object.values(data.evaluations).filter((e) => e.patient === p.id),
    external = data.psychometrics[p.id] || [];
  let a;
  const text = q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (/informe|borrador/.test(text))
    a = `BORRADOR DE DEMOSTRACIÓN · Requiere revisión profesional\n${p.id} · ${p.name}\nMotivo: ${p.reason || "Sin registrar"}\nNotas guardadas: ${n.length}\nActividades realizadas: ${t.filter((t) => t.done).length}/${t.length}\nValoraciones: ${e.length + external.length}\nPrograma: ${data.programs[p.id]?.kind || "Sin asignar"}\nCompletar integración clínica y firma.`;
  else if (/tarea|actividad|pendiente/.test(text))
    a =
      t
        .map(
          (t) =>
            `${t.name}: ${t.done ? "realizada" : "pendiente"}${t.response ? "\nRespuesta: " + t.response : ""}`,
        )
        .join("\n\n") || "No hay actividades registradas.";
  else if (/evalua|prueba/.test(text))
    a =
      [
        ...e.map((e) => `${instDisplay(e.instrument)} · ${e.moment}`),
        ...external.map((e) => `${e.test} · ${e.moment}: ${e.score}`),
      ].join("\n") || "No hay resultados registrados.";
  else if (/sesion|nota|resum/.test(text))
    a =
      n
        .slice(-3)
        .map(
          (n) =>
            `${new Date(n.createdAt).toLocaleString("es-MX")}\n${Object.entries(
              n.values,
            )
              .filter(([k]) => k !== "next")
              .map(([k, v]) => k + ": " + v)
              .join("\n")}`,
        )
        .join("\n\n") ||
      "No hay notas de evolución registradas. Puedes crear una desde el expediente.";
  else if (/plan|proxim/.test(text))
    a =
      `Programa: ${data.programs[p.id]?.kind || "Sin asignar"}\nPróximas citas: ` +
      data.appointments
        .filter(
          (a) =>
            a.people.includes(p.id) &&
            a.status === "Programada" &&
            a.date >= todayISO(),
        )
        .map((a) => a.date + " " + a.time)
        .join("; ");
  else
    a =
      "En este demo puedo recuperar notas, actividades, evaluaciones y próximos pasos. Las respuestas son resúmenes por reglas, sin un modelo de IA conectado.";
  $("#aiConversation").insertAdjacentHTML(
    "beforeend",
    `<div class="aiBubble user">${esc(q)}</div><div class="aiBubble"><small>SIMULACIÓN · DATOS DEL EXPEDIENTE</small><p class="preserve-lines">${esc(a)}</p></div>`,
  );
  $("#aiQuestion").value = "";
  $("#aiConversation").scrollTop = $("#aiConversation").scrollHeight;
};
renderAccountModal = function () {
  const s = settingsProfile();
  modal(
    "Mi cuenta de demostración",
    `<section class="card"><h3>${esc(s.fullName)}</h3><p>${esc(s.email)}</p><p>Las conexiones externas, contraseñas y autenticación real corresponden a la siguiente fase.</p><button class="btn" onclick="closeModal();cfgTab='perfil';go('config')">Editar perfil</button></section><section class="section"><h3>Datos de esta demostración</h3><p>El restablecimiento borra los registros ficticios guardados en este navegador. No existe una cuenta clínica real que eliminar.</p><button class="btn danger" onclick="resetDemo()">Restablecer datos del demo</button></section>`,
  );
};
previewPdfSettings = function () {
  const s = settingsProfile();
  printPage(
    "Formato institucional de ejemplo",
    `<h2>${esc(s.clinic)}</h2><p>Profesional: ${esc(s.fullName)}</p><h3>Registro de emociones</h3><p>Material de ejemplo para revisar en consulta.</p><p>${esc(s.pdfFooter)}</p>`,
  );
};
