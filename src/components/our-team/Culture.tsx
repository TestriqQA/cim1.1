import Link from "next/link";
import { ArrowUpRight, GraduationCap, Laptop, Scale, Users2 } from "lucide-react";
import styles from "./team.module.css";

// Server component.
//
// An asymmetric bento rather than a uniform four-up: the lead value gets a
// double-height gradient tile and the other three fill in around it. That gives
// the section a shape of its own next to `Philosophy` directly above, which
// uses equal numbered pillars.
//
// The feature tile carries WHITE text on the solid-button brand tokens
// (#006d97 -> #0f766e), both of which clear 4.5:1 against white — the same pair
// already used for every primary button on the site. A matching solid
// `background-color` sits under the gradient so contrast tooling has a real
// colour to measure rather than an image it has to skip.

const values = [
  {
    icon: Users2,
    title: "Collaborative by default",
    description:
      "Work is reviewed in the open. Engineers, marketers and designers share one channel per project rather than three separate ones, so a decision taken on Tuesday is not quietly rediscovered on Friday.",
    feature: true,
  },
  {
    icon: Scale,
    title: "Work-life balance",
    description:
      "Deadlines are planned so they do not routinely land on a weekend. Sustainable pace is a delivery decision here, not a perk.",
    feature: false,
  },
  {
    icon: GraduationCap,
    title: "Continuous learning",
    description:
      "Certifications, conference time and internal sessions are part of the schedule, which is how the stack we recommend stays current.",
    feature: false,
  },
  {
    icon: Laptop,
    title: "Flexible and remote-friendly",
    description:
      "A Mira Road studio for the people who want one, and proper remote support for the people who do not — including clients in other time zones.",
    feature: false,
  },
];

// Bento placement, kept beside the data so the grid is readable at a glance.
// lg is a 4-column, 2-row board: [feature 2x2][wide 2x1] / [feature][1x1][1x1]
const spans = [
  "md:col-span-2 lg:col-span-2 lg:row-span-2",
  "md:col-span-2 lg:col-span-2",
  "md:col-span-1 lg:col-span-1",
  "md:col-span-1 lg:col-span-1",
];

export default function Culture() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="culture-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className={`${styles.reveal} max-w-3xl`}>
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Culture and values
          </p>
          <h2
            id="culture-heading"
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            The conditions the work happens in
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
          >
            We have built a culture around growth, collaboration and steady craft. The team is the
            asset, so the conditions they work in get the same attention as the work itself.
          </p>
        </div>

        <ul
          className={`${styles.cascade} mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4`}
        >
          {values.map(({ icon: Icon, title, description, feature }, index) => (
            <li
              key={title}
              className={`${styles.lift} group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 sm:p-8 ${spans[index]}`}
              style={
                feature
                  ? {
                      backgroundColor: "var(--brand-blue-btn)",
                      backgroundImage:
                        "linear-gradient(140deg, var(--brand-blue-btn), var(--accent-teal-btn))",
                      borderColor: "transparent",
                    }
                  : {
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border-color)",
                    }
              }
            >
              {feature ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full"
                  style={{ backgroundColor: "rgb(255 255 255 / 8%)" }}
                />
              ) : null}

              <span
                className={`relative flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105 ${
                  feature ? "h-16 w-16" : "h-12 w-12"
                }`}
                style={
                  feature
                    ? { backgroundColor: "rgb(255 255 255 / 16%)" }
                    : {
                        backgroundColor:
                          "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                      }
                }
              >
                <Icon
                  className={feature ? "h-8 w-8 text-white" : "h-6 w-6"}
                  style={feature ? undefined : { color: "var(--brand-blue-text)" }}
                  aria-hidden="true"
                />
              </span>

              <h3
                className={`relative mt-6 font-bold ${
                  feature ? "text-2xl md:text-3xl" : "text-lg"
                }`}
                style={{ color: feature ? "#ffffff" : "var(--foreground)" }}
              >
                {title}
              </h3>

              <p
                className={`relative mt-3 leading-relaxed ${
                  feature ? "text-base md:text-lg" : "text-sm"
                }`}
                style={{
                  color: feature ? "rgb(255 255 255 / 92%)" : "var(--secondary-text)",
                }}
              >
                {description}
              </p>
            </li>
          ))}
        </ul>

        <p className={`${styles.reveal} mt-10`}>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-lg py-1 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            See what it is like to work here
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
