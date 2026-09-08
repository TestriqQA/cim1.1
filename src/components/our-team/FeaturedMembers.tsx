import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { featuredMembers } from "@/data/team";
import styles from "./team.module.css";

// Server component — no client JavaScript.
//
// Deliberately a different shape from `Leaders` rather than a shrunken copy: a
// dossier card with the portrait set beside the name instead of centred above
// it, the specialism called out as a standalone line, and the LinkedIn action
// separated by a hairline at the foot. The gradient rail across the top edge
// draws itself in on hover — and on `:focus-within`, so a keyboard user tabbing
// to the LinkedIn link gets exactly the same affordance as a pointer user.
//
// Anchor ids match the hero's roster index and the page's Person JSON-LD nodes.

export default function FeaturedMembers() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="specialists-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className={`${styles.reveal} max-w-3xl`}>
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Specialists
          </p>
          <h2
            id="specialists-heading"
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            The people you work with day to day
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
          >
            Web and mobile engineering, applied research, search and content, and the people
            operations that keep the team steady — the specialists behind the work between
            kickoff and handover.
          </p>
        </div>

        <ul className={`${styles.cascade} mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3`}>
          {featuredMembers.map((member) => (
            <li key={member.id} id={member.id} className="h-full scroll-mt-28">
              <article
                className={`${styles.lift} ${styles.rail} relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-7`}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-center gap-5">
                  <div className={`${styles.ring} shrink-0`}>
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      width={96}
                      height={96}
                      sizes="96px"
                      className="relative block h-24 w-24 rounded-full bg-[#d9d9d9] object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="text-xl font-bold leading-tight"
                      style={{ color: "var(--foreground)" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="mt-1.5 text-xs font-bold uppercase leading-snug tracking-[0.14em]"
                      style={{ color: "var(--brand-blue-text)" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                <p
                  className="mt-6 border-l-2 pl-4 text-sm font-semibold leading-relaxed"
                  style={{
                    borderColor: "color-mix(in srgb, var(--brand-blue) 45%, transparent)",
                    color: "var(--foreground)",
                  }}
                >
                  {member.focus}
                </p>

                <p
                  className="mt-4 flex-grow text-sm leading-relaxed"
                  style={{ color: "var(--secondary-text)" }}
                >
                  {member.bio}
                </p>

                <ul
                  aria-label={`${member.name} — areas of expertise`}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {member.expertise.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--border-color)",
                        backgroundColor: "var(--hover-bg)",
                        color: "var(--secondary-text)",
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 border-t pt-4"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
                    className="group inline-flex items-center gap-2 rounded-lg py-1.5 text-sm font-semibold transition-colors duration-300 hover:!text-[#0A66C2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                    style={{ color: "var(--foreground)" }}
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
