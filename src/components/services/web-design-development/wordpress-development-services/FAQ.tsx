"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            question: "What are the benefits of custom WordPress development?",
            answer: "Custom WordPress development ensures your site is built specifically for your brand’s needs, without the bloat of pre-made themes. This leads to faster load times, better security, and a unique user experience that increases conversions."
        },
        {
            question: "How much does it cost to build a custom WordPress website in 2026?",
            answer: "The WordPress development cost for business 2026 varies by complexity. A standard business site may range from $3,000 to $10,000, while enterprise portals or complex e-commerce builds can exceed $25,000. Contact us for a precise quote."
        },
        {
            question: "How do I choose the best WordPress development agency?",
            answer: <>Look for an agency with a deep portfolio, transparent <Link href="/services/additional-support-services" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WordPress maintenance and support services</Link>, and verifiable reviews. A top-tier agency should prioritize SEO, speed, and mobile responsiveness.</>
        },
        {
            question: "What is included in WordPress maintenance services?",
            answer: "Our WordPress maintenance services include weekly core/plugin updates, daily backups, 24/7 security monitoring, and uptime checks to ensure your business never goes offline."
        },
        {
            question: "How long does it take to develop a custom WordPress site?",
            answer: <>A custom project typically takes 4–12 weeks depending on features like <Link href="/services/web-design-development/ecommerce-development-company" className="text-[var(--brand-blue-text)] underline underline-offset-2 hover:underline">WooCommerce development</Link> or WordPress API integration. We provide a detailed timeline during the discovery phase.</>
        }
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="#0073AA"
        />
    );
}
