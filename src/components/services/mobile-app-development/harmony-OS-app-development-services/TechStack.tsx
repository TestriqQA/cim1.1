"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("core");

    const categories = [
        { id: "core", label: "Core Tech" },
        { id: "hms", label: "HMS Core" },
        { id: "ui", label: "UI & Design" },
        { id: "testing", label: "Testing" },
        { id: "deployment", label: "Deployment" },
    ];

    const technologies: Record<string, { name: string; description: React.ReactNode; logo: string }[]> = {
        core: [
            { name: "ArkTS", description: "TypeScript-based", logo: "/images/techstack_logos/ArkUI-logo.png" },
            { name: "ArkUI", description: "Declarative UI", logo: "/images/techstack_logos/ArkUI-logo.png" },
            { name: "JavaScript", description: <Link href="/services/web-design-development" className="hover:text-[var(--accent-red-text)] transition-colors">Web Runtime</Link>, logo: "/images/techstack_logos/javascript-logo.svg" },
            { name: "C/C++", description: "Native APIs", logo: "/images/techstack_logos/c++-logo.png" },
            { name: "Cangjie", description: "New Language", logo: "" },
            { name: "DevEco Studio", description: "Official IDE", logo: "/images/techstack_logos/DevEco-Studio-logo.png" },
        ],
        hms: [
            { name: "HMS Core", description: "Core Services", logo: "" },
            { name: "Push Kit", description: "Notifications", logo: "" },
            { name: "Account Kit", description: "Authentication", logo: "" },
            { name: "Map Kit", description: "Location & Maps", logo: "" },
            { name: "ML Kit", description: "Machine Learning", logo: "" },
            { name: "Health Kit", description: "Health Data", logo: "" },
        ],
        ui: [
            { name: "ArkUI", description: "Declarative UI", logo: "/images/techstack_logos/ArkUI-logo.png" },
            { name: "HarmonyOS Design", description: "Design System", logo: "" },
            { name: "Figma", description: <Link href="/services/brand-identity-design" className="hover:text-[var(--accent-red-text)] transition-colors">Design Tool</Link>, logo: "/images/techstack_logos/figma-logo.svg" },
            { name: "Atomic Design", description: "Component System", logo: "" },
            { name: "Motion Design", description: "Animations", logo: "" },
            { name: "Adaptive Layout", description: "Multi-device", logo: "" },
        ],
        testing: [
            { name: "DevEco Testing", description: "Unit Testing", logo: "" },
            { name: "Simulator", description: "Device Testing", logo: "" },
            { name: "Remote Device", description: "Cloud Testing", logo: "" },
            { name: "Performance", description: "Profiling", logo: "" },
            { name: "Compatibility", description: "Device Matrix", logo: "" },
            { name: "Security Scan", description: "App Review", logo: "" },
        ],
        deployment: [
            { name: "AppGallery", description: "Distribution", logo: "" },
            { name: "AppGallery Connect", description: "Backend", logo: "" },
            { name: "OTA Updates", description: "App Updates", logo: "" },
            { name: "A/B Testing", description: "Experiments", logo: "" },
            { name: "Crash Service", description: "Monitoring", logo: "" },
            { name: "APM", description: "Performance", logo: "" },
        ],
    };

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>HarmonyOS</span>{" "}
                        <span style={{ color: "var(--accent-red-text)" }}>
                            Technology Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Modern development tools and HMS services for building distributed HarmonyOS applications.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                ${activeTab === cat.id
                                    ? "text-white shadow-lg transform scale-105"
                                    : "hover:bg-accent"
                                }
                            `}
                            style={{
                                backgroundColor: activeTab === cat.id ? "#C7000B" : "var(--background)",
                                color: activeTab === cat.id ? "white" : "var(--secondary-text)",
                                border: activeTab === cat.id ? "none" : "1px solid var(--border-color)",
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Technology Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies[activeTab].map((tech, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Logo */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: tech.logo ? "var(--card-bg)" : "#C7000B",
                                        border: tech.logo ? "1px solid var(--border-color)" : "none",
                                    }}
                                >
                                    {tech.logo ? (
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-lg">
                                            {tech.name.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                                        {tech.name}
                                    </h3>
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        {tech.description}
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
