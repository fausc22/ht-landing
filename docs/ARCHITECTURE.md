# Arquitectura y estructura — HT SEMILLAS

Sitio institucional multipage en Next.js (App Router) + TypeScript, orientado a conversión y SEO. Sin SPA, sin lógica de sistema ni contextos globales innecesarios.

---

## 1. Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Root layout: metadata SEO, fuentes, Header + Footer
│   ├── page.tsx                # Home
│   ├── globals.css
│   ├── productos/
│   │   └── page.tsx            # Productos (semillas, alfalfa, agroquímicos)
│   ├── nosotros/
│   │   └── page.tsx            # Quiénes somos, ubicación
│   └── contacto/
│       └── page.tsx            # Formulario y datos de contacto
├── components/
│   ├── ui/                     # Reutilizables, sin lógica de negocio
│   │   └── Container.tsx       # Ancho máximo y padding consistente
│   ├── layout/
│   │   ├── Header.tsx          # Navbar + logo
│   │   └── Footer.tsx          # Links, copyright, ubicación
│   └── sections/               # Secciones de página (por bloque de contenido)
│       ├── Hero.tsx
│       ├── ValueProposition.tsx
│       ├── Process.tsx
│       ├── CTA.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── lib/
│   ├── utils.ts                # cn() y helpers mínimos
│   └── site.ts                 # Datos del sitio: nav, nombre, ubicación (single source of truth)
└── (opcional) types/           # Solo si aparecen tipos compartidos
```

### Decisiones clave

| Decisión | Justificación |
|----------|----------------|
| **Rutas en `app/`** | App Router: cada carpeta = ruta. Buen SEO (HTML por página), sin client router pesado. |
| **`components/ui`** | Solo componentes reutilizables (Container, botones). Evita mezclar con secciones. |
| **`components/sections`** | Un componente por bloque de contenido (Hero, CTA, etc.). Fácil de encontrar y cambiar. |
| **`lib/site.ts`** | Navbar y footer usan los mismos links y nombre del sitio. Un solo lugar para cambiar. |
| **Sin `context/`** | No hay estado global (usuario, carrito). Evita complejidad innecesaria. |
| **Sin `hooks/` por ahora** | Si más adelante se necesita lógica reutilizable (ej. formulario), se agrega. |
| **Metadata en `layout.tsx` y por página** | SEO por ruta con `generateMetadata` o `metadata` export. |

### Estilos

- **Tailwind** en los componentes (clases utilitarias).
- **globals.css**: variables CSS (`:root`), fuentes, reset mínimo. Sin CSS-in-JS ni contextos de tema si no se pide.
- Paleta y tipografía se pueden centralizar en `globals.css` si el diseño lo requiere.

### Metadata / SEO

- **Root layout**: `metadata` base (title template, description por defecto, openGraph básico).
- **Cada página**: exportar `metadata` o `generateMetadata` con title y description propios.
- `lang="es"` en `<html>`.
- Títulos H1 únicos por página.

---

## 2. Secciones del sitio y navegación

### Navbar (Header)

| Link       | Ruta        | Rol |
|-----------|-------------|-----|
| Inicio    | `/`         | Home: propuesta de valor y conversión. |
| Productos | `/productos`| Semillas (DM, alfalfa), agroquímicos. |
| Nosotros  | `/nosotros` | Quiénes somos, dónde estamos (Huinca Renanco). |
| Contacto  | `/contacto` | Formulario y datos de contacto. |

### Páginas

| Página     | Ruta        | Rol |
|------------|-------------|-----|
| **Home**   | `/`         | Generar confianza y conversión: hero, propuesta de valor, proceso/confianza, CTA, contacto. |
| **Productos** | `/productos` | Catálogo o categorías: híbridos Don Mario, alfalfa, agroquímicos. SEO por categoría. |
| **Nosotros**  | `/nosotros`  | Historia, ubicación (Huinca Renanco, Córdoba), por qué elegir HT SEMILLAS. |
| **Contacto**  | `/contacto`  | Formulario de consulta + teléfono/dirección/redes. Página de conversión directa. |

### SEO y UX

- URLs claras y en español (`/productos`, `/nosotros`, `/contacto`).
- Un H1 por página, coherente con el título.
- Navegación estable entre todas las páginas (navbar + footer).
- En móvil: menú colapsable (hamburguesa) con los mismos links.

---

## 3. Diseño de la Home (estructura de componentes)

La Home se piensa como una sola página con bloques en orden de lectura y conversión.

| Orden | Componente           | Contenido |
|-------|----------------------|-----------|
| 1     | **Hero**             | Título principal, subtítulo, CTA principal (ej. “Consultar productos” o “Contactar”). Imagen de fondo o placeholder. |
| 2     | **ValueProposition** | Por qué HT SEMILLAS: híbridos Don Mario, alfalfa (AlphaTec, Magna, Hybriforce), agroquímicos al mejor precio. 3–4 bloques o cards. |
| 3     | **Process**          | Confianza: cómo trabajamos, ubicación (Huinca Renanco), años o experiencia. Texto breve + imagen/placeholder. |
| 4     | **CTA**              | Llamado a la acción: “¿Listo para tu próxima campaña?” → botón a Contacto o WhatsApp. |
| 5     | **Contact**          | Formulario de consulta + datos de contacto. Cierre de la página con conversión. |

No es una SPA: la Home es un único document con secciones. Los links del navbar llevan a otras rutas (`/productos`, `/nosotros`, `/contacto`) o a anclas dentro de la home si se desea (ej. `/#contacto`).

---

## 4. Implementación inicial

- Layout base con Header + contenido + Footer.
- Metadata en español para HT SEMILLAS (title, description).
- Componentes de la Home con placeholders claros para imágenes y textos.
- Navegación y datos del sitio en `lib/site.ts`.
- Páginas `/productos`, `/nosotros`, `/contacto` creadas con contenido mínimo (placeholder) para que el navbar y el footer funcionen.

El código debe ser limpio, tipado y fácil de escalar sin abstracciones prematuras.
