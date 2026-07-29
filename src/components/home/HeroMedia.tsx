"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HERO_HOLD_MS, HERO_MAX_CYCLES, MOTION_DURATION } from "@/lib/motion";

export type HeroSlide = {
  src: string;
  alt: string;
  position?: string;
};

type Props = {
  slides: HeroSlide[];
  locale: "es" | "en";
};

function useIsMobile() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(max-width: 767px)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => false,
  );
}

export function HeroMedia({ slides, locale }: Props) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycles, setCycles] = useState(0);
  const touchX = useRef<number | null>(null);
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const hold = isMobile ? HERO_HOLD_MS.mobile : HERO_HOLD_MS.desktop;

  const stopped = paused || cycles >= HERO_MAX_CYCLES;
  const canAutoplay = hydrated && !reduced && !stopped && slides.length > 1;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((current) => {
        const normalized = ((nextIndex % slides.length) + slides.length) % slides.length;
        if (normalized === 0 && current === slides.length - 1) setCycles((c) => c + 1);
        return normalized;
      });
    },
    [slides.length],
  );

  useEffect(() => {
    if (!canAutoplay) return;
    const id = window.setInterval(() => {
      setIndex((current) => {
        const nextIndex = (current + 1) % slides.length;
        if (nextIndex === 0) setCycles((c) => c + 1);
        return nextIndex;
      });
    }, hold);
    return () => window.clearInterval(id);
  }, [canAutoplay, hold, slides.length]);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) setPaused(true);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const active = slides[index] ?? slides[0];
  const label = locale === "es" ? "Galería del hero" : "Hero gallery";
  const pauseLabel = locale === "es" ? (stopped ? "Reanudar" : "Pausar") : stopped ? "Play" : "Pause";

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (cycles < HERO_MAX_CYCLES) setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 40) return;
        setPaused(true);
        goTo(dx < 0 ? index + 1 : index - 1);
      }}
    >
      <Image
        src={slides[0].src}
        alt={slides[0].alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover opacity-55 ${slides[0].position ?? "object-[45%_40%]"}`}
      />

      {!reduced && hydrated && slides.length > 1 && (
        <AnimatePresence mode="sync">
          {index > 0 && (
            <motion.div
              key={active.src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: MOTION_DURATION.heroCrossfade, ease: "easeInOut" }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                loading="lazy"
                className={`object-cover opacity-55 ${active.position ?? "object-center"}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {slides.length > 1 && !reduced && (
        <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2 sm:bottom-8 sm:right-8">
          <div className="flex gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={`h-1.5 min-h-[44px] min-w-[44px] px-2 sm:min-h-0 sm:min-w-0 sm:px-0 ${i === index ? "[&>span]:bg-white" : "[&>span]:bg-white/35"}`}
                onClick={() => {
                  setIndex(i);
                  setPaused(true);
                }}
                aria-label={locale === "es" ? `Ir a imagen ${i + 1}` : `Go to slide ${i + 1}`}
                aria-current={i === index}
              >
                <span className="block h-1.5 w-5 rounded-full transition" />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/30 bg-forest-dark/50 text-white backdrop-blur-sm"
            onClick={() => {
              if (cycles >= HERO_MAX_CYCLES) setCycles(0);
              setPaused((p) => !p);
            }}
            aria-pressed={stopped}
            aria-label={pauseLabel}
          >
            {stopped ? <Play className="size-4" /> : <Pause className="size-4" />}
          </button>
        </div>
      )}
      <div className="sr-only" aria-live="polite">
        {locale === "es" ? `Imagen ${index + 1} de ${slides.length}` : `Slide ${index + 1} of ${slides.length}`}
      </div>
    </div>
  );
}
