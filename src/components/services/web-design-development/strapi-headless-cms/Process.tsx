"use client";

import { useState } from "react";
import {
    Search,
    Layers,
    Code2,
    TestTube2,
    Rocket,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Requirements",
            description: "Understanding your content architecture, API needs, and integration requirements.",
            details: [
                "Content audit & strategy",
                "API endpoint planning",
                "Integration mapping",
                "User role definitions",
                "Frontend requirements",
                <Link href="/blog/web-performance-optimization-speed" className="hover:text-[var(--accent-indigo-text)] transition-colors underline underline-offset-2">Performance targets</Link>
            ],
            deliverable: "Technical specification",
            duration: "1-2 weeks",
        },
        {
            number: "02",
            icon: Layers,
            title: "Content Modeling",
            description: "Designing content types, components, and relationships in Strapi's admin.",
            details: [
                "Content type design",
                "Component library",
                "Dynamic zones",
                "Relation mapping",
                "Media library setup",
                "i18n configuration"
            ],
            deliverable: "Content architecture",
            duration: "1-2 weeks",
        },
        {
            number: "03",
            icon: Code2,
            title: "API Development",
            description: "Building custom controllers, services, middlewares, and API extensions.",
            details: [
                "Custom endpoints",
                "Authentication setup",
                "Permission configuration",
                "Plugin development",
                "Webhook integration",
                "API documentation"
            ],
            deliverable: "Functional API",
            duration: "3-6 weeks",
        },
        {
            number: "04",
            icon: TestTube2,
            title: "Testing & Integration",
            description: "API testing, frontend integration, and performance optimization.",
            details: [
                "API testing",
                "Frontend connection",
                "Load testing",
                "Security audit",
                "Content migration",
                "User acceptance testing"
            ],
            deliverable: "Integrated solution",
            duration: "1-2 weeks",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Deploy & Support",
            description: "Production deployment with monitoring, documentation, and ongoing support.",
            details: [
                "Production deployment",
                "CDN configuration",
                "Monitoring setup",
                "Admin training",
                "Documentation",
                <Link href="/services/additional-support-services" className="hover:text-[var(--accent-indigo-text)] transition-colors underline underline-offset-2">Ongoing maintenance</Link>
            ],
            deliverable: "Live application",
            duration: "1 week + ongoing",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ background: "#4945FF", animationDuration: "4s" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ background: "#7B79FF", animationDuration: "6s", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6 backdrop-blur-sm"
                        style={{
                            backgroundColor: "rgba(73, 69, 255, 0.1)",
                            borderColor: "rgba(73, 69, 255, 0.3)",
                        }}
                    >
                        <Code2 className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-indigo-text)" }}>
                            OUR PROCESS
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Our{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #4945FF, #7B79FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Development Process
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A structured approach to delivering high-quality headless CMS solutions.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-1 hidden lg:block overflow-hidden"
                        style={{
                            background: "linear-gradient(180deg, rgba(73, 69, 255, 0.1), rgba(73, 69, 255, 0.4), rgba(73, 69, 255, 0.1))",
                        }}
                    />

                    <div className="space-y-12 lg:space-y-16">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 0;
                            const isHovered = hoveredStep === idx;

                            return (
                                <div
                                    key={idx}
                                    className={`cursor-pointer relative flex flex-col lg:flex-row items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                    onMouseEnter={() => {
                                        if (window.matchMedia("(hover: hover)").matches) {
                                            setHoveredStep(idx);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (window.matchMedia("(hover: hover)").matches) {
                                            setHoveredStep(null);
                                        }
                                    }}
                                    onClick={() => {
                                        if (!window.matchMedia("(hover: hover)").matches) {
                                            setHoveredStep(hoveredStep === idx ? null : idx);
                                        }
                                    }}
                                >
                                    {/* Content Card */}
                                    <div
                                        className={`w-full lg:w-5/12 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}
                                    >
                                        <div
                                            className="group relative p-8 rounded-3xl border transition-all duration-700 cursor-pointer overflow-hidden"
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "#4945FF" : "var(--border-color)",
                                                transform: isHovered ? "scale(1.03) translateY(-4px)" : "scale(1)",
                                                boxShadow: isHovered
                                                    ? "0 20px 60px rgba(73, 69, 255, 0.25)"
                                                    : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                            }}
                                        >
                                            {/* Animated background gradient */}
                                            <div
                                                className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                                                style={{
                                                    background: "radial-gradient(circle at top right, rgba(73, 69, 255, 0.08), transparent 70%)",
                                                    opacity: isHovered ? 1 : 0,
                                                }}
                                            />

                                            {/* Step number - large background */}
                                            <div
                                                className="absolute top-4 right-6 text-7xl font-bold opacity-5 transition-all duration-500"
                                                style={{
                                                    color: "var(--accent-indigo-text)",
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                }}
                                            >
                                                {step.number}
                                            </div>

                                            <div className="relative z-10">
                                                {/* Icon and header */}
                                                <div className="flex items-start gap-5 mb-6">
                                                    <div
                                                        className="relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700"
                                                        style={{
                                                            background: isHovered
                                                                ? "linear-gradient(135deg, #4945FF, #2F2DC8)"
                                                                : "rgba(73, 69, 255, 0.1)",
                                                            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0)",
                                                            boxShadow: isHovered ? "0 8px 24px rgba(73, 69, 255, 0.3)" : "none",
                                                        }}
                                                    >
                                                        <Icon
                                                            className="w-8 h-8 transition-all duration-500"
                                                            style={{
                                                                color: isHovered ? "#fff" : "var(--accent-indigo-text)",
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="flex-1">
                                                        <span
                                                            className="inline-block text-xs font-bold tracking-wider px-2.5 py-1 rounded-full mb-2"
                                                            style={{
                                                                backgroundColor: "rgba(123, 121, 255, 0.15)",
                                                                color: "var(--accent-indigo-text)",
                                                            }}
                                                        >
                                                            STEP {step.number}
                                                        </span>
                                                        <h3
                                                            className="text-2xl font-bold mb-2 transition-colors duration-300"
                                                            style={{
                                                                color: isHovered ? "var(--accent-indigo-text)" : "var(--foreground)",
                                                            }}
                                                        >
                                                            {step.title}
                                                        </h3>
                                                        <p
                                                            className="text-sm leading-relaxed"
                                                            style={{ color: "var(--secondary-text)" }}
                                                        >
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Details grid - expands on hover */}
                                                <div
                                                    className="transition-all duration-700 overflow-hidden"
                                                    style={{
                                                        maxHeight: isHovered ? "300px" : "0px",
                                                        opacity: isHovered ? 1 : 0,
                                                    }}
                                                >
                                                    <div className="pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent-indigo-text)" }}>
                                                            Key Activities
                                                        </h4>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                                            {step.details.map((detail, dIdx) => (
                                                                <div
                                                                    key={dIdx}
                                                                    className="flex items-start gap-2 text-sm transition-all duration-300"
                                                                    style={{
                                                                        color: "var(--secondary-text)",
                                                                        transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                                                                        transitionDelay: `${dIdx * 50}ms`,
                                                                    }}
                                                                >
                                                                    <CheckCircle2
                                                                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                                                                        style={{ color: "var(--accent-indigo-text)" }}
                                                                    />
                                                                    <span>{detail}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Deliverable and duration */}
                                                        <div className="flex flex-wrap gap-4 pt-3 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7B79FF" }} />
                                                                <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                                    <span style={{ color: "var(--accent-indigo-text)" }}>Deliverable:</span> {step.deliverable}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2F2DC8" }} />
                                                                <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                                    <span style={{ color: "var(--accent-indigo-text)" }}>Timeline:</span> {step.duration}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Progress indicator */}
                                                <div
                                                    className="mt-6 h-1.5 rounded-full overflow-hidden"
                                                    style={{ backgroundColor: "rgba(73, 69, 255, 0.1)" }}
                                                >
                                                    <div
                                                        className="h-full rounded-full transition-all duration-700"
                                                        style={{
                                                            width: isHovered ? "100%" : "0%",
                                                            background: "linear-gradient(90deg, #4945FF, #7B79FF, #2F2DC8)",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center dot with pulse effect */}
                                    <div className="hidden lg:flex w-2/12 justify-center relative">
                                        {isHovered && (
                                            <div
                                                className="absolute w-12 h-12 rounded-full border-2 animate-ping"
                                                style={{
                                                    borderColor: "rgba(73, 69, 255, 0.3)",
                                                }}
                                            />
                                        )}

                                        <div
                                            className="relative w-5 h-5 rounded-full transition-all duration-500 z-10"
                                            style={{
                                                background: isHovered
                                                    ? "linear-gradient(135deg, #4945FF, #7B79FF)"
                                                    : "var(--background)",
                                                border: `3px solid ${isHovered ? "#7B79FF" : "#4945FF"}`,
                                                transform: isHovered ? "scale(1.6)" : "scale(1)",
                                                boxShadow: isHovered ? "0 0 20px rgba(73, 69, 255, 0.5)" : "none",
                                            }}
                                        />
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden lg:block w-5/12" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
