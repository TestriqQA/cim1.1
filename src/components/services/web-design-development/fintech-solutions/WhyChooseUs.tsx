"use client";

import {
    ShieldCheck, Zap, Users, BarChart3, Lock, Globe,
    Building2, Scale, Target, TrendingUp
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: ShieldCheck,
            title: "Bank-Grade Security",
            description: "We implement defense-in-depth strategies including 256-bit encryption, MFA, and real-time threat monitoring to protect assets.",
            highlights: [
                { icon: Lock, text: "End-to-End Encryption" },
                { icon: ShieldCheck, text: "SOC2 Compliant" },
                { icon: Users, text: "IAM Controls" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            icon: Scale,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline">Regulatory Compliance</Link>,
            description: "Our architectures are built to meet global financial regulations including GDPR, PSD2, PCI-DSS, and local banking standards.",
            highlights: [
                { icon: Scale, text: "GDPR & CCPA" },
                { icon: Building2, text: "PCI-DSS Level 1" },
                { icon: Globe, text: "Cross-border Laws" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            icon: Zap,
            title: "High-Frequency Performance",
            description: "Engineered for low latency and high concurrency. We ensure your platform executes transactions in milliseconds.",
            highlights: [
                { icon: Zap, text: "<100ms Latency" },
                { icon: BarChart3, text: "High Throughput" },
                { icon: Users, text: "High Availability" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
        {
            icon: TrendingUp,
            title: <Link href="/services/web-design-development/saas-development-services" className="hover:underline">Scalable Architecture</Link>,
            description: "Microservices-ready infrastructure that grows with your AUM (Assets Under Management) and user base without downtime.",
            highlights: [
                { icon: TrendingUp, text: "Auto-scaling" },
                { icon: Target, text: "Modular Codebase" },
                { icon: Globe, text: "Global CDN" }
            ],
            color: "#0ea5e9",
            gradient: "from-[#0ea5e9] to-[#38bdf8]",
        },
    ];

    const stats = [
        { value: "50+", label: "FinTech Products" },
        { value: "High-Volume", label: "Processed Volume" },
        { value: "100%", label: "Security Record" },
        { value: "24/7", label: "Critical Support" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose Us for <span style={{ color: "var(--accent-sky-text)" }}>FinTech</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        We combine deep financial domain knowledge with elite engineering to build platforms that investors trust.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{ backgroundColor: "#0ea5e9" }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500 h-full"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? reason.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                        boxShadow: isHovered
                                            ? `0 25px 60px ${reason.color}25`
                                            : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-all duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${reason.color}10, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div
                                            className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-6 bg-gradient-to-br ${reason.gradient} transition-all duration-500`}
                                            style={{
                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
                                                boxShadow: isHovered ? `0 10px 30px ${reason.color}40` : "none",
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-4 transition-colors duration-300"
                                            style={{ color: isHovered ? reason.color : "var(--foreground)" }}
                                        >
                                            {reason.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mb-6 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                            {reason.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-3">
                                            {reason.highlights.map((highlight, hidx) => {
                                                const HighlightIcon = highlight.icon;
                                                return (
                                                    <div
                                                        key={hidx}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                                                        style={{
                                                            backgroundColor: isHovered ? `${reason.color}20` : `${reason.color}10`,
                                                            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                                                            transitionDelay: `${hidx * 50}ms`,
                                                        }}
                                                    >
                                                        <HighlightIcon className="w-4 h-4" style={{ color: reason.color }} />
                                                        <span className="text-sm font-medium" style={{ color: "var(--accent-sky-text)" }}>
                                                            {highlight.text}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Bottom gradient bar */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, ${reason.color}, transparent)`,
                                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                            transformOrigin: "left",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div
                    className="rounded-2xl p-8 border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--accent-sky-text)" }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: "var(--brand-blue-btn)" }}
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}
