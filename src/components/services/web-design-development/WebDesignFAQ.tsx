"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            q: "How do I choose the right web design and development partner?",
            a: <>Selecting the right web development company requires evaluating several critical factors: Portfolio & Case Studies (review their previous work in your industry), Technical Expertise (ensure they master modern technologies like <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">React</Link>, <Link href="/services/web-design-development/nextjs-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">Next.js</Link>, <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">Node.js</Link>), Process (a professional web design agency should have a clear development process), and Post-Launch Support (maintenance, security updates). We recommend scheduling consultations with 3-5 agencies to compare technical approaches.</>,
        },
        {
            q: "What should I look for in a web design and development agency?",
            a: <>Key evaluation criteria include Technical Capabilities (modern framework expertise, full-stack skills, <Link href="/services/web-design-development/nodejs-backend" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">cloud deployment</Link>), Design Excellence (UI/UX portfolio, <Link href="/blog/ui-ux-design-principles-best-practices" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">accessibility compliance</Link>), Business Understanding (industry experience, ROI-focused approach), and Project Management (Agile methodology, budget transparency).</>,
        },
        {
            q: "How to evaluate a professional web design agency?",
            a: <>Our 10-point evaluation framework includes: requesting case studies with documented results, technical assessment of their tech stack, checking client references, reviewing code quality, assessing communication clarity, verifying certifications (<Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">Google Partner</Link>, AWS), testing their own website for speed and SEO, and evaluating cultural fit. Beware of red flags like no portfolio, unwilling to sign NDAs, or unrealistic promises.</>,
        },
        {
            q: "What questions should I ask before hiring a web design agency?",
            a: <>Essential questions cover Technical aspects (recommended stack, security, <Link href="/services/mobile-app-development" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">mobile responsiveness</Link>, Core Web Vitals), Process (timeline, revisions, communication), Business (references, pricing, ownership), and SEO & Marketing (SEO approach, analytics readiness, scalability).</>,
        },
        {
            q: "How to choose a web design company for long-term growth?",
            a: <>Think beyond the initial launch. Evaluate <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">scalability factors</Link> (architecture, modularity, framework support) and partnership indicators (retention programs, regular updates, proactive performance suggests). Our <Link href="/contact" className="underline underline-offset-2 hover:text-[var(--brand-purple)] hover:underline transition-colors">long-term model</Link> includes quarterly performance reviews, monthly analytics reports, and flexible retainer options for continuous improvement.</>,
        },
    ];

    return (
        <FaqSection
            faqs={faqs}
            accent="var(--brand-blue-text)"
            subtitle="Answers to common questions about our web design and development services, timelines, and technical approach."
            background="var(--card-bg)"
        />
    );
}
