"use client";

import { ArrowRight, Home, ChevronRight, Palette, Image as ImageIcon, Award, Star, Users, Briefcase, Eye } from "lucide-react";
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
                        backgroundColor: "color-mix(in srgb, #06b6d4 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, #0891b2 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                {/* Floating elements */}
                <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-cyan-400/30 animate-float" />
                <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-teal-400/20 animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-300/25 animate-float" style={{ animationDelay: "1s" }} />
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
                        style={{ color: "var(--accent-cyan-text)" }}
                    >
                        Portfolio & Personal
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors animate-slideDown"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #06b6d4 8%, transparent), color-mix(in srgb, #0891b2 8%, transparent))",
                                borderColor: "color-mix(in srgb, #06b6d4 20%, transparent)",
                                color: "var(--accent-cyan-text)",
                            }}
                        >
                            <Palette className="w-4 h-4" style={{ color: "#06b6d4" }} />
                            <span className="text-sm font-semibold">Personal Branding Services & Custom Portfolio Website Design</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 animate-slideUp leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Build Your Brand 2026
                            </span>
                            <br />
                            <span style={{ color: "var(--foreground)" }}>Is your digital footprint working as hard as you do?</span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto animate-expandWidth"
                            style={{
                                background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-lg md:text-xl mb-8 animate-fadeIn leading-relaxed" style={{ color: "var(--secondary-text)", animationDelay: "0.2s" }}>
                            In the competitive landscape of 2026, a generic resume isn't enough. You need a powerful, automated 24/7 <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)] font-bold">personal branding engine</Link>.
                        </p>
                        <p className="text-base md:text-lg mb-8 animate-fadeIn leading-relaxed" style={{ color: "var(--secondary-text)", animationDelay: "0.3s" }}>
                            As an expert <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">online reputation management</Link> agency and <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">website design services</Link> provider, we specialize in crafting <Link href="/blog/future-web-development-nextjs" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">high-impact digital narratives</Link> for global leaders. We don't just build websites; we engineer Personal Branding Services that position you as an undisputed authority in your niche.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                                    animationDelay: "0.1s"
                                }}
                            >
                                <ImageIcon className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Aesthetic Excellence
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                                    animationDelay: "0.15s"
                                }}
                            >
                                <Award className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    E-E-A-T Principles
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                                    animationDelay: "0.2s"
                                }}
                            >
                                <Star className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Thought Leadership
                                </span>
                            </div>
                            <Link href="/services/seo-services/technical-seo-services" className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                                    animationDelay: "0.25s"
                                }}
                            >
                                <Briefcase className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Entity SEO
                                </span>
                            </Link>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                                    animationDelay: "0.3s"
                                }}
                            >
                                <Users className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Transitive Trust
                                </span>
                            </div>
                            <Link href="/services/web-design-development/nextjs-development-services" className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 animate-slideUp"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #06b6d4 8%, transparent)",
                                    animationDelay: "0.35s"
                                }}
                            >
                                <Eye className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Next.js / React
                                </span>
                            </Link>
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
                                        background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    300+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Portfolios Built
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    95%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Client Satisfaction
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    3x
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    More Inquiries
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center animate-slideUp" style={{ animationDelay: "0.5s" }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                    boxShadow: "0 8px 20px -4px rgba(6, 182, 212, 0.4)",
                                }}
                            >
                                Control Your Narrative
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
                                    "linear-gradient(135deg, color-mix(in srgb, #06b6d4 15%, transparent), color-mix(in srgb, #0891b2 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/branding-services.svg"
                            alt="Portfolio and Personal Website Development"
                            width={500}
                            height={400}
                            className="relative w-[90%] h-[90%] z-10 rounded-2xl animate-float"
                            priority
                        />

                        {/* Portfolio Showcase Card */}
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
                                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                        Portfolio Impact
                                    </span>
                                </div>
                                <div className="text-xs font-medium px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-500">
                                    Results
                                </div>
                            </div>

                            <div className="flex justify-between gap-4">
                                {[
                                    { label: "Profile Views", value: "12K+" },
                                    { label: "Contact Rate", value: "8.5%" },
                                    { label: "Project Leads", value: "45+" },
                                ].map((metric, i) => (
                                    <div key={i} className="text-center flex-1">
                                        <div
                                            className="text-xl font-bold mb-1"
                                            style={{ color: "var(--accent-cyan-text)" }}
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
