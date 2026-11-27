import { CheckCircle, Workflow, ArrowRight, Search, Palette, Code, TestTube2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const processHeader: ProcessHeader = {
    title: (
        <>
            Our HarmonyOS <span style={{ color: "var(--accent-red-text)" }}>Development Process</span>
        </>
    ),
    intro: "A proven methodology for building high-quality HarmonyOS applications with HMS integration.",
};

// Numbered stepper instead of the zig-zag timeline (as on iOS). Each step's duration is its
// subtitle; the tick lists were shown on hover only (never on phones), now always. Icons as
// on iOS: UI/UX Design had Layers (the Tech Stack pill's icon) and is now Palette; Discovery
// is Search.
const steps: Step[] = [
    {
        number: "01",
        icon: Search,
        title: "Discovery & Planning",
        subtitle: "1-2 Weeks",
        description: "We analyze your requirements, target devices, and HMS integration needs to create a comprehensive development roadmap.",
        details: ["Requirements analysis", "Device strategy", "HMS services selection", "Technical architecture", "Project timeline"],
    },
    {
        number: "02",
        icon: Palette,
        title: "UI/UX Design",
        subtitle: "2-3 Weeks",
        description: (
            <>
                <Link href="/services/brand-identity-design" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-red-text)" }}>
                    Design intuitive interfaces
                </Link>{" "}
                following HarmonyOS design guidelines with adaptive layouts for multi-device support.
            </>
        ),
        details: ["HarmonyOS design system", "Multi-device layouts", "Distributed UI patterns", "Interactive prototypes", "Accessibility review"],
    },
    {
        number: "03",
        icon: Code,
        title: "Development",
        subtitle: "8-16 Weeks",
        description: "Agile development using ArkTS and ArkUI with HMS Core integration. Regular builds and progress updates.",
        details: ["ArkTS development", "HMS Core integration", "Distributed capabilities", "API development", "Code reviews"],
    },
    {
        number: "04",
        icon: TestTube2,
        title: "Testing & QA",
        subtitle: "2-3 Weeks",
        description: "Comprehensive testing across multiple HarmonyOS devices using DevEco testing tools and real device cloud.",
        details: ["Unit testing", "Device compatibility", "Performance testing", "Security scanning", "User acceptance"],
    },
    {
        number: "05",
        icon: Rocket,
        title: "AppGallery Launch",
        subtitle: "1-2 Weeks",
        description: "Submission to Huawei AppGallery with optimization for discoverability and ongoing maintenance support.",
        details: [
            "App review preparation",
            "ASO optimization",
            "AppGallery submission",
            "Launch monitoring",
            <Link key="support" href="/services/additional-support-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-red-text)" }}>
                Post-launch support
            </Link>,
        ],
    },
];

const processCta: SectionCta = null;

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
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-red-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-red-text)" }}>
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
                                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#C7000B] flex items-center justify-center text-sm font-bold text-[var(--accent-red-text)] bg-[var(--card-bg)] transition-colors duration-200 group-hover:bg-[#b91c1c] group-hover:border-[#b91c1c] group-hover:text-white motion-reduce:transition-none">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Connector: across to the next step from lg, down to it below lg */}
                                {!isLast && !endsRow && (
                                    <div aria-hidden="true" className="hidden lg:block absolute top-5 left-12 -right-4 h-0.5 bg-[#C7000B]/50" />
                                )}
                                {!isLast && (
                                    <div aria-hidden="true" className="lg:hidden absolute left-5 top-12 -bottom-6 w-0.5 -translate-x-1/2 bg-[#C7000B]/50" />
                                )}

                                {/* Step card */}
                                <div
                                    className="flex-1 min-w-0 p-6 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out group-hover:border-[#C7000B] group-hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:group-hover:translate-y-0"
                                    style={{ backgroundColor: "var(--card-bg)" }}
                                >
                                    {/* Icon beside the title (above it in narrow four-column cards at
                                        1024–1279). Hidden on phones: the numbered circle already marks
                                        the step, and the title gets the full width. */}
                                    <div className={`flex ${cols === 4 ? "lg:flex-col xl:flex-row" : ""} items-start gap-3 mb-3`}>
                                        <div
                                            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-white flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #b91c1c, #991b1b)" }}
                                        >
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            {step.subtitle && (
                                                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: "var(--accent-red-text)" }}>
                                                    {step.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, didx) => (
                                            <li key={didx} className="flex items-start gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-red-text)]" aria-hidden="true" />
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#b91c1c] to-[#991b1b] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
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
