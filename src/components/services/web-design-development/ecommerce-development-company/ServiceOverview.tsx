import Link from "next/link";
import { LayoutGrid, Target, CreditCard, Package, BarChart3, Repeat } from "lucide-react";

export default function ServiceOverview() {
    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 md:py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #00b5ca 8%, transparent), color-mix(in srgb, #00efd6 8%, transparent))",
                            borderColor: "color-mix(in srgb, #00b5ca 20%, transparent)",
                            color: "var(--accent-cyan-text)",
                        }}
                    >
                        <LayoutGrid className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-semibold">Our Service</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
                        Your <span style={{ color: "var(--accent-cyan-text)" }}>24/7 Sales Machine</span> That Never Stops Selling
                    </h2>
                </div>

                {/* Content Grid: text and the services panel side by side, centred on
                    each other so neither leaves an empty band under it. From 1680px the
                    text column stops at 43rem (about 80 characters a line; it reached 100
                    at 1920 and 138 at 2560) and the panel takes the rest, so the two stay
                    next to each other and the edges still line up with other sections.
                    Both breakpoints are written as min-[…px] so Tailwind orders them by size
                    (with lg:grid-cols-2 the lg rule came later in the CSS and overrode 1680). */}
                <div className="grid min-[1024px]:grid-cols-2 min-[1680px]:grid-cols-[minmax(0,43rem)_minmax(0,1fr)] gap-12 items-center mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* All three paragraphs share one body style (same colour, size and line height):
                            16px / 1.7 on phones, 17.6px / 1.8 from 640px */}
                        <p className="text-base leading-[1.7] sm:text-[1.1rem] sm:leading-[1.8]" style={{ color: "var(--secondary-text)" }}>
                            In today’s hyper-competitive digital landscape, your online store is more than just a shop window - it’s the engine of your business growth. As an expert E-commerce development company, we specialize in building robust, high-performance storefronts that turn visitors into loyal customers. Our E-commerce Website Development Services are designed to solve complex scalability challenges for B2B, B2C, and D2C brands across the US, EU, and APAC regions.
                        </p>

                        <p className="text-base leading-[1.7] sm:text-[1.1rem] sm:leading-[1.8]" style={{ color: "var(--secondary-text)" }}>
                            Whether you need a <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Shopify store development</Link> and optimization partner or a custom <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Headless ecommerce development</Link> service, our team brings deep Experience to the table. We don&apos;t just write code; we engineer digital ecosystems using next-gen tech stacks like <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>React</Link>, <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Next.js</Link>, and <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Node.js</Link> to ensure your site loads instantly and handles high-volume traffic with ease.
                        </p>

                        <p className="text-base leading-[1.7] sm:text-[1.1rem] sm:leading-[1.8]" style={{ color: "var(--secondary-text)" }}>
                            We understand that Ecommerce Management Services require a blend of technical precision and marketing acumen. That’s why our solutions focus on Experience (UX) and Expertise (<Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Technical SEO</Link>) to deliver measurable ROI. From <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:underline" style={{ color: "var(--accent-cyan-text)" }}>Magento to Shopify migration services</Link> to B2B ecommerce platform development, we empower you to outperform global competitors with a store that is secure, compliant, and conversion-focused.
                        </p>
                    </div>

                    {/* Right Content - Key Differentiators: one big card, rows (sub-sections)
                        split by dividers, no fill and no hover effect of its own (user, 26 Nov
                        2026: "remove the background color", "remove the border hover effect").
                        Trial on this page only (user, 26 Nov 2026: "instead of hovering entire
                        particular section, can we just hover icon and content in it ... just
                        do it on ecom page then we will decide for rest page"): the row itself
                        stays still; hovering it lifts only its icon and text 2px, easing over
                        400ms, with no shadow or background (keyboard: while a link inside has
                        focus). */}
                    <div className="rounded-2xl border border-[var(--border-color)] divide-y divide-[var(--border-color)]">
                        {[
                            {
                                icon: Target,
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
                                icon: Repeat,
                                title: "Customer Retention",
                                description: "Loyalty programs, subscription capabilities, and personalized recommendations that turn one-time buyers into repeat customers."
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group p-6 md:px-8"
                                >
                                    <div className="flex items-start gap-4 transition-[translate] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-within:-translate-y-0.5 motion-reduce:transition-none">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: "linear-gradient(135deg, color-mix(in srgb, #00b5ca 15%, transparent), color-mix(in srgb, #00efd6 15%, transparent))",
                                            }}
                                        >
                                            <Icon className="w-6 h-6" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
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
        </section>
    );
}
