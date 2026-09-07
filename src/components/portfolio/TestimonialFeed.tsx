import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { getCategoryMeta, getProjectsWithTestimonials } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Section 6 — Client accountability & testimonial feed.
//
// Server component. Only projects carrying a signed-off quote appear, and each
// quote links to the case file it belongs to — a testimonial with no project
// behind it is not shown. Attribution is to the client COMPANY, as the site
// already does; no people or titles are invented.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

export default function TestimonialFeed() {
  const projects = getProjectsWithTestimonials();
  if (projects.length === 0) return null;

  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className={container}>
        <div className={`${styles.reveal} max-w-3xl`}>
          <p className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em] text-zinc-400`}>
            06 · Accountability
          </p>
          <h2
            id="testimonials-heading"
            className={`${styles.balance} mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl`}
          >
            In the client&apos;s words
          </h2>
          <p className={`${styles.pretty} mt-6 text-base leading-relaxed text-zinc-400 md:text-lg`}>
            Each quote is tied to the case file it came from. Engagements without a signed-off
            quote are simply not listed here.
          </p>
        </div>

        <ul className={`${styles.cascade} mt-12 grid gap-5 lg:grid-cols-2`}>
          {projects.map((project) => {
            const cat = getCategoryMeta(project.category);
            const t = project.testimonial!;
            return (
              <li key={project.slug}>
                <figure
                  className={`${styles.glass} ${styles.glow} ${styles.railX} relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8`}
                  style={{ "--cat": cat.rgb } as React.CSSProperties}
                >
                  <Quote aria-hidden="true" className="h-8 w-8 opacity-60" style={{ color: cat.glow }} strokeWidth={1.5} />
                  <blockquote className="mt-5 flex-1">
                    <p className={`${styles.balance} text-lg font-medium leading-relaxed text-zinc-100 md:text-xl`}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-zinc-800 pt-5">
                    <div>
                      <cite className="block text-sm font-bold not-italic text-white">{t.attribution}</cite>
                      <span className="mt-0.5 block text-xs text-zinc-400">{t.role}</span>
                    </div>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-md text-xs font-bold uppercase tracking-[0.16em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                      style={{ color: cat.text }}
                    >
                      Case file
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
