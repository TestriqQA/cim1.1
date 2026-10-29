"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Globe, UserCheck, ShoppingBag, PieChart, Laptop } from "lucide-react";

export default function ServiceOverview() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Microsoft brand colors
    const msBlue = "#0078D4";
    const msGreen = "#107C10";
    const msYellow = "#FFB900";
    const msRed = "#D83B01";

    const services = [
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:text-[var(--primary)] transition-colors">Search Ads</Link>,
            description: "Capture high-intent traffic on Bing, Yahoo, and AOL search results.",
            color: msBlue,
        },
        {
            icon: Globe,
            title: "Audience Network",
            description: "Extend reach to premium sites like MSN, Outlook, and Edge.",
            color: msGreen,
        },
        {
            icon: UserCheck,
            title: <Link href="/services/performance-marketing/linkedin-ads" className="hover:text-[var(--primary)] transition-colors">LinkedIn Profile Targeting</Link>,
            description: "Target users based on LinkedIn profile data (Job Function, Industry).",
            color: "#0077B5", // LinkedIn Blue
        },
        {
            icon: ShoppingBag,
            title: "Shopping Campaigns",
            description: "Showcase products visually with productive listings ads.",
            color: msYellow,
        },
        {
            icon: Laptop,
            title: "Multimedia Ads",
            description: "Engage users with rich visual ads on right-hand rails.",
            color: msRed,
        },
        {
            icon: PieChart,
            title: "Local Inventory",
            description: "Drive foot traffic by showcasing in-store availability.",
            color: msBlue,
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
                        More Than Just{" "}
                        <span
                            style={{ color: "var(--brand-blue-text)" }}
                        >
                            Search
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Leverage the full power of the Microsoft Advertising ecosystem.
                    </p>
                </div>

                {/* Services Grid with Metro Tile Hover Effect */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer perspective-1000"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="relative p-8 rounded-xl border transition-all duration-300 h-full overflow-hidden"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: hoveredCard === idx ? service.color : "var(--border-color)",
                                    transform: hoveredCard === idx ? "translateY(-5px) scale(1.02)" : "translateY(0) scale(1)",
                                    boxShadow: hoveredCard === idx ? `0 10px 40px ${service.color}20` : "none",
                                }}
                            >
                                {/* Color accent bar (Metro style) */}
                                <div
                                    className="absolute top-0 left-0 w-1.5 h-full transition-all duration-300"
                                    style={{
                                        backgroundColor: service.color,
                                        opacity: hoveredCard === idx ? 1 : 0.5
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ml-4"
                                    style={{
                                        backgroundColor: hoveredCard === idx ? service.color : "transparent",
                                        border: `1px solid ${hoveredCard === idx ? service.color : "var(--border-color)"}`,
                                    }}
                                >
                                    <service.icon
                                        className="w-7 h-7"
                                        style={{ color: hoveredCard === idx ? "white" : service.color }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
