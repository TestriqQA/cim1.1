"use client";

import { ImageBlock as ImageBlockType } from "@/data/blog";
import Image from "next/image";

interface ImageBlockProps {
  block: ImageBlockType;
}

export default function ImageBlock({ block }: ImageBlockProps) {
  // Skip rendering if the image source is empty
  if (!block.src?.trim()) {
    return null;
  }
  return (
    <figure className="my-8">
      <div
        className="relative mx-auto w-full overflow-hidden rounded-xl border md:w-3/4 aspect-video"
        style={{ borderColor: "var(--border-color)" }}
      >
        <Image
          src={block.src}
          alt={block.alt}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 75vw"
          className="h-full w-full object-cover"
        />
      </div>

      {block.caption && (
        <figcaption
          className="mt-3 text-center text-sm italic"
          style={{ color: "var(--secondary-text)" }}
        >
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}
