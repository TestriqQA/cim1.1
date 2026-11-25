"use client";

import { useState } from "react";
import {
    CheckCircle2,
    Code2,
    Gauge,
    Palette,
    Rocket,
    Search,
    Workflow,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Content Strategy",
            description: "We analyze your content needs and define the optimal site architecture with Astro performance optimization.",
            details: [
                "Competitive Analysis",
                "Content Audit & Mapping",
                "Core Web Vitals Targets",
                "Framework (SSG vs SSR) Eval",
                "Timeline & Sprint Planning",
                "Technical Specification"
            ],
            deliverable: "Project brief & sitemap",
            duration: "5-7 days",
        },
        {
            number: "02",
            icon: Palette,
            title: "Design & Component Planning",
            description: "Creating the visual design and planning Astro islands architecture implementation services.",
            details: [
                "UI/UX Design Mockups",
                "Design System Tokens",
                "Islands & Hydration Strategy",
                "Image & Font Optimization",
                "Accessibility Compliance",
                "Design Handoff & Specs"
            ],
            deliverable: "Figma designs & style guide",
            duration: "7-10 days",
        },
        {
            number: "03",
            icon: Code2,
            title: "Development & Integration",
            description: "Building your Astro site with content-driven web application development and fast static pages.",
            details: [
                "Core Setup & TypeScript",
                "Island Components (React/Vue)",
                <Link key="link-1" href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)] transition-colors">Headless CMS Integration</Link>,
                "MDX Setup & Routing",
                "Analytics & Form Setup",
                "Peer Code Reviews"
            ],
            deliverable: "Production-ready codebase",
            duration: "15-25 days",
        },
        {
            number: "04",
            icon: Gauge,
            title: "Performance Optimization",
            description: "Fine-tuning for maximum performance with Astro speed optimization and Core Web Vitals excellence.",
            details: [
                "Lighthouse Performance Audits",
                "WebP/AVIF Image conversion",
                "JS Bundle & Tree-shaking",
                "Caching & CDN Config",
                <Link key="link-2" href="/blog/web-performance-optimization-speed" className="underline underline-offset-2 hover:text-[var(--accent-orange-text)] transition-colors">LCP, FID & CLS Optimization</Link>,
                "SEO Validation & Tags"
            ],
            deliverable: "98+ PageSpeed & CWV Report",
            duration: "5-7 days",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Deployment & Analytics",
            description: "Launch to production with Astro maintenance and ongoing support services.",
            details: [
                "Edge Deployment Setup",
                "CI/CD Implementation",
                "GA4 & Heatmap Tracking",
                "XML Sitemap & Robots.txt",
                "CMS Training & Handoff",
                "Support SLA Activation"
            ],
            deliverable: "Live site & support plan",
            duration: "3-5 days",
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
                            backgroundColor: "rgba(255, 93, 1, 0.1)",
                            borderColor: "rgba(255, 93, 1, 0.3)",
                        }}
                    >
                        <Workflow className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-orange-text)" }}>
                            Our Process
                        </span>
                    </div>
                    

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        How We{" "}
                        <span style={{ color: "var(--accent-orange-text)" }}>
                            Build with Astro
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A streamlined process for delivering high-performance Astro websites.
                    </p>
                </div>

                {/* Timeline (the WordPress layout) */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#FF5D01",
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
                                                ${isHovered ? "shadow-xl border-[#FF5D01]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #C94600, #B33E00)" }}
                                                >
                                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[var(--accent-orange-text)]" aria-hidden="true" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Deliverable and timeline */}
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF5D01" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--accent-orange-text)" }}>Deliverable:</span> {step.deliverable}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF8534" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--accent-orange-text)" }}>Timeline:</span> {step.duration}
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
                                                ${isHovered ? "border-[#FF5D01] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#FF5D01]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--accent-orange-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector: 8 + 32 + 8 = 48px between cards; none after the last step */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#FF5D01] to-transparent opacity-30 my-2" />
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
