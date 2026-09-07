import { getCategoryMeta, type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Chapter 02 — Action. The sticky card stack: each step pins a little lower
// than the last and the steps pile up as the reader scrolls (md and up).
// The run-out room is the <ol>'s OWN bottom padding — sticky is constrained to
// its containing block, so a sibling spacer would do nothing.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

export default function Approach({ project }: { project: ClientProject }) {
  const cat = getCategoryMeta(project.category);

  return (
    <section className="py-20 md:py-28" aria-labelledby="approach-heading">
      <div className={container}>
        <header className={styles.reveal}>
          <div className="flex items-center gap-5 md:gap-8">
            <span aria-hidden="true" className={`${styles.numeral} text-5xl font-extrabold text-zinc-500 md:text-6xl`}>02</span>
            <span aria-hidden="true" className="h-px flex-1 bg-zinc-800" />
            <span className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.28em]`} style={{ color: cat.text }}>
              Action
            </span>
          </div>
          <h2
            id="approach-heading"
            className={`${styles.balance} mt-8 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl`}
          >
            What we did
          </h2>
        </header>

        <ol className="mt-14 space-y-6 pb-[25vh] md:mt-20 md:space-y-8 md:pb-[45vh]">
          {project.action.map((step, index) => (
            <li key={step.title} className={styles.stackCard} style={{ "--i": index } as React.CSSProperties}>
              <div
                className={`${styles.glassStrong} ${styles.railX} relative overflow-hidden rounded-3xl p-7 md:p-12`}
                style={{ "--cat": cat.rgb, backgroundColor: "#111114" } as React.CSSProperties}
              >
                <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                  <span aria-hidden="true" className={`${styles.numeral} text-6xl font-extrabold md:shrink-0 md:text-7xl xl:text-8xl`} style={{ color: cat.text }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`${styles.balance} text-2xl font-extrabold leading-snug text-white md:text-3xl`}>{step.title}</h3>
                    <p className={`${styles.pretty} mt-4 max-w-[62ch] text-base leading-relaxed text-zinc-400 md:text-lg`}>{step.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
