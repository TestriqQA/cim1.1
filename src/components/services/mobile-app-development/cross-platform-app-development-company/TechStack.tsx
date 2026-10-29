"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("react-native");

    const categories = [
        { id: "react-native", label: "React Native" },
        { id: "flutter", label: "Flutter" },
        { id: "shared", label: "Shared Tools" },
        { id: "testing", label: "Testing" },
        { id: "backend", label: "Backend & Cloud" },
    ];

    const technologies: Record<string, { name: string; description: React.ReactNode; logo: string }[]> = {
        "react-native": [
            { name: "React Native", description: "Core Framework", logo: "/images/techstack_logos/react-logo.svg" },
            { name: "TypeScript", description: "Type Safety", logo: "/images/techstack_logos/typescript-logo.svg" },
            { name: "Expo", description: "Development Platform", logo: "/images/techstack_logos/Expo-logo.png" },
            { name: "Redux", description: "State Management", logo: "/images/techstack_logos/Redux-logo.svg" },
            { name: "Native Modules", description: "Platform Bridge", logo: "" },
        ],
        flutter: [
            { name: "Flutter", description: "UI Toolkit", logo: "/images/techstack_logos/flutter-logo.svg" },
            { name: "Dart", description: "Programming Language", logo: "/images/techstack_logos/Dart-logo.png" },
            { name: "Bloc", description: "State Management", logo: "/images/techstack_logos/Bloc-logo.png" },
        ],
        shared: [
            { name: "Firebase", description: "Backend Services", logo: "/images/techstack_logos/firebase-logo.svg" },
            { name: "VS Code", description: "IDE", logo: "/images/techstack_logos/vscode-logo.svg" },
            { name: "Git", description: "Version Control", logo: "/images/techstack_logos/git-logo.svg" },
        ],
        testing: [
            { name: "Jest", description: "Unit Testing", logo: "/images/techstack_logos/jest-logo.webp" },
            { name: "Detox", description: "E2E Testing", logo: "/images/techstack_logos/Detox-Logo.png" },
            { name: "Flutter Test", description: "Widget Testing", logo: "/images/techstack_logos/flutter-logo.svg" },
        ],
        backend: [
            { name: "Firebase", description: "Backend Services", logo: "/images/techstack_logos/firebase-logo.svg" },
            { name: "Node.js", description: <Link href="/services/web-design-development/nodejs-backend" className="hover:text-[var(--accent-indigo-text)] transition-colors">API Backend</Link>, logo: "/images/techstack_logos/nodejs-logo.svg" },
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
                        <span style={{ color: "var(--foreground)" }}>Cross-Platform</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Technology Stack
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        We use a cutting-edge tech stack to ensure your app is future-proof, secure, and high-performing.
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
                                backgroundColor: activeTab === cat.id ? "#4338ca" : "var(--background)",
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
                                        background: tech.logo ? "var(--card-bg)" : "linear-gradient(135deg, #667eea, #764ba2)",
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
