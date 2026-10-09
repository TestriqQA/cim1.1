import { Sparkles, ArrowRight, Home, ChevronRight, ShoppingCart, TrendingUp, CreditCard, Package, BarChart3, Shield } from "lucide-react";
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
                        backgroundColor: "color-mix(in srgb, #00b5ca 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
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
                        E-commerce Stores
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, #00b5ca 8%, transparent), color-mix(in srgb, #00efd6 8%, transparent))",
                                borderColor: "color-mix(in srgb, #00b5ca 20%, transparent)",
                                color: "var(--accent-cyan-text)",
                            }}
                        >
                            <ShoppingCart className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                            <span className="text-sm font-semibold">E-commerce Store Development</span>
                        </div>

                        {/* Heading */}
                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "#00b5ca",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                E-commerce Website Development Services
                            </span> That Scale Your Revenue
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto"
                            style={{
                                background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-lg md:text-xl mb-8" style={{ color: "var(--secondary-text)" }}>
                            Expert E-commerce Development Company for Global Brands
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #00b5ca 8%, transparent)",
                                }}
                            >
                                <TrendingUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Revenue Growth
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #00b5ca 8%, transparent)",
                                }}
                            >
                                <CreditCard className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Secure Payments
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #00b5ca 8%, transparent)",
                                }}
                            >
                                <Package className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Inventory Sync
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #00b5ca 8%, transparent)",
                                }}
                            >
                                <BarChart3 className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    Sales Analytics
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #00b5ca 8%, transparent)",
                                }}
                            >
                                <Shield className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    PCI Compliant
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, #00b5ca 8%, transparent)",
                                }}
                            >
                                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                                    CRO Optimized
                                </span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #00efd6, #00b5ca)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Significant
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Revenue Generated
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #00efd6, #00b5ca)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    35%
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Avg. Conversion Lift
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-4xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, #00efd6, #00b5ca)",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    150+
                                </div>
                                <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                    Stores Launched
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get Your Free Audit & Quote
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
                                    "linear-gradient(135deg, color-mix(in srgb, #00b5ca 15%, transparent), color-mix(in srgb, #00efd6 15%, transparent))",
                            }}
                        />
                        <Image
                            src="/images/services-images/web-design-development/ecommerce-stores.svg"
                            alt="E-commerce Store Development"
                            width={500}
                            height={400}
                            className="relative w-[90%] h-[90%] z-10 rounded-2xl"
                            priority
                        />

                        {/* Info Section Below Image */}
                        <div className="mt-12 flex gap-4 justify-center w-full z-10 relative">
                            <Link href="/services/web-design-development/shopify-development-services" className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm hover:scale-105 transition-transform" style={{ borderColor: "rgba(0, 181, 202, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <ShoppingCart className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Shopify</span>
                            </Link>
                            <Link href="/services/web-design-development/wordpress-development-services" className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm hover:scale-105 transition-transform" style={{ borderColor: "rgba(0, 181, 202, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <Package className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>WooCommerce</span>
                            </Link>
                            <Link href="/services/web-design-development/ecommerce-development-company" className="flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm hover:scale-105 transition-transform" style={{ borderColor: "rgba(0, 181, 202, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                                <CreditCard className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Magento Ready</span>
                            </Link>
                        </div>

                        {/* Performance Metrics Section */}
                        <div className="mt-8 text-center w-full z-10 relative">
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 opacity-70" style={{ color: "var(--foreground)" }}>E-commerce Performance</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>Lower</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Cart Abandonment</span>
                                </div>
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>&lt;2s</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Page Load</span>
                                </div>
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>Higher</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Mobile Conversion</span>
                                </div>
                                <div className="flex flex-col items-center px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>High</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Customer Retention</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
