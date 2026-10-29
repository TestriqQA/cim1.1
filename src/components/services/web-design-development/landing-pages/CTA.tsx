"use client";

import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Main CTA Card */}
                <div
                    className="relative rounded-3xl p-6 md:p-16 border text-center overflow-hidden"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Glow Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                            opacity: 0.1,
                            background: "linear-gradient(135deg, #10b981, #0ea5e9, #22c55e)",
                            filter: "blur(30px)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #10b981 8%, transparent), color-mix(in srgb, #0ea5e9 8%, transparent))",
                                borderColor: "color-mix(in srgb, #10b981 20%, transparent)",
                                color: "var(--accent-green-text)",
                            }}
                        >
                            <Target className="w-4 h-4" />
                            <span className="text-sm font-semibold">Maximize Your ROAS</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #10b981, #0ea5e9, #22c55e)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Stop Wasting Ad Spend.
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>Start Converting.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-xl max-w-3xl mx-auto mb-12" style={{ color: "var(--secondary-text)" }}>
                            Don't let clicks go to waste. We build high-velocity landing pages designed to turn your traffic into leads and sales.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm md:text-base font-bold bg-gradient-to-r from-[#10b981] to-[#0ea5e9] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get Your Landing Page
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>

                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm md:text-base font-bold border transition-all duration-300"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Free Page Audit
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Bottom Text */}
                        <p className="mt-8" style={{ color: "var(--secondary-text)", fontSize: "0.95rem" }}>
                            Standard turnaround: 3-5 days. Express delivery available.
                        </p>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            number: "300%",
                            label: "Avg. ROI Increase",
                        },
                        {
                            number: "500+",
                            label: "Pages Optimization",
                        },
                        {
                            number: "<1s",
                            label: "Avg. Load Time",
                        },
                    ].map((indicator, idx) => (
                        <div key={idx}>
                            <div
                                className="text-4xl font-bold mb-2"
                                style={{
                                    background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {indicator.number}
                            </div>
                            <p style={{ color: "var(--secondary-text)" }}>{indicator.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
