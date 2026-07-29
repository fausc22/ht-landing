import { redirect } from "next/navigation";

/** Fallback if proxy is bypassed; proxy handles cookie + Accept-Language. */
export default function RootPage() {
  redirect("/es");
}
