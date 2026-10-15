# Alcance del MVP de ROMImente para Clínica El Amparo

Fecha: 15 de octubre de 2026. Versión: 0.1. Estado: propuesta preparada para revisión institucional.

Esta propuesta define la operación del proyecto social, los permisos por función, los documentos requeridos por etapa y la revisión de la declaración de uso. Permite preparar el siguiente bloque de desarrollo sin atribuir a la clínica decisiones que todavía no ha aprobado. El responsable institucional queda **pendiente de asignación**, conforme a la indicación del solicitante.

Las reglas de este documento son requisitos propuestos para el MVP; no describen controles de seguridad ya implementados. La demo conserva perfiles simulados y almacenamiento local.

## Base del acuerdo

| Tema | Base existente | Decisión propuesta |
| --- | --- | --- |
| Áreas de trabajo | El encargo distingue proyecto social y expedientes electrónicos. | Mantener dos áreas conectadas mediante una derivación registrada. |
| Documentación clínica | Los formatos aportados definen admisión, historia por edad, notas, actividades, valoraciones y alta. | Organizar su cumplimentación por etapa, con borradores y pendientes visibles. |
| Notas | El demo separa nota psicológica y SOAP. | Mantener ambas; la coordinación define cuál corresponde a cada servicio, sin exigir duplicar la misma consulta. |
| Duración | Las fuentes distinguen contrato de 12 semanas y módulos ACT/DBT de 13 sesiones. | Mantener ambas duraciones independientes. |
| Alta y cierre | El alta de servicio es distinta del cierre administrativo. | Registrar ambos eventos por separado y conservar el historial. |
| Proyecto social y permisos | No hay reglas institucionales completas en la trazabilidad disponible. | Adoptar las propuestas siguientes solo después de revisión institucional. |

La base documental es [Requisitos y trazabilidad](REQUISITOS.md), consolidada durante la preparación del demo. Los estados, permisos, campos mínimos y condiciones de avance que se detallan aquí son propuestas de producto, no obligaciones legales ni protocolos clínicos aprobados.

## Proyecto social

### Objetivo y límites

Organizar iniciativas comunitarias, recibir solicitudes de participación y facilitar la vinculación con atención psicológica cuando corresponda. Cada iniciativa deberá definir objetivo, población, modalidad, lugar, fechas, cupo, responsable y criterios de acceso antes de abrir inscripciones.

El primer MVP cubrirá registro, contacto, lista de espera, asistencia y derivación. Quedan fuera la asignación automática de becas, la selección automatizada por condición clínica y las campañas masivas. La clínica debe definir población objetivo, costos o gratuidad, criterios de admisión y oferta inicial; no se presuponen a partir del demo.

### Flujo propuesto

| Etapa | Responsable | Resultado y condición de avance |
| --- | --- | --- |
| Preparar iniciativa | Responsable social | Completa los datos de la iniciativa; coordinación valida su apertura. |
| Registrar solicitud | Responsable social o recepción autorizada | Crea folio, iniciativa, nombre, rango de edad y un medio de contacto. Registra la autorización de contacto prevista por la clínica. No solicita historia clínica. |
| Contactar y revisar | Responsable social | Registra fecha, responsable y resultado del contacto; aplica los criterios publicados de la iniciativa. |
| Inscribir o dejar en espera | Responsable social | Asigna un lugar disponible o registra espera y motivo. No excede el cupo ni decide prioridad clínica. |
| Registrar participación | Responsable social | Registra asistencia y seguimiento operativo. |
| Proponer atención clínica | Responsable social | Registra aceptación de la derivación y envía a coordinación los datos mínimos necesarios. |
| Vincular expediente | Coordinación clínica | Revisa coincidencias de identidad, vincula un expediente existente o autoriza uno nuevo y asigna profesional. No copia automáticamente comentarios sociales a notas clínicas. |
| Cerrar solicitud | Responsable social | Registra resultado, fecha y motivo: participación concluida, derivación aceptada, desistimiento o no admisión. |

Estados de solicitud: recibida, en contacto, en espera, inscrita, derivación pendiente, vinculada y cerrada. La vinculación no equivale a una consulta atendida. Una solicitud cerrada puede reabrirse con motivo registrado y sin borrar su historial.

El módulo social muestra únicamente el estado de la derivación que necesita para seguimiento. No permite abrir historias, diagnósticos, notas, resultados psicométricos ni diario. Ante una situación que requiera valoración clínica, permite solicitar intervención al profesional designado; el protocolo y los tiempos de respuesta deben ser definidos por la clínica.

Indicadores iniciales: solicitudes por estado, lugares disponibles, asistencia y derivaciones aceptadas. Los reportes generales no incluyen narrativas clínicas. Las exportaciones identificables se reservan a quienes tengan esa función expresamente autorizada.

## Perfiles y permisos

