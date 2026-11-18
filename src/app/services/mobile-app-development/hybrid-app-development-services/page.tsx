import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/hybrid-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/hybrid-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/hybrid-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/hybrid-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/hybrid-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/hybrid-app-development-services/WhyChooseUs";
import FAQ from "@/components/services/mobile-app-development/hybrid-app-development-services/FAQ";
import CTA from "@/components/services/mobile-app-development/hybrid-app-development-services/CTA";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Hybrid App Development Services | Cinute InfoMedia",
    description:
        "Expert hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor for a measurable CTR boost.",
    openGraph: {
        title: "Hybrid App Development Services | Cinute InfoMedia",
        description: "Expert hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor for a measurable CTR boost.",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/hybrid-app-development-services.webp",
                width: 1200,
                height: 630,
                alt: "Hybrid App Development Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hybrid App Development Services | Cinute InfoMedia",
        description: "Expert hybrid mobile app development company. Build high-performance, single codebase apps for iOS & Android with Ionic & Capacitor for a measurable CTR boost.",
        images: ["/og-images/hybrid-app-development-services.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services",
    },
};

// T5 follow-up: this page emitted no BreadcrumbList, unlike the rest of the
// service tree. Added as a standalone block so the schema already on the page
// is left exactly as it was.
const breadcrumbLd = {
    "@context": "https://schema.org",
    ...generateBreadcrumbSchema(
        [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Mobile Apps", url: "/services/mobile-app-development" },
            { name: "Hybrid Apps", url: "/services/mobile-app-development/hybrid-app-development-services" },
        ],
        "https://www.cinuteinfomedia.com/services/mobile-app-development/hybrid-app-development-services/#breadcrumb"
    ),
};

export default function HybridAppDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Hybrid App Development Services",
                "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
                            "text": "Hybrid app development is a software development approach where a single codebase is written using web technologies (HTML, CSS, JavaScript) and then wrapped in a native container. This allows the app to run on multiple platforms like iOS and Android while still accessing native device features like GPS and Camera.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of hybrid apps vs native apps?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary benefits include cost-efficiency, faster time-to-market, and easier maintenance. Unlike native apps that require separate teams for Swift and Kotlin, hybrid apps use a single team and codebase. In 2026, frameworks like Ionic and Capacitor offer performance that is nearly indistinguishable from native for 90% of business use cases.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "How much does it cost to build a hybrid mobile app in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The cost typically ranges from $15,000 to $60,000+ depending on complexity. However, choosing hybrid development generally results in significant cost savings compared to building two separate native applications for iOS and Android.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "Which frameworks are best for hybrid app development in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ionic and Capacitor are currently the industry leaders for hybrid development due to their stability, extensive plugin library, and support for modern web frameworks. Other notable options include Apache Cordova for legacy support and PWAs for zero-download experiences.",
                        },
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to develop a custom hybrid app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A standard hybrid app MVP can be developed in 8 to 12 weeks. Complex enterprise applications may take 4 to 6 months. The single codebase approach significantly reduces the timeline compared to native development.",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
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
