"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/site";

/** Keeps <html lang> in sync without forcing the root layout to be dynamic. */
export function DocumentLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
