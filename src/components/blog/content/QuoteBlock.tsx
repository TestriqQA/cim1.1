"use client";

import { QuoteBlock as QuoteBlockType } from "@/data/blog";

interface QuoteBlockProps {
    block: QuoteBlockType;
}

export default function QuoteBlock({ block }: QuoteBlockProps) {
    return (
        <blockquote
            className="my-6 pl-6 border-l-4 italic"
            style={{
                borderColor: "var(--brand-purple)",
                color: "var(--secondary-text)",
            }}
        >
            <p
                className="text-lg mb-2"
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
            {block.author && (
                <cite
                    className="text-sm not-italic font-medium"
                    style={{ color: "var(--foreground)" }}
                >
                    - {block.author}
                </cite>
            )}
        </blockquote>
    );
}
