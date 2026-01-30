"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { site, footerLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8",
          "sm:flex-row sm:px-6 lg:px-8"
        )}
      >
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {site.location}
          </p>
        </div>
        <ul className="flex gap-6 text-sm">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-zinc-200 px-4 py-4 dark:border-zinc-800">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
