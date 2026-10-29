"use client";

import { useState } from "react";
import { Layers, Server, Code, Database, Cloud, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: "streaming",
            title: "Streaming & CDN",
            icon: Cloud,
            description: "High-performance content delivery infrastructure",
            technologies: [
                { name: "AWS MediaServices", description: "Video transcoding & delivery", logo: "/images/techstack_logos/aws-logo.png" },
                { name: "Cloudflare Stream", description: "Global CDN & streaming", logo: "/images/techstack_logos/Cloudflare-logo.webp" },
                { name: "Akamai", description: "Enterprise content delivery", logo: "/images/techstack_logos/Akamai-logo.png" },
                { name: "Mux", description: "Video API platform", logo: "/images/techstack_logos/mux-logo.png" },
                { name: "Vimeo OTT", description: "White-label streaming", logo: "/images/techstack_logos/Vimeo_Logo.png" },
                { name: "Wowza", description: "Live streaming engine", logo: "/images/techstack_logos/wowza-logo.webp" },
            ],
        },
        {
            id: "players",
            title: "Video Players",
            icon: Code,
            description: "Customizable, feature-rich media players",
            technologies: [
                { name: "Video.js", description: "Open-source HTML5 player", logo: "/images/techstack_logos/Videojs-logo.png" },
                { name: "HLS.js", description: "HTTP Live Streaming", logo: "/images/techstack_logos/HLSjs-logo.png" },
                { name: "Shaka Player", description: "Adaptive streaming", logo: "/images/techstack_logos/Shaka-Player-logo.png" },
                { name: "JW Player", description: "Enterprise video player", logo: "/images/techstack_logos/JW-Player-logo.png" },
                { name: "Bitmovin", description: "Cross-platform player", logo: "/images/techstack_logos/bitmovin-logo.png" },
                { name: "THEOplayer", description: "Universal video player", logo: "/images/techstack_logos/THEOplayer-logo.webp" },
            ],
        },
        {
            id: "cms",
            title: "Content Management",
            icon: Database,
            description: "Flexible content management solutions",
            technologies: [
                { name: <Link href="/services/web-design-development/contentful-headless-cms" className="hover:underline">Contentful</Link>, description: "Headless CMS", logo: "/images/techstack_logos/Contentful-logo.webp" },
                { name: <Link href="/services/web-design-development/strapi-headless-cms" className="hover:underline">Strapi</Link>, description: "Open-source headless CMS", logo: "/images/techstack_logos/Strapi-logo.png" },
                { name: "Sanity", description: "Real-time content platform", logo: "/images/techstack_logos/Sanity-square-logo.png" },
                { name: "Prismic", description: "Slice-based CMS", logo: "/images/techstack_logos/prismic-logo.webp" },
                { name: "Directus", description: "Open data platform", logo: "/images/techstack_logos/Directus-logo.png" },
                { name: "Ghost", description: "Publishing platform", logo: "/images/techstack_logos/Ghost-logo.jpg" },
            ],
        },
        {
            id: "analytics",
            title: "Analytics & AI",
            icon: Layers,
            description: "User insights and recommendation engines",
            technologies: [
                { name: "Mixpanel", description: "Product analytics", logo: "/images/techstack_logos/mixpanel-logo.png" },
                { name: "Amplitude", description: "Digital analytics", logo: "/images/techstack_logos/Amplitude-logo.webp" },
                { name: "Segment", description: "Customer data platform", logo: "/images/techstack_logos/Segment-logo.png" },
                { name: "Algolia", description: "Search & discovery", logo: "/images/techstack_logos/algolia-logo.webp" },
                { name: "Recombee", description: "AI recommendations", logo: "/images/techstack_logos/Recombee-logo.png" },
                { name: <Link href="/services/ai-chatbots-services" className="hover:underline">OpenAI</Link>, description: "Content personalization", logo: "/images/techstack_logos/OpenAI-logo.png" },
            ],
        },
        {
            id: "payments",
            title: "Monetization",
            icon: Shield,
            description: "Subscription and payment infrastructure",
            technologies: [
                { name: "Stripe Billing", description: "Subscription management", logo: "/images/techstack_logos/Stripe-logo.png" },
                { name: "PayPal", description: "Global payments", logo: "/images/techstack_logos/paypal-logo.png" },
                { name: "Chargebee", description: "Revenue operations", logo: "/images/techstack_logos/chargebee-logo.png" },
                { name: "RevenueCat", description: "In-app subscriptions", logo: "/images/techstack_logos/RevenueCat-logo.svg" },
                { name: "Paddle", description: "SaaS payments", logo: "/images/techstack_logos/paddle-logo.png" },
                { name: "Spreedly", description: "Payment orchestration", logo: "/images/techstack_logos/Spreedly-logo.webp" },
            ],
        },
        {
            id: "backend",
            title: "Backend & Real-time",
            icon: Server,
            description: "Scalable infrastructure and real-time features",
            technologies: [
                { name: <Link href="/services/web-design-development/nodejs-backend" className="hover:underline">Firebase</Link>, description: "Real-time database & auth", logo: "/images/techstack_logos/firebase-logo.svg" },
                { name: "Supabase", description: "Open-source Firebase", logo: "/images/techstack_logos/supabase-logo.webp" },
                { name: "Socket.io", description: "Real-time communication", logo: "/images/techstack_logos/Socket-io-logo.png" },
                { name: "Redis", description: "In-memory data store", logo: "/images/techstack_logos/redis-logo.svg" },
                { name: "GraphQL", description: "API query language", logo: "/images/techstack_logos/graphql-logo.svg" },
                { name: "tRPC", description: "End-to-end type safety", logo: "/images/techstack_logos/tRPC-logo.png" },
            ],
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#8b5cf6" }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-10 blur-3xl"
                    style={{ backgroundColor: "#ec4899" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <Layers className="w-4 h-4" style={{ color: "#8b5cf6" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--brand-purple-text)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        Powered by{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Modern Tech
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        We leverage modern technologies to build scalable,
                        high-performance entertainment platforms.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === idx;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(idx)}
                                aria-label={category.title}
                                className={`
                                    flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                                    transition-all duration-300
                                    ${isActive ? "scale-105" : "hover:scale-105"}
                                `}
                                style={{
                                    backgroundColor: isActive ? "var(--brand-purple-btn)" : "var(--card-bg)",
                                    color: isActive ? "#fff" : "var(--foreground)",
                                    border: `2px solid ${isActive ? "#8b5cf6" : "var(--border-color)"}`,
                                    boxShadow: isActive ? "0 4px 16px rgba(139, 92, 246, 0.4)" : "none",
                                }}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="hidden sm:inline">{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Category Content */}
                <div
                    className="rounded-3xl border p-8 md:p-12"
                    style={{
                        backgroundColor: "var(--card-bg)",
                        borderColor: "var(--border-color)",
                    }}
                >
                    <div className="text-center mb-8">
                        <h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: "var(--foreground)" }}
                        >
                            {categories[activeCategory].title}
                        </h3>
                        <p style={{ color: "var(--secondary-text)" }}>
                            {categories[activeCategory].description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories[activeCategory].technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                {/* Logo */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                                    style={{
                                        backgroundColor: tech.logo ? "transparent" : "color-mix(in srgb, #8b5cf6 15%, transparent)",
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={typeof tech.name === 'string' ? tech.name : "Technology"}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span
                                            className="text-lg font-bold"
                                            style={{ color: "var(--accent-violet-text)" }}
                                        >
                                            {typeof tech.name === 'string' ? tech.name.charAt(0) : "*"}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-semibold truncate"
                                        style={{ color: "var(--brand-purple-text)" }}
                                    >
                                        {tech.name}
                                    </p>
                                    <p
                                        className="text-sm truncate"
                                        style={{ color: "var(--secondary-text)" }}
                                    >
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
