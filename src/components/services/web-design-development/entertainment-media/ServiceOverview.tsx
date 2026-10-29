import { Play, Zap, Shield, Globe, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: Play,
            title: "Streaming Excellence",
            description: <span>Build Netflix-quality streaming experiences with adaptive bitrate, <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">multi-device support</Link>, and seamless playback.</span>,
        },
        {
            icon: Zap,
            title: "Lightning Fast CDN",
            description: "Global content delivery with edge caching for instant load times and buffer-free streaming worldwide.",
        },
        {
            icon: Shield,
            title: "Content Protection",
            description: "Enterprise-grade DRM integration and secure content delivery to protect your valuable media assets.",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Multi-language support, regional content libraries, and geo-targeted distribution capabilities.",
        },
        {
            icon: Smartphone,
            title: "Cross-Platform",
            description: "Seamless experience across web, mobile, smart TVs, and gaming consoles with unified user profiles.",
        },
        {
            icon: BarChart3,
            title: "Deep Analytics",
            description: <span>Real-time viewer insights, engagement metrics, and <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:underline">AI-powered</Link> content recommendations.</span>,
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                        color: "#8b5cf6",
                    }}
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
                        <Play className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            What We Offer
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        End-to-End{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Entertainment
                        </span>{" "}
                        Solutions
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From concept to launch, we deliver complete digital entertainment platforms
                        that engage audiences and generate revenue.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                                        boxShadow: "0 4px 16px rgba(139, 92, 246, 0.3)",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {highlight.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
