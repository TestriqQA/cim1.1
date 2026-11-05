"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-12 md:py-16" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 xl:px-20">
                <div
                    className="relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-12"
                    style={{
                        // Darkened from var(--brand-purple) -> var(--brand-cyan)
                        // (#bc3feb -> #00efd6), which read as glaring at panel size
                        // and gave white text only 1.47:1 at the cyan end. These
                        // two give 6.0:1 and 4.7:1.
                        background: "linear-gradient(135deg, #9632bc, #008376)",
                    }}
                >
                    {/* Background decorations */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                    />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-5">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold text-white">Ready to Get Started?</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4" style={{ lineHeight: 1.2 }}>
                            Let&apos;s Build Something{" "}
                            <span className="text-white/90 underline decoration-white/30 decoration-wavy underline-offset-4">
                                Amazing
                            </span>{" "}
                            Together
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-white/80 mb-6 max-w-xl mx-auto" style={{ lineHeight: 1.6 }}>
                            Transform your digital presence with our expert team. From concept to launch, we&apos;re with you every step of the way.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[#a21caf] bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
                            >
                                Learn More About Us
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
                            <a
                                href="tel:+919004988859"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                +91 9004988859
                            </a>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
                            <a
                                href="mailto:contact@cinuteinfomedia.com"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                contact@cinuteinfomedia.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
