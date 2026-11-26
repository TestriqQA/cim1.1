import type { CSSProperties, ReactNode } from "react";
import { Factory, BadgeCheck, ArrowRight, Camera, Code2, Palette, Briefcase, Mic, UserRoundSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const industriesHeader: IndustriesHeader = {
    title: (
        <>
            Who We <span style={{ color: "var(--accent-cyan-text)" }}>Help</span>
        </>
    ),
    intro: "We've helped creatives and professionals across many fields build portfolios that get results.",
};

// Each card's three outcomes are its tags. Job Seekers had a graduation-cap icon.
const industries: Industry[] = [
    {
        icon: Camera,
        title: "Photographers",
        description: "Visual storytellers who need a platform as powerful as their lenses to sell prints and book sessions.",
        tags: ["Sell prints", "Book sessions", "Global exposure"],
        color: "from-[#0891b2] to-[#0e7490]",
        iconColor: "#06b6d4",
    },
    {
        icon: Code2,
        title: "Developers",
        description: "Tech talent looking to skip the queue. Bypass HR filters by proving skills through live demos.",
        tags: ["Bypass filters", "Prove skills", "Live demos"],
        color: "from-[#0d9488] to-[#0f766e]",
        iconColor: "#14b8a6",
    },
    {
        icon: Palette,
        title: "Designers",
        description: "Creative visionaries seeking better clients. Attract premium projects by framing work as strategic solutions.",
        tags: ["Premium projects", "Strategic framing", "High-value clients"],
        color: "from-[#0e7490] to-[#155e75]",
        iconColor: "#0891b2",
    },
    {
        icon: Briefcase,
        title: "Freelancers",
        description: "Independent experts building a business of one. Legitimize your practice and command higher rates.",
        tags: ["Legitimize practice", "Command higher rates", "Professional positioning"],
        color: "from-[#0891b2] to-[#0e7490]",
        iconColor: "#06b6d4",
    },
    {
        icon: Mic,
        title: "Speakers & Coaches",
        description: "Thought leaders needing a stage. Build platforms to highlight keynotes, sell books, and grow applications.",
        tags: ["Highlight keynotes", "Sell books", "Grow applications"],
        color: "from-[#0d9488] to-[#0f766e]",
        iconColor: "#14b8a6",
    },
    {
        icon: UserRoundSearch,
        title: "Job Seekers",
        description: "Ambitious professionals aiming for the C-suite. Control Google results with a curated professional narrative.",
        tags: ["C-suite focus", "Control Google results", "Curated narrative"],
        color: "from-[#0e7490] to-[#155e75]",
        iconColor: "#0891b2",
    },
];

const industriesCta: SectionCta = null;

type IndustriesHeader = { title: ReactNode; intro: ReactNode };
type Industry = {
    icon: LucideIcon;
    title: string;
    href?: string;
    description: ReactNode;
    example?: string;
    tag?: string;
    tags?: ReactNode[];
    color: string;
    iconColor: string;
};
type SectionCta = { title?: string; text?: ReactNode; label: string; href?: string; secondary?: { label: string; href: string } } | null;

export default function UseCases() {
    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "color-mix(in srgb, #06b6d4 5%, transparent)",
                            borderColor: "color-mix(in srgb, #06b6d4 20%, transparent)",
                        }}
                    >
                        <Factory className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Industries
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        {industriesHeader.title}
                    </h2>

                    <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        {industriesHeader.intro}
                    </p>
                </div>

                {/* Industries Grid: each card in its own colour (border on hover + 4px
                    lift), icon beside the title, and the success story pinned to the foot
                    so it lines up across a row. */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${industries.length === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3"} md:auto-rows-fr gap-6`}>
                    {industries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={industry.title}
                                className="flex flex-col p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)", "--card-accent": industry.iconColor } as CSSProperties}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${industry.color}`}>
                                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                        {industry.href ? (
                                            <Link href={industry.href} className="hover:underline">
                                                {industry.title}
                                            </Link>
                                        ) : (
                                            industry.title
                                        )}
                                    </h3>
                                </div>

                                <p className="text-sm mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {industry.description}
                                </p>

                                {(industry.tag || industry.tags) && (
                                    <ul className="flex flex-wrap gap-2 mb-6">
                                        {[...(industry.tag ? [industry.tag] : []), ...(industry.tags ?? [])].map((tag, tidx) => (
                                            <li
                                                key={tidx}
                                                className="px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-semibold"
                                                style={{ color: "var(--secondary-text)" }}
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {industry.example && (
                                    <div className="mt-auto pt-4 flex items-start gap-2 border-t border-[var(--border-color)]">
                                        <BadgeCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-cyan-text)]" aria-hidden="true" />
                                        <p className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                                            Success: {industry.example}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {industriesCta && (
                    <div className="mt-12 md:mt-16 text-center px-0 sm:px-8">
                        {industriesCta.title && (
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                {industriesCta.title}
                            </h3>
                        )}
                        {industriesCta.text && (
                            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                {industriesCta.text}
                            </p>
                        )}
                        <Link
                            href={industriesCta.href ?? "/contact"}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#0e7490] to-[#155e75] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {industriesCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                        {industriesCta.secondary && (
                            <Link
                                href={industriesCta.secondary.href}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-4 px-4 sm:px-8 py-4 rounded-full font-semibold text-sm sm:text-lg text-center border border-[var(--border-color)] transition-colors duration-200 hover:border-[#06b6d4] focus-visible:outline-none focus-visible:border-[#06b6d4]"
                                style={{ color: "var(--foreground)" }}
                            >
                                {industriesCta.secondary.label}
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
