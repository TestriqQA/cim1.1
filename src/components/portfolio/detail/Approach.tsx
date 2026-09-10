import { type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// What we did, as an ordered list of steps. A plain numbered sequence: the
// previous version pinned each step as a sticky stacking card, which looked
// busy and made the section hard to skim.

const container = "mx-auto px-6 md:px-12 xl:px-20";

export default function Approach({ project }: { project: ClientProject }) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="approach-heading"
    >
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
          <h2
            id="approach-heading"
            className="text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: "var(--foreground)" }}
          >
            What we did
          </h2>

          <ol
            className={`${styles.cascade} max-w-[68ch] border-t`}
            style={{ borderColor: "var(--border-color)" }}
          >
            {project.action.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[minmax(0,2.5rem)_minmax(0,1fr)] gap-4 border-b py-6"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  aria-hidden="true"
                  className="text-sm font-bold tabular-nums"
                  style={{ color: "var(--brand-blue-text)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ color: "var(--foreground)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
