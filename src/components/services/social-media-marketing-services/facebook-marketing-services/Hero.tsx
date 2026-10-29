"use client";

import { ArrowRight, ChevronRight, Users, TrendingUp, Target, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background with animated gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 15% 50%, rgba(24, 119, 242, 0.12), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(24, 119, 242, 0.08), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#1877F2 1px, transparent 1px), linear-gradient(90deg, #1877F2 1px, transparent 1px)`,
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
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(24, 119, 242, 0.2); }
                    50% { box-shadow: 0 0 40px rgba(24, 119, 242, 0.4); }
                }
                @keyframes count-up {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
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
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/social-media-marketing-services" className="hover:underline">Social Media</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--brand-blue-text)" }}>Facebook Ads</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                background: "rgba(24, 119, 242, 0.1)",
                                borderColor: "rgba(24, 119, 242, 0.3)",
                            }}
                        >
                            <Facebook className="w-4 h-4" style={{ color: "#1877F2" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                                Meta Business Partner
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Scale Your Business with{" "}
                            <span
                                className="relative inline-block"
                                style={{ color: "var(--brand-blue-text)" }}
                            >
                                Expert Facebook Marketing Services
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-30"
                                    style={{ color: "#1877F2" }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Master your presence on the world's largest social network with a Facebook marketing agency that prioritizes ROI over vanity metrics. In the competitive <Link href="/blog/category/digital-marketing" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">digital landscape</Link> of 2026, simply "posting" isn't enough. You need an expert Facebook marketing company that leverages the latest Meta AI algorithms and <Link href="/services/seo-services/seo-content-writing-services" className="text-[var(--brand-blue-text)] hover:underline underline underline-offset-2">high-E-E-A-T content</Link> principles to drive measurable growth.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                "Lead Generation",
                                "Retargeting",
                                "Lookalike Audiences",
                                "Conversion Tracking",
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1877F2" }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{
                                    backgroundColor: "#1d4ed8",
                                    boxShadow: "0 4px 20px rgba(24, 119, 242, 0.25)",
                                }}
                            >
                                Get Free Audit
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="#process"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border transition-all hover:bg-accent"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                Our Process
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--brand-blue-text)" }}>3B+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Daily Active Users</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--brand-blue-text)" }}>Strong</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. ROAS</p>
                            </div>
                            <div className="w-px h-10 bg-border hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--brand-blue-text)" }}>Significant</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Lower CPA</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:flex flex-col gap-6 animate-fadeIn delay-500">
                        {/* Main Visual Container */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border flex items-center justify-center animate-float-gentle"
                                style={{
                                    borderColor: "rgba(24, 119, 242, 0.2)",
                                    background: "rgba(24, 119, 242, 0.05)",
                                    boxShadow: "0 0 30px rgba(24, 119, 242, 0.15)",
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-full h-full relative flex items-center justify-center p-8">
                                    <Image
                                        src="/images/techstack_logos/facebook-hero-img.png"
                                        alt="Facebook Advertising"
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: "#1877F2" }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: "#1877F2" }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl animate-pulse-glow"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(24, 119, 242, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#1877F2" }}
                                    >
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Precision Targeting
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            10,000+ Interests
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "rgba(24, 119, 242, 0.3)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: "#1877F2" }}
                                    >
                                        <BarChart3 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Advanced Analytics
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Real-time Insights
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--brand-blue-text)" }}>
                                Meta Platforms We Manage
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Facebook Feed", "Instagram", "Messenger", "Audience Network", "Reels", "Stories"].map((platform, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            backgroundColor: "rgba(24, 119, 242, 0.05)",
                                            borderColor: "rgba(24, 119, 242, 0.15)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        {platform}
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
