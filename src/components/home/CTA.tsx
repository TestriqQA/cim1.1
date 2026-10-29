import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto max-w-6xl px-6 md:px-12 xl:px-20">
                <div style={{ padding: 48, borderRadius: 16, background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", textAlign: "center", boxShadow: "0 15px 40px rgba(0, 138, 193, 0.3)" }}>
                    <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Transform Your Digital Presence with a Web Development Company That Delivers Results</h2>
                    <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: 20 }}>Join 300+ businesses that trust Cinute InfoMedia for web development, mobile apps, and digital marketing solutions that drive measurable ROI.</p>

                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" style={{ padding: "14px 28px", borderRadius: 999, background: "#fff", color: "#006d97", fontWeight: 800, transition: "all 0.3s" }} className="hover:bg-gray-100">Start Your Free Digital Audit <ChevronRight className="w-4 h-4 inline-block ml-2" /></Link>
                        <Link href="/contact" style={{ padding: "14px 28px", borderRadius: 999, background: "transparent", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 700, transition: "all 0.3s" }} className="hover:bg-white hover:text-cyan-600">Request Proposal</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
