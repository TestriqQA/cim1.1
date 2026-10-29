"use client";

import Link from "next/link";
import Image from "next/image";
import { Target, ArrowRight, ChevronRight, TrendingUp, DollarSign, Users, Zap, CheckCircle2 } from "lucide-react";

export default function Hero() {
    // Meta brand colors
    const metaBlue = "#1877f2";
    const metaPurple = "#8b5cf6";

    const features = [
        <Link href="/services/social-media-marketing-services/facebook-marketing-services" className="hover:text-[var(--brand-blue-text)] transition-colors">Facebook Ads</Link>,
        <Link href="/services/social-media-marketing-services/instagram-marketing-services" className="hover:text-[var(--accent-pink-text)] transition-colors">Instagram Ads</Link>,
        "Messenger Ads",
        "Audience Network",
    ];

    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background - Meta gradient style */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated gradient mesh */}
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    style={{
                        background: `
                            radial-gradient(ellipse at 20% 30%, ${metaBlue} 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 70%, ${metaPurple} 0%, transparent 50%)
                        `,
                    }}
                />

                {/* Floating circles - Meta infinity-inspired */}
                <div
                    className="absolute top-20 right-[20%] w-32 h-32 rounded-full border-2 opacity-20 animate-pulse"
                    style={{ borderColor: metaBlue }}
                />
                <div
                    className="absolute bottom-40 left-[15%] w-24 h-24 rounded-full border-2 opacity-15 animate-pulse"
                    style={{ borderColor: metaPurple, animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 right-[10%] w-16 h-16 rounded-full opacity-20 animate-bounce"
                    style={{ backgroundColor: metaBlue, animationDuration: "3s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/performance-marketing" className="hover:underline">Performance Marketing</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--brand-blue-text)" }}>Meta Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
                            style={{
                                backgroundColor: `${metaBlue}10`,
                                borderColor: `${metaBlue}30`,
                            }}
                        >
                            <Target className="w-4 h-4" style={{ color: metaBlue }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--brand-blue-text)" }}>
                                Meta Business Partner
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                            Reach 3 Billion Users with{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${metaBlue}, ${metaPurple})`,
                                }}
                            >
                                Meta Ads
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0" style={{ color: "var(--secondary-text)" }}>
                            Leverage Facebook, Instagram, and Messenger to connect with your ideal customers. Our data-driven strategies deliver exceptional ROAS.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                                    style={{
                                        borderColor: "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                    }}
                                >
                                    <CheckCircle2 className="w-4 h-4" style={{ color: metaBlue }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-white transition-all transform hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${metaBlue}, ${metaPurple})`,
                                    boxShadow: `0 4px 20px ${metaBlue}40`,
                                }}
                            >
                                Get Free Audit
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                }}
                            >
                                Our Process
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Hero Image & Stats */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center"
                                style={{
                                    borderColor: `${metaBlue}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 80px ${metaBlue}15`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative p-12">
                                    <Image
                                        src="/images/performance-marketing-logos/meta-ads-logo.png"
                                        alt="Meta Ads"
                                        fill
                                        className="object-contain p-8"
                                    />
                                </div>

                                {/* Rotating ring animation */}
                                <div
                                    className="absolute w-80 h-80 rounded-full border-2 border-dashed opacity-20 animate-[spin_30s_linear_infinite]"
                                    style={{ borderColor: metaBlue }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10 animate-[spin_40s_linear_infinite_reverse]"
                                    style={{ borderColor: metaPurple }}
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
                                        style={{ backgroundColor: `${metaBlue}15` }}
                                    >
                                        <Users className="w-6 h-6" style={{ color: metaBlue }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            3B+ Users
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Global Reach
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
                                        style={{ backgroundColor: `${metaPurple}15` }}
                                    >
                                        <TrendingUp className="w-6 h-6" style={{ color: metaPurple }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Strong ROAS
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Avg. Return
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
                                Platforms We Manage
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { name: "Facebook", url: "/services/social-media-marketing-services/facebook-marketing-services" },
                                    { name: "Instagram", url: "/services/social-media-marketing-services/instagram-marketing-services" },
                                    { name: "Messenger", url: null },
                                    { name: "WhatsApp", url: null },
                                    { name: "Audience Network", url: null },
                                    { name: "Threads", url: null }
                                ].map((platform, idx) => (
                                    platform.url ? (
                                        <Link
                                            key={idx}
                                            href={platform.url}
                                            className="px-3 py-1.5 rounded-full text-xs font-medium border hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                                            style={{
                                                borderColor: `${metaBlue}30`,
                                                backgroundColor: "var(--background)",
                                                color: "var(--secondary-text)"
                                            }}
                                        >
                                            {platform.name}
                                        </Link>
                                    ) : (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                            style={{
                                                borderColor: `${metaBlue}30`,
                                                backgroundColor: "var(--background)",
                                                color: "var(--secondary-text)"
                                            }}
                                        >
                                            {platform.name}
                                        </span>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
