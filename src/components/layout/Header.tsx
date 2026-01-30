"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { site, navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-4",
          "sm:px-6 lg:px-8"
        )}
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {site.name}
        </Link>
        <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menú</span>
          {open ? (
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
