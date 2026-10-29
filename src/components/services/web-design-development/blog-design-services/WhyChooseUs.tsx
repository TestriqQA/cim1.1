import { CheckCircle2, Award, Zap, Users, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Shield,
            title: "E-E-A-T Focused Architecture",
            description: <>We code with Google&apos;s Experience, Expertise, Authoritativeness, and Trustworthiness guidelines. Your site structure will signal <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">authority</Link> from Day 1.</>
        },
        {
            icon: Zap,
            title: "Performance Obsessed",
            description: <>We prioritize News portal performance and speed optimization. Passing <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Core Web Vitals</Link> is our baseline, not a goal.</>
        },
        {
            icon: Award,
            title: "Global Reach, Hyper-Local Focus",
            description: <>Experience in building <Link href="/services/seo-services/local-seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Hyper-local news portal</Link> development services that dominate regional search, while scaling to global traffic.</>
        },
        {
            icon: CheckCircle2,
            title: "Custom CMS Mastery",
            description: <>Whether it&apos;s <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Custom CMS development</Link> for news websites or headless setups, we give you control.</>
        },
        {
            icon: TrendingUp,
            title: "Proven ROI",
            description: <>Our clients see an average of sustained traffic growth within 12 months via our integrated <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">technical SEO</Link>.</>
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #a855f7 3%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: "rgba(168, 85, 247, 0.05)",
                                borderColor: "rgba(168, 85, 247, 0.2)",
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: "#a855f7" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why We Are the Leaders in <span style={{ color: "#a855f7" }}>Digital Magazine</span> Publishing
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                {" "}Platform Services
                            </span>
                        </h2>

                        <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                            We specialize in building content platforms that not only look great but also perform exceptionally. Our expertise spans from personal blogs to enterprise-level news portals.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Custom CMS integrations",
                                "Mobile-first responsive design",
                                "Advanced analytics setup",
                                "Monetization strategies",
                                "Ongoing support & maintenance"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#a855f7" }} />
                                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                            }}
                        >
                            Let&apos;s Build Your Content Platform
                            <span>→</span>
                        </Link>
                    </div>

                    {/* Right Content - Reasons Grid */}
                    <div className="grid gap-4">
                        {reasons.map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-xl"
                                            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-1" style={{ color: "var(--foreground)" }}>
                                                {reason.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {reason.description}
                                            </p>
                                        </div>
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
