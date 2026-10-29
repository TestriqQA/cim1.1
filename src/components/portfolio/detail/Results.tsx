import { type ClientProject } from "@/data/portfolio";

// Outcomes in full. The headline figures already appear in the masthead; this
// is where each one gets its explanation.
//
// Values are short STRINGS ("200+", "Strong", "Lower"), never assumed numeric —
// the site states outcomes in hedged language except where a figure is already
// published. `detail` is optional and guarded.

export default function Results({ project }: { project: ClientProject }) {
  return (
    <section id="results" className="scroll-mt-24" aria-labelledby="results-heading">
      <h2
        id="results-heading"
        className="text-2xl font-bold tracking-tight md:text-3xl"
        style={{ color: "var(--foreground)" }}
      >
        Results
      </h2>

      <dl className="mt-5 max-w-[68ch]">
        {project.metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`flex flex-wrap gap-x-6 gap-y-2 py-4 sm:flex-nowrap ${
              index === 0 ? "" : "border-t"
            }`}
            style={{ borderColor: "var(--border-color)" }}
          >
            <dt className="w-full sm:w-40 sm:shrink-0">
              <span
                className="block text-xl font-bold leading-none"
                style={{ color: "var(--brand-blue-text)" }}
              >
                {metric.value}
              </span>
              <span
                className="mt-1.5 block text-sm font-medium leading-snug"
                style={{ color: "var(--foreground)" }}
              >
                {metric.label}
              </span>
            </dt>
            <dd
              className="min-w-0 text-base leading-relaxed"
              style={{ color: "var(--secondary-text)" }}
            >
              {metric.detail ?? ""}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
