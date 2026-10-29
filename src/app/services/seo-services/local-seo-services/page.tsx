import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/local-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/local-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/local-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/local-seo-services/TechStack";
import Process from "@/components/services/seo-services/local-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/local-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/local-seo-services/FAQ";
import CTA from "@/components/services/seo-services/local-seo-services/CTA";

export const metadata: Metadata = {
    title: "Local SEO Services , Google Maps Marketing Agency 2026",
    description:
        "Expert Local SEO Services to rank higher on Google Maps & search. Drive local traffic, calls, and store visits with our proven GMB optimization.",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services",
    },
    keywords: [
        "local SEO services",
        "Google Maps marketing agency",
        "local SEO company",
        "Google Business Profile optimization",
        "local SEO for small business",
        "GMB optimization services",
        "local citation building",
        "near me SEO",
        "Google Map Pack optimization",
        "local search engine optimization",
        "reputation management SEO",
        "local SEO pricing 2026",
        "best local SEO agency",
        "local SEO audit",
        "Google Maps ranking",
        "local business SEO",
    ],
    openGraph: {
        title: "Local SEO Services , Google Maps Marketing Agency 2026",
        description: "Expert Local SEO Services to rank higher on Google Maps & search. Drive local traffic, calls, and store visits with our proven GMB optimization.",
        url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/local-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Local SEO Services , Google Maps Marketing Agency 2026 by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Local SEO Services , Google Maps Marketing Agency 2026",
        description: "Expert Local SEO Services to rank higher on Google Maps & search. Drive local traffic, calls, and store visits with our proven GMB optimization.",
        images: ["/og-images/local-seo-services.webp"],
    },

};

export default function LocalSEOPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Local SEO Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Cinute Infomedia",
                            "url": "https://www.cinuteinfomedia.com",
                            "logo": "https://www.cinuteinfomedia.com/logo.png",
                            "description": "Global Web Design, Development & Digital Marketing Agency specializing in local SEO services",
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
                            "name": "Local SEO Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Google Business Profile Management Services",
                                        "description": "Complete GBP setup, verification, and ongoing optimization"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Local Citations & NAP Consistency",
                                        "description": "Building consistent NAP mentions across 50+ high-authority directories"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Review Management & Reputation SEO",
                                        "description": "Generate 5-star reviews and professionally respond to feedback"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "On-Page Localization",
                                        "description": "Location-specific schema, keywords, and landing pages"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Google Map Pack Optimization",
                                        "description": "Tactics to rank in the Local 3-Pack"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Mobile & Near Me Search Optimization",
                                        "description": "Perfect mobile experience for on-the-go local searches"
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
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is local SEO and how does it work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Local SEO (local search engine optimization) is the process of optimizing your online presence to attract customers searching for businesses 'near me' or in specific geographic areas. Google's local algorithm evaluates proximity (how close your business is to the searcher), relevance (how well your GBP matches the query), and prominence (your reputation via reviews, citations, backlinks)."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much do local SEO services cost per month?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Local SEO services cost ranges in 2026: Single-location SMB ($800-$1,500/mo), Multi-location 2-5 ($1,500-$3,500/mo), Franchise/Enterprise 6+ locations ($3,500-$8,000/mo). Our clients average $12-$18 in revenue for every $1 spent on local SEO."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I rank my business on Google Maps?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ranking on Google Maps requires optimizing: 1) Google Business Profile completeness (100% fields filled, photos, posts), 2) NAP consistency across 50+ directories, 3) Reviews (40+ reviews with 4.5+ stars), 4) On-page LocalBusiness schema, and 5) Local backlinks. Most businesses reach top 5 Map Pack within 60-90 days."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the difference between SEO and local SEO?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Traditional SEO targets national/global rankings using backlinks and content authority, while local SEO focuses on rankings in specific cities/neighborhoods through Google Business Profile optimization, NAP citations, reviews, and proximity signals. Local SEO is essential for businesses serving geographic areas like restaurants, medical practices, law firms, and contractors."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take to see results from local SEO?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Local SEO results timeline: 30 days (increased GBP impressions), 60 days (Map Pack rankings improve, more calls), 90 days (top 5 Map Pack for primary keywords - most clients, more phone calls), 6 months (dominant #1-#3 positions, strong review growth)."
                                }
                            }
                        ]
                    })
                }}
            />
            <main style={{ "--page-selection-bg": "#F59E0B" } as React.CSSProperties}>
                <Hero />
                <ServiceOverview />
                <SolutionTypes />
                <TechStack />
                <Process />
                <WhyChooseUs />
                <FAQ />
                <CTA />
            </main>
        </>
    );
}
