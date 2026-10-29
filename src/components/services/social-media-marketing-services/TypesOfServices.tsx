"use client";

import {
    Sparkles,
    Sprout,
    Megaphone,
    UsersRound,
    PenTool,
    LayoutDashboard,
    MessageCircleHeart,
    LineChart,
    ArrowUpRight,
    CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function TypesOfServices() {
    const services = [
        {
            icon: Sprout,
            title: "Organic Social Media Marketing",
            description: <>Building genuine, lasting connections with your audience through high-quality, non-promoted content. This is the foundation of brand loyalty and <Link href="/blog/social-media-strategy-building-brand" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">organic social media follower growth strategy</Link>. We craft compounding content strategies that educate, entertain, and inspire, naturally attracting an audience that actually cares about your mission. Over time, this builds a fortress of trust that paid ads alone cannot replicate, reducing your reliance on ad spend and increasing customer lifetime value.</>,
            gradient: "linear-gradient(135deg, #10b981, #059669)",
            accentColor: "#10b981",
        },
        {
            icon: Megaphone,
            title: "Paid Social Media Advertising",
            description: <>Targeted, high-impact campaigns across platforms to drive immediate results. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">paid social media advertising agency</Link> expertise ensures your budget is spent efficiently to maximize leads and sales. We utilize advanced audience segmentation, lookalike modeling, and retargeting sequences to put your offer in front of the people most likely to buy. From <Link href="/services/performance-marketing/meta-ads" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Meta Ads</Link> to <Link href="/services/performance-marketing/linkedin-ads" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">LinkedIn Sponsored Content</Link>, our precise targeting lowers your CPA and scales your revenue predictably.</>,
            gradient: "linear-gradient(135deg, var(--brand-teal), var(--brand-cyan))",
            accentColor: "var(--brand-teal)",
        },
        {
            icon: UsersRound,
            title: "Influencer Marketing",
            description: "Leveraging trusted voices in your industry to promote your brand authentically, expanding your reach to highly engaged, niche audiences via our influencer marketing management services. We handle the entire lifecycle of influencer partnerships-from vetting and negotiation to campaign management and compliance. By aligning with influencers who share your brand values, we tap into pre-built trust, driving higher conversion rates than traditional display advertising.",
            gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
            accentColor: "#8b5cf6",
        },
        {
            icon: PenTool,
            title: "Content Creation & Scheduling",
            description: <>Developing visually engaging and contextually relevant content (graphics, videos, copy) and utilizing <Link href="/blog/content-marketing-strategies-work" className="underline underline-offset-2 hover:text-[var(--accent-teal-text)] hover:underline transition-colors">custom social media content calendar services</Link> for optimal posting times to capture maximum audience attention. Content is king, but context is queen. We produce high-fidelity assets-from scroll-stopping motion graphics to thought-leadership articles-that stop the scroll. Our strategic scheduling ensures your content hits the feed exactly when your audience is most active, maximizing visibility and engagement.</>,
            gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
            accentColor: "#f59e0b",
        },
        {
            icon: LayoutDashboard,
            title: "Social Media Management",
            description: "Full-service handling of your social channels, including profile optimization, daily posting, and brand monitoring, allowing you to focus on your core business. We act as an extension of your team, maintaining a consistent pulse on your accounts. We handle the day-to-day grind-uploading, captioning, hashtagging, and troubleshooting-so you can dedicate your energy to high-level business operations, knowing your digital reputation is in expert hands.",
            gradient: "linear-gradient(135deg, var(--brand-cyan), var(--brand-teal))",
            accentColor: "var(--brand-cyan)",
        },
        {
            icon: MessageCircleHeart,
            title: "Community Engagement & Growth",
            description: "Proactive interaction with followers, responding to comments and messages, and implementing social listening & monitoring strategies to organically grow your follower base with qualified leads. Silence kills relationships. We ensure no comment goes unanswered and no DM is ignored. By actively participating in conversations and monitoring brand mentions across the web, we protect your reputation and turn casual interactions into sales opportunities.",
            gradient: "linear-gradient(135deg, #ec4899, #db2777)",
            accentColor: "#ec4899",
        },
        {
            icon: LineChart,
            title: "Analytics & Reporting",
            description: "Continuous monitoring of key performance indicators (KPIs) and providing transparent, actionable reports to refine strategy and prove ROI. Data without insight is noise. We distill complex analytics into clear, visual dashboards that show you exactly where your money is going and what it’s returning. Our monthly deep-dives provide strategic recommendations for the next phase, ensuring continuous improvement and transparency in our partnership.",
            gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
            accentColor: "#3b82f6",
        },
    ];

    return (
        <section
            className="px-6 md:px-12 xl:px-20 py-16 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-teal) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-40 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
                    style={{
                        background: "var(--brand-teal)",
                        animationDuration: "4s"
                    }}
                />
                <div
                    className="absolute bottom-40 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
                    style={{
                        background: "var(--brand-cyan)",
                        animationDuration: "5s",
                        animationDelay: "1s"
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-5"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, var(--brand-teal) 8%, transparent), color-mix(in srgb, var(--brand-teal) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-teal) 20%, transparent)",
                            color: "var(--accent-teal-text)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Types of Social Media Marketing</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>Comprehensive Social Media Solutions</span> for Every Business Need
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We cover the full spectrum of social media activities to ensure a holistic and effective strategy tailored to your unique business goals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative rounded-2xl p-8 border transition-all duration-700 hover:shadow-2xl overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                {/* Sliding gradient background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                    style={{
                                        background: service.gradient,
                                        transform: "translateX(-100%)",
                                        transition: "transform 0.7s ease-out, opacity 0.7s ease-out"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateX(0)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateX(-100%)";
                                    }}
                                />

                                {/* Card content overlay to maintain readability */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10">
                                    {/* Icon container with pulsing effect */}
                                    <div className="relative mb-6">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500"
                                            style={{
                                                background: service.gradient,
                                                boxShadow: `0 8px 16px ${service.accentColor}33`
                                            }}
                                        >
                                            {/* Pulse ring */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000"
                                                style={{
                                                    border: `2px solid ${service.accentColor}`,
                                                }}
                                            />

                                            <Icon className="w-8 h-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                                        </div>

                                        {/* Floating checkmark on hover */}
                                        <div
                                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200"
                                        >
                                            <CheckCircle2
                                                className="w-4 h-4"
                                                style={{ color: service.accentColor }}
                                            />
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-500"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className="group-hover:text-white/90 transition-colors duration-500"
                                        style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}
                                    >
                                        {service.description}
                                    </p>

                                </div>

                                {/* Corner accent */}
                                <div
                                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-700"
                                    style={{
                                        background: service.gradient,
                                        filter: "blur(20px)"
                                    }}
                                />

                                {/* Top border highlight */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: service.gradient }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}