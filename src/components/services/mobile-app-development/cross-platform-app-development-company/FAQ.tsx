"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
    const faqs = [
        {
            question: "What is cross-platform app development?",
            answer: <><span className="text-inherit">Cross-platform app development helps in building mobile applications that are compatible with multiple operating systems, such as </span><Link href="/services/mobile-app-development/ios-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">iOS</Link> and <Link href="/services/mobile-app-development/android-app-development-company" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">Android</Link>, using a single codebase. This approach saves time and reduces costs compared to native development.</>
        },
        {
            question: "Which is better: Flutter or React Native in 2026?",
            answer: "Both are excellent choices. React Native is ideal if you have an existing web team (JavaScript/React) and complex native dependencies. Flutter is superior for highly branded, custom UI-heavy apps with its Skia rendering engine. We help you choose the best fit during our consulting phase."
        },
        {
            question: "How much does it cost to build a cross-platform app?",
            answer: "The cost varies based on complexity, features, and design. Generally, it is 30-40% cheaper than building two separate native apps. Contact us for a quick quote tailored to your specific project needs."
        },
        {
            question: "What are the benefits of cross-platform vs native development?",
            answer: "Cross-platform offers faster time-to-market, lower costs, and easier maintenance (one codebase to update). Native development is reserved for extremely high-performance games or apps requiring deep, non-standard hardware access. Modern cross-platform frameworks offer near-native performance for 95% of business apps."
        },
        {
            question: "How long does it take to develop a multi-platform mobile app?",
            answer: <><span className="text-inherit">A typical MVP (Minimum Viable Product) can be delivered in 3-4 months. More complex </span><Link href="/services/mobile-app-development/enterprise-application-development-services" className="text-[var(--accent-indigo-text)] hover:underline underline underline-offset-2">enterprise solutions</Link> may take 6-8 months. Our agile process ensures you see progress every sprint.</>
        },
        {
            question: "Can you convert my existing native app to cross-platform?",
            answer: "Yes, we offer Native to cross-platform app conversion services. We can rewrite your iOS or Android app in React Native or Flutter, allowing you to manage a single codebase moving forward."
        },
        {
            question: "Do cross-platform apps support native device features?",
            answer: "Absolutely. Through Platform-Specific Modules and bridges, we can access the camera, GPS, Bluetooth, biometric sensors, and other native hardware features just like a native app."
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-foreground">Frequently Asked </span>
                        <span className="text-[var(--accent-indigo-text)]">Questions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ color: "var(--foreground)" }}>
                        Common questions about our efficient cross-platform development services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-lg px-4 bg-card"
                            >
                                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[var(--accent-indigo-text)] hover:no-underline py-4 text-base md:text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base pb-4 leading-relaxed" style={{ color: "var(--foreground)" }}>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
