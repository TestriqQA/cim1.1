import Hero from "@/components/services/performance-marketing/amazon-ads/Hero";
import ServiceOverview from "@/components/services/performance-marketing/amazon-ads/ServiceOverview";
import SolutionTypes from "@/components/services/performance-marketing/amazon-ads/SolutionTypes";
import TechStack from "@/components/services/performance-marketing/amazon-ads/TechStack";
import Process from "@/components/services/performance-marketing/amazon-ads/Process";
import WhyChooseUs from "@/components/services/performance-marketing/amazon-ads/WhyChooseUs";
import CTA from "@/components/services/performance-marketing/amazon-ads/CTA";
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: "Amazon Ads Agency | Amazon PPC Management Services",
    description: "Boost your sales on Amazon with data-driven PPC campaigns. Our Amazon Ads agency helps you dominate search results and increase ROAS.",
    url: "/services/performance-marketing/amazon-ads",
    image: "/og-images/amazon_ads.webp",
});

export default function AmazonAdsPage() {
    return (
        <main style={{ "--page-selection-bg": "#FF9900" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Amazon Ads Management",
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
                    "name": "Amazon Ads Management Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Visibility", "description": "Win top placements for high-value keywords on Amazon search." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Defense", "description": "Protect branded keywords from competitors and conquer their terms." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales Growth", "description": "Accelerate sales velocity and improve Best Seller Rank." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Customer Acquisition", "description": "Reach new shoppers through audience and category targeting." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACOS Reduction", "description": "Optimize ad spend for greater campaign profitability." } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Market Share Expansion", "description": "Grow digital shelf space through category and cross-sell strategies." } }
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
                    { "@type": "ListItem", "position": 4, "name": "Amazon Ads", "item": "https://www.cinuteinfomedia.com/services/performance-marketing/amazon-ads" }
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
