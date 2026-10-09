"use client";

import { useState } from "react";
import {
    Search,
    Database,
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
            description: "We analyze your requirements and design a scalable architecture tailored to your business goals.",
            details: [
                "In-depth requirements gathering",
                "System architecture design",
                "Technology stack selection",
                "Database planning",
                "API structure planning",
                "Project roadmap creation"
            ],
            deliverable: "Technical specification document",
            duration: "1-2 weeks",
        },
        {
            number: "02",
            icon: Database,
            title: "Database Design & Modeling",
            description: "Schema design and data modeling optimized for performance, scalability, and data integrity.",
            details: [
                "Entity relationship modeling",
                "Schema optimization",
                "Index strategy planning",
                "Data migration planning",
                "Backup strategy design",
                "Query optimization review"
            ],
            deliverable: "Database schema & ER diagrams",
            duration: "1 week",
        },
        {
            number: "03",
            icon: Code2,
            title: "Development & APIs",
            description: "Building your application with clean, maintainable Python code following industry best practices.",
            details: [
                "Django/FastAPI implementation",
                "RESTful API development",
                "Business logic implementation",
                "Third-party integrations",
                "Authentication & authorization",
                "Code reviews & refactoring"
            ],
            deliverable: "Working application & API docs",
            duration: "4-8 weeks",
        },
        {
            number: "04",
            icon: TestTube2,
            title: "Testing & Security Audit",
            description: "Comprehensive testing and security hardening to ensure a robust, production-ready application.",
            details: [
                "Unit & integration testing",
                "API endpoint testing",
                <Link href="/blog/cybersecurity-small-businesses" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Security vulnerability scan</Link>,
                "Performance load testing",
                "Code quality analysis",
                "Penetration testing"
            ],
            deliverable: "Test reports & security audit",
            duration: "1-2 weeks",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Deployment & Monitoring",
            description: "Production deployment with CI/CD pipelines and continuous monitoring for reliability and performance.",
            details: [
                "Docker containerization",
                "CI/CD pipeline setup",
                "Cloud deployment (AWS/GCP)",
                "Monitoring & logging setup",
                "Performance tracking",
                "Complete documentation"
            ],
            deliverable: "Live application & monitoring",
            duration: "1 week",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse-slow"
                    style={{ background: "#306998" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse-slow"
                    style={{ background: "#FFD43B", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse-slow"
                    style={{ background: "#4B8BBE", animationDelay: "2s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6 backdrop-blur-sm"
                        style={{
                            backgroundColor: "rgba(48, 105, 152, 0.05)",
                            borderColor: "rgba(48, 105, 152, 0.3)",
                        }}
                    >
                        <Code2 className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--brand-blue-text)" }}>
                            OUR PROCESS
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        How We{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #306998, #4B8BBE)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Build Solutions
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A proven development methodology for delivering reliable, scalable Python applications
                        from concept to production.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-1 hidden lg:block overflow-hidden"
                        style={{
                            background: "linear-gradient(180deg, rgba(48, 105, 152, 0.1), rgba(48, 105, 152, 0.4), rgba(48, 105, 152, 0.1))",
                        }}
                    >
                        {/* Animated glow on line */}
                        <div
                            className="absolute w-full h-32 animate-slide-down"
                            style={{
                                background: "linear-gradient(180deg, transparent, #306998, transparent)",
                                opacity: 0.5,
                            }}
                        />
                    </div>

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
                                                borderColor: isHovered ? "#306998" : "var(--border-color)",
                                                transform: isHovered ? "scale(1.03) translateY(-4px)" : "scale(1)",
                                                boxShadow: isHovered
                                                    ? "0 20px 60px rgba(48, 105, 152, 0.25)"
                                                    : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                            }}
                                        >
                                            {/* Animated background gradient */}
                                            <div
                                                className="absolute inset-0 opacity-0 transition-opacity duration-700"
                                                style={{
                                                    background: "radial-gradient(circle at top right, rgba(48, 105, 152, 0.08), transparent 70%)",
                                                    opacity: isHovered ? 1 : 0,
                                                }}
                                            />

                                            {/* Corner accent */}
                                            <div
                                                className="absolute top-0 right-0 w-32 h-32 transition-all duration-700"
                                                style={{
                                                    background: "linear-gradient(135deg, transparent 50%, rgba(255, 212, 59, 0.1))",
                                                    transform: isHovered ? "translate(0, 0)" : "translate(50%, -50%)",
                                                    opacity: isHovered ? 1 : 0,
                                                }}
                                            />

                                            {/* Step number - large background */}
                                            <div
                                                className="absolute top-4 right-6 text-7xl font-bold opacity-5 transition-all duration-500"
                                                style={{
                                                    color: "var(--brand-blue-text)",
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
                                                                ? "linear-gradient(135deg, #306998, #4B8BBE)"
                                                                : "rgba(48, 105, 152, 0.1)",
                                                            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0)",
                                                            boxShadow: isHovered ? "0 8px 24px rgba(48, 105, 152, 0.3)" : "none",
                                                        }}
                                                    >
                                                        <Icon
                                                            className="w-8 h-8 transition-all duration-500"
                                                            style={{
                                                                color: isHovered ? "#fff" : "var(--brand-blue-text)",
                                                                filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "none",
                                                            }}
                                                        />

                                                        {/* Orbiting ring */}
                                                        {isHovered && (
                                                            <div
                                                                className="absolute inset-0 rounded-2xl border-2 animate-spin-slow"
                                                                style={{
                                                                    borderColor: "rgba(48, 105, 152, 0.3)",
                                                                    borderTopColor: "#FFD43B",
                                                                }}
                                                            />
                                                        )}
                                                    </div>

                                                    <div className="flex-1">
                                                        <span
                                                            className="inline-block text-xs font-bold tracking-wider px-2.5 py-1 rounded-full mb-2"
                                                            style={{
                                                                backgroundColor: "rgba(255, 212, 59, 0.15)",
                                                                color: "var(--accent-amber-text)",
                                                            }}
                                                        >
                                                            STEP {step.number}
                                                        </span>
                                                        <h3
                                                            className="text-2xl font-bold mb-2 transition-colors duration-300"
                                                            style={{
                                                                color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)",
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
                                                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-blue-text)" }}>
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
                                                                        style={{ color: "var(--brand-blue-text)" }}
                                                                    />
                                                                    <span>{detail}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Deliverable and duration */}
                                                        <div className="flex flex-wrap gap-4 pt-3 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FFD43B" }} />
                                                                <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                                    <span style={{ color: "var(--brand-blue-text)" }}>Deliverable:</span> {step.deliverable}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#4B8BBE" }} />
                                                                <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                                    <span style={{ color: "var(--brand-blue-text)" }}>Timeline:</span> {step.duration}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Progress indicator */}
                                                <div
                                                    className="mt-6 h-1.5 rounded-full overflow-hidden"
                                                    style={{ backgroundColor: "rgba(48, 105, 152, 0.1)" }}
                                                >
                                                    <div
                                                        className="h-full rounded-full transition-all duration-700"
                                                        style={{
                                                            width: isHovered ? "100%" : "0%",
                                                            background: "linear-gradient(90deg, #306998, #4B8BBE, #FFD43B)",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center dot with pulse effect */}
                                    <div className="hidden lg:flex w-2/12 justify-center relative">
                                        {/* Pulsing ring */}
                                        {isHovered && (
                                            <div
                                                className="absolute w-12 h-12 rounded-full border-2 animate-ping"
                                                style={{
                                                    borderColor: "rgba(48, 105, 152, 0.3)",
                                                }}
                                            />
                                        )}

                                        <div
                                            className="relative w-5 h-5 rounded-full transition-all duration-500 z-10"
                                            style={{
                                                background: isHovered
                                                    ? "linear-gradient(135deg, #306998, #FFD43B)"
                                                    : "var(--background)",
                                                border: `3px solid ${isHovered ? "#FFD43B" : "#306998"}`,
                                                transform: isHovered ? "scale(1.6)" : "scale(1)",
                                                boxShadow: isHovered ? "0 0 20px rgba(48, 105, 152, 0.5)" : "none",
                                            }}
                                        >
                                            {/* Inner glow */}
                                            {isHovered && (
                                                <div
                                                    className="absolute inset-0 rounded-full animate-pulse"
                                                    style={{
                                                        background: "radial-gradient(circle, rgba(255, 212, 59, 0.8), transparent)",
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden lg:block w-5/12" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.15;
                        transform: scale(1.05);
                    }
                }

                @keyframes slide-down {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(400%);
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg) scale(1.4);
                    }
                    to {
                        transform: rotate(360deg) scale(1.4);
                    }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .animate-slide-down {
                    animation: slide-down 3s linear infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </section>
    );
}