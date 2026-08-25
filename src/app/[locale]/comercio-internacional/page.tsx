import { InternationalPage } from "@/components/international/InternationalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("es", "international");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("es", "international")} />
      <InternationalPage locale="es" />
    </>
  );
}
