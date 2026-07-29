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
- Catálogo final de productos y marcas.
- Confirmación de instalaciones, capacidades y derechos de fotografías.
- Información internacional autorizada para publicación.

No se deben publicar datos bancarios, clientes, precios, volúmenes, negociaciones ni proyecciones provenientes del memorándum privado.
