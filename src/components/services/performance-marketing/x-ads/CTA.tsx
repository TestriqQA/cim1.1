"use client";

import { ArrowRight, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
    const xBlack = "#000000";

    return (
        <section className="py-24 relative overflow-hidden border-t border-gray-400 dark:border-gray-800" style={{ backgroundColor: "var(--background)" }}>
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[120px] opacity-10 bg-gray-400 dark:bg-white"
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10 text-center">
                <div
                    className="relative rounded-3xl overflow-hidden border p-8 md:p-20 backdrop-blur-md group hover:border-blue-500/50 transition-colors duration-500"
                    style={{
                        borderColor: "var(--border-color)",
                        backgroundColor: "var(--card-bg)"
                    }}
                >
                    <div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 border shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        style={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Image
                            src="/images/techstack_logos/X-logo-hero-image.png"
                            alt="X Logo"
                            width={40}
                            height={40}
                            className="object-contain dark:invert"
                        />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Start the Conversation
                    </h2>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--secondary-text)" }}>
                        Join the world's most influential audience. Launch your X Ads campaign today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg bg-black text-white dark:bg-white dark:text-black transition-all transform hover:scale-105 shadow-lg"
                        >
                            Launch Campaign
                            <ArrowRight className="w-5 h-5 flex-shrink-0 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
