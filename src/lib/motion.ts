/**
 * Motion tokens for HT Semillas — opacity + transform only.
 * Prefer these over ad-hoc durations in components.
 */

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOTION_EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const MOTION_DURATION = {
  fadeIn: 0.35,
  fadeUp: 0.45,
  riseSoft: 0.5,
  maskReveal: 0.7,
  title: 0.55,
  lineGrow: 0.6,
  nav: 0.25,
  header: 0.2,
  menu: 0.28,
  heroCrossfade: 1.2,
  mapDraw: 0.8,
  reduced: 0.15,
} as const;

export const MOTION_DISTANCE = {
  fadeUp: 16,
  fadeUpMobile: 10,
  riseSoft: 12,
  title: 20,
  titleMobile: 12,
} as const;

export const MOTION_STAGGER = 0.05;
export const MOTION_STAGGER_MOBILE = 0.04;

export const MOTION_VIEWPORT = { once: true, amount: 0.15 } as const;

export const HERO_HOLD_MS = { desktop: 6000, mobile: 7000 } as const;
export const HERO_MAX_CYCLES = 3;
