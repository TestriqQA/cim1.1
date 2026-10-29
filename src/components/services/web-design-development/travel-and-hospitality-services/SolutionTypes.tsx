"use client";

import { useState } from "react";
import {
    Building2,
    Compass,
    Briefcase,
    Home,
    UtensilsCrossed,
    CarFront,
    Eye,
    Users,
    Calendar,
    Shield,
    Sparkles,
    ArrowRight,
    Check,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const solutions = [
        {
            icon: Building2,
            title: "Hotel & Resort Websites",
            description:
                <span>Immersive digital experiences with Travel Agency Website Design and <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline">SEO</Link>. Stunning, fast-loading sites for luxury resorts that integrate seamlessly with Hotel Property Management System (PMS).</span>,
            features: [
                "Virtual Tours & Visualizers",
                "Direct Booking Incentives",
                "PMS Integration",
                "Luxury Amenity Showcases",
            ],
            gradient: "from-teal-500 to-cyan-600",
            iconBg: "bg-gradient-to-br from-teal-500 to-cyan-600",
            accentColor: "#0d9488",
        },
        {
            icon: Compass,
            title: "Tour & Activity Platforms",
            description:
                "Scalable Travel Software Development Services for tour operators. Dynamic platforms supporting itinerary builders, group bookings, and automated guide assignment.",
            features: [
                "Itinerary Builder",
                "DMO Services Support",
                "Multi-location Management",
                "Automated Guide Assignment",
            ],
            gradient: "from-blue-500 to-indigo-600",
            iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
            accentColor: "#3b82f6",
        },
        {
            icon: Briefcase,
            title: "Travel Agency Portals",
            description:
                "Robust Travel Technology Solutions for agencies. Custom portals featuring comprehensive supplier management, agent commission tracking, and white-label capabilities.",
            features: [
                "B2B/B2C Booking Flows",
                "Supplier Management",
                "Commission Tracking",
                "White-label Capabilities",
            ],
            gradient: "from-purple-500 to-pink-600",
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
            accentColor: "#a855f7",
        },
        {
            icon: Home,
            title: "Vacation Rental Management",
            description:
                <span>End-to-end platforms for managing property portfolios. Incorporate <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 hover:underline">Hospitality Social Media Management Services</Link>, smart lock sync, and owner reporting portals.</span>,
            features: [
                "Automated Scheduling",
                "Smart Lock Sync",
                "Owner Reporting",
                "Social Media Integration",
            ],
            gradient: "from-orange-500 to-red-600",
            iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
            accentColor: "#f97316",
        },
        {
            icon: UtensilsCrossed,
            title: "Restaurant & Dining Systems",
            description:
                "Digital solutions for the F&B sector. Table reservation systems, digital menu apps with QR integration, and kitchen display systems (KDS).",
            features: [
                "Table Reservations",
                "QR Digital Menus",
                "Kitchen Display Systems",
                "Dining Personalization",
            ],
            gradient: "from-emerald-500 to-teal-600",
            iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
            accentColor: "#10b981",
        },
        {
            icon: CarFront,
            title: "Transport & Logistics Booking",
            description:
                <span>Fleet management and transfer solutions. <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:underline">Mobile App Development for Travel Agencies</Link> ensures real-time tracking and seamless customer communication.</span>,
            features: [
                "Fleet Management",
                "Driver Assignment",
                "Real-time Tracking",
                "Transfer Booking",
            ],
            gradient: "from-amber-500 to-orange-600",
            iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
            accentColor: "#f59e0b",
        },
    ];

    return (
        <section
            id="solutions"
            className="py-24 relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#0d9488" }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
                    style={{ backgroundColor: "#3b82f6", animationDelay: "1s" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)"
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: "#0d9488" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-teal-text)" }}>
                            Our Expertise
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "var(--foreground)" }}
                    >
                        <span style={{ color: "var(--accent-teal-text)" }}>Solutions</span> We Build
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Whether you are a startup needing a Custom Travel Booking Platform Development or an established resort seeking <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline">Digital Marketing for Luxury Hotels and Resorts</Link>, we deliver measurable results. Partner with us to leverage the power of <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline">Next.js</Link>, AI analytics, and cloud-native infrastructure, ensuring your business stays ahead of the curve.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto mt-8 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #0d9488, #3b82f6)",
                        }}
                    />
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeIndex === idx;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setActiveIndex(isActive ? null : idx)}
                            >
                                {/* Card */}
                                <div
                                    className={`
                                        relative p-8 rounded-3xl border-2 cursor-pointer
                                        transition-all duration-500 ease-out
                                        ${isActive ? "shadow-2xl scale-[1.02]" : "shadow-md hover:shadow-xl"}
                                        ${isHovered && !isActive ? "translate-y-[-8px]" : ""}
                                    `}
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: isActive || isHovered
                                            ? solution.accentColor
                                            : "var(--border-color)",
                                        transform: isActive ? "scale(1.02)" : undefined,
                                    }}
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div
                                        className={`
                                            absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                                            ${isHovered || isActive ? "opacity-5" : ""}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.accentColor}40, transparent)`,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon with Animation */}
                                        <div className="mb-6 relative">
                                            <div
                                                className={`
                                                    w-16 h-16 rounded-2xl flex items-center justify-center
                                                    transition-all duration-500
                                                    ${solution.iconBg}
                                                    ${isHovered || isActive ? "scale-110 rotate-6" : ""}
                                                `}
                                                style={{
                                                    boxShadow: isHovered || isActive
                                                        ? `0 8px 24px ${solution.accentColor}40`
                                                        : "none",
                                                }}
                                            >
                                                <Icon
                                                    className={`
                                                        w-8 h-8 text-white transition-transform duration-500
                                                        ${isHovered || isActive ? "scale-110" : ""}
                                                    `}
                                                />
                                            </div>

                                            {/* Animated Ring */}
                                            {(isHovered || isActive) && (
                                                <div
                                                    className="absolute inset-0 rounded-2xl border-2 animate-ping"
                                                    style={{
                                                        borderColor: solution.accentColor,
                                                        animationDuration: "1.5s",
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`
                                                text-xl md:text-2xl font-bold mb-3 transition-colors duration-300
                                            `}
                                            style={{
                                                color: isActive || isHovered
                                                    ? solution.accentColor
                                                    : "var(--foreground)",
                                            }}
                                        >
                                            {solution.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="text-sm md:text-base mb-6 leading-relaxed"
                                            style={{ color: "var(--secondary-text)" }}
                                        >
                                            {solution.description}
                                        </p>

                                        {/* Features List */}
                                        <div
                                            className={`
                                                space-y-3 overflow-hidden transition-all duration-500
                                                ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                            `}
                                        >
                                            {solution.features.map((feature, fidx) => (
                                                <div
                                                    key={fidx}
                                                    className={`
                                                        flex items-center gap-3 transition-all duration-300
                                                        ${isActive ? "translate-x-0 opacity-100" : "translate-x-[-20px] opacity-0"}
                                                    `}
                                                    style={{
                                                        transitionDelay: isActive ? `${fidx * 100}ms` : "0ms",
                                                    }}
                                                >
                                                    <div
                                                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: `${solution.accentColor}20` }}
                                                    >
                                                        <Check
                                                            className="w-3 h-3"
                                                            style={{ color: solution.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: "var(--foreground)" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        {/* <div
                                            className={`
                                                flex items-center gap-2 mt-6 font-medium text-sm
                                                transition-all duration-300
                                                ${isActive ? "opacity-0 max-h-0" : "opacity-100 max-h-10"}
                                            `}
                                            style={{ color: solution.accentColor }}
                                        >
                                            <span>Explore features</span>
                                            <ArrowRight
                                                className={`
                                                    w-4 h-4 transition-transform duration-300
                                                    ${isHovered ? "translate-x-1" : ""}
                                                `}
                                            />
                                        </div> */}
                                    </div>

                                    {/* Corner Accent */}
                                    <div
                                        className={`
                                            absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-3xl
                                            transition-all duration-500
                                            ${isActive || isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                                        `}
                                        style={{
                                            background: `linear-gradient(135deg, ${solution.accentColor}15, transparent)`,
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