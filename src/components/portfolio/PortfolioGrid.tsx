"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  serviceCategories,
  getCategoryMeta,
  type ClientProject,
  type ServiceCategory,
} from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// The project index. The only client component on the route: a category filter
// held in local state on a single URL — no router push and no `?category=`
// param, because filtering a handful of cards is not a navigation.
//
// `useMemo` means filtered-out projects are UNMOUNTED rather than hidden, so
// the DOM only ever holds what is on screen.
//
// One card shape for every project, in a plain three-up grid. An earlier
// version varied card sizes by "featured" flag, which made the page harder to
// scan for no gain — a portfolio index should let work be compared, not rank it
// with layout.

type Filter = ServiceCategory | "all";

const container = "mx-auto px-6 md:px-12 xl:px-20";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function PortfolioGrid({ projects }: { projects: ClientProject[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Only categories actually represented, in taxonomy order — the bar can never
  // offer a filter that returns nothing.
  const filters = useMemo<Filter[]>(
    () => [
      "all",
      ...serviceCategories
        .filter((c) => projects.some((p) => p.category === c.id))
        .map((c) => c.id),
    ],
    [projects]
  );

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 py-16 md:py-24"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="projects-heading"
    >
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="projects-heading"
            className="text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: "var(--foreground)" }}
          >
            Case studies
          </h2>

          {/* Filter. `role="group"` + `aria-pressed`, not a tablist: these
              buttons filter a list in place, they do not switch panels. */}
          <div
            role="group"
            aria-label="Filter case studies by service"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const active = f === filter;
              const label = f === "all" ? "All" : getCategoryMeta(f).short;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`${focusRing} rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200`}
                  style={
                    active
                      ? {
                          backgroundColor: "var(--brand-blue-btn)",
                          borderColor: "var(--brand-blue-btn)",
                          color: "#ffffff",
                        }
                      : {
                          backgroundColor: "var(--background)",
                          borderColor: "var(--border-color)",
                          color: "var(--secondary-text)",
                        }
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtering changes the list without moving focus, so the new count is
            announced politely rather than silently. */}
        <p role="status" aria-live="polite" className="sr-only">
          {visible.length === 1
            ? "Showing 1 case study"
            : `Showing ${visible.length} case studies`}
        </p>

        {visible.length > 0 ? (
          <ul
            className={`${styles.cascade} mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3`}
          >
            {visible.map((project) => {
              const cat = getCategoryMeta(project.category);
              return (
                <li key={project.slug}>
                  <article
                    className={`relative flex h-full flex-col overflow-hidden rounded-xl border transition-shadow duration-300 hover:shadow-lg`}
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {project.cover && (
                      // Fixed aspect box: the intrinsic size is declared in the
                      // data, so nothing shifts while the image loads.
                      <div
                        className="relative aspect-[16/9] w-full overflow-hidden"
                        style={{ backgroundColor: "var(--hover-bg)" }}
                      >
                        <Image
                          src={project.cover.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <p
                        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                          {project.client}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.industry}</span>
                      </p>

                      <h3
                        className="mt-3 text-lg font-bold leading-snug"
                        style={{ color: "var(--foreground)" }}
                      >
                        {/* The one link per card; the pseudo-element stretches
                            it over the whole card so the card is clickable but
                            only one destination is announced. */}
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className={`${focusRing} rounded-sm after:absolute after:inset-0 after:content-['']`}
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p
                        className="mt-3 text-sm leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        {project.summary}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        <li
                          className="rounded-md border px-2 py-1 text-xs font-medium"
                          style={{
                            borderColor: "var(--border-color)",
                            backgroundColor: "var(--card-bg)",
                            color: "var(--brand-blue-text)",
                          }}
                        >
                          {cat.label}
                        </li>
                        <li
                          className="rounded-md border px-2 py-1 text-xs"
                          style={{
                            borderColor: "var(--border-color)",
                            backgroundColor: "var(--card-bg)",
                            color: "var(--secondary-text)",
                          }}
                        >
                          {project.year}
                        </li>
                      </ul>

                      {/* Headline outcomes: the two strongest, stated plainly. */}
                      <dl
                        className="mt-auto grid grid-cols-2 gap-4 border-t pt-5"
                        style={{ borderColor: "var(--border-color)", marginTop: "1.5rem" }}
                      >
                        {project.metrics.slice(0, 2).map((m) => (
                          <div key={m.label} className="min-w-0">
                            <dd
                              className="text-xl font-bold"
                              style={{ color: "var(--foreground)" }}
                            >
                              {m.value}
                            </dd>
                            <dt
                              className="mt-1 text-xs leading-snug"
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
                        <ArrowUpRight className="h-4 w-4" />
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-10 text-base" style={{ color: "var(--secondary-text)" }}>
            No case studies in that category yet.
          </p>
        )}
      </div>
    </section>
  );
}
