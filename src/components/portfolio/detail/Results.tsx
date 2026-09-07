import { getCategoryMeta, type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Chapter 03 — Result. A bento board on a 6-column lg grid; spans derive from
// the count so 1–5 metrics all tile without holes.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

function span(index: number, total: number): { cls: string; feature: boolean } {
  if (total === 1) return { cls: "md:col-span-2 lg:col-span-6", feature: true };
  if (index === 0) return { cls: total % 2 === 1 ? "md:col-span-2 lg:col-span-4" : "lg:col-span-4", feature: true };
  if (index === 1) return { cls: "lg:col-span-2", feature: false };
  const remaining = total - 2;
  if (remaining === 1) return { cls: "lg:col-span-6", feature: false };
  return { cls: remaining % 3 === 0 ? "lg:col-span-2" : "lg:col-span-3", feature: false };
}

export default function Results({ project }: { project: ClientProject }) {
  const cat = getCategoryMeta(project.category);
  const total = project.metrics.length;

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--ink-2)" }} aria-labelledby="results-heading">
      <div className={container}>
        <header className={styles.reveal}>
          <div className="flex items-center gap-5 md:gap-8">
            <span aria-hidden="true" className={`${styles.numeral} text-5xl font-extrabold text-zinc-500 md:text-6xl`}>03</span>
            <span aria-hidden="true" className="h-px flex-1 bg-zinc-800" />
            <span className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.28em]`} style={{ color: cat.text }}>
              Result
            </span>
          </div>
          <h2 id="results-heading" className={`${styles.balance} mt-8 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl`}>
            Results
          </h2>
        </header>

        <ul className={`${styles.cascade} mt-14 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-6`}>
          {project.metrics.map((m, index) => {
            const s = span(index, total);
            return (
              <li key={m.label} className={s.cls}>
                <div
                  className={`${styles.glass} ${styles.railX} relative h-full overflow-hidden rounded-3xl p-7 md:p-9`}
                  style={{ "--cat": cat.rgb } as React.CSSProperties}
                >
                  <p className={`${styles.numeral} ${s.feature ? "text-6xl md:text-7xl xl:text-8xl" : "text-5xl md:text-6xl"} font-extrabold break-words`} style={{ color: cat.text }}>
                    {m.value}
                  </p>
                  <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white md:text-sm">{m.label}</h3>
                  {m.detail && <p className={`${styles.pretty} mt-3 max-w-[52ch] text-base leading-relaxed text-zinc-400`}>{m.detail}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
