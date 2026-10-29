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
    title: "LinkedIn Marketing Services | B2B Lead Generation Agency 2026",
    description:
        "Scale your B2B growth with expert LinkedIn ads management & lead generation services. strong ROI growth via AI-driven ABM & thought leadership. Book your free LinkedIn audit!",
    keywords: [
        "LinkedIn marketing",
        "LinkedIn ads agency",
        "B2B lead generation",
        "LinkedIn advertising",
        "LinkedIn InMail campaigns",
        "LinkedIn sponsored content",
        "account-based marketing",
        "LinkedIn Sales Navigator",
        "B2B social media marketing",
        "LinkedIn strategy",
    ],
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services",
    },
    openGraph: {
        title: "LinkedIn Marketing Services | B2B Lead Generation Agency 2026",
        description: "Scale your B2B growth with expert LinkedIn ads management & lead generation services. strong ROI growth via AI-driven ABM & thought leadership. Book your free LinkedIn audit!",
        url: "https://www.cinuteinfomedia.com/services/social-media-marketing-services/linkedin-marketing-services",
        type: "website",
        images: [
            {
                url: "/og-images/linkedin-marketing-services.webp",
                width: 1200,
                height: 630,
                alt: "LinkedIn Marketing Services | B2B Lead Generation Agency 2026 by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LinkedIn Marketing Services | B2B Lead Generation Agency 2026",
        description: "Scale your B2B growth with expert LinkedIn ads management & lead generation services. strong ROI growth via AI-driven ABM & thought leadership. Book your free LinkedIn audit!",
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
                "name": "Cinute Infomedia",
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
                        "text": "LinkedIn marketing costs vary by scale, generally starting at $1,500/month for professional management. Our optimization reduces CPL by up to 40%."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of hiring a LinkedIn advertising agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hiring an agency ensures expert targeting, technical Insight Tag setup, and access to advanced B2B strategies like ABM and LinkedIn outreach automation."
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
