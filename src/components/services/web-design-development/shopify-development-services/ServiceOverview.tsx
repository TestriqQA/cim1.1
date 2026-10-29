"use client";

import { Palette, Play, RefreshCw, Smartphone, TrendingUp, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: ShoppingCart,
            title: <Link href="/services/web-design-development" className="hover:text-[var(--accent-lime-text)] transition-colors">Shopify Store Design</Link>,
            description: "Custom themes that reflect your brand identity. We don't just use templates; we create unique visual experiences.",
        },
        {
            icon: Palette, // Changed from CreditCard to Palette based on the new import and the fact CreditCard was removed. Assuming this is the intended icon.
            title: "Shopify Plus Development",
            description: "Enterprise-grade scaling for high-volume merchants, featuring mobile-first architecture and bespoke checkout automation via Shopify Flow.",
        },
        {
            icon: Play,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-[var(--accent-lime-text)] transition-colors">Headless & Hydrogen</Link>,
            description: <span>Future-proof your store with <Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Next.js</Link> or Hydrogen. Blazing fast load times and ultimate design flexibility.</span>,
        },
        {
            icon: RefreshCw,
            title: "Seamless Migration",
            description: <span>Moving from <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Magento</Link>, <Link href="/services/web-design-development/wordpress-development-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">WooCommerce</Link>, or BigCommerce? We ensure zero data loss and minimal downtime.</span>,
        },
        {
            icon: TrendingUp,
            title: "App Development & Integration",
            description: "Custom-built apps and secure bridges for ERP, CRM (Salesforce/HubSpot), or Inventory Management systems.",
        },
        {
            icon: Smartphone,
            title: <Link href="/services/mobile-app-development" className="hover:text-[var(--accent-lime-text)] transition-colors">Mobile App Development</Link>,
            description: "Turn your Shopify store into a native iOS/Android app. Increase retention with push notifications and one-tap checkout.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial - gradient(circle at 2px 2px, #96bf48 1px, transparent 0)`,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: "#96bf48" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-lime-text)" }}>
                            Build a Revenue-Driving Store
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Core{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                WebkitBoxDecorationBreak: "clone",
                            }}
                        >
                            Shopify Services
                        </span>{" "}
                        for Growth
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We provide end-to-end Shopify solutions designed to scale your brand,
                        optimize performance, and dominate the 2026 e-commerce landscape.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-6 rounded-2xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{
                                        background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                        boxShadow: "0 4px 16px rgba(150, 191, 72, 0.3)",
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {highlight.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {highlight.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
