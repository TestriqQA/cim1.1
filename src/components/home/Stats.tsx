import React from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Star } from 'lucide-react';

export default function Stats() {
    const stats = [
        { value: "320%", label: "Qualified Leads Increase", description: <>Lead-gen overhaul, <Link href="/services/performance-marketing" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">paid media optimization</Link></>, icon: <TrendingUp className="w-5 h-5" /> },
        { value: "300+", label: "Successful Projects", description: <>Web, mobile, <Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">AI solutions</Link> globally</>, icon: <Users className="w-5 h-5" /> },
        { value: "200+", label: "Hours Saved/Month", description: <><Link href="/services/ai-workflows-automations-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">AI automation</Link> & <Link href="/services/ai-chatbots-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">chatbot</Link> implementations</>, icon: <Star className="w-5 h-5" /> },
        { value: "3x", label: "Organic Growth", description: <><Link href="/services/seo-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">SEO</Link> & <Link href="/services/seo-services/seo-content-writing-services" className="hover:text-[var(--brand-blue)] hover:underline transition-colors">content strategy</Link> in 6 months</>, icon: <TrendingUp className="w-5 h-5" /> },
        { value: "95%", label: "Client Retention Rate", description: "Partner-centric approach, continuous support", icon: <Star className="w-5 h-5" /> },
        { value: "2025", label: "Founded", description: "Established 2025", icon: <TrendingUp className="w-5 h-5" /> },
        { value: "25+", label: "Countries Served", description: "US, EU, India, APAC, Middle East", icon: <Users className="w-5 h-5" /> },
        { value: "50+", label: "Certified Professionals", description: "Google, Meta, AWS certified experts", icon: <Star className="w-5 h-5" /> },
    ];

    return (
        <section style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--card-bg)" }} className="py-12">
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 999, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", margin: "0 auto 10px" }}>
                                {stat.icon}
                            </div>
                            <div style={{ fontSize: 32, fontWeight: 800, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))", WebkitBackgroundClip: "text", color: "transparent" }}>{stat.value}</div>
                            <div style={{ color: "var(--foreground)", fontWeight: 600, marginBottom: 4 }}>{stat.label}</div>
                            <div style={{ color: "var(--secondary-text)", fontSize: 12 }}>{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
