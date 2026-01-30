/**
 * Datos del sitio: navegación, marca, ubicación.
 * Single source of truth para Header, Footer y metadata.
 */

export const site = {
  name: "HT SEMILLAS",
  tagline: "Semillas y agroquímicos en Huinca Renanco, Córdoba",
  location: "Huinca Renanco, Córdoba",
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const footerLinks = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
