import Hero from "@/components/services/performance-marketing/meta-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/meta-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/meta-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/meta-ads/TechStack";
import Process from "@/components/services/performance-marketing/meta-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/meta-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/meta-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Meta Ads Agency | Facebook & Instagram Advertising",
    description: "Scale your brand with high-converting Facebook and Instagram ads. Our Meta Ads agency delivers creative strategies for maximum engagement.",
    url: "/services/performance-marketing/meta-ads",
    image: "/og-images/meta_ads.webp",
});

export default function MetaAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#1877f2" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Meta Ads Management",
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
                    "name": "Meta Ads Management Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Awareness Campaigns", "description": "Build brand recognition and reach new audiences." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consideration Campaigns", "description": "Drive engagement and interest in your products." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Campaigns", "description": "Generate leads, sales, and valuable customer actions." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Promotion", "description": "Drive installs and engagement for your mobile app." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Marketing", "description": "Capture attention with immersive video content." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remarketing", "description": "Re-engage past visitors and nurture warm leads." } }
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
                    { "@type": "ListItem", "position": 4, "name": "Meta Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/meta-ads" }
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
