"use client";

import { useEffect, useRef, useState } from "react";

// The only client leaf in the hero. ~30 lines, no dependencies.
//
// SSR renders the FINAL value, so the number is in the HTML for crawlers and
// there is nothing to shift on hydration. The count-up only starts when the
// element scrolls into view, and never runs under prefers-reduced-motion.
// A visually-hidden copy carries the final value for assistive tech so a
// screen reader never lands on an intermediate frame.
//
// `min-width` is reserved in `ch` units for the widest frame, so the digits
// changing width during the count cannot push neighbours around (CLS).

interface CountUpProps {
  value: number;
  suffix?: string;
  durationMs?: number;
}

export default function CountUp({ value, suffix = "", durationMs = 1500 }: CountUpProps) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;

    const run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(value * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((e) => e.isIntersecting)) return;
        started = true;
        setDisplay(0);
        run();
        io.disconnect();
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  const finalText = `${value.toLocaleString()}${suffix}`;

  return (
    <>
      <span className="sr-only">{finalText}</span>
      <span
        ref={ref}
        aria-hidden="true"
        className="inline-block tabular-nums"
        style={{ minWidth: `${finalText.length}ch` }}
      >
        {display.toLocaleString()}
        {suffix}
      </span>
    </>
  );
}
