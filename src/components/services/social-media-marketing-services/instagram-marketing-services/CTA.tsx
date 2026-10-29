"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Instagram } from "lucide-react";

export default function CTA() {
    const benefits = [
        "Free Instagram Audit & Growth Plan",
        "Expert 2026 Strategy",
        "ROI-Focused Management",
        "High-Retention Reels Production",
    ];

    const instaGradient = "linear-gradient(135deg, #E1306C, #C13584, #833AB4)";

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(225, 48, 108, 0.1), transparent 70%)",
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #E1306C, #C13584, #833AB4)",
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: "white" }} />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: "white" }} />
                        {/* Grid pattern */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                                <Instagram className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                                    Instagram Experts
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Dominate{" "}
                                <span className="text-white/80">the Feed?</span>
                            </h2>

                            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                                Don't let your brand get lost in the scroll. Partner with an <Link href="/about" className="text-white underline underline-offset-2 decoration-white/50">Instagram Marketing Company</Link> that knows how to turn views into value.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-white/80" />
                                        <span className="text-sm text-white">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 rounded-full font-bold text-sm sm:text-base text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                    style={{
                                        background: instaGradient,
                                        boxShadow: "0 4px 20px rgba(225, 48, 108, 0.4)"
                                    }}
                                >
                                    CLAIM YOUR FREE INSTAGRAM AUDIT & GROWTH PLAN
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">2B+</div>
                                <div className="text-xs sm:text-sm text-white/70">Monthly Users</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Strong</div>
                                <div className="text-xs sm:text-sm text-white/70">Avg. Growth</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Strong</div>
                                <div className="text-xs sm:text-sm text-white/70">Engagement Boost</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">High</div>
                                <div className="text-xs sm:text-sm text-white/70">Discovery Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
