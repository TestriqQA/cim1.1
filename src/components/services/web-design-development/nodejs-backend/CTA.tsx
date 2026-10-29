"use client";

import { ArrowRight, Server } from "lucide-react";
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
                        background: "radial-gradient(circle, #339933, #215732, transparent)",
                    }}
                />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#339933 1px, transparent 1px), linear-gradient(90deg, #339933 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
                {/* Floating elements */}
                <div
                    className="absolute top-20 left-20 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: "#339933", animationDelay: "0s" }}
                />
                <div
                    className="absolute top-40 right-32 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#68a063", animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#215732", animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-20 w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: "#339933", animationDelay: "1.5s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative p-6 md:p-16 rounded-3xl border-2 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg), color-mix(in srgb, #339933 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #339933 40%, var(--border-color))",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background: "linear-gradient(135deg, #339933, #215732)",
                        }}
                    />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #339933 15%, transparent), color-mix(in srgb, #68a063 10%, transparent))",
                                borderColor: "color-mix(in srgb, #339933 40%, transparent)",
                            }}
                        >
                            <Server className="w-4 h-4" style={{ color: "#339933" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-green-text)" }}>
                                Free Consultation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Ready to{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #339933, #68a063)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                <Link href="/services/web-design-development/saas-development-services" className="hover:underline decoration-[#339933] underline-offset-4">
                                    Scale Your Backend
                                </Link>
                            </span>
                            ?
                        </h2>

                        <p
                            className="text-base md:text-xl mb-10 leading-relaxed"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Whether you&apos;re building from scratch or scaling existing systems,
                            let&apos;s discuss how we can help power your application.
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center justify-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #339933, #215732)",
                                    color: "#ffffff",
                                    boxShadow: "0 8px 32px rgba(51, 153, 51, 0.4)",
                                }}
                            >
                                Start Your Backend Project
                                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #339933, #68a063)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    500+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    APIs Deployed
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
                                        background: "linear-gradient(135deg, #339933, #68a063)",
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
                            <div
                                className="w-px h-8"
                                style={{ backgroundColor: "var(--border-color)" }}
                            />
                            <div className="text-center">
                                <div
                                    className="text-2xl font-bold font-mono"
                                    style={{
                                        background: "linear-gradient(135deg, #339933, #68a063)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    10M+
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Daily Requests
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
