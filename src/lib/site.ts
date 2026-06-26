/**
 * Datos del sitio: navegación, marca, ubicación.
 * Single source of truth para Header, Footer y metadata.
 * Estructura según plan: Home, Producción de Alfalfa, Productos & Servicios, Nosotros, Contacto.
 */

export const site = {
  name: "HT Semillas",
  tagline: "Insumos agropecuarios y comercialización de alfalfa",
  location: "Huinca Renanco, Córdoba",
  region: "sur de Córdoba, La Pampa y zona núcleo",
  email: "contacto@htsemillas.com.ar",
  url: "https://htsemillas.com.ar",
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/produccion-alfalfa", label: "Negocio alfalfa" },
  { href: "/productos-servicios", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/produccion-alfalfa", label: "Negocio alfalfa" },
  { href: "/productos-servicios", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const productGroups = [
  {
    id: "alfalfa",
    title: "Semillas de alfalfa",
    summary:
      "Variedades para sistemas de corte frecuente, pastoreo directo o planteos mixtos, con foco en persistencia, sanidad y calidad forrajera.",
    image: "/images/productos-alfalfa-variedades.jpeg",
    items: [
      "Hybriforce 3600",
      "AlphaTec 621",
      "AlphaTec 821",
      "AlphaTec 921",
      "Magna 868",
      "Magna 995",
    ],
  },
  {
    id: "maiz-soja",
    title: "Híbridos y semillas Don Mario",
    summary:
      "Materiales para planificar la campaña con genética reconocida, calidad de semilla y alternativas para distintos ambientes.",
    image: "/images/productos-maiz-donmario.jpeg",
    items: [
      "Maíz DM 2738 MGRR2/RR2",
      "Maíz DM 2773 VT3PRO",
      "Maíz DM 2789 VIPTERA3",
      "Sojas DM Enlist",
    ],
  },
  {
    id: "agroquimicos",
    title: "Agroquímicos",
    summary:
      "Herbicidas e insecticidas para barbecho, preemergencia y control de malezas, con cotización por lista y disponibilidad.",
    image: "/images/productos-herbicidas.jpeg",
    items: [
      "S-Metolacloro",
      "Terbyne / Terbutilazina",
      "Tordon 24K / Picloram",
      "Zidua Pack",
      "Dual Gold",
      "Fierce",
      "Finesse WG",
      "Equip",
      "Cletodim",
      "Haloxifop",
      "Glifosato",
    ],
  },
] as const;

export const alfalfaSteps = [
  {
    title: "Diagnóstico del lote",
    text: "Elegir suelos profundos, bien drenados y con pH compatible. Conviene arrancar con análisis de suelo para ajustar fósforo, azufre y correcciones antes de sembrar.",
  },
  {
    title: "Implantación prolija",
    text: "La cama de siembra debe quedar firme, nivelada y libre de malezas. La semilla se ubica superficial, con buena distribución e inoculación cuando corresponde.",
  },
  {
    title: "Manejo de cortes",
    text: "El objetivo es cortar con equilibrio entre rendimiento, calidad y persistencia. Los planteos intensivos pueden lograr varios cortes anuales si el clima, el stand y la nutrición acompañan.",
  },
  {
    title: "Henificación y logística",
    text: "La calidad comercial depende de cortar a tiempo, orear sin perder hoja, enfardar con humedad adecuada y entregar volumen homogéneo.",
  },
] as const;
