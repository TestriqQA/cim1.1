"use client";

import {
    Search, ShieldCheck, Code, Lock, Rocket, BarChart3,
    ArrowRight, CheckCircle2, FileText, Users, Server, Zap,
    Target, TrendingUp, Globe, Key
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Process() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            number: "01",
            icon: ShieldCheck,
            title: "Security & Compliance Analysis",
            description: "We start by mapping regulatory requirements (GDPR, PCI-DSS, KYC/AML) and defining the security architecture needed for your financial product.",
            deliverables: [
                { icon: ShieldCheck, text: "Compliance roadmap" },
                { icon: Lock, text: "Security audit" },
                { icon: Users, text: <Link href="/blog/ui-ux-design-principles-best-practices" className="hover:underline">User personas</Link> },
                { icon: Target, text: "Risk assessment" }
            ],
            color: "#0ea5e9", // Sky blue
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            number: "02",
            icon: Search,
            title: "Architecture & UX Design",
            description: "Designing trust-centric interfaces and robust backend architectures. We focus on clarity, speed, and reassuring user experiences for financial workflows.",
            deliverables: [
                { icon: Server, text: "System architecture" },
                { icon: FileText, text: "API specification" },
                { icon: Users, text: <Link href="/services/web-design-development/branding-services" className="hover:underline">UX/UI prototypes</Link> },
                { icon: Lock, text: "Data flow diagrams" }
            ],
            color: "#0ea5e9", // Sky blue
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            number: "03",
            icon: Code,
            title: "Secure Development",
            description: "Building your platform with a security-first approach. Implementing encryption, secure authentication, and real-time transaction processing engines.",
            deliverables: [
                { icon: Code, text: "Core banking logic" },
                { icon: Key, text: "Auth integration" },
                { icon: Globe, text: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">API development</Link> },
                { icon: Zap, text: "Performance tuning" }
            ],
            color: "#0ea5e9", // Sky blue
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            number: "04",
            icon: Lock,
            title: "Penetration Testing & QA",
            description: "Rigorous testing protocols including penetration testing, load testing, and smart contract audits to minimize vulnerabilities before launch.",
            deliverables: [
                { icon: ShieldCheck, text: "Penetration testing" },
                { icon: CheckCircle2, text: "Smart contract audit" },
                { icon: TrendingUp, text: "Load testing" },
                { icon: Target, text: "UAT cycles" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            number: "05",
            icon: Rocket,
            title: "Secure Launch",
            description: "Controlled deployment strategies with phased rollouts. We ensure all integrations (banking rails, payment gateways) are live and stable.",
            deliverables: [
                { icon: Rocket, text: "Production deployment" },
                { icon: Server, text: "Environment setup" },
                { icon: Users, text: "Staff training" },
                { icon: Globe, text: "Global availability" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            number: "06",
            icon: BarChart3,
            title: "Monitoring & Scaling",
            description: "24/7 internal monitoring for fraud detection and system health. We scale infrastructure as your transaction volume and user base grows.",
            deliverables: [
                { icon: BarChart3, text: "Real-time monitoring" },
                { icon: ShieldCheck, text: "Fraud alerts" },
                { icon: TrendingUp, text: "Scaling strategy" },
                { icon: Zap, text: "Feature updates" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Code className="w-4 h-4" style={{ color: "#0ea5e9" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                                Our Process
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our <span style={{ color: "var(--accent-sky-text)" }}>Secured FinTech</span> Process
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        A security-first methodology that prioritizes compliance and trust without compromising on innovation.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "#0ea5e9",
                        }}
                    />
                </div>

                {/* Process Steps with Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "linear-gradient(180deg, #0ea5e9, #0ea5e9, #0ea5e9, #0ea5e9, #0ea5e9, #0ea5e9)",
                                opacity: 0.2,
                            }}
                        />
                        <div
                            className="absolute inset-0 rounded-full transition-all duration-1000"
                            style={{
                                background: "linear-gradient(180deg, #0ea5e9, #0ea5e9, #0ea5e9, #0ea5e9, #0ea5e9, #0ea5e9)",
                                transform: `scaleY(${(activeStep + 1) / steps.length})`,
                                transformOrigin: "top",
                            }}
                        />
                    </div>

                    <div className="space-y-12 lg:space-y-24">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isEven = idx % 2 === 0;
                            const isHovered = hoveredStep === idx;
                            const isActive = activeStep === idx;

                            return (
                                <div
                                    key={idx}
                                    className="relative"
                                    onMouseEnter={() => {
                                        setHoveredStep(idx);
                                        setActiveStep(idx);
                                    }}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <div
                                        className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                                    >
                                        {/* Left/Right Content */}
                                        <div className={`lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                                            <div
                                                className="text-7xl md:text-8xl font-bold mb-4 opacity-20 transition-all duration-500"
                                                style={{
                                                    background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                                                }}
                                            >
                                                {step.number}
                                            </div>

                                            <h3
                                                className="hidden lg:block text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                                                style={{ color: isHovered ? step.color : "var(--foreground)" }}
                                            >
                                                {step.title}
                                            </h3>
                                        </div>

                                        {/* Center Icon */}
                                        <div className="lg:w-2/12 flex justify-center relative z-20">
                                            <div
                                                className="relative transition-all duration-500"
                                                style={{
                                                    transform: isHovered ? "scale(1.15) rotate(10deg)" : "scale(1) rotate(0deg)",
                                                }}
                                            >
                                                <div
                                                    className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                                                        opacity: isHovered ? 0.6 : 0.3,
                                                        transform: "scale(1.5)",
                                                    }}
                                                />

                                                <div
                                                    className={`relative w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-2xl`}
                                                >
                                                    {isActive && (
                                                        <div
                                                            className="absolute inset-0 rounded-2xl animate-ping"
                                                            style={{ background: step.color, opacity: 0.3 }}
                                                        />
                                                    )}
                                                    <Icon className="w-12 h-12 text-white relative z-10" />
                                                </div>

                                                <div
                                                    className={`hidden lg:block absolute top-1/2 w-16 h-0.5 transition-all duration-500 ${isEven ? "left-full ml-2" : "right-full mr-2"}`}
                                                    style={{
                                                        background: step.color,
                                                        opacity: isHovered ? 1 : 0.3,
                                                        transform: isHovered ? "scaleX(1.2)" : "scaleX(1)",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Right/Left Content Card */}
                                        <div className="lg:w-5/12 w-full">
                                            <h3
                                                className="lg:hidden text-2xl font-bold mb-4 text-center transition-colors duration-300"
                                                style={{ color: isHovered ? step.color : "var(--foreground)" }}
                                            >
                                                {step.title}
                                            </h3>

                                            <div
                                                className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500"
                                                style={{
                                                    backgroundColor: "var(--card-bg)",
                                                    borderColor: isHovered ? step.color : "var(--border-color)",
                                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                                    boxShadow: isHovered ? `0 20px 60px ${step.color}30` : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                                }}
                                            >
                                                <div
                                                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                                                        opacity: isHovered ? 1 : 0,
                                                    }}
                                                />

                                                <div className="relative z-10">
                                                    <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                                        {step.description}
                                                    </p>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {step.deliverables.map((deliverable, didx) => {
                                                            const DeliverableIcon = deliverable.icon;
                                                            return (
                                                                <div
                                                                    key={didx}
                                                                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/deliverable"
                                                                    style={{
                                                                        backgroundColor: isHovered ? `${step.color}15` : `${step.color}08`,
                                                                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                                        transitionDelay: `${didx * 50}ms`,
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/deliverable:scale-110 group-hover/deliverable:rotate-12"
                                                                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                                                                    >
                                                                        <DeliverableIcon className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <span
                                                                        className="text-sm font-medium transition-colors duration-300"
                                                                        style={{ color: isHovered ? "var(--foreground)" : "var(--secondary-text)" }}
                                                                    >
                                                                        {deliverable.text}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                <div
                                                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${step.color}, transparent)`,
                                                        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                                        transformOrigin: isEven ? "left" : "right",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {idx < steps.length - 1 && (
                                        <div className="lg:hidden flex justify-center my-8">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center"
                                                style={{ background: `linear-gradient(135deg, ${step.color}30, ${steps[idx + 1].color}30)` }}
                                            >
                                                <ArrowRight className="w-6 h-6" style={{ color: step.color }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="inline-block p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                            Ready to Disrupt Finance?
                        </h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Let's audit your compliance needs and architect a platform that scales.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group"
                            style={{ background: "var(--brand-blue-btn)" }}
                        >
                            Schedule a FinTech Consultation
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
