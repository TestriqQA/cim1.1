"use client";

import { Smartphone, Rocket, Palette, Server, Shield, Zap, MonitorSmartphone } from "lucide-react";
import { ReactLogo, Android, Apple } from "../../Icons";
import Link from "next/link";

export default function ServiceOverview() {
    const services = [
        {
            icon: Smartphone,
            title: "Native App Development",
            description: <span>Build high-performance <Link href="/services/mobile-app-development/ios-app-development-company" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">Android apps</Link> with Swift 6/SwiftUI and Kotlin/Jetpack Compose. Leverage 100% device capabilities and AR/VR integration.</span>,
            gradient: "from-[#667eea] to-[#764ba2]"
        },
        {
            icon: ReactLogo,
            title: "Cross-Platform Solutions",
            description: "Deploy to iOS & Android simultaneously with Flutter and React Native. Save 40% development cost while maintaining native-like performance.",
            gradient: "from-[#f093fb] to-[#f5576c]"
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Achieve <2s launch time, 60 FPS animations, and extensive stability testing. Expert optimization with efficient databases, advanced caching, code splitting, and CDN integration.",
            gradient: "from-[#4facfe] to-[#00f2fe]"
        },
        {
            icon: Palette,
            title: "User-Centric Design",
            description: <span>Create conversion-optimized interfaces with higher engagement. <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">WCAG 2.2 AA compliant designs</Link> backed by 10,000+ hours of user research and A/B testing data.</span>,
            gradient: "from-[#43e97b] to-[#38f9d7]"
        },
        {
            icon: Server,
            title: "Scalable Backend",
            description: <span>Build enterprise-grade infrastructure supporting 10,000+ concurrent users. Multi-tenant architecture with <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">Node.js</Link>, Python, .NET, and cloud services (AWS, Google Cloud, Azure).</span>,
            gradient: "from-[#fa709a] to-[#fee140]"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: <span>Implement AES-256 encryption, OAuth 2.0 authentication, and OWASP Mobile Top 10 compliance. GDPR, HIPAA, PCI-DSS, and <Link href="/services/mobile-app-development/enterprise-application-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple-text)]">SOC 2-aligned practices</Link> with a strong security track record.</span>,
            gradient: "from-[#30cfd0] to-[#330867]"
        }
    ];

    return (
        <section
            id="overview"
            className="relative transition-colors duration-300 py-20"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mx-auto font-extrabold mb-4">
                        Comprehensive <span style={{ color: "var(--brand-purple-text)" }}>Mobile App Development Services</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-5xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        End-to-end mobile application development services tailored to your business needs. From MVP to enterprise-grade solutions, we deliver measurable results across iOS, Android, and cross-platform ecosystems. Many businesses pair mobile apps with <Link href="/services/web-design-development" className="underline underline-offset-2" style={{ color: "var(--brand-purple-text)" }}>custom web development</Link> for a complete digital presence.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 border"
                                style={{
                                    backgroundColor: "var(--card-bg)",
                                    borderColor: "var(--border-color)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--card-bg) 80%, var(--brand-purple) 20%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--card-bg)";
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`flex-shrink-0 w-12 h-12 rounded-lg p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br ${service.gradient}`}
                                    >
                                        <Icon className="w-full h-full text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Key Benefits */}
                <div className="mt-16 p-8 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-2xl font-bold mb-6">What Makes Our Mobile App Development Services Stand Out?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Proven Excellence</h4>
                                <p style={{ color: "var(--secondary-text)" }}>Proven expertise delivering mobile apps across diverse industries with strong client retention and reliable on-time delivery.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Agile & Transparent Process</h4>
                                <p style={{ color: "var(--secondary-text)" }}>2-week sprints, daily standups, and real-time progress tracking. faster time-to-market with flexible development approach.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Comprehensive Support Tiers</h4>
                                <p style={{ color: "var(--secondary-text)" }}>24/7 maintenance, OS updates, security patches, and feature enhancements. Bronze, Silver & Gold support plans available.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-purple), var(--brand-yellow))" }}>
                                <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Quality-First Engineering</h4>
                                <p style={{ color: "var(--secondary-text)" }}>Rigorous QA with 80%+ test coverage across 100+ devices.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Resources */}
                <div className="mt-8 p-6 rounded-2xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                    <h3 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)" }}>📚 Related Resources</h3>
                    <div className="flex flex-col gap-3">
                        <Link href="/blog/mobile-app-development-trends-2026" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">📱</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--brand-purple-text)] transition-colors">Mobile App Development Trends in 2026</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Discover the latest trends shaping mobile development</p>
                            </div>
                        </Link>
                        <Link href="/blog/ui-ux-design-principles-best-practices" className="group flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-[var(--hover-bg)]">
                            <span className="text-2xl">🎨</span>
                            <div>
                                <h4 className="font-semibold group-hover:text-[var(--brand-purple-text)] transition-colors">Mobile UX Design Principles</h4>
                                <p className="text-sm" style={{ color: "var(--secondary-text)" }}>Latest design patterns and UX best practices</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}