"use client";

import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Glowing Orbs */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10"
                style={{ background: "#0678BE" }}
            />
            <div
                className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
                style={{ background: "#29A8DF" }}
            />

            <div className="max-w-4xl mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="p-6 md:p-12 rounded-3xl border text-center"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                        boxShadow: "0 20px 60px rgba(6, 120, 190, 0.1)",
                    }}
                >
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: "linear-gradient(135deg, rgba(41, 168, 223, 0.1), rgba(6, 120, 190, 0.1))",
                            border: "1px solid rgba(41, 168, 223, 0.3)",
                        }}
                    >
                        <Droplets className="w-4 h-4" style={{ color: "var(--accent-sky-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-sky-text)" }}>
                            Free Drupal Consultation
                        </span>
                    </div>

                    {/* Headline */}
                    <h2
                        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Build Powerful Digital Experiences with{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #0678BE, #29A8DF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Drupal CMS
                        </span>
                    </h2>

                    <p
                        className="text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Ready to build a secure, scalable, and accessible digital platform?
                        Let&apos;s discuss how Drupal can power your next project.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg text-white transition-all transform hover:scale-105 hover:shadow-xl"
                        style={{
                            background: "linear-gradient(135deg, #0678BE, #054A91)",
                            boxShadow: "0 4px 20px rgba(6, 120, 190, 0.3)",
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
