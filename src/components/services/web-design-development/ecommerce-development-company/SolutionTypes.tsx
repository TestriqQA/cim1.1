"use client";

import { ShoppingBag, Store, Building2, RefreshCw, Layers, Check, TrendingUp, Users, ShoppingCart, Package, CreditCard, Zap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SolutionTypes() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const solutions = [
        {
            icon: ShoppingBag,
            title: "B2C Online Stores",
            description: "Capture the consumer market with visually stunning, high-converting storefronts. As an expert Ecommerce website design company, we craft immersive brand experiences with Ecommerce product page optimization that showcases your catalog in its best light.",
            features: [
                { icon: Package, text: "Product galleries" },
                { icon: ShoppingCart, text: "Wishlist & favorites" },
                { icon: TrendingUp, text: "Reviews & ratings" },
                { icon: Users, text: "Social sharing" }
            ],
            color: "from-[#008ac1] to-[#00b5ca]",
            gradient: "linear-gradient(135deg, #008ac1 0%, #00b5ca 100%)",
        },
        {
            icon: Building2,
            title: "B2B E-commerce Platforms",
            description: <>Streamline your wholesale operations with sophisticated <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:underline text-[var(--brand-blue-text)]">B2B ecommerce platform development</Link>. We enable complex features like tiered pricing, bulk ordering, and <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline text-[var(--brand-blue-text)]">Custom API integrations</Link> for ecommerce stores (ERP/CRM) to automate your back-office workflows.</>,
            features: [
                { icon: CreditCard, text: "Custom pricing tiers" },
                { icon: Package, text: "Quote requests" },
                { icon: Layers, text: "Bulk order tools" },
                { icon: Users, text: "Account hierarchies" }
            ],
            color: "from-[#bc3feb] to-[#fab900]",
            gradient: "linear-gradient(135deg, #bc3feb 0%, #fab900 100%)",
        },
        {
            icon: Store,
            title: "Marketplace Solutions",
            description: "Launch your own Amazon-style platform. We build robust multi-vendor marketplaces with unified checkouts, vendor dashboards, and complex commission structures, positioning you as a central hub in your niche Ecommerce Ecosystem.",
            features: [
                { icon: Users, text: "Vendor onboarding" },
                { icon: CreditCard, text: "Split payments" },
                { icon: TrendingUp, text: "Seller analytics" },
                { icon: Check, text: "Dispute resolution" }
            ],
            color: "from-[#fab900] to-[#ee6500]",
            gradient: "linear-gradient(135deg, #fab900 0%, #ee6500 100%)",
        },
        {
            icon: RefreshCw,
            title: "Subscription Commerce",
            description: <>Build predictable revenue streams with <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Subscription-based ecommerce</Link> store setup. We integrate flexible billing engines and churn-reduction tools, ensuring seamless recurring payments and superior subscriber management.</>,
            features: [
                { icon: RefreshCw, text: "Recurring billing" },
                { icon: Package, text: "Skip/pause options" },
                { icon: Users, text: "Subscriber portal" },
                { icon: Zap, text: "Renewal reminders" }
            ],
            color: "from-[#00efd6] to-[#00b5ca]",
            gradient: "linear-gradient(135deg, #00efd6 0%, #00b5ca 100%)",
        },
        {
            icon: Layers,
            title: "Headless Commerce",
            description: <>Future-proof your business with <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-blue-text)]">Headless ecommerce development</Link> services. By decoupling the frontend from the backend, we deliver lightning-fast omnichannel experiences that let you sell anywhere - web, mobile, IoT, or voice.</>,
            features: [
                { icon: Zap, text: "API-first design" },
                { icon: Layers, text: "Custom frontends" },
                { icon: ShoppingCart, text: "Omnichannel ready" },
                { icon: TrendingUp, text: "Future-proof stack" }
            ],
            color: "from-[#008ac1] to-[#bc3feb]",
            gradient: "linear-gradient(135deg, #008ac1 0%, #bc3feb 100%)",
        },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#00b5ca]/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#bc3feb]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)", border: "1px solid" }}>
                            <Zap className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                            <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                                Our Solutions
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-cyan-text)" }}>E-commerce Solutions</span> We Build
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        End-to-End Development for Every Business Model
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col relative"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? "transparent" : "var(--border-color)",
                                    transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                                    boxShadow: isHovered ? "0 20px 60px rgba(0, 181, 202, 0.15)" : "0 4px 6px rgba(0, 0, 0, 0.05)",
                                }}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Animated border gradient */}
                                {isHovered && (
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: solution.gradient,
                                            padding: "2px",
                                            zIndex: -1,
                                        }}
                                    >
                                        <div
                                            className="w-full h-full rounded-2xl"
                                            style={{ backgroundColor: "var(--card-bg)" }}
                                        />
                                    </div>
                                )}

                                {/* Header with Icon */}
                                <div
                                    className={`relative p-8 bg-gradient-to-br ${solution.color} overflow-hidden`}
                                    style={{
                                        transition: "all 0.5s ease",
                                    }}
                                >
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: "linear-gradient(135deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent)",
                                                backgroundSize: "20px 20px",
                                                transform: isHovered ? "translateX(20px)" : "translateX(0)",
                                                transition: "transform 1s ease",
                                            }}
                                        />
                                    </div>

                                    {/* Icon with animation */}
                                    <div
                                        className="relative z-10 mb-4"
                                        style={{
                                            transform: isHovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                                            transition: "transform 0.5s ease",
                                        }}
                                    >
                                        <div
                                            className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm"
                                            style={{
                                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white relative z-10">
                                        {solution.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <p
                                        className="text-base mb-8 flex-1 leading-relaxed"
                                        style={{
                                            color: "var(--secondary-text)",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {solution.description}
                                    </p>

                                    {/* Features with icons */}
                                    <div className="space-y-3">
                                        {solution.features.map((feature, fidx) => {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <div
                                                    key={fidx}
                                                    className="flex items-center gap-3 group/feature"
                                                    style={{
                                                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                                                        transition: `transform 0.3s ease ${fidx * 0.05}s`,
                                                    }}
                                                >
                                                    <div
                                                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${solution.color} transition-transform duration-300 group-hover/feature:scale-110`}
                                                        style={{
                                                            boxShadow: isHovered ? "0 4px 12px rgba(0, 181, 202, 0.3)" : "none",
                                                        }}
                                                    >
                                                        <FeatureIcon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium transition-colors duration-300"
                                                        style={{
                                                            color: isHovered ? "var(--foreground)" : "var(--secondary-text)",
                                                        }}
                                                    >
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Hover effect overlay */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                                    style={{
                                        background: solution.gradient,
                                        transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                                        transformOrigin: "left",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg mb-6" style={{ color: "var(--secondary-text)" }}>
                        Need a specialized solution like Dropshipping store development and automation?
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                        style={{
                            background: "linear-gradient(135deg, #00b5ca 0%, #00efd6 100%)",
                        }}
                    >
                        Let&apos;s Discuss Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}