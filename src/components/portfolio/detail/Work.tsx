import { type ClientProject } from "@/data/portfolio";
import Gallery from "@/components/portfolio/detail/Gallery";

// The evidence section. A thin server wrapper so the heading, the intro and the
// conditional check stay on the server, and only the interactive grid plus its
// lightbox ship as client JavaScript.

export default function Work({ project }: { project: ClientProject }) {
  if (project.media.length === 0) return null;

  return (
    <section id="work" className="scroll-mt-24" aria-labelledby="work-heading">
      <h2
        id="work-heading"
        className="text-2xl font-bold tracking-tight md:text-3xl"
        style={{ color: "var(--foreground)" }}
      >
        The work
      </h2>
      <p
        className="mt-3 max-w-[60ch] text-base leading-relaxed"
        style={{ color: "var(--secondary-text)" }}
      >
        Captures of what was delivered. Select any to view it full size.
      </p>

      <Gallery media={project.media} projectTitle={project.title} />
    </section>
  );
}
