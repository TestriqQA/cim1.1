import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, #8b5cf6, #ec4899, transparent)",
                    }}
                />
                {/* Floating particles */}
                <div
                    className="absolute top-20 left-20 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: "#8b5cf6", animationDelay: "0s" }}
                />
                <div
                    className="absolute top-40 right-32 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#ec4899", animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#7c3aed", animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-20 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#d946ef", animationDelay: "1.5s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative p-6 md:p-16 rounded-3xl border-2 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #8b5cf6 10%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #8b5cf6 40%, var(--border-color))",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                        }}
                    />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #8b5cf6 20%, transparent), color-mix(in srgb, #ec4899 15%, transparent))",
                                borderColor: "color-mix(in srgb, #8b5cf6 40%, transparent)",
                            }}
                        >
                            <Play className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-purple-text)" }}>
                                Ready to Create?
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Let&apos;s Build Your{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Next-Gen Platform
                            </span>
                        </h2>

                        <p
                            className="text-base md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Whether you&apos;re launching a <Link href="/services/social-media-marketing-services/video-marketing-agency" className="underline underline-offset-2 hover:underline">streaming service</Link>, podcast network, or
                            interactive media platform, we have the expertise to bring your vision to life.
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                                    boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold"
                                    style={{
                                        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    50+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Media Platforms
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold"
                                    style={{
                                        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    100M+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Content Views
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold"
                                    style={{
                                        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    High
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Uptime SLA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
