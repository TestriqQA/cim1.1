"use client";

import { Sparkles, Users, ArrowRight, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import CareersHeroAnimation from "./CareersHeroAnimation";

export default function Hero() {
    const scrollToPositions = () => {
        const target = document.querySelector('[data-scroll-target="open-positions"]');
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-[50vh] pt-6 lg:pt-8 pb-12 lg:pb-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#008ac1 1px, transparent 1px), linear-gradient(90deg, #008ac1 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-16 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column: Content */}
                    <div className="text-center lg:text-left pt-10 lg:pt-0">
                        {/* Breadcrumbs */}
                        <nav
                            className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm mb-5 justify-center lg:justify-start"
                            aria-label="Breadcrumb"
                        >
                            <Link
                                href="/"
                                className="flex items-center gap-1 hover:underline transition-colors p-2"
                                style={{ color: "var(--secondary-text)" }}
                            >
                                <Home className="w-4 h-4" />
                                Home
                            </Link>

                            <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                            <span
                                className="font-semibold p-2"
                                style={{ color: "var(--brand-blue)" }}
                            >
                                Careers
                            </span>
                        </nav>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors mx-auto lg:mx-0"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-cyan) 5%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-blue) 30%, transparent)",
                            }}
                        >
                            <Users className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue)" }}>Join Our Team</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                            Build the Future of <br className="hidden md:block" />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan), var(--brand-teal))", WebkitBackgroundClip: "text", color: "transparent",
                                }}
                            >
                                Digital Growth
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--secondary-text)] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            At Cinute InfoMedia, we are not just building software; we are architects of growth ecosystems. Join us to solve complex problems and make a real impact.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToPositions}
                                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                                style={{ background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))" }}
                            >
                                View Open Roles
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link
                                href="/about"
                                className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 border hover:bg-[var(--card-bg)]"
                                style={{ color: "var(--foreground)", borderColor: "var(--border-color)" }}
                            >
                                Learn About Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Animation */}
                    <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                        <CareersHeroAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
}
