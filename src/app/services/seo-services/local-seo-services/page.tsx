import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/local-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/local-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/local-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/local-seo-services/TechStack";
import Process from "@/components/services/seo-services/local-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/local-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/local-seo-services/FAQ";
import CTA from "@/components/services/seo-services/local-seo-services/CTA";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Local Maps SEO Services | Cinute InfoMedia",
    description:
        "Local maps SEO services to rank on Google Maps and local search: Business Profile optimisation, citations and reviews that bring more calls.",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services",
    },
    openGraph: {
        title: "Local Maps SEO Services | Cinute InfoMedia",
        description: "Local maps SEO services to rank on Google Maps and local search: Business Profile optimisation, citations and reviews that bring more calls.",
        url: "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/local-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Local SEO Services , Google Maps Marketing Agency 2026 by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Local Maps SEO Services | Cinute InfoMedia",
        description: "Local maps SEO services to rank on Google Maps and local search: Business Profile optimisation, citations and reviews that bring more calls.",
        images: ["/og-images/local-seo-services.webp"],
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
            { name: "SEO", url: "/services/seo-services" },
            { name: "Local SEO", url: "/services/seo-services/local-seo-services" },
        ],
        "https://www.cinuteinfomedia.com/services/seo-services/local-seo-services/#breadcrumb"
    ),
};

export default function LocalSEOPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Local SEO Services",
                        "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
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
                                "acceptedAnswer": { "@type": "Answer", "text": "Local SEO (local search engine optimization) is the process of optimizing your online presence to attract customers searching for businesses 'near me' or in specific geographic areas. Unlike traditional SEO that targets national/global rankings, local SEO focuses on appearing in the Google Map Pack (top 3 local results), Google Business Profile panels, and geo-modified organic results.\\n\\nHow it works: Google's local algorithm evaluates three core factors:\\n\\n• Proximity - How close your business is to the searcher\\n• Relevance - How well your GBP categories/description match the query\\n• Prominence - Your reputation (reviews, citations, backlinks)\\n\\nOur local SEO services optimize all three signals to rank you prominently for high-intent local searches that drive calls, direction requests, and foot traffic." },
                            },
                            {
                                "@type": "Question",
                                "name": "How much do local SEO services cost per month in 2026?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Local SEO cost for small business 2026 ranges based on competition and business complexity: • Single-Location SMB: $800 - $1,500/mo (GBP optimization, 20 citations, review management) • Multi-Location (2-5): $1,500 - $3,500/mo (Per-location GBP, 40+ citations, localized landing pages) • Franchise/Enterprise (6+): $3,500 - $8,000/mo (Bulk location management, advanced schema, competitive markets) ROI Perspective: Our clients average $12-$18 in revenue for every $1 spent on local SEO, primarily from increased phone calls and in-store visits tracked via Google Analytics 4 and call tracking. What determines cost: Market competition (legal/medical = higher), number of locations/service areas, current online presence (starting from scratch vs. optimization), and industry-specific requirements (schema, compliance)." },
                            },
                            {
                                "@type": "Question",
                                "name": "How do I rank my business on Google Maps?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Ranking on Google Maps requires optimizing 3 core elements: 1. Google Business Profile Completeness (30% impact) • Choose the MOST specific primary category (not generic 'Restaurant' but 'Italian Restaurant') • Fill out 100% of fields: hours, phone, website, services, attributes • Upload 20+ photos (businesses with 100+ photos get 520% more calls) • Post weekly updates (events, offers, news) 2. NAP Consistency & Citations (25% impact) • Ensure your Name, Address, Phone match exactly across 50+ directories • Build citations on Yelp, Apple Maps, Bing, industry directories • Fix duplicate listings that confuse Google 3. Reviews & Reputation (20% impact) • Aim for 40+ Google reviews (median for top 3 rankings) • Maintain 4.5+ star average • Respond to every review within 24-48 hours • Generate consistent review velocity (2-4 new reviews/week ideal) Bonus Factors: On-page SEO with LocalBusiness schema (15% impact), Local backlinks from chambers, news sites (10% impact). Timeline: Most businesses reach top 5 Map Pack within 60-90 days with our local SEO audit and strategy services." },
                            },
                            {
                                "@type": "Question",
                                "name": "What is the difference between SEO and local SEO?",
                                "acceptedAnswer": { "@type": "Answer", "text": "Traditional SEO: Targets national/global rankings with focus on backlink authority + content depth. Goal is to rank for broad keywords targeting anyone searching. Key metrics include organic traffic and domain authority. Top ranking signals are content quality, backlinks, and technical SEO.\\n\\nLocal SEO: Focuses on rankings in specific cities/neighborhoods through Google Business Profile + proximity optimization. Goal is to appear in the Google Map Pack for users within 5-25 mile radius. Key metrics include Map Pack rank, calls, directions, and foot traffic. Top ranking signals are NAP citations, reviews, and GBP optimization.\\n\\nWhen to use Traditional SEO: SaaS products, ecommerce sites selling nationally, informational blogs\\n\\nWhen to use Local SEO: Restaurants, medical practices, law firms, contractors, retail stores, real estate agents—any business serving a specific geographic area.\\n\\nOur approach: We combine both! Our local search engine optimization includes traditional on-page SEO + technical optimizations PLUS hyperlocal GBP and citation strategies for maximum visibility." },
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take to see results from local SEO?",
                                "acceptedAnswer": { "@type": "Answer", "text": "30 Days: • GBP insights show increased impressions (search appearances) • Initial citation submissions indexed by Google • Review count starts increasing 60 Days: • Map Pack rankings improve • Phone calls increase • Direction requests increase • Reviews reach 10-15 new (with our generation system) 90 Days: • Top 5 Map Pack rankings for primary keywords (most of our clients) • More phone calls from Google Business Profile • Significant increase in website traffic from local searches • Measurable foot traffic increase (if tracking enabled) 6 Months: • Dominant #1-#3 Map Pack positions (stable) • Strong review growth • Established authority in local market • Consistent 10-20 high-quality leads per month Factors that speed up results: Low current competition, consistent review generation, existing website with good domain authority, active Google Business Profile with post history." },
                            },
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
