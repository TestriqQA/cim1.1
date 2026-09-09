import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Users } from "lucide-react";
import { teamDisciplines, teamMembers } from "@/data/team";
import styles from "./team.module.css";

// Server component — no client JavaScript.
//
// The page's LCP element is the <h1> text node, so there is deliberately still
// no hero image on this route. The visual weight instead comes from type scale,
// a CSS-drawn ambient background, and the roster index on the right — which is
// not decoration: every row is a real in-page anchor down to that person's
// card, so the hero doubles as the page's table of contents.

const stats = [
  {
    value: "09",
    label: "Practice areas",
    detail: "Engineering, marketing and design in one team",
  },
  {
    value: "05",
    label: "Countries served",
    detail: "US, UK, India, Australia and the UAE",
  },
  {
    value: "20+",
    label: "Years of leadership",
    detail: "Delivery and quality at group level",
  },
  {
    value: "00",
    label: "Account-manager layers",
    detail: "You brief the people who do the work",
  },
];

export default function Hero() {
  return (
    <section
      className="relative pt-10 md:pt-14"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="our-team-heading"
    >
      {/* Decorative background. Clipping lives on THIS wrapper rather than on
          the section, so no scroll-revealed content ends up inside an
          `overflow: hidden` ancestor (see team.module.css, rule 2). */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className={styles.gridTexture} />
        <div
          className={`${styles.blob} ${styles.blobDrift} -top-40 -left-28 h-[26rem] w-[26rem]`}
          style={{ backgroundColor: "color-mix(in srgb, var(--brand-blue) 20%, transparent)" }}
        />
        <div
          className={`${styles.blob} ${styles.blobDriftSlow} -bottom-52 right-[-8rem] h-[30rem] w-[30rem]`}
          style={{ backgroundColor: "color-mix(in srgb, var(--brand-teal) 16%, transparent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-12 xl:px-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
            style={{ color: "var(--secondary-text)" }}
          >
            <li>
              <Link
                href="/"
                className="inline-block rounded-sm px-1 py-1.5 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link
                href="/about"
                className="inline-block rounded-sm px-1 py-1.5 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
              >
                About
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li
              aria-current="page"
              className="py-1.5 font-semibold"
              style={{ color: "var(--brand-blue-text)" }}
            >
              Our Team
            </li>
          </ol>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-20">
          {/* ---------------------------------------------------------------
              Masthead
          ---------------------------------------------------------------- */}
          <div className="min-w-0">
            <p
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "color-mix(in srgb, var(--brand-blue) 28%, var(--border-color))",
              }}
            >
              <Users
                className="h-4 w-4"
                style={{ color: "var(--brand-blue-text)" }}
                aria-hidden="true"
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--brand-blue-text)" }}
              >
                The people behind the work
              </span>
            </p>

            {/* LCP element — plain text, never animated. */}
            <h1
              id="our-team-heading"
              className="mt-7 text-[2.6rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
              style={{ color: "var(--foreground)" }}
            >
              Meet the team behind{" "}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "var(--brand-blue-text)" }}>
                  Cinute InfoMedia
                </span>
                {/* Sits BELOW the baseline rather than through it. Text over a
                    30%-opacity brand gradient only reaches ~3.5:1 in light
                    mode — fine for large text, but keeping the band clear of
                    the glyphs means the headline is measured against the flat
                    page background (5.9:1) instead. */}
                <span
                  aria-hidden="true"
                  className={`${styles.markline} absolute inset-x-0 -bottom-[0.05em] h-[0.2em] rounded-full`}
                  style={{
                    background:
                      "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                    opacity: 0.35,
                  }}
                />
              </span>
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--secondary-text)" }}
            >
              A small, senior team: engineers, marketers and designers working the same brief
              instead of handing it between departments. The people below are the ones you will
              actually talk to — whoever scopes your project is accountable for what ships.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={`${styles.sheen} group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]`}
                style={{
                  background:
                    "linear-gradient(90deg, var(--brand-blue-btn), var(--accent-teal-btn))",
                }}
              >
                <span className="relative z-[2]">Talk to the team</span>
                <ArrowRight
                  className="relative z-[2] h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 font-semibold transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--brand-blue)_45%,var(--border-color))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--card-bg)",
                  color: "var(--foreground)",
                }}
              >
                See open roles
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ---------------------------------------------------------------
              Roster index — real jump navigation, not ornament
          ---------------------------------------------------------------- */}
          <nav
            // The visible "The roster / 11 people" header was removed, so the
            // nav carries its own label instead of pointing at a heading that
            // no longer exists — without it this is an unnamed landmark.
            aria-label="Team members"
            className="rounded-3xl border p-3 sm:p-4"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <ol>
              {teamMembers.map((member, index) => (
                <li key={member.id}>
                  <a
                    href={`#${member.id}`}
                    className={`${styles.indexRow} group flex items-center gap-4 rounded-xl px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-6 shrink-0 text-xs font-bold tabular-nums transition-colors duration-300"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className="block font-semibold leading-snug"
                        style={{ color: "var(--foreground)" }}
                      >
                        {member.name}
                      </span>
                      <span
                        className="mt-0.5 block text-xs leading-snug"
                        style={{ color: "var(--secondary-text)" }}
                      >
                        {member.role}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: "var(--brand-blue-text)" }}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* -----------------------------------------------------------------
            Stat rail
        ------------------------------------------------------------------ */}
        <ul className={`${styles.cascade} mt-16 grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-4`}
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "var(--border-color)",
          }}
        >
          {stats.map(({ value, label, detail }) => (
            <li
              key={label}
              className="p-6 transition-colors duration-300"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <p
                className="text-4xl font-extrabold tabular-nums leading-none md:text-5xl"
                style={{ color: "var(--brand-blue-text)" }}
              >
                {value}
              </p>
              <p
                className="mt-4 text-sm font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--foreground)" }}
              >
                {label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                {detail}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* -------------------------------------------------------------------
          Practice-area marquee. Purely decorative — every title below is a
          real, linked heading in the Disciplines section — so it is hidden
          from assistive technology, pauses under the pointer, and does not
          run at all under `prefers-reduced-motion`.
      -------------------------------------------------------------------- */}
      <div
        className={`${styles.marqueeViewport} relative z-10 mt-16 border-y`}
        style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
        aria-hidden="true"
      >
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {teamDisciplines.map((discipline) => (
                <li key={discipline.title} className="flex items-center gap-5 py-4 pl-5">
                  <span
                    className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {discipline.title}
                  </span>
                  <span
                    className="h-1.5 w-1.5 rotate-45"
                    style={{ backgroundColor: "var(--brand-blue-text)" }}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
