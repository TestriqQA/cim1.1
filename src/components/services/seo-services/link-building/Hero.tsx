"use client";

import Link from "next/link";
import Image from "next/image";
import { Link2, ArrowRight, ExternalLink, Globe, Award, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Hero() {
    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    const features = [
        "White-Hat Strategy",
        "High DA Links",
        "Niche Relevance",
        "Transparent Reporting",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - Connecting Links */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Glow */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20"
                    style={{
                        background: `radial-gradient(circle, ${linkCyan}40, transparent 70%)`,
                    }}
                />

                {/* Animated Link Chain Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="linkPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="3" fill={linkCyan} className="animate-pulse" />
                            <circle cx="90" cy="90" r="3" fill={linkCyan} className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                            <line x1="10" y1="10" x2="90" y2="90" stroke={linkCyan} strokeWidth="1" strokeDasharray="5,5" className="animate-dash" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#linkPattern)" />
                </svg>

                {/* Floating Link Icons */}
                <div className="absolute top-20 left-[10%] animate-float">
                    <Link2 className="w-8 h-8 opacity-20" style={{ color: linkCyan }} />
                </div>
                <div className="absolute top-40 right-[15%] animate-float-delayed">
                    <ExternalLink className="w-6 h-6 opacity-15" style={{ color: linkCyan }} />
                </div>
                <div className="absolute bottom-32 left-[20%] animate-float-slow">
                    <Globe className="w-10 h-10 opacity-10" style={{ color: linkCyan }} />
                </div>
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <span>/</span>
                            <Link href="/services" className="hover:underline">Services</Link>
                            <span>/</span>
                            <Link href="/services/seo-services" className="hover:underline">SEO</Link>
                            <span>/</span>
                            <span style={{ color: "var(--accent-cyan-text)" }}>Link Building</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: `${linkCyan}10`,
                                borderColor: `${linkCyan}30`,
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: linkCyan }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                                Authority Building
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--foreground)" }}>
                            Build Authority with{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${linkCyan}, #3b82f6)`,
                                }}
                            >
                                Quality Backlinks
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Acquire high-quality, relevant backlinks from authoritative websites. Our white-hat link building strategies boost your <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>domain authority</Link> and <Link href="/services/seo-services/on-page-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>organic rankings</Link>.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                    }}
                                >
                                    <CheckCircle2 className="w-4 h-4" style={{ color: linkCyan }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${linkCyan}, #3b82f6)`,
                                    boxShadow: `0 4px 20px ${linkCyan}40`,
                                }}
                            >
                                Start Link Building
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Our Process
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center"
                                style={{
                                    borderColor: `${linkCyan}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${linkCyan}10`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative p-8">
                                    <Image
                                        src="/images/techstack_logos/Backlinks-logo-hero-image.webp"
                                        alt="Link Building"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20 border-dashed animate-[spin_20s_linear_infinite]"
                                    style={{ borderColor: linkCyan }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: linkCyan }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${linkCyan}15` }}
                                    >
                                        <Award className="w-6 h-6" style={{ color: linkCyan }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            DA 50+ Avg
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            High Authority Links
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${linkCyan}15` }}
                                    >
                                        <TrendingUp className="w-6 h-6" style={{ color: linkCyan }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            More Traffic
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Avg. Growth
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategy Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Link Building Strategies
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Guest Posts", "Digital PR", "Outreach", "HARO", "Niche Edits", "Resource Links"].map((strategy, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${linkCyan}30`,
                                            backgroundColor: "var(--background)",
                                            color: "var(--secondary-text)"
                                        }}
                                    >
                                        {strategy}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for custom animations */}
            <style jsx>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -100;
                    }
                }
                .animate-dash {
                    animation: dash 10s linear infinite;
                }
            `}</style>
        </section>
    );
}
