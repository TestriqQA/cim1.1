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
                <Link key="security-scan" href="/blog/cybersecurity-small-businesses" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Security vulnerability scan</Link>,
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
        <section id="process" className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-6 backdrop-blur-sm"
                        style={{
                            backgroundColor: "rgba(48, 105, 152, 0.05)",
                            borderColor: "rgba(48, 105, 152, 0.3)",
                        }}
                    >
                        <Code2 className="w-4 h-4" aria-hidden="true" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        How We{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
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

                {/* Timeline (the WordPress layout) */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
                        style={{
                            background: "#306998",
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
                                                ${isHovered ? "shadow-xl border-[#306998]/50 -translate-y-2" : ""}
                                            `}
                                            style={{
                                                backgroundColor: "var(--card-bg)",
                                                borderColor: isHovered ? "" : "var(--border-color)",
                                            }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #306998, #1E4D7A)" }}
                                                >
                                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                                </div>
                                                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                            </div>
                                            <p className="mb-6" style={{ color: "var(--secondary-text)" }}>{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, dIdx) => (
                                                    <li key={dIdx} className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[var(--brand-blue-text)]" aria-hidden="true" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Deliverable and timeline */}
                                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#FFD43B" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--brand-blue-text)" }}>Deliverable:</span> {step.deliverable}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#4B8BBE" }} />
                                                    <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                        <span style={{ color: "var(--brand-blue-text)" }}>Timeline:</span> {step.duration}
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
                                                ${isHovered ? "border-[#306998] bg-background scale-125" : "border-muted bg-background"}
                                            `}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? "bg-[#306998]" : "bg-muted-foreground"
                                                    }`}
                                            />
                                        </div>
                                    </div>

                                    <div className={`w-full lg:w-5/12 hidden lg:flex items-center ${isEven ? "justify-start pl-50" : "justify-end pr-50"}`}>
                                        <div
                                            className="text-[120px] font-bold leading-none opacity-50 transition-all duration-300"
                                            style={{
                                                color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)",
                                                transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                opacity: 0.5,
                                            }}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Mobile Connector: 8 + 32 + 8 = 48px between cards; none after the last step */}
                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#306998] to-transparent opacity-30 my-2" />
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
