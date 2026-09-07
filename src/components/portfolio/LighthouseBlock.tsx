import { Gauge, ShieldCheck, Search, Accessibility } from "lucide-react";
import styles from "@/components/portfolio/portfolio.module.css";

// Section 4 — Performance & Lighthouse validation.
//
// Server component. Four ring tracks drawn with inline SVG and animated with
// a scroll-driven stroke-dashoffset — no charting library.
//
// The numbers are MEASURED, not targets: Lighthouse 13 against the production
// build (`next start`), on this route, both form factors. They are typed here
// by hand because a build cannot audit itself, so re-measure after any change
// to the root layout — that is where the mobile performance ceiling lives.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

const R = 45;
const C = +(2 * Math.PI * R).toFixed(2); // 282.74

// Measured 2026-09-07, Lighthouse 13.4.1, production build (`next start`).
// Mobile performance is the MEDIAN of three runs — single runs on this profile
// swing ±5 points with machine load, and the swing is all TBT, not LCP.
const rings = [
  { icon: Gauge, label: "Performance", desktop: 99, mobile: 72, color: "#06b6d4", rgb: "6 182 212" },
  { icon: Accessibility, label: "Accessibility", desktop: 100, mobile: 100, color: "#10b981", rgb: "16 185 129" },
  { icon: ShieldCheck, label: "Best practices", desktop: 100, mobile: 100, color: "#a855f7", rgb: "168 85 247" },
  { icon: Search, label: "SEO", desktop: 100, mobile: 100, color: "#f97316", rgb: "249 115 22" },
];

const mechanisms = [
  ["Static prerender", "Every route under /portfolio is rendered once at build time and served from the edge cache."],
  ["Near-zero client JS", "Two client components on the whole route: the category filter and a 30-line count-up. Everything else is server-rendered."],
  ["Layout-stable media", "next/image inside fixed aspect-ratio boxes — measured CLS of 0.000–0.009 across both pages and form factors."],
  ["Semantic DOM", "One h1 per page, labelled sections, real lists, real buttons with a pressed state. Zero axe-core violations."],
  ["AA contrast, measured", "Every text colour checked against its actual rendered surface, including the glass panels."],
  ["Motion is opt-in", "Scroll-driven animation is progressive and fully disabled under prefers-reduced-motion."],
];

export default function LighthouseBlock() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="lighthouse-heading">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Copy */}
          <div className={`${styles.reveal} lg:col-span-5`}>
            <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>
              04 · Validation
            </p>
            <h2
              id="lighthouse-heading"
              className={`${styles.balance} mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl`}
            >
              Built to score, then measured
            </h2>
            <p className={`${styles.pretty} mt-6 text-base leading-relaxed text-zinc-400 md:text-lg`}>
              The same standard applies to this page as to the client work it describes. These
              are Lighthouse scores measured on the production build of this route — the large
              figure is desktop, the small one the median of three mobile runs — and the mechanisms are listed so the
              claim can be checked rather than taken on trust.
            </p>

            <ul className="mt-8 space-y-3">
              {mechanisms.map(([title, body]) => (
                <li key={title} className="flex gap-3 text-sm">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    <span className="font-semibold text-zinc-200">{title}. </span>
                    <span className="text-zinc-400">{body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className={`${styles.mono} mt-8 border-t border-zinc-800 pt-4 text-[0.6875rem] leading-relaxed text-zinc-400`}>
              Mobile performance on every page of this site is bounded by the shared header,
              footer and analytics bundle in the root layout — Google Analytics alone is about a
              third of the blocking time — which the simulated 4× CPU profile charges to first
              render. That ceiling is a layout change, not a page one.
            </p>
          </div>

          {/* Rings */}
          <ul className={`${styles.cascade} grid grid-cols-2 gap-4 lg:col-span-7 sm:gap-5`}>
            {rings.map(({ icon: Icon, label, desktop, mobile, color, rgb }) => {
              const offset = +(C * (1 - desktop / 100)).toFixed(2);
              return (
                <li
                  key={label}
                  className={`${styles.glass} ${styles.glow} ${styles.railX} relative overflow-hidden rounded-3xl p-5 sm:p-7`}
                  style={{ "--cat": rgb } as React.CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">
                      <Icon className="h-4 w-4" style={{ color }} aria-hidden="true" />
                      {label}
                    </span>
                    <span className={`${styles.mono} text-[0.625rem] text-zinc-400`}>/100</span>
                  </div>

                  <div className="mt-5 flex items-center gap-5">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
                      role="img"
                      aria-label={`${label}: ${desktop} out of 100 on desktop, ${mobile} on mobile`}
                    >
                      <circle className={styles.ringTrack} cx="50" cy="50" r={R} fill="none" strokeWidth="6" />
                      <circle
                        className={styles.ringFill}
                        cx="50"
                        cy="50"
                        r={R}
                        fill="none"
                        stroke={color}
                        strokeWidth="6"
                        style={{ "--ring-c": C, "--ring-o": offset } as React.CSSProperties}
                      />
                    </svg>
                    <div aria-hidden="true">
                      <p className={`${styles.numeral} text-5xl font-extrabold sm:text-6xl`} style={{ color }}>
                        {desktop}
                      </p>
                      <p className={`${styles.mono} mt-3 text-[0.625rem] uppercase tracking-[0.18em] text-zinc-400`}>
                        Desktop · <span className="text-zinc-200">{mobile}</span> mobile
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
