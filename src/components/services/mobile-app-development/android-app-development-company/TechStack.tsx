"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("core");

    const categories = [
        { id: "core", label: "Core Technologies" },
        { id: "jetpack", label: "Jetpack Libraries" },
        { id: "data", label: "Data & Storage" },
        { id: "tools", label: "Dev Tools" },
        { id: "cloud", label: "Cloud & Backend" },
    ];

    const technologies: Record<string, { name: string; description: React.ReactNode; logo: string }[]> = {
        core: [
            { name: "Kotlin", description: "Primary Language", logo: "/images/techstack_logos/kotlin-logo.svg" },
            { name: "Java", description: <Link href="/services/web-design-development/java-spring-boot" className="hover:text-[var(--accent-green-text)] transition-colors">Legacy Support</Link>, logo: "/images/techstack_logos/java-logo.svg" },
            { name: "Android Studio", description: "IDE & Tools", logo: "/images/techstack_logos/Android-Studio-logo.png" },
            { name: "Gradle", description: "Build System", logo: "/images/techstack_logos/Gradle-logo.png" },
            { name: "Android SDK", description: "Platform SDK", logo: "/images/techstack_logos/Android-Studio-logo.png" },
            { name: "Material Design 3", description: "UI System", logo: "/images/techstack_logos/Material-Design-3-logo.png" },
        ],
        jetpack: [
            { name: "Jetpack Compose", description: "Modern UI", logo: "/images/techstack_logos/jetpack-compose-logo.png" },
            { name: "Navigation", description: "App Navigation", logo: "/images/techstack_logos/Navigation-logo.svg" },
            { name: "ViewModel", description: "MVVM Pattern", logo: "/images/techstack_logos/ViewModel-logo.png" },
            { name: "LiveData", description: "Observable Data", logo: "" },
            { name: "WorkManager", description: "Background Tasks", logo: "/images/techstack_logos/Android-Studio-logo.png" },
            { name: "Hilt", description: "Dependency Injection", logo: "/images/techstack_logos/Hilt-logo.png" },
        ],
        data: [
            { name: "Room", description: "Local Database", logo: "/images/techstack_logos/Room-database-logo.svg" },
            { name: "DataStore", description: "Preferences", logo: "" },
            { name: "Realm", description: "Mobile Database", logo: "/images/techstack_logos/Realm-logo.png" },
            { name: "SQLite", description: "SQL Database", logo: "/images/techstack_logos/sqlite-logo.svg" },
            { name: "Retrofit", description: "HTTP Client", logo: "" },
            { name: "Coroutines", description: "Async Operations", logo: "/images/techstack_logos/kotlin-logo.svg" },
        ],
        tools: [
            { name: "Play Console", description: "Distribution", logo: "/images/techstack_logos/Play-Console-logo.png" },
            { name: "JUnit", description: "Unit Testing", logo: "/images/techstack_logos/JUnit-logo.png" },
            { name: "Espresso", description: "UI Testing", logo: "/images/techstack_logos/Espresso-logo.png" },
            { name: "Profiler", description: "Performance", logo: "/images/techstack_logos/Profiler-logo.svg" },
            { name: "Fastlane", description: "Automation", logo: "/images/techstack_logos/Fastlane-logo.png" },
            { name: "LeakCanary", description: "Memory Leaks", logo: "/images/techstack_logos/LeakCanary-logo.png" },
        ],
        cloud: [
            { name: "Firebase", description: "Backend Services", logo: "/images/techstack_logos/firebase-logo.svg" },
            { name: "Google Cloud", description: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-green-text)] transition-colors">Cloud Platform</Link>, logo: "/images/techstack_logos/googlecloud-logo.svg" },
            { name: "AWS Amplify", description: <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-green-text)] transition-colors">Cloud Platform</Link>, logo: "/images/techstack_logos/aws-logo.png" },
            { name: "Node.js", description: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-green-text)] transition-colors">API Backend</Link>, logo: "/images/techstack_logos/nodejs-logo.svg" },
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
                        <span style={{ color: "var(--foreground)" }}>Android Development</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Technology Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We leverage Google&apos;s latest frameworks and industry-standard tools to build exceptional Android applications.
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
                                backgroundColor: activeTab === cat.id ? "#166534" : "var(--background)",
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
                                        background: tech.logo ? "var(--card-bg)" : "linear-gradient(135deg, #3DDC84, #78C257)",
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
