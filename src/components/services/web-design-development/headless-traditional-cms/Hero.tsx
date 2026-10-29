"use client";

import {
    Settings, Zap, Globe, Database, Eye, Layers,
    ChevronRight, ArrowRight, CheckCircle2, Sparkles, Code2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Settings, text: "Headless Architecture" },
        { icon: Database, text: "API-First" },
        { icon: Eye, text: "Visual Editing" },
        { icon: Globe, text: "Multi-channel" },
        { icon: Layers, text: "Content Modeling" },
        { icon: Zap, text: "Real-time Preview" },
    ];

    const stats = [
        { value: "50+", label: "CMS Projects" },
        { value: "High", label: "Uptime" },
        { value: "-60%", label: "Content Time" },
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
                        backgroundImage: `linear-gradient(#9333ea 1px, transparent 1px), linear-gradient(90deg, #9333ea 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Glow orbs */}
                <div
                    className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #9333ea 15%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #a855f7 15%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #c084fc 8%, transparent)", animationDelay: "2s" }}
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
                            <span style={{ color: "var(--accent-violet-text)" }}>Headless & Traditional CMS</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #9333ea 10%, transparent), color-mix(in srgb, #a855f7 5%, transparent))",
                                borderColor: "color-mix(in srgb, #9333ea 30%, transparent)",
                            }}
                        >
                            <Code2 className="w-4 h-4" style={{ color: "#9333ea" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                                CMS Development Experts
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Power Your Content With{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Modern CMS
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            From headless platforms like <Link href="/services/web-design-development/contentful-headless-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Contentful</Link>, <Link href="/services/web-design-development/strapi-headless-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Strapi</Link>, and <Link href="/blog/headless-cms-sanity-nextjs-decoupled-frontends-2026" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Sanity</Link> to traditional powerhouses
                            like <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">WordPress</Link> and <Link href="/services/web-design-development/drupal-cms" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Drupal</Link> - we build CMS solutions that empower your content teams.
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
                                        <Icon className="w-4 h-4" style={{ color: "#9333ea" }} />
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
                                            background: "linear-gradient(135deg, #9333ea, #c084fc)",
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
                                    background: "linear-gradient(135deg, #9333ea, #a855f7)",
                                    color: "#ffffff",
                                    boxShadow: "0 4px 20px rgba(147, 51, 234, 0.4)",
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
                        {/* CMS Logos Grid */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "color-mix(in srgb, #9333ea 30%, var(--border-color))",
                                    background: "linear-gradient(135deg, color-mix(in srgb, #9333ea 5%, var(--card-bg)), var(--card-bg))",
                                }}
                            >
                                <Image
                                    src="/images/services-images/web-design-development/headless-traditional-cms.svg"
                                    alt="Headless & Traditional CMS Development"
                                    fill
                                    className="object-contain p-12"
                                    priority
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #9333ea 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #9333ea, #a855f7)" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Headless Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            API-first architecture
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #a855f7 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #a855f7, #c084fc)" }}
                                    >
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Traditional CMS
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            WordPress & Drupal experts
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
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-violet-text)" }}>
                                Platforms We Master
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Contentful", "Strapi", "Sanity", "WordPress", "Drupal", "Ghost"].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #9333ea 8%, transparent)",
                                            borderColor: "color-mix(in srgb, #9333ea 20%, transparent)",
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
