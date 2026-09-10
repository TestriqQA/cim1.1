import { type ClientProject } from "@/data/portfolio";

// Situation and task. Prose, rules and space — no card, no panel.
// The task is pulled out against a rule so the brief is unmistakable.

const container = "mx-auto px-6 md:px-12 xl:px-20";

export default function Challenge({ project }: { project: ClientProject }) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="challenge-heading"
    >
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
          <h2
            id="challenge-heading"
            className="text-2xl font-bold tracking-tight md:text-3xl"
            style={{ color: "var(--foreground)" }}
          >
            The challenge
          </h2>

          <div className="max-w-[68ch]">
            {project.situation.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base leading-relaxed md:text-lg ${index === 0 ? "" : "mt-5"}`}
                style={{ color: "var(--secondary-text)" }}
              >
                {paragraph}
              </p>
            ))}

            <div
              className="mt-8 border-l-2 pl-5"
              style={{ borderColor: "var(--brand-blue-text)" }}
            >
              <h3
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: "var(--secondary-text)" }}
              >
                The task
              </h3>
              <p
                className="mt-2 text-base font-medium leading-relaxed md:text-lg"
                style={{ color: "var(--foreground)" }}
              >
                {project.task}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
