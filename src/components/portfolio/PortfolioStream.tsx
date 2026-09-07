"use client";

import { useMemo, useState, type CSSProperties } from "react";
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

// Sections 2 + 3 — Taxonomy filter and the bento stream.
//
// The route's one substantial client component. Filtering is local state on a
// single URL (no router, no ?category=), computed with useMemo so unselected
// projects are not merely hidden but UNMOUNTED — the DOM only ever contains
// what the filter shows.
//
// The bento is a 3-column grid with `grid-flow-dense`: featured projects span
// two columns, the rest one, and the browser backfills gaps so any filter
// result tiles cleanly. Cards carry the full STAR ledger (Situation / Task /
// Action / Result) — the case file is readable here; the detail page adds depth.

type Filter = ServiceCategory | "all";

type CatStyle = CSSProperties & { "--cat": string };

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

export default function PortfolioStream({ projects }: { projects: ClientProject[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Only categories that actually have projects, in taxonomy order.
  const filters = useMemo<Filter[]>(
    () => ["all", ...serviceCategories.filter((c) => projects.some((p) => p.category === c.id)).map((c) => c.id)],
    [projects]
  );

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  const counts = useMemo(() => {
    const m = new Map<Filter, number>([["all", projects.length]]);
    for (const p of projects) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
  }, [projects]);

  return (
    <section id="case-files" className="scroll-mt-24 py-12 md:py-16" aria-labelledby="case-files-heading">
      <div className={container}>
        <div className={`${styles.reveal} max-w-3xl`}>
          <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>
            02 · Taxonomy &nbsp;/&nbsp; 03 · Case files
          </p>
          <h2
            id="case-files-heading"
            className={`${styles.balance} mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl`}
          >
            Selected client work
          </h2>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Persistent glass filter pill                                    */}
        {/* ------------------------------------------------------------- */}
        <div className={`${styles.stickyPill} mt-10`}>
          <div
            role="group"
            aria-label="Filter case files by service category"
            className={`${styles.glassStrong} inline-flex max-w-full flex-wrap gap-1.5 rounded-full p-1.5`}
          >
            {filters.map((f) => {
              const active = f === filter;
              const cat = f === "all" ? null : getCategoryMeta(f);
              const label = f === "all" ? "All work" : cat!.short;
              const rgb = cat ? cat.rgb : "250 250 250";
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`${styles.mono} ${focusRing} inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300`}
                  style={
                    active
                      ? { backgroundColor: `rgb(${rgb})`, color: "#09090b", boxShadow: `0 0 24px -4px rgb(${rgb} / 60%)` }
                      : { color: "#d4d4d8" }
                  }
                >
                  {cat ? (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: active ? "#09090b" : cat.glow }}
                    />
                  ) : null}
                  {label}
                  {/* Inherits the ink colour when active — zinc-800 on the
                      purple pill only reached 3.8:1. */}
                  <span className={active ? "" : "text-zinc-400"} aria-hidden="true">
                    {counts.get(f) ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p role="status" aria-live="polite" className="sr-only">
          {visible.length === 1 ? "Showing 1 case file" : `Showing ${visible.length} case files`}
        </p>

        {/* ------------------------------------------------------------- */}
        {/* Bento stream                                                    */}
        {/* ------------------------------------------------------------- */}
        {visible.length > 0 ? (
          <ol className={`${styles.cascade} mt-8 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3`}>
            {visible.map((project) => {
              const cat = getCategoryMeta(project.category);
              const catStyle: CatStyle = { "--cat": cat.rgb };
              const totalWeight = project.phases.reduce((s, p) => s + p.weight, 0);

              return (
                <li key={project.slug} className={project.featured ? "md:col-span-2" : ""}>
                  <article
                    className={`${styles.glass} ${styles.glow} ${styles.railX} relative flex h-full flex-col overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-7`}
                    style={catStyle}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* Fixed aspect box so the mark never shifts layout. */}
                        <div className="relative aspect-square h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/80">
                          {project.logo ? (
                            <Image src={project.logo} alt="" fill sizes="40px" className="object-contain p-1.5" />
                          ) : (
                            <span
                              aria-hidden="true"
                              className={`${styles.mono} flex h-full w-full items-center justify-center text-sm font-bold`}
                              style={{ color: cat.text }}
                            >
                              {project.client.slice(0, 1)}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-white">{project.client}</p>
                          <p className="truncate text-xs text-zinc-400">{project.industry}</p>
                        </div>
                      </div>
                      <span
                        className={`${styles.mono} inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em]`}
                        style={{ borderColor: `rgb(${cat.rgb} / 40%)`, color: cat.text }}
                      >
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: cat.glow }} />
                        {cat.short}
                      </span>
                    </div>

                    {/* Title — the ONE link; stretched over the card. */}
                    <h3 className={`${styles.balance} mt-5 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl ${project.featured ? "lg:text-3xl" : ""}`}>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className={`${focusRing} rounded-sm after:absolute after:inset-0 after:content-['']`}
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className={`${styles.pretty} mt-3 text-sm leading-relaxed text-zinc-400 md:text-[0.9375rem]`}>
                      {project.summary}
                    </p>

                    {/* STAR ledger */}
                    <dl className={`mt-6 grid gap-x-6 gap-y-5 border-t border-zinc-800 pt-5 ${project.featured ? "sm:grid-cols-2" : ""}`}>
                      <div>
                        <dt className={`${styles.mono} text-[0.625rem] uppercase tracking-[0.24em]`} style={{ color: cat.text }}>
                          S · Situation
                        </dt>
                        <dd className={`${styles.pretty} mt-2 text-sm leading-relaxed text-zinc-300`}>
                          {project.situation[0]}
                        </dd>
                      </div>
                      <div>
                        <dt className={`${styles.mono} text-[0.625rem] uppercase tracking-[0.24em]`} style={{ color: cat.text }}>
                          T · Task
                        </dt>
                        <dd className={`${styles.pretty} mt-2 text-sm leading-relaxed text-zinc-300`}>
                          {project.task}
                        </dd>
                      </div>
                      <div className={project.featured ? "sm:col-span-2" : ""}>
                        <dt className={`${styles.mono} text-[0.625rem] uppercase tracking-[0.24em]`} style={{ color: cat.text }}>
                          A · Action
                        </dt>
                        <dd className="mt-2">
                          <ol className={`grid gap-x-6 gap-y-1.5 ${project.featured ? "sm:grid-cols-2" : ""}`}>
                            {project.action.map((step, i) => (
                              <li key={step.title} className="flex gap-2.5 text-sm text-zinc-300">
                                <span aria-hidden="true" className={`${styles.mono} shrink-0 text-xs text-zinc-400`}>
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span>{step.title}</span>
                              </li>
                            ))}
                          </ol>
                        </dd>
                      </div>
                      <div className={project.featured ? "sm:col-span-2" : ""}>
                        <dt className={`${styles.mono} text-[0.625rem] uppercase tracking-[0.24em]`} style={{ color: cat.text }}>
                          R · Result
                        </dt>
                        <dd className="mt-3">
                          <ul className={`grid gap-4 ${project.featured ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
                            {project.metrics.slice(0, project.featured ? 3 : 2).map((m) => (
                              <li key={m.label} className="min-w-0">
                                <p className={`${styles.numeral} text-2xl font-extrabold sm:text-3xl`} style={{ color: cat.text }}>
                                  {m.value}
                                </p>
                                <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.12em] text-zinc-400">
                                  {m.label}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>

                    {/* Engagement composition — a segmented bar, not a chart lib. */}
                    {/* A composite graphic: role="img" lets the wrapper carry a
                        single accessible name, which a bare <div> cannot. */}
                    <div className="mt-6" role="img" aria-label={`Engagement phases: ${project.phases.map((p) => p.label).join(", ")}`}>
                      <div className="flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full" aria-hidden="true">
                        {project.phases.map((p, i) => (
                          <span
                            key={p.label}
                            className="h-full"
                            style={{
                              width: `${(p.weight / totalWeight) * 100}%`,
                              backgroundColor: `rgb(${cat.rgb} / ${Math.max(0.3, 1 - i * 0.2)})`,
                            }}
                          />
                        ))}
                      </div>
                      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1" aria-hidden="true">
                        {project.phases.map((p) => (
                          <li key={p.label} className={`${styles.mono} text-[0.625rem] uppercase tracking-[0.14em] text-zinc-400`}>
                            {p.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack badges */}
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.client} stack`}>
                      {project.stack.map((item) => (
                        <li key={item} className={`${styles.badge} rounded-md px-2 py-0.5`}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Affordance only — the title above is the link. */}
                    <p className="mt-auto flex items-center gap-1.5 pt-6 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: cat.text }} aria-hidden="true">
                      Open case file
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        ) : (
          <div className={`${styles.glass} mt-8 rounded-3xl p-10 text-center`}>
            <p className="text-lg font-semibold text-white">No case files in that category yet.</p>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`${styles.neon} ${focusRing} mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-bold`}
              style={{ "--cat": "6 182 212" } as CatStyle}
            >
              Show all work
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
