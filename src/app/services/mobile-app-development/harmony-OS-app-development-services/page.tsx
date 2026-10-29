import type { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/harmony-OS-app-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/harmony-OS-app-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/harmony-OS-app-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/harmony-OS-app-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/harmony-OS-app-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/harmony-OS-app-development-services/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/harmony-OS-app-development-services/CTA";

export const metadata: Metadata = {
    title: "HarmonyOS App Development Services | Huawei AppGallery | TestrIQ",
    description:
        "Expert HarmonyOS app development services. Build distributed apps for Huawei smartphones, tablets, wearables, and IoT devices. HMS Core integration, ArkTS & ArkUI development, AppGallery submission.",
    keywords: [
        "HarmonyOS app development",
        "Huawei app development",
        "AppGallery development",
        "HMS Core services",
        "ArkTS development",
        "ArkUI apps",
        "distributed applications",
        "Huawei wearable apps",
        "HiCar development",
        "Huawei smart TV apps",
    ],
    openGraph: {
        title: "HarmonyOS App Development Services | Huawei AppGallery | TestrIQ",
        description:
            "Expert HarmonyOS app development services. Build distributed apps for Huawei smartphones, tablets, wearables, and IoT devices. HMS Core integration, ArkTS & ArkUI development, AppGallery submission.",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/harmony-OS-app-development-services.webp",
                width: 1200,
                height: 630,
                alt: "HarmonyOS App Development Services by TestrIQ",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "HarmonyOS App Development Services | Huawei AppGallery | TestrIQ",
        description:
            "Expert HarmonyOS app development services. Build distributed apps for Huawei smartphones, tablets, wearables, and IoT devices. HMS Core integration, ArkTS & ArkUI development, AppGallery submission.",
        images: ["/og-images/harmony-OS-app-development-services.webp"],
    },
    alternates: {
        canonical: "/services/mobile-app-development/harmony-OS-app-development-services",
    },
};

export default function HarmonyOSAppDevelopmentPage() {
    return (
        <main style={{ "--page-selection-bg": "#C7000B" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "HarmonyOS App Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Cinute Infomedia",
                            "url": "https://www.cinuteinfomedia.com",
                            "logo": "https://www.cinuteinfomedia.com/logo.png",
                            "description": "Global Web Design, Development & Digital Marketing Agency",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park",
                                "addressLocality": "Mira Road, Mira Bhayandar",
                                "addressRegion": "Maharashtra",
                                "postalCode": "401107",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+919004988859",
                                "contactType": "Customer Service",
                                "availableLanguage": ["English", "Hindi"]
                            }
                        },
                        "areaServed": ["United States", "India", "United Kingdom", "Australia"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "HarmonyOS App Development Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "E-commerce Apps",
                                        "description": "Shopping apps optimized for Huawei AppGallery with HMS payment and push notifications."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Health & Fitness Apps",
                                        "description": "Health apps leveraging Huawei Health Kit with sync for Huawei Watch and fitness bands."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Gaming Apps",
                                        "description": "High-performance games using HarmonyOS graphics APIs and Huawei Game Center."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Education Apps",
                                        "description": "E-learning platforms with multi-device screen sharing and distributed learning features."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Fintech Apps",
                                        "description": "Secure financial apps with HMS Safety Detect and FIDO authentication."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Smart Home Apps",
                                        "description": "IoT control apps for the HiLink ecosystem with home automation and device management."
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cinuteinfomedia.com" },
                            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.cinuteinfomedia.com/services" },
                            { "@type": "ListItem", "position": 3, "name": "Mobile App Development", "item": "https://www.cinuteinfomedia.com/services/mobile-app-development" },
                            { "@type": "ListItem", "position": 4, "name": "HarmonyOS App Development Services", "item": "https://www.cinuteinfomedia.com/services/mobile-app-development/harmony-OS-app-development-services" }
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
