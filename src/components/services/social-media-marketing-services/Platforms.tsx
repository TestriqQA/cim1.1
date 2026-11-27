"use client";

import {
    Instagram,
    Facebook,
    Linkedin,
    Youtube,
    Pin,
    ArrowRight,
    Share2,
} from "lucide-react";
import { TwitterX, Pinterest } from "../../Icons";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function Platforms() {
    const platforms = [
        {
            name: "Facebook",
            description: "Leveraging the platform's robust advertising tools and community groups for targeted lead generation and building a loyal customer base via expert Facebook and Instagram advertising services.",
            gradient: "linear-gradient(135deg, #1877F2, #0A66C2)",
            icon: Facebook,
            accentColor: "#1877F2",
            link: "/services/social-media-marketing-services/facebook-marketing-services",
        },
        {
            name: "Instagram Marketing",
            description: "Visually-driven strategies focused on high-quality content, Reels, Stories, and effective use of shopping features to drive engagement and sales for ecommerce social media management agency clients.",
            gradient: "linear-gradient(135deg, #E1306C, #C13584)",
            icon: Instagram,
            accentColor: "#E1306C",
            link: "/services/social-media-marketing-services/instagram-marketing-services",
        },

        {
            name: "LinkedIn",
            description: "Professional LinkedIn marketing services for B2B, thought leadership content, and targeted outreach to key decision-makers and industry professionals.",
            gradient: "linear-gradient(135deg, #0A66C2, #0A63BC)",
            icon: Linkedin,
            accentColor: "#0A66C2",
            link: "/services/social-media-marketing-services/linkedin-marketing-services",
        },
        {
            name: "YouTube",
            description: "Developing high-value video content, optimizing for search, and utilizing YouTube Ads to capture attention and educate potential customers.",
            link: "/services/social-media-marketing-services/video-marketing-agency",
            gradient: "linear-gradient(135deg, #FF0000, #282828)",
            icon: Youtube,
            accentColor: "#FF0000",
        },
        {
            name: "Twitter Ads Management",
            description: "Real-time engagement, trend-jacking, and building a strong, authoritative brand voice through concise and impactful messaging.",
            link: "/services/social-media-marketing-services/twitter-ads-management",
            gradient: "linear-gradient(135deg, #000000, #333333)",
            icon: TwitterX,
            accentColor: "#000000",
        },

        {
            name: "Pinterest",
            description: "Strategy focused on visual discovery, driving traffic to e-commerce sites, and capturing users in the early stages of the buying journey.",
            gradient: "linear-gradient(135deg, #E60023, #AD081B)",
            icon: Pinterest,
            accentColor: "#E60023",
            link: "/services/social-media-marketing-services/pinterest-marketing",
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
            {/* Animated background elements */}

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
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">Platforms We Specialize In</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-teal-text)" }}>Mastering the Ecosystem:</span> Strategies for Key Social Channels
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))",
                        }}
                    />

                    <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our team has deep expertise in developing winning strategies for the world's most popular platforms.
                    </p>
                    {/* Contextual link to our own product (SEO check, 24 Nov 2026) */}
                    <p className="text-base max-w-3xl mx-auto mt-4" style={{ color: "var(--secondary-text)" }}>
                        We also build our own tools:{" "}
                        <Link href="/products/chimegenius-ai-pro" className="underline underline-offset-2" style={{ color: "var(--accent-teal-text)" }}>
                            ChimeGenius AI Pro AI comment generator
                        </Link>
                        , a free Chrome extension for writing comments and replies on LinkedIn, Instagram, Facebook, X, YouTube and Reddit.
                    </p>
                </div>

                {/* Platforms Grid: the full section width, not capped at 1280px
                    (user, 27 Nov 2026: wider cards). */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {platforms.map((platform, idx) => {
                        const Icon = platform.icon;
                        // Hover / keyboard focus: the border turns the platform's
                        // own icon colour and doubles to 2px (an inset 1px ring on
                        // top of the 1px border, so nothing inside shifts). No glow.
                        // X's icon is black, which vanishes on the dark page, so it
                        // uses the text colour instead.
                        const hoverColor = platform.accentColor === "#000000" ? "var(--foreground)" : platform.accentColor;
                        return (
                            <Link
                                href={platform.link || "#"}
                                key={idx}
                                className="rounded-2xl p-6 md:p-8 border overflow-hidden relative cursor-pointer block border-[var(--border-color)] transition-[border-color,box-shadow] duration-300 ease-out motion-reduce:transition-none hover:border-[var(--platform-color)] hover:shadow-[inset_0_0_0_1px_var(--platform-color)] focus-visible:outline-none focus-visible:border-[var(--platform-color)] focus-visible:shadow-[inset_0_0_0_1px_var(--platform-color)]"
                                style={{
                                    "--platform-color": hoverColor,
                                    backgroundColor: "var(--card-bg)",
                                    animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`
                                } as CSSProperties}
                            >
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="relative mb-6 w-fit">
                                        {/* Icon background (no glow) */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                                            style={{
                                                background: platform.gradient,
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-white relative z-10" />
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-4 flex items-center gap-2"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {platform.name}
                                    </h3>

                                    <p
                                        className="mb-6 leading-relaxed"
                                        style={{ color: "var(--secondary-text)", lineHeight: "1.7" }}
                                    >
                                        {platform.description}
                                    </p>

                                    {/* Explore CTA */}
                                    {/* <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100" style={{ color: "var(--secondary-text)" }}>
                                        <span className="text-sm font-semibold">Explore Strategy</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                    </div> */}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}