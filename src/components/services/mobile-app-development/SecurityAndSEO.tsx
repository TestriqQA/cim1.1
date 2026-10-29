"use client";

import { Lock, Zap, Search, Shield, Server, Gauge, ShieldCheck, UserCheck, Store, Fingerprint, CheckCircle, Rocket } from "lucide-react";
import Link from "next/link";

export default function SecurityAndSEO() {
    const securityPractices = [
        {
            icon: Shield,
            title: <Link href="/services/mobile-app-development/enterprise-application-development-services" className="hover:text-[var(--brand-purple-text)] transition-colors">Data Protection (AES-256, TLS 1.3)</Link>,
            description: "End-to-end AES-256 encryption for data at rest, TLS 1.3 for data in transit, certificate pinning, and secure key storage in Keychain/KeyStore.",
            gradient: "from-[#667eea] to-[#764ba2]"
        },
        {
            icon: Fingerprint,
            title: "Authentication (OAuth 2.0, MFA)",
            description: "OAuth 2.0/OpenID Connect, biometric authentication (Face ID, Touch ID), multi-factor authentication (MFA), and secure session management.",
            gradient: "from-[#f093fb] to-[#f5576c]"
        },
        {
            icon: ShieldCheck,
            title: "Code Security (OWASP Top 10)",
            description: "Code obfuscation, reverse engineering protection, root/jailbreak detection, and regular SAST/DAST scans against OWASP Mobile Top 10.",
            gradient: "from-[#4facfe] to-[#00f2fe]"
        },
        {
            icon: UserCheck,
            title: "Security-First Engineering",
            description: "Regular penetration testing, security audits, vulnerability assessments, and 24/7 monitoring. GDPR, HIPAA, PCI-DSS, and SOC 2-aligned security practices.",
            gradient: "from-[#43e97b] to-[#38f9d7]"
        }
    ];

    const appStoreOptimization = [
        {
            icon: Search,
            title: <Link href="/services/seo-services" className="hover:text-[var(--brand-purple-text)] transition-colors">ASO (Strong Organic Growth)</Link>,
            description: <span>Keyword research, competitor analysis, search volume data, and A/B tested descriptions. Average increase in <Link href="/blog/mastering-seo-organic-growth" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)] transition-colors">organic installs</Link> with top 10 rankings in 90 days.</span>,
            gradient: "from-[#fa709a] to-[#fee140]"
        },
        {
            icon: Gauge,
            title: "Performance (<2s, 60 FPS)",
            description: "<2s app launch time, 60 FPS animations, <50 MB optimized app size, extensive stability testing. Image optimization (WebP), code splitting, CDN integration.",
            gradient: "from-[#30cfd0] to-[#330867]"
        },
        {
            icon: Store,
            title: "Store Listing (40% Higher CVR)",
            description: "High-quality screenshots (5-8 optimized images), demo video (30-60 sec), compelling descriptions, and localization (10+ languages). higher conversion rate.",
            gradient: "from-[#43e97b] to-[#38f9d7]"
        },
        {
            icon: ShieldCheck,
            title: "Compliance & Approval",
            description: "Full adherence to Apple App Store and Google Play Store review guidelines. We handle all submissions, compliance docs, and approval processes.",
            gradient: "from-[#667eea] to-[#764ba2]"
        }
    ];

    return (
        <section
            className="relative transition-colors duration-300 py-20 md:py-28"
            style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
            }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: "color-mix(in srgb, var(--brand-purple) 20%, transparent)" }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
                        <span style={{ color: "var(--brand-purple-text)" }}>Security, Performance</span> & App Store Optimization
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Enterprise-grade security. Extensively tested apps optimized for maximum app store visibility and strong organic growth.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Security Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Lock className="w-8 h-8" style={{ color: "var(--brand-purple-text)" }} />
                            <span style={{ color: "var(--foreground)" }}>Security Best Practices</span>
                        </h3>

                        <div className="space-y-6">
                            {securityPractices.map((practice, index) => {
                                const Icon = practice.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer relative overflow-hidden"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        {/* Gradient overlay */}
                                        <div
                                            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${practice.gradient}`}
                                        />

                                        <div className="relative z-10 flex items-start gap-4">
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 rounded-lg p-2 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${practice.gradient}`}
                                            >
                                                <Icon className="w-full h-full text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{practice.title}</h4>
                                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                    {practice.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* App Store Optimization Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Search className="w-8 h-8" style={{ color: "var(--accent-amber-text)" }} />
                            <span style={{ color: "var(--foreground)" }}>App Store Optimization</span>
                        </h3>

                        <div className="space-y-6">
                            {appStoreOptimization.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer relative overflow-hidden"
                                        style={{
                                            backgroundColor: "var(--card-bg)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        {/* Gradient overlay */}
                                        <div
                                            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
                                        />

                                        <div className="relative z-10 flex items-start gap-4">
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 rounded-lg p-2 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${item.gradient}`}
                                            >
                                                <Icon className="w-full h-full text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{item.title}</h4>
                                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Security Compliance */}
                <div className="p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-6">Security & Compliance Standards</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {[
                            { standard: "GDPR", description: "Data protection & privacy" },
                            { standard: "CCPA", description: "California privacy rights" },
                            { standard: "ISO 27001", description: "Information security" },
                            { standard: "OWASP", description: "Security standards" },
                            { standard: "PCI DSS", description: "Payment security" },
                            { standard: "HIPAA", description: "Healthcare data" },
                            { standard: "SOC 2", description: "Security controls" },
                            { standard: "SSL/TLS", description: "Data encryption" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group p-4 rounded-xl text-center border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-purple) 5%, transparent)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-purple) 15%, transparent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--brand-purple) 5%, transparent)";
                                }}
                            >
                                <div className="font-bold text-sm mb-1 transition-colors duration-300" style={{ color: "var(--brand-purple-text)" }}>
                                    {item.standard}
                                </div>
                                <div className="text-xs" style={{ color: "var(--secondary-text)" }}>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { metric: "< 2s", label: "App Launch Time", gradient: "from-[#667eea] to-[#764ba2]" },
                        { metric: "High", label: "Uptime SLA", gradient: "from-[#f093fb] to-[#f5576c]" },
                        { metric: "< 50MB", label: "Typical App Size", gradient: "from-[#4facfe] to-[#00f2fe]" },
                        { metric: "A+", label: "Security Rating", gradient: "from-[#43e97b] to-[#38f9d7]" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl text-center border transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                            }}
                        >

                            <div className="relative z-10">
                                <div
                                    className="text-3xl font-bold mb-2 transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(to right, var(--brand-purple), var(--brand-yellow))`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {item.metric}
                                </div>
                                <div className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                    {item.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}