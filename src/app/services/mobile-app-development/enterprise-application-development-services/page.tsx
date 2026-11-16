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
    title: "Enterprise App Development Services | Cinute InfoMedia",
    description:
        "Empower your business with Enterprise Application Development services. Custom, secure, & scalable enterprise software development for global ROI. Get a quote today! 💼",
    openGraph: {
        title: "Enterprise App Development Services | Cinute InfoMedia",
        description:
            "Empower your business with Enterprise Application Development services. Custom, secure, & scalable enterprise software development for global ROI. Get a quote today! 💼",
        url: "https://www.cinuteinfomedia.com/services/mobile-app-development/enterprise-application-development-services",
        type: "website",
        images: [
            {
                url: "/og-images/enterprise-application-development.webp",
                width: 1200,
                height: 630,
                alt: "Enterprise App Development Services by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise App Development Services | Cinute InfoMedia",
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
                "name": "Cinute InfoMedia",
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
                        "text": "Enterprise application development is the process of building complex, scalable, and secure software solutions designed to support the mission-critical operations of large organizations. Unlike regular apps, enterprise apps require deep integration with existing systems (ERP/CRM), high-level security (SSO/IAM), and the ability to scale for thousands of internal or external users."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does enterprise app development cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost of Enterprise Application Development services typically ranges from $50,000 to $500,000+, depending on the complexity, number of integrations, and security requirements. We provide detailed roadmap planning to ensure your investment delivers a clear ROI through automation and efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of custom enterprise software?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Custom enterprise software provides a competitive edge by automating unique business processes, improving data security, and ensuring seamless interoperability between legacy systems and modern cloud-native infrastructures. It eliminates the limitations of rigid, one-size-fits-all platforms."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to build an enterprise-grade app?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A typical timeline for a production-ready enterprise app is 4 to 9 months. This includes strategy, UI/UX design, integration, security hardening, and deployment. Our Agile and DevOps approach allows for faster time-to-market through continuous delivery cycles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between enterprise and regular app development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The primary differences lie in security, scale, and integration. Enterprise apps must meet strict compliance standards (SOC 2, HIPAA), integrate with complex corporate databases, and support massive concurrent user loads, whereas regular apps often focus on single-use cases for the general consumer."
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
