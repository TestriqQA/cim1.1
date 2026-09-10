import Link from "next/link";
import { type ClientProject } from "@/data/portfolio";

// The sticky reference column. Server component.
//
// This is the answer to "I can't find the direct information": the facts stay
// pinned beside the narrative from `lg` up, so client, year, platforms,
// deliverables and stack are visible no matter how far down the reader is —
// rather than being a slab they scrolled past once.
//
// "On this page" is built from what the project ACTUALLY renders: the gallery
// and testimonial sections are conditional, so a link to an anchor that does
// not exist can never be emitted.

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function ProjectFacts({ project }: { project: ClientProject }) {
  const rows = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Year", value: project.year },
    ...(project.duration ? [{ label: "Engagement", value: project.duration }] : []),
    ...(project.platforms.length
      ? [{ label: "Platforms", value: project.platforms.join(", ") }]
      : []),
  ];

  const jumpLinks = [
    { href: "#challenge", label: "The challenge" },
    { href: "#approach", label: "What we did" },
    ...(project.media.length ? [{ href: "#work", label: "The work" }] : []),
    { href: "#results", label: "Results" },
    ...(project.testimonial ? [{ href: "#testimonial", label: "Client feedback" }] : []),
  ];

  return (
    // `position: sticky` with a top offset silently stops working once the
    // element is taller than the space below that offset — it just scrolls away
    // like a static block, which is what happened when this column grew to eight
    // deliverables and seven service chips (1042px against a 904px budget on a
    // 1000px viewport). Bounding the height and letting the column scroll itself
    // keeps it pinned no matter how much a project puts in it. `max-h` and
    // `overflow` are lg-only, because below lg the column is not sticky at all —
    // it stacks above the article and must flow at its natural height.
    <aside
      className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2 [scrollbar-width:thin]"
      aria-labelledby="facts-heading"
    >
      <h2 id="facts-heading" className="sr-only">
        Project details
      </h2>

      {/* Facts */}
      <dl className="border-t" style={{ borderColor: "var(--border-color)" }}>
        {rows.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b py-3"
            style={{ borderColor: "var(--border-color)" }}
          >
            <dt className="text-sm" style={{ color: "var(--secondary-text)" }}>
              {label}
            </dt>
            <dd className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Deliverables */}
      <h3
        className="mt-8 text-xs font-bold uppercase tracking-wider"
        style={{ color: "var(--secondary-text)" }}
      >
        Delivered
      </h3>
      <ul className="mt-3 space-y-2">
        {project.deliverables.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-snug">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: "var(--brand-blue-text)" }}
            />
            <span style={{ color: "var(--foreground)" }}>{item}</span>
          </li>
        ))}
      </ul>

      {/* Services — real links into the service silo */}
      <h3
        className="mt-8 text-xs font-bold uppercase tracking-wider"
        style={{ color: "var(--secondary-text)" }}
      >
        Services
      </h3>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.servicesDelivered.map((service) => (
          <li key={service.href}>
            <Link
              href={service.href}
              className={`${focusRing} inline-block rounded-md border px-2 py-1 text-xs font-medium transition-colors duration-300 hover:underline`}
              style={{
                borderColor: "var(--border-color)",
                color: "var(--brand-blue-text)",
              }}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Stack */}
      <h3
        className="mt-8 text-xs font-bold uppercase tracking-wider"
        style={{ color: "var(--secondary-text)" }}
      >
        Stack
      </h3>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-md border px-2 py-1 text-xs"
            style={{ borderColor: "var(--border-color)", color: "var(--secondary-text)" }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Jump nav — hidden below lg, where the sidebar stacks above the
          narrative and the links would just repeat what follows. */}
      <nav
        aria-label="On this page"
        className="mt-8 hidden border-t pt-6 lg:block"
        style={{ borderColor: "var(--border-color)" }}
      >
        <h3
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: "var(--secondary-text)" }}
        >
          On this page
        </h3>
        <ul className="mt-3 space-y-1">
          {jumpLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${focusRing} block rounded-md py-1 text-sm transition-colors duration-200 hover:underline`}
                style={{ color: "var(--secondary-text)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
