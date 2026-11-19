"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

/**
 * Loads Google Analytics (gtag.js) lazily — on the first user interaction, or
 * after FALLBACK_MS for passive readers, whichever comes first. gtag.js costs
 * 250–500 ms of main-thread work on a mid-range phone; with the old ~3s idle
 * fallback that landed inside the page-load window and was the largest single
 * contributor to Total Blocking Time on every page (Lighthouse, Nov 2026).
 * Engaged sessions are all still tracked; the only sessions not captured are
 * visitors who leave within FALLBACK_MS without scrolling, tapping or typing.
 */
const FALLBACK_MS = 15000;

export default function DeferredGoogleAnalytics({ gaId }: { gaId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const load = () => setShouldLoad(true);

    // Fallback so analytics still fires for passive readers.
    const timerId = window.setTimeout(load, FALLBACK_MS);

    // First real interaction loads it immediately.
    const opts: AddEventListenerOptions = { once: true, passive: true };
    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "keydown",
      "touchstart",
    ];
    events.forEach((e) => window.addEventListener(e, load, opts));

    return () => {
      events.forEach((e) => window.removeEventListener(e, load));
      window.clearTimeout(timerId);
    };
  }, [shouldLoad]);

  return shouldLoad ? <GoogleAnalytics gaId={gaId} /> : null;
}
