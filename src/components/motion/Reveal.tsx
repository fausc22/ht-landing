"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DISTANCE, MOTION_DURATION, MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion";

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

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "riseSoft" | "title";
};

export function Reveal({ children, className = "", delay = 0, variant = "fadeUp" }: Props) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduced) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={MOTION_VIEWPORT}
        transition={{ duration: MOTION_DURATION.reduced, delay }}
      >
        {children}
      </motion.div>
    );
  }

  const y =
    variant === "fadeIn"
      ? 0
      : variant === "title"
        ? isMobile
          ? MOTION_DISTANCE.titleMobile
          : MOTION_DISTANCE.title
        : variant === "riseSoft"
          ? MOTION_DISTANCE.riseSoft
          : isMobile
            ? MOTION_DISTANCE.fadeUpMobile
            : MOTION_DISTANCE.fadeUp;

  const duration =
    variant === "fadeIn"
      ? MOTION_DURATION.fadeIn
      : variant === "title"
        ? MOTION_DURATION.title
        : variant === "riseSoft"
          ? MOTION_DURATION.riseSoft
          : MOTION_DURATION.fadeUp;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: variant === "riseSoft" ? 0.98 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
