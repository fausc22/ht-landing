export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

const DEFAULT_EMAIL = "contacto@htsemillas.com";
const DEFAULT_WHATSAPP = "5492302531296";
const DEFAULT_PHONE = "+54 9 2302 531296";

export const site = {
  name: "HT Semillas S.A.",
  shortName: "HT Semillas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://htsemillas.com.ar",
  location: "Huinca Renancó, Córdoba, Argentina",
  region: {
    es: "Toda la provincia de San Luis, sur, centro y este de Córdoba, sur de Santa Fe y norte de La Pampa",
    en: "Province of San Luis, southern, central and eastern Córdoba, southern Santa Fe and northern La Pampa",
  },
  address: {
    street: "José Galaverna 700",
    postalCode: "6270",
    locality: "Huinca Renancó",
    region: "Córdoba",
    country: "Argentina",
    countryCode: "AR",
    full: "José Galaverna 700, CP 6270, Huinca Renancó, Córdoba, Argentina",
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || DEFAULT_EMAIL,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP,
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || DEFAULT_PHONE,
  phones: ["+54 9 2302 531296", "+54 9 2302 579107"] as const,
  teamEmails: [
    { label: "Marcelo Houriet", email: "mhouriet.htsemillas@gmail.com" },
    { label: "Carlos Tosso", email: "carlos.htsemillas@gmail.com" },
  ] as const,
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const paths = {
  es: {
    home: "/es",
    company: "/es/empresa",
    solutions: "/es/soluciones",
    processing: "/es/procesamiento",
    alfalfa: "/es/alfalfa-nutricion-animal",
    international: "/es/comercio-internacional",
    contact: "/es/contacto",
  },
  en: {
    home: "/en",
    company: "/en/company",
    solutions: "/en/solutions",
    processing: "/en/processing",
    alfalfa: "/en/alfalfa-animal-nutrition",
    international: "/en/international-trade",
    contact: "/en/contact",
  },
} as const;

export const pageKeys = [
  "home",
  "company",
  "solutions",
  "processing",
  "alfalfa",
  "international",
  "contact",
] as const;
export type PageKey = (typeof pageKeys)[number];

export function localizedPath(locale: Locale, page: PageKey) {
  return paths[locale][page];
}

export function alternatePath(pathname: string, target: Locale) {
  const source: Locale = pathname.startsWith("/en") ? "en" : "es";
  const entry = pageKeys.find((key) => {
    const path = paths[source][key];
    return pathname === path || pathname.startsWith(`${path}/`);
  });
  if (!entry) return paths[target].home;
  const suffix = pathname.slice(paths[source][entry].length);
  return `${paths[target][entry]}${suffix}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappDigits(value = site.whatsapp) {
  return value.replace(/\D/g, "");
}
