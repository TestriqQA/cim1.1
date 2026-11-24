import {
    Code2, Zap, Server, Globe, Shield, Rocket,
    ChevronRight, ArrowRight, CheckCircle2, Sparkles, Terminal, Layers
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Server, text: "Server Components" },
        { icon: Layers, text: "App Router" },
        { icon: Zap, text: "SSR & SSG" },
        { icon: Code2, text: "TypeScript" },
        { icon: Globe, text: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-cyan-text)] transition-colors">API Routes</Link> },
        { icon: Shield, text: "Edge Functions" },
    ];

    const stats = [
        { value: "<100ms", label: "Load Time" },
        { value: "100", label: <Link href="/blog/lazy-loading-image-optimization-core-web-vitals" className="hover:text-[var(--accent-cyan-text)] transition-colors">Lighthouse Score</Link> },
        { value: "-70%", label: "Bundle Size" },
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
                        backgroundImage: `linear-gradient(#61dafb 1px, transparent 1px), linear-gradient(90deg, #61dafb 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                            <span style={{ color: "var(--accent-cyan-text)" }}>Next.js & React</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #61dafb 10%, transparent), color-mix(in srgb, #000000 5%, transparent))",
                                borderColor: "color-mix(in srgb, #61dafb 30%, transparent)",
                            }}
                        >
                            <Terminal className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                                Modern React Development
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Expert{" "}
                            <span
                                style={{ color: "var(--accent-cyan-text)" }}
                            >
                                Next.js Development
                            </span>{" "}
                            Services & React JS Development Company for Global Enterprises
                        </h1>

                        <div className="space-y-4">
                            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                As an expert Next.js development agency and React JS development company, we build lightning-fast, SEO-optimized, and highly scalable web applications. Our expert React development services deliver seamless user experiences that dominate search rankings and maximize ROI for global brands.
                            </p>
                        </div>

                        {/* Feature Pills: on phones, equal tiles (2 per row) with the
                            icon above the label; from 640px the usual pill row. */}
                        <div className="grid grid-cols-2 auto-rows-fr gap-2 sm:flex sm:flex-wrap sm:gap-3">
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
                                        <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                                        <span className="text-xs sm:text-sm font-medium leading-tight" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats: one row of three on phones; the middle column takes
                            its label's width ("Lighthouse Score"). */}
                        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:flex sm:flex-wrap sm:gap-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div
                                        className="text-lg sm:text-3xl font-bold font-mono whitespace-nowrap"
                                        style={{ color: "var(--accent-cyan-text)" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 sm:min-h-0 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #61dafb, #00d4ff)",
                                    color: "#000000",
                                }}
                            >
                                Get a Free Audit & Quote Today
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
                        {/* Code-like container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "color-mix(in srgb, #61dafb 30%, var(--border-color))",
                                    background: "linear-gradient(135deg, color-mix(in srgb, #61dafb 5%, var(--card-bg)), var(--card-bg))",
                                }}
                            >
                                <Image
                                    src="/images/techstack_logos/nextjs-logo.svg"
                                    alt="Next.js & React Development"
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
                                    borderColor: "color-mix(in srgb, #61dafb 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #61dafb, #00d4ff)" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            React 19 Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Concurrent features enabled
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #61dafb 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #000000, #333333)" }}
                                    >
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            App Router
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Next.js 16 powered
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
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-cyan-text)" }}>
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"].map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border font-mono"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #61dafb 8%, transparent)",
                                            borderColor: "color-mix(in srgb, #61dafb 20%, transparent)",
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
