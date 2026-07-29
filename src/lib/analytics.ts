"use client";

export function trackEvent(name: string, parameters: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const browser = window as typeof window & { gtag?: (...args: unknown[]) => void };
  browser.gtag?.("event", name, parameters);
}
