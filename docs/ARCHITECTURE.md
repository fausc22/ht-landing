# Arquitectura

## Alcance

Sitio institucional híbrido de HT Semillas. No contiene infraestructura para Mahonega, CMS, panel administrativo, CRM ni escenas 3D.

## Capas

- `src/app/[locale]`: experiencia localizada y páginas comerciales.
- `src/app/api/contact`: recepción y envío seguro de consultas.
- `src/components`: layout, secciones, contacto, novedades, analítica y UI.
- `src/content/news`: novedades MDX por idioma.
- `src/lib/content.ts`: contenido estructural ES/EN.
- `src/lib/site.ts`: marca, rutas, idiomas y canales confirmados.
- `src/lib/metadata.ts`: metadata, canonicals y alternates.
- `src/proxy.ts`: normalización de rutas localizadas.

## Decisiones

- Español es la fuente editorial.
- Ambos idiomas usan prefijo explícito.
- La raíz `/` negocia idioma por cookie `NEXT_LOCALE` y, si no hay preferencia, por `Accept-Language` (es* → ES; resto → EN).
- El selector de idioma persiste la elección en cookie y conserva la página equivalente.
- Las variantes de ruta incorrectas redirigen a la URL canónica.
- Las novedades se validan antes de publicarse.
- El formulario no cae a `mailto`: falla de forma explícita si el servicio no está configurado.
- WhatsApp, correo y teléfono no se renderizan mientras no exista un valor aprobado (placeholders evidentes `[PENDIENTE: …]`).
- El movimiento es progresivo y respeta `prefers-reduced-motion`.
- El mapa regional es un placeholder SVG hasta contar con el recurso definitivo.

## Contenido sensible

Los datos del memorándum financiero no forman parte de la configuración ni del contenido público. La titularidad de instalaciones, capacidades exactas, clientes, operaciones, precios y volúmenes requiere aprobación antes de cambiar la redacción prudente actual.
