import type { Metadata } from "next";
import Hero from "@/components/services/social-media-marketing-services/linkedin-marketing-services/Hero";
import ServiceOverview from "@/components/services/social-media-marketing-services/linkedin-marketing-services/ServiceOverview";
import SolutionTypes from "@/components/services/social-media-marketing-services/linkedin-marketing-services/SolutionTypes";
import TechStack from "@/components/services/social-media-marketing-services/linkedin-marketing-services/TechStack";
import Process from "@/components/services/social-media-marketing-services/linkedin-marketing-services/Process";
import WhyChooseUs from "@/components/services/social-media-marketing-services/linkedin-marketing-services/WhyChooseUs";
import FAQ from "@/components/services/social-media-marketing-services/linkedin-marketing-services/FAQ";
import CTA from "@/components/services/social-media-marketing-services/linkedin-marketing-services/CTA";

export const metadata: Metadata = {
    title: "LinkedIn Marketing Services | Cinute InfoMedia",
    description:
        "Scale your B2B growth with expert LinkedIn ads management & lead generation services, driving ROI growth through AI-driven ABM and thought leadership. Book your free LinkedIn audit!",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services",
    },
    openGraph: {
        title: "LinkedIn Marketing Services | Cinute InfoMedia",
        description: "Scale your B2B growth with expert LinkedIn ads management & lead generation services, driving ROI growth through AI-driven ABM and thought leadership. Book your free LinkedIn audit!",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services",
        type: "website",
        images: [
            {
                url: "/og-images/linkedin-marketing-services.webp",
                width: 1200,
                height: 630,
                alt: "LinkedIn Marketing Services | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LinkedIn Marketing Services | Cinute InfoMedia",
        description: "Scale your B2B growth with expert LinkedIn ads management & lead generation services, driving ROI growth through AI-driven ABM and thought leadership. Book your free LinkedIn audit!",
        images: ["/og-images/linkedin-marketing-services.webp"],
    },

};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "LinkedIn Marketing Services",
            "description": "Professional LinkedIn ads management, B2B lead generation, and Account Based Marketing (ABM) services optimized for 2026.",
            "provider": {
                "@type": "Organization",
                "name": "Cinute InfoMedia",
                "url": "https://www.cinuteinfomedia.com"
            },
            "areaServed": "Global",
            "serviceType": "Social Media Marketing",
            "offers": {
                "@type": "Offer",
                "description": "LinkedIn Ads Management & B2B Lead Gen Packages"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much do LinkedIn marketing services cost in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "LinkedIn marketing cost for small business typically ranges from $1,500 to $5,000+ per month for management, depending on ad spend and complexity. We offer tiered packages to ensure ROI at every level."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of hiring a LinkedIn advertising agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An expert B2B LinkedIn marketing agency provides deep targeting expertise, access to beta features, and advanced LinkedIn ads management that reduces CPL by up to 40% compared to in-house efforts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I generate B2B leads on LinkedIn?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We utilize a mix of LinkedIn lead generation services, including Lead Gen Forms, LinkedIn ABM (Account Based Marketing), and high-value lead magnet creation services to capture high-intent data."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is included in LinkedIn ads management services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our service includes strategy, ad creative, LinkedIn sponsored content management, technical setup (Insight Tag), A/B testing, and comprehensive ROI tracking."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to see results from LinkedIn marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While brand awareness is immediate, high-quality B2B lead generation typically sees optimal scaling after 30-60 days of data-driven optimization."
                    }
                }
            ]
        }
    ]
};

export default function LinkedInMarketingPage() {
    return (
        <main style={{ "--page-selection-bg": "#0A66C2" } as React.CSSProperties}>
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
