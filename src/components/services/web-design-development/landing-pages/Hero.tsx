"use client";

import { ArrowRight, Home, ChevronRight, Zap, MousePointerClick, TrendingUp, Timer, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #10b981 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #0ea5e9 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-8 animate-fadeIn"
                    aria-label="Breadcrumb"
                    style={{ animationDelay: "0.1s", animationFillMode: "both" }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services"
                        className="hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services/web-design-development"
                        className="hover:underline transition-colors"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Web Design
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <span
                        className="font-semibold"
                        style={{ color: "var(--accent-green-text)" }}
                    >
                        Landing Pages
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #10b981 8%, transparent), color-mix(in srgb, #0ea5e9 8%, transparent))",
                                borderColor: "color-mix(in srgb, #10b981 20%, transparent)",
                                color: "var(--accent-green-text)",
                            }}
                        >
                            <Target className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                            <span className="text-sm font-semibold">High-Conversion Landing Pages</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "var(--accent-green-text)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Convert Traffic
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>Into Revenue</span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="h-1.5 w-32 rounded-full mb-6 mx-auto lg:mx-0"
                            style={{
                                background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                            }}
                        />

                        {/* Description */}
                        <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Turn visitors into customers with lightning-fast, persuasive landing pages. We design for maximum conversion, speed, and ROI.
                        </p>

                        {/* Feature Highlights */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                <div className="p-1.5 rounded-full bg-emerald-500/10">
                                    <MousePointerClick className="w-3.5 h-3.5 text-emerald-500" />
                                </div>
                                High Conversions
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                <div className="p-1.5 rounded-full bg-blue-500/10">
                                    <Zap className="w-3.5 h-3.5 text-blue-500" />
                                </div>
                                Instant Load
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                <div className="p-1.5 rounded-full bg-purple-500/10">
                                    <Target className="w-3.5 h-3.5 text-purple-500" />
                                </div>
                                A/B Optimized
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                                style={{
                                    background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                    boxShadow: "0 8px 20px -4px rgba(16, 185, 129, 0.5)",
                                }}
                            >
                                Start Converting
                                <ArrowRight className="w-5 h-5" />
                            </Link>

                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "var(--border-color)" }}>
                            <div>
                                <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent-green-text)" }}>Strong</div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. ROI Increase</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent-sky-text)" }}>&lt;1s</div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Load Time</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent-green-text)" }}>20%+</div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Conversion Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - VISUAL */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10 flex items-center justify-center">
                            <Image
                                src="/images/services-images/web-design-development/landing-page.svg"
                                alt="High-Conversion Landing Page"
                                width={600}
                                height={450}
                                className="w-[80%] h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Performance Metrics Card */}
                        <div
                            className="mt-8 p-6 rounded-2xl border backdrop-blur-md"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)",
                                maxWidth: "500px",
                                marginInline: "auto"
                            }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                        Real-Time Analysis
                                    </span>
                                </div>
                                <div className="text-xs font-medium px-2 py-1 rounded-md bg-emerald-500/10 text-[var(--accent-green-text)]">
                                    Mobile Score
                                </div>
                            </div>

                            <div className="flex justify-between gap-2">
                                {[
                                    { label: "Performance", score: 100 },
                                    { label: "Accessibility", score: 100 },
                                    { label: "Best Practices", score: 100 },
                                    { label: "SEO", score: 100 },
                                ].map((metric, i) => (
                                    <div key={i} className="text-center flex-1">
                                        <div
                                            className="w-12 h-12 rounded-full border-4 flex items-center justify-center mb-2 mx-auto"
                                            style={{
                                                borderColor: "#10b981",
                                                borderRightColor: "transparent",
                                                transform: "rotate(-45deg)"
                                            }}
                                        >
                                            <span className="text-xs font-bold transform rotate-45" style={{ color: "var(--foreground)" }}>
                                                {metric.score}
                                            </span>
                                        </div>
                                        <div className="text-[10px] font-semibold leading-tight" style={{ color: "var(--secondary-text)" }}>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
