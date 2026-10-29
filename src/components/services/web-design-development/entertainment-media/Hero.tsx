import {
    Play, Film, Music, Radio, Users, TrendingUp,
    ChevronRight, ArrowRight, CheckCircle2, Sparkles, Tv, Headphones
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Film, text: "Video Streaming" },
        { icon: Music, text: "Audio Platforms" },
        { icon: Tv, text: "Live Broadcasting" },
        { icon: Users, text: "Social Features" },
        { icon: Radio, text: "Podcasting" },
        { icon: TrendingUp, text: <Link href="/services/ai-workflows-automations-services" className="hover:underline">Analytics</Link> },
    ];

    const stats = [
        { value: "10M+", label: "Users Engaged" },
        { value: "50K+", label: "Content Hours" },
        { value: "High", label: "Uptime SLA" },
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #8b5cf6 15%, transparent)" }}
                />
                <div
                    className="absolute bottom-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #ec4899 12%, transparent)", animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: "color-mix(in srgb, #8b5cf6 8%, transparent)", animationDelay: "2s" }}
                />
                {/* Cinematic light streaks */}
                <div
                    className="absolute top-0 right-1/4 w-1 h-64 blur-sm opacity-20"
                    style={{ background: "linear-gradient(180deg, #8b5cf6, transparent)" }}
                />
                <div
                    className="absolute bottom-0 left-1/3 w-1 h-48 blur-sm opacity-20"
                    style={{ background: "linear-gradient(0deg, #ec4899, transparent)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/web-design-development" className="hover:underline">Web Design</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--brand-purple-text)" }}>Entertainment & Media</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #8b5cf6 15%, transparent), color-mix(in srgb, #ec4899 10%, transparent))",
                                borderColor: "color-mix(in srgb, #8b5cf6 30%, transparent)",
                            }}
                        >
                            <Play className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-purple-text)" }}>
                                Entertainment & Media Solutions
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Create{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Immersive Digital Experiences
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            Build powerful streaming platforms, <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline">content management systems</Link>, and engaging
                            entertainment experiences that captivate audiences and drive subscriber growth.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3">
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
                                        <Icon className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                                        <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div
                                        className="text-3xl font-bold"
                                        style={{
                                            background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
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
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                                    boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
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
                        {/* Image Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "color-mix(in srgb, #8b5cf6 30%, var(--border-color))",
                                    background: "linear-gradient(135deg, color-mix(in srgb, #8b5cf6 8%, var(--card-bg)), color-mix(in srgb, #ec4899 5%, var(--card-bg)))",
                                }}
                            >
                                <Image
                                    src="/images/services-images/web-design-development/entertainment-media.svg"
                                    alt="Entertainment & Media Platform"
                                    fill
                                    className="object-cover p-8"
                                    priority
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #8b5cf6 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #8b5cf6, #7c3aed)" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            4K Streaming Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Adaptive bitrate delivery
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #ec4899 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #ec4899, #db2777)" }}
                                    >
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Higher User Engagement
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Personalized content
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Section - Below Image */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--brand-purple-text)" }}>
                                Platform Integrations
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["AWS Media", "Cloudflare", "Stripe", "Firebase", "Vimeo OTT"].map((partner, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, #8b5cf6 8%, transparent)",
                                            borderColor: "color-mix(in srgb, #8b5cf6 20%, transparent)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        {partner}
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
