"use client";

import { useState } from "react";
import {
    Award,
    TrendingUp,
    Users,
    Shield,
    Zap,
    HeadphonesIcon,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Award,
            title: "Meta Business Partner Status",
            description: "Directly verified by Meta for excellence in ad management and technical implementation. Access to beta features and priority support.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: TrendingUp,
            title: "Proven ROAS Results",
            description: <>Our clients average a strong <Link href="/services/performance-marketing" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">Return on Ad Spend</Link>, verified via third-party audits. We focus on profit, not just impressions.</>,
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Users,
            title: "Dedicated Account Team",
            description: "You get a dedicated media buyer, strategist, and creative lead. Full alignment with your business goals and KPIs.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Shield,
            title: "Full Transparency",
            description: "You own 100% of your data and ad account. We provide real-time dashboard access to all Facebook ads reporting and analytics.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Sparkles,
            title: "Global Reach & Multilingual",
            description: "Expertise in managing campaigns across North America, Europe, India, and APAC with localized cultural nuances and strategies.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
        {
            icon: Zap,
            title: "Fast & Agile Execution",
            description: "We launch and pivot in hours, not weeks, staying ahead of market shifts and the 2026 Meta algorithm updates.",
            shadowColor: "rgba(24, 119, 242, 0.3)",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#1877F2" }}
                />
                <div
                    className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#1877F2" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(24, 119, 242, 0.1)",
                            borderColor: "rgba(24, 119, 242, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#1877F2" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Choose Us for</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Facebook Ads
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Partner with a team that delivers real results, not just impressions.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow Effect */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500
                                        ${isHovered ? "opacity-100" : "opacity-0"}
                                    `}
                                    style={{ backgroundColor: "rgba(24, 119, 242, 0.2)" }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                                        ${isHovered ? "shadow-2xl" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? "#1877F2" : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: "#1877F2",
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.shadowColor}` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{
                                            color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: "#1877F2",
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
