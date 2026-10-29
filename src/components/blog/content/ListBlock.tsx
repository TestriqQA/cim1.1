"use client";

import { ListBlock as ListBlockType } from "@/data/blog";

interface ListBlockProps {
    block: ListBlockType;
}

export default function ListBlock({ block }: ListBlockProps) {
    const ListTag = block.style === "numbered" ? "ol" : "ul";
    const listClass =
        block.style === "numbered"
            ? "list-decimal list-outside ms-6 mb-4 space-y-2"
            : "list-disc list-outside ms-6 mb-4 space-y-2";

    return (
        <ListTag className={listClass} style={{ color: "var(--secondary-text)" }}>
            {block.items.map((item, index) => (
                <li
                    key={index}
                    dangerouslySetInnerHTML={{
                        __html: item
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
            ))}
        </ListTag>
    );
}
