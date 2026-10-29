"use client";

import { useState } from "react";
import Link from "next/link";
import { Hash, MessageSquare, Video, Zap, Users, BarChart3 } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const xBlue = "#1D9BF0";
    const xBlack = "#000000";

    const services = [
        {
            icon: Hash,
            title: <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--primary)] transition-colors">Trend Takeover</Link>,
            description: "Own the #1 spot on the Explore tab for 24 hours. Maximum impact for launches.",
            highlight: "Massive Reach",
        },
        {
            icon: Video,
            title: <Link href="/services/social-media-marketing-services/video-marketing-agency" className="hover:text-[var(--primary)] transition-colors">Vertical Video Ads</Link>,
            description: "Immersive, full-screen video ads that captivate users in the feed.",
            highlight: "High Engagement",
        },
        {
            icon: MessageSquare,
            title: <Link href="/services/social-media-marketing-services" className="hover:text-[var(--primary)] transition-colors">Conversation Ads</Link>,
            description: "Prompt users to tweet about your brand with customizable hashtags and buttons.",
            highlight: "Viral Potential",
        },
        {
            icon: Zap,
            title: "Amplify Sponsorships",
            description: "Align your brand with premium video content from top publishers.",
            highlight: "Brand Safety",
        },
        {
            icon: Users,
            title: "Follower Campaigns",
            description: "Grow your community by promoting your account to interested users.",
            highlight: "Community Growth",
        },
        {
            icon: BarChart3,
            title: <Link href="/services/performance-marketing" className="hover:text-[var(--primary)] transition-colors">Performance Ads</Link>,
            description: "Drive lower-funnel results like app installs and website clicks.",
            highlight: "Measurable ROI",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t border-gray-400 dark:border-gray-800"
            style={{
                backgroundColor: "var(--background)",
            }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Formats that Stop the Scroll
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Innovative ad solutions designed for real-time engagement.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 h-full overflow-hidden hover:shadow-xl"
                                style={{
                                    borderColor: hoveredCard === idx ? xBlue : "var(--border-color)",
                                    backgroundColor: "var(--card-bg)",
                                    transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)",
                                    boxShadow: hoveredCard === idx ? "0 10px 40px rgba(0,0,0,0.1)" : "none",
                                }}
                            >
                                {/* Hover Gradient Overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${xBlue}10, transparent 70%)`
                                    }}
                                />

                                <div className="flex justify-between items-start mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-colors"
                                        style={{
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border-color)"
                                        }}
                                    >
                                        <service.icon className="w-6 h-6" style={{ color: "var(--foreground)" }} />
                                    </div>
                                    <span
                                        className="text-xs font-mono px-2 py-1 rounded transition-colors border"
                                        style={{
                                            backgroundColor: "var(--background)",
                                            color: "var(--secondary-text)",
                                            borderColor: "var(--border-color)"
                                        }}
                                    >
                                        {service.highlight}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
