import { type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Outcomes. A uniform grid, not a bento — every metric gets the same weight so
// the reader compares them rather than being told which one matters.
//
// Values are short STRINGS ("200+", "Strong", "Lower"), never assumed numeric:
// the site states outcomes in hedged language except where a figure is already
// published. `detail` is optional and guarded.

const container = "mx-auto px-6 md:px-12 xl:px-20";

export default function Results({ project }: { project: ClientProject }) {
  return (
    // `border-t` is insurance, not decoration: the Gallery above is optional,
    // so on a project with no media this section would otherwise sit against
    // Approach, which shares its background. The hairline keeps the seam.
    <section
      className="border-t py-16 md:py-24"
      style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
      aria-labelledby="results-heading"
    >
      <div className={container}>
        <h2
          id="results-heading"
          className="text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: "var(--foreground)" }}
        >
          Results
        </h2>

        <ul className={`${styles.cascade} mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3`}>
          {project.metrics.map((metric) => (
            <li key={metric.label}>
              <div
                className="flex h-full flex-col rounded-xl border p-6"
                style={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border-color)",
                }}
              >
                <p
                  className="text-3xl font-bold leading-none"
                  style={{ color: "var(--brand-blue-text)" }}
                >
                  {metric.value}
                </p>
                <h3
                  className="mt-4 text-sm font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {metric.label}
                </h3>
                {metric.detail && (
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {metric.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
