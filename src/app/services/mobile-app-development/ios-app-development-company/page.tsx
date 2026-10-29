import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/ios-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/ios-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/ios-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/ios-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/ios-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/ios-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/ios-app-development-company/CTA";

export const metadata: Metadata = {
    title: "iOS App Development Services | Custom iPhone & iPad Apps for Global Brands",
    description:
        "Expert iOS App Development Company & Agency. We build high-performance, secure, and scalable Custom iPhone & iPad apps using Swift/SwiftUI. Get a free quote today!",
    keywords: [
        "iOS App Development Services",
        "iOS App Development Company",
        "iPhone App Development services",
        "Custom iPhone app development",
        "iPad application development",
        "Apple Watch app development",
        "SwiftUI development",
        "Enterprise iOS solutions",
        "iOS app security",
        "App Store Optimization"
    ],
    openGraph: {
        title: "iOS App Development Services | Custom iPhone & iPad Apps for Global Brands",
        description: "Expert iOS App Development Company & Agency. We build high-performance, secure, and scalable Custom iPhone & iPad apps using Swift/SwiftUI. Get a free quote today!",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company",
        type: "website",
        images: [
            {
                url: "/og-images/ios-app-development-company.webp",
                width: 1200,
                height: 630,
                alt: "iOS App Development Services | Custom iPhone & iPad Apps for Global Brands by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "iOS App Development Services | Custom iPhone & iPad Apps for Global Brands",
        description: "Expert iOS App Development Company & Agency. We build high-performance, secure, and scalable Custom iPhone & iPad apps using Swift/SwiftUI. Get a free quote today!",
        images: ["/og-images/ios-app-development-company.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company",
    },
};

export default function iOSAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#007AFF" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "iOS App Development Services",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Cinute Digital",
                                    "url": "https://www.cinuteinfomedia.com"
                                },
                                "serviceType": "Mobile App Development",
                                "areaServed": "Global",
                                "description": "Premium iOS App Development Services using Swift & SwiftUI. We build custom iPhone & iPad apps for startups and enterprises with a focus on performance and UX.",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "iOS Development Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Custom iPhone App Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "iPad App Development"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "iOS App Maintenance & Support"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Enterprise iOS Solutions"
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
                                        "name": "How much does it cost to develop an iOS app?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Costs vary based on complexity, typically ranging from $10k for MVPs to $100k+ for complex enterprise solutions."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What is the best language for iOS app development?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Swift and SwiftUI are the best modern languages for iOS development, offering superior performance and safety."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How long does it take to build a custom iPhone app?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "A standard MVP typically takes 3-4 months, while complex apps can take 6-12 months."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are the benefits of native iOS development vs hybrid?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Native development offers better performance, hardware access, and user experience compared to hybrid solutions."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I submit my app to the Apple App Store?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "We handle the full submission process via App Store Connect, ensuring compliance with Apple's guidelines."
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
            <CTA />
        </main>
    );
}
