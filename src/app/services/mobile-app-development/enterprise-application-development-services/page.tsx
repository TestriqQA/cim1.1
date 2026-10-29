import { Metadata } from "next";
import Hero from "@/components/services/mobile-app-development/enterprise-application-development-services/Hero";
import ServiceOverview from "@/components/services/mobile-app-development/enterprise-application-development-services/ServiceOverview";
import SolutionTypes from "@/components/services/mobile-app-development/enterprise-application-development-services/SolutionTypes";
import TechStack from "@/components/services/mobile-app-development/enterprise-application-development-services/TechStack";
import Process from "@/components/services/mobile-app-development/enterprise-application-development-services/Process";
import WhyChooseUs from "@/components/services/mobile-app-development/enterprise-application-development-services/WhyChooseUs";
import CTA from "@/components/services/mobile-app-development/enterprise-application-development-services/CTA";
import FAQ from "@/components/services/mobile-app-development/enterprise-application-development-services/FAQ";

export const metadata: Metadata = {
    title: "Enterprise App Development Services | Secure & Scalable",
    description:
        "Empower your business with Enterprise Application Development services. Custom, secure, & scalable enterprise software development for global ROI. Get a quote today! 💼",
    keywords: [
        "Enterprise Application Development services",
        "Enterprise Software Development",
        "Enterprise App Development company",
        "Enterprise Mobile App Development",
        "Enterprise Web Applications",
    ],
    openGraph: {
        title: "Enterprise App Development Services | Secure & Scalable",
        description:
            "Empower your business with Enterprise Application Development services. Custom, secure, & scalable enterprise software development for global ROI. Get a quote today! 💼",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/enterprise-application-development.webp",
                width: 1200,
                height: 630,
                alt: "Enterprise App Development Services by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise App Development Services | Secure & Scalable",
        description:
            "Empower your business with Enterprise Application Development services. Custom, secure, & scalable enterprise software development for global ROI. Get a quote today! 💼",
        images: ["/og-images/enterprise-application-development.webp"],
    },
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Enterprise Application Development Services",
            "description": "Custom enterprise software development services for global organizations.",
            "provider": {
                "@type": "Organization",
                "name": "Cinute Infomedia",
                "url": "https://www.cinuteinfomedia.com/"
            },
            "serviceType": "Enterprise App Development",
            "areaServed": ["US", "EU", "India", "APAC"],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Enterprise Application Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Manufacturing Enterprise Apps",
                            "description": "Business process automation with production monitoring, quality control, and legacy system integration for the shop floor."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Healthcare Enterprise Apps",
                            "description": "HIPAA and GDPR compliant software for patient engagement, clinical workflows, and secure health record administration."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Financial Services Applications",
                            "description": "Custom fintech and banking applications with bank-level encryption and regulatory compliance for secure transactions."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Logistics & Supply Chain Apps",
                            "description": "Supply chain management apps with route optimization and real-time shipment tracking across global markets."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Retail Enterprise Solutions",
                            "description": "Omnichannel solutions with automated inventory management and employee apps for global retail chains."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Government & Public Sector Apps",
                            "description": "Secure, compliant citizen portals and internal operations apps with FedRAMP-ready field inspection and case management."
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
                    "name": "What is enterprise application development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Enterprise application development is the process of building complex, scalable, and secure software solutions designed to support the mission-critical operations of large organizations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does enterprise app development cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of Enterprise Application Development services typically ranges from $50,000 to $500,000+, depending on complexity and integration needs."
                    }
                }
            ]
        }
    ]
};

export default function EnterpriseAppDevelopmentPage() {
    return (
        <main className="min-h-screen" style={{ "--page-selection-bg": "#2563eb" } as React.CSSProperties}>
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
