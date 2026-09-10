import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { getHighlightMetrics } from "@/data/portfolio";

// Hub masthead. Server component; the <h1> is plain text and paints first.
//
// The strip below the intro is the point of the hero: the strongest measured
// outcomes from across the portfolio, each credited to the client it belongs to
// and linking into that case study. It answers "why should I care" before the
// reader has scrolled, and it is proof rather than decoration — every figure is
// a real published outcome, not a claim written for the header.
//
// Which metrics appear is a DATA decision (`highlight: true` in
// data/portfolio.ts), not a hand-picked list here, so a figure can never end up
// credited to the wrong client.

const container = "mx-auto px-6 md:px-12 xl:px-20";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function PortfolioHero() {
  const highlights = getHighlightMetrics();

  return (
    <section
      className="pt-12 pb-14 md:pt-16 md:pb-20"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="portfolio-heading"
    >
      <div className={container}>
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <li>
              <Link
                href="/"
                className={`${focusRing} inline-block rounded-sm px-1 py-1.5 hover:underline`}
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li
              aria-current="page"
              className="py-1.5 font-semibold"
              style={{ color: "var(--brand-blue-text)" }}
            >
              Portfolio
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Client work
          </p>

          <h1
            id="portfolio-heading"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            Our Portfolio
          </h1>

          <p
            className="mt-6 text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--secondary-text)" }}
          >
            Every project below is written up in full — the situation, the task, the work
            itself, and what changed as a result.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#case-studies"
              className={`${focusRing} inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90`}
              style={{ backgroundColor: "var(--brand-blue-btn)" }}
            >
              Browse the work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/get-in-touch"
              className={`${focusRing} inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors duration-300`}
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
                color: "var(--foreground)",
              }}
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Measured outcomes, credited and linked.
        ------------------------------------------------------------------ */}
        {highlights.length > 0 && (
          <div
            className="mt-14 border-t pt-10"
            style={{ borderColor: "var(--border-color)" }}
          >
            <h2 id="outcomes-heading" className="sr-only">
              Selected outcomes
            </h2>

            <ul
              aria-labelledby="outcomes-heading"
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
            >
              {highlights.map(({ metric, project }) => (
                <li
                  key={project.slug + metric.label}
                  // `relative` anchors the stretched link; the rule sits on the
                  // left from lg up, where the items sit side by side.
                  className="relative lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <p
                    className="text-4xl font-bold leading-none tracking-tight md:text-5xl"
                    style={{ color: "var(--foreground)" }}
                  >
                    {metric.value}
                  </p>

                  <p
                    className="mt-3 text-base font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {metric.label}
                  </p>

                  <p className="mt-4">
                    {/* One link per item, stretched over the whole cell. Its
                        accessible name names the outcome as well as the client,
                        so it still makes sense read out of context. */}
                    <Link
                      href={`/portfolio/${project.slug}`}
                      aria-label={`${metric.value} ${metric.label} — read the ${project.client} case study`}
                      className={`${focusRing} inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold after:absolute after:inset-0 after:content-['']`}
                      style={{ color: "var(--brand-blue-text)" }}
                    >
                      {project.client}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
