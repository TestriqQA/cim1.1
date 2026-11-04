"use client";

import { TextBlock as TextBlockType } from "@/data/blog";

interface TextBlockProps {
    block: TextBlockType;
}

/**
 * How each Sanity heading level renders. `h1` is demoted to <h2> because the
 * post title is the page's only <h1>; every other level keeps its own tag so
 * the document outline matches what the editor wrote.
 */
const HEADINGS = {
    h1: { Tag: "h2", className: "text-3xl font-bold mb-6 mt-8" },
    h2: { Tag: "h2", className: "text-2xl font-bold mb-4 mt-8" },
    h3: { Tag: "h3", className: "text-xl font-bold mb-3 mt-6" },
    h4: { Tag: "h4", className: "text-lg font-bold mb-2 mt-6" },
    h5: { Tag: "h5", className: "text-base font-bold mb-2 mt-5" },
    h6: { Tag: "h6", className: "text-sm font-bold mb-2 mt-4" },
} as const;

export default function TextBlock({ block }: TextBlockProps) {
    // Strip HTML tags for ID generation
    const cleanText = block.content.replace(/<[^>]*>/g, '');
    const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

    const heading = HEADINGS[block.variant as keyof typeof HEADINGS];

    if (heading) {
        const { Tag, className } = heading;
        return (
            <Tag
                id={id}
                className={`${className} scroll-mt-24`}
                style={{ color: "var(--foreground)" }}
                dangerouslySetInnerHTML={{ __html: block.content }}
            />
        );
    }

    return (
        <p
            className="mb-4 leading-relaxed"
            style={{ color: "var(--secondary-text)" }}
            dangerouslySetInnerHTML={{
                __html: block.content
                    .replace(
                        /\*\*(.+?)\*\*/g,
                        "<strong style='color: var(--foreground)'>$1</strong>"
                    )
                    .replace(
                        /\[([^\]]+)\]\(([^)]+)\)/g,
                        "<a href='$2' class='text-[var(--brand-purple-text)] underline underline-offset-2 transition-colors'>$1</a>"
                    ),
            }}
        />
    );
}
