"use client";

import { ArrowRight, ChevronRight, MapPin, Star, Building, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 15% 50%, rgba(245, 158, 11, 0.08), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(245, 158, 11, 0.05), transparent 25%),
                        radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.03), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${localAmber} 1px, transparent 1px), linear-gradient(90deg, ${localAmber} 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5); }
                    70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(245, 158, 11, 0); }
                    100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
                }
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-float-gentle {
                    animation: float-gentle 4s ease-in-out infinite;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/seo-services" className="hover:underline">SEO</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-amber-text)" }}>Local SEO</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: `${localAmber}30`,
                            }}
                        >
                            <MapPin className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-amber-text)" }}>
                                Dominate Local Search
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Dominate <Link href="/services/seo-services" className="hover:text-[var(--accent-amber-text)] transition-colors">Local Search</Link> & Attract{" "}
                            <span className="relative inline-block" style={{ color: "var(--accent-amber-text)" }}>
                                <Link href="/services/performance-marketing" className="hover:underline text-inherit">High-Intent Customers</Link>
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-50"
                                    style={{ color: localAmber }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                            in Your Area
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Rank in the top 3 Google Map Pack results and become visible to 83% of consumers searching for local businesses. Our local SEO services optimize your Google Business Profile, NAP consistency, and secure a top Map Pack spot.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Trusted by 500+ businesses across 15+ industries. We deliver a measurable increase in local search visibility and a boost in direction requests within 90 days.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                "Google Business Profile",
                                <Link href="/services/seo-services/technical-seo-services" className="hover:text-[var(--accent-amber-text)] transition-colors">Map Pack Rankings</Link>,
                                <Link href="/services/seo-services/link-building" className="hover:text-[var(--accent-amber-text)] transition-colors">Citation Building</Link>,
                                "Review Generation",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: `${localAmber}30`
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: localAmber }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: "#b45309" }}
                            >
                                Get Your Free Local SEO Audit
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)"
                                }}
                            >
                                How It Works
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent-amber-text)" }}>Top</h2>
                                <p className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>Map Pack Spot</p>
                                <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>Most in top 3</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent-amber-text)" }}>More</h2>
                                <p className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>Local Calls</p>
                                <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>Avg increase</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent-amber-text)" }}>500+</h2>
                                <p className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>Businesses</p>
                                <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>15+ industries</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent-amber-text)" }}>Strong</h2>
                                <p className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>Review Growth</p>
                                <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>5-star increase</p>
                            </div>
                            <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent-amber-text)" }}>High</h2>
                                <p className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>Retention</p>
                                <p className="text-xs mt-1" style={{ color: "var(--secondary-text)" }}>Community-focused</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500 mt-15">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle"
                                style={{
                                    borderColor: `${localAmber}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${localAmber}10`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-[90%] h-[90%] relative flex items-center justify-center">
                                    <Image
                                        src="/images/techstack_logos/local-seo-hero-image.svg"
                                        alt="Local SEO"
                                        width={450}
                                        height={450}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20 border-dashed animate-[spin_20s_linear_infinite]"
                                    style={{ borderColor: localAmber }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: localAmber }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${localAmber}15` }}
                                    >
                                        <Star className="w-6 h-6" style={{ color: localAmber }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            5-Star Reviews
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Reputation Mgt
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${localAmber}15` }}
                                    >
                                        <Building className="w-6 h-6" style={{ color: localAmber }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Local Reach
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Community Focused
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                borderColor: "var(--border-color)",
                                backgroundColor: "var(--card-bg)"
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                                Platforms We Optimize
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Google Maps", "Apple Maps", "Bing Places", "Yelp", "Facebook", "Nextdoor"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${localAmber}30`,
                                            backgroundColor: "var(--background)",
                                            color: "var(--secondary-text)"
                                        }}
                                    >
                                        {format}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
