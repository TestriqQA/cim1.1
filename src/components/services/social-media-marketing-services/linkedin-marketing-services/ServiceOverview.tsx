"use client";

import { useState } from "react";
import {
    Target,
    Users,
    MessageSquare,
    BarChart3,
    Megaphone,
    FileText,
} from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const linkedinBlue = "#0A66C2";

    const services = [
        {
            icon: Target,
            title: "LinkedIn Ads Management",
            description: <>Our LinkedIn advertising agency specialists manage full-funnel campaigns including Sponsored Content, InMail, and <Link href="/services/performance-marketing/youtube-ads" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">Video Ads</Link>. We leverage LinkedIn Campaign Manager expertise to optimize bidding and creative for maximum ROI.</>,
            color: "#0A66C2",
        },
        {
            icon: Users,
            title: "LinkedIn Lead Generation Services",
            description: "Generate high-intent B2B leads directly through LinkedIn Lead Gen Forms and friction-less conversion paths. We focus on high-ticket decision-makers, reducing CPL while increasing lead quality.",
            color: "#0077B5",
        },
        {
            icon: MessageSquare,
            title: "Personalized InMail & Message Ads",
            description: "Break through the noise with LinkedIn message ads campaign management. We craft hyper-personalized direct messaging that speaks directly to the pain points of C-suite executives.",
            color: "#004182",
        },
        {
            icon: FileText,
            title: "B2B Content Marketing & Thought Leadership",
            description: <>Establish dominance with a LinkedIn <Link href="/services/seo-services/seo-content-writing-services" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">content marketing strategy</Link> for businesses. From newsletters to LinkedIn Live, we turn your executives into industry thought leaders.</>,
            color: "#0A66C2",
        },
        {
            icon: Megaphone,
            title: "LinkedIn Company Page Optimization",
            description: "Transform your profile with professional LinkedIn profile optimization for executives and full-scale LinkedIn company page management services. We ensure your brand looks premium and authoritative.",
            color: "#0077B5",
        },
        {
            icon: BarChart3,
            title: "ROI Tracking & Analytics",
            description: <>Navigate your growth with <Link href="/services/performance-marketing" className="hover:underline underline underline-offset-2 text-[var(--brand-blue-text)]">LinkedIn ads reporting</Link> and ROI tracking. We set up LinkedIn Insight Tags and Matched Audiences to provide 100% transparency on every dollar spent.</>,
            color: "#004182",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: linkedinBlue,
                        animationDuration: "4s",
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{
                        backgroundColor: linkedinBlue,
                        animationDuration: "6s",
                        animationDelay: "2s",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                color: "var(--brand-blue-text)",
                            }}
                        >
                            Our Services
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        LinkedIn{" "}
                        <span style={{ color: "var(--brand-blue-text)" }}>
                            Marketing
                        </span>{" "}
                        Services
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Comprehensive LinkedIn marketing solutions to generate high-intent B2B leads and establish global industry authority.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className={`
                                        absolute -inset-1 rounded-3xl opacity-0 transition-all duration-500 blur-xl
                                        ${isHovered ? "opacity-30" : ""}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                                    }}
                                />

                                {/* Main card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border transition-all duration-500 bg-card overflow-hidden
                                        ${isHovered ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-lg"}
                                    `}
                                    style={{
                                        backgroundColor: "var(--background)",
                                        borderColor: isHovered ? service.color : "var(--border-color)",
                                    }}
                                >
                                    {/* Animated corner accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-32 h-32 transition-all duration-500
                                            ${isHovered ? "opacity-20 scale-100" : "opacity-0 scale-0"}
                                        `}
                                        style={{
                                            background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)`,
                                        }}
                                    />

                                    {/* Icon container */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`
                                                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                                                ${isHovered ? "rotate-6 scale-110" : "rotate-0 scale-100"}
                                            `}
                                            style={{
                                                backgroundColor: isHovered ? service.color : `${service.color}15`,
                                            }}
                                        >
                                            <Icon
                                                className={`w-8 h-8 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                                                style={{
                                                    color: isHovered ? "white" : "var(--brand-blue-text)",
                                                }}
                                            />
                                        </div>

                                        {/* Floating particles */}
                                        {isHovered && (
                                            <>
                                                <div
                                                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                                                    style={{ backgroundColor: service.color }}
                                                />
                                                <div
                                                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full animate-ping"
                                                    style={{ backgroundColor: service.color, animationDelay: "0.3s" }}
                                                />
                                            </>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isHovered ? "var(--brand-blue-text)" : "var(--foreground)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="leading-relaxed"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Animated bottom border */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            width: isHovered ? "100%" : "0%",
                                            backgroundColor: service.color,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
