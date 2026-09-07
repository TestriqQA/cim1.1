import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getCategoryMeta, getNextProject, type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Cyclic forward link so a case file is never a dead end for readers or crawlers.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";
const ring = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";

export default function NextProject({ project }: { project: ClientProject }) {
  const next = getNextProject(project.slug);
  if (!next) return null;
  const cat = getCategoryMeta(next.category);

  return (
    <section className="border-t border-zinc-800 py-20 md:py-28" style={{ backgroundColor: "var(--ink-2)" }} aria-labelledby="next-project-heading">
      <div className={container}>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>Next case file</p>
          <Link href="/portfolio" className={`${ring} inline-flex items-center gap-1.5 rounded-md text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 hover:text-white`}>
            All case files
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.reveal}>
          <Link
            href={`/portfolio/${next.slug}`}
            className={`${styles.glass} ${styles.glow} ${styles.railX} ${ring} group relative block overflow-hidden rounded-3xl p-8 md:p-12`}
            style={{ "--cat": cat.rgb } as React.CSSProperties}
          >
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
              <span className="font-bold text-white">{next.client}</span>
              <span aria-hidden="true">·</span>
              <span>{next.industry}</span>
              <span aria-hidden="true">·</span>
              <span style={{ color: cat.text }}>{cat.label}</span>
            </p>
            <h2 id="next-project-heading" className={`${styles.balance} mt-5 max-w-4xl text-3xl font-extrabold leading-[1.02] tracking-tight text-white md:text-5xl lg:text-6xl`}>
              {next.title}
            </h2>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em]" style={{ color: cat.text }}>
              Read the case file
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
