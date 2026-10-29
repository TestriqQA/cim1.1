"use client";

import { ArrowRight, Server } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Glowing Orbs */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10"
                style={{ background: "#FF2D20" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    className="max-w-4xl mx-auto rounded-[2.5rem] p-6 md:p-16 text-center border overflow-hidden relative"
                    style={{
                        background: "linear-gradient(135deg, rgba(255, 45, 32, 0.05), rgba(240, 83, 64, 0.05))",
                        borderColor: "rgba(255, 45, 32, 0.2)",
                    }}
                >
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

                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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
                                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: "linear-gradient(135deg, #FF2D20, #F05340)",
                                    boxShadow: "0 8px 30px rgba(255, 45, 32, 0.2)",
                                }}
                            >
                                Schedule a Call
                                <ArrowRight className="w-5 h-5 flex-shrink-0 ml-2" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
