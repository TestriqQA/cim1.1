"use client";

import { useState } from "react";
import {
    Wrench,
    MonitorCheck,
    ShieldCheck,
    RefreshCw,
    Cloud,
    Users,
    BarChart3,
    Headset,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function SupportServices() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            icon: Wrench,
            title: "IT Business Support Services",
            description: <span>Keep your <Link href="/services/web-design-development" className="underline underline-offset-2 hover:text-[var(--foreground)] font-medium">digital assets</Link> secure and optimized.</span>,
            features: ["Regular updates & Patch Management", "Uptime Monitoring", "Additional technical support"],
        },
        {
            icon: Users,
            title: "Outsourced Administrative & Virtual Assistants",
            description: "Unlock Operational Efficiency with our Professional virtual assistant support services.",
            features: ["On-demand administrative assistance", "Outsourced HR support", "Additional legal administrative support"],
        },
        {
            icon: BarChart3,
            title: "Data Management & Back-Office",
            description: "Scale your operations without the overhead.",
            features: ["Outsourced data management", "Outsourced order processing", "Supplementary financial support"],
        },
        {
            icon: ShieldCheck,
            title: "Specialized Industry Support",
            description: "Tailored solutions for niche sectors.",
            features: [<span><Link href="/services/web-design-development/healthcare-portals" className="underline underline-offset-2 hover:text-[var(--foreground)]">Healthcare</Link> admin assistance</span>, <span><Link href="/services/web-design-development/real-estate-platforms" className="underline underline-offset-2 hover:text-[var(--foreground)]">Real estate</Link> listing management</span>, <span>Additional <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--foreground)]">marketing support</Link></span>],
        },
        {
            icon: Headset,
            title: "Customer Support & Lead Gen",
            description: <span>Grow your revenue with active <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 hover:text-[var(--foreground)] font-medium">engagement</Link>.</span>,
            features: ["Supplementary customer support", "Supplementary lead generation", "24/7 chat resolution"],
        },
    ];

    const colors = ["#4b277a", "#fab900", "#97288e"];

    // Theme-aware text equivalents. Only for TEXT sites — backgrounds/gradients/
    // shadows keep the raw hex so `${color}15`-style interpolation stays valid.
    const textAccent = (c: string) =>
        c === "#fab900" ? "var(--accent-amber-text)" :
            c === "#4b277a" ? "var(--accent-violet-text)" :
                c === "#97288e" ? "var(--brand-purple-text)" : c;

    return (
        <section
            id="services"
            className="py-12 md:py-16 lg:py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#4b277a] rounded-full blur-[150px] opacity-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#97288e] rounded-full blur-[150px] opacity-10" />
            </div>

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div
                        className="inline-flex items-center gap-2 mb-4 px-4 md:px-5 py-2 md:py-2.5 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "#fab900",
                        }}
                    >
                        <Wrench className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                        <span className="text-xs md:text-sm font-bold tracking-wide" style={{ color: "var(--accent-amber-text)" }}>
                            OUR SERVICES
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Comprehensive <span style={{ color: "var(--accent-amber-text)" }}>Business Support</span> Services
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4" style={{ color: "var(--secondary-text)" }}>
                        From Outsourced back-office support solutions to strategic IT maintenance, we offer a full suite of Custom business support packages tailored for agencies, startups, and enterprises.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const color = colors[index % colors.length];
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={index}
                                className="group relative p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-500 cursor-pointer"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: isHovered ? color : "var(--border-color)",
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: isHovered ? `0 20px 40px -15px ${color}40` : "none",
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl mb-3 sm:mb-4 md:mb-5 flex items-center justify-center transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                                        transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0)",
                                    }}
                                >
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" style={{ color }} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-base sm:text-lg font-bold mb-2 sm:mb-3 transition-colors duration-300"
                                    style={{ color: isHovered ? textAccent(color) : "var(--foreground)" }}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {service.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all duration-300"
                                            style={{
                                                backgroundColor: isHovered ? `${color}15` : "var(--hover-bg)",
                                                color: isHovered ? textAccent(color) : "var(--secondary-text)",
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover Arrow */}
                                <div
                                    className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                    style={{
                                        backgroundColor: color,
                                        opacity: isHovered ? 1 : 0,
                                        transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                                    }}
                                >
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
