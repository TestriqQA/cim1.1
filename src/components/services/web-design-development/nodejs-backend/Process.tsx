"use client";

import { useState } from "react";
import {
    Search,
    GitBranch,
    Code2,
    Link2,
    TestTube,
    Rocket,
    Check,
} from "lucide-react";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Requirements Analysis",
            description: "Understand your API specifications, data models, and integration needs.",
            details: [
                "API requirements gathering",
                "Data modeling & schemas",
                "Integration mapping",
                "Performance requirements",
                "Security assessment",
            ],
        },
        {
            number: "02",
            icon: GitBranch,
            title: "Architecture Design",
            description: "Design scalable system architecture with proper patterns and best practices.",
            details: [
                "System architecture",
                "Database design",
                "API contract design",
                "Scalability planning",
                "Technology selection",
            ],
        },
        {
            number: "03",
            icon: Code2,
            title: "Development",
            description: "Build APIs and services with clean, maintainable, well-documented code.",
            details: [
                "API implementation",
                "Database setup",
                "Business logic",
                "Error handling",
                "API documentation",
            ],
        },
        {
            number: "04",
            icon: Link2,
            title: "Integration",
            description: "Connect with third-party APIs, frontend applications, and external systems.",
            details: [
                "Third-party APIs",
                "Frontend connection",
                "Webhook setup",
                "Data migration",
                "Service orchestration",
            ],
        },
        {
            number: "05",
            icon: TestTube,
            title: "Testing & QA",
            description: "Rigorous testing for functionality, performance, and security.",
            details: [
                "Unit & integration tests",
                "Load testing",
                "Security audit",
                "API validation",
                "Edge case testing",
            ],
        },
        {
            number: "06",
            icon: Rocket,
            title: "Deployment",
            description: "Deploy to production with CI/CD, monitoring, and scaling configured.",
            details: [
                "CI/CD pipelines",
                "Container deployment",
                "Monitoring setup",
                "Auto-scaling config",
                "Production handoff",
            ],
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 0.2; }
                    100% { transform: scale(1); opacity: 0.5; }
                }
                .step-ring {
                    animation: pulse-ring 2s ease-in-out infinite;
                }
            `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#339933" }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#68a063", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <GitBranch className="w-4 h-4" style={{ color: "#339933" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        How We{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #339933, #68a063)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Deliver
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        A proven methodology for building reliable,
                        production-ready backend systems.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #339933, #68a063)",
                        }}
                    />
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isHovered = hoveredStep === idx;

                        return (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setHoveredStep(idx)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border-2
                                        transition-all duration-500 ease-out h-full
                                        ${isHovered ? "shadow-2xl" : "shadow-md hover:shadow-xl"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered
                                            ? "#339933"
                                            : "var(--border-color)",
                                        transform: isHovered
                                            ? "translateY(-8px)"
                                            : "translateY(0)",
                                    }}
                                >
                                    {/* Step Number Badge */}
                                    <div
                                        className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, #339933, #215732)",
                                            transform: isHovered ? "scale(1.1) rotate(12deg)" : "scale(1) rotate(0)",
                                        }}
                                    >
                                        {step.number}
                                    </div>

                                    {/* Glow Effect */}
                                    <div
                                        className={`
                                            absolute -inset-1 rounded-3xl blur-xl transition-all duration-500
                                            ${isHovered ? "opacity-20" : "opacity-0"}
                                        `}
                                        style={{
                                            background: "linear-gradient(135deg, #339933, #68a063)",
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-6 relative">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                                                style={{
                                                    background: "linear-gradient(135deg, #339933, #215732)",
                                                    boxShadow: isHovered
                                                        ? "0 12px 32px rgba(51, 153, 51, 0.5)"
                                                        : "0 4px 12px rgba(51, 153, 51, 0.3)",
                                                    transform: isHovered
                                                        ? "scale(1.1) rotate(6deg)"
                                                        : "scale(1) rotate(0)",
                                                }}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Animated Ring */}
                                            {isHovered && (
                                                <div
                                                    className="absolute inset-0 w-16 h-16 rounded-2xl border-2 step-ring"
                                                    style={{ borderColor: "#339933" }}
                                                />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl font-bold mb-3 transition-all duration-300"
                                            style={{
                                                color: isHovered
                                                    ? "#339933"
                                                    : "var(--foreground)",
                                            }}
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed mb-4"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {step.description}
                                        </p>

                                        {/* Details - Always Visible */}
                                        <div className="pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-green-text)" }}>
                                                Key Activities:
                                            </p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, didx) => (
                                                    <li
                                                        key={didx}
                                                        className="flex items-center gap-2 text-sm"
                                                        style={{ color: "var(--foreground)" }}
                                                    >
                                                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#339933" }} />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-3xl transition-all duration-500
                                            ${isHovered ? "w-full" : "w-0"}
                                        `}
                                        style={{
                                            background: "linear-gradient(90deg, #339933, #68a063)",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
