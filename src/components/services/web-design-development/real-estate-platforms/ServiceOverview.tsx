import { Building, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const keyPoints = [
        "Custom property listing portals with advanced search & filtering",
        "MLS/IDX integration for real-time listing synchronization",
        "Interactive maps with neighborhood insights",
        "Virtual tour and 3D walkthrough integration",
        <span key="crm">Lead capture forms with <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:underline">CRM automation</Link></span>,
        "Agent and broker management dashboards",
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, #0d9488 8%, transparent), color-mix(in srgb, #14b8a6 8%, transparent))",
                            borderColor: "color-mix(in srgb, #0d9488 20%, transparent)",
                            color: "#0d9488",
                        }}
                    >
                        <Building className="w-4 h-4" />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-teal-text)" }}>Real Estate Solutions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "#0d9488" }}>Property Platforms</span> That Convert
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full mb-6"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #2dd4bf)",
                        }}
                    />

                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We build real estate platforms that help agents, brokers, and property developers showcase listings beautifully, capture qualified leads, and close more deals.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mx-auto">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            The real estate industry demands digital experiences that are visually stunning, functionally robust, and optimized for lead generation.
                        </p>

                        <p style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                            From boutique brokerages to enterprise real estate portals, we create property platforms that combine beautiful design with powerful functionality. Our solutions include advanced property search, interactive maps, virtual tours, and seamless integrations with MLS systems, CRMs, and marketing tools.
                        </p>

                        <p style={{ color: "var(--secondary-text)", lineHeight: "1.8" }}>
                            We understand the unique challenges of real estate marketing-from high-quality visual presentation to complex filtering requirements and lead nurturing workflows. Our platforms are built to help you stand out in a competitive market and convert browsers into buyers.
                        </p>

                        {/* CTA */}
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
                                style={{
                                    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                                }}
                            >
                                <MapPin className="w-5 h-5" />
                                Discuss Your Real Estate Project
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Key Points */}
                    <div
                        className="p-8 rounded-2xl border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <h3 className="text-xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            What We Deliver
                        </h3>

                        <ul className="space-y-4">
                            {keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div
                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{
                                            background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                                        }}
                                    >
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Additional Info Card */}
                        <div
                            className="mt-8 p-4 rounded-xl"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, #0d9488 10%, transparent), color-mix(in srgb, #14b8a6 10%, transparent))",
                            }}
                        >
                            <p className="text-sm" style={{ color: "var(--accent-teal-text)", fontWeight: 600 }}>
                                💡 Pro Tip: Platforms with virtual tours see higher engagement and faster sales cycles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
