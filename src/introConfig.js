/**
 * Intro globe configuration — tweak timing, location and behaviour here.
 */
export const INTRO_CONFIG = {
  /** Oujda, Morocco */
  lat: 34.6814,
  lon: -1.9086,
  label: 'Oujda, Maroc',

  /** Welcome screen copy */
  welcomeEyebrow: 'Welcome',
  welcomeTitle: 'Belhouari Othmane',
  welcomeSubtitle: 'Full Stack Developer · Oujda, Morocco',

  /** Total sequence ≈ 7.8 s */
  spinDuration: 2.6,
  rotateDuration: 1.7,
  zoomDuration: 1.2,
  markerPause: 1.3,
  exitDuration: 1.0,

  /** Globe spin speed during intro (radians per second) */
  spinSpeed: 0.38,

  /** Atmosphere halo intensity (0–1) — raise for stronger cyan rim */
  atmosphereIntensity: 0.55,

  /**
   * true  → intro plays on every full page load / refresh
   * false → intro plays only once per browser tab session (in-memory flag)
   */
  replayOnEveryPageLoad: true,
}

// In-memory session flag (not localStorage)
let introPlayedThisSession = false

export function shouldPlayIntro() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (!INTRO_CONFIG.replayOnEveryPageLoad && introPlayedThisSession) return false
  return true
}

export function markIntroPlayed() {
  introPlayedThisSession = true
}
