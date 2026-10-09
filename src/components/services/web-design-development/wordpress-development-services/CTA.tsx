"use client";

import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Glowing Orbs */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10"
                style={{ background: "#0073AA" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    className="max-w-4xl mx-auto rounded-[2.5rem] p-6 md:p-16 text-center border overflow-hidden relative"
                    style={{
                        background: "linear-gradient(135deg, rgba(0, 115, 170, 0.05), rgba(0, 150, 214, 0.05))",
                        borderColor: "rgba(0, 115, 170, 0.2)",
                    }}
                >
                    <div className="relative z-10">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
                            style={{
                                backgroundColor: "rgba(0, 115, 170, 0.1)",
                                borderColor: "rgba(0, 115, 170, 0.2)",
                            }}
                        >
                            <Globe className="w-4 h-4 text-[var(--brand-blue-text)]" />
                            <span className="text-sm font-semibold text-[var(--brand-blue-text)]">
                                Free WordPress Consultation
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span style={{ color: "var(--foreground)" }}>Ready to </span>{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Scale Your Business?
                            </span>
                        </h2>

                        <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            Don&apos;t settle for &quot;good enough.&quot; Book Your Free WordPress Audit Today and see how our WordPress website development agency can transform your digital ROI.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: "linear-gradient(135deg, #0073AA, #0096D6)",
                                    boxShadow: "0 8px 30px rgba(0, 115, 170, 0.2)",
                                }}
                            >
                                Get a Quick Quote
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
