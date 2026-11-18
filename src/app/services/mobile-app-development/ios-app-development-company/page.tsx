import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/ios-app-development-company/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/ios-app-development-company/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/ios-app-development-company/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/ios-app-development-company/TechStack";
import Process from "@/components/services/mobile-app-development/ios-app-development-company/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/ios-app-development-company/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/ios-app-development-company/CTA";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "iOS App Development Company | Cinute InfoMedia",
    description:
        "Expert iOS app development company. High-performance, secure, scalable iPhone and iPad apps built with Swift and SwiftUI. Get a free quote.",
    openGraph: {
        title: "iOS App Development Company | Cinute InfoMedia",
        description: "Expert iOS app development company. High-performance, secure, scalable iPhone and iPad apps built with Swift and SwiftUI. Get a free quote.",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company",
        type: "website",
        images: [
            {
                url: "/og-images/ios-app-development-company.webp",
                width: 1200,
                height: 630,
                alt: "iOS App Development Company | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "iOS App Development Company | Cinute InfoMedia",
        description: "Expert iOS app development company. High-performance, secure, scalable iPhone and iPad apps built with Swift and SwiftUI. Get a free quote.",
        images: ["/og-images/ios-app-development-company.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company",
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
            { name: "iOS Development", url: "/services/mobile-app-development/ios-app-development-company" },
        ],
        "https://www.cinuteinfomedia.com/services/mobile-app-development/ios-app-development-company/#breadcrumb"
    ),
};

export default function iOSAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#007AFF" } as React.CSSProperties}>
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
                                "name": "iOS App Development Services",
                                "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
