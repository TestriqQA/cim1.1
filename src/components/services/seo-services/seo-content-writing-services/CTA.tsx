"use client";

import { ArrowRight, PenTool } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // Content SEO Emerald theme color
    const contentEmerald = "#10b981";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            {/* Background Gradient */}
            <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-16 text-center"
                    style={{
                        background: "linear-gradient(135deg, var(--card-bg) 0%, var(--background) 100%)",
                        borderColor: "var(--border-color)"
                    }}
                >
                    {/* Decorative icons */}
                    <div className="absolute top-8 left-8 opacity-5">
                        <PenTool className="w-24 h-24" style={{ color: contentEmerald }} />
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-5">
                        <PenTool className="w-32 h-32" style={{ color: contentEmerald }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Scale Your <br />
                        <span style={{ color: "var(--accent-green-text)" }}>Organic Growth?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Don't let your competitors own the first page. Partner with the best <Link href="/about" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">SEO content agency</Link> for startups and enterprises today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: "#15803d",
                                boxShadow: `0 4px 20px ${contentEmerald}40`
                            }}
                        >
                            <span className="text-center">Book Your Free Content Strategy Audit Today</span>
                            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg border transition-all hover:bg-accent"
                            style={{
                                borderColor: "var(--border-color)",
                                color: "var(--foreground)"
                            }}
                        >
                            Hire an SEO Content Expert
                        </Link>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-16 pt-8 border-t flex flex-wrap justify-center gap-12 md:gap-24" style={{ borderColor: "var(--border-color)" }}>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Strong</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Content ROI in 12 Months</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>100%</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Original, Human-Verified Content</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Free</p>
                            <p className="text-sm uppercase tracking-widest" style={{ color: "var(--secondary-text)" }}>Website Content Health Audit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
