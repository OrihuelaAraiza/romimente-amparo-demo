import { test, expect } from "@playwright/test";
async function login(page, role = "psi1") {
  await page.goto("/");
  await page.locator("#role").selectOption(role);
  await page.getByRole("button", { name: "Entrar al demo" }).click();
  await expect(page.locator("#page h1").first()).toBeVisible();
}
async function switchRole(page, role) {
  await page.evaluate(() => logout());
  await page.locator("#role").selectOption(role);
  await page.getByRole("button", { name: "Entrar al demo" }).click();
}
async function route(page, r) {
  await page.evaluate((r) => go(r), r);
}
async function record(page, tab = "resumen") {
  await page.evaluate((t) => {
    openP("PS-0001");
    v15Select(t);
  }, tab);
}
test("all clinician and patient views render without JavaScript errors", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await login(page);
  for (const r of [
    "inicio",
    "agenda",
    "pacientes",
    "programas",
    "evaluaciones",
    "biblioteca",
    "plantillas",
    "resultados",
    "sesiones",
    "cobros",
    "indicadores",
    "config",
    "uso",
    "social",
    "bitacora",
  ]) {
    await route(page, r);
    await expect(page.locator("#page")).not.toBeEmpty();
  }
  for (const t of [
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
  ]) {
    await record(page, t);
    await expect(page.locator("#page")).not.toBeEmpty();
  }
  await switchRole(page, "patient");
  for (const r of [
    "inicio",
    "diario",
    "programas",
    "agenda",
    "evaluaciones",
    "resultados",
    "documentos",
    "sesiones",
    "cobros",
    "privacidad",
    "config",
    "kit",
  ]) {
    await route(page, r);
    await expect(page.locator("#page")).not.toBeEmpty();
  }
  expect(errors).toEqual([]);
});
test("journal drafts remain out of clinical view and sent entries persist", async ({
  page,
}) => {
  await login(page, "patient");
  await route(page, "diario");
  await page.getByRole("button", { name: "Bien", exact: true }).click();
  await page.locator("#journalText").fill("Borrador privado de prueba");
  await page
    .getByRole("button", { name: "Guardar borrador", exact: true })
    .click();
  await switchRole(page, "psi1");
  await record(page);
  await page
    .getByRole("button", { name: "Lo que escribió el paciente" })
    .click();
  await expect(page.getByRole("dialog")).not.toContainText(
    "Borrador privado de prueba",
  );
  await page.keyboard.press("Escape");
  await switchRole(page, "patient");
  await route(page, "diario");
  await expect(page.locator("#journalText")).toHaveValue(
    "Borrador privado de prueba",
  );
  await page.getByRole("button", { name: "Enviar a mi expediente" }).click();
  await page.reload();
  await page.locator("#role").selectOption("psi1");
  await page.getByRole("button", { name: "Entrar al demo" }).click();
  await record(page);
  await page
    .getByRole("button", { name: "Lo que escribió el paciente" })
    .click();
  await expect(page.getByRole("dialog")).toContainText(
    "Borrador privado de prueba",
  );
  await page.getByRole("button", { name: "Marcar como leído" }).click();
  await expect(page.locator("#toast")).toHaveText(
    "Registros marcados como leídos",
  );
});
test("notes validate, survive reload, and preserve earlier versions", async ({
  page,
}) => {
  await login(page);
  await record(page, "evolucion");
  await page
    .getByRole("button", { name: "Guardar nota de evolución", exact: true })
    .click();
  await expect(page.locator("#toast")).toContainText("obligatorios");
  await page.getByRole("button", { name: "Cargar ejemplo" }).click();
  await page
    .getByRole("button", { name: "Guardar nota de evolución", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Abrir candado" }),
  ).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: "Entrar al demo" }).click();
  await record(page, "evolucion");
  await page.getByRole("button", { name: "Abrir candado" }).click();
  await page.getByRole("button", { name: "Ver nota", exact: true }).click();
  await page.getByRole("button", { name: "Editar nota", exact: true }).click();
  await page.locator("#editNote_0").fill("Objetivo revisado");
  await page.getByRole("button", { name: "Guardar nueva versión" }).click();
  await page.getByRole("button", { name: "Ver nota", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("Objetivo revisado");
  await expect(page.getByRole("dialog")).toContainText("versión 2");
  expect(
    await page.evaluate(
      () => recordNotes()[0].history[0].values["Objetivo de la sesión"],
    ),
  ).toBe("Revisar el uso de una pausa consciente.");
});
test("SOAP remains distinct from psychological notes", async ({ page }) => {
  await login(page);
  await record(page, "evolucion");
  await page.getByRole("button", { name: "Nota SOAP · Excel" }).click();
  await page.getByRole("button", { name: "Cargar ejemplo" }).click();
  await page
    .getByRole("button", { name: "Guardar nota de evolución", exact: true })
    .click();
  await page.getByRole("button", { name: "Ver nota", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("S · Subjetivo");
  await expect(page.getByRole("dialog")).toContainText(
    "P · Plan de intervención",
  );
});
test("13-session programs publish selected material without exposing clinician notes", async ({
  page,
}) => {
  await login(page);
  await route(page, "programas");
  await expect(page.locator(".program-session")).toHaveCount(13);
  await page.locator(".program-session").nth(1).click();
  await page
    .locator("#programNotes")
    .fill("Comentario reservado del profesional");
  await page
    .locator("#programInstructions")
    .fill("Practicar actividad ficticia de valores");
  await page.locator("#programShared").check();
  await page.locator("#programStatus").selectOption("Realizada");
  await page
    .getByRole("button", { name: "Guardar sesión", exact: true })
    .click();
  await switchRole(page, "patient");
  await route(page, "programas");
  await page.locator(".program-session").nth(1).click();
  await expect(page.getByRole("dialog")).toContainText(
    "Practicar actividad ficticia de valores",
  );
  await expect(page.getByRole("dialog")).not.toContainText(
    "Comentario reservado del profesional",
  );
});
test("uploaded file content persists and is only shared when selected", async ({
  page,
}) => {
  await login(page);
  await record(page, "archivos");
  await page
    .locator("#localFile")
    .setInputFiles({
      name: "kit-demo.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4\n1 0 obj <</Type /Catalog>> endobj\n%%EOF"),
    });
  await page.locator("#localFileType").selectOption("Kit ante las crisis");
  await page.locator("#localFileShare").check();
  await page.getByRole("button", { name: "Guardar archivo local" }).click();
  await expect(page.locator("#toast")).toContainText("Archivo guardado");
  await page.reload();
  await page.locator("#role").selectOption("patient");
  await page.getByRole("button", { name: "Entrar al demo" }).click();
  await route(page, "kit");
  await expect(page.locator("#page")).toContainText("kit-demo.pdf");
  await page.getByRole("button", { name: "Ver archivo", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("kit-demo.pdf");
  await expect(page.locator("iframe")).toHaveAttribute("src", /^blob:/);
});
test("social request creates one linked patient in the clinician directory", async ({
  page,
}) => {
  await login(page);
  await page
    .getByRole("button", { name: "Proyecto social", exact: true })
    .first()
    .click();
  await page
    .getByRole("button", { name: "Registrar solicitud" })
    .first()
    .click();
  await page.locator("#intakeName").fill("Persona Social Demo");
  await page.locator("#intakeDob").fill("2000-01-01");
  await page.locator("#intakeEmail").fill("persona@example.test");
  await page.locator("#intakeConsent").check();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Registrar solicitud", exact: true })
    .click();
  await page.getByRole("button", { name: "Vincular a consulta" }).click();
  await page
    .getByRole("button", { name: "Abrir expediente", exact: true })
    .click();
  await expect(page.locator("#page")).toContainText("Persona Social Demo");
  await expect(page.locator("#page")).toContainText(
    "Vinculación desde proyecto social",
  );
  expect(
    await page.evaluate(
      () =>
        data.patients.filter((p) => p.name === "Persona Social Demo").length,
    ),
  ).toBe(1);
});
test("triage follows the highest selected demo priority and keeps attribution", async ({
  page,
}) => {
  await login(page);
  await record(page, "triage");
  await page
    .getByRole("combobox", {
      name: "Malestar emocional o disforia",
      exact: true,
    })
    .selectOption("yes");
  await expect(page.locator("#triagePreview")).toHaveText("Leve");
  await page
    .getByRole("combobox", {
      name: "Agitación psicomotora importante",
      exact: true,
    })
    .selectOption("yes");
  await expect(page.locator("#triagePreview")).toHaveText("Alto");
  await page
    .locator("#triageDetails")
    .fill("Observación ficticia del contexto");
  await page.locator("#triageActions").fill("Acción de prueba documentada");
  await page
    .getByRole("button", { name: "Guardar triage", exact: true })
    .click();
  expect(await page.evaluate(() => c14Store().triage.reviewer)).toBe(
    "Elena Ríos",
  );
  expect(await page.evaluate(() => c14Store().triage.createdAt)).toBeTruthy();
});
test("clinical discharge does not close the patient record", async ({
  page,
}) => {
  await login(page);
  await record(page, "evolucion");
  await page
    .getByRole("button", { name: "Alta psicológica", exact: true })
    .click();
  await page
    .locator('[data-a14="Intervenciones realizadas y objetivos trabajados"]')
    .fill("Intervención ficticia concluida");
  await page
    .getByRole("button", { name: "Guardar alta de psicología", exact: true })
    .click();
  await expect(page.locator("#page")).toContainText("Alta de servicio");
  expect(await page.evaluate(() => pat().status)).toBe("Activo");
  expect(await page.evaluate(() => Boolean(pat().closed))).toBe(false);
  expect(await page.evaluate(() => c14Store().discharges.length)).toBe(1);
});
test("mobile has no viewport overflow in key flows and role navigation works", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await login(page);
  for (const r of [
    "inicio",
    "pacientes",
    "programas",
    "social",
    "agenda",
    "uso",
  ]) {
    await route(page, r);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      r,
    ).toBe(true);
  }
  await switchRole(page, "patient");
  await route(page, "diario");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Bien", exact: true }).click();
  await page.locator("#journalText").fill("Registro en móvil");
  await page
    .getByRole("button", { name: "Guardar borrador", exact: true })
    .click();
  await expect(page.locator("#toast")).toContainText("Borrador guardado");
});
test("clinical profiles filter their assigned patients and patient portal cannot navigate to clinical records", async ({
  page,
}) => {
  await login(page, "psi2");
  await route(page, "pacientes");
  await expect(page.locator("#page")).toContainText("Mateo Torres");
  await expect(page.locator("#page")).not.toContainText("Andrea López");
  await page.evaluate(() => openP("PS-0001"));
  await expect(page.locator("#toast")).toContainText("Sin acceso");
  await switchRole(page, "patient");
  await route(page, "expediente");
  await expect(page.locator("#page")).toHaveAttribute("data-view", "inicio");
});
test("new patient and age-specific history save and reload", async ({
  page,
}) => {
  await login(page);
  await page.getByRole("button", { name: "Nuevo paciente" }).click();
  await page.locator("#npName").fill("Niña");
  await page.locator("#npSurname").fill("Demostración");
  await page.locator("#npDob").fill("2018-01-01");
  await page
    .getByRole("button", { name: "Guardar paciente", exact: true })
    .click();
  await expect(page.locator("#page")).toContainText("Niña Demostración");
  const id = await page.evaluate(() => pid);
  await page.evaluate(() => v15Select("historia"));
  await expect(page.locator("#page")).toContainText("Niñez");
  await page
    .locator("#hc16Form textarea")
    .first()
    .fill("Dato infantil ficticio");
  await page
    .getByRole("button", { name: "Guardar borrador", exact: true })
    .click();
  await page.reload();
  await page.getByRole("button", { name: "Entrar al demo" }).click();
  await page.evaluate((id) => {
    openP(id);
    v15Select("historia");
  }, id);
  await expect(page.locator("#hc16Form textarea").first()).toHaveValue(
    "Dato infantil ficticio",
  );
});
test("appointment creation links to record, rejects overlap, and patient confirms", async ({
  page,
}) => {
  await login(page);
  await route(page, "agenda");
  await page
    .getByRole("button", { name: "Agendar cita", exact: false })
    .first()
    .click();
  await page.locator('[name="apptPerson"][value="PS-0001"]').check();
  await page.locator("#apptDate").fill("2026-11-15");
  await page.locator("#apptTime").fill("14:00");
  await page
    .getByRole("button", { name: "Guardar y preparar invitaciones" })
    .click();
  await expect(page.getByRole("dialog")).toContainText("2026-11-15 14:00");
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "Agendar cita", exact: false })
    .first()
    .click();
  await page.locator('[name="apptPerson"][value="PS-0001"]').check();
  await page.locator("#apptDate").fill("2026-11-15");
  await page.locator("#apptTime").fill("14:15");
  await page
    .getByRole("button", { name: "Guardar y preparar invitaciones" })
    .click();
  await expect(page.locator("#toast")).toContainText("superpone");
  await record(page, "sesiones");
  await expect(page.locator("#page")).toContainText("15 nov 2026");
  await switchRole(page, "patient");
  await route(page, "agenda");
  await page
    .locator("tr")
    .filter({ hasText: "2026-11-15" })
    .getByRole("button", { name: "Confirmar", exact: true })
    .click();
  await expect(
    page.locator("tr").filter({ hasText: "2026-11-15" }),
  ).toContainText("Confirmada");
});
test("activity can be published, answered, and reviewed in the record", async ({
  page,
}) => {
  await login(page);
  await record(page, "recursos");
  await page.locator("#act14Name").fill("Actividad de prueba");
  await page
    .locator("#act14Instructions")
    .fill("Escribir una reflexión ficticia");
  await page.locator("#act14Vis").selectOption("ahora");
  await page
    .getByRole("button", { name: "Guardar actividad", exact: true })
    .click();
  await switchRole(page, "patient");
  await route(page, "documentos");
  await page
    .locator("article")
    .filter({ hasText: "Actividad de prueba" })
    .getByRole("button", { name: "Escribir respuesta" })
    .click();
  await page.locator("#taskResponse").fill("Esta es mi respuesta ficticia");
  await page.getByRole("button", { name: "Enviar respuesta" }).click();
  await switchRole(page, "psi1");
  await record(page, "recursos");
  await expect(page.locator("#page")).toContainText(
    "Esta es mi respuesta ficticia",
  );
});
test("assigned GAD questionnaire completes and result persists in clinician view", async ({
  page,
}) => {
  await login(page, "patient");
  await route(page, "evaluaciones");
  await page
    .getByRole("button", { name: /Responder|Continuar/ })
    .first()
    .click();
  await expect(page.locator("#instrumentForm")).toBeVisible();
  for (let i = 0; i < 7; i++)
    await page.locator('input[name="q' + i + '"][value="1"]').check();
  await page
    .getByRole("button", { name: "Guardar respuestas y calcular resultado" })
    .click();
  await expect(page.locator("#toast")).toContainText("Valoración guardada");
  await switchRole(page, "psi1");
  await record(page, "evaluaciones");
  await expect(page.locator("#page")).toContainText("Completado");
  expect(
    await page.evaluate(
      () =>
        Object.values(data.evaluations).find((e) => e.instrument === "GAD7")
          .score,
    ),
  ).toBe(7);
});
test("payment simulation changes outstanding balance without collecting card data", async ({
  page,
}) => {
  await login(page);
  await route(page, "cobros");
  await page
    .locator("tr")
    .filter({ hasText: "CO-1001" })
    .getByRole("button", { name: "Ver detalle" })
    .click();
  await page.locator("#addPaid").fill("200");
  await page.getByRole("button", { name: "Guardar abono de prueba" }).click();
  await expect(page.getByRole("dialog")).toContainText("$500.00");
  await expect(page.getByRole("dialog")).toContainText("Parcial");
  await expect(page.getByRole("dialog")).not.toContainText("CVV");
  await expect(page.locator("#toast")).toContainText("No se procesó dinero");
});
