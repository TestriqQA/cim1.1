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

    const linkedinBlue = "#0A66C2";

    const reasons = [
        {
            icon: Award,
            title: "LinkedIn Certified",
            description: "Our team is LinkedIn Marketing certified with deep expertise in B2B advertising strategies.",
            color: "#0A66C2",
        },
        {
            icon: TrendingUp,
            title: "Proven B2B Results",
            description: "We've generated thousands of qualified B2B leads with strong conversion rates.",
            color: "#0077B5",
        },
        {
            icon: Users,
            title: "Account-Based Expertise",
            description: "Specialized in ABM strategies targeting specific companies and decision-makers.",
            color: "#004182",
        },
        {
            icon: Shield,
            title: "Full Transparency",
            description: "Weekly reports, real-time dashboards, and complete visibility into campaign performance.",
            color: "#0A66C2",
        },
        {
            icon: Zap,
            title: "Data-Driven Optimization",
            description: "Continuous optimization based on performance data to maximize your ROI.",
            color: "#0077B5",
        },
        {
            icon: HeadphonesIcon,
            title: "Dedicated Support",
            description: "Your dedicated account manager ensures consistent strategy execution and communication.",
            color: "#004182",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--card-bg)" }}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: linkedinBlue }} />
                <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: linkedinBlue }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${linkedinBlue}15`,
                            borderColor: `${linkedinBlue}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Why Partner with Our</span>{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            B2B LinkedIn Agency?
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Future-proof your B2B growth with elite strategies optimized for AI Overviews and 2026 search intent.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Award,
                            title: "LinkedIn Certified Experts",
                            description: <>Our team holds the highest tier of <Link href="/about" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">LinkedIn Marketing certifications</Link> for B2B advertising.</>,
                            color: "#0A66C2",
                        },
                        {
                            icon: Zap,
                            title: "Rigorously Tested Implementations",
                            description: "Flawless tracking setup (Insight Tags, API integrations) for 100+ global clients.",
                            color: "#0077B5",
                        },
                        {
                            icon: TrendingUp,
                            title: "Data-Driven ROI",
                            description: "We've delivered sustained traffic growth and measurable CTR lifts for tech startups and enterprises alike.",
                            color: "#004182",
                        },
                        {
                            icon: Users,
                            title: "Global Reach",
                            description: "Expertise in US, EU, and APAC markets with multilingual LinkedIn strategy capabilities.",
                            color: "#0A66C2",
                        },
                        {
                            icon: Shield,
                            title: "Future-Proof SEO",
                            description: <>All content is optimized for AI Overviews and 2026 search intent signals (<Link href="/services/seo-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">SEO</Link>).</>,
                            color: "#0077B5",
                        },
                        {
                            icon: HeadphonesIcon,
                            title: "White-Glove Support",
                            description: "Dedicated account management ensuring 100% transparency on every dollar spent.",
                            color: "#004182",
                        },
                    ].map((reason, idx) => {
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
                                    className={`absolute -inset-1 rounded-3xl blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                                    style={{ backgroundColor: `${reason.color}30` }}
                                />

                                {/* Card */}
                                <div
                                    className={`relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${isHovered ? "shadow-2xl" : ""}`}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? reason.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                                        style={{
                                            backgroundColor: isHovered ? reason.color : `${reason.color}15`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                            boxShadow: isHovered ? `0 8px 24px ${reason.color}40` : "none",
                                        }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: isHovered ? "white" : "var(--brand-blue-text)" }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: reason.color,
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
