"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, navLinks } from "@/lib/site";
import { MOTION_DURATION } from "@/lib/motion";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-block"
    >
      <span className="relative z-10 text-muted-foreground transition-colors duration-200 group-hover:text-primary">
        {label}
      </span>
      <motion.span
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        whileTap={{ scaleX: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: MOTION_DURATION }}
      className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md shadow-sm"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-6",
          "sm:px-6 lg:px-8"
        )}
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="leading-none text-primary transition-colors hover:text-primary/90"
        >
          <span className="block text-2xl font-bold tracking-tight">
            {site.name}
          </span>
          <span className="hidden text-xs font-medium text-muted-foreground sm:block">
            {site.location}
          </span>
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menú</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
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
            className="border-t border-border bg-card md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
