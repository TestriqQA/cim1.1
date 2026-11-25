"use client";

import { useState } from "react";
import {
    ArrowRightLeft,
    CheckCircle,
    Code2,
    Rocket,
    Search,
    Workflow,
    ListChecks,
    DraftingCompass,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Each step keeps its id: the page's HowTo schema links to #step-*.
    const steps = [
        {
            anchor: "step-discovery",
            number: "01",
            icon: Search,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-violet-text)] transition-colors">Discovery & Strategy</Link>,
            description: "Deep dive into your content needs, workflows, and integration requirements.",
            details: [
                "Content audit and analysis",
                "Workflow mapping",
                "Stakeholder interviews",
                "Integration requirements",
                "Success metrics definition",
            ],
        },
        {
            anchor: "step-selection",
            number: "02",
            icon: ListChecks,
            title: "CMS Selection",
            description: "Choose the optimal platform based on requirements and team capabilities.",
            details: [
                "Platform comparison",
                "Feature matching",
                "Scalability assessment",
                "Cost analysis",
                "Team skill evaluation",
            ],
        },
        {
            anchor: "step-architecture",
            number: "03",
            icon: DraftingCompass,
            title: "Content Architecture",
            description: "Design content models, schemas, and relationships for maximum flexibility.",
            details: [
                "Content type design",
                "Schema definition",
                "Taxonomy planning",
                "Relationship mapping",
                "Localization strategy",
            ],
        },
        {
            anchor: "step-development",
            number: "04",
            icon: Code2,
            title: "Development & Integration",
            description: "Build custom themes, plugins, and seamless API integrations.",
            details: [
                "Custom theme development",
                "Plugin/extension creation",
                <Link key="link-1" href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">API integration</Link>,
                "Frontend connection",
                "Workflow automation",
            ],
        },
        {
            anchor: "step-migration",
            number: "05",
            icon: ArrowRightLeft,
            title: "Content Migration",
            description: "Seamlessly transfer existing content to the new platform without data loss.",
            details: [
                "Data mapping",
                "Migration scripting",
                "Media asset transfer",
                "URL redirects",
                "Quality validation",
            ],
        },
        {
            anchor: "step-launch",
            number: "06",
            icon: Rocket,
            title: "Training & Launch",
            description: "Comprehensive training and smooth production deployment.",
            details: [
                "Team training sessions",
                "Documentation creation",
                "Staging validation",
                "Production deployment",
                "Post-launch support",
            ],
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "#9333ea" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            Our Process
                        </span>
                    </div>

                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        How We{" "}
                        <span style={{ color: "var(--accent-violet-text)" }}>
                            Implement
                        </span>{" "}
                        CMS
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A proven methodology for successful CMS implementations,
                        from discovery through launch and beyond.
                    </p>
                </div>

                {/* Timeline (the WordPress layout) */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#9333ea",
                            opacity: 0.5
                        }}
                    />

                    <div className="lg:space-y-16">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 0;
                            const isHovered = hoveredStep === idx;

                            return (
                                <div
                                    key={idx}
                                    id={step.anchor}
                                    className={`scroll-mt-20 relative flex flex-col lg:flex-row items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                    onMouseEnter={() => setHoveredStep(idx)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Content Card */}
                                    <div className="w-full lg:w-5/12">
                                        <div
                                            className={`
                                                p-6 md:p-8 rounded-3xl border transition-all duration-300
                                                ${isHovered ? "shadow-xl border-[#9333ea]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #9333ea, #7e22ce)" }}
                                                >
                                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-[var(--accent-violet-text)]" aria-hidden="true" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Center Node */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                                        <div
                                            className={`
                                                w-12 h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                                                ${isHovered ? "border-[#9333ea] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#9333ea]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--accent-violet-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector: 8 + 32 + 8 = 48px between cards; none after the last step */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#9333ea] to-transparent opacity-30 my-2" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
