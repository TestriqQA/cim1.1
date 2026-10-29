"use client";

import { ArrowRight, Link2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[500px] opacity-10"
                    style={{
                        background: `radial-gradient(ellipse at bottom, ${linkCyan}, transparent 70%)`
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20 text-center"
                    style={{
                        background: "linear-gradient(180deg, var(--card-bg) 0%, var(--background) 100%)",
                        borderColor: "var(--border-color)"
                    }}
                >
                    <div className="absolute top-10 left-10 opacity-5 animate-bounce delay-1000 duration-[3000ms]">
                        <Link2 className="w-16 h-16" style={{ color: linkCyan }} />
                    </div>
                    <div className="absolute bottom-10 right-10 opacity-5 animate-bounce delay-500 duration-[4000ms]">
                        <Link2 className="w-24 h-24" style={{ color: linkCyan }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Build <br />
                        <span style={{ color: "var(--accent-cyan-text)" }}>Authority?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Stop struggling to get quality backlinks. Let our experts build your authority with proven, white-hat strategies.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${linkCyan}, #3b82f6)`,
                                boxShadow: `0 4px 20px ${linkCyan}40`
                            }}
                        >
                            Get Free Link Audit
                            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
