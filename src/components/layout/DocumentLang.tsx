"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/lib/site";

/** Keeps <html lang> in sync without forcing the root layout to be dynamic. */
export function DocumentLang({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale === "es" ? "es-AR" : "en";
    document.documentElement.setAttribute("xml:lang", locale === "es" ? "es-AR" : "en");
  }, [locale]);
  return null;
}
