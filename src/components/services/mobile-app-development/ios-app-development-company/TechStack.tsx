"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("core");

    const categories = [
        { id: "core", label: "Core Technologies" },
        { id: "frameworks", label: "Frameworks & UI" },
        { id: "data", label: "Data & Storage" },
        { id: "tools", label: "Dev Tools" },
        { id: "cloud", label: "Cloud & Backend" },
    ];

    const technologies: Record<string, { name: string; description: React.ReactNode; logo: string }[]> = {
        core: [
            { name: "Swift", description: "Primary Language", logo: "/images/techstack_logos/swift-logo.svg" },
            { name: "Objective-C", description: "Legacy Support", logo: "/images/techstack_logos/objectivec_logo.webp" },
            { name: "Xcode", description: "IDE & Tools", logo: "/images/techstack_logos/Xcode-logo.webp" },
            { name: "Swift Package Manager", description: "Dependencies", logo: "" },
            { name: "CocoaPods", description: "Package Manager", logo: "/images/techstack_logos/CocoaPods-logo.svg" },
            { name: "Carthage", description: "Dependency Mgmt", logo: "/images/techstack_logos/Carthage-logo.png" },
        ],
        frameworks: [
            { name: "SwiftUI", description: "Modern UI", logo: "" },
            { name: "UIKit", description: "Classic Framework", logo: "/images/techstack_logos/UIKit-logo.svg" },
            { name: "Combine", description: "Reactive", logo: "/images/techstack_logos/Combine-logo.png" },
            { name: "SwiftData", description: "Data Modeling", logo: "/images/techstack_logos/SwiftData-logo.webp" },
            { name: "ARKit", description: "Augmented Reality", logo: "/images/techstack_logos/ARKit-logo.png" },
            { name: "Metal", description: "Graphics API", logo: "/images/techstack_logos/Metal-logo.png" },
        ],
        data: [
            { name: "Core Data", description: "Local Storage", logo: "" },
            { name: "CloudKit", description: "iCloud Sync", logo: "/images/techstack_logos/CloudKit-logo.png" },
            { name: "Realm", description: "Mobile Database", logo: "/images/techstack_logos/Realm-logo.png" },
            { name: "SQLite", description: "SQL Database", logo: "/images/techstack_logos/sqlite-logo.svg" },
            { name: "UserDefaults", description: "Preferences", logo: "" },
            { name: "Keychain", description: "Secure Storage", logo: "/images/techstack_logos/Keychain-logo.png" },
        ],
        tools: [
            { name: "TestFlight", description: "Beta Testing", logo: "/images/techstack_logos/TestFlight-logo.webp" },
            { name: "XCTest", description: "Unit Testing", logo: "/images/techstack_logos/XCTest-logo.png" },
            { name: "Instruments", description: "Profiling", logo: "/images/techstack_logos/Xcode-logo.webp" },
            { name: "App Store Connect", description: "Distribution", logo: "/images/techstack_logos/App-Store-logo.png" },
            { name: "Fastlane", description: "Automation", logo: "/images/techstack_logos/Fastlane-logo.png" },
            { name: "SwiftLint", description: "Code Quality", logo: "" },
        ],
        cloud: [
            { name: "Firebase", description: "Backend Services", logo: "/images/techstack_logos/firebase-logo.svg" },
            { name: "AWS Amplify", description: <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Cloud Platform</Link>, logo: "/images/techstack_logos/aws-logo.png" },
            { name: "Supabase", description: "Open Source BaaS", logo: "/images/techstack_logos/supabase-logo.webp" },
            { name: "Node.js", description: <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">API Backend</Link>, logo: "/images/techstack_logos/nodejs-logo.svg" },
            { name: "GraphQL", description: "API Layer", logo: "/images/techstack_logos/graphql-logo.svg" },
            { name: "REST APIs", description: "Web Services", logo: "/images/techstack_logos/REST-API-logo.png" },
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
                        <span style={{ color: "var(--foreground)" }}>iOS Development</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Technology Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We leverage Apple&apos;s latest frameworks and industry-standard tools to build exceptional iOS applications.
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
                                backgroundColor: activeTab === cat.id ? "#006d97" : "var(--background)",
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
                                        background: tech.logo ? "var(--card-bg)" : "linear-gradient(135deg, #007AFF, #5AC8FA)",
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
