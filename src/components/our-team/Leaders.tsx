import Image from "next/image";
import { Linkedin } from "lucide-react";
import { leaders } from "@/data/team";
import styles from "./team.module.css";

// Server component — no client JavaScript.
//
// Each leader gets a full editorial spread rather than a card in a row. On
// large screens the portrait column PINS while the dossier beside it scrolls
// past (`position: sticky`), so reading a leader feels like a paced sequence
// instead of a wall of three equal blocks. The portrait side alternates
// left/right, and the whole spread collapses to a single column below `lg`.
//
// Anchor ids match the `#<member.id>` fragments used by the hero's roster index
// AND by the Person nodes in the page's JSON-LD, so the visible page and the
// structured data address the same people by the same identifiers.
//
// Every gradient sits behind decorative surfaces only — no text is ever placed
// on one — so the vivid brand hues are safe at full strength.

export default function Leaders() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="leaders-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className={`${styles.reveal} max-w-3xl`}>
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Leadership
          </p>
          <h2
            id="leaders-heading"
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            Three people own the outcome
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
          >
            Strategy, delivery and growth sit with three people. They scope the work, stay
            accountable for it, and are the ones you deal with directly rather than through an
            account layer.
          </p>
        </div>

        <ul className="mt-16 space-y-20 lg:space-y-28">
          {leaders.map((leader, index) => {
            const flipped = index % 2 === 1;

            return (
              <li key={leader.id} id={leader.id} className="scroll-mt-28">
                {/* Section marker */}
                <div aria-hidden="true" className="mb-10 flex items-center gap-5">
                  <span
                    className="text-sm font-bold tabular-nums"
                    style={{ color: "var(--brand-blue-text)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ backgroundColor: "var(--border-color)" }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    {leader.focus}
                  </span>
                </div>

                {/* Alternating spread. The COLUMN TEMPLATE flips alongside the
                    content, not just the visual order: swapping order alone
                    would leave the narrow 22rem track first, so the dossier
                    would be auto-placed into it and the portrait would inherit
                    the wide 1fr track. Explicit col-start beats `order` here —
                    it states the intent instead of relying on auto-placement. */}
                <article
                  className={`grid gap-10 lg:gap-16 xl:gap-20 ${
                    flipped
                      ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]"
                      : "lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]"
                  }`}
                >
                  {/* ------------------------------------------------------
                      Portrait column — pins on large screens
                  ------------------------------------------------------- */}
                  <div
                    className={`${styles.stickyCol} lg:row-start-1 ${
                      flipped ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <div className="relative mx-auto max-w-sm lg:mx-0">
                      {/* Offset accent plate. Painted before the card and with
                          no negative z-index, so it sits behind the panel
                          without escaping the section background. */}
                      <span
                        aria-hidden="true"
                        className="absolute -inset-3 rounded-[2.25rem]"
                        style={{
                          background:
                            "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 18%, transparent), color-mix(in srgb, var(--brand-teal) 10%, transparent) 60%, transparent)",
                        }}
                      />

                      <div
                        className="relative flex flex-col items-center gap-7 rounded-[1.75rem] border p-7 sm:p-8"
                        style={{
                          backgroundColor: "var(--background)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <div className={`${styles.ring} shrink-0`}>
                          <Image
                            src={leader.image}
                            alt={`Portrait of ${leader.name}`}
                            width={288}
                            height={288}
                            sizes="(min-width: 640px) 240px, 200px"
                            priority={index === 0}
                            className="relative block h-50 w-50 rounded-full bg-[#d9d9d9] object-cover sm:h-60 sm:w-60"
                          />
                        </div>

                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} on LinkedIn (opens in a new tab)`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors duration-300 hover:!border-[#0A66C2] hover:!bg-[#0A66C2] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
                          style={{
                            borderColor: "var(--border-color)",
                            color: "var(--foreground)",
                          }}
                        >
                          <Linkedin className="h-4 w-4" aria-hidden="true" />
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------------------------------
                      Dossier column
                  ------------------------------------------------------- */}
                  <div
                    className={`${styles.reveal} min-w-0 lg:row-start-1 ${
                      flipped ? "lg:col-start-1" : "lg:col-start-2"
                    }`}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: "var(--brand-blue-text)" }}
                    >
                      {leader.role}
                    </p>

                    <h3
                      className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      {leader.name}
                    </h3>

                    {leader.experience ? (
                      <p
                        className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
                        style={{
                          borderColor: "var(--border-color)",
                          backgroundColor: "var(--background)",
                          color: "var(--secondary-text)",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "var(--brand-blue-text)" }}
                        />
                        {leader.experience} experience
                      </p>
                    ) : null}

                    <p
                      className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      {leader.bio}
                    </p>

                    {leader.highlights ? (
                      <div className="mt-10">
                        <h4
                          className="text-xs font-bold uppercase tracking-[0.18em]"
                          style={{ color: "var(--foreground)" }}
                        >
                          What {leader.name.split(" ")[0]} owns
                        </h4>
                        <ol
                          className="mt-4 border-t"
                          style={{ borderColor: "var(--border-color)" }}
                        >
                          {leader.highlights.map((item, itemIndex) => (
                            <li
                              key={item}
                              className={`${styles.indexRow} flex items-start gap-4 border-b px-3 py-4`}
                              style={{ borderColor: "var(--border-color)" }}
                            >
                              <span
                                aria-hidden="true"
                                className="mt-0.5 w-6 shrink-0 text-xs font-bold tabular-nums"
                                style={{ color: "var(--brand-blue-text)" }}
                              >
                                {String(itemIndex + 1).padStart(2, "0")}
                              </span>
                              <span
                                className="text-[0.9375rem] leading-relaxed"
                                style={{ color: "var(--secondary-text)" }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}

                    <ul
                      aria-label={`${leader.name} — areas of expertise`}
                      className="mt-8 flex flex-wrap gap-2"
                    >
                      {leader.expertise.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                          style={{
                            borderColor: "var(--border-color)",
                            backgroundColor: "var(--background)",
                            color: "var(--secondary-text)",
                          }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
