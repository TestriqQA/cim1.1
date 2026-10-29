import { type ClientProject } from "@/data/portfolio";
import ProjectFacts from "@/components/portfolio/detail/ProjectFacts";
import Challenge from "@/components/portfolio/detail/Challenge";
import Approach from "@/components/portfolio/detail/Approach";
import Work from "@/components/portfolio/detail/Work";
import Results from "@/components/portfolio/detail/Results";
import Testimonial from "@/components/portfolio/detail/Testimonial";

// The body of a case study: a sticky reference column beside one continuous
// article.
//
// The previous version made every part of the write-up a full-width band with
// its own background, so the page read as nine near-identical slabs and the
// facts scrolled away after the top. Here the narrative is ONE document divided
// by hairlines, and the facts stay pinned next to it.
//
// The `section + section` rule puts the divider between blocks rather than
// inside them, so each section component stays dumb about its neighbours and
// the conditional ones (Work, Testimonial) can drop out without leaving a
// stray rule behind.

const container = "mx-auto px-6 md:px-12 xl:px-20";

export default function ProjectBody({ project }: { project: ClientProject }) {
  return (
    <div className="py-14 md:py-20" style={{ backgroundColor: "var(--card-bg)" }}>
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          <ProjectFacts project={project} />

          <div
            className="min-w-0 [&>section+section]:mt-12 [&>section+section]:border-t [&>section+section]:border-[var(--border-color)] [&>section+section]:pt-12"
          >
            <Challenge project={project} />
            <Approach project={project} />
            {/* Renders null when the project carries no media. */}
            <Work project={project} />
            <Results project={project} />
            {/* Renders null when there is no signed-off quote. */}
            <Testimonial project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
