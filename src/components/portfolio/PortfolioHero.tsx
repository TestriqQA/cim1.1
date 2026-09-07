import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { portfolioAggregates, serviceCategories } from "@/data/portfolio";
import CountUp from "@/components/portfolio/CountUp";
import styles from "@/components/portfolio/portfolio.module.css";

// Section 1 — Hero & real-time stats cell.
//
// Server component. The <h1> is the page's LCP element and is plain text:
// nothing animates it and no image competes with it. The right-hand stats cell
// is the only client-touching part, via the CountUp leaf.
//
// The counters are DERIVED or already PUBLISHED, never typed in: "50+ projects"
// and "200+ hours/month" both appear on the homepage; the rest are computed
// from `clientProjects` at build time.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered", note: "Across engineering and marketing" },
  { value: 200, suffix: "+", label: "Hours automated / month", note: "On a single AI engagement" },
  { value: portfolioAggregates.caseStudies, suffix: "", label: "Case studies published", note: "Written up in full below" },
  { value: portfolioAggregates.technologies, suffix: "", label: "Technologies in production", note: "Across the portfolio stack" },
];

export default function PortfolioHero() {
  return (
    <section
      className="relative pt-8 pb-20 md:pt-12 md:pb-28"
      aria-labelledby="portfolio-heading"
    >
      {/* Reading bar: fixed, so placement here is arbitrary. */}
      <div
        aria-hidden="true"
        className={styles.readingBar}
        style={{ background: "linear-gradient(90deg, #06b6d4, #a855f7)" }}
      />

      {/* Decorative field. Clipped in its own wrapper — nothing revealed or
          sticky lives inside it. */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div className={styles.gridField} />
        <div className={styles.grain} />
        <div
          className={`${styles.blob} ${styles.blobDrift} -top-48 -left-32 h-[34rem] w-[34rem]`}
          style={{ backgroundColor: "rgb(6 182 212 / 16%)" }}
        />
        <div
          className={`${styles.blob} ${styles.blobDriftSlow} -bottom-56 right-[-10rem] h-[38rem] w-[38rem]`}
          style={{ backgroundColor: "rgb(168 85 247 / 14%)" }}
        />
        <div className={styles.scanline} />
      </div>

      <div className={`${container} relative z-10`}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-400">
            <li>
              <Link
                href="/"
                className="inline-block rounded-sm px-1 py-1.5 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="py-1.5 font-semibold text-cyan-400">
              Portfolio
            </li>
          </ol>
        </nav>

        {/* Asymmetric split: 7 / 5 */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* ------------------------------------------------------------- */}
          <div className="min-w-0 lg:col-span-7">
            <p className={`${styles.mono} flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>
              <span aria-hidden="true" className={`${styles.pulse} h-1.5 w-1.5 rounded-full bg-emerald-400`} />
              Case files · Live
            </p>

            <h1
              id="portfolio-heading"
              className={`${styles.balance} mt-7 text-[2.75rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]`}
            >
              Our{" "}
              <span className="text-cyan-400">Portfolio</span>
            </h1>

            <p className={`${styles.pretty} mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl`}>
              Client work, written up in full. Each case file below states the situation we
              walked into, the task we were given, what we actually did, and the outcome — in
              the same language we would use to your face. Where a number is published, it is
              here; where it is not, we say so.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#case-files"
                className={`${styles.neon} inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400`}
                style={{ "--cat": "6 182 212" } as React.CSSProperties}
              >
                Browse the case files
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/get-in-touch"
                className={`${styles.neonOutline} inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400`}
              >
                Start a project
              </Link>
            </div>

            {/* Taxonomy legend */}
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3" aria-label="Service categories">
              {serviceCategories.map((cat) => (
                <li key={cat.id} className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-400">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: cat.glow, boxShadow: `0 0 12px ${cat.glow}` }}
                  />
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Stats cell */}
          <div className="lg:col-span-5">
            <div className={`${styles.glassStrong} relative overflow-hidden rounded-3xl p-6 sm:p-8`}>
              {/* Signal line — decorative */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 120"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 w-full opacity-40"
                preserveAspectRatio="none"
              >
                <polyline
                  className={styles.signal}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  points="0,90 40,86 70,70 100,74 130,40 160,52 190,22 220,48 250,36 280,60 310,44 340,58 370,30 400,38"
                />
              </svg>

              <p className={`${styles.mono} relative flex items-center justify-between text-[0.6875rem] uppercase tracking-[0.28em] text-zinc-400`}>
                <span>Aggregate outcomes</span>
                <span aria-hidden="true" className="text-zinc-400">v.{portfolioAggregates.caseStudies}.0</span>
              </p>

              <ul className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-8" aria-label="Aggregate outcomes">
                {stats.map((s) => (
                  <li key={s.label} className="min-w-0">
                    <p className={`${styles.numeral} text-4xl font-extrabold text-white sm:text-5xl`}>
                      <CountUp value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-zinc-300">
                      {s.label}
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">{s.note}</p>
                  </li>
                ))}
              </ul>

              <p className="relative mt-8 border-t border-zinc-800 pt-4 text-[0.6875rem] leading-relaxed text-zinc-400">
                Published figures only. Counts derive from the case files on this page at build time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
