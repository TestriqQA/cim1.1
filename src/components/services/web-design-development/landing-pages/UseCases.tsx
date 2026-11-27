import type { CSSProperties, ReactNode } from "react";
import { Factory, BadgeCheck, ArrowRight, Rocket, ShoppingBag, Briefcase, Home, GraduationCap, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const industriesHeader: IndustriesHeader = {
    title: (
        <>
            Who Needs <span style={{ color: "var(--accent-green-text)" }}>Landing Pages?</span>
        </>
    ),
    intro: "We build high-performance pages for any business that relies on online traffic to generate leads or sales.",
};

// Card colours follow the Why Choose cycle; the three tags per card are kept, the
// one-word stat badges repeated the success line.
const industries: Industry[] = [
    {
        icon: Rocket,
        title: "SaaS & Tech Startups",
        description: "Drive free trials, demo requests, and webinar signups for your software products. Explain complex value props simply.",
        example: "Increase in demo requests",
        tags: ["B2B SaaS", "Demos", "Trials"],
        color: "from-[#10b981] to-[#0ea5e9]",
        iconColor: "#10b981",
    },
    {
        icon: ShoppingBag,
        title: "E-commerce Brands",
        description: "Dedicated product launch pages and seasonal promo pages that convert traffic better than standard product pages.",
        example: "Higher conversion on Black Friday",
        tags: ["Product Launch", "Promos", "DTC"],
        color: "from-[#0ea5e9] to-[#22c55e]",
        iconColor: "#0ea5e9",
    },
    {
        icon: Briefcase,
        title: "Professional Services",
        description: "Generate high-quality leads for legal, consulting, and financial services. Build trust and authority instantly.",
        example: "High-ticket client acquisition",
        tags: ["Consulting", "Legal", "Finance"],
        color: "from-[#22c55e] to-[#10b981]",
        iconColor: "#22c55e",
    },
    {
        icon: Home,
        title: "Real Estate Agents",
        description: "Capture seller leads with home valuation pages or showcase luxury properties with immersive listing pages.",
        example: "Seller lead generation machine",
        tags: ["Listings", "Valuations", "Realtors"],
        color: "from-[#0ea5e9] to-[#10b981]",
        iconColor: "#0ea5e9",
    },
    {
        icon: GraduationCap,
        title: "Education & Courses",
        description: "Fill your webinars and sell your online courses with persuasive long-form sales pages that overcome objections.",
        example: "Sold out webinar seats",
        tags: ["Courses", "Webinars", "Coaching"],
        color: "from-[#10b981] to-[#22c55e]",
        iconColor: "#10b981",
    },
    {
        icon: HeartPulse,
        title: "Health & Wellness",
        description: "Book more appointments for clinics, gyms, and spas. Local landing pages that rank and convert.",
        example: "New patient bookings",
        tags: ["Clinics", "Gyms", "Spas"],
        color: "from-[#22c55e] to-[#0ea5e9]",
        iconColor: "#22c55e",
    },
];

const industriesCta: SectionCta = {
    title: "Any Industry. Any Goal.",
    text: "Whether you're B2B, B2C, or non-profit, the principles of persuasion remain the same. We apply universal conversion strategies tailored to your niche.",
    label: "Get Your Landing Page",
    secondary: { label: "View Other Services", href: "/services" },
};

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
                            backgroundColor: "color-mix(in srgb, #10b981 5%, transparent)",
                            borderColor: "color-mix(in srgb, #10b981 20%, transparent)",
                        }}
                    >
                        <Factory className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
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
                                        <BadgeCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-green-text)]" aria-hidden="true" />
                                        <p className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#047857] to-[#065f46] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {industriesCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                        {industriesCta.secondary && (
                            <Link
                                href={industriesCta.secondary.href}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-4 px-4 sm:px-8 py-4 rounded-full font-semibold text-sm sm:text-lg text-center border border-[var(--border-color)] transition-colors duration-200 hover:border-[#10b981] focus-visible:outline-none focus-visible:border-[#10b981]"
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
