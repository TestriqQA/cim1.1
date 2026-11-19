import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/cross-platform-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/cross-platform-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/cross-platform-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/cross-platform-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/cross-platform-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/cross-platform-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/cross-platform-app-development-company/CTA";
import FAQ from "@/components/services/mobile-app-development/cross-platform-app-development-company/FAQ";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Cross-Platform App Development | Cinute InfoMedia",
    description:
        "Cross-platform app development services. High-performance, native-like iOS and Android apps from one codebase - faster delivery, lower cost.",
    openGraph: {
        title: "Cross-Platform App Development | Cinute InfoMedia",
        description:
            "Cross-platform app development services. High-performance, native-like iOS and Android apps from one codebase - faster delivery, lower cost.",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company",
        type: "website",
        images: [
            {
                url: "/og-images/cross-platform-app-development.webp",
                width: 1200,
                height: 630,
                alt: "Cross-Platform App Development Services by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cross-Platform App Development | Cinute InfoMedia",
        description:
            "Cross-platform app development services. High-performance, native-like iOS and Android apps from one codebase - faster delivery, lower cost.",
        images: ["/og-images/cross-platform-app-development.webp"],
    },
    alternates: {
        canonical: "/services/mobile-app-development/cross-platform-app-development-company",
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
            { name: "Cross-Platform", url: "/services/mobile-app-development/cross-platform-app-development-company" },
        ],
        "https://www.cinuteinfomedia.com/services/mobile-app-development/cross-platform-app-development-company/#breadcrumb"
    ),
};

export default function CrossPlatformAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#667eea" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "Cross-Platform App Development Services",
                                "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
                                            "text": "Cross-platform app development helps in building mobile applications that are compatible with multiple operating systems, such as iOS and Android, using a single codebase. This approach saves time and reduces costs compared to native development."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Which is better: Flutter or React Native in 2026?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Both are excellent choices. React Native is ideal if you have an existing web team (JavaScript/React) and complex native dependencies. Flutter is superior for highly branded, custom UI-heavy apps with its Skia rendering engine. We help you choose the best fit during our consulting phase."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How much does it cost to build a cross-platform app?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "The cost varies based on complexity, features, and design. Generally, it is 30-40% cheaper than building two separate native apps. Contact us for a quick quote tailored to your specific project needs."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are the benefits of cross-platform vs native development?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Cross-platform offers faster time-to-market, lower costs, and easier maintenance (one codebase to update). Native development is reserved for extremely high-performance games or apps requiring deep, non-standard hardware access. Modern cross-platform frameworks offer near-native performance for 95% of business apps."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to develop a multi-platform mobile app?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "A typical MVP (Minimum Viable Product) can be delivered in 3-4 months. More complex enterprise solutions may take 6-8 months. Our agile process ensures you see progress every sprint."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can you convert my existing native app to cross-platform?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, we offer Native to cross-platform app conversion services. We can rewrite your iOS or Android app in React Native or Flutter, allowing you to manage a single codebase moving forward."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do cross-platform apps support native device features?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely. Through Platform-Specific Modules and bridges, we can access the camera, GPS, Bluetooth, biometric sensors, and other native hardware features just like a native app."
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
