import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink } from "lucide-react";
import { getCategoryMeta, type ClientProject } from "@/data/portfolio";

// Case-study masthead. Server component; the <h1> is plain text and is the LCP
// element. The cover image sits below the fold of the heading so it never
// competes with it, and carries explicit intrinsic dimensions so the box is
// reserved before it loads.

const container = "mx-auto px-6 md:px-12 xl:px-20";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function ProjectHero({ project }: { project: ClientProject }) {
  const cat = getCategoryMeta(project.category);

  return (
    <section
      className="py-14 md:py-20"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="project-heading"
    >
      <div className={container}>
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <li>
              <Link href="/" className={`${focusRing} inline-block rounded-sm px-1 py-1.5 hover:underline`}>
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link href="/portfolio" className={`${focusRing} inline-block rounded-sm px-1 py-1.5 hover:underline`}>
                Portfolio
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="py-1.5 font-semibold" style={{ color: "var(--foreground)" }}>
              {project.client}
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold"
            style={{ color: "var(--brand-blue-text)" }}
          >
            <span>{cat.label}</span>
            <span aria-hidden="true" style={{ color: "var(--secondary-text)" }}>·</span>
            <span style={{ color: "var(--secondary-text)" }}>{project.year}</span>
          </p>

          <h1
            id="project-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </h1>

          <p
            className="mt-6 text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--secondary-text)" }}
          >
            {project.summary}
          </p>

          {project.liveUrl && (
            <p className="mt-7">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors duration-300`}
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--card-bg)",
                  color: "var(--foreground)",
                }}
              >
                Visit the live site
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          )}
        </div>

        {project.cover && (
          <figure className="mt-12">
            <div
              className="relative overflow-hidden rounded-xl border"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--hover-bg)",
                aspectRatio: `${project.cover.width} / ${project.cover.height}`,
              }}
            >
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            {project.cover.placeholder && (
              <figcaption className="mt-3 text-xs" style={{ color: "var(--secondary-text)" }}>
                Placeholder image — awaiting the final capture for this project.
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
