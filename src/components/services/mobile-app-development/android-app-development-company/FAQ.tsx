"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            backgroundColor: "rgba(61, 220, 132, 0.1)",
                            borderColor: "rgba(61, 220, 132, 0.2)",
                        }}
                    >
                        <HelpCircle className="w-4 h-4" style={{ color: "var(--accent-green-text)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--accent-green-text)" }}>
                            Common Questions
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span style={{ color: "var(--foreground)" }}>Frequently Asked</span>{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3DDC84, #78C257)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                        Get answers to common questions about our Android app development services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border transition-all duration-300"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: openIndex === idx ? "#3DDC84" : "var(--border-color)",
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-semibold text-lg ${openIndex === idx ? "text-[var(--accent-green-text)]" : "text-[var(--foreground)]"}`}>
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 text-[var(--accent-green-text)]" />
                                ) : (
                                    <Plus className="w-5 h-5 text-[var(--foreground)]" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0 text-[var(--foreground)] leading-relaxed" style={{ color: "var(--foreground)" }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
