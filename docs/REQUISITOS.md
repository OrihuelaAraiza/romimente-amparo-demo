# Requisitos y trazabilidad

Material consultado el 5 de octubre de 2026. Las instrucciones contenidas en documentos y audio se utilizaron como especificaciones del producto; no como autorización para conectar servicios externos o transmitir información clínica.

| Fuente | Aplicación en el demo |
| --- | --- |
| HTML V16 de Maquetado | Base del expediente, agenda, evaluaciones, repertorio, editor de actividades y ajustes. Se separó en recursos mantenibles, se retiraron funciones duplicadas y se corrigieron manejadores de botones. |
| Expediente clínico psicológica | Secuencia de admisión, historia por edad, entrevista familiar, nota, actividades, kit y alta. |
| HC adultos | Campos y tipos originales de ficha, antecedentes heredofamiliares, personales, patológicos y psicológicos; campos condicionales. |
| HC adolescentes | Historia personal, desarrollo, contexto, antecedentes y síntesis; se conserva el esquema del prototipo que incorpora este documento. |
| Historia clínica.pdf | Historia de niñez y contexto familiar/escolar. |
| Formato del expediente de psicología.pdf | Orden documental: consentimiento, privacidad, entrevista, convenio, contrato, notas, actividades y psicometría. |
| Entrevista inicial de admisiones.pdf | Entrevista inicial de admisión y responsable de registro. |
| Contrato de tratamiento ambulatorio | Documento de admisión versionado; programa descrito en la fuente como 12 semanas. |
| Convenio de confidencialidad del costo | Formato editable en admisión; pendiente de aprobación institucional. |
| Nota de evolución psicología.pdf y esquema del Excel | Notas psicológicas y SOAP separadas con autoría, fecha, hora y versiones. |
| Registro de valoraciones psicométricas | Resultados pre/intermedio/post de Millon, Neuropsi BREVE, SCL-90-R, ASSIST, Beck ansiedad y Beck depresión. Captura de subescala, puntuación e interpretación del profesional; sin corrección automática de pruebas externas. |
| Módulo de habilidades ACT y sesiones ACT.pdf | 13 sesiones con guía, registro de aplicación y publicación selectiva de material. |
| Módulo de habilidades DBT y sesiones DBT.pdf | 13 sesiones con modalidad individual/grupal y bloques Adicciones/TCA. |
| Kit ante las crisis DBT.pdf | Siete áreas de kit y entrega de documentos personalizados descargables. |
| Alta de servicio de psicología.pdf | Alta documentada separada del cierre administrativo del expediente. |
| Seis capturas del directorio raíz | Diario, tarjeta diaria, borrador privado en UI, envío al expediente, “Lo que escribió el paciente”, voz, materiales compartidos y kit accesible. |
| Audio WhatsApp 29/09/2026 | Reloj/fecha, planes, consultas y seguimiento; formularios conectados; genograma básico; archivos reales locales; regla orientativa de triage; autoría automática; notas y candados; pagos/Zoom simulados; editor de actividades; entrega visual inmediata y fase posterior. |
| Brevemente_Front y Romimente_Platform | Revisión de estructura clínica, rutas por rol, sesiones, documentos y generación de reportes; sin reutilizar conexiones a sus servidores. |
| Mensaje del encargo | Dos áreas, Consulta y Proyecto social; Clínica El Amparo; declaración de uso; nuevo repositorio y despliegue Vercel. |

## Interpretaciones explícitas

- Proyecto social: el material no define reglas operativas. Se incluye una propuesta navegable de iniciativas, solicitudes y vinculación clínica, identificada como propuesta.
- El audio menciona una duración tentativa; los documentos especifican contrato de 12 semanas y módulos de 13 sesiones. Se conservan esos conceptos por separado.
- El HTML llamaba “SOAP” a un formato que mostraba campos de nota psicológica. El demo separa ambos formatos.
- Los documentos descargados y las notas permiten impresión mediante el navegador; “PDF” usa Guardar como PDF del diálogo de impresión.
- Un archivo Word/PowerPoint/ZIP se descarga; PDF e imágenes cuentan con vista previa local. No hay conversión ofimática en servidor.
- Las clasificaciones de triage son demostrativas; deben revisarse con el protocolo institucional. No se afirma validación clínica.
- En esta entrega el diario, los materiales privados y los perfiles se separan en la interfaz; los datos están en el mismo navegador. No es aislamiento de seguridad.
- Las firmas, notificaciones, IA, pagos, cuentas y conexiones externas están identificados como simulaciones o fase 2. No se realizó ninguna transacción ni mensaje externo.
