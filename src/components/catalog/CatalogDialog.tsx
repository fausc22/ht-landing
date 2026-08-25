"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, BookOpen, Check, Info, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { catalogs, type CatalogKey } from "@/lib/catalog";
import { localizedPath, type Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  catalog: CatalogKey;
  label: string;
  variant?: "primary" | "secondary";
};

export function CatalogDialog({ locale, catalog, label, variant = "secondary" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const content = catalogs[locale][catalog];
  const contact = localizedPath(locale, "contact");
  const buyQuery = locale === "es" ? "motivo=comprar" : "intent=buy";
  const titleId = `catalog-title-${locale}-${catalog}`;
  const descriptionId = `catalog-description-${locale}-${catalog}`;

  function openCatalog() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    trackEvent("catalog_open", { locale, catalog });
  }

  function closeCatalog() {
    dialogRef.current?.close();
  }

  function restoreScroll() {
    document.body.style.overflow = previousOverflow.current;
  }

  useEffect(() => restoreScroll, []);

  return (
    <>
      <button type="button" onClick={openCatalog} className={variant === "primary" ? "button-primary" : "button-secondary"}>
        <BookOpen className="size-4" aria-hidden="true" />
        {label}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClose={restoreScroll}
        onCancel={(event) => {
          event.preventDefault();
          closeCatalog();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeCatalog();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeCatalog();
        }}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(58rem,calc(100%-2rem))] overflow-hidden rounded-3xl border border-white/15 bg-paper p-0 text-ink shadow-2xl backdrop:bg-forest-dark/80"
      >
        <div className="grid max-h-[calc(100dvh-2rem)] grid-rows-[auto_1fr_auto]">
          <header className="flex items-start justify-between gap-6 border-b border-line bg-cream px-5 py-5 sm:px-8 sm:py-7">
            <div>
              <p className="eyebrow text-forest">{content.eyebrow}</p>
              <h2 id={titleId} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {content.title}
              </h2>
              <p id={descriptionId} className="mt-3 max-w-2xl leading-7 text-ink/65">
                {content.intro}
              </p>
            </div>
            <button
              type="button"
              onClick={closeCatalog}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-forest/15 bg-white text-forest transition-colors hover:bg-forest hover:text-white"
              aria-label={content.closeLabel}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </header>

          <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {content.groups.map((group) => (
                <section key={group.title} className="card p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{group.description}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold">
                        <Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className="mt-5 flex gap-3 rounded-2xl bg-gold/15 p-4 text-sm leading-6 text-ink/70">
              <Info className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
              <p>{content.disclaimer}</p>
            </div>
          </div>

          <footer className="border-t border-line bg-paper px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-8">
            <p className="hidden text-sm text-ink/70 sm:block">HT Semillas S.A.</p>
            <Link
              href={`${contact}?${buyQuery}&context=${content.context}`}
              onClick={() => trackEvent("catalog_contact", { locale, catalog })}
              className="button-primary w-full sm:w-auto"
            >
              {content.contactLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </footer>
        </div>
      </dialog>
    </>
  );
}
