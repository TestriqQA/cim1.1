"use client";

import {
    Award, Video, Users, BarChart3, Zap, Shield,
    GraduationCap, Target, Sparkles, TrendingUp
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: GraduationCap,
            title: "EdTech Expertise",
            description: "Deep understanding of learning science, instructional design, and what makes digital education effective.",
            highlights: [
                { icon: Award, text: "Learning science" },
                { icon: Target, text: "Instructional design" },
                { icon: TrendingUp, text: "Student success" }
            ],
            color: "var(--brand-purple-text)",
            textColor: "var(--brand-purple-text)",
            gradient: "from-[#a855f7] to-[#c084fc]",
        },
        {
            icon: Video,
            title: "Video Streaming Mastery",
            description: <>HD video delivery with adaptive bitrate streaming, DRM protection, and seamless playback across <Link href="/services/web-design-development/entertainment-media" className="underline underline-offset-2 hover:underline text-[var(--accent-pink-text)]">devices</Link>.</>,
            highlights: [
                { icon: Video, text: "4K streaming" },
                { icon: Shield, text: "DRM protection" },
                { icon: Zap, text: "Fast loading" }
            ],
            color: "#ec4899",
            textColor: "var(--accent-pink-text)",
            gradient: "from-[#ec4899] to-[#f472b6]",
        },
        {
            icon: Users,
            title: "Engaging User Experience",
            description: <>Intuitive interfaces that keep learners motivated with <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:underline text-[var(--accent-orange-text)]">gamification</Link>, progress tracking, and social features.</>,
            highlights: [
                { icon: Sparkles, text: "Gamification" },
                { icon: TrendingUp, text: "Progress tracking" },
                { icon: Users, text: "Social learning" }
            ],
            color: "#f97316",
            textColor: "var(--accent-orange-text)",
            gradient: "from-[#f97316] to-[#fb923c]",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Insights",
            description: <>Comprehensive <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">analytics dashboards</Link> that track learner engagement, course completion, and learning outcomes.</>,
            highlights: [
                { icon: BarChart3, text: "Learning analytics" },
                { icon: Target, text: "Completion tracking" },
                { icon: TrendingUp, text: "Performance reports" }
            ],
            color: "var(--brand-purple-text)",
            textColor: "var(--brand-purple-text)",
            gradient: "from-[#a855f7] to-[#ec4899]",
        },
    ];

    const stats = [
        { value: "100K+", label: "Students" },
        { value: "500+", label: "Courses Built" },
        { value: "98%", label: "Satisfaction" },
        { value: "50+", label: "LMS Platforms" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
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
                        <Sparkles className="w-4 h-4" style={{ color: "var(--brand-purple-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose Us for <span style={{ color: "var(--brand-purple-text)" }}>EdTech</span>?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        We combine technical expertise with a passion for education to build platforms that truly impact learners.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
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
                                            style={{ color: isHovered ? reason.textColor : "var(--foreground)" }}
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
                                                        <span className="text-sm font-medium" style={{ color: reason.textColor }}>
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
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--brand-purple-text)" }}>
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
                        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                    >
                        Get Started Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
