import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { getCategoryMeta, type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Case-file masthead. Server component; the h1 is plain text (LCP).
// Leads with the outcome: every metric sits in the hero as an oversized strip.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";
const ring = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

export default function ProjectHero({ project }: { project: ClientProject }) {
  const cat = getCategoryMeta(project.category);

  return (
    <>
      <div
        aria-hidden="true"
        className={styles.readingBar}
        style={{ background: `linear-gradient(90deg, ${cat.glow}, #a855f7)` }}
      />

      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24" aria-labelledby="project-hero-heading">
        <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
          <div className={styles.gridField} />
          <div className={styles.grain} />
          <div
            className={`${styles.blob} ${styles.blobDrift} -top-40 -left-24 h-[30rem] w-[30rem]`}
            style={{ backgroundColor: `rgb(${cat.rgb} / 18%)` }}
          />
          <div
            className={`${styles.blob} ${styles.blobDriftSlow} -bottom-48 right-[-8rem] h-[32rem] w-[32rem]`}
            style={{ backgroundColor: "rgb(168 85 247 / 10%)" }}
          />
        </div>

        <div className={`${container} relative z-10`}>
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-400">
              <li><Link href="/" className={`${ring} inline-block rounded-sm px-1 py-1.5 hover:text-white hover:underline`}>Home</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/portfolio" className={`${ring} inline-block rounded-sm px-1 py-1.5 hover:text-white hover:underline`}>Portfolio</Link></li>
              <li aria-hidden="true" className="flex items-center"><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="py-1.5 font-semibold text-white">{project.client}</li>
            </ol>
          </nav>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {project.logo && (
              <div className="relative aspect-square h-11 w-11 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/80">
                <Image src={project.logo} alt="" fill sizes="44px" priority className="object-contain p-1.5" />
              </div>
            )}
            <p className="text-base font-bold text-white">{project.client}</p>
            <span aria-hidden="true" className="hidden h-4 w-px bg-zinc-700 sm:block" />
            <p className="text-sm text-zinc-400">{project.industry}</p>
            <span
              className={`${styles.mono} inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.16em]`}
              style={{ borderColor: `rgb(${cat.rgb} / 40%)`, color: cat.text }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: cat.glow }} />
              {cat.label}
            </span>
          </div>

          <h1
            id="project-hero-heading"
            className={`${styles.balance} mt-8 max-w-5xl text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5rem]`}
          >
            {project.title}
          </h1>

          <p className={`${styles.pretty} mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-2xl`}>
            {project.summary}
          </p>

          {/* Metric strip */}
          <div
            aria-hidden="true"
            className="mt-14 h-px w-full"
            style={{ background: `linear-gradient(90deg, ${cat.glow}, transparent 60%)` }}
          />
          <dl className={`${styles.cascade} mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
            {project.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col-reverse ${i > 0 ? "border-t border-zinc-800 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8" : ""}`}
              >
                <dt className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">{m.label}</dt>
                <dd className={`${styles.numeral} text-5xl font-extrabold md:text-6xl`} style={{ color: cat.text }}>
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Services delivered — real links into the service silo */}
          <nav aria-labelledby="services-delivered-heading" className="mt-14">
            <h2 id="services-delivered-heading" className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>
              Services delivered
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {project.servicesDelivered.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className={`${styles.glass} ${styles.railX} ${ring} group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-600`}
                    style={{ "--cat": cat.rgb } as React.CSSProperties}
                  >
                    {s.name}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: cat.text }} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
