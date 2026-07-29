"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { alternatePath, type Locale } from "@/lib/site";

export function LanguageSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const other: Locale = locale === "es" ? "en" : "es";
  const href = alternatePath(pathname, other);

  return (
    <Link
      href={href}
      hrefLang={other}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${other}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
        router.refresh();
      }}
      className={
        compact
          ? "rounded-full border border-white/25 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:border-white/50"
          : "rounded-full border border-forest/15 px-3 py-2 text-xs font-bold uppercase tracking-wider text-forest transition hover:border-forest/40 hover:bg-white/60"
      }
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
    >
      {other.toUpperCase()}
    </Link>
  );
}
