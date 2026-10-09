"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("frameworks");

    const categories = [
        { id: "frameworks", label: "Frameworks" },
        { id: "frontend", label: "Frontend" },
        { id: "plugins", label: "Plugins & APIs" },
        { id: "tools", label: "Dev Tools" },
        { id: "backend", label: "Backend" },
    ];

    const technologies: Record<string, { name: string; description: React.ReactNode; logo: string }[]> = {
        frameworks: [
            { name: "Ionic", description: "UI/UX Excellence", logo: "/images/techstack_logos/ionic-logo.svg" },
            { name: "Capacitor", description: "Modern Native Runtime", logo: "/images/techstack_logos/capacitor-logo.png" },
            { name: "Cordova", description: "Legacy Support", logo: "/images/techstack_logos/cordova-logo.webp" },
            { name: "PhoneGap", description: "Migration Experts", logo: "/images/techstack_logos/cordova-logo.webp" },
            { name: "Electron", description: "Desktop Expansion", logo: "/images/techstack_logos/electron-logo.png" },
            { name: "PWA", description: "Web-Native Hybrid", logo: "/images/techstack_logos/pwa-logo.png" },
        ],
        frontend: [
            { name: "Angular", description: "TypeScript Framework", logo: "/images/techstack_logos/angularjs-logo.svg" },
            { name: "React", description: <Link href="/services/web-design-development/nextjs-development-services" className="hover:text-[var(--accent-cyan-text)] transition-colors">UI Library</Link>, logo: "/images/techstack_logos/react-logo.svg" },
            { name: "Vue.js", description: "Progressive Framework", logo: "/images/techstack_logos/vuejs-logo.svg" },
            { name: "TypeScript", description: "Type Safety", logo: "/images/techstack_logos/typescript-logo.svg" },
            { name: "Sass", description: "CSS Preprocessor", logo: "/images/techstack_logos/Sass-SCSS-logo.png" },
            { name: "Tailwind CSS", description: "Utility CSS", logo: "/images/techstack_logos/tailwindcss-logo.svg" },
        ],
        plugins: [
            { name: "Camera", description: "Photo & Video", logo: "" },
            { name: "Geolocation", description: "GPS Access", logo: "" },
            { name: "Push Notifications", description: "FCM & APNs", logo: "" },
            { name: "Storage", description: "Local Data", logo: "" },
            { name: "Filesystem", description: "File Access", logo: "" },
            { name: "Biometrics", description: "Touch/Face ID", logo: "" },
        ],
        tools: [
            { name: "VS Code", description: "IDE", logo: "/images/techstack_logos/vscode-logo.svg" },
            { name: "Ionic CLI", description: "Command Line", logo: "/images/techstack_logos/ionic-logo.svg" },
            { name: "Android Studio", description: "Android Build", logo: "/images/techstack_logos/Android-Studio-logo.png" },
            { name: "Xcode", description: "iOS Build", logo: "/images/techstack_logos/Xcode-logo.webp" },
            { name: "Appflow", description: "CI/CD", logo: "/images/techstack_logos/ionic-logo.svg" },
            { name: "Fastlane", description: "Automation", logo: "/images/techstack_logos/Fastlane-logo.png" },
        ],
        backend: [
            { name: "Firebase", description: "Backend Services", logo: "/images/techstack_logos/firebase-logo.svg" },
            { name: "Node.js", description: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-cyan-text)] transition-colors">API Backend</Link>, logo: "/images/techstack_logos/nodejs-logo.svg" },
            { name: "Supabase", description: "Open Source BaaS", logo: "/images/techstack_logos/supabase-logo.webp" },
            { name: "AWS Amplify", description: "Cloud Platform", logo: "/images/techstack_logos/aws-logo.png" },
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
                        <span style={{ color: "var(--foreground)" }}>Hybrid App</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Technology Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use a cutting-edge app shell model combined with the industry&apos;s most reliable frameworks for 2026 tech leadership.
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
                                backgroundColor: activeTab === cat.id ? "#155e75" : "var(--background)",
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
                                        background: tech.logo ? "var(--card-bg)" : "linear-gradient(135deg, #00b4d8, #0077b6)",
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
