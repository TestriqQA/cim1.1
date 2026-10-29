"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // TikTok brand colors
    const tiktokPink = "#ff0050";
    const tiktokCyan = "#00f2ea";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
                    style={{ backgroundColor: tiktokPink }}
                />
                <div
                    className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
                    style={{ backgroundColor: tiktokCyan }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20 text-center"
                    style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${tiktokPink} 5%, var(--background)), var(--background), color-mix(in srgb, ${tiktokCyan} 5%, var(--background)))`,
                        borderColor: "var(--border-color)"
                    }}
                >
                    {/* Decorative icons */}
                    <div className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: "2s" }}>
                        <Sparkles className="w-8 h-8 opacity-20" style={{ color: tiktokPink }} />
                    </div>
                    <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                        <Play className="w-10 h-10 opacity-20" style={{ color: tiktokCyan }} />
                    </div>
                    <div className="absolute top-1/2 right-20 animate-pulse">
                        <Sparkles className="w-6 h-6 opacity-15" style={{ color: tiktokPink }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Go{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})` }}
                        >
                            Viral?
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Get a free TikTok Ads audit and discover how to reach 1B+ users with engaging video content.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${tiktokPink}, ${tiktokCyan})`,
                                boxShadow: `0 4px 20px ${tiktokPink}40`
                            }}
                        >
                            Get Free Audit
                            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {["TikTok Partner", "High Video Output", "High View Volume"].map((badge, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full text-sm font-medium border"
                                style={{
                                    borderColor: `${tiktokPink}30`,
                                    backgroundColor: `${tiktokPink}10`,
                                    color: "var(--accent-pink-text)",
                                }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
