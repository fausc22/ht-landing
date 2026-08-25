import { ContactPage } from "@/components/contact/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("en", "contact");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("en", "contact")} />
      <ContactPage locale="en" />
    </>
  );
}
