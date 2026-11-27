import Link from "next/link";
import { LayoutGrid, CheckCircle2, UserRound, ShieldCheck, Video, LayoutDashboard, ClipboardList, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// The six former "What We Deliver" cards are the rows of one panel (no panel title)
const overview: OverviewData = {
    title: (
        <>
            Healthcare Platforms That <span style={{ color: "var(--brand-blue-text)" }}>Transform Patient Care</span>
        </>
    ),
    paragraphs: [
        "We build secure, scalable healthcare solutions that connect patients with providers, streamline clinical workflows, and ensure regulatory compliance. Our platforms are designed for the unique demands of healthcare organizations.",
        "From patient engagement portals to comprehensive practice management systems, we deliver solutions that improve health outcomes while maintaining the highest standards of data security and privacy.",
    ],
    // short text beside a long panel: text centred, panel full width in 3 columns; no
    // "What We Deliver" title on the panel (user, 26 Nov 2026: "remove what we deliver")
    layout: "stacked",
};

const rows: OverviewRow[] = [
    { icon: UserRound, title: "Patient Portals", description: "Self-service portals for appointments, records, and billing" },
    { icon: ShieldCheck, title: "HIPAA Compliance", description: "End-to-end encryption and audit logging" },
    { icon: Video, title: "Telehealth Integration", href: "/services/mobile-app-development", description: "Secure video consultations and remote monitoring" },
    { icon: LayoutDashboard, title: "Provider Dashboards", description: "Clinical workflows and patient management" },
    { icon: ClipboardList, title: "EHR/EMR Integration", href: "/services/web-design-development/saas-development-services", description: "Seamless data exchange with existing systems" },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Population health and outcome tracking" },
];

type OverviewData = {
    title: ReactNode;
    intro?: ReactNode;
    paragraphs: ReactNode[];
    checklist?: { title: string; items: ReactNode[] };
    panelTitle?: string;
    panelNote?: ReactNode;
    // "stacked": body text centred under the heading, then the panel full width with its
    // rows in a grid (for short text beside a long panel)
    layout?: "stacked";
};
type OverviewRow = { icon: LucideIcon; title?: string; href?: string; description: ReactNode; tags?: string[] };

export default function ServiceOverview() {
    // One big card, rows (sub-sections) split by dividers, no fill and no hover effect of
    // its own (user, 26 Nov 2026: "remove the background color", "remove the border hover
    // effect"). Hovering a sub-section lifts only its icon and text (user, after trying it
    // on E-commerce: "instead of hovering entire particular section, can we just hover icon
    // and content in it", then "apply to all"): the row and its divider lines stay still,
    // the content rises 2px, easing over 400ms, with no shadow or background, and eases
    // back down when the pointer leaves. Keyboard: the same while a link in the row has
    // focus. Each row is a `group`; the lift sits on the row's content.
    const liftClass = "group";
    const rowContent = (item: OverviewRow) => {
        const Icon = item.icon;
        return (
            <div className="flex items-start gap-4 transition-[translate] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-within:-translate-y-0.5 motion-reduce:transition-none">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, #3b82f6 15%, transparent), color-mix(in srgb, #6366f1 15%, transparent))",
                    }}
                >
                    <Icon className="w-6 h-6" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                </div>
                {item.title ? (
                    <div className="min-w-0">
                        <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                            {item.href ? (
                                <Link href={item.href} className="hover:underline">
                                    {item.title}
                                </Link>
                            ) : (
                                item.title
                            )}
                        </h3>
                        <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                            {item.description}
                        </p>
                        {item.tags && (
                            <ul className="flex flex-wrap gap-2 mt-3">
                                {item.tags.map((tag) => (
                                    <li
                                        key={tag}
                                        className="px-2.5 py-0.5 rounded-full border border-[var(--border-color)] text-xs"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    /* A one-line point: centred on the icon */
                    <p className="min-w-0 self-center text-base" style={{ color: "var(--foreground)", lineHeight: "1.5" }}>
                        {item.description}
                    </p>
                )}
            </div>
        );
    };

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #3b82f6 8%, transparent), color-mix(in srgb, #6366f1 8%, transparent))",
                            borderColor: "color-mix(in srgb, #3b82f6 20%, transparent)",
                            color: "var(--brand-blue-text)",
                        }}
                    >
                        <LayoutGrid className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-semibold">Our Service</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
                        {overview.title}
                    </h2>

                    {overview.intro && (
                        <p className="text-lg sm:text-xl mt-6" style={{ color: "var(--secondary-text)" }}>
                            {overview.intro}
                        </p>
                    )}
                </div>

                {overview.layout === "stacked" ? (
                    /* Stacked (Healthcare; user, 26 Nov 2026: "left content is very less and
                       right side card is very big, bring the content in center of width and
                       right side in 3*3 with full width"): the body text centred under the
                       heading at the heading's width, then the panel full width with its rows
                       in a grid: 1 column on phones, 2 from 768px, 3 from 1280px (at 1024 a
                       third column left titles about 180px wide). Dividers: a top line on
                       every row but the first row, a left line on every column but the first. */
                    <>
                        <div className="max-w-4xl mx-auto text-center space-y-6 mb-10 md:mb-12">
                            {overview.paragraphs.map((paragraph, idx) => (
                                <p key={idx} className="text-base leading-[1.7] sm:text-[1.1rem] sm:leading-[1.8]" style={{ color: "var(--secondary-text)" }}>
                                    {paragraph}
                                </p>
                            ))}
                            {overview.checklist && (
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                        {overview.checklist.title}
                                    </h3>
                                    <ul className="inline-flex flex-col gap-3 text-left">
                                        {overview.checklist.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-base" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="rounded-2xl border border-[var(--border-color)]">
                            {overview.panelTitle && (
                                <h3 className="px-6 md:px-8 pt-6 pb-4 text-xl font-bold border-b border-[var(--border-color)]" style={{ color: "var(--foreground)" }}>
                                    {overview.panelTitle}
                                </h3>
                            )}
                            <div className="grid md:grid-cols-2 xl:grid-cols-3">
                                {rows.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-6 md:px-8 border-[var(--border-color)] border-t first:border-t-0 md:[&:nth-child(2)]:border-t-0 md:even:border-l xl:[&:nth-child(3)]:border-t-0 xl:[&:nth-child(3n+1)]:border-l-0 xl:[&:not(:nth-child(3n+1))]:border-l ${liftClass}`}
                                    >
                                        {rowContent(item)}
                                    </div>
                                ))}
                            </div>
                            {overview.panelNote && (
                                <p
                                    className="px-6 md:px-8 py-4 text-sm rounded-b-2xl border-t border-[var(--border-color)]"
                                    style={{ color: "var(--secondary-text)", backgroundColor: "color-mix(in srgb, #3b82f6 6%, transparent)" }}
                                >
                                    {overview.panelNote}
                                </p>
                            )}
                        </div>
                    </>
                ) : overview.paragraphs.length > 0 ? (
                    /* Text and the services panel side by side, centred on each other so
                       neither leaves an empty band under it. From 1680px the text column
                       stops at 43rem (about 80 characters a line) and the panel takes the
                       rest. Both breakpoints are written as min-[…px] so Tailwind orders
                       them by size. */
                    <div className="grid min-[1024px]:grid-cols-2 min-[1680px]:grid-cols-[minmax(0,43rem)_minmax(0,1fr)] gap-12 items-center mx-auto">
                        <div className="space-y-6">
                            {/* All paragraphs share one body style */}
                            {overview.paragraphs.map((paragraph, idx) => (
                                <p key={idx} className="text-base leading-[1.7] sm:text-[1.1rem] sm:leading-[1.8]" style={{ color: "var(--secondary-text)" }}>
                                    {paragraph}
                                </p>
                            ))}

                            {overview.checklist && (
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                        {overview.checklist.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {overview.checklist.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-base" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="rounded-2xl border border-[var(--border-color)] divide-y divide-[var(--border-color)]">
                            {overview.panelTitle && (
                                <h3 className="px-6 md:px-8 pt-6 pb-4 text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                    {overview.panelTitle}
                                </h3>
                            )}
                            {rows.map((item, idx) => (
                                <div key={idx} className={`${item.title ? "p-6 md:px-8" : "px-6 md:px-8 py-4"} ${liftClass}`}>
                                    {rowContent(item)}
                                </div>
                            ))}
                            {overview.panelNote && (
                                <p
                                    className="px-6 md:px-8 py-4 text-sm rounded-b-2xl"
                                    style={{ color: "var(--secondary-text)", backgroundColor: "color-mix(in srgb, #3b82f6 6%, transparent)" }}
                                >
                                    {overview.panelNote}
                                </p>
                            )}
                        </div>
                    </div>
                ) : (
                    /* No body text: the panel runs full width, rows in two columns from 768px.
                       With an odd number of rows (Blogs: 5) the last one spans both columns,
                       so no empty cell is left beside it (user, 26 Nov 2026: "is not looking
                       proper make it proper only for this page"). */
                    <div className="grid md:grid-cols-2 rounded-2xl border border-[var(--border-color)]">
                        {rows.map((item, idx) => (
                            <div
                                key={idx}
                                className={`p-6 md:px-8 border-t border-[var(--border-color)] first:border-t-0 md:[&:nth-child(2)]:border-t-0 md:even:border-l ${rows.length % 2 === 1 && idx === rows.length - 1 ? "md:col-span-2" : ""} ${liftClass}`}
                            >
                                {rowContent(item)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
