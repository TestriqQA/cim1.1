import React from 'react';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export default function Industries() {
    const industriesServed = [
        <>IT & <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">SaaS</Link></>,
        <><Link href="/services/web-design-development/edtech-lms" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">EdTech</Link> & E-Learning</>,
        <><Link href="/services/web-design-development/healthcare-portals" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Healthcare</Link> & Wellness</>,
        <><Link href="/services/web-design-development/fintech-solutions" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Financial Services</Link></>,
        <><Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">E-Commerce</Link> & <Link href="/blog/ecommerce-ux-designing-conversion" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Retail</Link></>,
        <><Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">B2B</Link> <Link href="/blog/digital-marketing-strategy-planning-to-execution" className="hover:text-[var(--accent-teal-text)] hover:underline transition-colors">Professional Services</Link></>,
    ];

    return (
        <section id="industries" className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="text-center mb-12">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 16 }}>
                        <Briefcase className="w-4 h-4" style={{ color: "var(--brand-teal)" }} />
                        <span style={{ fontWeight: 600 }}>Industry Focus</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 8 }}>Expertise Across <span style={{ background: "linear-gradient(90deg, var(--brand-teal), var(--brand-cyan))", WebkitBackgroundClip: "text", color: "transparent" }}>Key Sectors</span></h2>
                    <p style={{ color: "var(--secondary-text)" }}>Our experience spans diverse industries, ensuring tailored strategies that deliver results.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {industriesServed.map((industry, index) => (
                        <div key={index} className="px-6 py-3 rounded-full font-medium transition-all duration-300" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--brand-teal)", color: "var(--foreground)" }}>
                            {industry}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
