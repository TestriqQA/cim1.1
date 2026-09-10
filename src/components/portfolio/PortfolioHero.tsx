import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { clientProjects, getCategoryMeta } from "@/data/portfolio";

// Hub masthead. Server component; the <h1> is plain text and paints first.
//
// The hero leads with an actual case study rather than with decoration. A
// portfolio index whose header is a heading, a paragraph and three abstract
// counts tells a visitor nothing about the work — putting the strongest project
// directly in the masthead shows it, and every element here is real data:
// the featured project, the derived counts and the client roster.

const container = "mx-auto px-6 md:px-12 xl:px-20";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function PortfolioHero() {
  // The lead card. Falls back to the first project so the hero never empties
  // if nothing is flagged `featured`.
  const featured = clientProjects.find((p) => p.featured) ?? clientProjects[0];
  const cat = featured ? getCategoryMeta(featured.category) : null;

  const disciplines = new Set(clientProjects.map((p) => p.category)).size;
  const industries = new Set(clientProjects.map((p) => p.industry)).size;

  const facts = [
    { value: clientProjects.length, label: "Case studies" },
    { value: disciplines, label: "Disciplines" },
    { value: industries, label: "Industries" },
  ];

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

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          {/* ---------------------------------------------------------- */}
          <div>
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
              className="mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              Every project below is written up in full: the situation we walked into, what we
              were asked to do, the work itself, and what changed as a result — with the
              delivered work shown, not just described.
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

            <dl
              className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t pt-7"
              style={{ borderColor: "var(--border-color)" }}
            >
              {facts.map(({ value, label }) => (
                <div key={label}>
                  <dd
                    className="text-2xl font-bold tabular-nums"
                    style={{ color: "var(--foreground)" }}
                  >
                    {value}
                  </dd>
                  <dt className="mt-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* ----------------------------------------------------------
              Featured case study — the work itself, in the masthead.
          ---------------------------------------------------------- */}
          {featured && cat && (
            <article
              className="relative overflow-hidden rounded-xl border transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {featured.cover && (
                <div
                  className="relative aspect-[16/10] w-full"
                  style={{ backgroundColor: "var(--hover-bg)" }}
                >
                  <Image
                    src={featured.cover.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-6 md:p-7">
                <p
                  className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--brand-blue-text)" }}
                >
                  <span>Featured</span>
                  <span aria-hidden="true" style={{ color: "var(--secondary-text)" }}>·</span>
                  <span style={{ color: "var(--secondary-text)" }}>{cat.label}</span>
                </p>

                <h2
                  className="mt-3 text-xl font-bold leading-snug md:text-2xl"
                  style={{ color: "var(--foreground)" }}
                >
                  {/* The one link; stretched over the card. */}
                  <Link
                    href={`/portfolio/${featured.slug}`}
                    className={`${focusRing} rounded-sm after:absolute after:inset-0 after:content-['']`}
                  >
                    {featured.title}
                  </Link>
                </h2>

                <p className="mt-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                  {featured.client} · {featured.industry}
                </p>

                <dl
                  className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t pt-5"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {featured.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <dd
                        className="text-lg font-bold leading-none"
                        style={{ color: "var(--brand-blue-text)" }}
                      >
                        {m.value}
                      </dd>
                      <dt
                        className="mt-1.5 text-xs leading-snug"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <p
                  aria-hidden="true"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--brand-blue-text)" }}
                >
                  Read case study
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </article>
          )}
        </div>

        {/* Client roster. Names rather than logo images: we hold marks for only
            two of the six, and a half-filled logo wall reads worse than a clean
            list. Swap to logos once the set is complete. */}
        <div
          className="mt-14 border-t pt-7"
          style={{ borderColor: "var(--border-color)" }}
        >
          <h2
            id="clients-heading"
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: "var(--secondary-text)" }}
          >
            Clients we have worked with
          </h2>
          <ul
            aria-labelledby="clients-heading"
            className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {clientProjects.map((project) => (
              <li
                key={project.slug}
                className="text-base font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {project.client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
