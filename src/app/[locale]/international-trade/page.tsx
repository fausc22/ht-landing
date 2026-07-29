import { InternalPage } from "@/components/sections/InternalPage"; import { createMetadata } from "@/lib/metadata";
export const metadata = createMetadata("en", "international"); export default function Page(){ return <InternalPage locale="en" page="international"/>; }
