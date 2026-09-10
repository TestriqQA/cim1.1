import Link from "next/link";
import { type ClientProject } from "@/data/portfolio";

// The scannable facts, before the narrative. A visitor who reads nothing else
// should still come away knowing who the client was, what we delivered, on what
// platforms and over what period.
//
// A description list rather than a table: these are label/value pairs, not
// tabular data, and `<dl>` gives screen readers the pairing without needing
// row and column semantics.

const container = "mx-auto px-6 md:px-12 xl:px-20";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function AtAGlance({ project }: { project: ClientProject }) {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Year", value: project.year },
  ];

  if (project.duration) rows.push({ label: "Engagement", value: project.duration });
  if (project.platforms.length) rows.push({ label: "Platforms", value: project.platforms.join(", ") });

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--card-bg)" }}
      aria-labelledby="at-a-glance-heading"
    >
      <div className={container}>
        <h2
          id="at-a-glance-heading"
          className="text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: "var(--foreground)" }}
        >
          At a glance
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* Facts */}
          <dl
            className="border-t"
            style={{ borderColor: "var(--border-color)" }}
          >
            {rows.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-4 border-b py-4"
                style={{ borderColor: "var(--border-color)" }}
              >
                <dt className="text-sm font-semibold" style={{ color: "var(--secondary-text)" }}>
                  {label}
                </dt>
                <dd className="text-sm" style={{ color: "var(--foreground)" }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* What was delivered + which services it maps to */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--secondary-text)" }}
            >
              What we delivered
            </h3>
            <ul className="mt-4 space-y-2.5">
              {project.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--brand-blue-text)" }}
                  />
                  <span style={{ color: "var(--foreground)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <h3
              className="mt-8 text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--secondary-text)" }}
            >
              Services
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.servicesDelivered.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className={`${focusRing} inline-block rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors duration-300 hover:underline`}
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundColor: "var(--background)",
                      color: "var(--brand-blue-text)",
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="mt-8 text-sm font-semibold uppercase tracking-wide"
              style={{ color: "var(--secondary-text)" }}
            >
              Stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md border px-2.5 py-1.5 text-xs"
                  style={{
                    borderColor: "var(--border-color)",
                    backgroundColor: "var(--background)",
                    color: "var(--secondary-text)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
