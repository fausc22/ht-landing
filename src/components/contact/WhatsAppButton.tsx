"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { intentFromPath, whatsappHref } from "@/lib/contact-links";
import { site, type Locale } from "@/lib/site";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  if (!site.whatsapp) return null;
  const intent = intentFromPath(pathname);
  const href = whatsappHref(locale, intent);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={locale === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
      onClick={() => trackEvent("contact_whatsapp_click", { page: pathname, locale, intent })}
      className="fixed right-5 z-40 grid size-14 place-items-center rounded-full bg-forest text-white shadow-xl transition-transform hover:-translate-y-1"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
