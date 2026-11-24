"use client";

import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            <div className="container mx-auto px-4 relative z-10">
                {/* No tint, glow or border: the card sits on the page's own background. */}
                <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative">
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

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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
                                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                                style={{
                                    background: "linear-gradient(135deg, #0073AA, #0096D6)",
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
