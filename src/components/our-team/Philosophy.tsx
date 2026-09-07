import { Compass, Eye, TrendingUp } from "lucide-react";
import styles from "./team.module.css";

// Server component.
//
// Numbered pillars, not another icon-card grid — the icon is demoted to an
// oversized watermark bleeding off the top-right corner (decorative SVG, so it
// carries no contrast obligation) and the numeral does the identifying work.
// This keeps it visually distinct from `Culture` further down the page, which
// uses a bento grid and puts its icons front and centre.

const principles = [
  {
    icon: Compass,
    title: "Empowerment",
    description:
      "The person closest to the problem makes the call. Everyone here owns an area outright, which is why you get a straight answer in a meeting instead of a promise to check with someone else.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Scope, timelines and trade-offs are written down and shared, including the uncomfortable ones. If something slips or an approach is not working, you hear it from us first.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Time for certifications, reading and side experiments is budgeted rather than borrowed from evenings. New tooling reaches client work only after someone here has genuinely used it.",
  },
];

export default function Philosophy() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className={`${styles.reveal} max-w-3xl`}>
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Operating principles
          </p>
          <h2
            id="philosophy-heading"
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            How we lead
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
          >
            A small team only works if people are trusted to decide things. These three principles
            are what we hold each other to — and the same three we are happy to be measured against
            by a client.
          </p>
        </div>

        <ul className={`${styles.cascade} mt-14 grid gap-6 md:grid-cols-3`}>
          {principles.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className={`${styles.lift} group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 sm:p-8`}
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* Decorative watermark — an SVG, never announced and never a
                  contrast obligation, so it can sit at whatever weight looks
                  right. */}
              <Icon
                className="pointer-events-none absolute -right-7 -top-7 h-36 w-36 opacity-[0.08] transition-transform duration-700 group-hover:scale-110"
                style={{ color: "var(--brand-blue)" }}
                aria-hidden="true"
                strokeWidth={1.25}
              />

              <p
                className="relative text-5xl font-extrabold leading-none tabular-nums"
                style={{ color: "var(--brand-blue-text)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </p>

              <span
                aria-hidden="true"
                className="relative mt-6 block h-1 w-14 rounded-full transition-all duration-500 group-hover:w-24"
                style={{
                  background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                }}
              />

              <h3
                className="relative mt-6 text-xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                {title}
              </h3>

              <p
                className="relative mt-3 text-[0.9375rem] leading-relaxed"
                style={{ color: "var(--secondary-text)" }}
              >
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
