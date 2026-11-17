"use client";

import React from 'react';
import Link from "next/link";
import FaqSection from "@/components/ui/FaqSection";

export default function FAQ() {
    const faqs = [
        {
            question: "How much does it cost to develop an Android app?",
            answer: <><span className="text-inherit">The cost varies based on complexity. A simple MVP starts from $10,000 to $25,000, while complex </span><Link href="/services/mobile-app-development/enterprise-application-development-services" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">enterprise apps</Link> with <Link href="/services/ai-workflows-automations-services" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">AI/IoT features</Link> can range from $50,000 to $150,000+. We provide detailed, fixed-price quotes after our initial discovery call.</>,
        },
        {
            question: "What is the best language for Android app development?",
            answer: <><span className="text-inherit">Kotlin is currently the industry standard and Google&apos;s preferred language for Android development due to its conciseness and safety features. However, we also support </span><Link href="/services/web-design-development/java-spring-boot" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">Java</Link> for legacy code modernization and C++ for high-performance NDK modules.</>,
        },
        {
            question: "How long does it take to build a custom Android app?",
            answer: "A standard custom Android app takes 3 to 6 months from concept to launch. This includes design, development, testing, and deployment. We offer expedited \"Sprint\" packages for urgent MVP launches in as little as 8 weeks.",
        },
        {
            question: "What are the benefits of native Android development vs hybrid?",
            answer: <><span className="text-inherit">Native Android apps offer superior performance, better access to device hardware (camera, GPS), and a smoother UX compared to </span><Link href="/services/mobile-app-development/hybrid-app-development-services" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">hybrid apps</Link>. However, hybrid solutions (<Link href="/services/mobile-app-development/cross-platform-app-development-company" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">Flutter/React Native</Link>) are faster to build and cost-effective if you need both iOS and Android apps simultaneously.</>,
        },
        {
            question: "How do I publish my app on the Google Play Store?",
            answer: <><span className="text-inherit">We handle the entire end-to-end publishing process. This includes creating your Developer Account, preparing high-res screenshots, writing </span><Link href="/services/seo-services" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">SEO-optimized</Link> descriptions, ensuring Google Play Protect compliance, and managing the review process to maximize approval success.</>,
        },
        {
            question: "Do you offer Android app migration and legacy code modernization?",
            answer: <><span className="text-inherit">Yes! We specialize in </span><Link href="/services/additional-support-services" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">Android app migration services</Link>, helping businesses upgrade from <Link href="/services/web-design-development/java-spring-boot" className="text-[var(--accent-green-text)] hover:underline underline underline-offset-2">Java</Link> to Kotlin or move from monolithic architectures to scalable microservices, improving maintainability and performance.</>,
        },
        {
            question: "Can you integrate on-device AI and machine learning?",
            answer: "Absolutely. We harness the power of TensorFlow Lite and Google ML Kit to add smart features like image labeling, face detection, and text recognition directly on the device, ensuring privacy and offline capability.",
        },
    ];

    return (
        <FaqSection
            faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
            accent="var(--accent-android-text)"
            subtitle="Get answers to common questions about our Android app development services."
        />
    );
}
