"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function CTA() {
    const linkedinBlue = "#0A66C2";

    const benefits = [
        "Free LinkedIn audit",
        "Custom B2B strategy",
        "No long-term contracts",
        "ROI-focused",
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${linkedinBlue}15, transparent 70%)`,
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        backgroundColor: linkedinBlue,
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
                                <Linkedin className="w-4 h-4 text-white" />
                                <Link href="/about" className="text-sm font-medium text-white hover:underline decoration-white/50">
                                    B2B Marketing Experts
                                </Link>
                            </div>

                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Scale Your{" "}
                                <span className="text-white/80">B2B Revenue?</span>
                            </h2>

                            <p className="text-base md:text-lg text-white mb-8 max-w-xl mx-auto lg:mx-0">
                                Stop guessing and start growing. Get a 100% free LinkedIn ads audit and strategy session today.
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
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                    style={{
                                        backgroundColor: linkedinBlue,
                                        boxShadow: `0 4px 20px ${linkedinBlue}40`
                                    }}
                                >
                                    Get My Free LinkedIn Audit Now
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">1B+</div>
                                <div className="text-xs sm:text-sm text-white">Professionals</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">More</div>
                                <div className="text-xs sm:text-sm text-white">B2B Leads</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Higher</div>
                                <div className="text-xs sm:text-sm text-white">Conversion Rate</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Higher</div>
                                <div className="text-xs sm:text-sm text-white">Lead Quality</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
