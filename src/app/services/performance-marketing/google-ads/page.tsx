import Hero from "@/components/services/performance-marketing/google-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/google-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/google-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/google-ads/TechStack";
import Process from "@/components/services/performance-marketing/google-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/google-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/google-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Google Ads Agency | Google PPC Management Services",
    description: "Drive instant traffic and leads with our expert Google Ads management. specialized in Search, Display, Shopping, and Video campaigns.",
    url: "/services/performance-marketing/google-ads",
    image: "/og-images/google_ads.webp",
});

export default function GoogleAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#4285f4" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Google Ads Management",
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
                    "name": "Google Ads Management Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Campaigns", "description": "Shopping and Performance Max campaigns that drive product sales." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation", "description": "Search campaigns optimized for high-quality leads and conversions." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Awareness", "description": "Display and YouTube campaigns that build brand recognition." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Marketing", "description": "Search and display campaigns targeting business decision-makers." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Business Campaigns", "description": "Geo-targeted campaigns that drive foot traffic and local leads." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remarketing", "description": "Re-engage website visitors and past customers across Google." } }
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
                    { "@type": "ListItem", "position": 4, "name": "Google Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/google-ads" }
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
