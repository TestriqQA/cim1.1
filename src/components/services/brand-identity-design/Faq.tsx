"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function Faq() {
    const faqs = [
        {
            question: "What is brand identity design and why is it important?",
            answer: "Brand identity design is the creation of all visual and verbal elements that represent your company, including your logo, color palette, typography, and voice. It is crucial because it builds Brand Recognition and Awareness, creates trust with customers, and differentiates you from competitors in a crowded global market. A strong identity directly influences purchasing decisions and customer loyalty."
        },
        {
            question: "What is the difference between branding and brand identity?",
            answer: "Branding is the holistic process of shaping how your audience perceives your company (the \"why\" and \"feeling\"). Brand identity is the tangible collection of visual tools (the \"what\")-logo, fonts, colors-that you use to communicate that brand. Think of branding as the personality and brand identity as the clothes and style."
        },
        {
            question: "How long does the brand identity design process take?",
            answer: "For a standard brand identity design for startups, the timeline is typically 2-4 weeks. For comprehensive corporate rebranding services or enterprise systems involving extensive guidelines and collateral, the process can take 6-12 weeks. We emphasize quality and strategic alignment at every step."
        },
        {
            question: "How much does brand identity design cost?",
            answer: <span>Costs vary based on scope. An affordable brand identity design service for a small business might start from $1,500 - $3,000. Comprehensive agencies packages for <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">B2B</Link> or <Link href="/services/web-design-development/saas-development-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">SaaS companies</Link> often range from $5,000 to $20,000+ depending on the depth of strategy, number of deliverables, and market research required.</span>
        },
        {
            question: "What are the key elements of a brand identity?",
            answer: "The key elements include a primary Logo, Color Palette, Typography (Fonts), Imagery/Photography Style, Iconography, Brand Voice/Tone, and a Brand Style Guide to govern their usage."
        },
        {
            question: "Do you offer rebranding services for established companies?",
            answer: <span>Yes, we specialize in <Link href="/services/web-design-development/branding-services" className="underline underline-offset-2 hover:text-[var(--accent-amber-text)]">rebranding services</Link> for small business and large enterprises. We carefully audit your existing brand equity to ensure we retain what works while modernizing your visual language to meet current market standards and Graphic Design Principles.</span>
        },
        {
            question: "Will I own the copyright to my brand files?",
            answer: "Absolutely. Upon final payment and delivery, full copyright ownership of all approved designs is transferred to you. You will receive all source files necessary for trademark registration and unrestricted commercial use."
        }
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-amber-text)"
            subtitle="Expert Answers to Your Branding Questions"
        />
    );
}
