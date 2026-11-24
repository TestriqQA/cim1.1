import {
    Award,
    Target,
    Layers,
    Zap,
    Globe,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Award,
            title: "Certified Shopify Partners",
            description:
                "As a certified Shopify marketing agency, we have direct access to the latest beta features and priority support from Shopify experts.",
            gradient: "from-[#96bf48] to-[#5c8a1e]",
        },
        {
            icon: Target,
            title: "Conversion-First Approach",
            description:
                "Our Shopify conversion rate optimization (CRO) services help clients see a 35% average increase in AOV through strategic upsells.",
            gradient: "from-[#5c8a1e] to-[#b4d97c]",
        },
        {
            icon: TrendingUp,
            title: "2026 SEO Readiness",
            description:
                <span>Optimized for the post-December 2025 Google core update, we implement high-E-E-A-T content and JSON-LD schema to dominate <Link href="/services/seo-services/ecommerce-seo-services" className="text-[var(--accent-lime-text)] underline underline-offset-2 hover:underline">AI search results</Link>.</span>,
            gradient: "from-[#96bf48] to-[#b4d97c]",
        },
        {
            icon: Globe,
            title: "Global Scale Support",
            description:
                "Specializing in multi-currency setups and global trade nuances to help brands expand seamlessly into US, EU, and APAC markets.",
            gradient: "from-[#b4d97c] to-[#96bf48]",
        },
        {
            icon: Zap,
            title: "Thoroughly Tested Deployment",
            description:
                "Rigorous QA involving automated load testing and manual checks to ensure stable launches and maintain customer trust.",
            gradient: "from-[#5c8a1e] to-[#96bf48]",
        },
        {
            icon: Layers,
            title: "Data Security & Trust",
            description:
                "Prioritizing Shopify maintenance and ongoing support with regular security patches and GDPR/CCPA compliance audits.",
            gradient: "from-[#96bf48] to-[#5c8a1e]",
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
                        <Zap className="w-4 h-4" style={{ color: "var(--accent-shopify-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-lime-text)" }}>
                            Why Partner With Our Shopify Agency?
                        </span>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Your{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #96bf48, #5c8a1e)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            E-commerce
                        </span>{" "}
                        Experts
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Stop losing customers to slow load times and generic designs. We combine technical
                        excellence with data-driven marketing to build Shopify stores that dominate search and drive revenue.
                    </p>
                </div>

                {/* Reasons Grid: cards side by side share one size (md:auto-rows-fr; on
                    phones each card fits its own content; the card is
                    the grid item). Hover: border in the icon colour + 4px lift, nothing else. */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={idx}
                                className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[#96bf48] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)" }}
                            >
                                <div className="mb-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                                        style={{ background: "linear-gradient(135deg, #96bf48, #5c8a1e)" }}
                                    >
                                        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                    {reason.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
