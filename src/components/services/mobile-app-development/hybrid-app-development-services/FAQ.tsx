"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            question: "What is hybrid app development?",
            answer: <><span className="text-inherit">Hybrid app development is a software development approach where a single codebase is written using web technologies (HTML, CSS, JavaScript) and then wrapped in a native container. This allows the app to run on multiple platforms like </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">Android</Link> while still accessing native device features like GPS and Camera.</>,
        },
        {
            question: "What are the benefits of hybrid apps vs native apps?",
            answer: "The primary benefits include cost-efficiency, faster time-to-market, and easier maintenance. Unlike native apps that require separate teams for Swift and Kotlin, hybrid apps use a single team and codebase. In 2026, frameworks like Ionic and Capacitor offer performance that is nearly indistinguishable from native for 90% of business use cases.",
        },
        {
            question: "How much does it cost to build a hybrid mobile app in 2026?",
            answer: "The cost typically ranges from $15,000 to $60,000+ depending on complexity. However, choosing hybrid development generally results in significant cost savings compared to building two separate native applications for iOS and Android.",
        },
        {
            question: "Which frameworks are best for hybrid app development in 2026?",
            answer: "Ionic and Capacitor are currently the industry leaders for hybrid development due to their stability, extensive plugin library, and support for modern web frameworks. Other notable options include Apache Cordova for legacy support and PWAs for zero-download experiences.",
        },
        {
            question: "How long does it take to develop a custom hybrid app?",
            answer: <><span className="text-inherit">A standard hybrid app MVP can be developed in 8 to 12 weeks. Complex </span><Link href="/services/mobile-app-development/enterprise-application-development-services" className="text-[var(--accent-cyan-text)] hover:underline underline underline-offset-2">enterprise applications</Link> may take 4 to 6 months. The single codebase approach significantly reduces the timeline compared to native development.</>,
        },
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-cyan-text)"
            title="Hybrid App FAQs"
            subtitle="Everything you need to know about hybrid app development and our approach in 2026."
        />
    );
}
