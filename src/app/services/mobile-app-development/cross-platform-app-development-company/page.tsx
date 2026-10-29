import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/cross-platform-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/cross-platform-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/cross-platform-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/cross-platform-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/cross-platform-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/cross-platform-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/cross-platform-app-development-company/CTA";
import FAQ from "@/components/services/mobile-app-development/cross-platform-app-development-company/FAQ";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Cross-Platform App Development Services | React Native & Flutter",
    description:
        "🚀 Cross-Platform App Development Services. We build high-performance, native-like iOS & Android apps with a single codebase. faster delivery. lower costs. Start your project today! 📱",
    keywords: [
        "cross platform app development",
        "React Native development",
        "Flutter development",
        "hybrid app development",
        "mobile app development",
        "iOS Android app",
        "single codebase",
    ],
    openGraph: {
        title: "Cross-Platform App Development Services | React Native & Flutter",
        description:
            "🚀 Cross-Platform App Development Services. We build high-performance, native-like iOS & Android apps with a single codebase. faster delivery. lower costs. Start your project today! 📱",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company",
        type: "website",
        images: [
            {
                url: "/og-images/cross-platform-app-development.webp",
                width: 1200,
                height: 630,
                alt: "Cross-Platform App Development Services by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cross-Platform App Development Services | React Native & Flutter",
        description:
            "🚀 Cross-Platform App Development Services. We build high-performance, native-like iOS & Android apps with a single codebase. faster delivery. lower costs. Start your project today! 📱",
        images: ["/og-images/cross-platform-app-development.webp"],
    },
    alternates: {
        canonical: "/services/mobile-app-development/cross-platform-app-development-company",
    },
};

export default function CrossPlatformAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#667eea" } as React.CSSProperties}>
            <Script
                id="cross-platform-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "Cross-Platform App Development Services",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Cinute Infomedia",
                                    "url": "https://www.cinuteinfomedia.com"
                                },
                                "description": "Professional cross-platform mobile app development services using React Native and Flutter. Build high-performance iOS and Android apps with a single codebase.",
                                "areaServed": "Global",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Mobile App Development Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "React Native App Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Flutter App Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "App Migration & Modernization"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What is cross-platform app development?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Cross-platform app development involves building mobile applications that run on multiple operating systems, such as iOS and Android, using a single codebase. This approach significantly reduces development time and costs versus native development."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Which is better: Flutter or React Native in 2026?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Both frameworks are industry leaders. React Native is preferable for teams with JavaScript expertise and projects needing complex native integration. Flutter is excellent for highly custom, brand-forward UIs. The choice depends on specific project requirements."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How much does it cost to build a cross-platform app?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Cross-platform development typically costs 30-40% less than native development because a single codebase serves both iOS and Android. Exact costs depend on feature complexity and design requirements."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to develop a multi-platform mobile app?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "A standard MVP can be developed in 3-4 months. More complex, enterprise-grade applications may require 6-8 months. Timeline varies based on scope and specific deliverables."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are the benefits of cross-platform vs native development?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Key benefits include faster time-to-market, significant cost deduction (up to 40%), code reusability, and easier long-term maintenance. Modern frameworks also offer near-native performance for most use cases."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <CTA />
        </main>
    );
}
