import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { teamDisciplines } from "@/data/team";
import styles from "./team.module.css";

// Server component. Doubles as the page's internal-linking layer — every row is
// a real link into the service silo, now covering all nine practice areas.
//
// Presented as a numbered directory rather than another card grid: at `md` and
// up it is a four-column index (number / title + description / skills / arrow),
// and below that the same single grid reflows to three columns with the skills
// dropping onto a second row. One DOM tree, two layouts — no duplicated markup
// for screen readers to wade through.

export default function Disciplines() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="disciplines-heading"
    >
      <div className="mx-auto px-6 md:px-12 xl:px-20">
        <div className={`${styles.reveal} max-w-3xl`}>
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            How the team is organised
          </p>
          <h2
            id="disciplines-heading"
            className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--foreground)" }}
          >
            Nine practice areas, one team
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
          >
            We work as one group rather than as separate agencies bolted together. In practice that
            means the engineer who builds the site and the marketer who has to rank it are in the
            same conversation from week one.
          </p>
        </div>

        <ul
          className={`${styles.cascade} mt-14 border-t`}
          style={{ borderColor: "var(--border-color)" }}
        >
          {teamDisciplines.map((discipline, index) => (
            <li
              key={discipline.title}
              className="border-b"
              style={{ borderColor: "var(--border-color)" }}
            >
              <Link
                href={discipline.href}
                aria-label={`${discipline.title} — explore this service`}
                className={`${styles.indexRow} group block px-3 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1] md:px-5 md:py-7`}
              >
                {/* Mobile: 3 columns, skills wrap to a second row.
                    md and up: 4 columns, everything on one line. */}
                <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_1.5rem] items-start gap-x-4 gap-y-4 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,17rem)_1.5rem] md:items-center md:gap-x-8 lg:gap-x-10">
                  <span
                    aria-hidden="true"
                    className="col-start-1 row-start-1 pt-1 text-sm font-bold tabular-nums transition-colors duration-300 md:pt-0"
                    style={{ color: "var(--brand-blue-text)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="col-start-2 row-start-1 block min-w-0">
                    <span
                      className="block text-lg font-bold leading-snug transition-transform duration-300 group-hover:translate-x-0.5 md:text-xl"
                      style={{ color: "var(--foreground)" }}
                    >
                      {discipline.title}
                    </span>
                    <span
                      className="mt-2 block text-[0.9375rem] leading-relaxed"
                      style={{ color: "var(--secondary-text)" }}
                    >
                      {discipline.description}
                    </span>
                  </span>

                  <span className="col-span-2 col-start-2 row-start-2 flex flex-wrap gap-2 md:col-span-1 md:col-start-3 md:row-start-1">
                    {discipline.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border px-2.5 py-1 text-xs font-medium"
                        style={{
                          borderColor: "var(--border-color)",
                          backgroundColor: "var(--hover-bg)",
                          color: "var(--secondary-text)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </span>

                  <ArrowUpRight
                    className="col-start-3 row-start-1 mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:col-start-4 md:mt-0"
                    style={{ color: "var(--brand-blue-text)" }}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className={`${styles.reveal} mt-10`}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg py-1 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]"
            style={{ color: "var(--brand-blue-text)" }}
          >
            Browse every service in detail
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
