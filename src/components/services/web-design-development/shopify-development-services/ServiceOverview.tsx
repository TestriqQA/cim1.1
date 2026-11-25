import { Palette, Smartphone, TrendingUp, Building2, Atom, ArrowRightLeft, Blocks } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const highlights = [
        {
            icon: Palette,
            title: <Link href="/services/web-design-development" className="hover:text-[var(--accent-lime-text)] transition-colors">Shopify Store Design</Link>,
            description: "Custom themes that reflect your brand identity. We don't just use templates; we create unique visual experiences.",
        },
        {
            icon: Building2,
            title: "Shopify Plus Development",
            description: "Enterprise-grade scaling for high-volume merchants, featuring mobile-first architecture and bespoke checkout automation via Shopify Flow.",
        },
        {
            icon: Atom,
            title: <Link href="/services/web-design-development/headless-traditional-cms" className="hover:text-[var(--accent-lime-text)] transition-colors">Headless & Hydrogen</Link>,
            description: <span>Future-proof your store with <Link href="/services/web-design-development/nextjs-development-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Next.js</Link> or Hydrogen. Blazing fast load times and ultimate design flexibility.</span>,
        },
        {
            icon: ArrowRightLeft,
            title: "Seamless Migration",
            description: <span>Moving from <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">Magento</Link>, <Link href="/services/web-design-development/wordpress-development-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">WooCommerce</Link>, or BigCommerce? We ensure zero data loss and minimal downtime.</span>,
        },
        {
            icon: Blocks,
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
            className="py-16 md:py-20 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
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
                        <TrendingUp className="w-4 h-4" style={{ color: "var(--accent-shopify-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                            Build a Revenue-Driving Store
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
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

                {/* Highlights Grid: cards side by side share one size (md:auto-rows-fr);
                    on phones each card fits its own content. Hover:
                    border in the icon colour + 4px lift, nothing else. */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#96bf48] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: "linear-gradient(135deg, #96bf48, #5c8a1e)" }}
                                >
                                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
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
