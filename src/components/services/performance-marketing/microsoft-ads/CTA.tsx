"use client";

import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const msBlue = "#0078D4";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-5"
                    style={{ backgroundColor: msBlue }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10 text-center">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20"
                    style={{
                        background: `linear-gradient(135deg, ${msBlue}10, transparent)`,
                        borderColor: "var(--border-color)"
                    }}
                >
                    <div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-lg rotate-12 hover:rotate-0 transition-transform duration-300"
                        style={{ backgroundColor: msBlue, color: "white" }}
                    >
                        <Zap className="w-10 h-10" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Ready to <span style={{ color: "var(--brand-blue-text)" }}>Expand Reach?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Tap into new audiences and lower your acquisition costs with Microsoft Ads.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl group"
                            style={{
                                backgroundColor: msBlue,
                                boxShadow: `0 4px 15px ${msBlue}40`
                            }}
                        >
                            Launch Campaign
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
