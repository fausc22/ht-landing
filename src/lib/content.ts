import type { Locale, PageKey } from "@/lib/site";

export const content = {
  es: {
    language: "Español",
    skip: "Saltar al contenido",
    nav: {
      home: "Inicio",
      company: "Empresa",
      solutions: "Soluciones",
      processing: "Procesamiento",
      alfalfa: "Alfalfa y nutrición animal",
      international: "Comercio internacional",
      contact: "Contacto",
      talk: "Hablar con el equipo",
      menu: "Abrir menú",
      close: "Cerrar menú",
    },
    footer: {
      description: "Soluciones agroindustriales desde Huinca Renancó: semillas, insumos, procesamiento, alfalfa y proyección internacional.",
      region: "Presencia regional",
      channels: "Canales comerciales",
      navigate: "Navegación",
      contactTitle: "Contacto",
      cta: "Hablar con el equipo",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      comingSoon: "próximamente",
      rights: "Todos los derechos reservados.",
    },
    home: {
      eyebrow: "Soluciones agroindustriales desde Argentina",
      title: "Producción que trasciende fronteras",
      intro: "Desde Huinca Renancó conectamos al productor y a la cadena agropecuaria con semillas, insumos, procesamiento y oportunidades de comercio internacional.",
      primary: "Hablar con el equipo comercial",
      secondary: "Conocer soluciones",
      intentsTitle: "¿Qué necesitás resolver?",
      intentsIntro: "Elegí el recorrido más directo. Cada consulta llega con el contexto necesario para una respuesta comercial útil.",
      companyTitle: "Conocimiento del campo. Visión comercial.",
      companyText: "HT Semillas S.A. está radicada en Huinca Renancó y reúne una década de trayectoria junto a productores, proveedores y empresas de la cadena. Integramos experiencia regional, criterio técnico y capacidad para abrir mercados.",
      solutionsTitle: "Una red de soluciones para producir y comercializar",
      solutionsIntro: "Organizamos cuatro unidades de negocio bajo una misma lógica: entender la necesidad, coordinar la operación y facilitar el contacto comercial.",
      processTitle: "Procesamiento que agrega valor",
      processText: "Selección, acondicionamiento y preparación comercial para transformar producción en mercadería consistente, según los requerimientos de cada operación.",
      alfalfaTitle: "Alfalfa y nutrición animal",
      alfalfaText: "Vinculamos alfalfa en megafardos y productos para nutrición animal con compradores que buscan abastecimiento, calidad y coordinación logística.",
      internationalTitle: "De la producción argentina a nuevos mercados",
      internationalText: "Nuestra unidad de comercio internacional desarrolla oportunidades de exportación de productos agroindustriales argentinos, coordinando origen, información y logística.",
      regionTitle: "Presencia cercana, alcance amplio",
      regionText: "Nuestro vínculo comercial se concentra en el sur de Córdoba, el este de San Luis y el norte de La Pampa.",
      finalTitle: "Conversemos sobre tu próxima operación",
      finalText: "Contanos si querés comprar, ofrecer producción o explorar una oportunidad comercial.",
    },
  },
  en: {
    language: "English",
    skip: "Skip to content",
    nav: {
      home: "Home",
      company: "Company",
      solutions: "Solutions",
      processing: "Processing",
      alfalfa: "Alfalfa & animal nutrition",
      international: "International trade",
      contact: "Contact",
      talk: "Talk to our team",
      menu: "Open menu",
      close: "Close menu",
    },
    footer: {
      description: "Agro-industrial solutions from Huinca Renancó: seeds, crop inputs, processing, alfalfa and international reach.",
      region: "Regional presence",
      channels: "Business enquiries",
      navigate: "Navigate",
      contactTitle: "Contact",
      cta: "Talk to our team",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      comingSoon: "coming soon",
      rights: "All rights reserved.",
    },
    home: {
      eyebrow: "Agro-industrial solutions from Argentina",
      title: "Production beyond borders",
      intro: "Based in Huinca Renancó, we connect growers and the agricultural value chain with seeds, crop inputs, processing capabilities and international trade opportunities.",
      primary: "Talk to our commercial team",
      secondary: "Explore our solutions",
      intentsTitle: "How can we help?",
      intentsIntro: "Choose the most direct route. Each enquiry reaches our team with the context needed for a relevant commercial response.",
      companyTitle: "Field knowledge. Commercial vision.",
      companyText: "HT Semillas S.A. is based in Huinca Renancó and brings a decade of work alongside growers, suppliers and companies across the value chain—combining regional experience, technical insight and the ability to open new markets.",
      solutionsTitle: "A network of solutions for production and trade",
      solutionsIntro: "We organise four business units around one principle: understand the need, coordinate the operation and enable a direct commercial conversation.",
      processTitle: "Processing that adds value",
      processText: "Grading, conditioning and commercial preparation turn agricultural production into consistent goods, according to the requirements of each operation.",
      alfalfaTitle: "Alfalfa and animal nutrition",
      alfalfaText: "We connect alfalfa bales and animal nutrition products with buyers seeking reliable supply, quality and organised logistics.",
      internationalTitle: "Connecting Argentine production with new markets",
      internationalText: "Our international trade unit develops export opportunities for Argentine agro-industrial products by coordinating origin, information and logistics.",
      regionTitle: "Strong local presence, broader reach",
      regionText: "Our core commercial footprint covers southern Córdoba, eastern San Luis and northern La Pampa.",
      finalTitle: "Let’s discuss your next operation",
      finalText: "Tell us whether you want to buy, offer production or explore a business opportunity.",
    },
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}

export const pageMeta: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  es: {
    home: {
      title: "Producción que trasciende fronteras",
      description: "HT Semillas en Huinca Renancó: semillas, insumos, procesamiento, alfalfa y comercio internacional. Consultá al equipo comercial.",
    },
    company: {
      title: "Quiénes somos",
      description: "Conocé la trayectoria, presencia regional y dirección de HT Semillas S.A. en el sur de Córdoba.",
    },
    solutions: {
      title: "Soluciones agropecuarias",
      description: "Semillas, insumos agrícolas y veterinarios para acompañar tu campaña. Pedí disponibilidad comercial.",
    },
    processing: {
      title: "Procesamiento y acondicionamiento",
      description: "Selección, acondicionamiento y preparación comercial de semillas y productos agroindustriales.",
    },
    alfalfa: {
      title: "Alfalfa y nutrición animal",
      description: "Alfalfa en megafardos y productos para nutrición animal. Consultá abastecimiento y logística.",
    },
    international: {
      title: "Comercio internacional",
      description: "Exportación de productos agroindustriales argentinos. Iniciá una conversación comercial con HT Semillas.",
    },
    contact: {
      title: "Contacto comercial",
      description: "Escribí a HT Semillas para comprar, ofrecer producción o consultar por exportación. Huinca Renancó, Córdoba.",
    },
  },
  en: {
    home: {
      title: "Production beyond borders",
      description: "HT Semillas in Huinca Renancó: seeds, crop inputs, processing, alfalfa and international trade. Talk to our commercial team.",
    },
    company: {
      title: "About us",
      description: "Learn about HT Semillas S.A.—our background, regional presence and leadership in southern Córdoba, Argentina.",
    },
    solutions: {
      title: "Agricultural solutions",
      description: "Seeds, crop and veterinary inputs to support your campaign. Enquire about commercial availability.",
    },
    processing: {
      title: "Processing and conditioning",
      description: "Seed grading, conditioning and commercial preparation for agro-industrial products.",
    },
    alfalfa: {
      title: "Alfalfa and animal nutrition",
      description: "Alfalfa bales and animal nutrition products. Enquire about supply and logistics coordination.",
    },
    international: {
      title: "International trade",
      description: "Export opportunities for Argentine agro-industrial products. Start a business conversation with HT Semillas.",
    },
    contact: {
      title: "Contact our team",
      description: "Contact HT Semillas to source products, offer production or discuss export. Based in Huinca Renancó, Córdoba.",
    },
  },
};
