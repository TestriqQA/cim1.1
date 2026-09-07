import { getCategoryMeta, type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Chapter 01 — Situation & Task. Rules and space, no card.
// The task is pulled out as a bordered statement so the brief is unmistakable.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

export default function Challenge({ project }: { project: ClientProject }) {
  const cat = getCategoryMeta(project.category);

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--ink-2)" }} aria-labelledby="challenge-heading">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-5 md:gap-8">
              <span aria-hidden="true" className={`${styles.numeral} text-5xl font-extrabold text-zinc-500 md:text-6xl`}>01</span>
              <span aria-hidden="true" className="h-px flex-1 bg-zinc-800" />
              <span className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.28em]`} style={{ color: cat.text }}>
                Situation · Task
              </span>
            </div>
            <h2
              id="challenge-heading"
              className={`${styles.balance} mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl`}
            >
              The challenge
            </h2>
          </div>

          <div className={styles.cascade}>
            {project.situation.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.pretty} max-w-[68ch] leading-relaxed ${index === 0 ? "text-xl font-medium text-zinc-100 md:text-2xl" : "mt-8 text-lg text-zinc-400 md:text-xl"}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 border-l-2 pl-6" style={{ borderColor: cat.glow }}>
              <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.28em]`} style={{ color: cat.text }}>
                The task
              </p>
              <p className={`${styles.pretty} mt-3 max-w-[60ch] text-lg font-semibold leading-relaxed text-white md:text-xl`}>
                {project.task}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
