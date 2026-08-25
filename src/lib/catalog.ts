import type { Locale } from "@/lib/site";

export type CatalogKey = "seeds" | "crop-inputs";

type CatalogGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export type Catalog = {
  eyebrow: string;
  title: string;
  intro: string;
  groups: readonly CatalogGroup[];
  disclaimer: string;
  contactLabel: string;
  closeLabel: string;
  context: CatalogKey;
};

export const catalogs: Record<Locale, Record<CatalogKey, Catalog>> = {
  es: {
    seeds: {
      eyebrow: "Catálogo comercial",
      title: "Semillas y cultivos",
      intro:
        "Una guía de las familias que comercializa HT Semillas. Las variedades, marcas y presentaciones se confirman según campaña.",
      groups: [
        {
          title: "Cultivos extensivos",
          description: "Alternativas para los principales planteos agrícolas.",
          items: ["Soja", "Trigo", "Maíz", "Sorgo", "Girasol"],
        },
        {
          title: "Pasturas y alfalfa",
          description: "Opciones forrajeras para distintos sistemas productivos.",
          items: ["Pasturas", "Alfalfa"],
        },
        {
          title: "Cultivos de invierno",
          description: "Especies incorporadas a la propuesta de cultivos invernales.",
          items: ["Avena", "Cebada", "Centeno"],
        },
        {
          title: "Cultivos de servicio",
          description: "Alternativas para integrar al planteo de cada campaña.",
          items: ["Consultar especies y disponibilidad"],
        },
      ],
      disclaimer:
        "Este catálogo presenta familias de productos y no implica disponibilidad permanente. Consultá variedades, marcas, tratamientos, formatos y condiciones comerciales vigentes.",
      contactLabel: "Consultar este catálogo",
      closeLabel: "Cerrar catálogo",
      context: "seeds",
    },
    "crop-inputs": {
      eyebrow: "Catálogo comercial",
      title: "Insumos agrícolas",
      intro:
        "Líneas complementarias para acompañar las necesidades de cada campaña, sujetas a disponibilidad comercial.",
      groups: [
        {
          title: "Agroquímicos",
          description: "Productos para la protección y el manejo de cultivos.",
          items: ["Consultar productos y marcas disponibles"],
        },
        {
          title: "Coadyuvantes",
          description: "Alternativas complementarias para aplicaciones agrícolas.",
          items: ["Consultar productos y presentaciones disponibles"],
        },
        {
          title: "Otros insumos",
          description: "Productos complementarios incorporados según campaña.",
          items: ["Consultar disponibilidad"],
        },
      ],
      disclaimer:
        "Las marcas, formulaciones, registros, presentaciones y condiciones de uso deben confirmarse con el equipo comercial. La información publicada no reemplaza marbetes ni recomendaciones profesionales.",
      contactLabel: "Consultar este catálogo",
      closeLabel: "Cerrar catálogo",
      context: "crop-inputs",
    },
  },
  en: {
    seeds: {
      eyebrow: "Product catalogue",
      title: "Seeds and crops",
      intro:
        "A guide to the product families marketed by HT Semillas. Varieties, brands and formats are confirmed for each crop season.",
      groups: [
        {
          title: "Broadacre crops",
          description: "Options for major field-crop production systems.",
          items: ["Soybean", "Wheat", "Corn", "Sorghum", "Sunflower"],
        },
        {
          title: "Pastures and alfalfa",
          description: "Forage options for different production systems.",
          items: ["Pastures", "Alfalfa"],
        },
        {
          title: "Winter crops",
          description: "Species included in HT’s winter-crop offer.",
          items: ["Oats", "Barley", "Rye"],
        },
        {
          title: "Cover crops",
          description: "Options to incorporate into each crop-season plan.",
          items: ["Enquire about species and availability"],
        },
      ],
      disclaimer:
        "This catalogue presents product families and does not imply permanent availability. Please enquire about current varieties, brands, treatments, formats and commercial terms.",
      contactLabel: "Enquire about this catalogue",
      closeLabel: "Close catalogue",
      context: "seeds",
    },
    "crop-inputs": {
      eyebrow: "Product catalogue",
      title: "Crop inputs",
      intro:
        "Complementary product lines supporting each crop season, subject to commercial availability.",
      groups: [
        {
          title: "Crop protection products",
          description: "Products supporting crop protection and management.",
          items: ["Enquire about available products and brands"],
        },
        {
          title: "Adjuvants",
          description: "Complementary options for agricultural applications.",
          items: ["Enquire about available products and formats"],
        },
        {
          title: "Other inputs",
          description: "Complementary products incorporated according to season.",
          items: ["Check availability"],
        },
      ],
      disclaimer:
        "Brands, formulations, registrations, formats and conditions of use must be confirmed with our commercial team. Published information does not replace product labels or professional advice.",
      contactLabel: "Enquire about this catalogue",
      closeLabel: "Close catalogue",
      context: "crop-inputs",
    },
  },
};
