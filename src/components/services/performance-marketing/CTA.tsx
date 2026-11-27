"use client";

import { Target, ArrowRight, Phone, ClipboardCheck } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const stats = [
        { value: "Large-Scale", label: "Ad Spend Managed" },
        { value: "Strong", label: "Avg. ROAS" },
        { value: "Proven", label: "Successful Campaigns" },
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            {/* Background Decorations */}

            <div className="mx-auto px-6 md:px-12 xl:px-20 max-w-5xl relative z-10">
                <div
                    className="text-center px-6 py-6 sm:px-10 sm:py-8 md:px-16 md:py-10 rounded-2xl sm:rounded-3xl border relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-orange) 10%, var(--card-bg)), var(--card-bg))",
                        borderColor: "color-mix(in srgb, var(--brand-orange) 30%, var(--border-color))",
                    }}
                >
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-3xl" style={{ borderColor: "var(--brand-orange)" }} />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-3xl" style={{ borderColor: "var(--brand-orange)" }} />

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full border"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 15%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <ClipboardCheck className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-orange-text)" }}>Free Audit</span>
                    </div>

                    {/* Icon */}
                    <Target className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--brand-orange)" }} />

                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3">
                        Ready to <span style={{ color: "var(--accent-orange-text)" }}>Maximize Your ROI</span>?
                    </h2>
                    <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Get a free performance audit and discover how much more your ad budget could achieve.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-7">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-black" style={{ color: "var(--accent-orange-text)" }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg text-sm sm:text-base md:text-lg"
                            style={{ backgroundColor: "#c2410c" }}
                        >
                            Get Your Proposal
                            <ArrowRight className="w-5 h-5 flex-shrink-0" />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full border-2 font-semibold hover:scale-105 transition-transform text-sm sm:text-base md:text-lg"
                            style={{ borderColor: "var(--brand-orange)", color: "var(--accent-orange-text)" }}
                        >
                            <Phone className="w-5 h-5 flex-shrink-0" />
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
