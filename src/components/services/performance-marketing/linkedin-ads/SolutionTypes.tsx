"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Briefcase, GraduationCap, Users, Target, Megaphone, Sparkles } from "lucide-react";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // LinkedIn brand color
    const linkedInBlue = "#0a66c2";

    // Map each solution's brand hue to a theme-aware, contrast-safe text token (both themes)
    const textAccent = (hex: string) =>
        hex.toLowerCase() === "#00a0dc" ? "var(--accent-sky-text)" : "var(--brand-blue-text)";

    const solutions = [
        {
            icon: Building2,
            title: "Enterprise Sales",
            description: "Reach C-suite executives and enterprise decision-makers.",
            targeting: ["Company Size: 1000+", "Seniority: Director+", "Industry targeting"],
            color: linkedInBlue,
        },
        {
            icon: Briefcase,
            title: <Link href="/services/performance-marketing" className="hover:text-[var(--primary)] transition-colors">B2B Lead Generation</Link>,
            description: "Generate high-quality leads with Lead Gen Forms.",
            targeting: ["Job Function", "Skills targeting", "Company targeting"],
            color: "#0077B5",
        },
        {
            icon: GraduationCap,
            title: "Education & Training",
            description: "Promote courses, certifications, and professional development.",
            targeting: ["Degrees", "Fields of Study", "Member Schools"],
            color: "#00A0DC",
        },
        {
            icon: Users,
            title: "Recruitment Ads",
            description: "Attract top talent with jobs ads and employer branding.",
            targeting: ["Skills", "Experience", "Current Companies"],
            color: "#0A66C2",
        },
        {
            icon: Target,
            title: "Account-Based Marketing",
            description: "Target specific companies with personalized campaigns.",
            targeting: ["Company Lists", "Contact Targeting", "Website Retargeting"],
            color: "#004182",
        },
        {
            icon: Megaphone,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Thought Leadership</Link>,
            description: "Build authority with sponsored content and articles.",
            targeting: ["Follower Lookalikes", "Engagement Retargeting", "Interest targeting"],
            color: "#0066B2",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: `${linkedInBlue}15`,
                            borderColor: `${linkedInBlue}40`,
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-blue-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            B2B Solutions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        B2B <span style={{ color: "var(--brand-blue-text)" }}>Solutions</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Tailored strategies for every B2B marketing objective.
                    </p>
                </div>

                {/* Solutions Grid with Border Animation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Animated border */}
                            <div
                                className="absolute inset-0 rounded-2xl transition-all duration-500"
                                style={{
                                    background: hoveredCard === idx
                                        ? `linear-gradient(135deg, ${solution.color}, ${solution.color}80, ${solution.color})`
                                        : "transparent",
                                    padding: "2px",
                                    opacity: hoveredCard === idx ? 1 : 0,
                                }}
                            >
                                <div className="w-full h-full rounded-2xl" style={{ backgroundColor: "var(--background)" }} />
                            </div>

                            <div
                                className="relative p-6 rounded-2xl border transition-all duration-500 h-full"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: hoveredCard === idx ? "transparent" : "var(--border-color)",
                                    transform: hoveredCard === idx ? "scale(1.02)" : "scale(1)",
                                }}
                            >
                                {/* Icon with slide-up effect */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{
                                        backgroundColor: `${solution.color}15`,
                                        transform: hoveredCard === idx ? "translateY(-8px)" : "translateY(0)",
                                    }}
                                >
                                    <solution.icon className="w-7 h-7" style={{ color: textAccent(solution.color) }} />
                                </div>

                                {/* Content */}
                                <h3
                                    className="text-xl font-bold mb-2 transition-colors duration-300"
                                    style={{ color: hoveredCard === idx ? textAccent(solution.color) : "var(--foreground)" }}
                                >
                                    {solution.title}
                                </h3>
                                <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                    {solution.description}
                                </p>

                                {/* Targeting Options */}
                                <div className="space-y-2">
                                    {solution.targeting.map((target, tIdx) => (
                                        <div
                                            key={tIdx}
                                            className="flex items-center gap-2 transition-all duration-300"
                                            style={{
                                                transform: hoveredCard === idx ? `translateX(${4 + tIdx * 2}px)` : "translateX(0)",
                                                transitionDelay: `${tIdx * 50}ms`,
                                            }}
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: solution.color }}
                                            />
                                            <span className="text-xs font-medium" style={{ color: "var(--secondary-text)" }}>
                                                {target}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
