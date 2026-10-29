"use client";

import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Glowing Orbs */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10"
                style={{ background: "#4945FF" }}
            />
            <div
                className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
                style={{ background: "#7B79FF" }}
            />

            <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="p-6 md:p-12 rounded-3xl border text-center"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                        boxShadow: "0 20px 60px rgba(73, 69, 255, 0.1)",
                    }}
                >
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(123, 121, 255, 0.1), rgba(73, 69, 255, 0.1))",
                            border: "1px solid rgba(123, 121, 255, 0.3)",
                        }}
                    >
                        <Layers className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-indigo-text)" }}>
                            Free Strapi Consultation
                        </span>
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Go Headless with{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #4945FF, #7B79FF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Strapi
                        </span>
                    </h2>

                    <p
                        className="text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Ready to build a flexible, API-first content infrastructure?
                        Let&apos;s discuss how Strapi can power your next project.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl"
                        style={{
                            background: "linear-gradient(135deg, #4945FF, #2F2DC8)",
                            boxShadow: "0 4px 20px rgba(73, 69, 255, 0.3)",
                        }}
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
