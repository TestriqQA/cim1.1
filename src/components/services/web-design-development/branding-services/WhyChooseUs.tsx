import { CheckCircle2, Award, Palette, Eye, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Palette,
            title: "Design Excellence",
            description: "We don't use cookie-cutter templates. Our interactive portfolio features are bespoke, distinctive creations. We focus on \"wow\" moments - micro-interactions, smooth scroll effects, and unique layouts - that keep users engaged and impressed."
        },
        {
            icon: Eye,
            title: "Conversion Focused",
            description: "A pretty site that doesn't convert is a vanity project. We apply personal brand growth principles to guide visitors toward hiring you."
        },
        {
            icon: Zap,
            title: "Fast Performance",
            description: <>Speed is a feature. In the era of <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Core Web Vitals</Link>, we optimize images and leverage global CDNs to ensure instant loads.</>
        },
        {
            icon: Award,
            title: "SEO Optimized",
            description: <>Get found by the people who matter. We <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">optimize for SEO</Link> and long-tail queries like &quot;Personal branding for entrepreneurs&quot;.</>
        },
        {
            icon: Shield,
            title: "Future-Proof",
            description: <>We build with modern frameworks like Next.js allowing easy updates and features like <Link href="/blog/future-web-development-nextjs" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Video portfolio development</Link> as the web evolves.</>
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "color-mix(in srgb, #06b6d4 3%, var(--background))" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: "rgba(6, 182, 212, 0.05)",
                                borderColor: "rgba(6, 182, 212, 0.2)",
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: "#06b6d4" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-cyan-text)" }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Why Choose Us for Your{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Portfolio
                            </span>
                        </h2>

                        <p className="text-lg mb-8" style={{ color: "var(--secondary-text)" }}>
                            We specialize in creating portfolio websites that do more than just look good-they actively help you win clients and grow your career.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Custom designs tailored to your brand",
                                "Mobile-first responsive layouts",
                                "Interactive project showcases",
                                "Integrated contact & booking",
                                "Ongoing support & updates"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                                    <span style={{ color: "var(--foreground)" }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            style={{
                                background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                            }}
                        >
                            Start Your Portfolio Project
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
                                            style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)" }}
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
