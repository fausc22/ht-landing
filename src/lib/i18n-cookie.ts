import type { Locale } from "@/lib/site";
import { isLocale } from "@/lib/site";

export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function parseLocaleCookie(value: string | undefined | null): Locale | null {
  if (!value) return null;
  return isLocale(value) ? value : null;
}

/** Prefer Spanish only when the primary Accept-Language tag is Spanish. */
export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "es";
  const primary = header.split(",")[0]?.trim().split(";")[0]?.trim().toLowerCase() ?? "";
  if (primary.startsWith("es")) return "es";
  return "en";
}

export function localeCookieHeader(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}
