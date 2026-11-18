"use client";

import { ArrowRight, Home, ChevronRight, TrendingUp, Search, Target, Zap, BarChart3, Globe, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background */}

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 py-8 sm:py-12 relative">
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

                    <Link
                        href="/services"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <span
                        className="font-semibold p-2"
                        style={{ color: "var(--accent-green-text)" }}
                    >
                        Organic Growth & SEO
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full mb-6 border backdrop-blur-sm"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-seo) 10%, transparent)",
                                borderColor: "var(--brand-seo)",
                            }}
                        >
                            {/* Same pill as the section badges below. px-4 and no letter-spacing
                                under 640px keep this longer label on one line at 320px. */}
                            <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-seo)" }} />
                            <span className="text-sm font-semibold sm:tracking-wide" style={{ color: "var(--accent-green-text)" }}>Organic Growth & SEO Services</span>
                        </div>

                        {/* Heading (H1) */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold">
                            <span style={{ color: "var(--foreground)" }}>Organic Growth &</span>{" "}
                            <span style={{ color: "var(--accent-green-text)" }}>SEO Services.</span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto mt-4"
                            style={{
                                background: "var(--brand-seo)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-lg md:text-xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Scale Your Business with <span style={{ color: "var(--accent-green-text)", fontWeight: 700 }}>Data-Driven Organic Search Strategies</span> Designed for the 2026 Algorithms.
                        </p>
                        <p className="text-base md:text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                            Stop relying on paid ads. As an expert global SEO Agency, we Engineer long-term search dominance. Our Organic SEO Services combine <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">technical precision</Link>, <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">authority-building content</Link>, and <Link href="/services/seo-services/link-building" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">white-hat strategies</Link> to deliver consistent leads and revenue. Whether you are a startup needing a sustainable organic traffic growth strategy or an enterprise seeking global dominance, our deep expertise ensures you own your niche.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(2,max-content)] 2xl:grid-cols-[repeat(4,max-content)] lg:gap-2.5 mb-8">
                            <div className="flex items-center justify-center gap-3 lg:gap-2.5 p-3 lg:px-2.5 lg:py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-seo) 8%, transparent)",
                                }}
                            >
                                <Search className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-seo)" }} />
                                <span className="text-sm font-semibold lg:whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    Keyword Research
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-3 lg:gap-2.5 p-3 lg:px-2.5 lg:py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-seo) 8%, transparent)",
                                }}
                            >
                                <BarChart3 className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-seo)" }} />
                                <span className="text-sm font-semibold lg:whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    Rank Tracking
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-3 lg:gap-2.5 p-3 lg:px-2.5 lg:py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-seo) 8%, transparent)",
                                }}
                            >
                                <Globe className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-seo)" }} />
                                <span className="text-sm font-semibold lg:whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    Technical SEO
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-3 lg:gap-2.5 p-3 lg:px-2.5 lg:py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-seo) 8%, transparent)",
                                }}
                            >
                                <Award className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-seo)" }} />
                                <span className="text-sm font-semibold lg:whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    Link Building
                                </span>
                            </div>
                        </div>

                        {/* Stats Section — each cell is a size container and the number is 25% of
                            its width (18-36px), so "300%" and the one-word "Trusted" always fit:
                            fixed text-3xl/4xl overflowed 74px columns on phones and 114px at lg. */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 p-4 sm:p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center" style={{ containerType: "inline-size" }}>
                                <div className="font-bold leading-tight mb-1"
                                    style={{ color: "var(--accent-green-text)", fontSize: "clamp(1.125rem, 25cqi, 2.25rem)" }}
                                >
                                    300%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Avg. Traffic Lift
                                </div>
                            </div>
                            <div className="text-center" style={{ containerType: "inline-size" }}>
                                <div className="font-bold leading-tight mb-1"
                                    style={{ color: "var(--accent-green-text)", fontSize: "clamp(1.125rem, 25cqi, 2.25rem)" }}
                                >
                                    95%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Retention Rate
                                </div>
                            </div>
                            <div className="text-center" style={{ containerType: "inline-size" }}>
                                <div className="font-bold leading-tight mb-1"
                                    style={{ color: "var(--accent-green-text)", fontSize: "clamp(1.125rem, 25cqi, 2.25rem)" }}
                                >
                                    Trusted by
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Fintech & SaaS Leaders
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-white rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            style={{
                                backgroundColor: "#166534",
                            }}
                        >
                            Book Free Audit Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div
                        className="relative flex flex-col items-center gap-8 sm:gap-12 justify-center animate-fadeIn lg:-mt-10"
                        style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                    >

                        {/* Illustration Card */}
                        <div
                            className="relative flex items-center justify-center rounded-3xl shadow-2xl border hover:scale-105 transition-transform duration-300 max-w-lg w-full"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            <Image
                                src="/images/services-images/organic-growth-and-seo-illustration.webp"
                                alt="Organic Growth & SEO"
                                width={638}
                                height={565}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 638px"
                                className="w-full h-full rounded-3xl p-5"
                            />
                        </div>

                        {/* Why Choose Us Section */}
                        <div
                            className="w-full p-5 sm:p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                Why Choose Us?
                            </h2>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                We combine data-driven strategies with white-hat SEO practices to deliver sustainable organic growth that lasts.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 15%, transparent)",
                                        color: "var(--accent-green-text)",
                                    }}
                                >
                                    White-Hat SEO
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 15%, transparent)",
                                        color: "var(--accent-green-text)",
                                    }}
                                >
                                    Data-Driven
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 15%, transparent)",
                                        color: "var(--accent-green-text)",
                                    }}
                                >
                                    Transparent Reporting
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-seo) 15%, transparent)",
                                        color: "var(--accent-green-text)",
                                    }}
                                >
                                    Results Focused
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
