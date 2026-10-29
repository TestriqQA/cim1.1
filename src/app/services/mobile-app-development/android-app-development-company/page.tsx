import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/android-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/android-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/android-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/android-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/android-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/android-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/android-app-development-company/CTA";
import FAQ from "@/components/services/mobile-app-development/android-app-development-company/FAQ";

export const metadata: Metadata = {
    title: "Android App Development Services | Top Company",
    description:
        "Expert Android app development company crafting custom, high-performance apps. 300+ successful launches. Get high ROI & free audit today!",
    openGraph: {
        images: [
            {
                url: "/og-images/android-app-development-company.webp",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og-images/android-app-development-company.webp"],
    },
    keywords: [
        "Android App Development Services",
        "custom Android app development",
        "Android app development company",
        "native Android development",
        "Kotlin app development",
        "Android app maintenance",
    ],
};

export default function AndroidAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#3DDC84" } as React.CSSProperties}>
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Android App Development Services",
                            provider: {
                                "@type": "Organization",
                                name: "Cinute Infomedia",
                                url: "https://www.cinuteinfomedia.com",
                            },
                            serviceType: "Mobile App Development",
                            areaServed: "Global",
                            description:
                                "Android App Development Company offering custom native and cross-platform solutions. Expert Kotlin and Java developers delivering high-performance apps.",
                            offers: {
                                "@type": "Offer",
                                priceCurrency: "USD",
                                price: "5000",
                                url: "https://www.cinuteinfomedia.com/contact",
                            },
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Android Development Services",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Custom Android App Development",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Android App Maintenance",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Android UI/UX Design",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    name: "How much does it cost to develop an Android app?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The cost varies based on complexity. A simple MVP starts from $10,000 - $25,000, while complex enterprise apps with AI/IoT features can range from $50,000 - $150,000+. We provide detailed, fixed-price quotes.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What is the best language for Android app development?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Kotlin is the industry standard and Google's preferred language. We also support Java for legacy code and C++ for high-performance NDK modules.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How long does it take to build a custom Android app?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A standard custom Android app takes 3 to 6 months from concept to launch. We offer expedited Sprint packages for urgent MVP launches in as little as 8 weeks.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What are the benefits of native Android development vs hybrid?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Native Android apps offer superior performance and better access to device hardware. Hybrid solutions (Flutter/React Native) are faster to build and cost-effective for dual-platform needs.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How do I publish my app on the Google Play Store?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "We handle the entire end-to-end publishing process, including Developer Account creation, screenshot optimization, and Google Play Protect compliance.",
                                    },
                                },
                            ],
                        },
                    ]),
                }}
            />
        </main>
    );
}
