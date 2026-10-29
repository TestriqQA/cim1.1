"use client";

import { ArrowRight, Code2, Database, Layout, Server, Shield, Layers, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background with animated gradient */}
            <div
                className="absolute inset-0 z-0 bg-background"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 15% 50%, rgba(255, 45, 32, 0.08), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(240, 83, 64, 0.08), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#FF2D20 1px, transparent 1px), linear-gradient(90deg, #FF2D20 1px, transparent 1px)`,
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
                @keyframes scaleIn {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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
                            <span style={{ color: "var(--accent-red-text)" }}>Laravel & PHP</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: "rgba(255, 45, 32, 0.05)",
                                borderColor: "rgba(255, 45, 32, 0.2)",
                            }}
                        >
                            <Server className="w-4 h-4" style={{ color: "var(--accent-red-text)" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-red-text)" }}>
                                Enterprise PHP Solutions
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Robust Web Apps with{" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Laravel
                                {/* Underline decoration */}
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 text-[#FF2D20] opacity-30"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Build scalable, secure, and maintainable <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline text-[var(--accent-red-text)]">web applications</Link> with the world's most popular PHP framework. We deliver enterprise-grade solutions tailored to your business.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                "Custom Development",
                                <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-red-text)] transition-colors">SaaS Platforms</Link>,
                                "API Integration",
                                "Legacy Migration",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FF2D20" }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                    boxShadow: "0 4px 20px rgba(255, 45, 32, 0.25)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                Our Process
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div>
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>100+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Projects Delivered</p>
                            </div>
                            <div className="w-px h-10 bg-border" style={{ backgroundColor: "var(--border-color)" }} />
                            <div>
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>5+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Years Experience</p>
                            </div>
                            <div className="w-px h-10 bg-border" style={{ backgroundColor: "var(--border-color)" }} />
                            <div>
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-red-text)" }}>24/7</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Support & Maint.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Redesigned to match Shopify/NextJS style */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        {/* Main Image Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "rgba(255, 45, 32, 0.2)",
                                    background: "linear-gradient(135deg, rgba(255, 45, 32, 0.05), var(--card-bg))",
                                }}
                            >
                                {/* Diagonal Layout */}
                                {/* Laravel - Top Left */}
                                <div className="absolute top-8 left-8 md:top-12 md:left-12 w-32 h-32 md:w-64 md:h-64 animate-slideUp z-10">
                                    <Image
                                        src="/images/techstack_logos/Laravel-logo.png"
                                        alt="Laravel"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Plus Sign - Center */}
                                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-scaleIn delay-200">
                                    <div className="relative flex items-center justify-center">
                                        <span
                                            className="text-7xl md:text-8xl font-bold font-mono"
                                            style={{
                                                background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                filter: "drop-shadow(0 4px 6px rgba(255, 45, 32, 0.2))"
                                            }}
                                        >
                                            +
                                        </span>
                                    </div>
                                </div> */}

                                {/* PHP - Bottom Right */}
                                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-32 h-32 md:w-64 md:h-64 animate-slideUp delay-300 z-10">
                                    <Image
                                        src="/images/techstack_logos/php-logo.svg"
                                        alt="PHP"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(255, 45, 32, 0.2)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #FF2D20, #F05340)" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Enterprise Grade
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Secure & Scalable
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(240, 83, 64, 0.2)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #F05340, #FF2D20)" }}
                                    >
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            High Performance
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Optimized for Speed
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
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-red-text)" }}>
                                Technologies We Use
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Laravel 11+", "PHP 8.4", "Livewire", "Alpine.js", "MySQL", "Redis", "Docker"].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "rgba(255, 45, 32, 0.05)",
                                            borderColor: "rgba(255, 45, 32, 0.15)",
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
