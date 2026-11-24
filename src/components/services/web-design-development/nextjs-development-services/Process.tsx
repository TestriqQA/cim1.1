"use client";

import { useState } from "react";
import {
    Zap,
    Search,
    Palette,
    Code2,
    Plug,
    Rocket,
    TrendingUp,
    Lightbulb,
    CheckCircle,
    ArrowRight,
    Terminal,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            anchor: "step-discovery",
            number: "01",
            icon: Lightbulb,
            title: "Strategic Discovery",
            subtitle: "Business Goals",
            description:
                "Analyzing business goals and technical requirements to ensure a solid foundation for your project.",
            deliverables: [
                "Business goal analysis",
                "Technical requirements",
                "Project roadmap",
                "Success metrics",
            ],
            bgColor: "#61dafb",
        },
        {
            anchor: "step-architecture",
            number: "02",
            icon: Palette,
            title: "Architecture Design",
            subtitle: "System Planning",
            description:
                "Designing the custom React component library development, state management, and routing structure.",
            deliverables: [
                "Custom component library",
                "State management plan",
                "Routing architecture",
                <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:text-inherit">UI/UX system design</Link>,
            ],
            bgColor: "#00d4ff",
        },
        {
            anchor: "step-development",
            number: "03",
            icon: Code2,
            title: "Agile Development",
            subtitle: "Iterative Sprints",
            description:
                "Sprints focused on Next.js and React development for startups or enterprises, with frequent updates.",
            deliverables: [
                "Feature implementation",
                "TypeScript development",
                "API integrations",
                "Component building",
            ],
            bgColor: "#61dafb",
        },
        {
            anchor: "step-optimization",
            number: "04",
            icon: Zap,
            title: "Performance Optimization",
            subtitle: "Speed & Vitals",
            description:
                "Focusing on Next.js speed optimization and Core Web Vitals to ensure strong performance.",
            deliverables: [
                "Core Web Vitals audit",
                "Image & code optimization",
                "Caching strategies",
                "Speed performance tuning",
            ],
            bgColor: "#00d4ff",
        },
        {
            anchor: "step-deployment",
            number: "05",
            icon: Rocket,
            title: "Deployment & Hosting",
            subtitle: "Vercel & CI/CD",
            description:
                "Ensuring zero-downtime launches with CI/CD pipelines and optimized Vercel hosting setup.",
            deliverables: [
                "Vercel hosting setup",
                "CI/CD pipeline config",
                "Zero-downtime launch",
                "Monitoring & analytics",
            ],
            bgColor: "#61dafb",
        },
        {
            anchor: "step-seo",
            number: "06",
            icon: Search,
            title: "SEO & Integration",
            subtitle: "Market Visibility",
            description:
                "Implementing Next.js SEO audit recommendations and integrating comprehensive analytics.",
            deliverables: [
                <Link href="/services/seo-services" className="hover:text-inherit">SEO audit implementation</Link>,
                "Analytics integration",
                "Sitemap & robots.txt",
                "Metadata optimization",
            ],
            bgColor: "#00d4ff",
        },
    ];

    return (
        <section
            id="process-section"
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #61dafb 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            {/* Floating Elements */}

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
                        <Terminal className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Development Process
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        From{" "}
                        <span
                            style={{ color: "var(--accent-cyan-text)" }}
                        >
                            Code
                        </span>{" "}
                        to Production
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Our battle-tested development process for building production-ready Next.js applications.
                    </p>
                </div>

                {/* Timeline (same layout and hover as the WordPress page): on desktop the
                    cards alternate around a centre line with a node and a large step
                    number; below lg they stack, joined by short connectors. Each step
                    keeps its id: the page's HowTo schema links to #step-*. */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#61dafb",
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
                                                ${isHovered ? "shadow-xl border-[#61dafb]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-black flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #61dafb, #00d4ff)" }}
                                                >
                                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                                    <p className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>{step.subtitle}</p>
                                                </div>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((deliverable, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-[var(--accent-cyan-text)]" aria-hidden="true" />
                                                        <span>{deliverable}</span>
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
                                                ${isHovered ? "border-[#61dafb] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#61dafb]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--accent-cyan-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector: 8 + 32 + 8 = 48px between cards; none after the last step */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#61dafb] to-transparent opacity-30 my-2" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA: no tint, glow or border, so it sits on the page's own
                    background; side padding kept, top/bottom padding dropped. */}
                <div className="mt-12 md:mt-16 text-center px-8 md:px-12">
                    <Terminal className="w-12 h-12 mx-auto mb-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{ color: "var(--foreground)" }}
                    >
                        Ready to Build Something Amazing?
                    </h3>
                    <p
                        className="text-lg mb-6 max-w-2xl mx-auto"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Let&apos;s create a blazing-fast, production-ready Next.js application together.
                    </p>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                        style={{
                            background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                            color: "#000",
                        }}
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
