# HT Semillas

Sitio institucional bilingüe de HT Semillas S.A., desarrollado con Next.js App Router.

## Desarrollo

```bash
npm run dev
npm run lint
npm run build
```

Las rutas públicas usan prefijo de idioma: `/es` y `/en`. Las URLs del sitio anterior redirigen a su equivalente en español.

## Contacto

El formulario envía mediante el Route Handler `src/app/api/contact/route.ts` y Resend. Hasta configurar las variables documentadas en `.env.example`, responde con estado `503` y no transmite los datos ingresados.

El motivo y el contexto pueden llegar desde los CTA comerciales mediante parámetros de URL. El endpoint valida el payload, limita su tamaño, aplica honeypot, tiempo mínimo de completado y un límite básico por IP. Este último funciona como defensa por instancia; si el volumen o el spam lo requieren, deberá complementarse con almacenamiento distribuido o un desafío administrado.

Los eventos previstos para GA4 son `contact_whatsapp_click`, `contact_email_click`, `contact_phone_click`, `contact_form_start`, `contact_form_submit`, `generate_lead` y `contact_form_error`. El formulario no debe probarse con datos reales hasta confirmar la bandeja receptora y las variables del servicio.

Nunca se deben agregar correos personales, teléfonos no aprobados ni credenciales al repositorio.

## Novedades

Los artículos están en `src/content/news/es` y `src/content/news/en`. Cada MDX requiere este frontmatter:

```yaml
title: "Título"
excerpt: "Resumen"
date: "AAAA-MM-DD"
category: "Categoría"
image: "/images/ruta.jpg"
published: false
```

Un borrador debe conservar `published: false`. El contenido inglés se crea solamente desde una versión española previamente aprobada y se revisa antes de publicarlo.

## Contenido pendiente

- Correo corporativo definitivo.
- WhatsApp y teléfonos autorizados.
- Política de privacidad.
- PDFs o enlaces definitivos de fabricantes para complementar el catálogo interno.
- Confirmación de instalaciones, capacidades y derechos de fotografías.
- Información internacional autorizada para publicación.

No se deben publicar datos bancarios, clientes, precios, volúmenes, negociaciones ni proyecciones provenientes del memorándum privado.

## Catálogos

El catálogo navegable de Semillas e Insumos se define en `src/lib/catalog.ts`. Solo contiene familias de productos confirmadas y siempre deriva la disponibilidad al equipo comercial.

Los futuros PDFs o enlaces de fabricantes deben incorporarse únicamente cuando estén autorizados. No se deben crear botones de descarga sin un recurso vigente ni publicar marcas, variedades o condiciones comerciales por inferencia.

## Marca

El archivo oficial se preserva en `public/brand/logo-ht-original.jpg`. Los derivados web están organizados en `public/brand/variants/`:

- `logo-ht-primary.jpg`: versión completa y optimizada para superficies amplias.
- `logo-ht-mark.png`: isotipo recortado para header, hero, favicon e iconos.

Los derivados conservan la geometría y los colores del original. No deben redibujarse, recolorearse ni reemplazarse mediante generación automática.

## Fotografías de alfalfa

Los derivados de `public/images/alfalfa/` provienen del registro fotográfico autorizado de Alfazal. Se recortaron y optimizaron para web conservando intactos los archivos fuente. Su uso no debe presentar esas instalaciones como propiedad de HT Semillas ni ampliar el alcance comercial sin aprobación.
