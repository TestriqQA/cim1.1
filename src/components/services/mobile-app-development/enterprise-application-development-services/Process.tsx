"use client";

import { useState } from "react";
import {
    MessageSquare,
    Shield,
    Code,
    Link2,
    Rocket,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            icon: MessageSquare,
            title: "Enterprise Consulting & Roadmap Planning",
            description: "We begin with deep-dive consulting to align your digital strategy with business goals. Our Enterprise Architecture (EA) experts assess your current ecosystem to plan for Cloud migration.",
            details: [
                "Digital strategy alignment",
                "EA expert assessment",
                "Cloud migration planning",
                "Hosting services setup",
                "ROI-focused roadmap",
            ],
            duration: "2-3 Weeks",
        },
        {
            icon: Shield,
            title: "Security Architecture & Design",
            description: "We design with security at the core. This includes Single Sign-On (SSO) Integration, Identity and Access Management (IAM), and robust data protection layers.",
            details: [
                "SSO Integration (SAML/OAuth)",
                "IAM framework design",
                "Data protection layers",
                "Threat modeling",
                "Compliance-first design",
            ],
            duration: "2-4 Weeks",
        },
        {
            icon: Code,
            title: "Development & Continuous QA",
            description: "Using Agile methodology and DevOps pipelines, our team builds features incrementally. Every build undergoes rigorous security audits and penetration testing.",
            details: [
                "Sprint-based agile dev",
                "DevOps CI/CD pipelines",
                "Rigorous security audits",
                "Penetration testing",
                "Modernization services",
            ],
            duration: "12-20 Weeks",
        },
        {
            icon: Link2,
            title: "Integration & Middleware Services",
            description: "We specialize in Legacy system integration, ensuring your new mobile or web app communicates perfectly with your existing ERP, CRM, and data warehouses.",
            details: [
                "Legacy system integration",
                "Custom API gateways",
                "ERP & CRM sync",
                "Data warehouse hooks",
                "Middleware optimization",
            ],
            duration: "3-5 Weeks",
        },
        {
            icon: Rocket,
            title: "Deployment & 24/7 Enterprise Support",
            description: "Our commitment doesn't end at launch. We provide Enterprise app maintenance and continuous delivery, backed by 24/7 proactive monitoring and clear SLAs.",
            details: [
                "Staged enterprise rollout",
                "Maintenance & delivery",
                "24/7 proactive monitoring",
                "Clear SLAs",
                "Ongoing support",
            ],
            duration: "Ongoing",
        },
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "rgba(37, 99, 235, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>A Security-First Lifecycle for</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Enterprise Stability
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A rigorous methodology designed for enterprise-scale deployments with security and compliance at every stage of the application lifecycle.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
                        style={{
                            backgroundColor: "#2563eb",
                        }}
                    />

                    {/* Steps */}
                    <div className="space-y-12">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = activeStep === idx;
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className={`
                                        relative flex flex-col md:flex-row items-center gap-8
                                        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                                    `}
                                    onMouseEnter={() => setActiveStep(idx)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {/* Step Number Circle */}
                                    <div
                                        className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 hidden lg:flex"
                                        style={{ zIndex: 10 }}
                                    >
                                        <div
                                            className={`
                                                w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl
                                                transition-all duration-300
                                                ${isActive ? "scale-110 shadow-lg" : "scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: "#2563eb",
                                                boxShadow: isActive ? "0 8px 30px rgba(37, 99, 235, 0.4)" : "none",
                                            }}
                                        >
                                            {idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`
                                            w-full lg:w-[calc(50%-60px)] p-8 rounded-3xl border transition-all duration-300 cursor-pointer
                                            ${isActive ? "shadow-xl -translate-y-2" : "hover:shadow-lg"}
                                            ${isEven ? "lg:mr-auto" : "lg:ml-auto"}
                                        `}
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: isActive ? "#2563eb" : "var(--border-color)",
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Mobile Step Number */}
                                            <div
                                                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                                                style={{ backgroundColor: "#2563eb" }}
                                            >
                                                {idx + 1}
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                                                    >
                                                        <Icon className="w-5 h-5 text-[var(--brand-blue-text)]" />
                                                    </div>
                                                    <div
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: "rgba(37, 99, 235, 0.1)",
                                                            color: "var(--brand-blue-text)",
                                                        }}
                                                    >
                                                        {step.duration}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                    {step.title}
                                                </h3>
                                                <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>

                                                {/* Expandable Details */}
                                                <div
                                                    className={`
                                                        space-y-2 overflow-hidden transition-all duration-300
                                                        ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                                    `}
                                                >
                                                    {step.details.map((detail, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-2">
                                                            <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue-text)] flex-shrink-0" />
                                                            <span className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                                {detail}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
