import { site, type Locale } from "@/lib/site";

export type ContactIntent =
  | "general"
  | "home"
  | "company"
  | "solutions"
  | "processing"
  | "alfalfa"
  | "international"
  | "contact"
  | "buy"
  | "supply";

const messages: Record<Locale, Record<ContactIntent, string>> = {
  es: {
    general: "Hola, llegué desde el sitio de HT Semillas y quisiera realizar una consulta comercial.",
    home: "Hola, escribo desde la home de HT Semillas. Quisiera hablar con el equipo comercial.",
    company: "Hola, vi la página Empresa de HT Semillas y me gustaría conocer más sobre la compañía.",
    solutions: "Hola, consulto por soluciones (semillas / insumos) de HT Semillas.",
    processing: "Hola, consulto por capacidades de procesamiento y acondicionamiento.",
    alfalfa: "Hola, consulto por alfalfa y nutrición animal.",
    international: "Hola, consulto por comercio internacional / exportación.",
    contact: "Hola, escribo desde la página de Contacto de HT Semillas.",
    buy: "Hola, quiero consultar por compra de semillas o insumos.",
    supply: "Hola, quiero ofrecer producción a HT Semillas.",
  },
  en: {
    general: "Hello, I visited the HT Semillas website and would like to make a business enquiry.",
    home: "Hello, I’m writing from the HT Semillas homepage and would like to speak with the commercial team.",
    company: "Hello, I reviewed the Company page and would like to learn more about HT Semillas.",
    solutions: "Hello, I’m enquiring about HT Semillas solutions (seeds / supplies).",
    processing: "Hello, I’m enquiring about processing and conditioning capabilities.",
    alfalfa: "Hello, I’m enquiring about alfalfa and animal nutrition.",
    international: "Hello, I’m enquiring about international trade / export.",
    contact: "Hello, I’m writing from the HT Semillas Contact page.",
    buy: "Hello, I’d like to enquire about sourcing seeds or supplies.",
    supply: "Hello, I’d like to offer production to HT Semillas.",
  },
};

export function whatsappHref(locale: Locale, intent: ContactIntent = "general") {
  if (!site.whatsapp) return null;
  const text = messages[locale][intent] ?? messages[locale].general;
  return `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export function intentFromPath(pathname: string): ContactIntent {
  if (pathname.includes("soluciones") || pathname.includes("solutions")) return "solutions";
  if (pathname.includes("procesamiento") || pathname.includes("processing")) return "processing";
  if (pathname.includes("alfalfa")) return "alfalfa";
  if (pathname.includes("comercio") || pathname.includes("international")) return "international";
  if (pathname.includes("empresa") || pathname.includes("company")) return "company";
  if (pathname.includes("contacto") || pathname.includes("contact")) return "contact";
  if (pathname === "/es" || pathname === "/en") return "home";
  return "general";
}

/** Visible placeholders — never invent real-looking contact data. */
export const contactPlaceholders = {
  whatsapp: "[PENDIENTE: WhatsApp oficial]",
  email: "[PENDIENTE: correo corporativo]",
  phone: "[PENDIENTE: teléfono oficial]",
  address: "[PENDIENTE: dirección autorizada]",
} as const;
