import { InternationalPage } from "@/components/international/InternationalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("en", "international");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("en", "international")} />
      <InternationalPage locale="en" />
    </>
  );
}
