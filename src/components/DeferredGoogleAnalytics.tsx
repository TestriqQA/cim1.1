"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

/**
 * Loads Google Analytics (gtag.js) lazily — only after the first user
 * interaction, or when the browser goes idle (with a ~3s fallback), whichever
 * comes first. This keeps the ~130 KiB gtag.js off the critical load path so it
 * doesn't inflate TBT/TTI/unused-JS at first paint, while still tracking every
 * real (engaged) session. The only sessions not captured are users who leave
 * within a few seconds without any interaction.
 */
export default function DeferredGoogleAnalytics({ gaId }: { gaId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const load = () => setShouldLoad(true);

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    // Idle fallback so analytics still fires for passive readers.
    const idleId =
      typeof w.requestIdleCallback === "function"
        ? w.requestIdleCallback(load, { timeout: 3000 })
        : (window.setTimeout(load, 3000) as unknown as number);

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
      if (typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, [shouldLoad]);

  return shouldLoad ? <GoogleAnalytics gaId={gaId} /> : null;
}
