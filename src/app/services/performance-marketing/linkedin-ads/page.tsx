import Hero from "@/components/services/performance-marketing/linkedin-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/linkedin-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/linkedin-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/linkedin-ads/TechStack";
import Process from "@/components/services/performance-marketing/linkedin-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/linkedin-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/linkedin-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "LinkedIn Ads Agency | B2B Advertising Services",
    description: "Target decision-makers and generate high-quality B2B leads with our LinkedIn Ads management services. precise targeting for professional growth.",
    url: "/services/performance-marketing/linkedin-ads",
    image: "/og-images/linkdin_ads.webp",
});

export default function LinkedInAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#0a66c2" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "LinkedIn Ads Management",
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
                    "name": "LinkedIn Ads Management Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Sales", "description": "Reach C-suite executives and enterprise decision-makers." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Lead Generation", "description": "Generate high-quality leads using LinkedIn Lead Gen Forms." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Education & Training", "description": "Promote courses, certifications, and professional development." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Recruitment Ads", "description": "Attract top talent with job ads and employer branding." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Account-Based Marketing", "description": "Target specific companies with personalized campaigns." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thought Leadership", "description": "Build authority with sponsored content and articles." } }
                    ]
                }
            }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cinuteinfomedia.com" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.cinuteinfomedia.com/services" },
                    { "@type": "ListItem", "position": 3, "name": "Performance Marketing", "item": "https://www.cinuteinfomedia.com/services/performance-marketing" },
                    { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/linkedin-ads" }
                ]
            }) }} />
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
