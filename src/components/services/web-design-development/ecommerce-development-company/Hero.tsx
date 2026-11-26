import { Target, ArrowRight, Home, ChevronRight, ShoppingCart, TrendingUp, CreditCard, Package, BarChart3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const features = [
        { icon: TrendingUp, text: "Revenue Growth" },
        { icon: CreditCard, text: "Secure Payments" },
        { icon: Package, text: "Inventory Sync" },
        { icon: BarChart3, text: "Sales Analytics" },
        { icon: ShieldCheck, text: "PCI Compliant" },
        { icon: Target, text: "CRO Optimized" },
    ];

    const stats = [
        { value: "Significant", label: "Revenue Generated" },
        { value: "35%", label: "Avg. Conversion Lift" },
        { value: "Proven", label: "Stores Launched" },
    ];

    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* From 1024px the hero is tighter (top 32px, 24px gaps, 44px heading) so the button
                shows without scrolling at 1280×800 and 1366×768 */}
            <div className="mx-auto px-6 md:px-12 xl:px-20 py-12 lg:pt-8 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-1 text-[13px] min-[360px]:text-sm mb-5 lg:mb-3 justify-center lg:justify-start flex-wrap"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors px-1.5 py-2 min-[360px]:p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    {/* Each › is kept with the item after it, so a wrap on phones never
                        leaves a › hanging at the end of a line */}
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                        <Link
                            href="/services"
                            className="hover:underline transition-colors px-1.5 py-2 min-[360px]:p-2"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Services
                        </Link>
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                        <Link
                            href="/services/web-design-development"
                            className="hover:underline transition-colors px-1.5 py-2 min-[360px]:p-2"
                            style={{ color: "var(--secondary-text)" }}
                        >
                            Web Design
                        </Link>
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />
                        <span
                            className="font-semibold px-1.5 py-2 min-[360px]:p-2"
                            style={{ color: "var(--accent-cyan-text)" }}
                        >
                            E-commerce Stores
                        </span>
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
                            <ShoppingCart className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                            {/* 13px under 360px so the pill (262px) stays one centred line in the 272px column at 320 */}
                            <span className="text-[13px] min-[360px]:text-sm font-semibold whitespace-nowrap">E-commerce Store Development</span>
                        </div>

                        {/* Heading: the highlight uses the cyan text token (#00b5ca was 2.2:1 on the light page).
                            30px on phones (4 lines at 375 instead of 6). */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold leading-tight mb-8 lg:mb-6">
                            <span style={{ color: "var(--accent-cyan-text)" }}>
                                E-commerce Website Development Services
                            </span> That Scale Your Revenue
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg md:text-xl mb-8 lg:mb-6" style={{ color: "var(--secondary-text)" }}>
                            Expert E-commerce Development Company for Global Brands
                        </p>

                        {/* Feature Highlights: a light icon list, no boxes, every label on one
                            line. 2 columns on phones and in the narrow 1024–1279 hero, 3 otherwise.
                            Below lg the columns size to their content and the block is centred
                            (w-fit mx-auto), with every item starting at its column's left edge,
                            so the icons line up in straight columns (265px wide at 320). */}
                        <ul className="grid grid-cols-[auto_auto] sm:grid-cols-[auto_auto_auto] lg:grid-cols-2 xl:grid-cols-3 w-fit lg:w-auto mx-auto lg:mx-0 gap-x-6 sm:gap-x-8 gap-y-3 mb-8 lg:mb-6">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <li
                                        key={feature.text}
                                        className="flex items-center justify-start gap-1.5 sm:gap-2 min-w-0"
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                                        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                            {feature.text}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Stats: no box, just a thin line above. The columns take their
                            content's width, so "Significant" is never cut off; sizes keep the
                            row's minimum width inside the hero column (30px in the narrow
                            two-column hero at 1024–1279). */}
                        <div className="grid grid-cols-[auto_auto_auto] justify-between gap-2 sm:gap-4 mb-8 lg:mb-6 pt-6 border-t border-[var(--border-color)]">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-lg sm:text-xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mb-1 whitespace-nowrap" style={{ color: "var(--accent-cyan-text)" }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button: darker cyan so white text passes (5.4–7.3:1), no resting glow */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base font-semibold bg-gradient-to-r from-[#0e7490] to-[#155e75] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-120 focus-visible:outline-none focus-visible:scale-105 focus-visible:shadow-xl focus-visible:brightness-120"
                            >
                                Get Your Free Audit &amp; Quote
                                <ArrowRight className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div className="relative hidden lg:flex flex-col items-center justify-center">
                        <Image
                            src="/images/services-images/web-design-development/ecommerce-stores.svg"
                            alt="E-commerce Store Development"
                            width={500}
                            height={400}
                            className="relative w-[90%] h-[90%] z-10 rounded-2xl"
                            priority
                        />

                        {/* Platforms, each with its real logo (alt="" as the name is written beside it): the two links get a border hover; Magento is a label (no page of its own) */}
                        <div className="mt-12 flex gap-4 justify-center w-full z-10 relative">
                            <Link href="/services/web-design-development/shopify-development-services" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#00b5ca]/30 transition-colors duration-200 hover:border-[#00b5ca] focus-visible:outline-none focus-visible:border-[#00b5ca]" style={{ backgroundColor: "var(--card-bg)" }}>
                                <Image src="/images/techstack_logos/shopify-logo.png" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Shopify</span>
                            </Link>
                            <Link href="/services/web-design-development/wordpress-development-services" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#00b5ca]/30 transition-colors duration-200 hover:border-[#00b5ca] focus-visible:outline-none focus-visible:border-[#00b5ca]" style={{ backgroundColor: "var(--card-bg)" }}>
                                <Image src="/images/techstack_logos/WooCommerce-logo.png" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>WooCommerce</span>
                            </Link>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#00b5ca]/30" style={{ backgroundColor: "var(--card-bg)" }}>
                                <Image src="/images/techstack_logos/Magento-logo.svg" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                                <span className="text-xs font-bold" style={{ color: "var(--foreground)" }}>Magento Ready</span>
                            </div>
                        </div>

                        {/* Performance Metrics Section */}
                        <div className="mt-8 text-center w-full z-10 relative">
                            <p className="text-xs font-bold uppercase tracking-wider mb-4 opacity-70" style={{ color: "var(--foreground)" }}>E-commerce Performance</p>
                            {/* Even grid: 2×2, then one row of 4 from 1440px (at 1280 a quarter
                                chip leaves 105px and "Customer Retention" needs 113px) */}
                            <div className="grid grid-cols-2 min-[1440px]:grid-cols-4 gap-3">
                                <div className="flex flex-col items-center px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>Lower</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Cart Abandonment</span>
                                </div>
                                <div className="flex flex-col items-center px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>&lt;2s</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Page Load</span>
                                </div>
                                <div className="flex flex-col items-center px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
                                    <span className="text-xl font-bold" style={{ color: "var(--accent-cyan-text)" }}>Higher</span>
                                    <span className="text-xs" style={{ color: "var(--secondary-text)" }}>Mobile Conversion</span>
                                </div>
                                <div className="flex flex-col items-center px-3 py-2 rounded-lg" style={{ backgroundColor: "rgba(0, 181, 202, 0.1)" }}>
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
