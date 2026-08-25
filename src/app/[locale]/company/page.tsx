import { CompanyPage } from "@/components/company/CompanyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("en", "company");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("en", "company")} />
      <CompanyPage locale="en" />
    </>
  );
}
