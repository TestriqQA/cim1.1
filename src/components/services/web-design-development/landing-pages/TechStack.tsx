"use client";

import { Code2, BarChart, Zap, Globe, Puzzle, Share2 } from "lucide-react";
import Image from "next/image";

export default function TechStack() {
    const technologies = [
        {
            category: "Frontend & Performance",
            icon: Code2,
            items: [
                { name: "Next.js / React", description: "Static generation for speed", logos: ["/images/techstack_logos/react-logo.svg", "/images/techstack_logos/nextjs-logo.svg"] },
                { name: "Tailwind CSS", description: "Utility-first styling", logos: ["/images/techstack_logos/tailwindcss-logo.svg"] },
                { name: "Framer Motion", description: "Smooth animations", logos: ["/images/techstack_logos/framer-motion-logo.svg"] },
            ],
        },
        {
            category: "Analytics & Tracking",
            icon: BarChart,
            items: [
                { name: "Google Analytics 4", description: "Traffic analysis", logos: ["/images/organic_growth_and_seo/google-analytics-logo.webp"] },
                { name: "Google Tag Manager", description: "Event tracking", logos: ["/images/techstack_logos/google-tag-manager-logo.svg"] },
                { name: "Mixpanel / Segment", description: "User behavior", logos: ["/images/techstack_logos/mixpanel-logo.png", "/images/techstack_logos/Segment-logo.png"] },
            ],
        },
        {
            category: "AB Testing & Heatmaps",
            icon: Zap,
            items: [
                { name: "VWO / Optimizely", description: "Split testing", logos: ["/images/techstack_logos/vwo-logo.svg", "/images/techstack_logos/Optimizely-logo.webp"] },
                { name: "Hotjar / Microsoft Clarity", description: "Heatmaps & recordings", logos: ["/images/techstack_logos/Hotjar-logo.png", "/images/techstack_logos/Microsoft-Clarity-logo.png"] },
                { name: "Google Optimize", description: "Personalization", logos: ["/images/techstack_logos/google-optimize-logo.svg"] },
            ],
        },
        {
            category: "Hosting & CDN",
            icon: Globe,
            items: [
                { name: "Vercel / Netlify", description: "Global edge network", logos: ["/images/techstack_logos/vercel-logo.webp", "/images/techstack_logos/netlify-logo.svg"] },
                { name: "Cloudflare", description: "Security & caching", logos: ["/images/techstack_logos/Cloudflare-logo.webp"] },
                { name: "AWS CloudFront", description: "Content delivery", logos: ["/images/techstack_logos/aws-logo.png"] },
            ],
        },
        {
            category: "CRM & Email",
            icon: Share2,
            items: [
                { name: "HubSpot / Salesforce", description: "Lead management", logos: ["/images/ai_automation_logos/hubspot-logo.png", "/images/ai_automation_logos/salesforce-logo.png"] },
                { name: "Mailchimp / Klaviyo", description: "Email automation", logos: ["/images/ai_automation_logos/mailchimp-logo.svg", "/images/techstack_logos/Klaviyo-logo.png"] },
                { name: "Zapier / Make", description: "Workflow automation", logos: ["/images/ai_automation_logos/zapier-logo.svg", "/images/ai_automation_logos/make-logo.png"] },
            ],
        },
        {
            category: "CMS (Optional)",
            icon: Puzzle,
            items: [
                { name: "Sanity / Contentful", description: "Headless CMS", logos: ["/images/techstack_logos/Sanity-square-logo.png", "/images/techstack_logos/Contentful-logo.webp"] },
                { name: "Strapi", description: "Custom content structures", logos: ["/images/techstack_logos/Strapi-logo.png"] },
                { name: "WordPress (Headless)", description: "Familiar backend", logos: ["/images/techstack_logos/wordpress-logo-hero1.png"] },
            ],
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-green-text)" }}>Conversion</span> Tech Stack
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        We use a performance-first stack designed to load instantly and integrate seamlessly with your marketing tools.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                        }}
                    />
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                        }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                                        {tech.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {tech.items.map((item, iidx) => (
                                        <div key={iidx} className="flex items-center justify-between gap-4">
                                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                                <div
                                                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                                                    style={{ backgroundColor: "#10b981" }}
                                                />
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                                                        {item.name}
                                                    </p>
                                                    <p className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            {item.logos.length > 0 && (
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {item.logos.map((logo, lidx) => (
                                                        <div
                                                            key={lidx}
                                                            className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                                            style={{
                                                                backgroundColor: "var(--background)",
                                                                border: "1px solid var(--border-color)",
                                                            }}
                                                        >
                                                            <Image
                                                                src={logo}
                                                                alt={`${item.name} logo`}
                                                                width={32}
                                                                height={32}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
