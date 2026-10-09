"use client";

import { Target, Magnet, Calendar, Rocket, Smartphone, MousePointerClick, ArrowRight, Sparkles, Clock, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';

export default function SolutionTypes() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const solutions = [
        {
            icon: Target,
            title: "PPC Landing Pages",
            description: "Dedicated pages for your Google and Social Ads designed to match ad intent and maximize Quality Score.",
            features: ["Ad message matching", "Fast loading for mobile", "Clear value prop", "Conversion tracking"],
            color: "from-[#10b981] to-[#0ea5e9]",
            accentColor: "#10b981",
            badge: "High ROAS",
            timeline: "5-7 days",
            techStack: ["React", "Analytics", "A/B Tools"],
        },
        {
            icon: Magnet,
            title: "Lead Gen / Squeeze Pages",
            description: "Minimalist pages focused on one thing: capturing contact information in exchange for a lead magnet.",
            features: ["Minimal distractions", "High-value offer", "Easy form entry", "Autoresponder sync"],
            color: "from-[#0ea5e9] to-[#008ac1]",
            accentColor: "#0ea5e9",
            badge: "Lead Volume",
            timeline: "3-5 days",
            techStack: ["Next.js", "HubSpot", "Mailchimp"],
        },
        {
            icon: Rocket,
            title: "Product Launch Pages",
            description: "Build hype and collect pre-orders for your new product. Feature-rich pages with video, benefits, and social proof.",
            features: ["Video integration", "Countdown timers", "Social proof", "Pre-order flows"],
            color: "from-[#22c55e] to-[#10b981]",
            accentColor: "#22c55e",
            badge: "Maximum Hype",
            timeline: "1-2 weeks",
            techStack: ["Next.js", "Stripe", "Video"],
        },
        {
            icon: Calendar,
            title: "Webinar Registration",
            description: "Get more attendees for your events with persuasive registration pages that highlight speaker value and urgency.",
            features: ["Speaker bios", "Event schedule", "Urgency timers", "Cal integration"],
            color: "from-[#10b981] to-[#14b8a6]",
            accentColor: "#14b8a6",
            badge: "Event Fill",
            timeline: "3-5 days",
            techStack: ["React", "Zoom API", "Calendar"],
        },
        {
            icon: Smartphone,
            title: "App Download Pages",
            description: "Showcase your mobile app's features and drive installs directly to the App Store and Google Play.",
            features: ["App Store badges", "Feature carousel", "QR codes", "Deep linking"],
            color: "from-[#0ea5e9] to-[#3b82f6]",
            accentColor: "#3b82f6",
            badge: "More Installs",
            timeline: "1 week",
            techStack: ["Next.js", "Framer", "Smart Links"],
        },
        {
            icon: MousePointerClick,
            title: "Click-Through Pages",
            description: "Warm up cold traffic before sending them to a checkout or offer page. Ideal for complex products requiring education.",
            features: ["Problem-Agitate-Solve", "Storytelling", "Bridge content", "Soft CTA"],
            color: "from-[#22c55e] to-[#84cc16]",
            accentColor: "#84cc16",
            badge: "Warm Leads",
            timeline: "1 week",
            techStack: ["Next.js", "Content", "Pixel"],
        },
    ];

    const accentTextMap: Record<string, string> = {
        "#10b981": "var(--accent-green-text)",
        "#0ea5e9": "var(--accent-sky-text)",
        "#22c55e": "var(--accent-green-text)",
        "#14b8a6": "var(--accent-teal-text)",
        "#3b82f6": "var(--accent-sky-text)",
        "#84cc16": "var(--accent-lime-text)",
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Meshes */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#10b981]/10 via-[#0ea5e9]/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-[#0ea5e9]/10 via-[#22c55e]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
                        linear-gradient(var(--foreground) 1px, transparent 1px),
                        linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }} />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background:
                                "linear-gradient(90deg, color-mix(in srgb, #10b981 8%, transparent), color-mix(in srgb, #0ea5e9 8%, transparent))",
                            borderColor: "color-mix(in srgb, #10b981 20%, transparent)",
                            color: "var(--accent-green-text)",
                        }}
                    >
                        <Target className="w-4 h-4" />
                        <span className="text-sm font-semibold">Solution Types</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-green-text)" }}>Landing Page Solutions</span> We Build
                    </h2>

                    <p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        From rapid lead capture to high-gloss product launches, we build the exact type of page your campaign needs.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #10b981, #0ea5e9)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-8 -rotate-3"
                                    }`}
                                style={{
                                    transitionDelay: `${400 + idx * 80}ms`,
                                }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Card Container with 3D Effect */}
                                <div
                                    className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-lg"
                                        }`}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        border: `2px solid ${isHovered ? solution.accentColor + '40' : 'var(--border-color)'}`,
                                        transform: isHovered ? "translateY(-8px) rotateX(2deg)" : "translateY(0) rotateX(0)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Top Gradient Bar */}
                                    <div
                                        className={`h-2 bg-gradient-to-r ${solution.color} transition-all duration-500`}
                                        style={{
                                            transform: isHovered ? "scaleY(1.5)" : "scaleY(1)",
                                        }}
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-6 right-6 z-20">
                                        <div
                                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                                                }`}
                                            style={{
                                                backgroundColor: `${solution.accentColor}20`,
                                                color: accentTextMap[solution.accentColor],
                                                border: `1px solid ${solution.accentColor}40`,
                                            }}
                                        >
                                            {solution.badge}
                                        </div>
                                    </div>

                                    {/* Icon Section */}
                                    <div className="p-8 pb-4">
                                        <div className="relative inline-block mb-6">
                                            {/* Outer Ring */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl transition-all duration-700 ${isHovered ? "scale-125 rotate-180 opacity-100" : "scale-100 rotate-0 opacity-0"
                                                    }`}
                                                style={{
                                                    border: `2px dashed ${solution.accentColor}40`,
                                                }}
                                            />

                                            {/* Icon Container */}
                                            <div
                                                className={`relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
                                                    }`}
                                                style={{
                                                    background: `linear-gradient(135deg, ${solution.accentColor}25, ${solution.accentColor}05)`,
                                                    boxShadow: isHovered ? `0 0 30px ${solution.accentColor}40` : "none",
                                                }}
                                            >
                                                <Icon
                                                    className="w-10 h-10 transition-transform duration-500 group-hover:scale-110"
                                                    style={{ color: solution.accentColor }}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-2xl font-bold mb-3 transition-colors duration-300"
                                            style={{
                                                color: isHovered ? accentTextMap[solution.accentColor] : "var(--foreground)"
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm leading-relaxed mb-6"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Timeline Badge */}
                                        <div className="flex items-center gap-2 mb-6">
                                            <Clock className="w-4 h-4" style={{ color: solution.accentColor }} />
                                            <span className="text-xs font-semibold" style={{ color: accentTextMap[solution.accentColor] }}>
                                                {solution.timeline}
                                            </span>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-6">
                                            {solution.features.map((feature, fidx) => (
                                                <li
                                                    key={fidx}
                                                    className="flex items-start gap-3 transition-all duration-300"
                                                    style={{
                                                        transform: isHovered ? `translateX(${fidx * 2}px)` : "translateX(0)",
                                                        transitionDelay: `${fidx * 50}ms`,
                                                    }}
                                                >
                                                    <div
                                                        className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300"
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}20`,
                                                            transform: isHovered ? "rotate(45deg)" : "rotate(0)",
                                                        }}
                                                    >
                                                        <div
                                                            className="w-2 h-2 rounded-full"
                                                            style={{ backgroundColor: solution.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: "var(--secondary-text)" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                                Tech Stack
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {solution.techStack.map((tech, tidx) => (
                                                    <div
                                                        key={tidx}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-80"
                                                            }`}
                                                        style={{
                                                            backgroundColor: `${solution.accentColor}10`,
                                                            color: accentTextMap[solution.accentColor],
                                                            border: `1px solid ${solution.accentColor}20`,
                                                            transitionDelay: `${tidx * 50}ms`,
                                                        }}
                                                    >
                                                        {tech}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    {/* Bottom Shine Effect */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(to top, ${solution.accentColor}10, transparent)`,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                    />

                                    {/* Floating Particles */}
                                    {isHovered && (
                                        <>
                                            <Sparkles
                                                className="absolute top-20 right-8 w-5 h-5 animate-pulse"
                                                style={{ color: solution.accentColor, opacity: 0.4 }}
                                            />
                                            <Sparkles
                                                className="absolute bottom-32 left-8 w-4 h-4 animate-pulse"
                                                style={{ color: solution.accentColor, opacity: 0.3, animationDelay: "0.5s" }}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`mt-20 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div
                        className="relative overflow-hidden p-10 md:p-12 rounded-3xl"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            border: "2px solid var(--border-color)",
                        }}
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[#10b981] via-[#0ea5e9] to-[#22c55e]"
                                style={{
                                    backgroundSize: "400% 400%",
                                    animation: "gradient-move 15s ease infinite",
                                }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left max-w-2xl">
                                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                                    <TrendingUp className="w-6 h-6" style={{ color: "var(--accent-green-text)" }} />
                                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--accent-green-text)" }}>
                                        Ready to Scale?
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                    Stop Losing Leads. Start Converting.
                                </h3>
                                <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                    Schedule a consultation to specific high-converting landing pages for your business.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap"
                                style={{
                                    background: "linear-gradient(135deg, #10b981, #0ea5e9)",
                                }}
                            >
                                Start Your Project
                                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>
                        </div>

                        {/* Corner Accents */}
                        <Sparkles className="absolute top-6 right-6 w-8 h-8 text-[var(--accent-green-text)] opacity-20" />
                        <Sparkles className="absolute bottom-6 left-6 w-6 h-6 text-[var(--accent-sky-text)] opacity-20" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-slide {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}
