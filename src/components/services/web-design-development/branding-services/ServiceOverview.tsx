"use client";

import { useState } from "react";
import Link from "next/link";
import { Palette, ImageIcon, Layout, Sparkles, Users, Award, Globe, Zap } from "lucide-react";

export default function ServiceOverview() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: ImageIcon,
            title: "Project Galleries",
            description: "Transform your work into a visual masterpiece. We build custom portfolio websites for creative professionals that utilize advanced grid layouts, masonry styles, and immersive lightbox features.",
            details: ["Advanced grid layouts", "Masonry styles", "Immersive lightbox", "High fidelity display"]
        },
        {
            icon: Layout,
            title: "Case Studies",
            description: "Move beyond simple screenshots. Our innovative portfolio developement for job seekers and consultants includes deep-dive case study modules using the STAR method.",
            details: ["Deep-dive modules", "STAR method structure", "Impact visualization", "Trust equation solving"]
        },
        {
            icon: Sparkles,
            title: "Personal Branding",
            description: "Your brand is your promise. We align your visual identity with your career trajectory, from color psychology to typography selection, ensuring you look the part.",
            details: ["Career trajectory alignment", "Color psychology", "Visual identity", "Resonant typography"]
        },
        {
            icon: Users,
            title: "About & Bio",
            description: <>People buy from people. We specialize in <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">professional bio writing</Link> and branding services that humanize your digital presence and foster genuine connection.</>,
            details: ["Professional bio writing", "Authentic storytelling", "Personal journey", "Humanized presence"]
        },
        {
            icon: Award,
            title: "Testimonials",
            description: <>Social proof is non-negotiable. We integrate dynamic testimonial sections and <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Knowledge Panel Optimization</Link> signals that validate your expertise.</>,
            details: ["Dynamic testimonials", "Knowledge Panel Optimization", "Real feedback", "Professional credibility"]
        },
        {
            icon: Globe,
            title: "Contact Integration",
            description: <>Turn traffic into conversations. Our <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">personal website SEO</Link> and visibility optimization includes strategic CTA placement and seamless contact forms.</>,
            details: ["Strategic CTA placement", "Seamless contact forms", "Calendar booking", "Effortless inquiry"]
        }
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, #06b6d4 8%, transparent), color-mix(in srgb, #0891b2 8%, transparent))",
                            borderColor: "color-mix(in srgb, #06b6d4 20%, transparent)",
                            color: "var(--accent-cyan-text)",
                        }}
                    >
                        <Palette className="w-4 h-4" />
                        <span className="text-sm font-semibold">What We Create</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Complete <span style={{ color: "var(--accent-cyan-text)" }}>Portfolio</span> Solutions
                    </h2>

                    <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Everything you need to showcase your work, tell your story, and attract your ideal clients.
                    </p>

                    <div
                        className="w-24 h-1.5 mx-auto mt-6 rounded-full"
                        style={{ background: "linear-gradient(90deg, #06b6d4, #0891b2)" }}
                    />
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Feature List */}
                    <div className="space-y-4">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature === idx;

                            return (
                                <div
                                    key={idx}
                                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${isActive ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
                                    style={{
                                        backgroundColor: isActive ? "color-mix(in srgb, #06b6d4 10%, var(--card-bg))" : "var(--card-bg)",
                                        borderColor: isActive ? "#06b6d4" : "var(--border-color)",
                                        boxShadow: isActive ? "0 10px 30px -10px rgba(6, 182, 212, 0.3)" : "none"
                                    }}
                                    onClick={() => setActiveFeature(idx)}
                                    onMouseEnter={() => setActiveFeature(idx)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-xl transition-colors"
                                            style={{
                                                background: isActive
                                                    ? "linear-gradient(135deg, #06b6d4, #0891b2)"
                                                    : "color-mix(in srgb, #06b6d4 15%, transparent)"
                                            }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: isActive ? "white" : "#06b6d4" }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Feature Details */}
                    <div
                        className="sticky top-24 p-8 rounded-3xl border"
                        style={{
                            backgroundColor: "var(--card-bg)",
                            borderColor: "var(--border-color)",
                        }}
                    >
                        <div className="mb-6">
                            <div
                                className="inline-flex p-4 rounded-2xl mb-4"
                                style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)" }}
                            >
                                {(() => {
                                    const Icon = features[activeFeature].icon;
                                    return <Icon className="w-8 h-8 text-white" />;
                                })()}
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-lg" style={{ color: "var(--secondary-text)" }}>
                                {features[activeFeature].description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--accent-cyan-text)" }}>
                                Key Features
                            </h4>
                            <ul className="grid grid-cols-2 gap-3">
                                {features[activeFeature].details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-sm"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
