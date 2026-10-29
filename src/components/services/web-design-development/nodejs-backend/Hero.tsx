"use client";

import {
    Server, Database, Shield, Zap, Cloud, Code2,
    ChevronRight, ArrowRight, CheckCircle2, Sparkles, Terminal
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Code2, text: "REST APIs" },
        { icon: Database, text: "GraphQL" },
        { icon: Server, text: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[#339933] transition-colors">Microservices</Link> },
        { icon: Zap, text: "Real-time" },
        { icon: Shield, text: "Authentication" },
        { icon: Cloud, text: "Cloud Native" },
    ];

    const stats = [
        { value: "500+", label: "APIs Built" },
        { value: "High", label: "Uptime" },
        { value: "10M+", label: "Requests/day" },
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#339933 1px, transparent 1px), linear-gradient(90deg, #339933 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Glow orbs */}
                <div
                    className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #339933 15%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #68a063 15%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #215732 8%, transparent)", animationDelay: "2s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/web-design-development" className="hover:underline">Web Design</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-green-text)" }}>Node.js & Backend</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #339933 10%, transparent), color-mix(in srgb, #68a063 5%, transparent))",
                                borderColor: "color-mix(in srgb, #339933 30%, transparent)",
                            }}
                        >
                            <Terminal className="w-4 h-4" style={{ color: "#339933" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                                Backend Development Experts
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Build Scalable{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #339933, #68a063)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Backend Systems
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            High-performance <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">APIs</Link> and microservices that power your applications.
                            Node.js, Express, NestJS, and cloud-native architecture for modern businesses.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4" style={{ color: "#339933" }} />
                                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div
                                        className="text-3xl font-bold font-mono"
                                        style={{
                                            background: "linear-gradient(135deg, #339933, #68a063)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: "linear-gradient(135deg, #339933, #215732)",
                                    color: "#ffffff",
                                    boxShadow: "0 4px 20px rgba(51, 153, 51, 0.4)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#solutions"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                View Solutions
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Main Image */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "color-mix(in srgb, #339933 30%, var(--border-color))",
                                    background: "linear-gradient(135deg, color-mix(in srgb, #339933 5%, var(--card-bg)), var(--card-bg))",
                                }}
                            >
                                <Image
                                    src="/images/techstack_logos/Nodejs-logo-hero.png"
                                    alt="Node.js Backend Development"
                                    fill
                                    className="object-contain p-16"
                                    priority
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #339933 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #339933, #215732)" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Production Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Scalable architecture
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #68a063 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #68a063, #339933)" }}
                                    >
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            High Performance
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Event-driven, non-blocking
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
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-green-text)" }}>
                                Technologies We Master
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Node.js", "Express", "NestJS", "Fastify", "PostgreSQL", "MongoDB"].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #339933 8%, transparent)",
                                            borderColor: "color-mix(in srgb, #339933 20%, transparent)",
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
