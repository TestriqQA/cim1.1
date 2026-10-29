import { type ClientProject } from "@/data/portfolio";

// The work, as an ordered sequence of steps.

export default function Approach({ project }: { project: ClientProject }) {
  return (
    <section id="approach" className="scroll-mt-24" aria-labelledby="approach-heading">
      <h2
        id="approach-heading"
        className="text-2xl font-bold tracking-tight md:text-3xl"
        style={{ color: "var(--foreground)" }}
      >
        What we did
      </h2>

      <ol className="mt-5 max-w-[68ch] space-y-5">
        {project.action.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums"
              style={{
                backgroundColor: "var(--background)",
                color: "var(--brand-blue-text)",
              }}
            >
              {index + 1}
            </span>
            <div className="min-w-0">
              <h3
                className="text-base font-bold leading-snug md:text-lg"
                style={{ color: "var(--foreground)" }}
              >
                {step.title}
              </h3>
              <p
                className="mt-1.5 text-base leading-relaxed"
                style={{ color: "var(--secondary-text)" }}
              >
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
