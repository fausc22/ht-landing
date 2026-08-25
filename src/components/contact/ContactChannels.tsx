"use client";

import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { TrackedContactLink } from "@/components/contact/TrackedContactLink";
import { whatsappHref, whatsappIntentFromParam } from "@/lib/contact-links";
import { site, telHref, type Locale } from "@/lib/site";

export function ContactChannels({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const rawIntent = params.get("motivo") ?? params.get("intent");
  const whatsapp = whatsappHref(locale, whatsappIntentFromParam(rawIntent));
  const es = locale === "es";

  const channels = [
    whatsapp
      ? {
          title: "WhatsApp",
          text: es ? "Iniciar una conversación comercial" : "Start a business conversation",
          href: whatsapp,
          event: "contact_whatsapp_click" as const,
          icon: MessageCircle,
          target: "_blank" as const,
        }
      : null,
    {
      title: es ? "Correo electrónico" : "Email",
      text: site.email,
      href: `mailto:${site.email}`,
      event: "contact_email_click" as const,
      icon: Mail,
      target: undefined,
    },
    {
      title: es ? "Teléfono" : "Phone",
      text: site.phones[0],
      href: telHref(site.phones[0]),
      event: "contact_phone_click" as const,
      icon: Phone,
      target: undefined,
    },
  ].filter((channel): channel is NonNullable<typeof channel> => Boolean(channel));

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {channels.map((channel) => (
        <TrackedContactLink
          key={channel.title}
          href={channel.href}
          event={channel.event}
          locale={locale}
          placement="contact_channels"
          target={channel.target}
          className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-white transition-colors hover:bg-white hover:text-forest"
        >
          <channel.icon className="size-6" aria-hidden="true" />
          <span className="mt-6 block font-bold">{channel.title}</span>
          <span className="mt-1 block text-sm opacity-65">{channel.text}</span>
        </TrackedContactLink>
      ))}
    </div>
  );
}
