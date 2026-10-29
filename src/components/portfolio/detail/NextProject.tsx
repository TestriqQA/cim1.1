import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getCategoryMeta, getNextProject, type ClientProject } from "@/data/portfolio";

// Cyclic forward link, so a case study is never a dead end for a reader or a
// crawler. Returns null when there is nothing else to point at.

const container = "mx-auto px-6 md:px-12 xl:px-20";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function NextProject({ project }: { project: ClientProject }) {
  const next = getNextProject(project.slug);
  if (!next) return null;

  const cat = getCategoryMeta(next.category);

  return (
    <section
      className="border-t py-16 md:py-24"
      style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
      aria-labelledby="next-project-heading"
    >
      <div className={container}>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--secondary-text)" }}>
            Next case study
          </p>
          <Link
            href="/portfolio"
            className={`${focusRing} inline-flex items-center gap-1.5 rounded-md text-sm font-semibold hover:underline`}
            style={{ color: "var(--brand-blue-text)" }}
          >
            All case studies
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <article
          className="relative rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg md:p-8"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)" }}
        >
          <p
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>
              {next.client}
            </span>
            <span aria-hidden="true">·</span>
            <span>{next.industry}</span>
            <span aria-hidden="true">·</span>
            <span style={{ color: "var(--brand-blue-text)" }}>{cat.label}</span>
          </p>

          <h2
            id="next-project-heading"
            className="mt-3 max-w-3xl text-xl font-bold leading-snug md:text-2xl"
            style={{ color: "var(--foreground)" }}
          >
            {/* One link, stretched over the card. */}
            <Link
              href={`/portfolio/${next.slug}`}
              className={`${focusRing} rounded-sm after:absolute after:inset-0 after:content-['']`}
            >
              {next.title}
            </Link>
          </h2>

          <p
            aria-hidden="true"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Read case study
            <ArrowRight className="h-4 w-4" />
          </p>
        </article>
      </div>
    </section>
  );
}
