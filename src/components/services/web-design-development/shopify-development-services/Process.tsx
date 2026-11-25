"use client";

import { useState } from "react";
import {
    Search,
    Palette,
    Code2,
    TestTube,
    Rocket,
    CheckCircle,
    Workflow,
    Plug,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            anchor: "step-discovery",
            number: "01",
            icon: Search,
            title: "Discovery & Strategic Audit",
            description: "We begin by analyzing your business goals and current pain points to identify growth opportunities.",
            details: [
                "Business goal analysis",
                "Shopify store audit",
                "Competitor benchmarking",
                "Technical bottleneck ID",
                "Growth roadmap creation",
            ],
        },
        {
            anchor: "step-design",
            number: "02",
            icon: Palette,
            title: "Design & UX Prototyping",
            description: <span>Creating interactive wireframes focusing on <Link href="/services/web-design-development" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Ecommerce UX design</Link> to ensure an intuitive path to purchase.</span>,
            details: [
                "Interactive wireframing",
                "Brand-aligned UI/UX",
                <Link key="mobile" href="/services/mobile-app-development" className="hover:text-[var(--accent-lime-text)] transition-colors">Mobile-first architecture</Link>,
                "High-conversion mapping",
                "User journey optimization",
            ],
        },
        {
            anchor: "step-development",
            number: "03",
            icon: Code2,
            title: "Custom Development",
            description: "Using the latest Shopify CLI and Liquid standards to build your custom theme or headless storefront.",
            details: [
                "Liquid & React coding",
                "Custom theme build",
                "Hydrogen/Oxygen setup",
                "Speed-first foundation",
                "Clean code standards",
            ],
        },
        {
            anchor: "step-integration",
            number: "04",
            icon: Plug,
            title: "Third-Party Integrations",
            description: "Connecting your store to essential tools: POS for retail, ERPs for logistics, and marketing automation.",
            details: [
                "Shopify POS integration",
                "ERP & CRM connection",
                "Klaviyo & GA4 setup",
                "API orchestration",
                "Logistics automation",
            ],
        },
        {
            anchor: "step-testing",
            number: "05",
            icon: TestTube,
            title: "Rigorous Testing & QA",
            description: "Extensive performance tests (Lighthouse 95+) and end-to-end payment gateway validation.",
            details: [
                "Performance benchmarking",
                "Mobile responsiveness",
                "Payment flow validation",
                "Security & Load testing",
                "Cross-device QA",
            ],
        },
        {
            anchor: "step-launch",
            number: "06",
            icon: Rocket,
            title: "Launch & SEO Deployment",
            description: <span>Technical go-live with full <Link href="/services/seo-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">SEO implementation</Link> and real-time monitoring post-launch.</span>,
            details: [
                "Technical launch support",
                "Advanced SEO setup",
                "Real-time monitoring",
                "Schema implementation",
                "Ongoing maintenance",
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
                        <Workflow className="w-4 h-4" style={{ color: "var(--accent-shopify-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                            How We Build Your Store
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Our{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Shopify
                        </span>{" "}
                        Development Process
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A precision-engineered methodology for launching high-performance
                        stores optimized for global trade and maximum ROI.
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
                            background: "#96bf48",
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
                                                ${isHovered ? "shadow-xl border-[#96bf48]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #96bf48, #5c8a1e)" }}
                                                >
                                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-[var(--accent-shopify-text)]" aria-hidden="true" />
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
                                                ${isHovered ? "border-[#96bf48] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#96bf48]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--accent-shopify-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector: 8 + 32 + 8 = 48px between cards; none after the last step */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#96bf48] to-transparent opacity-30 my-2" />
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
