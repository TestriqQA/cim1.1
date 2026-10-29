"use client";

import { ArrowRight, ChevronRight, FileText, Search, Code, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    // SEO Green theme color
    const seoGreen = "#22C55E";

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
                        radial-gradient(circle at 15% 50%, rgba(34, 197, 94, 0.08), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(34, 197, 94, 0.05), transparent 25%),
                        radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.03), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${seoGreen} 1px, transparent 1px), linear-gradient(90deg, ${seoGreen} 1px, transparent 1px)`,
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
                    0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
                    50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.2); }
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
                            <Link href="/services/seo-services" className="hover:underline">SEO</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-green-text)" }}>On-Page SEO</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: `${seoGreen}10`,
                                borderColor: `${seoGreen}30`,
                            }}
                        >
                            <Search className="w-4 h-4" style={{ color: seoGreen }} />
                            <Link href="/about" className="text-sm font-medium hover:underline" style={{ color: "var(--accent-green-text)" }}>
                                On-Page SEO Experts
                            </Link>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Expert{" "}
                            <span className="relative inline-block" style={{ color: "var(--accent-green-text)" }}>
                                <Link href="/services/seo-services" className="hover:underline">On-Page SEO</Link>
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-50"
                                    style={{ color: seoGreen }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>{" "}
                            Services for 2026 Growth
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Stop losing customers to the competition. Our <strong><Link href="/services/seo-services" className="hover:underline underline underline-offset-2">On-page SEO optimization</Link></strong> bridge the gap between "good content" and "Google's top spot." By integrating 2026 EEAT signals and advanced <strong><Link href="/services/seo-services/technical-seo-services" className="hover:underline underline underline-offset-2">on-site SEO services</Link></strong>, we turn your website into a high-performance lead generation engine.
                        </p>

                        <p className="text-base md:text-lg animate-slideUp delay-200" style={{ color: "var(--secondary-text)" }}>
                            Whether you're looking for an <strong>On-page SEO agency</strong> near you or scaling a global enterprise, our experts provide the precision needed to survive the 2026 core updates.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: "#166534" }}
                            >
                                Get Free SEO Audit
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
                                View Our Process
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-green-text)" }}>250+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>SEO Elements</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-green-text)" }}>High</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. Core Web Vitals</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-green-text)" }}>Strong</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Traffic Growth</p>
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
                                    borderColor: `${seoGreen}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${seoGreen}10`
                                }}
                            >
                                {/* SEO Hero Image */}
                                <div className="w-[90%] h-[90%] relative flex items-center justify-center">
                                    <Image
                                        src="/images/techstack_logos/on-page-seo-hero-image.svg"
                                        alt="On-Page SEO"
                                        width={450}
                                        height={450}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20"
                                    style={{ borderColor: seoGreen }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: seoGreen }}
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl animate-pulse-glow"
                                style={{
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--card-bg)"
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${seoGreen}15` }}
                                    >
                                        <Code className="w-6 h-6" style={{ color: seoGreen }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Schema Markup
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Rich Snippets
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
                                        style={{ backgroundColor: `${seoGreen}15` }}
                                    >
                                        <CheckCircle className="w-6 h-6" style={{ color: seoGreen }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            98-100
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Core Web Vitals
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
                                On-Page Elements We Optimize
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Title Tags", "Meta Descriptions", "H1-H6 Tags", "URL Structure", "Image Alt Text", "Internal Links"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${seoGreen}30`,
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
