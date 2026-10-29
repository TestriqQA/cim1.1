"use client";

import { useState } from "react";
import {
    Utensils,
    Stethoscope,
    Scale,
    Hammer,
    ShoppingBag,
    Home,
    Building2,
} from "lucide-react";
import Link from "next/link";

export default function SolutionTypes() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    // Theme-aware TEXT variants of the per-industry accent hues below.
    // The raw hues stay in the data (they drive borders/tints/indicators/icons);
    // this map is applied ONLY where a hue colors text.
    const accentTextMap: Record<string, string> = {
        "#F59E0B": "var(--accent-amber-text)",
        "#EF4444": "var(--accent-red-text)",
        "#1E40AF": "var(--brand-blue-text)",
        "#EA580C": "var(--accent-orange-text)",
        "#DB2777": "var(--accent-pink-text)",
        "#059669": "var(--accent-green-text)",
        "#06B6D4": "var(--accent-cyan-text)",
        "#8B5CF6": "var(--accent-violet-text)",
        "#F97316": "var(--accent-orange-text)",
    };
    const textAccent = (hex: string) => accentTextMap[hex] ?? hex;

    const solutions = [
        {
            id: "hospitality",
            title: <Link href="/services/web-design-development/business-corporate" className="hover:underline">Hospitality</Link>,
            description: "Rank for 'best restaurants near me' - We optimize menus, hours, and booking integrations. Implemented reservation schema drives more table bookings.",
            icon: Utensils,
            color: localAmber,
        },
        {
            id: "medical",
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--accent-red-text)] transition-colors">Medical & Dental</Link>,
            description: "Rank for 'doctor near me' - HIPAA-compliant review strategies, patient testimonial optimization, and medical schema markup help clinics rank for high-intent queries.",
            icon: Stethoscope,
            color: "#EF4444",
        },
        {
            id: "legal",
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--brand-blue-text)] transition-colors">Legal Services</Link>,
            description: "Dominate 'lawyer near me' - We build authoritative citations on Avvo, Justia, and FindLaw, optimize for practice area + city keywords (e.g., 'DUI attorney Chicago').",
            icon: Scale,
            color: "#1E40AF",
        },
        {
            id: "homeservices",
            title: <Link href="/services/seo-services" className="hover:text-[var(--accent-orange-text)] transition-colors">Home Services</Link>,
            description: "Rank for 'emergency plumber,' 'HVAC repair' - Service area business (SAB) optimization with radius targeting. Our contractors average more service calls from Maps.",
            icon: Hammer,
            color: "#EA580C",
        },
        {
            id: "retail",
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-pink-text)] transition-colors">Local Retail</Link>,
            description: "Drive foot traffic from online searches - Product inventory feeds synced to GBP. Brick-and-mortar stores see increase in store visits tracked via Google's foot traffic analytics.",
            icon: ShoppingBag,
            color: "#DB2777",
        },
        {
            id: "realestate",
            title: <Link href="/services/web-design-development/real-estate-platforms" className="hover:text-[var(--accent-green-text)] transition-colors">Real Estate</Link>,
            description: "Become the go-to expert in your market - Hyperlocal content targeting neighborhood names, MLS integration for property listings. Realtors gain more buyer/seller inquiries.",
            icon: Home,
            color: "#059669",
        },
        {
            id: "dental",
            title: <Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--accent-cyan-text)] transition-colors">Dental Practices</Link>,
            description: "Top rankings for 'dentist near me' - We optimize appointment booking systems, dental procedure schema, insurance information. Practices achieve more new patient appointments.",
            icon: Stethoscope,
            color: "#06B6D4",
        },
        {
            id: "automotive",
            title: "Automotive",
            description: "Rank for 'car dealerships near me' - Inventory feed optimization (auto schema markup), service department promotion. Dealerships report more test drive bookings.",
            icon: Building2,
            color: "#8B5CF6",
        },
        {
            id: "insurance",
            title: <Link href="/services/web-design-development/fintech-solutions" className="hover:text-[var(--accent-orange-text)] transition-colors">Insurance</Link>,
            description: "Top 3 for 'insurance agent near me' - We create location-based landing pages for each insurance type, optimize agent bios with local expertise.",
            icon: Building2,
            color: "#F97316",
        },
    ];

    return (
        <section
            className="py-24 relative overflow-hidden border-t"
            style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: `${localAmber}40`,
                            }}
                        >
                            <Building2 className="w-4 h-4" style={{ color: "var(--accent-amber-text)" }} />
                            <span className="text-sm font-medium" style={{ color: "var(--accent-amber-text)" }}>
                                Target Industries
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Industries We <span style={{ color: "var(--accent-amber-text)" }}>Grow</span>
                        </h2>
                        <p className="text-lg text-[var(--secondary-text)] mb-8">
                            Hyperlocal strategies tailored to your customer's buying journey. We've delivered top 3 rankings for diverse sectors.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        {/* Decorative line or element could go here */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, idx) => {
                        const Icon = solution.icon;
                        const isActive = activeIdx === idx;

                        return (
                            <div
                                key={solution.id}
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                            >
                                <div
                                    className={`
                                        h-full p-8 rounded-3xl border transition-all duration-300
                                        ${isActive ? "scale-[1.02]" : ""}
                                    `}
                                    style={{
                                        borderColor: isActive ? solution.color : "var(--border-color)",
                                        backgroundColor: "var(--card-bg)",
                                        boxShadow: isActive ? `0 10px 40px -10px ${solution.color}20` : "none"
                                    }}
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300"
                                            style={{
                                                backgroundColor: isActive ? solution.color : `${solution.color}15`,
                                                color: isActive ? "white" : solution.color
                                            }}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div
                                            className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                                            style={{
                                                borderColor: isActive ? solution.color : "var(--border-color)",
                                                color: isActive ? textAccent(solution.color) : "var(--secondary-text)"
                                            }}
                                        >
                                            Local
                                        </div>
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-3 transition-colors duration-300"
                                        style={{ color: isActive ? textAccent(solution.color) : "var(--foreground)" }}
                                    >
                                        {solution.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                        {solution.description}
                                    </p>

                                    {/* Bottom indicator */}
                                    <div
                                        className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-300"
                                        style={{
                                            backgroundColor: solution.color,
                                            opacity: isActive ? 1 : 0,
                                            transform: isActive ? "translateY(0)" : "translateY(4px)"
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
