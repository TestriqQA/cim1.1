import { Zap, Globe, Shield, Users, BarChart3, HeadphonesIcon, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Globe,
            title: "Deep Expertise",
            description: "Our deep expertise delivers custom Travel Technology Solutions that solve complex challenges and drive growth.",
            color: "#0d9488",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Results",
            description: <span>Our <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:underline">Travel Data Analytics</Link> and Business Intelligence focus ensures every feature drives ROI and maximizes profitability.</span>,
            color: "#0d9488",
        },
        {
            icon: Shield,
            title: "E-E-A-T Certified Quality",
            description: "Content and code adhere strictly to Google's E-E-A-T guidelines, building Authority and Trust through secure, compliant systems.",
            color: "#0d9488",
        },
        {
            icon: Sparkles,
            title: "Innovation First",
            description: "Stay ahead of Hospitality Technology Trends 2026. From AI chatbots to sustainable travel features, we integrate forward-thinking solutions.",
            color: "#0d9488",
        },
        {
            icon: Users,
            title: "360° Digital Partnership",
            description: <span>Beyond development, we offer <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 hover:underline">Hospitality Social Media Management</Link>, SEO, and <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline">Travel Lead Generation</Link> to ensure your platform thrives.</span>,
            color: "#0d9488",
        },
        {
            icon: HeadphonesIcon,
            title: "24/7 Support & Maintenance",
            description: "Our Travel and Hospitality Maintenance teams provide round-the-clock monitoring and rapid response for consistent uptime.",
            color: "#0d9488",
        },
    ];

    const stats = [
        { value: "300%", label: "Traffic Growth" },
        { value: "80%+", label: "Test Coverage" },
        { value: "50+", label: "Global Partners" },
        { value: "24/7", label: "Monitoring" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(13, 148, 136, 0.05)",
                            borderColor: "rgba(13, 148, 136, 0.2)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#0d9488" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-teal-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: "var(--foreground)" }}
                    >
                        Why <span style={{ color: "var(--accent-teal-text)" }}>Choose Us</span>
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We understand hospitality - from boutique hotels to global chains, we deliver platforms that drive bookings and delight guests.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ backgroundColor: "#0d9488" }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg group"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: reason.color }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: "var(--foreground)" }}
                                >
                                    {reason.title}
                                </h3>

                                <p
                                    className="text-sm"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div
                    className="p-8 rounded-3xl border"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    style={{
                                        color: "#0d9488",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <p
                                    className="text-sm font-medium"
                                    style={{ color: "var(--secondary-text)" }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
