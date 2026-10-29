import Link from "next/link";
import { MessageSquare, Palette, Code2, Rocket, Settings, HeartHandshake } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: MessageSquare,
            title: "Discovery & Topical Authority",
            description: <>We analyze your niche, competitors, and <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Topical Authority</Link> and E-E-A-T gaps to plan a winning structure.</>,
            details: ["Niche analysis", "Competitor audit", "Keyword planning", "Structure mapping"]
        },
        {
            icon: Palette,
            title: "UX/UI & Retention",
            description: "Designing for Reader Retention and Loyalty. We create layouts that encourage scroll depth and click-throughs.",
            details: ["Scroll depth optimization", "Ad placement strategy", "Reader journey mapping", "Engagement UI"]
        },
        {
            icon: Code2,
            title: "Agile Dev & CMS Setup",
            description: <>Building robust <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Multi-author blog management</Link> systems with role-based access control.</>,
            details: ["Role-based access", "Workflow automation", "Custom post types", "Security setup"]
        },
        {
            icon: Rocket,
            title: "Migration & SEO Launchpad",
            description: "Executing safe Blog migration and redesign services with 301 redirect mapping and schema implementation.",
            details: ["Zero-downtime migration", "301 redirect mapping", "Schema implementation", "Core Web Vitals check"]
        },
        {
            icon: Settings,
            title: "Growth & Monetization",
            description: <>Post-launch <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">News portal SEO</Link> and audience growth services and <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Content Monetization Models</Link> setup.</>,
            details: ["AdSense/AdManager setup", "Paywall configuration", "Analytics dashboard", "Growth strategy"]
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #a855f7 2%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(168, 85, 247, 0.05)",
                            borderColor: "rgba(168, 85, 247, 0.2)",
                        }}
                    >
                        <Rocket className="w-4 h-4" style={{ color: "#a855f7" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Our 5-Step <span style={{ color: "#a855f7" }}>Editorial & Development Roadmap</span>
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        A proven methodology that delivers successful content platforms on time and on budget.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
                    />
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div
                        className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
                        style={{
                            background: "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                            opacity: 0.2
                        }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={idx}
                                    className="relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    {/* Step Number */}
                                    <div
                                        className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                        style={{
                                            background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                        }}
                                    >
                                        {idx + 1}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: "color-mix(in srgb, #a855f7 15%, transparent)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: "#a855f7" }} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {step.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-1">
                                        {step.details.map((detail, didx) => (
                                            <div key={didx} className="flex items-center gap-2 text-xs">
                                                <div className="w-1 h-1 rounded-full bg-violet-500" />
                                                <span style={{ color: "var(--secondary-text)" }}>{detail}</span>
                                            </div>
                                        ))}
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
