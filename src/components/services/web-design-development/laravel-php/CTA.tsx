"use client";

import { ArrowRight, Server } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            <div className="container mx-auto px-4 relative z-10">
                {/* No tint, glow or border: the card sits on the page's own
                    background. Side padding kept, top/bottom padding dropped. */}
                <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative">
                    <div className="relative z-10">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                backgroundColor: "rgba(255, 45, 32, 0.1)",
                                borderColor: "rgba(255, 45, 32, 0.2)",
                            }}
                        >
                            <Server className="w-4 h-4 text-[var(--accent-red-text)]" />
                            <span className="text-sm font-semibold text-[var(--accent-red-text)]">
                                Free Consultation
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span style={{ color: "var(--foreground)" }}>Build Your Next </span>{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Big Idea
                            </span>
                        </h2>

                        <p className="text-base md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Whether you need a custom web application, a SaaS platform, or an enterprise portal,
                            our Laravel experts are ready to bring your vision to life.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #E0261A, #C92218)",
                                }}
                            >
                                Schedule a Call
                                <ArrowRight className="w-5 h-5 flex-shrink-0 ml-2" aria-hidden="true" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
