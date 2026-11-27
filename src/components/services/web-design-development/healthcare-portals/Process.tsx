import { CheckCircle, Workflow, ArrowRight, Search, Palette, Code, TestTube, Rocket, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const processHeader: ProcessHeader = {
    title: (
        <>
            Our <span style={{ color: "var(--brand-blue-text)" }}>Healthcare Development</span> Process
        </>
    ),
    intro: "A compliance-first methodology that prioritizes patient safety while building secure, scalable healthcare solutions.",
};

// #step-* anchors kept: the page's HowTo data links to them
const steps: Step[] = [
    {
        anchor: "step-requirements",
        number: "01",
        icon: Search,
        title: "Requirements & Compliance",
        description: "We analyze your healthcare workflows, regulatory requirements, and integration needs to create a comprehensive development roadmap that ensures HIPAA compliance from day one.",
        details: ["Compliance assessment", "Workflow analysis", "Technical requirements", "Security plan"],
    },
    {
        anchor: "step-design",
        number: "02",
        icon: Palette,
        title: <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:underline">UX Design &amp; Prototyping</Link>,
        description: "Design patient-centered interfaces that are accessible, intuitive, and optimized for clinical workflows with empathy-driven user experience.",
        details: ["User research", "Wireframes", "UI mockups", "Usability testing"],
    },
    {
        anchor: "step-development",
        number: "03",
        icon: Code,
        title: "Secure Development",
        description: "Build HIPAA-compliant solutions with end-to-end encryption, comprehensive audit logging, and secure multi-factor authentication.",
        details: [
            "Secure architecture",
            <Link key="api" href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline">API development</Link>,
            "EHR integration",
            <Link key="mobile" href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">Mobile apps</Link>,
        ],
    },
    {
        anchor: "step-testing",
        number: "04",
        icon: TestTube,
        title: "Testing & Validation",
        description: "Rigorous testing including security audits, penetration testing, HIPAA compliance validation, and user acceptance testing.",
        details: ["Security audit", "Penetration testing", "HIPAA validation", "User acceptance testing"],
    },
    {
        anchor: "step-deployment",
        number: "05",
        icon: Rocket,
        title: "Deployment & Training",
        description: "Secure staged deployment with comprehensive training for clinical staff, administrators, and end users.",
        details: ["Staged deployment", "Staff training", "Documentation", "Go-live support"],
    },
    {
        anchor: "step-monitoring",
        number: "06",
        icon: BarChart3,
        title: "Monitoring & Optimization",
        description: "Continuous 24/7 monitoring, security updates, performance optimization, and analytics for ongoing improvement.",
        details: ["24/7 monitoring", "Security updates", "Performance tuning", "Analytics dashboard"],
    },
];

const processCta: SectionCta = {
    title: "Ready to Build Your Healthcare Platform?",
    text: "Let's discuss how our proven process can bring your healthcare solution to life.",
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
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
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
                                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#3b82f6] flex items-center justify-center text-sm font-bold text-[var(--brand-blue-text)] bg-[var(--card-bg)] transition-colors duration-200 group-hover:bg-[#2563eb] group-hover:border-[#2563eb] group-hover:text-white motion-reduce:transition-none">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Connector: across to the next step from lg, down to it below lg */}
                                {!isLast && !endsRow && (
                                    <div aria-hidden="true" className="hidden lg:block absolute top-5 left-12 -right-4 h-0.5 bg-[#3b82f6]/50" />
                                )}
                                {!isLast && (
                                    <div aria-hidden="true" className="lg:hidden absolute left-5 top-12 -bottom-6 w-0.5 -translate-x-1/2 bg-[#3b82f6]/50" />
                                )}

                                {/* Step card */}
                                <div
                                    className="flex-1 min-w-0 p-6 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out group-hover:border-[#3b82f6] group-hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:group-hover:translate-y-0"
                                    style={{ backgroundColor: "var(--card-bg)" }}
                                >
                                    {/* Icon beside the title (above it in narrow four-column cards at
                                        1024–1279). Hidden on phones: the numbered circle already marks
                                        the step, and the title gets the full width. */}
                                    <div className={`flex ${cols === 4 ? "lg:flex-col xl:flex-row" : ""} items-start gap-3 mb-3`}>
                                        <div
                                            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-white flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}
                                        >
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            {step.subtitle && (
                                                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: "var(--brand-blue-text)" }}>
                                                    {step.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, didx) => (
                                            <li key={didx} className="flex items-start gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--brand-blue-text)]" aria-hidden="true" />
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
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
