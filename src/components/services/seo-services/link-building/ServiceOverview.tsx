"use client";

import { useState } from "react";
import { Link2, Mail, FileText, Megaphone, BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Link Building Cyan theme color
    const linkCyan = "#06b6d4";

    const services = [
        {
            id: 1,
            icon: Mail,
            title: "Outreach Campaigns",
            description: "Strategic outreach to relevant websites and influencers in your niche for natural link acquisition.",
            details: ["Personalized emails", "Relationship building", "Follow-up sequences", "Response tracking"],
        },
        {
            id: 2,
            icon: FileText,
            title: "Guest Posting",
            description: "High-quality guest articles on authoritative sites with contextual backlinks to your content.",
            details: [<Link href="/services/seo-services/seo-content-writing-services" className="hover:underline" style={{ color: "var(--secondary-text)" }}>Content creation</Link>, "Site vetting", "Editorial links", "Brand mentions"],
        },
        {
            id: 3,
            icon: Megaphone,
            title: "Digital PR",
            description: "Earn links through newsworthy content, press releases, and media coverage in your industry.",
            details: ["Press releases", "Data studies", "Expert quotes", <Link href="/services/performance-marketing" className="hover:underline" style={{ color: "var(--secondary-text)" }}>Media pitching</Link>],
        },
        {
            id: 4,
            icon: BookOpen,
            title: "Resource Link Building",
            description: "Create linkable assets like guides, tools, and infographics that naturally attract backlinks.",
            details: ["Resource pages", "Link magnets", "Skyscraper content", <Link href="/services/seo-services/technical-seo-services" className="hover:underline" style={{ color: "var(--secondary-text)" }}>Broken link reclamation</Link>],
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            {/* Animated Background Circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 animate-pulse"
                    style={{ backgroundColor: linkCyan }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-5 animate-pulse"
                    style={{ backgroundColor: linkCyan, animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                        style={{
                            backgroundColor: `${linkCyan}15`,
                            borderColor: `${linkCyan}40`,
                        }}
                    >
                        <Link2 className="w-4 h-4" style={{ color: linkCyan }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--accent-cyan-text)" }}>
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Link Building <span style={{ color: "var(--accent-cyan-text)" }}>Services</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Strategic approaches to acquire high-quality backlinks that boost your authority and rankings.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: hoveredId === service.id ? linkCyan : "var(--border-color)",
                                boxShadow: hoveredId === service.id ? `0 8px 30px ${linkCyan}20` : "none",
                            }}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Hover Reveal Background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, ${linkCyan}05, ${linkCyan}10)`,
                                }}
                            />

                            <div className="relative z-10">
                                {/* Icon & Arrow */}
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: `${linkCyan}15`,
                                        }}
                                    >
                                        <service.icon className="w-7 h-7" style={{ color: linkCyan }} />
                                    </div>
                                    <ArrowUpRight
                                        className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
                                        style={{ color: linkCyan }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    {service.title}
                                </h3>
                                <p className="mb-4" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Details - Reveal on Hover */}
                                <div
                                    className="grid grid-cols-2 gap-2 overflow-hidden transition-all duration-500"
                                    style={{
                                        maxHeight: hoveredId === service.id ? "200px" : "0px",
                                        opacity: hoveredId === service.id ? 1 : 0,
                                    }}
                                >
                                    {service.details.map((detail, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-sm"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: linkCyan }}
                                            />
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
