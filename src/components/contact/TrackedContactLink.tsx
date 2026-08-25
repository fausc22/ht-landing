"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/site";

type ContactEvent = "contact_whatsapp_click" | "contact_email_click" | "contact_phone_click";

type Props = {
  href: string;
  event: ContactEvent;
  locale: Locale;
  placement: string;
  className?: string;
  children: ReactNode;
  target?: "_blank";
  ariaLabel?: string;
};

export function TrackedContactLink({ href, event, locale, placement, className, children, target, ariaLabel }: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackEvent(event, { locale, placement })}
    >
      {children}
    </a>
  );
}
