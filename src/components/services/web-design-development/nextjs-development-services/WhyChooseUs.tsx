"use client";

import { useState } from "react";
import {
    Zap,
    Shield,
    Globe,
    Code2,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const reasons = [
        {
            icon: Zap,
            title: "Deep Experience",
            description:
                <>Our team brings deep combined expertise in <Link href="/services/web-design-development" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">web design and development</Link>, ensuring enterprise-grade solutions for every project.</>,
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: Shield,
            title: "Vercel & AWS Partners",
            description:
                "As certified Vercel and AWS partners, we specialize in advanced Next.js SEO audit and optimization services that drive results.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
        {
            icon: Globe,
            title: "Top React Agency",
            description:
                "Ranked as a top React development agency for three consecutive years, delivering high-performance applications globally.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: Code2,
            title: "Expert Maintenance",
            description:
                "Our Next.js maintenance and ongoing support services ensure your app stays updated with the latest security patches and features.",
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
        {
            icon: TrendingUp,
            title: "Performance Obsessed",
            description:
                "Our implementations consistently achieve near-perfect Lighthouse scores, focusing on Next.js speed optimization and Core Web Vitals.",
            gradient: "from-[#61dafb] to-[#00d4ff]",
        },
        {
            icon: HeadphonesIcon,
            title: "E-E-A-T Driven",
            description:
                <>We follow Google&apos;s <Link href="/blog/mastering-seo-organic-growth" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">E-E-A-T</Link> guidelines to ensure your platform is authoritative, trustworthy, and expert-led.</>,
            gradient: "from-[#00d4ff] to-[#61dafb]",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .card-shimmer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(97, 218, 251, 0.1),
                        transparent
                    );
                    animation: shimmer 2s infinite;
                    pointer-events: none;
                }
                .icon-glow {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
            `}</style>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#61dafb" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-5 blur-3xl"
                    style={{ backgroundColor: "#00d4ff" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Zap className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            E-E-A-T Verified
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Why Choose Our{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            React Development
                        </span>{" "}
                        Agency?
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Our Next.js development services leverage the latest JavaScript framework expertise to solve complex needs for disruptive startups and established brands. We maintain a track record of delivering rigorously tested applications globally.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    animationDelay: `${idx * 100}ms`,
                                }}
                            >
                                {/* Glow effect behind card */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl blur-xl transition-all duration-500
                                        ${isHovered ? "opacity-30" : "opacity-0"}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, #61dafb, #00d4ff)`,
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className={`
                                        relative p-6 rounded-2xl border overflow-hidden
                                        transition-all duration-500 ease-out
                                        ${isHovered ? "shadow-2xl -translate-y-3 scale-[1.02]" : "shadow-md"}
                                        ${isHovered ? "card-shimmer" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isHovered ? "#61dafb50" : "var(--border-color)",
                                    }}
                                >
                                    {/* Corner accent */}
                                    <div
                                        className={`
                                            absolute -top-10 -right-10 w-20 h-20 rounded-full
                                            transition-all duration-500 blur-2xl
                                            ${isHovered ? "opacity-40 scale-150" : "opacity-10"}
                                        `}
                                        style={{ backgroundColor: "#61dafb" }}
                                    />

                                    {/* Icon Container */}
                                    <div className="relative mb-4">
                                        <div
                                            className={`
                                                w-14 h-14 rounded-xl flex items-center justify-center
                                                transition-all duration-500
                                                ${isHovered ? "scale-110 rotate-6" : ""}
                                            `}
                                            style={{
                                                background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                                boxShadow: isHovered ? "0 8px 24px rgba(97, 218, 251, 0.5)" : "0 4px 16px rgba(97, 218, 251, 0.3)",
                                            }}
                                        >
                                            <Icon className="w-7 h-7 text-black" />
                                        </div>

                                        {/* Animated ring on hover */}
                                        <div
                                            className={`
                                                absolute inset-0 w-14 h-14 rounded-xl border-2
                                                transition-all duration-500
                                                ${isHovered ? "scale-125 opacity-50" : "scale-100 opacity-0"}
                                            `}
                                            style={{ borderColor: "#61dafb" }}
                                        />

                                        {/* Orbiting dot */}
                                        {isHovered && (
                                            <div
                                                className="absolute w-2 h-2 rounded-full animate-spin"
                                                style={{
                                                    backgroundColor: "#61dafb",
                                                    top: "-4px",
                                                    left: "50%",
                                                    transformOrigin: "0 35px",
                                                    animationDuration: "2s",
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Title with gradient on hover */}
                                    <h3
                                        className={`
                                            text-xl font-bold mb-2 transition-all duration-300
                                        `}
                                        style={{
                                            color: isHovered ? "#61dafb" : "var(--foreground)",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`
                                            text-sm leading-relaxed transition-all duration-300
                                            ${isHovered ? "translate-x-1" : ""}
                                        `}
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {reason.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div
                                        className={`
                                            absolute bottom-0 left-0 h-1 rounded-b-2xl transition-all duration-500
                                            ${isHovered ? "w-full" : "w-0"}
                                        `}
                                        style={{
                                            background: "linear-gradient(90deg, #61dafb, #00d4ff)",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Testimonial Section */}
                <div
                    className="p-8 md:p-12 rounded-3xl border-2 text-center relative overflow-hidden"
                    style={{
                        borderColor: "color-mix(in srgb, #61dafb 30%, var(--border-color))",
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #61dafb 5%, var(--card-bg)))",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #61dafb, #00d4ff)" }} />
                    <div className="max-w-4xl mx-auto">
                        <p className="text-2xl md:text-3xl font-medium mb-8 italic" style={{ color: "var(--foreground)" }}>
                            &quot;Cinute Infomedia developed our website using Next.js, which dramatically enhanced our SEO and page performance. This technical superiority has directly helped us secure major deals for our QA and testing services.&quot;
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#61dafb] to-[#00d4ff] flex items-center justify-center text-black font-bold">
                                T
                            </div>
                            <div className="text-left">
                                <p className="font-bold" style={{ color: "var(--foreground)" }}>Testriq QA Lab</p>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Trusted Software Testing Provider</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
