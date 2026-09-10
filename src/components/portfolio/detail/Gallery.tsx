"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { type ProjectMedia } from "@/data/portfolio";

// The evidence grid.
//
// Thumbnails are SMALL and uniform — a fixed 4:3 box with object-cover — so the
// set reads as a contact sheet you can scan, not a stack of full-bleed images
// you have to scroll past. The true aspect ratio is honoured in the lightbox,
// where there is room for it.
//
// The lightbox is a native <dialog> opened with showModal(). That buys focus
// trapping, Escape-to-close, inertness of the page behind and a ::backdrop for
// free — all things a hand-rolled modal gets wrong. Arrow keys move between
// items; the backdrop closes on click.

interface GalleryProps {
  media: ProjectMedia[];
  projectTitle: string;
}

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008ac1]";

export default function Gallery({ media, projectTitle }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = index !== null;
  const current = open ? media[index] : null;

  const show = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + media.length) % media.length)),
    [media.length]
  );

  // Drive the dialog imperatively — showModal() is the only way to get the
  // modal semantics (focus trap + inert background), and it cannot be
  // expressed declaratively.
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step]);

  if (media.length === 0) return null;

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {media.map((item, i) => (
          <li key={item.src + item.alt}>
            <button
              type="button"
              onClick={() => show(i)}
              className={`${focusRing} group relative block w-full overflow-hidden rounded-lg border transition-shadow duration-300 hover:shadow-md`}
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--hover-bg)" }}
            >
              {/* Uniform thumbnail box, regardless of the asset's real shape. */}
              <span className="relative block aspect-[4/3] w-full">
                {item.type === "video" && item.poster ? (
                  <Image src={item.poster} alt="" fill sizes="(min-width: 640px) 30vw, 45vw" className="object-cover" />
                ) : item.type === "video" ? (
                  <span
                    className="flex h-full w-full items-center justify-center text-xs"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    Video
                  </span>
                ) : (
                  <Image src={item.src} alt="" fill sizes="(min-width: 640px) 30vw, 45vw" className="object-cover" />
                )}

                <span
                  aria-hidden="true"
                  className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ backgroundColor: "rgb(0 0 0 / 65%)" }}
                >
                  <Maximize2 className="h-3.5 w-3.5 text-white" />
                </span>
              </span>

              {/* The button's accessible name — the visible thumbnail carries
                  no text, so it has to come from here. */}
              <span className="sr-only">
                {item.type === "video" ? "Play video: " : "Enlarge image: "}
                {item.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => {
          // Clicks that land on the dialog itself are backdrop clicks; anything
          // inside the panel stops at the panel.
          if (e.target === dialogRef.current) close();
        }}
        aria-label={`${projectTitle} — image viewer`}
        className="m-auto w-[min(92vw,72rem)] max-w-none rounded-xl p-0 backdrop:bg-black/70"
        style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
      >
        {current && (
          <div className="flex flex-col">
            <div
              className="flex items-center justify-between gap-4 border-b px-4 py-3"
              style={{ borderColor: "var(--border-color)" }}
            >
              <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                {index! + 1} of {media.length}
              </p>
              <button
                type="button"
                onClick={close}
                className={`${focusRing} rounded-md p-2 transition-colors duration-200`}
                style={{ color: "var(--foreground)" }}
              >
                <X className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close image viewer</span>
              </button>
            </div>

            <div
              className="relative flex max-h-[70vh] items-center justify-center overflow-hidden"
              style={{ backgroundColor: "var(--hover-bg)" }}
            >
              {current.type === "video" ? (
                <video
                  key={current.src}
                  controls
                  autoPlay
                  preload="metadata"
                  poster={current.poster}
                  className="max-h-[70vh] w-full"
                >
                  <source src={current.src} />
                  Your browser cannot play this video.
                </video>
              ) : (
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  sizes="(min-width: 1280px) 1100px, 92vw"
                  className="max-h-[70vh] w-auto object-contain"
                />
              )}
            </div>

            <div
              className="flex items-center justify-between gap-4 border-t px-4 py-3"
              style={{ borderColor: "var(--border-color)" }}
            >
              <p className="min-w-0 text-sm" style={{ color: "var(--secondary-text)" }}>
                {current.caption}
                {current.placeholder && (
                  <span className="block text-xs italic">Placeholder — awaiting the final capture.</span>
                )}
              </p>

              {media.length > 1 && (
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className={`${focusRing} rounded-md border p-2`}
                    style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Previous image</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className={`${focusRing} rounded-md border p-2`}
                    style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Next image</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
