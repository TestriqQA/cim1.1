import React from 'react';
import Link from 'next/link';
import { Layers, Briefcase, Heart } from 'lucide-react';

export default function CoreValues() {
    const coreValues = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Full-Stack Strategy & Execution",
            description: <>From <Link href="/services/web-design-development" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">custom website development</Link> to <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">AI-powered marketing automation</Link>, we provide end-to-end web development services that eliminate the need for multiple vendors. Our integrated approach ensures your web design, mobile apps, SEO, and performance marketing work in perfect harmony.</>,
            bullets: ["Single point of accountability", "Unified brand experience", "Faster deployment", "Reduced vendor overhead"],
            color: "var(--brand-blue)",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Measurable ROI & Transparent Reporting",
            description: <>Every web development project comes with clear KPIs and real-time analytics dashboards. We track what matters: <Link href="/services/performance-marketing" className="hover:text-[var(--brand-yellow)] hover:underline transition-colors">conversion rates</Link>, <Link href="/services/seo-services/technical-seo-services" className="hover:text-[var(--brand-yellow)] hover:underline transition-colors">page performance</Link>, organic visibility, and revenue impact - not vanity metrics.</>,
            bullets: ["Sub-2s Core Web Vitals", "sustained organic growth", "faster time-to-market", "Rigorous QA process"],
            color: "var(--brand-yellow)",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Partner-Centric Approach & Long-Term Success",
            description: <>We&apos;re not a transactional <Link href="/services/web-design-development" className="hover:text-[var(--brand-purple)] hover:underline transition-colors">web development company</Link> - we&apos;re your growth co-pilot. With strong client retention, our clients stay because we treat their business goals as our own.</>,
            bullets: ["Dedicated account teams", "Proactive optimization", "Ongoing training", "24/7 priority support"],
            color: "var(--brand-purple)",
        },
    ];

    return (
        <section id="core-values" className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <Heart className="w-4 h-4" style={{ color: "var(--brand-purple)" }} />
                        <span style={{ fontWeight: 600 }}>Our Philosophy</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Why CIM is Your Growth Partner for <span style={{ background: "linear-gradient(90deg, var(--brand-yellow), var(--brand-orange))", WebkitBackgroundClip: "text", color: "transparent" }}>Web Development & Digital Marketing</span></h2>
                    <p style={{ color: "var(--secondary-text)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>Our approach is built on transparency, measurable results, and deep partnership. As a leading <Link href="/services/web-design-development" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">web development company</Link> and <Link href="/services/performance-marketing" className="hover:text-[var(--brand-cyan)] hover:underline transition-colors">digital marketing agency</Link>, we don&apos;t just build websites - we architect scalable digital ecosystems that drive business growth for startups, SMEs, and enterprises worldwide.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <div key={index} className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
                            <div style={{ display: "inline-flex", padding: 16, borderRadius: 12, color: "#fff", marginBottom: 16, background: value.color }}>
                                {value.icon}
                            </div>
                            <h3 style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: 8 }}>{value.title}</h3>
                            <p style={{ color: "var(--secondary-text)" }}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
