import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { getContent } from "@/lib/content";
import { localizedPath, site, telHref, whatsappDigits, type Locale, type PageKey } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getContent(locale);
  const links: PageKey[] = ["home", "company", "solutions", "processing", "alfalfa", "international", "contact"];

  return (
    <footer className="bg-forest text-white">
      <div className="site-container grid gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr_0.95fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand/logo-ht.jpg" width={58} height={58} alt="" className="size-14 rounded-full" />
            <strong>HT SEMILLAS S.A.</strong>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{copy.footer.description}</p>
          <div className="mt-6">
            <LanguageSwitcher locale={locale} compact />
          </div>
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
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage/80">WhatsApp</span>
              <a href={`https://wa.me/${whatsappDigits()}`} className="hover:text-white">
                {site.phones[0]}
              </a>
            </p>
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage/80">Email</span>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage/80">
                {locale === "es" ? "Teléfonos" : "Phones"}
              </span>
              {site.phones.map((phone) => (
                <a key={phone} href={telHref(phone)} className="mt-1 block hover:text-white">
                  {phone}
                </a>
              ))}
            </p>
            <p>
              <span className="block text-xs font-bold uppercase tracking-wider text-sage/80">
                {locale === "es" ? "Dirección" : "Address"}
              </span>
              <span className="mt-1 block text-white/80">{site.address.full}</span>
            </p>
            <p className="pt-2 text-white/65">{site.region}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="eyebrow text-sage">{copy.footer.channels}</p>
            <Link href={localizedPath(locale, "contact")} className="button-primary mt-5 !bg-white !text-forest">
              {copy.footer.cta}
            </Link>
          </div>
          <div>
            <p className="eyebrow text-sage">{copy.footer.legal}</p>
            <div className="mt-3 grid gap-2 text-sm text-white/55">
              <span>{copy.footer.privacy} — {copy.footer.comingSoon}</span>
              <span>{copy.footer.terms} — {copy.footer.comingSoon}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} HT Semillas S.A. {copy.footer.rights}
      </div>
    </footer>
  );
}
