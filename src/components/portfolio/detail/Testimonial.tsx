import { type ClientProject } from "@/data/portfolio";

// Optional. Renders NOTHING when a project has no signed-off quote, so the page
// can mount it unconditionally without risking an empty shell.
//
// Attributed to the client COMPANY, matching how the site credits quotes
// elsewhere — no invented people, no avatars, no job titles.

const container = "mx-auto px-6 md:px-12 xl:px-20";

export default function Testimonial({ project }: { project: ClientProject }) {
  if (!project.testimonial) return null;

  const { quote, attribution, role } = project.testimonial;

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="testimonial-heading"
    >
      <div className={container}>
        <h2 id="testimonial-heading" className="sr-only">
          What the client said
        </h2>

        <figure
          className="max-w-3xl border-l-2 pl-6 md:pl-8"
          style={{ borderColor: "var(--brand-blue-text)" }}
        >
          <blockquote>
            <p
              className="text-xl font-medium leading-relaxed md:text-2xl"
              style={{ color: "var(--foreground)" }}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6">
            <cite className="text-base font-semibold not-italic" style={{ color: "var(--foreground)" }}>
              {attribution}
            </cite>
            <span className="mt-0.5 block text-sm" style={{ color: "var(--secondary-text)" }}>
              {role}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
