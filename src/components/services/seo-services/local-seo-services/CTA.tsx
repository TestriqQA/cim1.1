"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    return (
        <section className="py-24 relative overflow-hidden border-t" style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[500px] opacity-10"
                    style={{
                        background: `radial-gradient(ellipse at bottom, ${localAmber}, transparent 70%)`
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
                    <div className="absolute top-10 left-10 opacity-5 animate-bounce delay-1000 duration-[3000ms]">
                        <MapPin className="w-16 h-16" style={{ color: localAmber }} />
                    </div>
                    <div className="absolute bottom-10 right-10 opacity-5 animate-bounce delay-500 duration-[4000ms]">
                        <MapPin className="w-24 h-24" style={{ color: localAmber }} />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
                        GET FOUND ON THE <br />
                        <span style={{ color: "var(--accent-amber-text)" }}>FIRST PAGE</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Stop losing customers to <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)] transition-colors">competitors</Link> who rank higher. 83% of local searches lead to in-store visits within 24 hours. If you're not in the top 3 Google Map Pack results, you're handing high-intent customers to competitors on a silver platter.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: "#b45309",
                                boxShadow: `0 4px 20px ${localAmber}40`
                            }}
                        >
                            Claim Your Free Local SEO Audit Now
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
