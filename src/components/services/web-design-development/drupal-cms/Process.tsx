"use client";

import { useState } from "react";
import {
    CheckCircle2,
    Code2,
    Rocket,
    Search,
    TestTube2,
    Workflow,
    DraftingCompass,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Planning",
            description: "Understanding your content strategy, user needs, and technical requirements.",
            details: [
                "Content audit & strategy",
                "User research & personas",
                "Information architecture",
                "Feature prioritization",
                "Module selection",
                "Technical specifications"
            ],
            deliverable: "Project roadmap & specs",
            duration: "1-2 weeks",
        },
        {
            number: "02",
            icon: DraftingCompass,
            title: "Architecture & Design",
            description: "Structuring content types, taxonomies, and creating user-centered designs.",
            details: [
                "Content type design",
                "Taxonomy structure",
                "User flow wireframes",
                <Link key="link-1" href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-sky-text)] transition-colors underline underline-offset-2">UI/UX design</Link>,
                "Theme architecture",
                "Module planning"
            ],
            deliverable: "Design mockups & architecture",
            duration: "2-3 weeks",
        },
        {
            number: "03",
            icon: Code2,
            title: "Drupal Development",
            description: "Building custom themes, modules, and configuring Drupal for your needs.",
            details: [
                "Custom theme development",
                "Module configuration",
                "Content migration",
                "API integrations",
                "Multilingual setup",
                "Workflow configuration"
            ],
            deliverable: "Functional Drupal site",
            duration: "4-8 weeks",
        },
        {
            number: "04",
            icon: TestTube2,
            title: "Testing & Quality Assurance",
            description: "Comprehensive testing for accessibility, security, and performance.",
            details: [
                "Accessibility testing (WCAG)",
                "Security audit",
                "Cross-browser testing",
                <Link key="link-2" href="/blog/web-performance-optimization-speed" className="hover:text-[var(--accent-sky-text)] transition-colors underline underline-offset-2">Performance optimization</Link>,
                "Content review",
                "User acceptance testing"
            ],
            deliverable: "QA report & fixes",
            duration: "1-2 weeks",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Launch & Support",
            description: "Production deployment with training, documentation, and ongoing support.",
            details: [
                "Production deployment",
                "DNS & SSL setup",
                "Content editor training",
                "Documentation",
                "Monitoring setup",
                "Ongoing maintenance"
            ],
            deliverable: "Live website & training",
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
                            backgroundColor: "rgba(6, 120, 190, 0.1)",
                            borderColor: "rgba(6, 120, 190, 0.3)",
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
                        A proven methodology for delivering enterprise Drupal solutions that exceed expectations.
                    </p>
                </div>

                {/* Timeline (the WordPress layout) */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#0678BE",
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
                                                ${isHovered ? "shadow-xl border-[#0678BE]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #0678BE, #054A91)" }}
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
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#29A8DF" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--accent-sky-text)" }}>Deliverable:</span> {step.deliverable}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#054A91" }} />
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
                                                ${isHovered ? "border-[#0678BE] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#0678BE]" : "bg-muted-foreground"
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
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#0678BE] to-transparent opacity-30 my-2" />
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
