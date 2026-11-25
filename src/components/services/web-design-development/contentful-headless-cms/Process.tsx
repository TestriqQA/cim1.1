"use client";

import { useState } from "react";
import {
    CheckCircle2,
    Code2,
    Rocket,
    Search,
    TestTube2,
    Workflow,
    Shapes,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Strategy",
            description: <><span className="text-inherit">Understanding your </span><Link href="/services/brand-identity-design" className="underline underline-offset-2 text-[var(--accent-sky-text)] hover:underline">content strategy</Link>, channel requirements, and integration landscape.</>,
            details: [
                "Content audit & strategy",
                "Channel mapping",
                "Integration planning",
                "Localization needs",
                "Team workflows",
                "Performance goals"
            ],
            deliverable: "Content strategy document",
            duration: "1-2 weeks",
        },
        {
            number: "02",
            icon: Shapes,
            title: "Content Modeling",
            description: "Designing reusable content types, components, and relationships in Contentful.",
            details: [
                "Content type design",
                "Component architecture",
                "Reference modeling",
                "Localization setup",
                "Rich text configuration",
                "Validation rules"
            ],
            deliverable: "Content model",
            duration: "1-2 weeks",
        },
        {
            number: "03",
            icon: Code2,
            title: "Development & Integration",
            description: "Building frontend applications and integrating with Contentful's APIs.",
            details: [
                <Link key="frontend" href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--accent-sky-text)] transition-colors">Frontend development</Link>,
                "API integration",
                "Preview setup",
                "Webhook configuration",
                "Custom app development",
                "Performance optimization"
            ],
            deliverable: "Integrated application",
            duration: "4-8 weeks",
        },
        {
            number: "04",
            icon: TestTube2,
            title: "Testing & Migration",
            description: "Quality assurance, content migration, and editor training.",
            details: [
                "Content migration",
                "Cross-browser testing",
                "Performance testing",
                "Editor training",
                "Workflow testing",
                "UAT sessions"
            ],
            deliverable: "Production-ready system",
            duration: "1-2 weeks",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Optimize",
            description: "Production deployment with monitoring, analytics, and ongoing optimization.",
            details: [
                "Production deployment",
                "CDN configuration",
                "Monitoring setup",
                "Analytics integration",
                "Documentation",
                "Ongoing support"
            ],
            deliverable: "Live platform",
            duration: "1 week + ongoing",
        },
    ];

    return (
        <section id="process" className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6 backdrop-blur-sm"
                        style={{
                            backgroundColor: "rgba(2, 134, 255, 0.1)",
                            borderColor: "rgba(2, 134, 255, 0.3)",
                        }}
                    >
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-sky-text)" }}>
                            Our Process
                        </span>
                    </div>
                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Our{" "}
                        <span style={{ color: "var(--accent-sky-text)" }}>
                            Development Process
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A proven approach to delivering enterprise-grade Contentful implementations.
                    </p>
                </div>

                {/* Timeline (the WordPress layout) */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#0286FF",
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
                                    className={`relative flex flex-col lg:flex-row items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                    onMouseEnter={() => setHoveredStep(idx)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Content Card */}
                                    <div className="w-full lg:w-5/12">
                                        <div
                                            className={`
                                                p-6 md:p-8 rounded-3xl border transition-all duration-300
                                                ${isHovered ? "shadow-xl border-[#0286FF]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #0067D6, #0059C8)" }}
                                                >
                                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[var(--accent-sky-text)]" aria-hidden="true" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Deliverable and timeline */}
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#4DA3FF" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--accent-sky-text)" }}>Deliverable:</span> {step.deliverable}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0059C8" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--accent-sky-text)" }}>Timeline:</span> {step.duration}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Node */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                                        <div
                                            className={`
                                                w-12 h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                                                ${isHovered ? "border-[#0286FF] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#0286FF]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--accent-sky-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector: 8 + 32 + 8 = 48px between cards; none after the last step */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#0286FF] to-transparent opacity-30 my-2" />
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
