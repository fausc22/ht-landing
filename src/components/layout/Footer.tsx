import Image from "next/image";
import Link from "next/link";
import { TrackedContactLink } from "@/components/contact/TrackedContactLink";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { whatsappHref } from "@/lib/contact-links";
import { getContent } from "@/lib/content";
import { localizedPath, site, telHref, type Locale, type PageKey } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getContent(locale);
  const links: PageKey[] = ["home", "company", "solutions", "processing", "alfalfa", "international", "contact"];
  const whatsapp = whatsappHref(locale);

  return (
    <footer className="bg-forest text-white">
      <div className="site-container grid gap-12 py-14 lg:grid-cols-[1.2fr_0.9fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/variants/logo-ht-primary.jpg"
              width={80}
              height={80}
              alt=""
              className="size-20 rounded-2xl"
            />
            <span>
              <strong className="block">HT SEMILLAS S.A.</strong>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                {locale === "es" ? "Producción que trasciende fronteras" : "Production beyond borders"}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{copy.footer.description}</p>
          <div className="mt-6">
            <LanguageSwitcher locale={locale} compact />
          </div>
          <Link href={localizedPath(locale, "contact")} className="button-primary mt-7 !bg-white !text-forest">
            {copy.footer.cta}
          </Link>
        </div>

        <div>
          <p className="eyebrow text-sage">{copy.footer.navigate}</p>
          <nav className="mt-4 grid gap-2 text-sm text-white/75" aria-label={copy.footer.navigate}>
            {links.map((key) => (
              <Link key={key} href={localizedPath(locale, key)} className="transition hover:text-white">
                {copy.nav[key]}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="eyebrow text-sage">{copy.footer.contactTitle}</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            {whatsapp ? (
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-sage">WhatsApp</span>
                <TrackedContactLink
                  href={whatsapp}
                  event="contact_whatsapp_click"
                  locale={locale}
                  placement="footer"
                  target="_blank"
                  className="hover:text-white"
                >
                  {site.phones[0]}
                </TrackedContactLink>
              </p>
            ) : null}
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage">Email</span>
              <TrackedContactLink
                href={`mailto:${site.email}`}
                event="contact_email_click"
                locale={locale}
                placement="footer"
                className="hover:text-white"
              >
                {site.email}
              </TrackedContactLink>
            </p>
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage">
                {locale === "es" ? "Teléfonos" : "Phones"}
              </span>
              {site.phones.map((phone) => (
                <TrackedContactLink
                  key={phone}
                  href={telHref(phone)}
                  event="contact_phone_click"
                  locale={locale}
                  placement="footer"
                  className="mt-1 block hover:text-white"
                >
                  {phone}
                </TrackedContactLink>
              ))}
            </p>
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage">
                {locale === "es" ? "Dirección" : "Address"}
              </span>
              <span className="mt-1 block text-white/80">{site.address.full}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-xs text-white/75">
        <div className="site-container flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} HT Semillas S.A. {copy.footer.rights}
          </p>
          <a
            href="https://portfolio-cantallops.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold tracking-wide text-white/70 transition hover:text-white"
          >
            {copy.footer.credit}
          </a>
        </div>
      </div>
    </footer>
  );
}
