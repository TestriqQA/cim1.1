"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Newspaper, Globe, MessageSquare, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

export default function SolutionTypes() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const solutions = [
        {
            icon: BookOpen,
            title: "Personal Blogs",
            description: "Beautiful, fast personal blogs that showcase your voice and build your personal brand.",
            features: ["Custom themes", "Social integration", "Newsletter signup", "Portfolio showcase"],
            accentColor: "#a855f7",
            link: "/services/web-design-development/wordpress-development-services"
        },
        {
            icon: Briefcase,
            title: "Corporate Blogs",
            description: "Professional content hubs that establish thought leadership and drive business growth.",
            features: ["Brand consistency", "Team collaboration", "Lead generation", "Analytics dashboard"],
            accentColor: "#8b5cf6",
            link: "/services/web-design-development/business-corporate"
        },
        {
            icon: Newspaper,
            title: "News Portals",
            description: "High-traffic news platforms with real-time updates and multi-author support.",
            features: ["Breaking news", "Category management", "Author profiles", "Ad integration"],
            accentColor: "#ec4899",
        },
        {
            icon: Globe,
            title: "Magazine Sites",
            description: "Rich, visually stunning magazine-style layouts for premium content experiences.",
            features: ["Featured stories", "Issue archives", "Subscription paywalls", "Print integration"],
            accentColor: "#d946ef",
        },
        {
            icon: MessageSquare,
            title: "Community Forums",
            description: "Engaging community platforms that foster discussion and user-generated content.",
            features: ["Discussion threads", "User profiles", "Moderation tools", "Gamification"],
            accentColor: "#c026d3",
        },
        {
            icon: GraduationCap,
            title: "Knowledge Bases",
            description: "Organized documentation and resource centers for products, services, or education.",
            features: ["Search functionality", "Category hierarchy", "Version control", "Feedback system"],
            accentColor: "#9333ea",
            link: "/services/web-design-development/edtech-lms"
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(168, 85, 247, 0.05)",
                            borderColor: "rgba(168, 85, 247, 0.2)",
                        }}
                    >
                        <BookOpen className="w-4 h-4" style={{ color: "#a855f7" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Solution Types
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Content Platform <span style={{ color: "#a855f7" }}>Solutions</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-6" style={{ color: "var(--secondary-text)" }}>
                        From personal blogs to enterprise news portals, we build content platforms tailored to your specific needs.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative p-8 rounded-3xl border transition-all duration-500"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? solution.accentColor : "var(--border-color)",
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: isHovered ? `0 20px 40px -15px ${solution.accentColor}30` : "none"
                                }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Gradient Background on Hover */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${solution.accentColor}05, ${solution.accentColor}10)`,
                                        opacity: isHovered ? 1 : 0
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{
                                            background: isHovered
                                                ? `linear-gradient(135deg, ${solution.accentColor}, #ec4899)`
                                                : `${solution.accentColor}15`,
                                        }}
                                    >
                                        <Icon
                                            className="w-8 h-8 transition-colors duration-300"
                                            style={{ color: isHovered ? "white" : solution.accentColor }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {solution.link ? (
                                            <Link href={solution.link} className="hover:underline">
                                                {solution.title}
                                            </Link>
                                        ) : (
                                            solution.title
                                        )}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm mb-6" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {solution.features.map((feature, fidx) => (
                                            <div key={fidx} className="flex items-center gap-2 text-sm">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: solution.accentColor }}
                                                />
                                                <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #a855f7, #ec4899)",
                            boxShadow: "0 8px 20px -4px rgba(168, 85, 247, 0.4)",
                        }}
                    >
                        Discuss Your Project
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
