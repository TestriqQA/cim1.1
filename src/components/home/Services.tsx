"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Globe, Palette, Search, Target, Share2, Bot, Workflow, Code, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
    const [activeService, setActiveService] = useState<number | null>(0);

    const services = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Web Design & Development",
            slug: "web-design-development",
            bullets: [
                <><Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">Business & corporate websites</Link></>,
                <><Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">Web applications & SaaS platforms</Link></>,
                <>E-commerce ecosystems (<Link href="/services/web-design-development/shopify-development-services" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">Shopify</Link>, <Link href="/services/web-design-development/wordpress-development-services" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">WooCommerce</Link>)</>,
                "Key Results: Sub-2s load times, sustained organic growth",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-blue))" },
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Mobile App Development",
            slug: "mobile-app-development",
            bullets: [
                <>Native <Link href="/services/mobile-app-development/ios-app-development-company" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">iOS</Link> & <Link href="/services/mobile-app-development/android-app-development-company" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">Android app development</Link></>,
                <>Cross-platform (<Link href="/services/mobile-app-development/cross-platform-app-development-company" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">React Native</Link>, <Link href="/services/mobile-app-development/cross-platform-app-development-company" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">Flutter</Link>)</>,
                <><Link href="/services/mobile-app-development/enterprise-application-development-services" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">Enterprise mobile applications</Link></>,
                "Key Results: Faster time-to-market",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))" },
        },
        {
            icon: <Share2 className="w-6 h-6" />,
            title: "Social Media Marketing",
            slug: "social-media-marketing-services",
            bullets: [
                <>Platform-specific strategies (<Link href="/services/social-media-marketing-services/facebook-marketing-services" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Facebook</Link>, <Link href="/services/social-media-marketing-services/instagram-marketing-services" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Instagram</Link>, <Link href="/services/social-media-marketing-services/linkedin-marketing-services" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">LinkedIn</Link>)</>,
                "Paid social media advertising",
                "Influencer marketing campaigns",
                "Key Results: Strong ROI on paid campaigns, higher engagement",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))" },
        },
        {
            icon: <Workflow className="w-6 h-6" />,
            title: "AI Workflows & Automations",
            slug: "ai-workflows-automations-services",
            bullets: [
                "Business process automation (BPA)",
                "Document processing & OCR",
                <>CRM/ERP integrations (<Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">Salesforce, HubSpot</Link>)</>,
                "Key Results: 200+ hours saved monthly, significant cost reduction",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-purple), var(--brand-yellow))" },
        },
        {
            icon: <Bot className="w-6 h-6" />,
            title: "AI-Powered Chatbots",
            slug: "ai-chatbots-services",
            bullets: [
                "Custom AI chatbot development",
                "E-commerce sales & support bots",
                <><Link href="/services/ai-chatbots-services" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">WhatsApp & social media automation</Link></>,
                "Key Results: Strong ROI, lower support costs",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-cyan), var(--brand-purple))" },
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "Organic Growth & SEO",
            slug: "seo-services",
            bullets: [
                <><Link href="/services/seo-services/technical-seo-services" className="hover:text-[var(--brand-yellow)] hover:underline transition-colors">Technical SEO</Link> & site audits</>,
                <><Link href="/services/seo-services/on-page-seo-services" className="hover:text-[var(--brand-yellow)] hover:underline transition-colors">On-page</Link> & <Link href="/services/seo-services/link-building" className="hover:text-[var(--brand-yellow)] hover:underline transition-colors">off-page optimization</Link></>,
                <><Link href="/services/seo-services/seo-content-writing-services" className="hover:text-[var(--brand-yellow)] hover:underline transition-colors">Content strategy</Link> & marketing</>,
                "Key Results: Strong organic traffic growth, top rankings",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))" },
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Performance Marketing",
            slug: "performance-marketing",
            bullets: [
                <><Link href="/services/performance-marketing/google-ads" className="hover:text-[var(--brand-orange)] hover:underline transition-colors">Google Ads</Link> & PPC management</>,
                <>Paid social campaigns (<Link href="/services/performance-marketing/meta-ads" className="hover:text-[var(--brand-orange)] hover:underline transition-colors">Meta</Link>, <Link href="/services/performance-marketing/linkedin-ads" className="hover:text-[var(--brand-orange)] hover:underline transition-colors">LinkedIn</Link>, <Link href="/services/performance-marketing/tiktok-ads" className="hover:text-[var(--brand-orange)] hover:underline transition-colors">TikTok</Link>)</>,
                "Retargeting & remarketing strategies",
                "Key Results: Strong ROAS, precision targeting",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-orange), var(--brand-purple))" },
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Brand Identity Design",
            slug: "brand-identity-design",
            bullets: [
                "Strategic logo design",
                "Brand style guide development",
                "Complete visual identity systems",
                "Key Results: Strong client retention, distinctive designs",
            ],
            gradientStyle: { background: "linear-gradient(90deg, var(--brand-purple), var(--brand-orange))" },
        },
    ];

    return (
        <section className="py-20" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <Zap className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span style={{ fontWeight: 600 }}>Full-Stack Digital Presence Services</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Comprehensive Web Development Services & <span style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>Digital Marketing Solutions</span></h2>
                    <p style={{ color: "var(--secondary-text)", maxWidth: "700px", margin: "0 auto" }}>From corporate website development to enterprise mobile apps and AI-driven marketing, our professional web development company offers full-spectrum services designed to accelerate your digital transformation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <article
                            key={service.title}
                            onMouseEnter={() => setActiveService(idx)}
                            className="relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
                            style={{
                                backgroundColor: "var(--background)",
                                borderColor: activeService === idx ? "transparent" : "var(--border-color)",
                                boxShadow: activeService === idx ? "0 20px 60px rgba(0,0,0,0.1)" : undefined,
                                transform: activeService === idx ? "translateY(-8px) scale(1.02)" : undefined,
                            }}
                        >
                            {activeService === idx && <div style={{ position: "absolute", inset: 0, opacity: 0.06, borderRadius: 16, ...service.gradientStyle }} />}

                            <div style={{ position: "relative", zIndex: 10 }}>
                                <div style={{ display: "inline-flex", padding: 12, borderRadius: 12, color: "#fff", marginBottom: 12, ...service.gradientStyle }}>
                                    {service.icon}
                                </div>

                                <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{service.title}</h3>

                                <ul style={{ marginBottom: 12, color: "var(--secondary-text)", listStyle: "none", padding: 0 }}>
                                    {service.bullets.map((bullet, i) => (
                                        <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: "var(--brand-blue)" }} />
                                            <span className="text-sm">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--border-color)" }}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        style={{ color: "var(--brand-blue-text)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}
                                        className="p-2 -ml-2 rounded-lg hover:bg-[rgba(var(--brand-blue-rgb),0.1)] transition-colors"
                                    >
                                        Learn more <span className="sr-only">about {service.title}</span> <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        style={{ color: "var(--secondary-text)" }}
                                        className="p-2 -mr-2 rounded-lg hover:text-[var(--foreground)] transition-colors"
                                    >
                                        Get quote <span className="sr-only">for {service.title}</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
