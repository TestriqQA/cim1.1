"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const youtubeRed = "#FF0000";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
                    style={{ backgroundColor: youtubeRed }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10 text-center">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20"
                    style={{
                        background: `linear-gradient(135deg, ${youtubeRed}05, var(--background))`,
                        borderColor: "var(--border-color)"
                    }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white mb-8 shadow-lg animate-pulse">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Ready to Start{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>Recording?</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Let's create video campaigns that drive real growth. Schedule your strategy session today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl"
                            style={{
                                backgroundColor: "#c5221f",
                                boxShadow: `0 4px 20px ${youtubeRed}40`
                            }}
                        >
                            Get Your Proposal
                            <ArrowRight className="w-5 h-5 flex-shrink-0 md:w-6 md:h-6 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
