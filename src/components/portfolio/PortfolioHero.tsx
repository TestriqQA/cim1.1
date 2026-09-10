import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { clientProjects } from "@/data/portfolio";

// Hub masthead. Server component; the <h1> is plain text and is the page's LCP
// element, so nothing animates it and there is no hero image competing with it.
//
// Deliberately quiet: a breadcrumb, a heading, one paragraph and three counts.
// The work below is what the page is for, so the header gets out of its way.
// Counts are derived from `clientProjects` at build time rather than typed in,
// so they cannot drift as case studies are added.

const container = "mx-auto px-6 md:px-12 xl:px-20";

export default function PortfolioHero() {
  const disciplines = new Set(clientProjects.map((p) => p.category)).size;
  const industries = new Set(clientProjects.map((p) => p.industry)).size;

  const facts = [
    { value: clientProjects.length, label: "Case studies" },
    { value: disciplines, label: "Disciplines" },
    { value: industries, label: "Industries" },
  ];

  return (
    <section
      className="py-14 md:py-20"
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
                className="inline-block rounded-sm px-1 py-1.5 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
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
          <h1
            id="portfolio-heading"
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            Our Portfolio
          </h1>

          <p
            className="mt-6 text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--secondary-text)" }}
          >
            Selected client work, written up in full. Each case study sets out the situation we
            walked into, what we were asked to do, the work itself, and what changed as a
            result — with the delivered work shown rather than described.
          </p>
        </div>

        <dl
          className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t pt-8"
          style={{ borderColor: "var(--border-color)" }}
        >
          {facts.map(({ value, label }) => (
            <div key={label}>
              <dd
                className="text-3xl font-bold tabular-nums md:text-4xl"
                style={{ color: "var(--foreground)" }}
              >
                {value}
              </dd>
              <dt className="mt-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                {label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
