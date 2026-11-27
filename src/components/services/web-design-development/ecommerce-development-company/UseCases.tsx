import type { CSSProperties } from "react";
import { Shirt, Sparkles, UtensilsCrossed, Sofa, HeartPulse, Gift, Factory, BadgeCheck } from "lucide-react";

export default function UseCases() {
    const industries = [
        {
            icon: Shirt,
            title: "Fashion & Apparel",
            description: "Clothing, accessories, and footwear brands needing size guides, color swatches, virtual try-on, and high-impact visual merchandising.",
            example: "D2C fashion brand with 200% YoY growth",
            color: "from-[#008ac1] to-[#00b5ca]",
            iconColor: "#008ac1",
        },
        {
            icon: Sparkles,
            title: "Beauty & Cosmetics",
            description: "Skincare and makeup brands with shade finders, ingredient transparency, subscription boxes, and influencer integration.",
            example: "Clean beauty brand with subscription model",
            color: "from-[#fab900] to-[#ee6500]",
            iconColor: "#fab900",
        },
        {
            icon: UtensilsCrossed,
            title: "Food & Beverage",
            description: "Specialty food, wine, and beverage companies with age verification, temperature-controlled shipping, and subscription clubs.",
            example: "Artisan coffee brand with weekly subscriptions",
            color: "from-[#00efd6] to-[#00b5ca]",
            iconColor: "#00efd6",
        },
        {
            icon: Sofa,
            title: "Home & Lifestyle",
            description: "Furniture, décor, and home goods with 3D visualization, room planners, and white-glove delivery coordination.",
            example: "Furniture D2C with augmented reality preview",
            color: "from-[#bc3feb] to-[#fab900]",
            iconColor: "#bc3feb",
        },
        {
            icon: HeartPulse,
            title: "Health & Wellness",
            description: "Supplements, fitness equipment, and wellness products with ingredient databases, subscription refills, and community features.",
            example: "Supplement brand with auto-ship program",
            color: "from-[#008ac1] to-[#bc3feb]",
            iconColor: "#008ac1",
        },
        {
            icon: Gift,
            title: "Gifts & Specialty",
            description: "Curated gift retailers, artisan goods, and specialty products with gift wrapping, personalization, and corporate gifting programs.",
            example: "Gourmet gift retailer with B2B program",
            color: "from-[#ee6500] to-[#fab900]",
            iconColor: "#ee6500",
        },
    ];

    return (
        <section
            className="py-16 md:py-20 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 181, 202, 0.05)",
                            borderColor: "rgba(0, 181, 202, 0.2)",
                        }}
                    >
                        <Factory className="w-4 h-4" aria-hidden="true" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Industries
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries We <span style={{ color: "var(--accent-cyan-text)" }}>Power</span>
                    </h2>

                    <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Domain Expertise Across Verticals
                    </p>
                </div>

                {/* Industries Grid: each card in its own colour from the page palette
                    (border on hover + 4px lift), icon beside the title, and the success
                    story pinned to the foot so it lines up across a row. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-6">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={idx}
                                className="flex flex-col p-6 md:p-8 rounded-2xl border border-[var(--border-color)] transition duration-200 ease-out hover:border-[var(--card-accent)] hover:-translate-y-1 motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                                style={{ backgroundColor: "var(--card-bg)", "--card-accent": industry.iconColor } as CSSProperties}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${industry.color}`}>
                                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
                                        {industry.title}
                                    </h3>
                                </div>

                                <p className="text-sm mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {industry.description}
                                </p>

                                <div className="mt-auto pt-4 flex items-start gap-2 border-t border-[var(--border-color)]">
                                    <BadgeCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent-cyan-text)]" aria-hidden="true" />
                                    <p className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                                        Success: {industry.example}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
