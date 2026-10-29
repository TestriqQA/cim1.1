import { ShoppingBag, Sparkles, Apple, Home, Dumbbell, Gift } from "lucide-react";

export default function UseCases() {
    const industries = [
        {
            icon: ShoppingBag,
            title: "Fashion & Apparel",
            description: "Clothing, accessories, and footwear brands needing size guides, color swatches, virtual try-on, and high-impact visual merchandising.",
            example: "D2C fashion brand with 200% YoY growth",
        },
        {
            icon: Sparkles,
            title: "Beauty & Cosmetics",
            description: "Skincare and makeup brands with shade finders, ingredient transparency, subscription boxes, and influencer integration.",
            example: "Clean beauty brand with subscription model",
        },
        {
            icon: Apple,
            title: "Food & Beverage",
            description: "Specialty food, wine, and beverage companies with age verification, temperature-controlled shipping, and subscription clubs.",
            example: "Artisan coffee brand with weekly subscriptions",
        },
        {
            icon: Home,
            title: "Home & Lifestyle",
            description: "Furniture, décor, and home goods with 3D visualization, room planners, and white-glove delivery coordination.",
            example: "Furniture D2C with augmented reality preview",
        },
        {
            icon: Dumbbell,
            title: "Health & Wellness",
            description: "Supplements, fitness equipment, and wellness products with ingredient databases, subscription refills, and community features.",
            example: "Supplement brand with auto-ship program",
        },
        {
            icon: Gift,
            title: "Gifts & Specialty",
            description: "Curated gift retailers, artisan goods, and specialty products with gift wrapping, personalization, and corporate gifting programs.",
            example: "Gourmet gift retailer with B2B program",
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Industries We <span style={{ color: "var(--accent-cyan-text)" }}>Power</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Domain Expertise Across Verticals
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, color-mix(in srgb, #00b5ca 15%, transparent), color-mix(in srgb, #00efd6 15%, transparent))",
                                    }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: "var(--accent-cyan-text)" }} />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {industry.title}
                                </h3>

                                <p className="text-sm mb-4" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {industry.description}
                                </p>

                                <div
                                    className="p-3 rounded-xl"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, #00b5ca 5%, transparent)",
                                    }}
                                >
                                    <p className="text-xs font-medium" style={{ color: "var(--accent-cyan-text)" }}>
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
