"use client";

import { ArrowRight, ChevronRight, ShoppingBag, TrendingUp, Search, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

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
                        radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.08), transparent 25%),
                        radial-gradient(circle at 90% 50%, rgba(14, 165, 233, 0.05), transparent 25%),
                        radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.03), transparent 25%)
                    `,
                }}
            >
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${commerceBlue} 1px, transparent 1px), linear-gradient(90deg, ${commerceBlue} 1px, transparent 1px)`,
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
                            <span style={{ color: "var(--accent-sky-text)" }}>E-commerce SEO</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm animate-fadeIn"
                            style={{
                                backgroundColor: `${commerceBlue}10`,
                                borderColor: `${commerceBlue}30`,
                            }}
                        >
                            <ShoppingBag className="w-4 h-4" style={{ color: commerceBlue }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-sky-text)" }}>
                                Maximize Online Sales
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-slideUp"
                            style={{ color: "var(--foreground)" }}
                        >
                            Turn Traffic Into Revenue With{" "}
                            <span className="relative inline-block" style={{ color: "var(--accent-sky-text)" }}>
                                Ecommerce SEO Services
                                <svg
                                    className="absolute w-full h-3 -bottom-2 left-0 opacity-50"
                                    style={{ color: commerceBlue }}
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100" style={{ color: "var(--secondary-text)" }}>
                            Drive qualified buyers to your product pages with data-driven ecommerce SEO optimization delivering a strong average ROI. significant revenue driven through strategic product page SEO, technical fixes, and conversion-focused strategies.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slideUp delay-100 mt-4" style={{ color: "var(--secondary-text)" }}>
                            We optimize <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>Shopify</Link>, Magento, WooCommerce, and BigCommerce stores at scale - fixing roadblocks, implementing schema markup, and targeting high-intent buyer keywords that drive sales.
                        </p>



                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-slideUp delay-200">
                            {[
                                { name: "Product Page SEO", link: "/services/seo-services/on-page-seo-services" },
                                { name: "Shopify SEO", link: "/services/web-design-development/shopify-development-services" },
                                { name: "Magento SEO", link: "/services/web-design-development/ecommerce-development-company" },
                                { name: "Schema Markup", link: "/services/seo-services/technical-seo-services" },
                            ].map((feature, idx) => (
                                <Link
                                    key={idx}
                                    href={feature.link}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-sm transition-all hover:bg-accent/10"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: `${commerceBlue}30`
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: commerceBlue }} />
                                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{feature.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slideUp delay-300">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-all transform hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: "#0369a1" }}
                            >
                                Get Free Store Audit
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
                                View Our Strategy
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t animate-slideUp delay-400" style={{ borderColor: "var(--border-color)" }}>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-sky-text)" }}>Strong</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Avg. ROI</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-sky-text)" }}>Significant</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Revenue Driven</p>
                            </div>
                            <div className="w-px h-10 hidden sm:block" style={{ backgroundColor: "var(--border-color)" }} />
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold" style={{ color: "var(--accent-sky-text)" }}>10k+</h2>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Top Rankings</p>
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
                                    borderColor: `${commerceBlue}30`,
                                    backgroundColor: "var(--card-bg)",
                                    boxShadow: `0 0 50px ${commerceBlue}10`
                                }}
                            >
                                {/* Hero Image */}
                                <div className="w-[90%] h-[90%] relative flex items-center justify-center">
                                    <Image
                                        src="/images/services-images/web-design-development/ecommerce-stores.svg"
                                        alt="E-commerce SEO"
                                        width={450}
                                        height={450}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Decorative circles */}
                                <div
                                    className="absolute w-72 h-72 rounded-full border opacity-20 border-dashed animate-[spin_20s_linear_infinite]"
                                    style={{ borderColor: commerceBlue }}
                                />
                                <div
                                    className="absolute w-96 h-96 rounded-full border opacity-10"
                                    style={{ borderColor: commerceBlue }}
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
                                        style={{ backgroundColor: `${commerceBlue}15` }}
                                    >
                                        <TrendingUp className="w-6 h-6" style={{ color: commerceBlue }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Conversion Focus
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            CRO Integrated
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
                                        style={{ backgroundColor: `${commerceBlue}15` }}
                                    >
                                        <Search className="w-6 h-6" style={{ color: commerceBlue }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            High Intent
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Buyer Keywords
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
                                {["Shopify", "Magento", "WooCommerce", "BigCommerce", "Salesforce", "Custom"].map((format, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                                        style={{
                                            borderColor: `${commerceBlue}30`,
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
