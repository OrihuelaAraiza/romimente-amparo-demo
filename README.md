# ROMImente · Clínica El Amparo

Demo navegable del expediente digital de psicología y una propuesta de proyecto social. Adaptado del HTML V16 proporcionado, las especificaciones y formatos de Drive, las seis capturas y el audio de 15:22 del 29 de septiembre de 2026. Se revisaron también los repositorios Brevemente_Front y Romimente_Platform como referencias de roles, organización clínica y documentos.

**Solo datos ficticios.** No es un sistema autorizado para atención clínica. Los perfiles son simulados y todo el estado se conserva en el navegador: `localStorage` para registros e IndexedDB para archivos y audios. No hay autenticación real, servidor clínico ni sincronización entre equipos. La selección de perfil y los candados son comportamientos de interfaz, no controles de seguridad.

## Ejecutar

Node.js 22 o posterior y npm.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

## Probar

```sh
npx playwright install chromium
npm test
```

La suite abre un navegador real y verifica navegación, persistencia, separación visual de perfiles, diario, notas versionadas, programas, archivos, solicitudes sociales, triage demostrativo, alta sin cierre, móviles, nuevos pacientes, agenda, actividades, cuestionarios y pagos simulados. Las comprobaciones locales no prueban seguridad clínica ni funcionamiento en dispositivos físicos.

## Recorrido sugerido

1. Entrar como Elena Ríos. Consultar el dashboard, abrir a Andrea y recorrer las hojas del expediente.
2. Guardar una nota psicológica y una SOAP; revisar versiones y candado.
3. Abrir Recursos, asignar una actividad y elegir cuándo publicarla. En Archivos, cargar un documento ficticio y compartirlo.
4. Cambiar al perfil Andrea López. Escribir en Mi diario, guardar un borrador y después enviarlo. Responder una actividad.
5. Volver a Elena. Abrir “Lo que escribió el paciente” y revisar las respuestas en Recursos.
6. Asignar ACT o DBT, registrar una sesión y compartir material. Ambos módulos tienen 13 sesiones; el contrato ambulatorio conserva la duración de 12 semanas indicada en su fuente.
7. Usar Proyecto social para registrar una solicitud y vincularla a un nuevo expediente.
8. Consultar la Declaración de uso, descargarla o imprimirla a PDF.

## Implementado en el demo

- Identidad ROMImente adaptada a Clínica El Amparo; escritorio y móvil; reloj con zona America/Mexico_City.
- Dos perfiles profesionales y un portal de paciente de demostración.
- Pacientes, admisión con versiones, consentimiento, privacidad, contrato ambulatorio y convenio de costo.
- Historias diferenciadas para adultos, adolescentes y niñez; contexto familiar y genograma básico.
- Notas psicológicas y SOAP separadas; autor y fecha automáticos; versiones anteriores y candados reversibles.
- Agenda individual/grupal, prevención de traslapes, confirmación por paciente, texto de invitación y enlaces Zoom suministrados por el profesional.
- Diario, tarjeta diaria, borradores, envíos al profesional, tareas y respuestas.
- ACT y DBT por sesión, guías provenientes de los materiales, registro de aplicación, modalidad y publicación selectiva.
- Cuestionarios incluidos en el prototipo y registro profesional pre/post de seis pruebas externas. No se reproducen cuadernillos licenciados.
- Archivos locales hasta 10 MB, vista previa PDF/imagen y descarga de Word/PowerPoint/ZIP. Kit descargable por paciente.
- Grabación local de notas de voz con consentimiento explícito; dictado opcional del navegador. El dictado puede usar el servicio del proveedor del navegador y no está garantizado en todos los dispositivos.
- Clasificación orientativa de triage con la regla de prioridad del audio, etiquetada como protocolo de demo por validar; registro de contexto y acción tomada.
- Alta de servicio independiente del cierre administrativo, resultados, pagos simulados, indicadores y bitácora local.
- Asistente por reglas que recupera los registros del demo. No hay un modelo de IA conectado.
- Declaración de uso imprimible y descargable, como borrador institucional.

## Fase 2 e integraciones pendientes

Autenticación e identidad reales; permisos y aislamiento por paciente en servidor; almacenamiento clínico, cifrado y respaldos; sincronización multiusuario; auditoría inmutable; firma aplicable; protocolos de menores y retención; revisión institucional/jurídica; pasarela de pagos y conciliación mediante webhooks; Zoom OAuth/API; mensajería transaccional; IA/transcripción de producción con consentimiento y acuerdos de tratamiento de datos.

El audio final indica que la entrega inmediata es visual y permite diferir las funciones complejas. El alcance operativo del proyecto social no estaba detallado: sus iniciativas y flujo de solicitudes son una propuesta marcada como tal.

## Estructura

- `index.html`: punto de entrada estático.
- `public/assets/core.js`: comportamiento original del prototipo, normalizado y corregido.
- `public/assets/platform.js`: identidad, navegación, dashboard, diario, privacidad y declaración.
- `public/assets/workflows.js`: programas, proyecto social, notas, archivos, voz y conexiones entre flujos.
- `public/assets/programs.js`: guías ACT/DBT adaptadas de los documentos aportados.
- `public/assets/base.css` y `platform.css`: estilos originales y ajustes de la plataforma.
- `tests/demo.spec.js`: pruebas de recorridos en Chromium.

El build de Vite copia los recursos estáticos. Se mantienen scripts clásicos porque el prototipo utiliza manejadores declarados en HTML. No se conectan los servicios Azure ni las credenciales de los repositorios de referencia. El audio, la transcripción de trabajo y los archivos originales de Drive no se incorporan al repositorio.

## Fuentes

- [Carpeta compartida](https://drive.google.com/drive/folders/1QZb1vFWtcMp8ePfzzDUxSROlFvUyru9r).
- [Brevemente_Front](https://github.com/OrihuelaAraiza/Brevemente_Front).
- [Romimente_Platform](https://github.com/OrihuelaAraiza/Romimente_Platform).
- HTML local `index (4).html`, correspondiente a Maquetado en Drive.
- Audio WhatsApp de 2026-09-29 15:29:38, transcrito localmente para revisar el encargo. Las dudas de reconocimiento se contrastaron con los formatos escritos; no se publica su transcripción.

Consultar `docs/REQUISITOS.md` para la trazabilidad de los recursos y límites de la entrega.
