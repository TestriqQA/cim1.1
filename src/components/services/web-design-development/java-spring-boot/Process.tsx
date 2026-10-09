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
            title: "Discovery & Architecture",
            description: "Deep analysis of business requirements and designing scalable microservices architecture.",
            details: [
                <Link href="/services/web-design-development" className="hover:text-[var(--accent-green-text)] transition-colors underline underline-offset-2">Business requirements analysis</Link>,
                "Domain-driven design",
                "Microservices planning",
                "Database architecture",
                "Integration mapping",
                "Technical specifications"
            ],
            deliverable: "Architecture design document",
            duration: "1-2 weeks",
        },
        {
            number: "02",
            icon: Layers,
            title: "System Design & Prototyping",
            description: "Creating component designs, API contracts, and proof-of-concept implementations.",
            details: [
                "API contract design",
                "Component architecture",
                "Security framework",
                "Data model design",
                "Integration patterns",
                "POC development"
            ],
            deliverable: "API specs & prototypes",
            duration: "1-2 weeks",
        },
        {
            number: "03",
            icon: Code2,
            title: "Agile Development",
            description: "Iterative development with Spring Boot, following clean code principles and best practices.",
            details: [
                "Sprint-based development",
                "Test-driven development",
                "Code reviews",
                "Continuous integration",
                "API implementation",
                "Database migrations"
            ],
            deliverable: "Working application modules",
            duration: "4-12 weeks",
        },
        {
            number: "04",
            icon: TestTube2,
            title: "Testing & Security Audit",
            description: "Comprehensive testing including unit, integration, performance, and security assessments.",
            details: [
                "Unit testing (JUnit 5)",
                "Integration testing",
                "Performance testing",
                "Security penetration test",
                "Load testing",
                "UAT support"
            ],
            deliverable: "Test reports & security audit",
            duration: "1-2 weeks",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Deployment & Operations",
            description: "Production deployment with Kubernetes, monitoring, and ongoing support.",
            details: [
                "Docker containerization",
                "Kubernetes deployment",
                "CI/CD pipeline setup",
                "Monitoring & alerting",
                "Documentation",
                "Knowledge transfer"
            ],
            deliverable: "Production-ready system",
            duration: "1-2 weeks",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ background: "#6DB33F", animationDuration: "4s" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ background: "#F89820", animationDuration: "6s", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6 backdrop-blur-sm"
                        style={{
                            backgroundColor: "rgba(109, 179, 63, 0.1)",
                            borderColor: "rgba(109, 179, 63, 0.3)",
                        }}
                    >
                        <Code2 className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-green-text)" }}>
                            OUR PROCESS
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Enterprise{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #6DB33F, #5A9A32)",
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
                        A proven methodology for delivering mission-critical Java applications on time and on budget.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-1 hidden lg:block overflow-hidden"
                        style={{
                            background: "linear-gradient(180deg, rgba(109, 179, 63, 0.1), rgba(109, 179, 63, 0.4), rgba(109, 179, 63, 0.1))",
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
                                                borderColor: isHovered ? "#6DB33F" : "var(--border-color)",
                                                transform: isHovered ? "scale(1.03) translateY(-4px)" : "scale(1)",
                                                boxShadow: isHovered
                                                    ? "0 20px 60px rgba(109, 179, 63, 0.25)"
                                                    : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                            }}
                                        >
                                            {/* Animated background gradient */}
                                            <div
                                                className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                                                style={{
                                                    background: "radial-gradient(circle at top right, rgba(109, 179, 63, 0.08), transparent 70%)",
                                                    opacity: isHovered ? 1 : 0,
                                                }}
                                            />

                                            {/* Step number - large background */}
                                            <div
                                                className="absolute top-4 right-6 text-7xl font-bold opacity-5 transition-all duration-500"
                                                style={{
                                                    color: "var(--accent-green-text)",
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
                                                                ? "linear-gradient(135deg, #6DB33F, #5A9A32)"
                                                                : "rgba(109, 179, 63, 0.1)",
                                                            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0)",
                                                            boxShadow: isHovered ? "0 8px 24px rgba(109, 179, 63, 0.3)" : "none",
                                                        }}
                                                    >
                                                        <Icon
                                                            className="w-8 h-8 transition-all duration-500"
                                                            style={{
                                                                color: isHovered ? "#fff" : "var(--accent-green-text)",
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="flex-1">
                                                        <span
                                                            className="inline-block text-xs font-bold tracking-wider px-2.5 py-1 rounded-full mb-2"
                                                            style={{
                                                                backgroundColor: "rgba(248, 152, 32, 0.15)",
                                                                color: "var(--accent-orange-text)",
                                                            }}
                                                        >
                                                            STEP {step.number}
                                                        </span>
                                                        <h3
                                                            className="text-2xl font-bold mb-2 transition-colors duration-300"
                                                            style={{
                                                                color: isHovered ? "var(--accent-green-text)" : "var(--foreground)",
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
                                                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent-green-text)" }}>
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
                                                                        style={{ color: "var(--accent-green-text)" }}
                                                                    />
                                                                    <span>{detail}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Deliverable and duration */}
                                                        <div className="flex flex-wrap gap-4 pt-3 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F89820" }} />
                                                                <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                                    <span style={{ color: "var(--accent-green-text)" }}>Deliverable:</span> {step.deliverable}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#5A9A32" }} />
                                                                <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                                    <span style={{ color: "var(--accent-green-text)" }}>Timeline:</span> {step.duration}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Progress indicator */}
                                                <div
                                                    className="mt-6 h-1.5 rounded-full overflow-hidden"
                                                    style={{ backgroundColor: "rgba(109, 179, 63, 0.1)" }}
                                                >
                                                    <div
                                                        className="h-full rounded-full transition-all duration-700"
                                                        style={{
                                                            width: isHovered ? "100%" : "0%",
                                                            background: "linear-gradient(90deg, #6DB33F, #5A9A32, #F89820)",
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
                                                    borderColor: "rgba(109, 179, 63, 0.3)",
                                                }}
                                            />
                                        )}

                                        <div
                                            className="relative w-5 h-5 rounded-full transition-all duration-500 z-10"
                                            style={{
                                                background: isHovered
                                                    ? "linear-gradient(135deg, #6DB33F, #F89820)"
                                                    : "var(--background)",
                                                border: `3px solid ${isHovered ? "#F89820" : "#6DB33F"}`,
                                                transform: isHovered ? "scale(1.6)" : "scale(1)",
                                                boxShadow: isHovered ? "0 0 20px rgba(109, 179, 63, 0.5)" : "none",
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
