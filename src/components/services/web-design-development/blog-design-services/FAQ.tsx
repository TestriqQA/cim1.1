"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            question: "How much does it cost to build a professional news portal?",
            answer: <>The cost varies based on complexity. A basic <Link href="/services/web-design-development/wordpress-development-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">WordPress blog development</Link> for businesses starts from $3,000, while a robust <Link href="/services/web-design-development" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Custom news portal design</Link> for media agencies with custom robust features can range from $15,000 to $50,000+. We offer transparent pricing packages tailored to your Digital Publishing Solutions needs.</>
        },
        {
            question: "What is the best CMS for a high-traffic news website?",
            answer: <>For scalability and flexibility, we recommend <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Headless CMS</Link> architectures (like <Link href="/services/web-design-development/strapi-headless-cms" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Strapi</Link> with <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Next.js</Link>) or optimized WordPress VIP for Digital magazine publishing platform services. These ensure your Mobile-responsive news website development remains fast under heavy loads.</>
        },
        {
            question: "How can I improve my blog's search engine ranking?",
            answer: <>Focus on <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Topical Authority</Link>, E-E-A-T signals, and technical health. Our <Link href="/services/seo-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">News portal SEO</Link> and audience growth services include schema markup, site speed optimization, and <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">Blog content strategy</Link> and management solutions to target low-competition, high-value keywords.</>
        },
        {
            question: "What are the essential features of a modern news portal?",
            answer: "Key features include mobile responsiveness, fast loading speeds (News portal performance and speed optimization), Multi-author blog management systems, paywall integration, AMP support, and Interactive blog features like comments and social sharing."
        },
        {
            question: "How do I monetize a news portal or business blog?",
            answer: <>We implement diverse Content Monetization Models including display ads (Google AdSense), sponsored content, subscription paywalls, and affiliate marketing modules as part of our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">News portal monetization</Link> and ad integration services.</>
        }
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--brand-purple-text)"
        />
    );
}
