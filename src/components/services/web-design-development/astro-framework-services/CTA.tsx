"use client";

import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Glowing Orbs */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10"
                style={{ background: "#7C3AED" }}
            />
            <div
                className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
                style={{ background: "#FF5D01" }}
            />

            <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="p-6 md:p-12 rounded-3xl border text-center"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                        boxShadow: "0 20px 60px rgba(124, 58, 237, 0.1)",
                    }}
                >
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(255, 93, 1, 0.1), rgba(255, 133, 52, 0.1))",
                            border: "1px solid rgba(255, 93, 1, 0.3)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "var(--accent-orange-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-violet-text)" }}>
                            Free Astro Consultation
                        </span>
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Build Lightning Fast with{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Astro Framework
                        </span>
                    </h2>

                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Ready to create a website that loads instantly and ranks higher? Our Astro development agency delivers near-perfect PageSpeed scores, SEO-first architecture, and 24/7 technical support.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm md:text-base font-medium" style={{ color: "var(--foreground)" }}>
                        <span>✓ Performance-Optimized</span>
                        <span>✓ Expert Migration Support</span>
                        <span>✓ Headless CMS Integration</span>
                    </div>

                    <div className="mb-8 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-dashed border-border">
                        <p className="text-sm font-semibold mb-2" style={{ color: "var(--accent-violet-text)" }}>GET IN TOUCH TODAY</p>
                        <p className="text-base" style={{ color: "var(--foreground)" }}>
                            Email: contact@cinuteinfomedia.com | Phone: +91 9004988859, +91 7700995410
                        </p>
                        <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>
                            Office Hours: Mon-Fri, 9 AM - 6 PM
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl"
                        style={{
                            background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                            boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
                        }}
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
