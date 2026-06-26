"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { site, footerLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-8 px-4 py-10",
          "sm:px-6 md:grid-cols-[1fr_auto] lg:px-8"
        )}
      >
        <div>
          <p className="text-sm font-medium text-foreground">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            {site.tagline}. Base en {site.location}.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:justify-end">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border px-4 py-4">
        <p className="text-center text-sm text-muted-foreground">
          © {year} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
