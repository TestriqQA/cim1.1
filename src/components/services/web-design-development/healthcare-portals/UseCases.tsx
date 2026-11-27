import type { CSSProperties, ReactNode } from "react";
import { Factory, BadgeCheck, ArrowRight, Hospital, HeartPulse, Stethoscope, Pill, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const industriesHeader: IndustriesHeader = {
    title: (
        <>
            Who We <span style={{ color: "var(--brand-blue-text)" }}>Serve</span>
        </>
    ),
    intro: "Healthcare organizations of all sizes trust us to build their digital platforms.",
};

// Five cards, each in its own colour; this page has no success stories, so no footer
const industries: Industry[] = [
    {
        icon: Hospital,
        title: "Hospitals & Health Systems",
        description: "Enterprise patient portals, care coordination platforms, and population health management systems.",
        color: "from-[#3b82f6] to-[#2563eb]",
        iconColor: "#3b82f6",
    },
    {
        icon: HeartPulse,
        title: "Primary Care Practices",
        description: "Patient engagement portals with scheduling, messaging, and telehealth capabilities.",
        color: "from-[#6366f1] to-[#4f46e5]",
        iconColor: "#6366f1",
    },
    {
        icon: Stethoscope,
        title: "Specialty Clinics",
        description: "Specialized portals for cardiology, oncology, orthopedics, and other specialties.",
        color: "from-[#8b5cf6] to-[#7c3aed]",
        iconColor: "#8b5cf6",
    },
    {
        icon: Pill,
        title: "Pharmacies & Labs",
        href: "/services/web-design-development/ecommerce-development-company",
        description: "Prescription management, lab results delivery, and medication adherence platforms.",
        color: "from-[#3b82f6] to-[#2563eb]",
        iconColor: "#3b82f6",
    },
    {
        icon: Brain,
        title: "Behavioral Health",
        description: "Mental health platforms with therapy scheduling, progress tracking, and crisis resources.",
        color: "from-[#6366f1] to-[#4f46e5]",
        iconColor: "#6366f1",
    },
];

const industriesCta: SectionCta = { label: "Discuss Your Use Case" };

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
                            backgroundColor: "color-mix(in srgb, #3b82f6 5%, transparent)",
                            borderColor: "color-mix(in srgb, #3b82f6 20%, transparent)",
                        }}
                    >
                        <Factory className="w-4 h-4" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
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
                                        <BadgeCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--brand-blue-text)]" aria-hidden="true" />
                                        <p className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {industriesCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                        {industriesCta.secondary && (
                            <Link
                                href={industriesCta.secondary.href}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-4 px-4 sm:px-8 py-4 rounded-full font-semibold text-sm sm:text-lg text-center border border-[var(--border-color)] transition-colors duration-200 hover:border-[#3b82f6] focus-visible:outline-none focus-visible:border-[#3b82f6]"
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
