"use client";

import { Palette, TrendingUp, Target, BarChart3, Users, Activity, Award, Shield, Trophy } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: Target,
            title: "Platform-Specific Strategies",
            description: <>We don't use a one-size-fits-all approach. Our experts develop unique strategies tailored to the nuances of each platform-from <Link href="/services/social-media-marketing-services/linkedin-marketing-services" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">LinkedIn B2B networking</Link> to TikTok viral trends-maximizing your reach and impact.</>,
        },
        {
            icon: BarChart3,
            title: "Data-Driven Campaigns",
            description: "Every decision is backed by analytics. We continuously test, measure, and refine campaigns using advanced social media reporting and analytics services to ensure optimal performance and cost-efficiency.",
        },
        {
            icon: Palette,
            title: "Consistent Branding",
            description: <>We ensure your voice, visuals, and values are perfectly aligned across all channels, reinforcing your brand identity and building trust with our expert <Link href="/services/brand-identity-design" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">brand awareness & engagement</Link> tactics.</>,
        },
        {
            icon: TrendingUp,
            title: "Growth-Focused Execution",
            description: <>Our focus is always on your bottom line. We execute <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">ROI-driven social media marketing campaigns</Link> designed to scale your business and deliver a strong return on investment.</>,
        },
        {
            icon: Users,
            title: "Community Management",
            description: "We build and nurture genuine communities around your brand, utilizing pro community management services for brands to turn followers into loyal advocates and brand ambassadors.",
        },
        {
            icon: Activity,
            title: "Real-Time Optimization",
            description: "We monitor campaigns 24/7 and make real-time adjustments to maximize performance, engagement, and conversion rates, ensuring we stay ahead of algorithm changes.",
        },
    ];

    return (
        <section
            className="px-4 sm:px-6 md:px-12 xl:px-20 py-10 md:py-16 transition-colors duration-300 relative overflow-hidden"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Background decorative elements */}

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border backdrop-blur-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--accent-teal-text)",
                        }}
                    >
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-semibold">Why Choose Us</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>The Advantage</span> of Partnering with an Expert Social Media Management Company
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Why Choose Us? We combine data-driven social media strategy development services with creative storytelling to build meaningful connections and drive real business growth. Our approach is rooted in deep industry expertise and a relentless pursuit of ROI.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            /* Hover "icon fills in" (user's option 4, 27 Nov 2026): at
                               rest the icon sits on a soft teal tile; on hover the tile
                               fills solid teal with a white icon and the card border
                               warms to teal, over 300ms. No glow, nothing moves.
                               A faint teal tint on the card lifts it off the section,
                               which has the same colour. The border colour is a class,
                               not an inline style, so hover can change it. */
                            <div
                                key={idx}
                                className="group relative rounded-2xl p-6 md:p-8 border overflow-hidden border-[var(--border-color)] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[border-color] duration-300 ease-out motion-reduce:transition-none hover:border-[color-mix(in_srgb,var(--brand-teal)_45%,var(--border-color))]"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-teal) 3%, var(--card-bg))",
                                }}
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative bg-[color-mix(in_srgb,var(--brand-teal)_16%,transparent)] text-[var(--accent-teal-text)] transition-colors duration-300 ease-out motion-reduce:transition-none group-hover:bg-[var(--brand-teal)] group-hover:text-white">
                                        <Icon aria-hidden="true" className="w-7 h-7" />
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-3"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {benefit.title}
                                    </h3>

                                    <p style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}>
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA or badge */}
                <div className="text-center mt-10 md:mt-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-sm"
                        style={{
                            background: "color-mix(in srgb, var(--brand-teal) 5%, transparent)",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                        }}
                    >
                        <Award className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                            Trusted by Growing Businesses
                        </span>
                        <Shield className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}