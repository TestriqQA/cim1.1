"use client";

import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // LinkedIn brand color
    const linkedInBlue = "#0a66c2";
    const linkedInDark = "#004182";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--card-bg)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
                    style={{ backgroundColor: linkedInBlue }}
                />
                <div
                    className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-8"
                    style={{ backgroundColor: linkedInDark }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20 text-center"
                    style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${linkedInBlue} 5%, var(--background)), var(--background))`,
                        borderColor: "var(--border-color)"
                    }}
                >
                    {/* Decorative icons */}
                    <div className="absolute top-10 left-10 opacity-5">
                        <Briefcase className="w-20 h-20" style={{ color: "var(--brand-blue-text)" }} />
                    </div>
                    <div className="absolute bottom-10 right-10 opacity-5">
                        <Briefcase className="w-28 h-28" style={{ color: "var(--brand-blue-text)" }} />
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        Ready to Reach <br />
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${linkedInBlue}, ${linkedInDark})` }}
                        >
                            Decision-Makers?
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Get a free LinkedIn Ads audit and discover untapped opportunities for B2B growth.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${linkedInBlue}, ${linkedInDark})`,
                                boxShadow: `0 4px 20px ${linkedInBlue}40`
                            }}
                        >
                            Get Free Audit
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {["LinkedIn Partner", "B2B Specialists", "100+ Enterprise Clients"].map((badge, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full text-sm font-medium border"
                                style={{
                                    borderColor: `${linkedInBlue}30`,
                                    backgroundColor: `${linkedInBlue}10`,
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
