"use client";

import { ArrowRight, Settings } from "lucide-react";
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
                    style={{
                        background: "radial-gradient(circle, #9333ea, #c084fc, transparent)",
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#9333ea 1px, transparent 1px), linear-gradient(90deg, #9333ea 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
                {/* Floating elements */}
                <div
                    className="absolute top-20 left-20 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: "#9333ea", animationDelay: "0s" }}
                />
                <div
                    className="absolute top-40 right-32 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#a855f7", animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#c084fc", animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-20 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#9333ea", animationDelay: "1.5s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative p-6 md:p-16 rounded-3xl border-2 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #9333ea 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #9333ea 40%, var(--border-color))",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: "linear-gradient(135deg, #9333ea, #c084fc)",
                        }}
                    />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #9333ea 15%, transparent), color-mix(in srgb, #a855f7 10%, transparent))",
                                borderColor: "color-mix(in srgb, #9333ea 40%, transparent)",
                            }}
                        >
                            <Settings className="w-4 h-4" style={{ color: "#9333ea" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                                CMS Consultation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Transform Your{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Content Strategy
                            </span>
                        </h2>

                        <p
                            className="text-base md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Whether you need a headless CMS for omnichannel delivery or a traditional
                            platform for your content team, we&apos;ll help you choose and implement the perfect solution.
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #9333ea, #a855f7)",
                                    color: "#ffffff",
                                    boxShadow: "0 8px 32px rgba(147, 51, 234, 0.4)",
                                }}
                            >
                                Schedule CMS Consultation
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    50+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    CMS Projects
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    10+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    CMS Platforms
                                </div>
                            </div>
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #9333ea, #c084fc)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    High
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Uptime
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
