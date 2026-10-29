"use client";

import {
    Map, Zap, Shield, TrendingUp, Users, Eye,
    Home, Search, FileCheck, Target, BarChart3, Video,
    CheckCircle2, Award, Clock, Sparkles, ArrowRight, Star
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const reasons = [
        {
            icon: Home,
            title: "Real Estate Expertise",
            description: <>Deep understanding of property marketing, MLS integration, and <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline">lead generation</Link> strategies tailored for real estate professionals.</>,
            highlights: [
                { icon: Map, text: "Market insights" },
                { icon: Target, text: <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline">Lead generation</Link> },
                { icon: BarChart3, text: "Analytics" }
            ],
            color: "#0d9488",
            gradient: "from-[#0d9488] to-[#14b8a6]",
        },
        {
            icon: Zap,
            title: "Lightning Fast Search",
            description: "Optimized search algorithms that filter thousands of listings instantly with intelligent auto-suggestions and real-time results.",
            highlights: [
                { icon: Search, text: "Smart filters" },
                { icon: Clock, text: "Instant results" },
                { icon: Sparkles, text: "Auto-suggest" }
            ],
            color: "#14b8a6",
            gradient: "from-[#14b8a6] to-[#2dd4bf]",
        },
        {
            icon: Shield,
            title: "MLS/IDX Compliance",
            description: "Fully compliant integrations with major MLS systems and data standards, ensuring seamless and secure property data synchronization.",
            highlights: [
                { icon: FileCheck, text: "Certified" },
                { icon: Shield, text: "Secure sync" },
                { icon: CheckCircle2, text: "Standards" }
            ],
            color: "#2dd4bf",
            gradient: "from-[#2dd4bf] to-[#5eead4]",
        },
        {
            icon: Target,
            title: "Lead Conversion Focus",
            description: "Every feature designed to capture and convert property seekers into clients with strategic CTAs and engagement tools.",
            highlights: [
                { icon: Target, text: "Strategic CTAs" },
                { icon: Users, text: "Engagement" },
                { icon: TrendingUp, text: "Conversion" }
            ],
            color: "#0d9488",
            gradient: "from-[#0d9488] to-[#2dd4bf]",
        },
        {
            icon: BarChart3,
            title: "Scalable Architecture",
            description: "Platforms that grow with your business, from startup to enterprise, with robust infrastructure and performance optimization.",
            highlights: [
                { icon: TrendingUp, text: "Growth ready" },
                { icon: Award, text: <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:underline">Enterprise</Link> },
                { icon: Zap, text: "Optimized" }
            ],
            color: "#14b8a6",
            gradient: "from-[#14b8a6] to-[#0d9488]",
        },
        {
            icon: Video,
            title: "Virtual Tour Ready",
            description: "Seamless integration with Matterport, 3D Vista, and other tour platforms for immersive property showcasing experiences.",
            highlights: [
                { icon: Eye, text: "3D tours" },
                { icon: Video, text: "Virtual walks" },
                { icon: Sparkles, text: "Immersive" }
            ],
            color: "#2dd4bf",
            gradient: "from-[#2dd4bf] to-[#14b8a6]",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-[#0d9488]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14b8a6]/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
            </div>

            {/* Floating particles - fixed positions to avoid hydration mismatch */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#0d9488", left: "10%", top: "20%" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#14b8a6", left: "25%", top: "45%", animationDelay: "0.5s" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#2dd4bf", left: "40%", top: "15%", animationDelay: "1s" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#0d9488", left: "55%", top: "70%", animationDelay: "1.5s" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#14b8a6", left: "70%", top: "35%", animationDelay: "2s" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#2dd4bf", left: "85%", top: "60%", animationDelay: "2.5s" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#0d9488", left: "15%", top: "80%", animationDelay: "3s" }} />
                <div className="absolute w-2 h-2 rounded-full opacity-20 animate-pulse" style={{ background: "#14b8a6", left: "90%", top: "25%", animationDelay: "3.5s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--background)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Star className="w-4 h-4" style={{ color: "#0d9488" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>
                                Why Choose Us
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why Choose <span style={{ color: "#0d9488" }}>Us</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        We combine real estate industry knowledge with cutting-edge technology to deliver exceptional results.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
                        }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                {/* Card */}
                                <div
                                    className="relative p-8 rounded-2xl border overflow-hidden transition-all duration-500 h-full flex flex-col"
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? reason.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                                        boxShadow: isHovered
                                            ? `0 20px 60px ${reason.color}30, 0 0 0 1px ${reason.color}20`
                                            : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    {/* Animated background gradient */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-all duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${reason.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Diagonal animated stripe */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-0 transition-all duration-700"
                                        style={{
                                            background: `linear-gradient(135deg, ${reason.color}20, transparent)`,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "translate(0, 0)" : "translate(20px, -20px)",
                                            borderRadius: "0 0 0 100%",
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon with animations */}
                                        <div className="mb-6">
                                            <div
                                                className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center bg-gradient-to-br ${reason.gradient} transition-all duration-500 relative`}
                                                style={{
                                                    transform: isHovered ? "scale(1.1) rotate(10deg)" : "scale(1) rotate(0deg)",
                                                    boxShadow: isHovered ? `0 10px 30px ${reason.color}40` : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                {/* Pulsing ring */}
                                                {isHovered && (
                                                    <div
                                                        className="absolute inset-0 rounded-2xl animate-ping"
                                                        style={{
                                                            background: reason.color,
                                                            opacity: 0.3,
                                                        }}
                                                    />
                                                )}

                                                <Icon className="w-8 h-8 text-white relative z-10" />

                                                {/* Sparkle effect */}
                                                {isHovered && (
                                                    <div className="absolute -top-1 -right-1">
                                                        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
                                            style={{
                                                color: isHovered ? reason.color : "var(--foreground)",
                                            }}
                                        >
                                            {reason.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base leading-relaxed mb-6 flex-1"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {reason.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-2 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                            {reason.highlights.map((highlight, hidx) => {
                                                const HighlightIcon = highlight.icon;
                                                return (
                                                    <div
                                                        key={hidx}
                                                        className="flex items-center gap-3 transition-all duration-300"
                                                        style={{
                                                            transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                            transitionDelay: `${hidx * 50}ms`,
                                                        }}
                                                    >
                                                        <div
                                                            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${reason.gradient} transition-all duration-300`}
                                                            style={{
                                                                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
                                                                opacity: isHovered ? 1 : 0.7,
                                                            }}
                                                        >
                                                            <HighlightIcon className="w-3.5 h-3.5 text-white" />
                                                        </div>
                                                        <span
                                                            className="text-xs md:text-sm font-medium transition-colors duration-300"
                                                            style={{
                                                                color: isHovered ? reason.color : "var(--secondary-text)",
                                                            }}
                                                        >
                                                            {highlight.text}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Bottom accent bar */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, ${reason.color}, transparent)`,
                                            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                            transformOrigin: "left",
                                        }}
                                    />

                                    {/* Floating number badge */}
                                    <div
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500"
                                        style={{
                                            background: isHovered
                                                ? `linear-gradient(135deg, ${reason.color}, ${reason.color}cc)`
                                                : `${reason.color}20`,
                                            color: isHovered ? "white" : "var(--accent-teal-text)",
                                            transform: isHovered ? "scale(1.2) rotate(360deg)" : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Hover arrow indicator */}
                                <div
                                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{
                                        background: isHovered ? reason.color : "transparent",
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered ? "scale(1)" : "scale(0.5)",
                                    }}
                                >
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: "500+", label: "Projects Delivered", icon: Award },
                        { number: "98%", label: "Client Satisfaction", icon: Star },
                        { number: "50+", label: "Team Members", icon: Users },
                        { number: "24/7", label: "Support Available", icon: Shield },
                    ].map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <StatIcon className="w-8 h-8 mx-auto mb-3" style={{ color: "#0d9488" }} />
                                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#0d9488" }}>
                                    {stat.number}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 group"
                        style={{
                            background: "linear-gradient(135deg, #0d9488 0%, #2dd4bf 100%)",
                        }}
                    >
                        Get Started Today
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}