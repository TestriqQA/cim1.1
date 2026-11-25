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
        { value: "Proven", label: "APIs Built" },
        { value: "High", label: "Uptime" },
        { value: "High", label: "Requests/day" },
    ];

    return (
        <section
            className="relative pt-14 pb-16 transition-colors duration-300 overflow-hidden"
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
                            <span style={{ color: "var(--accent-green-text)" }}>
                                Backend Systems
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            High-performance <Link href="/services/web-design-development/headless-traditional-cms" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">APIs</Link> and microservices that power your applications.
                            Node.js, Express, NestJS, and cloud-native architecture for modern businesses.
                        </p>

                        {/* Feature Pills: on phones, equal tiles (2 per row) with the
                            icon above the label; from 640px the usual pill row. */}
                        <div className="grid grid-cols-2 auto-rows-fr gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-3">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-full border text-center"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "#339933" }} />
                                        <span className="text-xs sm:text-sm font-medium leading-tight" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats: one row of three on phones */}
                        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div
                                        className="text-xl sm:text-3xl font-bold font-mono whitespace-nowrap"
                                        style={{ color: "var(--accent-green-text)" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons. White on #339933 is 3.7:1, so the button uses
                            #2B7F2B -> #215732 (5.0-8.5:1). */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 sm:min-h-0 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #2B7F2B, #215732)",
                                    color: "#ffffff",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                            <Link
                                href="#solutions"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 sm:min-h-0 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold border transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:scale-105"
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
