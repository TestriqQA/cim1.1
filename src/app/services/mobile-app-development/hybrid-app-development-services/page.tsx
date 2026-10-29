import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/hybrid-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/hybrid-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/hybrid-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/hybrid-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/hybrid-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/hybrid-app-development-services/WhyChooseUs";
import FAQ from "@/components/services/mobile-app-development/hybrid-app-development-services/FAQ";
import CTA from "@/components/services/mobile-app-development/hybrid-app-development-services/CTA";

export const metadata: Metadata = {
    title: "Hybrid App Development Services | Top Cross-Platform Agency 2026 \uD83D\uDE80",
    description:
        "Expert hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor. measurable CTR boost!",
    keywords: [
        "hybrid app development services",
        "Ionic framework app development agency",
        "Capacitor development solutions",
        "hybrid mobile app development company",
        "cross-platform app development",
        "PWA development",
        "custom hybrid app development for startups",
        "healthcare hybrid applications",
        "IoT hybrid app development",
    ],
    openGraph: {
        title: "Hybrid App Development Services | Top Cross-Platform Agency 2026 \uD83D\uDE80",
        description: "Expert hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor. measurable CTR boost!",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/hybrid-app-development-services.webp",
                width: 1200,
                height: 630,
                alt: "Hybrid App Development Services | Top Cross-Platform Agency 2026 🚀 by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hybrid App Development Services | Top Cross-Platform Agency 2026 \uD83D\uDE80",
        description: "Expert hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor. measurable CTR boost!",
        images: ["/og-images/hybrid-app-development-services.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services",
    },
};

export default function HybridAppDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Hybrid App Development Services",
                "provider": {
                    "@type": "Organization",
                    "name": "Cinute Infomedia",
                    "url": "https://www.cinuteinfomedia.com",
                },
                "description":
                    "High-performance hybrid mobile app development services using Ionic and Capacitor. Single codebase solutions for iOS and Android.",
                "areaServed": "Global",
                "serviceType": "Mobile App Development",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Hybrid App Development Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Custom Hybrid App Development for Startups (MVPs)",
                                "description": "Cost-effective, feature-rich MVPs that launch on iOS and Android simultaneously to validate a business model quickly.",
                            },
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Ecommerce and Retail Hybrid App Solutions",
                                "description": "Mobile shopping apps with secure payment gateways and AR-driven product previews built on modern web view architecture.",
                            },
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "B2B Hybrid Apps for Internal Operations",
                                "description": "Secure internal business apps featuring robust data encryption and seamless ERP and CRM integration.",
                            },
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Healthcare and HIPAA-Compliant Hybrid Apps",
                                "description": "Healthcare applications that follow HIPAA guidelines, ensuring patient data privacy and secure telehealth capabilities.",
                            },
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Wearable and IoT Hybrid App Development",
                                "description": "Hybrid solutions that sync with smartwatches and IoT devices and provide real-time data visualization.",
                            },
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Content, Media & EdTech Solutions",
                                "description": "News portals and learning platforms supporting offline reading, video streaming, and real-time progress tracking.",
                            },
                        },
                    ],
                },
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is hybrid app development?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Hybrid app development is a software development approach where a single codebase is written using web technologies and wrapped in a native container to run on multiple platforms.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of hybrid apps vs native apps?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary benefits include cost-efficiency, faster time-to-market, and easier maintenance using a single codebase for multiple platforms.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "How much does it cost to build a hybrid mobile app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The cost typically ranges from $15,000 to $60,000+, offering up to 50% savings compared to native builds.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Which frameworks are best for hybrid app development in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ionic and Capacitor are the leading frameworks for hybrid development in 2026.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to develop a custom hybrid app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A standard hybrid app MVP can be developed in 8 to 12 weeks.",
                        },
                    },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#00b4d8" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
