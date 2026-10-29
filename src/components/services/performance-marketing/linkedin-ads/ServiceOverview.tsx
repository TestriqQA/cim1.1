"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, MessageSquare, UserPlus, Sparkles, Video, Image } from "lucide-react";

export default function ServiceOverview() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    // LinkedIn brand color
    const linkedInBlue = "#0a66c2";

    const services = [
        {
            icon: FileText,
            title: "Sponsored Content",
            description: "Native ads in the LinkedIn feed that look and feel like organic content.",
            formats: ["Single Image", "Carousel", "Video", "Document"],
            bestFor: "Brand awareness & thought leadership",
        },
        {
            icon: MessageSquare,
            title: "Message Ads",
            description: "Direct messages to prospects' LinkedIn inbox with personalized CTAs.",
            formats: ["Conversation Ads", "Message Ads", "InMail"],
            bestFor: "Lead generation & event promotion",
        },
        {
            icon: UserPlus,
            title: <Link href="/services/web-design-development/landing-pages" className="hover:text-[var(--primary)] transition-colors">Lead Gen Forms</Link>,
            description: "Pre-filled forms that capture leads without leaving LinkedIn.",
            formats: ["Sponsored Content", "Message Ads", "Dynamic Ads"],
            bestFor: "High-quality B2B lead capture",
        },
        {
            icon: Sparkles,
            title: "Dynamic Ads",
            description: "Personalized ads using member profile data for higher engagement.",
            formats: ["Follower Ads", "Spotlight Ads", "Jobs Ads"],
            bestFor: "Personalization at scale",
        },
        {
            icon: Video,
            title: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Video Ads</Link>,
            description: "Engaging video content to tell your brand story and drive action.",
            formats: ["In-feed Video", "Video Carousel", "Connected TV"],
            bestFor: "Brand storytelling & engagement",
        },
        {
            icon: Image,
            title: "Text & Display Ads",
            description: "Simple PPC ads shown in the right rail and top banner.",
            formats: ["Text Ads", "Spotlight Ads", "Display Ads"],
            bestFor: "Cost-effective awareness",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        LinkedIn Ads <span style={{ color: "var(--brand-blue-text)" }}>Formats</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Every ad format optimized for B2B lead generation and brand building.
                    </p>
                </div>

                {/* Services Grid with Sliding Reveal */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setActiveCard(idx)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div
                                className="relative p-6 rounded-2xl border transition-all duration-500 h-full overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: activeCard === idx ? linkedInBlue : "var(--border-color)",
                                    transform: activeCard === idx
                                        ? "translateY(-8px)"
                                        : "translateY(0)",
                                    boxShadow: activeCard === idx
                                        ? `0 20px 40px ${linkedInBlue}20, 0 0 0 1px ${linkedInBlue}`
                                        : "none",
                                }}
                            >
                                {/* Sliding background panel */}
                                <div
                                    className="absolute inset-0 transition-transform duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${linkedInBlue}08, ${linkedInBlue}03)`,
                                        transform: activeCard === idx ? "translateX(0)" : "translateX(-100%)",
                                    }}
                                />

                                {/* Icon with bouncing effect */}
                                <div
                                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{
                                        backgroundColor: `${linkedInBlue}15`,
                                        transform: activeCard === idx ? "translateY(-4px)" : "translateY(0)",
                                    }}
                                >
                                    <service.icon className="w-7 h-7" style={{ color: "var(--brand-blue-text)" }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 relative z-10" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Formats */}
                                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                                    {service.formats.map((format, fIdx) => (
                                        <span
                                            key={fIdx}
                                            className="px-2 py-1 rounded-full text-xs font-medium transition-all duration-300"
                                            style={{
                                                backgroundColor: activeCard === idx ? `${linkedInBlue}15` : "var(--background)",
                                                color: activeCard === idx ? "var(--brand-blue-text)" : "var(--secondary-text)",
                                                transitionDelay: `${fIdx * 30}ms`,
                                            }}
                                        >
                                            {format}
                                        </span>
                                    ))}
                                </div>

                                {/* Best For badge */}
                                <div
                                    className="relative z-10 pt-3 border-t transition-all duration-300"
                                    style={{
                                        borderColor: activeCard === idx ? `${linkedInBlue}30` : "var(--border-color)",
                                    }}
                                >
                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                        <span className="font-semibold" style={{ color: "var(--brand-blue-text)" }}>Best for:</span> {service.bestFor}
                                    </p>
                                </div>

                                {/* Bottom gradient line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
                                    style={{
                                        background: linkedInBlue,
                                        width: activeCard === idx ? "100%" : "0%",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
