import type { ReactNode } from "react";

export type GuideItem = { title: string; text: string };

/**
 * A plain content section (heading, intro, grid of short cards) used to add
 * depth to priority service pages (SEO 4-week plan, weeks 2-3). Server
 * component: adds no client JavaScript.
 */
export default function ServiceGuide({
    id,
    title,
    intro,
    items,
    accent,
    footer,
    columns = 4,
}: {
    id?: string;
    title: string;
    intro?: string;
    items: GuideItem[];
    /** CSS colour for the card marker, e.g. "var(--brand-blue-text)". */
    accent: string;
    footer?: ReactNode;
    columns?: 2 | 3 | 4;
}) {
    const grid = columns === 2 ? "md:grid-cols-2" : columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4";
    return (
        <section id={id} className="py-12 sm:py-16 md:py-20 scroll-mt-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 xl:px-20">
                <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl" style={{ color: "var(--foreground)" }}>
                        {title}
                    </h2>
                    {intro && (
                        <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--secondary-text)" }}>
                            {intro}
                        </p>
                    )}
                </div>
                <div className={`grid grid-cols-1 gap-4 sm:gap-6 ${grid}`}>
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border p-5 sm:p-6"
                            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                        >
                            <span aria-hidden="true" className="mb-4 block h-1 w-10 rounded-full" style={{ backgroundColor: accent }} />
                            <h3 className="mb-2 text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                                {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--secondary-text)" }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                {footer && (
                    <p className="mt-8 text-center text-sm sm:text-base" style={{ color: "var(--secondary-text)" }}>
                        {footer}
                    </p>
                )}
            </div>
        </section>
    );
}
