import { type ClientProject } from "@/data/portfolio";

// Situation and task. A content block inside the case-study article — the
// surrounding layout owns the background and the dividers.

export default function Challenge({ project }: { project: ClientProject }) {
  return (
    <section id="challenge" className="scroll-mt-24" aria-labelledby="challenge-heading">
      <h2
        id="challenge-heading"
        className="text-2xl font-bold tracking-tight md:text-3xl"
        style={{ color: "var(--foreground)" }}
      >
        The challenge
      </h2>

      <div className="mt-5 max-w-[68ch]">
        {project.situation.map((paragraph, index) => (
          <p
            key={index}
            className={`text-base leading-relaxed md:text-lg ${index === 0 ? "" : "mt-4"}`}
            style={{ color: "var(--secondary-text)" }}
          >
            {paragraph}
          </p>
        ))}

        <div
          className="mt-6 rounded-lg border-l-2 p-4"
          style={{
            borderColor: "var(--brand-blue-text)",
            backgroundColor: "var(--background)",
          }}
        >
          <h3
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: "var(--secondary-text)" }}
          >
            What we were asked to do
          </h3>
          <p
            className="mt-2 text-base font-medium leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            {project.task}
          </p>
        </div>
      </div>
    </section>
  );
}
