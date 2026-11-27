"use client";

import {
    ShoppingCart,
    CreditCard,
    Package,
    Globe,
    BarChart3,
    Smartphone,
    ChevronRight,
    ArrowRight,
    CheckCircle2,
    Boxes,
    Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const features = [
        { icon: Palette, text: "Custom Themes" },
        { icon: CreditCard, text: "Payment Integration" },
        { icon: Package, text: "Inventory Management" },
        { icon: Globe, text: "Multi-channel" },
        { icon: BarChart3, text: "Analytics" },
        { icon: Smartphone, text: "Mobile Commerce" },
    ];

    const stats = [
        { value: "Proven", label: "Stores Built" },
        { value: "High-Volume", label: "Sales Processed" },
        { value: "High", label: "Uptime" },
    ];

    return (
        <section
            className="relative pt-14 pb-16 transition-colors duration-300 overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#96bf48 1px, transparent 1px), linear-gradient(90deg, #96bf48 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                            <Link href="/" className="hover:underline">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services" className="hover:underline">Services</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/services/web-design-development" className="hover:underline">Web Design</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span style={{ color: "var(--accent-lime-text)" }}>Shopify & E-commerce</span>
                        </nav>

                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #96bf48 10%, transparent), color-mix(in srgb, #5c8a1e 5%, transparent))",
                                borderColor: "color-mix(in srgb, #96bf48 30%, transparent)",
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" style={{ color: "var(--accent-shopify-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                                E-commerce Experts
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
                            style={{ color: "var(--foreground)" }}
                        >
                            Professional{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Shopify Development Services
                            </span>{" "}
                            for High-Growth Global Brands
                        </h1>

                        <div className="space-y-4">
                            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Partner with an expert Shopify marketing agency to scale your brand with expert Shopify development services built for the 2026 digital landscape. From high-converting store setup to enterprise-grade Shopify Plus solutions, we deliver precision-engineered experiences that dominate search rankings and drive sustainable ROI across global markets.
                            </p>
                        </div>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-2 auto-rows-fr gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-3">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2.5 sm:py-2 rounded-xl sm:rounded-full border text-center"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent-shopify-text)" }} />
                                        <span className="text-xs sm:text-sm font-medium leading-tight" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-8 pt-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div
                                        className="text-lg sm:text-3xl font-bold font-mono whitespace-nowrap"
                                        style={{
                                            background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 sm:min-h-0 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                                style={{
                                    // Deeper Shopify green: white text 4.9-7.1:1 (the light #96bf48 start was 2.1:1).
                                    background: "linear-gradient(135deg, #527c1b, #3f6212)",
                                    color: "#ffffff",
                                }}
                            >
                                Book Your Free Shopify Audit Today
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                            <Link
                                href="#solutions"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 sm:min-h-0 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold border transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:scale-105"
                                style={{
                                    borderColor: "var(--border-color)",
                                    color: "var(--foreground)",
                                    backgroundColor: "var(--card-bg)",
                                }}
                            >
                                View Platforms
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative hidden lg:flex flex-col gap-6">
                        {/* Main Image */}
                        <div className="relative flex items-center justify-center">
                            <div
                                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border"
                                style={{
                                    borderColor: "color-mix(in srgb, #96bf48 30%, var(--border-color))",
                                    background: "linear-gradient(135deg, color-mix(in srgb, #96bf48 5%, var(--card-bg)), var(--card-bg))",
                                }}
                            >
                                <Image
                                    src="/images/techstack_logos/shopify-logo-hero.png"
                                    alt="Shopify Development"
                                    fill
                                    className="object-contain p-12"
                                    priority
                                />
                            </div>

                            {/* Floating Info Card - Bottom Left */}
                            <div
                                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #96bf48 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #96bf48, #5c8a1e)" }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Conversion Ready
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Optimized checkout
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card - Top Right */}
                            <div
                                className="absolute -top-4 -right-4 p-4 rounded-2xl border shadow-xl"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "color-mix(in srgb, #5c8a1e 30%, var(--border-color))",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #5c8a1e, #96bf48)" }}
                                    >
                                        <Boxes className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                                            Multi-Platform
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Shopify, WooCommerce, More
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Pills */}
                        <div
                            className="p-5 rounded-2xl border mt-4"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-lime-text)" }}>
                                Platforms We Master
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ backgroundColor: "color-mix(in srgb, #96bf48 8%, transparent)", borderColor: "color-mix(in srgb, #96bf48 20%, transparent)", color: "var(--foreground)" }}>
                                    Shopify
                                </span>
                                <Link
                                    href="/services/web-design-development/wordpress-development-services"
                                    className="px-3 py-1.5 rounded-full text-xs font-medium border hover:scale-105 transition-transform"
                                    style={{ backgroundColor: "color-mix(in srgb, #96bf48 8%, transparent)", borderColor: "color-mix(in srgb, #96bf48 20%, transparent)", color: "var(--foreground)" }}
                                >
                                    WooCommerce
                                </Link>
                                <Link
                                    href="/services/web-design-development/ecommerce-development-company"
                                    className="px-3 py-1.5 rounded-full text-xs font-medium border hover:scale-105 transition-transform"
                                    style={{ backgroundColor: "color-mix(in srgb, #96bf48 8%, transparent)", borderColor: "color-mix(in srgb, #96bf48 20%, transparent)", color: "var(--foreground)" }}
                                >
                                    BigCommerce
                                </Link>
                                <Link
                                    href="/services/web-design-development/ecommerce-development-company"
                                    className="px-3 py-1.5 rounded-full text-xs font-medium border hover:scale-105 transition-transform"
                                    style={{ backgroundColor: "color-mix(in srgb, #96bf48 8%, transparent)", borderColor: "color-mix(in srgb, #96bf48 20%, transparent)", color: "var(--foreground)" }}
                                >
                                    Magento
                                </Link>
                                <span className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ backgroundColor: "color-mix(in srgb, #96bf48 8%, transparent)", borderColor: "color-mix(in srgb, #96bf48 20%, transparent)", color: "var(--foreground)" }}>
                                    Stripe
                                </span>
                                <span className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ backgroundColor: "color-mix(in srgb, #96bf48 8%, transparent)", borderColor: "color-mix(in srgb, #96bf48 20%, transparent)", color: "var(--foreground)" }}>
                                    PayPal
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
