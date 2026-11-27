"use client";

import React, { useId, useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

export type FaqItem = {
    q: React.ReactNode;
    a: React.ReactNode;
};

export type FaqSectionProps = {
    /** Question/answer pairs, in display order. */
    faqs: FaqItem[];
    /**
     * This page's accent colour — a CSS colour value such as
     * "var(--accent-orange-text)" or a brand hex like "#0A66C2".
     * Used for the eyebrow badge and the open row's question + chevron.
     */
    accent: string;
    /** Small pill above the heading. Pass null to hide it. */
    eyebrow?: string | null;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    /** Section background; defaults to the page background. */
    background?: string;
    /** Anchor id for the section, e.g. "faq". */
    id?: string;
    /** Tighter section padding and heading gap; other pages keep the default. */
    compact?: boolean;
};

/**
 * The single FAQ design used across the site.
 *
 * Two things here are deliberate and should not be changed casually:
 *
 * 1. Answers stay mounted. The collapsed state is a 0fr grid row, not a
 *    conditional render, so the answer text is always present in the served
 *    HTML. Every page carrying FAQPage structured data needs that text on the
 *    page, and rendering it only on click silently invalidates the markup.
 * 2. One row is open at a time, starting with the first.
 */
export default function FaqSection({
    faqs,
    accent,
    eyebrow = "FAQ",
    title = "Frequently Asked Questions",
    subtitle,
    background = "var(--background)",
    id,
    compact = false,
}: FaqSectionProps) {
    // The first question is open on load.
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const baseId = useId();

    return (
        <section
            id={id}
            className={`${compact ? "py-12 md:py-16 lg:py-20" : "py-12 sm:py-16 md:py-24"} scroll-mt-20`}
            style={{ backgroundColor: background }}
        >
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                {(eyebrow || title || subtitle) && (
                    <div className={`text-center ${compact ? "mb-8 md:mb-10 lg:mb-12" : "mb-8 sm:mb-12 md:mb-16"}`}>
                        {/*
                            Badge: both children are sized in em and set to leading-none, so
                            the icon tracks the label's font size and neither carries dead
                            line-height. Without that the uppercase label sits high in a 20px
                            line box against a 14px icon and the icon reads as low.
                        */}
                        {eyebrow && (
                            <div
                                className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full border mb-4 sm:mb-6 text-sm leading-none"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--card-bg) 70%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <CircleHelp
                                    aria-hidden="true"
                                    className="flex-shrink-0"
                                    style={{ width: "1.15em", height: "1.15em", color: accent }}
                                />
                                <span
                                    className="text-sm font-semibold leading-none"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {eyebrow}
                                </span>
                            </div>
                        )}
                        {title && (
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight"
                                style={{ color: "var(--foreground)" }}
                            >
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p
                                className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
                                style={{ color: "var(--secondary-text)" }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                <div
                    className="border-t"
                    style={{ borderColor: "color-mix(in srgb, var(--border-color) 70%, transparent)" }}
                >
                    {faqs.map((faq, i) => {
                        const open = openIndex === i;
                        const panelId = `${baseId}-faq-panel-${i}`;
                        const buttonId = `${baseId}-faq-button-${i}`;

                        return (
                            <div
                                key={i}
                                className="border-b"
                                style={{ borderColor: "color-mix(in srgb, var(--border-color) 70%, transparent)" }}
                            >
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={open}
                                        aria-controls={panelId}
                                        onClick={() => setOpenIndex(open ? null : i)}
                                        className="group w-full flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 md:py-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
                                        style={{ ["--tw-ring-color" as string]: accent }}
                                    >
                                        <span
                                            className="text-base sm:text-lg md:text-xl font-bold leading-snug transition-colors duration-200"
                                            style={{ color: open ? accent : "var(--foreground)" }}
                                        >
                                            {faq.q}
                                        </span>
                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                                            style={{ color: open ? accent : "var(--secondary-text)" }}
                                        />
                                    </button>
                                </h3>

                                {/*
                                    0fr -> 1fr animates the height without measuring the
                                    content, and keeps the answer in the DOM while collapsed
                                    so it still ships in the HTML for FAQPage schema.
                                */}
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="overflow-hidden">
                                        <div
                                            className="pb-5 sm:pb-6 md:pb-7 pr-8 sm:pr-10 text-sm sm:text-base leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
