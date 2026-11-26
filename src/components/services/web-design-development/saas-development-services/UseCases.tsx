import type { CSSProperties, ReactNode } from "react";
import { Factory, BadgeCheck, ArrowRight, Rocket, Building2, Briefcase, Store, Users, Cog } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const industriesHeader: IndustriesHeader = {
    title: (
        <>
            Who We <span style={{ color: "var(--brand-blue-text)" }}>Build For</span>
        </>
    ),
    intro: "We partner with ambitious teams who are building software products that transform their industries.",
};

// Card colours follow the Why Choose cycle (as on E-commerce). The three tags per card
// are kept (two link to blog categories); the vague stat badges repeated the success line.
const industries: Industry[] = [
    {
        icon: Rocket,
        title: "Tech Startups & Scale-Ups",
        description: "Early and growth-stage companies building their core product, needing rapid iteration and scalable architecture from day one. We've helped startups reach meaningful recurring revenue and an active user base.",
        example: "Scaled from 500 to 50K users in 18 months",
        tags: [<Link key="mvp" href="/blog/category/web-development" className="hover:underline">Rapid MVP</Link>, "Scalable", "Agile"],
        color: "from-[#008ac1] to-[#00b5ca]",
        iconColor: "#008ac1",
    },
    {
        icon: Building2,
        title: "Enterprise Digital Products",
        href: "/services/web-design-development/business-corporate",
        description: "Large organizations launching internal tools, customer portals, or new digital product lines alongside existing legacy systems. Integration-ready architecture with enterprise SSO.",
        example: "Internal workflow platform for 10K employees",
        tags: ["Enterprise", "SSO", "Compliance"],
        color: "from-[#fab900] to-[#ee6500]",
        iconColor: "#fab900",
    },
    {
        icon: Briefcase,
        title: "Professional Services Firms",
        href: "/services/web-design-development/business-corporate",
        description: "Consulting, legal, and accounting firms building client portals, collaboration tools, and proprietary software to automate manual processes and improve client experience.",
        example: "Reduced query response time by 65%",
        tags: ["Portals", <Link key="automation" href="/blog/category/ai-automation" className="hover:underline">Automation</Link>, "Secure"],
        color: "from-[#00efd6] to-[#00b5ca]",
        iconColor: "#00efd6",
    },
    {
        icon: Store,
        title: "Marketplace Platforms",
        href: "/services/web-design-development/ecommerce-development-company",
        description: "Two-sided marketplaces connecting buyers with sellers, service providers with clients, or talent with employers. Complex matching algorithms and payment escrow.",
        example: "B2B marketplace with $2M monthly GMV",
        tags: ["Marketplace", "Payments", "Escrow"],
        color: "from-[#bc3feb] to-[#fab900]",
        iconColor: "#bc3feb",
    },
    {
        icon: Users,
        title: "Community & Collaboration Tools",
        href: "/services/web-design-development/edtech-lms",
        description: "Member communities, learning management systems (LMS), and real-time collaboration platforms with live chat, video conferencing (WebRTC), and content moderation.",
        example: "Platform with 50K members & 200K interactions",
        tags: ["Real-time", "WebRTC", "Community"],
        color: "from-[#008ac1] to-[#bc3feb]",
        iconColor: "#008ac1",
    },
    {
        icon: Cog,
        title: "Workflow & Automation Tools",
        description: "Business process automation, project management software, and operational tools that replace spreadsheets and fragmented systems - unlocking significant productivity gains.",
        example: "Consolidated 15 tools into one dashboard",
        tags: [<Link key="automation" href="/blog/category/ai-automation" className="hover:underline">Automation</Link>, "SaaS", "Dashboard"],
        color: "from-[#ee6500] to-[#fab900]",
        iconColor: "#ee6500",
    },
];

const industriesCta: SectionCta = {
    title: "Don't See Your Industry?",
    text: "We've built products across many industries. Let's discuss how we can bring your vision to life with battle-tested development practices.",
    label: "Schedule a Discovery Call",
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
                            backgroundColor: "color-mix(in srgb, #008ac1 5%, transparent)",
                            borderColor: "color-mix(in srgb, #008ac1 20%, transparent)",
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#006d97] to-[#00557a] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {industriesCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                        {industriesCta.secondary && (
                            <Link
                                href={industriesCta.secondary.href}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-4 px-4 sm:px-8 py-4 rounded-full font-semibold text-sm sm:text-lg text-center border border-[var(--border-color)] transition-colors duration-200 hover:border-[#008ac1] focus-visible:outline-none focus-visible:border-[#008ac1]"
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
