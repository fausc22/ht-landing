import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DocumentLang } from "@/components/layout/DocumentLang";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { getContent } from "@/lib/content";
import { isLocale, locales, site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const copy = getContent(value);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    areaServed: ["Sur de Córdoba", "Este de San Luis", "Norte de La Pampa"],
  };
  return (
    <>
      <DocumentLang locale={value} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a href="#main" className="skip-link">{copy.skip}</a>
      <Header locale={value} />
      <main id="main">{children}</main>
      <Footer locale={value} />
      <WhatsAppButton locale={value} />
    </>
  );
}
