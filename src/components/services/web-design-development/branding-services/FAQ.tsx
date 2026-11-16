"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            question: "What is included in personal branding services?",
            answer: "Our comprehensive personal branding services include a custom website design, logo and visual identity creation, professional bio writing, SEO optimization for your name (Entity SEO), and social media profile integration. We also offer digital footprint cleanup to ensure your online reputation is pristine."
        },
        {
            question: "How do I build a professional online portfolio?",
            answer: "Building a professional portfolio starts with strategy. Identify your target audience (employers vs. clients) and curate your best work. We then focus on a clean, responsive design, fast loading speeds, and compelling case studies. We recommend using a platform you own (like a custom Next.js site) rather than relying solely on Behance or Dribbble."
        },
        {
            question: "Why is personal branding important for executives?",
            answer: "In 2026, trust is digital. Personal brand strategy for corporate executives establishes authority, attracts talent to your organization, and opens doors for board seats and speaking engagements. It differentiates you in a crowded market and gives you control over your professional narrative."
        },
        {
            question: "How can I improve my personal brand's search ranking?",
            answer: <>Improving rankings requires a mix of <Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">technical SEO</Link> and <Link href="/services/seo-services/seo-content-writing-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">content strategy</Link>. We focus on optimizing your site for your name, securing high-quality backlinks, creating consistent thought leadership content (blogs/articles), and implementing Schema markup. Brand SERP management is a core part of our service.</>
        },
        {
            question: "What are the best platforms for a personal portfolio website?",
            answer: <>While builders like Squarespace are okay for beginners, the &quot;best&quot; platform for growth is a custom-coded solution (using React, Vue, or <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">Next.js</Link>) or a <Link href="/services/web-design-development/headless-traditional-cms" className="underline underline-offset-2 hover:underline text-[var(--accent-cyan-text)]">headless CMS</Link>. This offers superior speed, SEO control, and design flexibility. For personal website for academic and research professionals, we often recommend solutions that handle publications and CVs effectively.</>
        }
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-cyan-text)"
            subtitle="Common questions about building your personal brand and portfolio."
        />
    );
}
