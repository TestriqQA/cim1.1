import { Quote } from "lucide-react";
import { type ClientProject } from "@/data/portfolio";

// Optional. Renders NOTHING when a project has no signed-off quote, so the
// article can mount it unconditionally without risking an empty block.
//
// Attributed to the client COMPANY, matching how the site credits quotes
// elsewhere — no invented people, no avatars, no job titles.

export default function Testimonial({ project }: { project: ClientProject }) {
  if (!project.testimonial) return null;

  const { quote, attribution, role } = project.testimonial;

  return (
    <section id="testimonial" className="scroll-mt-24" aria-labelledby="testimonial-heading">
      <h2
        id="testimonial-heading"
        className="text-2xl font-bold tracking-tight md:text-3xl"
        style={{ color: "var(--foreground)" }}
      >
        Client feedback
      </h2>

      <figure
        className="mt-5 max-w-[68ch] rounded-lg border p-6"
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--border-color)",
        }}
      >
        <Quote
          aria-hidden="true"
          className="h-6 w-6"
          strokeWidth={1.5}
          style={{ color: "var(--brand-blue-text)" }}
        />
        <blockquote className="mt-4">
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
        <figcaption
          className="mt-5 border-t pt-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <cite
            className="text-sm font-semibold not-italic"
            style={{ color: "var(--foreground)" }}
          >
            {attribution}
          </cite>
          <span className="mt-0.5 block text-sm" style={{ color: "var(--secondary-text)" }}>
            {role}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
