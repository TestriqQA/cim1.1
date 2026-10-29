"use client";

import { useState } from "react";
import { Sparkles, Palette, Type, Image, MessageSquare, FileText, Hexagon, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BrandElements() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Theme-aware text equivalents. Only for TEXT sites — backgrounds/gradients/
    // shadows keep the raw hex so `${color}NN`-style interpolation stays valid.
    const textAccent = (c: string): string => {
        const map: Record<string, string> = {
            "#fab900": "var(--accent-amber-text)",
            "#ee6500": "var(--accent-orange-text)",
            "#bc3feb": "var(--brand-purple-text)",
            "#008ac1": "var(--brand-blue-text)",
            "#00b5ca": "var(--accent-teal-text)",
            "#6db75c": "var(--accent-green-text)",
        };
        return map[c.toLowerCase()] ?? c;
    };

    const elements = [
        {
            icon: Hexagon,
            title: "Strategic Logo Design",
            description: "Your logo is the cornerstone of your brand. We deliver logo and brand identity design packages that include primary marks, secondary lockups, and responsive favicons.",
            features: ["Primary marks", "Secondary lockups", "Responsive favicons", "Trademark ready"],
            color: "#fab900",
            preview: "logo",
        },
        {
            icon: Type,
            title: "Typography Systems",
            description: <span>We select and customize typefaces that embody your brand voice, ensuring specific <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">readability and accessibility</Link> (WCAG 2.1 compliant).</span>,
            features: ["Modern sans-serifs", "Elegant serifs", "Readability focused", "WCAG 2.1 compliant"],
            color: "#bc3feb",
            preview: "type",
        },
        {
            icon: Palette,
            title: "Color Architecture",
            description: "Our designers act as color strategists, developing palettes that evoke the right emotions with defined HEX, RGB, CMYK, and pure codes.",
            features: ["Color psychology", "Primary & secondary", "Functional codes", "Cross-media consistent"],
            color: "#ee6500",
            preview: "colors",
        },
        {
            icon: MessageSquare,
            title: "Brand Messaging",
            description: <span>We develop custom brand voice and visual identity guides that define how your brand speaks, from punchy <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">marketing copy</Link> to technical documentation.</span>,
            features: ["Voice & Tone", "Storytelling", "Key messaging", "Content guidelines"],
            color: "#008ac1",
            preview: "voice",
        },
        {
            icon: Image,
            title: "Illustration Style",
            description: "We define unique imagery styles-custom illustrations, icon sets, and photography guidelines-that separate you from the stock-photo crowd.",
            features: ["Custom illustrations", "Icon sets", "Photo guidelines", "Premium positioning"],
            color: "#00b5ca",
            preview: "imagery",
        },
        {
            icon: FileText,
            title: "Brand Style Guide",
            description: "We deliver a detailed Brand Style Guide (30-50+ pages) covering usage rules, do's and don'ts, and grid systems to protect your brand equity.",
            features: ["Usage rules", "Do's and don'ts", "Grid systems", "Scalable rules"],
            color: "#6db75c",
            preview: "guidelines",
        },
    ];

    return (
        <section
            className="py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--foreground)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, transparent)",
                            borderColor: "var(--brand-yellow)",
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                        <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-amber-text)" }}>
                            BRAND ELEMENTS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The Building Blocks of <span style={{ color: "var(--accent-amber-text)" }}>Your Brand</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Each element works together to create a cohesive brand identity that resonates with your audience.
                    </p>
                </div>

                {/* Elements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {elements.map((element, index) => {
                        const Icon = element.icon;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="relative p-6 rounded-2xl transition-all duration-500 border overflow-hidden h-full"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--background) 90%, transparent)",
                                        borderColor: isHovered ? element.color : "var(--border-color)",
                                        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                                        boxShadow: isHovered ? `0 25px 50px -12px ${element.color}40` : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Background gradient on hover */}
                                    <div
                                        className="absolute inset-0 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at top right, ${element.color}15, transparent 70%)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-xl p-3 mb-4 transition-all duration-500 relative z-10"
                                        style={{
                                            backgroundColor: `${element.color}20`,
                                            transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        <Icon className="w-full h-full" style={{ color: element.color }} />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl font-bold mb-2 relative z-10 transition-colors duration-300"
                                        style={{ color: isHovered ? textAccent(element.color) : "var(--foreground)" }}
                                    >
                                        {element.title}
                                    </h3>
                                    <p className="text-sm mb-4 relative z-10" style={{ color: "var(--secondary-text)" }}>
                                        {element.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2 relative z-10">
                                        {element.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: element.color }} />
                                                <span className="text-xs font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, ${element.color}, transparent)`,
                                            width: isHovered ? "100%" : "0%",
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
