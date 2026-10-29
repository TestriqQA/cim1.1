"use client";

import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // Google Ads brand colors
    const googleBlue = "#4285f4";
    const googleGreen = "#34a853";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[500px] opacity-10"
                    style={{
                        background: `radial-gradient(ellipse at bottom, ${googleBlue}, transparent 70%)`
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20 text-center"
                    style={{
                        background: "linear-gradient(180deg, var(--background) 0%, var(--card-bg) 100%)",
                        borderColor: "var(--border-color)"
                    }}
                >
                    {/* Decorative Icons */}
                    <div className="absolute top-10 left-10 opacity-5 animate-bounce" style={{ animationDuration: "3s" }}>
                        <Search className="w-16 h-16" style={{ color: googleBlue }} />
                    </div>
                    <div className="absolute bottom-10 right-10 opacity-5 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
                        <Search className="w-24 h-24" style={{ color: googleGreen }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Grow with <br />
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${googleBlue}, ${googleGreen})` }}
                        >
                            Google Ads?
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Get a free account audit and discover how we can improve your ROAS by 50% or more.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${googleBlue}, ${googleGreen})`,
                                boxShadow: `0 4px 20px ${googleBlue}40`
                            }}
                        >
                            Get Free Audit
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {["Google Premier Partner", "Certified Experts", "Scaled Ad Spend"].map((badge, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full text-sm font-medium border"
                                style={{
                                    borderColor: `${googleBlue}30`,
                                    backgroundColor: `${googleBlue}10`,
                                    color: "var(--brand-blue-text)",
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
