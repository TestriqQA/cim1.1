"use client";

import { Zap, Palette, FileText, Target, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    return (
        <section
            id="overview"
            className="px-6 md:px-12 xl:px-20 py-16 md:py-24 transition-colors duration-300"
            style={{ backgroundColor: "var(--background)" }}
        >
            <div>
                {/* Header */}
                <div className="text-center mb-16 max-w-6xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            background: "linear-gradient(90deg, color-mix(in srgb, var(--brand-yellow) 8%, transparent), color-mix(in srgb, var(--brand-orange) 8%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-yellow) 20%, transparent)",
                            color: "var(--accent-amber-text)",
                        }}
                    >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-semibold">Service Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--accent-amber-text)" }}>Complete Brand Identity Design</span> Agency Solutions
                    </h2>

                    <div
                        className="w-24 h-1.5 mx-auto mb-8 rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" }}
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="text-xl font-semibold" style={{ color: "var(--accent-amber-text)" }}>
                            More Than Just a Logo-We Build Scalable Brand Ecosystems
                        </p>
                        <p className="text-lg" style={{ color: "var(--foreground)", fontWeight: 500 }}>
                            In today's digital-first economy, your brand is your most valuable asset. As an expert <span style={{ color: "var(--accent-amber-text)", fontWeight: 700 }}>Brand Identity Design Agency</span>, we don't just create visuals; we engineer comprehensive brand experiences that drive recognition, trust, and revenue. Our custom brand design frameworks are built on 2026 EEAT principles, ensuring your business signals authority and expertise to both users and search engines.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Whether you are a fintech startup looking to disrupt the market or an established enterprise seeking <span className="font-semibold text-[var(--foreground)]">rebranding services</span>, our strategic approach bridges the gap between creative vision and business objectives. We specialize in brand identity design for <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">SaaS products</Link>, <Link href="/services/web-design-development/ecommerce-development-company" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">ecommerce platforms</Link>, and luxury brands, delivering pixel-perfect assets that work seamlessly across web, mobile, and print.
                        </p>

                        <p style={{ color: "var(--secondary-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
                            Our team has delivered over <span style={{ color: "var(--foreground)", fontWeight: "bold" }}>500+ successful brand launches</span>, achieving an average of <Link href="/services/seo-services" className="font-bold underline underline-offset-2 hover:text-[var(--accent-amber-text)]">sustained traffic growth</Link> for our partners. We leverage advanced design psychology and sustainable brand identity design strategy to create future-proof identities that resonate with global audiences in the US, EU, India, and APAC.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                                What You'll Receive
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Primary and secondary logo variations",
                                    "Complete color palette with usage guidelines",
                                    "Typography system with font hierarchy",
                                    "Brand pattern and graphic elements",
                                    "Comprehensive brand guidelines document",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-black text-sm font-bold mt-0.5"
                                            style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" }}
                                        >
                                            ✓
                                        </span>
                                        <span style={{ color: "var(--secondary-text)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Visual – Brand Board Mockup */}
                    <div className="relative hidden md:block">
                        {/* Animated Background Glow */}
                        <div
                            className="absolute -inset-4 rounded-3xl blur-3xl animate-pulse"
                            style={{
                                background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-yellow) 15%, transparent), color-mix(in srgb, var(--brand-orange) 15%, transparent))",
                                animationDuration: "4s",
                            }}
                        />

                        {/* Brand Board Card */}
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl border p-6"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
                                <div className="flex items-center gap-2">
                                    <Palette className="w-5 h-5" style={{ color: "var(--accent-amber-text)" }} />
                                    <span className="font-bold" style={{ color: "var(--foreground)" }}>Brand Board</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                            </div>

                            {/* Brand Board Content */}
                            <div className="space-y-4">
                                {/* Company Name */}
                                <div className="text-center py-4 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg))" }}>
                                    <div className="text-3xl font-black mb-1" style={{ color: "var(--accent-amber-text)" }}>BRAND</div>
                                    <div className="text-sm" style={{ color: "var(--secondary-text)" }}>Your Company Tagline</div>
                                </div>

                                {/* Visual Grid */}
                                <div className="grid grid-cols-3 gap-3">
                                    {/* Mission */}
                                    <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <Target className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--accent-amber-text)" }} />
                                        <span className="text-xs font-bold uppercase" style={{ color: "var(--secondary-text)" }}>Mission</span>
                                    </div>
                                    {/* Audience */}
                                    <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <Users className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--accent-amber-text)" }} />
                                        <span className="text-xs font-bold uppercase" style={{ color: "var(--secondary-text)" }}>Audience</span>
                                    </div>
                                    {/* Values */}
                                    <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <TrendingUp className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--accent-amber-text)" }} />
                                        <span className="text-xs font-bold uppercase" style={{ color: "var(--secondary-text)" }}>Values</span>
                                    </div>
                                </div>

                                {/* Color & Type Preview */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <span className="text-xs font-bold uppercase mb-2 block" style={{ color: "var(--secondary-text)" }}>Colors</span>
                                        <div className="flex gap-1.5">
                                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "var(--brand-yellow)" }} />
                                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "var(--brand-orange)" }} />
                                            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "#1a1a1a" }} />
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 5%, var(--card-bg))" }}>
                                        <span className="text-xs font-bold uppercase mb-2 block" style={{ color: "var(--secondary-text)" }}>Fonts</span>
                                        <div className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Aa Bb Cc</div>
                                    </div>
                                </div>

                                {/* Guidelines Preview */}
                                <div
                                    className="p-4 rounded-xl flex items-center gap-3"
                                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-yellow) 10%, var(--card-bg))" }}
                                >
                                    <FileText className="w-8 h-8" style={{ color: "var(--accent-amber-text)" }} />
                                    <div>
                                        <div className="font-bold text-sm" style={{ color: "var(--foreground)" }}>Brand Guidelines</div>
                                        <div className="text-xs" style={{ color: "var(--secondary-text)" }}>Complete usage documentation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
