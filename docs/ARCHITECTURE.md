# Arquitectura

## Alcance

Sitio institucional híbrido de HT Semillas. No contiene infraestructura para Mahonega, CMS, panel administrativo, CRM ni escenas 3D.

## Capas

- `src/app/[locale]`: experiencia localizada y páginas comerciales.
- `src/app/api/contact`: recepción y envío seguro de consultas.
- `src/components`: layout, secciones, contacto, novedades, analítica y UI.
- `src/components/processing`: experiencia específica de procesamiento y coordinación operativa.
- `src/components/alfalfa`: experiencia específica de alfalfa, nutrición animal y galería autorizada de Alfazal.
- `src/components/international`: experiencia específica para oportunidades de comercio internacional.
- `src/content/news`: novedades MDX por idioma.
- `src/lib/content.ts`: contenido estructural ES/EN.
- `src/lib/catalog.ts`: catálogo bilingüe de familias de productos confirmadas.
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
- Los CTA trasladan motivo y contexto a Contacto; el formulario normaliza esos parámetros contra listas permitidas y WhatsApp adapta su mensaje a la intención del usuario.
- Los canales comerciales comparten una taxonomía de medición y el endpoint incorpora validación, límites de carga, honeypot, control temporal y rate limiting básico por instancia.
- WhatsApp, correo, teléfono y dirección oficiales están centralizados en `site.ts` (con override por env).
- El movimiento es progresivo y respeta `prefers-reduced-motion`.
- Los catálogos se muestran dentro del sitio mediante un diálogo accesible y conducen a consultas con contexto comercial. PDFs y enlaces externos son ampliaciones de datos, no una dependencia de la interfaz.

## Identidad visual

- `public/brand/logo-ht-original.jpg` conserva el activo entregado.
- `public/brand/variants/logo-ht-primary.jpg` se usa cuando debe verse la firma completa.
- `public/brand/variants/logo-ht-mark.png` se usa en tamaños pequeños acompañado por el nombre escrito en HTML.
- Los iconos y la imagen Open Graph se derivan del activo oficial sin reinterpretar la marca.
- El mapa regional es un placeholder SVG hasta contar con el recurso definitivo.
- Los títulos de pestaña usan el formato `HT Semillas | {sección}`.

## Contenido sensible

Los datos del memorándum financiero no forman parte de la configuración ni del contenido público. La titularidad de instalaciones, capacidades exactas, clientes, operaciones, precios y volúmenes requiere aprobación antes de cambiar la redacción prudente actual.
