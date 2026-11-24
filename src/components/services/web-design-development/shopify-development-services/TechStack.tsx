"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ShoppingCart, CreditCard, Truck, Mail, BarChart3, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);
    // The fade-in runs only after a real tab switch: this component's <style jsx>
    // CSS is injected on the client, so animating on first load would flash.
    const [switched, setSwitched] = useState(false);

    // The content box eases between heights when the tab changes. The height is
    // fixed only for the 400ms of the change; at rest it is auto, so a resize (or
    // printing) can never clip the cards.
    const boxRef = useRef<HTMLDivElement>(null);
    const fromHeight = useRef<number | null>(null);

    const selectCategory = (idx: number) => {
        if (idx === activeCategory) return;
        fromHeight.current = boxRef.current?.offsetHeight ?? null;
        setActiveCategory(idx);
        setSwitched(true);
    };

    useLayoutEffect(() => {
        const box = boxRef.current;
        const from = fromHeight.current;
        fromHeight.current = null;
        if (!box || from === null) return;
        box.style.height = "";
        const to = box.offsetHeight; // natural height with the new cards
        if (from === to) return;
        box.style.height = `${from}px`;
        void box.offsetHeight; // apply the start height before animating
        box.style.height = `${to}px`;
        const release = () => {
            box.style.height = "";
        };
        box.addEventListener("transitionend", release, { once: true });
        const fallback = window.setTimeout(release, 450);
        return () => {
            window.clearTimeout(fallback);
            box.removeEventListener("transitionend", release);
        };
    }, [activeCategory]);

    const categories = [
        {
            id: "platforms",
            title: "E-commerce Platforms",
            icon: ShoppingCart,
            description: "Leading e-commerce platforms",
            technologies: [
                { name: "Shopify", description: "Leading e-commerce platform", logo: "/images/techstack_logos/shopify-logo.png" },
                { name: "WooCommerce", link: "/services/web-design-development/wordpress-development-services", description: "WordPress e-commerce", logo: "/images/techstack_logos/WooCommerce-logo.png" },
                { name: "BigCommerce", description: "Enterprise SaaS", logo: "/images/techstack_logos/bigcommerce-logo.png" },
                { name: "Magento", link: "/services/web-design-development/ecommerce-development-company", description: "Adobe Commerce", logo: "/images/techstack_logos/Magento-logo.svg" },
                { name: "PrestaShop", description: "Open-source e-commerce", logo: "/images/techstack_logos/PrestaShop-logo.png" },
                { name: "Squarespace", description: "Design-focused", logo: "/images/techstack_logos/Squarespace-logo.webp" },
            ],
        },
        {
            id: "payments",
            title: "Payment Gateways",
            icon: CreditCard,
            description: "Secure payment processing",
            technologies: [
                { name: "Stripe", description: "Developer-first payments", logo: "/images/techstack_logos/Stripe-logo.png" },
                { name: "PayPal", description: "Global payments", logo: "/images/techstack_logos/paypal-logo.png" },
                { name: "Square", description: "Omnichannel payments", logo: "/images/techstack_logos/Square-logo.png" },
                { name: "Klarna", description: "Buy now, pay later", logo: "/images/techstack_logos/Klarna-logo.jpg" },
                { name: "Afterpay", description: "Installment payments", logo: "/images/techstack_logos/afterpay-logo.webp" },
                { name: "Adyen", description: "Enterprise payments", logo: "/images/techstack_logos/Adyen-Logo.png" },
            ],
        },
        {
            id: "shipping",
            title: "Shipping & Fulfillment",
            icon: Truck,
            description: "Order fulfillment solutions",
            technologies: [
                { name: "ShipStation", description: "Shipping automation", logo: "/images/techstack_logos/ShipStation-logo.png" },
                { name: "ShipBob", description: "3PL fulfillment", logo: "/images/techstack_logos/ShipBob-logo.png" },
                { name: "DHL", description: "Global logistics", logo: "/images/techstack_logos/dhl-logo.jpg" },
                { name: "FedEx", description: "Express shipping", logo: "/images/techstack_logos/FedEx-logo.png" },
                { name: "UPS", description: "Package delivery", logo: "/images/techstack_logos/UPS-logo.png" },
                { name: "Shippo", description: "Multi-carrier API", logo: "/images/techstack_logos/Shippo-logo.png" },
            ],
        },
        {
            id: "marketing",
            title: "Marketing Tools",
            icon: Mail,
            description: "E-commerce marketing automation",
            technologies: [
                { name: "Klaviyo", description: "E-commerce email", logo: "/images/techstack_logos/Klaviyo-logo.png" },
                { name: "Mailchimp", description: "Email marketing", logo: "/images/ai_automation_logos/mailchimp-logo.svg" },
                { name: "Yotpo", description: "Reviews & UGC", logo: "/images/techstack_logos/Yotpo-Logo.png" },
                { name: "Attentive", description: "SMS marketing", logo: "/images/techstack_logos/Attentive-logo.png" },
                { name: "Omnisend", description: "Omnichannel marketing", logo: "/images/techstack_logos/Omnisend-logo.png" },
                { name: "Privy", description: "Conversion tools", logo: "/images/techstack_logos/Privy-logo.png" },
            ],
        },
        {
            id: "analytics",
            title: "Analytics & Insights",
            icon: BarChart3,
            description: "Data-driven optimization",
            technologies: [
                { name: "Google Analytics", link: "/services/seo-services/technical-seo-services", description: "Web analytics", logo: "/images/organic_growth_and_seo/google-analytics-logo.webp" },
                { name: "Segment", description: "Customer data", logo: "/images/techstack_logos/Segment-logo.png" },
                { name: "Amplitude", description: "Product analytics", logo: "/images/techstack_logos/Amplitude-logo.webp" },
                { name: "Hotjar", description: "Behavior analytics", logo: "/images/techstack_logos/Hotjar-logo.png" },
                { name: "Mixpanel", description: "User analytics", logo: "/images/techstack_logos/mixpanel-logo.png" },
                { name: "Clarity", description: "Session recording", logo: "/images/techstack_logos/Microsoft-Clarity-logo.png" },
            ],
        },
    ];

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Elements */}

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Layers className="w-4 h-4" style={{ color: "var(--accent-shopify-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Powered by{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Industry Leaders
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We integrate with the best tools in e-commerce to build
                        stores that sell, ship, and scale.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => selectCategory(idx)}
                                aria-label={category.title}
                                aria-pressed={isActive}
                                className={`flex items-center justify-center min-h-11 min-w-11 sm:min-h-0 sm:min-w-0 gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm border transition duration-[400ms] ease-in-out motion-reduce:transition-none focus-visible:outline-none ${isActive
                                    ? "bg-[#527c1b] border-[#527c1b] text-white focus-visible:brightness-120"
                                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--foreground)] hover:border-[#96bf48]/50 focus-visible:border-[#96bf48]/50"
                                    }`}
                            >
                                <Icon className="w-4 h-4" aria-hidden="true" />
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                <div
                    className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 md:p-12"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    {/* Height eases between tabs. pt-1/-mt-1 leave room inside the clip
                        for the cards' 4px hover lift. */}
                    <div
                        ref={boxRef}
                        className="-mt-1 pt-1 overflow-hidden transition-[height] duration-[400ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div key={activeCategory}>
                            <div className={`text-center mb-8 ${switched ? "tech-card-in" : ""}`}>
                                <h3
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {categories[activeCategory].title}
                                </h3>
                                <p style={{ color: "var(--secondary-text)" }}>
                                    {categories[activeCategory].description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {categories[activeCategory].technologies.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#96bf48]/50 hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${switched ? "tech-card-in" : ""}`}
                                        style={{
                                            backgroundColor: "var(--background)",
                                            animationDelay: switched ? `${idx * 40}ms` : undefined,
                                        }}
                                    >
                                            {/* Logo */}
                                            <div
                                                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                                style={{
                                                    backgroundColor: tech.logo ? "transparent" : "color-mix(in srgb, #96bf48 15%, transparent)",
                                                }}
                                            >
                                                {tech.logo ? (
                                                    <Image
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        width={40}
                                                        height={40}
                                                        className="object-contain"
                                                    />
                                                ) : (
                                                    <span
                                                        className="text-lg font-bold"
                                                        style={{ color: "var(--accent-lime-text)" }}
                                                    >
                                                        {tech.name.charAt(0)}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1 min-w-0">
                                                <p
                                                    className="font-semibold truncate"
                                                    style={{ color: "var(--accent-lime-text)" }}
                                                >
                                                    {/* @ts-ignore */}
                                                    {tech.link ? (
                                                        <Link href={tech.link} className="hover:text-[var(--accent-lime-text)] transition-colors">
                                                            {tech.name}
                                                        </Link>
                                                    ) : (
                                                        tech.name
                                                    )}
                                                </p>
                                                <p
                                                    className="text-sm truncate"
                                                    style={{ color: "var(--secondary-text)" }}
                                                >
                                                    {tech.description}
                                                </p>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes techCardIn {
                        from { opacity: 0; transform: translateY(8px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .tech-card-in {
                        animation: techCardIn 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .tech-card-in { animation: none; }
                    }
                `}</style>
            </div>
        </section>
    );
}
