import { CheckCircle, Workflow, ArrowRight, Search, Palette, Code, TestTube, Rocket, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const processHeader: ProcessHeader = {
    title: (
        <>
            Our <span style={{ color: "var(--accent-teal-text)" }}>Real Estate Development</span> Process
        </>
    ),
    intro: "A lead-focused methodology that prioritizes property presentation while building a foundation for long-term growth.",
};

// #step-* anchors kept: the page's HowTo data links to them
const steps: Step[] = [
    {
        anchor: "step-discovery",
        number: "01",
        icon: Search,
        title: "Market Research & Discovery",
        description: "We analyze your target market, competitor platforms, and user expectations to define a real estate platform strategy that captures leads and drives conversions.",
        details: ["Market analysis", "User persona mapping", "Lead funnel design", "Feature prioritization"],
    },
    {
        anchor: "step-design",
        number: "02",
        icon: Palette,
        title: (
            <>
                <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:underline">UX Design</Link> &amp; Property Presentation
            </>
        ),
        description: "Creating visually stunning property showcases with intuitive search, interactive maps, and mobile-first experiences that engage property seekers.",
        details: [
            "Listing page wireframes",
            "Search interface design",
            "Interactive map UX",
            <Link key="mobile" href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">Mobile optimization</Link>,
        ],
    },
    {
        anchor: "step-development",
        number: "03",
        icon: Code,
        title: "Platform Development",
        description: "Building your platform with MLS/IDX integration, advanced search functionality, virtual tour embedding, and CRM connections for seamless operations.",
        details: ["MLS integration", "Map functionality", "Virtual tour setup", "CRM connection"],
    },
    {
        anchor: "step-testing",
        number: "04",
        icon: TestTube,
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing of search algorithms, listing displays, lead capture forms, and performance across all devices and browsers.",
        details: ["Search testing", "Lead form validation", "Performance testing", "Cross-device QA"],
    },
    {
        anchor: "step-launch",
        number: "05",
        icon: Rocket,
        title: "Launch & Optimization",
        description: <>Coordinated launch with <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline">SEO configuration</Link>, analytics setup, and initial marketing integrations to capture early leads and maximize visibility.</>,
        details: ["Local SEO setup", "Analytics config", "Lead notifications", "Social integration"],
    },
    {
        anchor: "step-growth",
        number: "06",
        icon: BarChart3,
        title: "Growth & Analytics",
        description: "Ongoing optimization with A/B testing, lead conversion analysis, and feature enhancements based on user behavior data.",
        details: ["A/B testing", "Lead reports", "Feature roadmap", "Performance monitoring"],
    },
];

const processCta: SectionCta = {
    title: "Ready to Launch Your Real Estate Platform?",
    text: "Let's discuss how our proven process can bring your property platform to life.",
    label: "Schedule a Consultation",
};

type ProcessHeader = { title: ReactNode; intro: ReactNode };
type Step = {
    anchor?: string;
    number: string;
    icon: LucideIcon;
    title: ReactNode;
    // a short line under the title (Travel: "Starting Point", "Take Off"…)
    subtitle?: string;
    description: ReactNode;
    details: ReactNode[];
};
type SectionCta = { title?: string; text?: ReactNode; label: string; href?: string } | null;

export default function Process() {
    // Columns from lg: 7 steps in rows of 4 (4+3); 5 or 6 steps in rows of 3
    // (3+3, 3+2), so no row is left with a single card.
    const cols = steps.length === 7 || steps.length === 8 ? 4 : 3;
    const gridClass = cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
                    >
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-teal-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        {processHeader.title}
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        {processHeader.intro}
                    </p>
                </div>

                {/* Numbered stepper (website-type pages). From lg: rows of steps, the
                    number circles joined by a line (none after the end of a row or the
                    last step). Below lg: a list with the numbers on a rail at the left.
                    Each step keeps its #step-* anchor (the page's HowTo data links to it).
                    Hover (CSS only): the card's border turns the page colour and lifts
                    4px, and the number circle fills. */}
                <ol className={`grid ${gridClass} gap-8 lg:gap-x-6 lg:gap-y-12`}>
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isLast = idx === steps.length - 1;
                        const endsRow = idx % cols === cols - 1;

                        return (
                            <li
                                key={step.number}
                                id={step.anchor}
                                className="group scroll-mt-20 relative flex lg:flex-col gap-4"
                            >
                                {/* Number on the line */}
                                <div className="relative flex-shrink-0">
                                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#0d9488] flex items-center justify-center text-sm font-bold text-[var(--accent-teal-text)] bg-[var(--card-bg)] transition-colors duration-200 group-hover:bg-[#0f766e] group-hover:border-[#0f766e] group-hover:text-white motion-reduce:transition-none">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Connector: across to the next step from lg, down to it below lg */}
                                {!isLast && !endsRow && (
                                    <div aria-hidden="true" className="hidden lg:block absolute top-5 left-12 -right-4 h-0.5 bg-[#0d9488]/50" />
                                )}
                                {!isLast && (
                                    <div aria-hidden="true" className="lg:hidden absolute left-5 top-12 -bottom-6 w-0.5 -translate-x-1/2 bg-[#0d9488]/50" />
                                )}

                                {/* Step card */}
                                <div
                                    className="flex-1 min-w-0 p-6 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out group-hover:border-[#0d9488] group-hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:group-hover:translate-y-0"
                                    style={{ backgroundColor: "var(--card-bg)" }}
                                >
                                    {/* Icon beside the title (above it in narrow four-column cards at
                                        1024–1279). Hidden on phones: the numbered circle already marks
                                        the step, and the title gets the full width. */}
                                    <div className={`flex ${cols === 4 ? "lg:flex-col xl:flex-row" : ""} items-start gap-3 mb-3`}>
                                        <div
                                            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-white flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #0f766e, #115e59)" }}
                                        >
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            {step.subtitle && (
                                                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: "var(--accent-teal-text)" }}>
                                                    {step.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, didx) => (
                                            <li key={didx} className="flex items-start gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-teal-text)]" aria-hidden="true" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {processCta && (
                    <div className="mt-12 md:mt-16 text-center px-0 sm:px-8">
                        {processCta.title && (
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                {processCta.title}
                            </h3>
                        )}
                        {processCta.text && (
                            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                                {processCta.text}
                            </p>
                        )}
                        <Link
                            href={processCta.href ?? "/contact"}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#0f766e] to-[#115e59] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        >
                            {processCta.label}
                            <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