Los perfiles representan funciones; una persona podrá tener más de una únicamente mediante asignación explícita. El administrador técnico no recibe acceso clínico por administrar cuentas. Los permisos deberán comprobarse en el servidor para cada registro y archivo.

| Función | Alcance permitido | Restricciones principales |
| --- | --- | --- |
| Coordinación clínica | Asignar profesionales, supervisar expedientes autorizados, revisar documentos y registrar altas o reaperturas según atribuciones. | La supervisión debe estar asignada y registrada; no modifica silenciosamente notas firmadas por otro profesional. |
| Psicología | Consultar expedientes asignados; elaborar historia, notas, valoraciones, actividades, materiales y alta de servicio. | No accede a pacientes ajenos ni administra cuentas. Comparte contenido con el paciente de forma explícita. |
| Recepción y administración | Datos de identificación y contacto necesarios, agenda, confirmaciones, comprobación del estado documental y registro administrativo de pagos. | No lee narrativas clínicas, respuestas psicométricas, diario ni archivos clínicos. Ver que un documento está completo no habilita leerlo. |
| Responsable social | Gestionar iniciativas, solicitudes, asistencia y seguimiento de derivaciones autorizadas. | No accede al expediente clínico ni decide diagnósticos o prioridad clínica. |
| Paciente | Consultar sus citas y materiales publicados; enviar diario y actividades; consultar documentos habilitados. | No ve notas internas, registros ajenos ni administra permisos. Solo sus entradas enviadas pasan a la vista profesional. |
| Administración técnica | Gestionar cuentas, recuperación de acceso y configuración técnica; consultar eventos técnicos sin contenido clínico. | Sin lectura habitual de expedientes. Cualquier acceso de soporte a contenido requiere un procedimiento independiente por definir. |

Reglas comunes propuestas:

- Denegar el acceso que no esté concedido expresamente, incluida la descarga por enlace directo.
- Registrar autor, fecha y acción en cambios relevantes de documentos, asignaciones, permisos, exportaciones y reaperturas.
- Permitir editar borradores propios. Al finalizar una nota, conservar la versión; las correcciones posteriores serán adendas identificadas.
- Al reasignar un paciente, retirar el acceso del profesional anterior salvo una autorización de continuidad registrada.
- El alta de servicio no borra el expediente ni produce el cierre administrativo. Una reapertura registra responsable y motivo.
- Los borradores del diario permanecen privados para el paciente. Una entrada enviada conserva su versión compartida; las correcciones no sustituyen silenciosamente lo ya entregado.
- La entrega de copias completas del expediente se gestiona mediante una solicitud institucional; no se confunde con la publicación de material terapéutico en el portal.
- No habilitar acceso automático de tutores a información de menores. La clínica debe definir y aprobar identidad, representación y alcance de ese acceso antes de incorporar ese flujo al piloto.

Estas reglas no autorizan acceso clínico real en la demo actual. La conservación, eliminación, exportación y acceso excepcional requieren políticas institucionales antes de uso operativo.

## Formularios por etapa

“Requerido” significa requerido por esta propuesta para completar una etapa en el sistema. Se podrán guardar borradores incompletos. El sistema mostrará el motivo de un pendiente; no tomará decisiones sobre la atención clínica. Cualquier excepción a la secuencia documental deberá tener responsable, motivo y seguimiento.

| Momento | Documento o registro | Regla propuesta de completitud | Responsable |
| --- | --- | --- | --- |
| Crear registro de paciente | Identificación básica | Identificador interno, nombre, fecha de nacimiento y contacto; revisar posibles duplicados. No exigir correo si existe otro medio de contacto. | Recepción o psicología |
| Completar admisión | Entrevista inicial | Motivo de consulta, datos solicitados por el formato aplicable, fecha y autor. Diferenciar “no informado”, “no aplica” y dato pendiente. | Psicología |
| Formalizar ingreso al tratamiento | Consentimiento y aviso de privacidad | Registrar versión presentada, aceptación o estado pendiente, fecha e identidad de quien interviene; mecanismo definitivo sujeto a revisión institucional. | Psicología; recepción verifica estado |
| Formalizar condiciones del servicio | Contrato ambulatorio y convenio de costo | Requeridos cuando correspondan al servicio. Una exención o gratuidad se registra con motivo y autorización, no omitiendo el documento sin explicación. | Administración y responsable clínico |
| Completar valoración inicial | Historia clínica por edad | Utilizar el formato de niñez, adolescencia o adultez que defina la clínica; registrar autor y fecha de finalización. Confirmar institucionalmente los cortes de edad. | Psicología |
| Documentar cada consulta atendida | Nota psicológica o SOAP | Paciente, fecha de consulta, autor, tipo de nota, campos del formato seleccionado y seguimiento. No requerir ambos tipos por defecto. | Profesional que atiende |
| Aplicar evaluación | Registro psicométrico | Instrumento, fecha, momento de evaluación, puntuación e interpretación profesional; versión o subescala cuando corresponda. Solo exigible si se aplicó. | Psicología |
| Asignar ACT o DBT | Plan y registro de sesión | Programa, sesión, fecha, modalidad, profesional y material publicado cuando aplique. No aplicar automáticamente a todos los pacientes. | Psicología |
| Asignar actividad o kit | Actividad y material compartido | Objetivo, contenido, fecha y destinatario; estado de entrega y respuesta si corresponde. | Psicología y paciente para su respuesta |
| Registrar valoración de riesgo | Registro de valoración y actuación | Contexto, valoración profesional, acción tomada, fecha y responsable conforme al protocolo que apruebe la clínica. La regla automática del demo no es un criterio clínico aprobado. | Psicología |
| Finalizar servicio | Alta de psicología | Motivo, síntesis y recomendaciones conforme al formato aportado, fecha y profesional responsable. | Psicología; revisión según política clínica |
| Cerrar administrativamente | Registro de cierre | Motivo, fecha, responsable y pendientes identificados. No sustituye el alta ni elimina documentos. | Coordinación o administración autorizada |

