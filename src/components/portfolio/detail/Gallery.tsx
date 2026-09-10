import Image from "next/image";
import { type ClientProject, type ProjectMedia } from "@/data/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

// The evidence. A case study that only describes the work is an assertion; this
// section is where it is shown.
//
// Renders nothing when a project has no media, so the page never carries an
// empty shell. Landscape captures take the full width of the grid and portrait
// ones sit half-width, which keeps phone screenshots from being blown up to
// absurd heights.
//
// Video is a plain <video controls> with a poster — no player library, and it
// only fetches metadata until the visitor presses play.

const container = "mx-auto px-6 md:px-12 xl:px-20";

function isPortrait(item: ProjectMedia) {
  return item.height > item.width;
}

function Frame({ item }: { item: ProjectMedia }) {
  return (
    <figure className="h-full">
      <div
        className="relative overflow-hidden rounded-xl border"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--hover-bg)",
          // Declared from the real intrinsic size, so the box is reserved
          // before the asset arrives and nothing shifts.
          aspectRatio: `${item.width} / ${item.height}`,
        }}
      >
        {item.type === "video" ? (
          <video
            controls
            preload="metadata"
            poster={item.poster}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={item.src} />
            {/* Fallback for browsers that cannot play the source at all. */}
            Your browser cannot play this video.{" "}
            <a href={item.src} download>
              Download it instead
            </a>
            .
          </video>
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={isPortrait(item) ? "(min-width: 768px) 45vw, 100vw" : "(min-width: 768px) 90vw, 100vw"}
            className="object-cover"
          />
        )}
      </div>

      {(item.caption || item.placeholder) && (
        <figcaption className="mt-3 text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
          {item.caption}
          {item.placeholder && (
            <span className="block text-xs italic">
              Placeholder — awaiting the final capture.
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default function Gallery({ project }: { project: ClientProject }) {
  if (project.media.length === 0) return null;

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--background)" }}
      aria-labelledby="gallery-heading"
    >
      <div className={container}>
        <h2
          id="gallery-heading"
          className="text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: "var(--foreground)" }}
        >
          The work
        </h2>
        <p
          className="mt-4 max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--secondary-text)" }}
        >
          Captures of what was delivered.
        </p>

        <ul className={`${styles.cascade} mt-10 grid gap-8 md:grid-cols-2`}>
          {project.media.map((item) => (
            <li
              key={item.src + item.alt}
              // Landscape spans the full grid; portrait keeps to one column.
              className={isPortrait(item) ? "" : "md:col-span-2"}
            >
              <Frame item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
