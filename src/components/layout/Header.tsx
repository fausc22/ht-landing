"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { getContent } from "@/lib/content";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { localizedPath, type Locale, type PageKey } from "@/lib/site";

const items: PageKey[] = ["company", "solutions", "processing", "alfalfa", "international"];

function isActive(pathname: string, locale: Locale, key: PageKey) {
  const path = localizedPath(locale, key);
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathForMenu, setPathForMenu] = useState(pathname);
  const copy = getContent(locale).nav;
  const reduced = useReducedMotion();
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (pathname !== pathForMenu) {
    setPathForMenu(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    window.addEventListener("mousedown", onPointer);
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", close);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-200 ${
        scrolled ? "border-forest/15 bg-cream/98 shadow-sm" : "border-forest/10 bg-cream/95"
      }`}
    >
      <nav className="site-container flex h-20 items-center justify-between gap-5" aria-label={copy.menu}>
        <Link
          href={localizedPath(locale, "home")}
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="HT Semillas"
        >
          <Image
            src="/brand/logo-ht.jpg"
            width={54}
            height={54}
            alt=""
            className="size-12 rounded-full mix-blend-multiply transition duration-200 group-hover:brightness-105"
          />
          <span className="hidden text-[1.05rem] font-bold tracking-[-0.03em] text-forest sm:block">HT SEMILLAS</span>
        </Link>

        <div className="relative hidden items-center gap-1 xl:flex">
          {items.map((key) => {
            const active = isActive(pathname, locale, key);
            return (
              <Link
                key={key}
                href={localizedPath(locale, key)}
                className={`nav-link relative px-3 py-2 ${active ? "text-forest" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {copy[key]}
                {active && (
                  <motion.span
                    layoutId="nav-ink"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-forest"
                    transition={{ duration: reduced ? 0 : MOTION_DURATION.nav, ease: MOTION_EASE }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <Link href={localizedPath(locale, "contact")} className="button-primary hidden lg:inline-flex">
            {copy.talk}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="grid size-11 place-items-center rounded-full border border-forest/15 xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
          >
            <span className="sr-only">{open ? copy.close : copy.menu}</span>
            <span className="relative size-5" aria-hidden="true">
              <Menu className={`absolute inset-0 transition duration-200 ${open ? "rotate-90 opacity-0" : "opacity-100"}`} />
              <X className={`absolute inset-0 transition duration-200 ${open ? "opacity-100" : "-rotate-90 opacity-0"}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={copy.menu}
            className="border-t border-forest/10 bg-cream px-5 py-5 xl:hidden"
            initial={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduced ? MOTION_DURATION.reduced : MOTION_DURATION.menu, ease: MOTION_EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="site-container grid gap-1">
              {(["home", ...items] as PageKey[]).map((page, i) => (
                <motion.div
                  key={page}
                  initial={reduced ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduced ? 0 : 0.03 * i, duration: 0.22 }}
                >
                  <Link
                    href={localizedPath(locale, page)}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold hover:bg-white ${
                      isActive(pathname, locale, page) || (page === "home" && pathname === localizedPath(locale, "home"))
                        ? "bg-white text-forest"
                        : "text-ink"
                    }`}
                    aria-current={
                      isActive(pathname, locale, page) || (page === "home" && pathname === localizedPath(locale, "home"))
                        ? "page"
                        : undefined
                    }
                  >
                    {copy[page]}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={localizedPath(locale, "contact")}
                onClick={() => setOpen(false)}
                className="button-primary mt-3 justify-center"
              >
                {copy.talk}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
