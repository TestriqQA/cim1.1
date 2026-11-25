"use client";

import { ArrowRight, Zap, ChevronRight, Rocket, Component } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background with animated gradient */}
            <div
                className="absolute inset-0 z-0 bg-background"
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#FF5D01 1px, transparent 1px), linear-gradient(90deg, #FF5D01 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/web-design-development" className="hover:underline">Web Design</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-orange-text)" }}>Astro Framework</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: "rgba(255, 93, 1, 0.1)",
                                borderColor: "rgba(255, 93, 1, 0.3)",
                            }}
                        >
                            <Rocket aria-hidden="true" className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>
                                The Web Framework for Content
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Astro Development Agency for{" "}
                            <span
                                className="relative inline-block" style={{ color: "var(--accent-orange-text)" }}>
                                Lightning-Fast Sites
                                {/* Underline decoration */}
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-30"
                                    style={{ color: "#FF5D01" }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Build blazing-fast content sites, marketing pages, and <Link href="/services/web-design-development" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">modern web applications</Link> with our expert Astro framework services. As a leading Astro development agency, we harness Astro&apos;s revolutionary Islands Architecture and zero JavaScript by default to deliver custom Astro website development that achieves 100% <Link href="/blog/web-performance-optimization-speed" className="text-[var(--accent-orange-text)] hover:underline underline underline-offset-2">PageSpeed scores</Link> and sub-1-second load times.
                        </p>

                        {/* Feature Pills: a 2x2 grid on phones, dot beside the label */}
                        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-3 animate-slideUp delay-200">
                            {[
                                "✓ Zero JS by Default",
                                "✓ Islands Architecture",
                                "✓ Framework Agnostic",
                                "✓ SEO Excellence",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#FF5D01" }} />
                                    <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-lg focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #C94600, #B33E00)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                            </Link>

                            <Link
                                href="#process"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                Our Process
                            </Link>
                        </div>

                        {/* Stats: one row of three on phones; the columns take their
                            content's width, so a long label may wrap at 320px. */}
                        <div className="grid grid-cols-[auto_auto_auto] justify-between gap-1.5 sm:flex sm:flex-row sm:items-center sm:justify-center lg:justify-start sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <p className="text-xl sm:text-3xl font-bold" style={{ color: "var(--accent-orange-text)" }}>Proven</p>
                                <p className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>Sites Delivered</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <p className="text-xl sm:text-3xl font-bold" style={{ color: "var(--accent-orange-text)" }}>&lt;1s</p>
                                <p className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>Average Load Time</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <p className="text-xl sm:text-3xl font-bold" style={{ color: "var(--accent-orange-text)" }}>100</p>
                                <p className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>PageSpeed Score</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        {/* Main Image Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center"
                                style={{
                                    borderColor: "rgba(255, 93, 1, 0.2)",
                                    background: "linear-gradient(135deg, rgba(255, 93, 1, 0.05), var(--card-bg))",
                                }}
                            >
                                {/* Astro Logo - Center */}
                                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                                    <Image
                                        src="/images/techstack_logos/Astro-logo.svg"
                                        alt="Astro"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: "#FF5D01" }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: "#FF5D01" }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(255, 93, 1, 0.2)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #FF5D01, #FF8534)" }}
                                    >
                                        <Zap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Zero JS by Default
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Ship 90% less JavaScript
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(255, 93, 1, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #FF5D01, #E14F00)" }}
                                    >
                                        <Component className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Islands Architecture
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Selective hydration
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-orange-text)" }}>
                                Works With Your Favorite Frameworks
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Vue", "Svelte", "Solid", "Preact", "TypeScript"].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "rgba(255, 93, 1, 0.05)",
                                            borderColor: "rgba(255, 93, 1, 0.15)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
