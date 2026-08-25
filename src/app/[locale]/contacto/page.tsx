import { ContactPage } from "@/components/contact/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("es", "contact");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("es", "contact")} />
      <ContactPage locale="es" />
    </>
  );
}
