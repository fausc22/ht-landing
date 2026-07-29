import { ContactPage } from "@/components/contact/ContactPage"; import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata("en", "contact"); export default function Page(){ return <ContactPage locale="en"/>; }
