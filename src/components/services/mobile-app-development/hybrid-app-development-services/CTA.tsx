"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";

export default function CTA() {
    const benefits = [
        "Free project consultation",
        "Hybrid vs native assessment",
        "Cost & time estimate",
        "Post-launch support included",
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background gradient */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.1), transparent 70%)",
                }}
            />

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="relative rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
                            style={{ background: "#48cae4" }}
                        />
                        <div
                            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20"
                            style={{ background: "#48cae4" }}
                        />
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
                                <Globe className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">
                                    Web Skills, Native Apps
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Build{" "}
                                <span className="text-[#48cae4]">Hybrid?</span>
                            </h2>

                            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
                                Let&apos;s discuss if hybrid development is the right fit for your project.
                                We&apos;ll help you make the best technology choice.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#48cae4]" />
                                        <span className="text-sm text-white">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 md:px-10 md:py-5 bg-white text-[#155e75] rounded-full font-bold text-sm sm:text-base md:text-lg transition-all hover:shadow-lg hover:scale-105"
                                >
                                    Get Free Consultation
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">120+</div>
                                <div className="text-xs sm:text-sm text-white/70">Hybrid Apps Built</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Faster</div>
                                <div className="text-xs sm:text-sm text-white/70">Faster Delivery</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Lower</div>
                                <div className="text-xs sm:text-sm text-white/70">Cost Reduction</div>
                            </div>
                            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm text-center">
                                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">Faster</div>
                                <div className="text-xs sm:text-sm text-white/70">Faster Updates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
