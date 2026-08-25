"use client";

import { MessageCircle } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { intentFromPath, whatsappHref, whatsappIntentFromParam } from "@/lib/contact-links";
import { site, type Locale } from "@/lib/site";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const params = useSearchParams();
  if (!site.whatsapp) return null;
  const queryIntent = params.get("motivo") ?? params.get("intent");
  const intent = pathname.includes("contact") || pathname.includes("contacto")
    ? whatsappIntentFromParam(queryIntent)
    : intentFromPath(pathname);
  const href = whatsappHref(locale, intent);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={locale === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
      onClick={() => trackEvent("contact_whatsapp_click", { page: pathname, locale, intent, placement: "floating" })}
      className="fixed right-5 z-40 grid size-14 place-items-center rounded-full bg-forest text-white shadow-xl transition-transform hover:-translate-y-1"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
