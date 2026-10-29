import {
    Zap,
    Shield,
    Globe,
    Smartphone,
    HeadphonesIcon,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";


export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Streaming Expertise",
            description:
                "Deep experience building video and audio streaming platforms with adaptive bitrate, low latency, and global reach.",
        },
        {
            icon: Shield,
            title: "Content Security",
            description:
                "Enterprise-grade DRM integration, secure token authentication, and content protection for your valuable media assets.",
        },
        {
            icon: Globe,
            title: "Global CDN",
            description:
                "Optimized content delivery networks ensuring buffer-free playback for users anywhere in the world.",
        },
        {
            icon: Smartphone,
            title: "Cross-Platform",
            description: <span>Seamless experience across web, <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">mobile apps</Link>, smart TVs, and gaming consoles with unified user profiles.</span>,
        },
        {
            icon: TrendingUp,
            title: "Monetization",
            description:
                "Proven subscription, ad-supported, and hybrid revenue models to maximize your platform's earning potential.",
        },
        {
            icon: HeadphonesIcon,
            title: "24/7 Support",
            description:
                "Round-the-clock technical support and monitoring to keep your entertainment platform running smoothly.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#8b5cf6" }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#ec4899" }}
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
                        <Zap className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Why Work With Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        The{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Entertainment
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We specialize in building entertainment platforms that engage audiences,
                        deliver content flawlessly, and generate sustainable revenue.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
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
                                    {reason.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
