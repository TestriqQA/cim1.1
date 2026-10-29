import Link from "next/link";
import { Zap, TrendingUp, Shield, Smartphone, RefreshCw, BarChart3 } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Lightning-Fast Performance",
            description: "Sub-2-second load times are non-negotiable. Our mobile-responsive ecommerce website design ensures your store passes Core Web Vitals with flying colors. We optimize every script and image, delivering speed that boosts SEO rankings and keeps customers engaged.",
            color: "from-[#008ac1] to-[#00b5ca]",
        },
        {
            icon: TrendingUp,
            title: "Proven CRO Expertise",
            description: <>Stop leaving money on the table. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-amber-text)]">Ecommerce conversion rate optimization</Link> (CRO) specialists analyze user behavior to craft friction-free paths to purchase. We’ve helped fintech and retail clients achieve 40%+ lifts in checkout completion through data-driven design.</>,
            color: "from-[#fab900] to-[#ee6500]",
        },
        {
            icon: Shield,
            title: "PCI-DSS Compliance & Security",
            description: "Security is our top priority. We implement bank-grade encryption and specific Ecommerce security and performance tuning. Your customers' data is protected by rigorous compliance standards, building the Trustworthiness essential for modern transactions.",
            color: "from-[#00efd6] to-[#00b5ca]",
        },
        {
            icon: Smartphone,
            title: "Mobile-First Commerce",
            description: "With 73% of sales happening on mobile, we adopt a mobile-first approach. We build thumb-friendly interfaces and User experience (UX) design for online stores that function flawlessly on any device, ensuring you never miss a sale on the go.",
            color: "from-[#bc3feb] to-[#fab900]",
        },
        {
            icon: RefreshCw,
            title: "Scalable Architecture",
            description: "Prepare for your next big launch. Our Ecommerce Scalability solutions are built to handle Black Friday traffic spikes without a glitch. We use cloud-native architectures that grow with your business, from startup to enterprise.",
            color: "from-[#008ac1] to-[#bc3feb]",
        },
        {
            icon: BarChart3,
            title: "Revenue Analytics",
            description: <>Make informed decisions with custom <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--accent-orange-text)]">Ecommerce analytics</Link> and reporting services. We integrate advanced dashboards that track CLTV, AOV, and Product Information Management (PIM) metrics, giving you full visibility into your store’s financial health.</>,
            color: "from-[#ee6500] to-[#fab900]",
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
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(0, 181, 202, 0.05)",
                            borderColor: "rgba(0, 181, 202, 0.2)",
                        }}
                    >
                        <Zap className="w-4 h-4" style={{ color: "var(--accent-cyan-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Why <span style={{ color: "var(--accent-cyan-text)" }}>High-Growth Brands</span> Choose Us
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Experience High Availability & Sustained Growth with Proven Experts
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #00b5ca, #00efd6)",
                        }}
                    />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={idx}
                                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Header with Icon */}
                                <div
                                    className={`flex items-center gap-4 p-6 bg-gradient-to-br ${reason.color} relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 opacity-10" style={{ background: "linear-gradient(135deg, white, transparent)" }} />
                                    <Icon className="w-8 h-8 text-white relative z-10" />
                                    <h3 className="text-lg font-bold text-white relative z-10">
                                        {reason.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-sm" style={{ color: "var(--secondary-text)", lineHeight: "1.6" }}>
                                        {reason.description}
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
