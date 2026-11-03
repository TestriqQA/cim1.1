import { Zap, Smartphone, Eye, Lock, Gauge, Accessibility } from "lucide-react";
import Link from "next/link";

export default function SEOPerformance() {
    const features = [
        {
            icon: Gauge,
            title: "Sub-2s Core Web Vitals",
            description: "We optimize for global performance standards (LCP, FID, CLS) ensuring lightning-fast load times across 15+ countries.",
            items: ["LCP < 2.5s", "FID < 100ms", "CLS < 0.1", "Global CDN delivery"],
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Eye,
            title: "Sustained Organic Growth",
            description: "Our technical SEO foundation has delivered sustained organic traffic growth for enterprise clients in competitive global markets.",
            items: ["Semantic hierarchy", "Schema.org graph", "Keyword authority", "Global indexing"],
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: Smartphone,
            title: "Responsive Web Design",
            description: "Mobile-first approach ensuring flawless display on all devices. Average conversion rate improvement post-launch.",
            items: ["Fluid grid system", "Cross-device QA", "Touch-optimized UI", "Adaptive images"],
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Zap,
            title: "Custom Web Solutions",
            description: "Data-backed UI/UX focused on business value. Our sites are built to grow qualified leads for global brands.",
            items: ["Conversion audit", "Lead capture paths", "A/B tested layouts", "User flow mapping"],
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: Accessibility,
            title: "Global Accessibility",
            description: "Adherence to WCAG 2.1 guidelines for an inclusive user experience that benefits both international users and SEO.",
            items: ["Screen reader ready", "Keyboard navigation", "High contrast UI", "ARIA standards"],
            color: "from-[#ee6500] to-[#fab900]",
        },
        {
            icon: Lock,
            title: "Enterprise Security",
            description: "Advanced protocols and AWS-secured architecture ensuring high availability and data protection for global operations.",
            items: ["SSL/TLS encryption", "Security headers", "Real-time monitoring", "DDoS protection"],
            color: "from-[#008ac1] to-[#00b5ca]",
        },
    ];

    return (
        <section
            className="relative overflow-hidden py-10 lg:py-16 transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-cyan) 12%, transparent)",
                        animationDelay: "1s",
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: "color-mix(in srgb, var(--brand-teal) 12%, transparent)",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 138, 193, 0.05)",
                            borderColor: "rgba(0, 138, 193, 0.2)",
                        }}
                    >
                        <Gauge className="w-4 h-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
                        <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--brand-blue-text)" }}>
                            SEO & Performance
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span style={{ fontWeight: 700, color: "var(--brand-blue-text)" }}>Data-Backed ROI</span> <span style={{ fontWeight: 700, color: "var(--foreground)" }}>& Global Performance</span>
                    </h2>

                    <p className="text-base sm:text-xl max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                        As an expert <span className="font-bold text-[var(--brand-blue-text)]">web development agency</span>, we don&apos;t just build sites-we engineer high-performance business assets that deliver measurable global ROI.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                        }}
                    />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl p-5 sm:p-6 md:p-8 border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className="w-6 h-6 shrink-0 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3" style={{ color: "var(--foreground)" }}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm mb-4 sm:mb-6" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                    {feature.description}
                                </p>

                                {/* Items */}
                                <ul className="space-y-1.5 sm:space-y-2">
                                    {feature.items.map((item, iidx) => (
                                        <li key={iidx} className="flex items-start gap-2 text-sm">
                                            <span
                                                className={`w-2 h-2 rounded-full shrink-0 mt-1.5 bg-gradient-to-br ${feature.color}`}
                                            />
                                            <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Performance Metrics */}
                <div
                    className="rounded-2xl p-5 sm:p-8 md:p-10 border mb-10 sm:mb-12"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style={{ color: "var(--foreground)" }}>
                        Our Performance Standards
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {[
                            { label: "Page Speed", value: "< 2s" },
                            { label: "Lighthouse Score", value: "95+" },
                            { label: "Mobile Score", value: "90+" },
                            { label: "SEO Score", value: "100" },
                        ].map((metric, idx) => (
                            <div key={idx} className="text-center">
                                <div
                                    className="text-3xl sm:text-4xl font-bold mb-1.5 sm:mb-2"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-teal))",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {metric.value}
                                </div>
                                <p className="text-sm sm:text-base" style={{ color: "var(--secondary-text)" }}>{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[var(--secondary-text)] max-w-2xl mx-auto">
                        Ready to build a website that performs globally? Partner with a professional <span className="font-bold text-[var(--brand-blue-text)]">web development agency</span> today.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Get Your Free Website Audit
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
