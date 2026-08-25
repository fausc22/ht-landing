import { site, whatsappDigits, type Locale } from "@/lib/site";

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

export type FormIntent = "buy" | "supply" | "processing" | "alfalfa" | "international" | "institutional" | "other";

export const contactContexts = [
  "seeds",
  "crop-inputs",
  "processing",
  "processing-domestic",
  "processing-export",
  "alfalfa-buy",
  "alfalfa-supply",
  "animal-nutrition",
  "alfalfa-export",
  "international-sourcing",
  "international-distribution",
  "international-partnership",
] as const;

export type ContactContext = (typeof contactContexts)[number];

export function formIntentFromParam(raw: string | null): FormIntent {
  if (["comprar", "buy"].includes(raw ?? "")) return "buy";
  if (["ofrecer-produccion", "supply"].includes(raw ?? "")) return "supply";
  if (["internacional", "international"].includes(raw ?? "")) return "international";
  if (["procesamiento", "processing"].includes(raw ?? "")) return "processing";
  if (raw === "alfalfa") return "alfalfa";
  if (["institucional", "institutional"].includes(raw ?? "")) return "institutional";
  return "other";
}

export function whatsappIntentFromParam(raw: string | null): ContactIntent {
  const intent = formIntentFromParam(raw);
  if (intent === "buy" || intent === "supply" || intent === "processing" || intent === "alfalfa" || intent === "international") return intent;
  return "contact";
}

export function contactContextFromParam(raw: string | null): ContactContext | "" {
  return contactContexts.includes(raw as ContactContext) ? (raw as ContactContext) : "";
}

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
    solutions: "Hello, I’m enquiring about HT Semillas solutions (seeds / crop inputs).",
    processing: "Hello, I’m enquiring about seed conditioning and processing capabilities.",
    alfalfa: "Hello, I’m enquiring about alfalfa and animal nutrition products.",
    international: "Hello, I’m enquiring about international trade / export opportunities.",
    contact: "Hello, I’m writing from the HT Semillas Contact page.",
    buy: "Hello, I’d like to enquire about sourcing seeds or crop inputs.",
    supply: "Hello, I’d like to offer production to HT Semillas.",
  },
};

export function whatsappHref(locale: Locale, intent: ContactIntent = "general") {
  if (!site.whatsapp) return null;
  const text = messages[locale][intent] ?? messages[locale].general;
  return `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(text)}`;
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
