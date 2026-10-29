"use client";

import { useState } from "react";
import { TrendingUp, Users, Zap, Search, Globe, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // E-commerce SEO Light Blue theme color
    const commerceBlue = "#0EA5E9";

    const reasons = [
        {
            icon: DollarSign,
            title: "Revenue-First Mindset",
            description: <>We obsess over <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>ecommerce SEO ranking factors</Link> that drive sales, not vanity traffic metrics. Every optimization decision is filtered through: &apos;Will this increase revenue?&apos; Our hire ecommerce SEO expert team focuses on transactional keywords, product page conversion optimization, and customer lifetime value - not just rankings.</>,
        },
        {
            icon: Search,
            title: "Scalable Programmatic Strategies",
            description: "Optimizing 10,000+ product pages manually is impossible. We use programmatic approaches, template optimization, and automation to efficiently scale across massive catalogs while maintaining quality. Perfect for enterprise ecommerce SEO services for large brands managing complex inventories.",
        },
        {
            icon: Zap,
            title: "Deep Technical Expertise",
            description: <>Our developers and SEO specialists work in perfect harmony to fix critical site speed issues, JavaScript rendering problems, server response time bottlenecks, and architectural inefficiencies. We speak the language of CTOs and can implement complex <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>technical solutions</Link> that most agencies can&apos;t handle.</>,
        },
        {
            icon: Globe,
            title: "Multi-Platform Ecommerce Pros",
            description: <>Extensive experience with <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>Shopify</Link>, Magento, WooCommerce, BigCommerce, and custom headless builds. We understand each platform&apos;s unique technical limitations, optimization opportunities, and best practices - no cookie-cutter strategies.</>,
        },
        {
            icon: Users,
            title: "UX & CRO Integration",
            description: <>We optimize for both search bots AND human shoppers. Every change considers <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-sky-text)" }}>user experience</Link>, conversion rate optimization, cart abandonment reduction, and mobile usability. Our ecommerce conversion rate optimization approach ensures traffic actually converts.</>,
        },
        {
            icon: TrendingUp,
            title: "Data-Driven Decision Making",
            description: "Every recommendation is backed by deep analytics, competitor intelligence, A/B testing results, and historical performance data. We don't guess - we analyze, test, and prove strategies before implementing at scale.",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Header Area */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            {/* Badge */}
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                                style={{
                                    backgroundColor: `${commerceBlue}15`,
                                    borderColor: `${commerceBlue}40`,
                                }}
                            >
                                <Sparkles className="w-4 h-4" style={{ color: commerceBlue }} />
                                <span className="text-sm font-medium" style={{ color: "var(--accent-sky-text)" }}>
                                    Why Choose Us
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                Why Top Brands <br />
                                <span style={{ color: "var(--accent-sky-text)" }}>Choose Our Ecommerce SEO Agency</span>
                            </h2>
                            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Ecommerce SEO is a different beast. You need the best ecommerce SEO agency for high-growth brands who understands merchandise, not just metadata. We don't just drive traffic - we optimize for buyers ready to purchase. Every tactic aligns with conversion rate optimization, targeting transactional searches that drive sales, not vanity metrics. Whether you're a small business online store or an enterprise ecommerce brand, we deliver results.
                            </p>

                            <div
                                className="p-6 rounded-2xl border bg-opacity-50 backdrop-blur-sm"
                                style={{
                                    borderColor: `${commerceBlue}30`,
                                    backgroundColor: `${commerceBlue}05`
                                }}
                            >
                                <div className="text-4xl font-bold mb-2" style={{ color: "var(--accent-sky-text)" }}>300%+</div>
                                <p style={{ color: "var(--secondary-text)" }}>average increase in organic revenue in first 6 months (based on 50+ client case studies).</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            const isHovered = hoveredIdx === idx;

                            return (
                                <div
                                    key={idx}
                                    className="p-8 rounded-3xl border transition-all duration-300"
                                    style={{
                                        borderColor: isHovered ? commerceBlue : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        transform: isHovered ? "translateY(-5px)" : "none",
                                        boxShadow: isHovered ? `0 10px 30px ${commerceBlue}10` : "none"
                                    }}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? commerceBlue : `${commerceBlue}15`,
                                            color: isHovered ? "white" : commerceBlue
                                        }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {reason.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {reason.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
