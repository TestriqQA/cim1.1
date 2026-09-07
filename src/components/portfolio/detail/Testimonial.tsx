import { Quote } from "lucide-react";
import { getCategoryMeta, type ClientProject } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// Optional. Renders NOTHING when there is no signed-off quote, so the page can
// mount it unconditionally. Attributed to the client company — no invented
// people, no avatars, no titles.

const container = "mx-auto max-w-[90rem] px-4 sm:px-6 md:px-16";

export default function Testimonial({ project }: { project: ClientProject }) {
  if (!project.testimonial) return null;
  const cat = getCategoryMeta(project.category);
  const { quote, attribution, role } = project.testimonial;

  return (
    <section className="border-y border-zinc-800 py-24 md:py-36" aria-labelledby="testimonial-heading">
      <div className={container}>
        <figure className={`${styles.reveal} max-w-5xl`}>
          <div className="flex items-center gap-6">
            <h2 id="testimonial-heading" className={`${styles.mono} text-[0.6875rem] uppercase tracking-[0.3em]`} style={{ color: cat.text }}>
              In the client&apos;s words
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-zinc-800" />
          </div>
          <Quote aria-hidden="true" strokeWidth={1.25} className="mt-12 h-14 w-14 opacity-50 md:mt-16" style={{ color: cat.glow }} />
          <blockquote className="mt-6">
            <p className={`${styles.balance} text-2xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl`}>&ldquo;{quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-12 flex flex-col gap-1 md:mt-16">
            <cite className="text-base font-bold not-italic text-white md:text-lg">{attribution}</cite>
            <span className="text-sm text-zinc-400 md:text-base">{role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
