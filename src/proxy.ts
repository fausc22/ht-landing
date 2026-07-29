import { NextRequest, NextResponse } from "next/server";
import { localeFromAcceptLanguage, LOCALE_COOKIE, parseLocaleCookie, localeCookieHeader } from "@/lib/i18n-cookie";
import type { Locale } from "@/lib/site";

const redirects: Record<string, string> = {
  "/en/empresa": "/en/company",
  "/en/soluciones": "/en/solutions",
  "/en/procesamiento": "/en/processing",
  "/en/alfalfa-nutricion-animal": "/en/alfalfa-animal-nutrition",
  "/en/comercio-internacional": "/en/international-trade",
  "/en/novedades": "/en",
  "/en/contacto": "/en/contact",
  "/es/company": "/es/empresa",
  "/es/solutions": "/es/soluciones",
  "/es/processing": "/es/procesamiento",
  "/es/alfalfa-animal-nutrition": "/es/alfalfa-nutricion-animal",
  "/es/international-trade": "/es/comercio-internacional",
  "/es/news": "/es",
  "/es/contact": "/es/contacto",
};

function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    const fromCookie = parseLocaleCookie(request.cookies.get(LOCALE_COOKIE)?.value);
    const locale = fromCookie ?? localeFromAcceptLanguage(request.headers.get("accept-language"));
    const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 308);
    if (!fromCookie) {
      response.headers.append("Set-Cookie", localeCookieHeader(locale));
    }
    return response;
  }

  // Legacy / cross-locale news paths → home
  if (pathname.startsWith("/en/novedades")) return NextResponse.redirect(new URL("/en", request.url), 308);
  if (pathname.startsWith("/es/news")) return NextResponse.redirect(new URL("/es", request.url), 308);
  if (pathname.startsWith("/es/novedades")) return NextResponse.redirect(new URL("/es", request.url), 308);
  if (pathname.startsWith("/en/news")) return NextResponse.redirect(new URL("/en", request.url), 308);

  const exact = redirects[pathname];
  if (exact) return NextResponse.redirect(new URL(exact, request.url), 308);

  const locale = localeFromPath(pathname);
  const response = NextResponse.next();
  response.headers.set("Content-Language", locale);
  response.headers.set("x-locale", locale);
  return response;
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest)$).*)"] };
