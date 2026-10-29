import Link from "next/link";
import { ShoppingCart, TrendingUp, CreditCard, Package, BarChart3, Users } from "lucide-react";

export default function ServiceOverview() {
    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #00b5ca 8%, transparent), color-mix(in srgb, #00efd6 8%, transparent))",
                            borderColor: "color-mix(in srgb, #00b5ca 20%, transparent)",
                            color: "var(--accent-cyan-text)",
                        }}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "var(--accent-cyan-text)" }}>24/7 Sales Machine</span> That Never Stops Selling
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            In today’s hyper-competitive digital landscape, your online store is more than just a shop window - it’s the engine of your business growth. As an expert E-commerce development company, we specialize in building robust, high-performance storefronts that turn visitors into loyal customers. Our E-commerce Website Development Services are designed to solve complex scalability challenges for B2B, B2C, and D2C brands across the US, EU, and APAC regions.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Whether you need a <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Shopify store development</Link> and optimization partner or a custom <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Headless ecommerce development</Link> service, our team brings deep Experience to the table. We don&apos;t just write code; we engineer digital ecosystems using next-gen tech stacks like <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>React</Link>, <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Next.js</Link>, and <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Node.js</Link> to ensure your site loads instantly and handles high-volume traffic with ease.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            We understand that Ecommerce Management Services require a blend of technical precision and marketing acumen. That’s why our solutions focus on Experience (UX) and Expertise (<Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Technical SEO</Link>) to deliver measurable ROI. From <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Magento to Shopify migration services</Link> to B2B ecommerce platform development, we empower you to outperform global competitors with a store that is secure, compliant, and conversion-focused.
                        </p>
                    </div>

                    {/* Right Content - Key Differentiators */}
                    <div className="space-y-4">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Conversion Rate Optimization",
                                description: "Data-driven design decisions with A/B tested checkout flows, product page layouts, and upsell strategies that maximize revenue per visitor."
                            },
                            {
                                icon: CreditCard,
                                title: "Seamless Payment Experience",
                                description: "Support for 100+ payment methods including digital wallets, BNPL options, and localized payment preferences for global customers."
                            },
                            {
                                icon: Package,
                                title: "Inventory & Fulfillment",
                                description: "Real-time inventory sync across channels, automated low-stock alerts, and integration with fulfillment partners like ShipBob and Deliverr."
                            },
                            {
                                icon: BarChart3,
                                title: "Advanced Analytics",
                                description: "Custom dashboards tracking revenue, AOV, customer lifetime value, and product performance to inform merchandising decisions."
                            },
                            {
                                icon: Users,
                                title: "Customer Retention",
                                description: "Loyalty programs, subscription capabilities, and personalized recommendations that turn one-time buyers into repeat customers."
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: "linear-gradient(135deg, color-mix(in srgb, #00b5ca 15%, transparent), color-mix(in srgb, #00efd6 15%, transparent))",
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: "var(--accent-cyan-text)" }} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section >
    );
}