La firma, la representación de menores, los criterios de suficiencia clínica y los plazos de finalización de notas quedan sujetos a definición institucional. No se establecen aquí nuevas obligaciones normativas.

## Revisión de la declaración de uso

Se conserva [la declaración actual](DECLARACION-DE-USO.txt) como borrador para la demostración. Su aprobación no autoriza por sí sola utilizar datos clínicos reales ni convierte las simulaciones en servicios conectados.

| Función de revisión | Qué debe revisar | Persona designada | Estado |
| --- | --- | --- | --- |
| Responsable institucional de Clínica El Amparo | Alcance, uso autorizado, responsables y versión aceptada. | Pendiente de asignación | Pendiente |
| Coordinación clínica | Flujo asistencial, documentos, permisos clínicos, menores y protocolo de riesgo. | Pendiente de asignación | Pendiente |
| Responsable de privacidad o asesoría jurídica designada | Textos institucionales, tratamiento de datos, consentimientos y condiciones de uso. | Pendiente de asignación | Pendiente |
| Responsable técnico | Correspondencia entre lo declarado y lo implementado, accesos, almacenamiento, respaldos e integraciones. | Pendiente de confirmación | Pendiente |

Secuencia de revisión: coordinación clínica y responsable técnico revisan sus apartados; privacidad o asesoría jurídica revisa los textos aplicables; el responsable institucional acepta la versión final o devuelve observaciones. Registrar nombre, función, fecha, versión, observaciones y decisión de cada revisión. No atribuir aprobaciones a MJBN, Kevin o David por haber sido mencionados en el encargo.

## Decisiones para confirmar con la clínica

| Decisión | Propuesta preparada | Quién confirma | Estado |
| --- | --- | --- | --- |
| Oferta del proyecto social | Iniciativas con inscripción, asistencia y derivación; sin selección clínica automática. Definir población, criterios, costos, cupos y responsable por iniciativa. | Responsable institucional y responsable social | Pendiente |
| Permisos | Aprobar la matriz anterior y asignar las personas que desempeñarán cada función. | Responsable institucional y coordinación clínica | Pendiente |
| Documentos | Aprobar obligatoriedad por etapa, tipo de nota por servicio, plazos y excepciones; confirmar cortes de edad. | Coordinación clínica | Pendiente |
| Menores y riesgo | Definir representación, visibilidad del portal, protocolo de actuación y responsables de respuesta. | Coordinación clínica y revisión de privacidad | Pendiente |
| Declaración de uso | Nombrar revisores y aprobar una versión vinculada al alcance efectivo del software. | Responsable institucional | Pendiente de asignación |

El alcance se considerará cerrado cuando estas decisiones tengan responsable, respuesta y fecha registrados. Hasta entonces esta versión permite preparar el trabajo técnico, pero no representa aprobación institucional.

## Criterios de aceptación para el siguiente desarrollo

1. Una solicitud social se registra y deriva sin duplicar un expediente existente; quien la gestiona no puede leer información clínica.
2. Recepción agenda una consulta y consulta pendientes documentales sin abrir notas, historias o diario.
3. Un profesional accede únicamente a pacientes asignados; la coordinación solo supervisa los que tiene autorizados.
4. El paciente recibe exclusivamente materiales publicados y puede enviar una actividad desde otro dispositivo; un borrador privado no aparece en la vista profesional.
5. La finalización de una nota conserva autoría y versión; una corrección posterior es identificable.
6. El alta deja disponible el expediente según permisos y no cambia por sí sola su estado administrativo.
7. Los documentos incompletos pueden guardarse como borrador y muestran qué falta antes de marcar la etapa como completa.
8. El registro de decisiones identifica la versión aprobada y a sus responsables; mientras falte aprobación, conserva el estado pendiente.

Estas condiciones se verificarán durante la implementación del MVP con cuentas y datos ficticios. No se dan por cumplidas por existir controles visuales en el demo.
