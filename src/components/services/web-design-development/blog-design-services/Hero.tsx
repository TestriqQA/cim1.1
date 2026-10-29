"use client";

import { ArrowRight, Home, ChevronRight, Newspaper, Rss, BookOpen, Users, TrendingUp, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #a855f7 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #ec4899 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                {/* Floating particles */}
                <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-violet-400/30 animate-float" />
                <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-pink-400/20 animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-violet-300/25 animate-float" style={{ animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-1 text-sm mb-5 justify-center lg:justify-start flex-wrap"
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
                    <Link
                        href="/services"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <Link
                        href="/services/web-design-development"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Web Design
                    </Link>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                    <span
                        className="font-semibold p-2"
                        style={{ color: "var(--brand-purple-text)" }}
                    >
                        Blogs & News Portals
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-start ">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors animate-slideDown"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #a855f7 8%, transparent), color-mix(in srgb, #ec4899 8%, transparent))",
                                borderColor: "color-mix(in srgb, #a855f7 20%, transparent)",
                                color: "var(--brand-purple-text)",
                            }}
                        >
                            <Newspaper className="w-4 h-4" style={{ color: "#a855f7" }} />
                            <span className="text-sm font-semibold">Blogs & News Portal Development</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 animate-slideUp leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Enterprise Blogs &
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>News Portals Development</span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto animate-expandWidth"
                            style={{
                                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-lg md:text-xl mb-8 animate-fadeIn leading-relaxed" style={{ color: "var(--secondary-text)", animationDelay: "0.2s" }}>
                            Empower your editorial team and <span style={{ color: "var(--brand-purple-text)", fontWeight: 700 }}>engage millions of readers</span> with our high-performance <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline" style={{ color: "var(--brand-purple-text)" }}>Web Portal development Services</Link>. We build scalable, secure, and SEO-dominant digital publishing platforms.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                                    animationDelay: "0.1s"
                                }}
                            >
                                <Rss className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Custom CMS
                                </span>
                            </div>
                            <Link href="/services/seo-services" className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                                    animationDelay: "0.15s"
                                }}
                            >
                                <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    SEO-Ready
                                </span>
                            </Link>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                                    animationDelay: "0.2s"
                                }}
                            >
                                <Users className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    High Traffic
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                                    animationDelay: "0.25s"
                                }}
                            >
                                <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Monetization
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                                    animationDelay: "0.3s"
                                }}
                            >
                                <TrendingUp className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Ad Revenue
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #a855f7 8%, transparent)",
                                    animationDelay: "0.35s"
                                }}
                            >
                                <Newspaper className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Global Media
                                </span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl animate-fadeIn"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                border: "1px solid var(--border-color)",
                                animationDelay: "0.4s"
                            }}
                        >
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #a855f7, #ec4899)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    30+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Years Expertise
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #a855f7, #ec4899)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    50+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Media Giants
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #a855f7, #ec4899)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    2026
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Core Web Vitals
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center animate-slideUp" style={{ animationDelay: "0.5s" }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    boxShadow: "0 8px 20px -4px rgba(168, 85, 247, 0.4)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-0 rounded-3xl blur-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in srgb, #a855f7 15%, transparent), color-mix(in srgb, #ec4899 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/Blogs-&-News-Portals.svg"
                            alt="Blogs and News Portal Development"
                            width={500}
                            height={400}
                            className="relative z-10 rounded-2xl animate-float"
                            priority
                        />

                        {/* Content Metrics Card */}
                        <div
                            className="mt-8 p-6 rounded-2xl border backdrop-blur-md"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)",
                                maxWidth: "500px",
                                marginInline: "auto"
                            }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                        Content Analytics
                                    </span>
                                </div>
                                <div className="text-xs font-medium px-2 py-1 rounded-md bg-violet-500/10 text-violet-500">
                                    Live Stats
                                </div>
                            </div>

                            <div className="flex justify-between gap-4">
                                {[
                                    { label: "Page Views", value: "2.4M" },
                                    { label: "Avg. Time", value: "4:32" },
                                    { label: "Bounce Rate", value: "28%" },
                                ].map((metric, i) => (
                                    <div key={i} className="text-center flex-1">
                                        <div
                                            className="text-xl font-bold mb-1"
                                            style={{ color: "var(--brand-purple-text)" }}
                                        >
                                            {metric.value}
                                        </div>
                                        <div className="text-[10px] font-semibold leading-tight" style={{ color: "var(--secondary-text)" }}>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes expandWidth {
                    from { width: 0; }
                    to { width: 8rem; }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                .animate-slideDown {
                    animation: slideDown 0.6s ease-out forwards;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                    opacity: 0;
                }
                .animate-expandWidth {
                    animation: expandWidth 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
