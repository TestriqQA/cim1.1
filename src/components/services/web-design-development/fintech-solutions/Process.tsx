import { CheckCircle, Workflow, ArrowRight, ShieldCheck, DraftingCompass, Code, Lock, Rocket, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const processHeader: ProcessHeader = {
    title: (
        <>
            Our <span style={{ color: "var(--accent-sky-text)" }}>Secured FinTech</span> Process
        </>
    ),
    intro: "A security-first methodology that prioritizes compliance and trust without compromising on innovation.",
};

// #step-* anchors kept (HowTo data). Step 02 "Architecture & UX Design" had a search icon.
const steps: Step[] = [
    {
        anchor: "step-compliance",
        number: "01",
        icon: ShieldCheck,
        title: "Security & Compliance Analysis",
        description: "We start by mapping regulatory requirements (GDPR, PCI-DSS, KYC/AML) and defining the security architecture needed for your financial product.",
        details: [
            "Compliance roadmap",
            "Security audit",
            <Link key="personas" href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:underline">User personas</Link>,
            "Risk assessment",
        ],
    },
    {
        anchor: "step-architecture",
        number: "02",
        icon: DraftingCompass,
        title: "Architecture & UX Design",
        description: "Designing trust-centric interfaces and robust backend architectures. We focus on clarity, speed, and reassuring user experiences for financial workflows.",
        details: [
            "System architecture",
            "API specification",
            <Link key="ux" href="/services/web-design-development/branding-services" className="underline underline-offset-2 hover:underline">UX/UI prototypes</Link>,
            "Data flow diagrams",
        ],
    },
    {
        anchor: "step-development",
        number: "03",
        icon: Code,
        title: "Secure Development",
        description: "Building your platform with a security-first approach. Implementing encryption, secure authentication, and real-time transaction processing engines.",
        details: [
            "Core banking logic",
            "Auth integration",
            <Link key="api" href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline">API development</Link>,
            "Performance tuning",
        ],
    },
    {
        anchor: "step-testing",
        number: "04",
        icon: Lock,
        title: "Penetration Testing & QA",
        description: "Rigorous testing protocols including penetration testing, load testing, and smart contract audits to minimize vulnerabilities before launch.",
        details: ["Penetration testing", "Smart contract audit", "Load testing", "UAT cycles"],
    },
    {
        anchor: "step-launch",
        number: "05",
        icon: Rocket,
        title: "Secure Launch",
        description: "Controlled deployment strategies with phased rollouts. We ensure all integrations (banking rails, payment gateways) are live and stable.",
        details: ["Production deployment", "Environment setup", "Staff training", "Global availability"],
    },
    {
        anchor: "step-monitoring",
        number: "06",
        icon: BarChart3,
        title: "Monitoring & Scaling",
        description: "24/7 internal monitoring for fraud detection and system health. We scale infrastructure as your transaction volume and user base grows.",
        details: ["Real-time monitoring", "Fraud alerts", "Scaling strategy", "Feature updates"],
    },
];

const processCta: SectionCta = {
    title: "Ready to Disrupt Finance?",
    text: "Let's audit your compliance needs and architect a platform that scales.",
    label: "Schedule a FinTech Consultation",
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
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
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
                                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#0ea5e9] flex items-center justify-center text-sm font-bold text-[var(--accent-sky-text)] bg-[var(--card-bg)] transition-colors duration-200 group-hover:bg-[#006d97] group-hover:border-[#006d97] group-hover:text-white motion-reduce:transition-none">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Connector: across to the next step from lg, down to it below lg */}
                                {!isLast && !endsRow && (
                                    <div aria-hidden="true" className="hidden lg:block absolute top-5 left-12 -right-4 h-0.5 bg-[#0ea5e9]/50" />
                                )}
                                {!isLast && (
                                    <div aria-hidden="true" className="lg:hidden absolute left-5 top-12 -bottom-6 w-0.5 -translate-x-1/2 bg-[#0ea5e9]/50" />
                                )}

                                {/* Step card */}
                                <div
                                    className="flex-1 min-w-0 p-6 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out group-hover:border-[#0ea5e9] group-hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:group-hover:translate-y-0"
                                    style={{ backgroundColor: "var(--card-bg)" }}
                                >
                                    {/* Icon beside the title (above it in narrow four-column cards at
                                        1024–1279). Hidden on phones: the numbered circle already marks
                                        the step, and the title gets the full width. */}
                                    <div className={`flex ${cols === 4 ? "lg:flex-col xl:flex-row" : ""} items-start gap-3 mb-3`}>
                                        <div
                                            className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-white flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #006d97, #00557a)" }}
                                        >
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            {step.subtitle && (
                                                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: "var(--accent-sky-text)" }}>
                                                    {step.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, didx) => (
                                            <li key={didx} className="flex items-start gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-sky-text)]" aria-hidden="true" />
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
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-full font-semibold text-white text-sm sm:text-lg text-center bg-gradient-to-r from-[#006d97] to-[#00557a] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
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
