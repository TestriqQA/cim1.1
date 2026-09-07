import { clientProjects, portfolioStack, serviceCategories } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Section 5 — Tech stack & environment arrays.
//
// Server component. Per-project badges live on each bento card; this block is
// the aggregate view: a marquee band (decorative, aria-hidden — the same items
// are listed accessibly beneath it) and an environment matrix grouping every
// technology by the service category it was used under. Both derive from the
// data; nothing is typed in twice.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

export default function StackEnvironment() {
  const byCategory = serviceCategories
    .map((cat) => ({
      cat,
      stack: Array.from(
        new Set(clientProjects.filter((p) => p.category === cat.id).flatMap((p) => p.stack))
      ),
    }))
    .filter((g) => g.stack.length > 0);

  return (
    <section className="py-20 md:py-28" aria-labelledby="stack-heading">
      <div className={container}>
        <div className={`${styles.reveal} max-w-3xl`}>
          <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>
            05 · Environment
          </p>
          <h2
            id="stack-heading"
            className={`${styles.balance} mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl`}
          >
            The stack behind the work
          </h2>
          <p className={`${styles.pretty} mt-6 text-base leading-relaxed text-zinc-400 md:text-lg`}>
            {portfolioStack.length} technologies and platforms in production across the case
            files, grouped by the discipline they were used under.
          </p>
        </div>
      </div>

      {/* Marquee band — decorative; the matrix below is the accessible copy. */}
      <div aria-hidden="true" className={`${styles.marqueeViewport} mt-12 border-y border-zinc-800/80 py-4`}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-3 pr-3">
              {portfolioStack.map((item) => (
                <li key={item} className={`${styles.badge} rounded-md px-3 py-1.5 whitespace-nowrap`}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className={container}>
        <ul className={`${styles.cascade} mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {byCategory.map(({ cat, stack }) => (
            <li
              key={cat.id}
              className={`${styles.glass} ${styles.railX} relative overflow-hidden rounded-2xl p-5`}
              style={{ "--cat": cat.rgb } as React.CSSProperties}
            >
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: cat.text }}>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: cat.glow }} />
                {cat.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li key={item} className={`${styles.badge} rounded-md px-2.5 py-1`}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
