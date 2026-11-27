"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Users, Megaphone, BadgeCheck } from "lucide-react";

export default function AdPlatforms() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#4285f4": "var(--brand-blue-text)",
            "#1877f2": "var(--brand-blue-text)",
            "#0a66c2": "var(--brand-blue-text)",
            "#0078d4": "var(--brand-blue-text)",
            "#ff9900": "var(--accent-orange-text)",
            "#ff0000": "var(--accent-red-text)",
            "#ff59ffff": "var(--accent-pink-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const platforms = [
        {
            name: "Google Partner",
            logo: "/images/performance-marketing-logos/google-ads-logo.svg",
            description: "Mastery of Search, Display, Shopping, Youtube, and Discovery ads.",
            stats: { reach: "5B+ daily searches", ctr: "4.2% avg CTR" },
            color: "#4285f4",
            gradient: "from-blue-500 to-green-500",
            link: "/services/performance-marketing/google-ads",
        },
        {
            name: "Meta Business Partner",
            logo: "/images/performance-marketing-logos/meta-ads-logo.png",
            description: "Advanced structuring for Facebook, Instagram, Messenger, and WhatsApp.",
            stats: { reach: "3B+ users", ctr: "1.6% avg CTR" },
            color: "#1877f2",
            gradient: "from-blue-600 to-purple-600",
            link: "/services/performance-marketing/meta-ads",
        },
        {
            name: "LinkedIn Marketing Solutions",
            logo: "/images/performance-marketing-logos/linkedin-ads-logo.svg",
            description: "Expert B2B lead generation and Sponsored InMail campaigns.",
            stats: { reach: "900M+ professionals", ctr: "0.5% avg CTR" },
            color: "#0a66c2",
            gradient: "from-blue-700 to-cyan-600",
            link: "/services/performance-marketing/linkedin-ads",
        },
        {
            name: "Amazon Ads",
            logo: "/images/performance-marketing-logos/Amazon-ads-logo.svg",
            description: "Sponsored Products and Brands for marketplace dominance.",
            stats: { reach: "300M+ customers", ctr: "0.4% avg CTR" },
            color: "#FF9900",
            gradient: "from-orange-500 to-yellow-400",
            link: "/services/performance-marketing/amazon-ads",
        },
        {
            name: "TikTok Ads",
            logo: "/images/performance-marketing-logos/tiktok-ads-logo.webp",
            description: "Short-form video ads for Gen Z & Millennials",
            stats: { reach: "1B+ users", ctr: "2.5% avg CTR" },
            color: "#ff59ffff",
            gradient: "from-pink-500 to-cyan-400",
            link: "/services/performance-marketing/tiktok-ads",
        },
        {
            name: "YouTube Ads",
            logo: "/images/performance-marketing-logos/youtube-ads-logo.png",
            description: "Video advertising at scale",
            stats: { reach: "2B+ monthly users", ctr: "0.5% avg CTR" },
            color: "#ff0000",
            gradient: "from-red-600 to-red-400",
            link: "/services/performance-marketing/youtube-ads",
        },
        {
            name: "Microsoft Ads",
            logo: "/images/techstack_logos/Microsoft-logo-hero-image.png",
            description: "High-value desktop & B2B audience",
            stats: { reach: "60M+ desktop users", ctr: "Higher purchasing power" },
            color: "#0078D4",
            gradient: "from-blue-600 to-cyan-500",
            link: "/services/performance-marketing/microsoft-ads",
        },
        {
            name: "X (Twitter) Ads",
            logo: "/images/techstack_logos/X-logo-hero-image.png",
            description: "Viral reach & real-time conversation",
            stats: { reach: "#1 for Discovery", ctr: "High Engagement" },
            color: "#ffffff",
            gradient: "from-gray-900 to-black",
            link: "/services/performance-marketing/x-ads",
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10 lg:mb-12">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-orange) 10%, transparent)",
                            borderColor: "var(--brand-orange)",
                        }}
                    >
                        <Megaphone className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent-orange-text)" }}>
                            Ad Platforms
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        We Manage Ads Across <span style={{ color: "var(--accent-orange-text)" }}>All Major Platforms</span>
                    </h2>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Our team is certified in the top ad tech stacks and platforms. We select the right mix for your specific business model.
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {platforms.map((platform, index) => {
                        const isHovered = hoveredIndex === index;
                        const linkProp = 'link' in platform ? (platform as { link?: string }).link : undefined;

                        const cardContent = (
                            <div
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition duration-300 border overflow-hidden h-full backdrop-blur-sm"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isHovered ? platform.color : "var(--border-color)",
                                        boxShadow: isHovered ? `0 12px 30px -12px ${platform.color}50` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Logo */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-16 h-16 rounded-xl p-3 flex items-center justify-center"
                                            style={{ backgroundColor: `${platform.color}15` }}
                                        >
                                            <Image
                                                src={platform.logo}
                                                alt={platform.name}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-xl font-bold transition-colors duration-300"
                                                style={{ color: isHovered ? textAccent(platform.color) : "var(--foreground)" }}
                                            >
                                                {platform.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        {platform.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 flex-shrink-0" style={{ color: platform.color }} />
                                            <span className="text-sm font-medium">{platform.stats.reach}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 flex-shrink-0" style={{ color: platform.color }} />
                                            <span className="text-sm font-medium">{platform.stats.ctr}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );

                        return linkProp ? (
                            <Link href={linkProp} key={index} className="block">
                                {cardContent}
                            </Link>
                        ) : (
                            <div key={index}>{cardContent}</div>
                        );
                    })}
                </div>

                {/* Certified Badge */}
                <div className="mt-12 sm:mt-16 text-center px-4">
                    <div
                        className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full border"
                        style={{ backgroundColor: "color-mix(in srgb, var(--brand-orange) 5%, var(--card-bg))", borderColor: "var(--brand-orange)" }}
                    >
                        <BadgeCheck className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-orange)" }} />
                        <span className="font-semibold text-center text-sm sm:text-base" style={{ color: "var(--accent-orange-text)" }}>
                            Google Partner | Meta Business Partner | LinkedIn Marketing Partner
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
