"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
    {
        question: "What are the benefits of using Next.js for business in 2026?",
        answer: "Next.js offers superior performance, better SEO through Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), and improved developer experience. In 2026, its ability to deliver near-instant load times and optimize Core Web Vitals is crucial for maintaining top search rankings and high user conversion rates."
    },
    {
        question: "How much does it cost to build a custom Next.js website?",
        answer: <>The cost vary significantly depending on complexity, features, and integrations. Typically, a professional Next.js project can range from $5,000 for a straightforward <Link href="/services/web-design-development/branding-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">marketing site</Link> to $50,000+ for complex enterprise <Link href="/services/web-design-development/saas-development-services" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">SaaS</Link> platforms or large-scale <Link href="/services/web-design-development/ecommerce-development-company" className="hover:text-[var(--accent-cyan-text)] transition-colors underline underline-offset-2">e-commerce</Link> solutions. We provide tailored quotes after a strategic discovery phase.</>
    },
    {
        question: "How do I choose the best React development agency?",
        answer: "Look for an agency with a proven track record (E-E-A-T), deep expertise in the latest React/Next.js features (like App Router and Server Components), certified Vercel/AWS partnerships, and a focus on performance-driven results rather than just 'making it work'."
    },
    {
        question: "What is the difference between Next.js and React?",
        answer: "React is a library for building user interfaces, while Next.js is a framework built on top of React. Next.js provides additional features like routing, server-side rendering, static site generation, and API routes out of the box, which are not included in core React. Next.js is essential for building production-ready, SEO-friendly applications."
    },
    {
        question: "How long does it take to develop a Next.js web application?",
        answer: "A standard Next.js project typically takes between 4 to 12 weeks. Small marketing sites might take 4-6 weeks, while complex SaaS products or enterprise applications can take 3-6 months or more, depending on the scope of work and integration requirements."
    }
];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-cyan-text)"
        />
    );
}
