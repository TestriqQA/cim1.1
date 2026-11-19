import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/ecommerce-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/ecommerce-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/ecommerce-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/ecommerce-seo-services/TechStack";
import Process from "@/components/services/seo-services/ecommerce-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/ecommerce-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/ecommerce-seo-services/FAQ";
import CTA from "@/components/services/seo-services/ecommerce-seo-services/CTA";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Ecommerce SEO Services | Shopify, Magento | Cinute InfoMedia",
    description: "Expert Ecommerce SEO Services to boost sales and rankings. Optimize your Shopify, Magento, or WooCommerce store for maximum visibility.",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services",
    },
    openGraph: {
        title: "Ecommerce SEO Services | Shopify, Magento | Cinute InfoMedia",
        description: "Expert Ecommerce SEO Services to boost sales and rankings. Optimize your Shopify, Magento, or WooCommerce store for maximum visibility.",
        url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/ecommerce-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Ecommerce SEO Services | Shopify, Magento | Cinute InfoMedia by Cinute InfoMedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ecommerce SEO Services | Shopify, Magento | Cinute InfoMedia",
        description: "Expert Ecommerce SEO Services to boost sales and rankings. Optimize your Shopify, Magento, or WooCommerce store for maximum visibility.",
        images: ["/og-images/ecommerce-seo-services.webp"],
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
            { name: "E-commerce SEO", url: "/services/seo-services/ecommerce-seo-services" },
        ],
        "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services/#breadcrumb"
    ),
};

export default function EcommerceSEOPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Ecommerce SEO Services",
        "provider": { "@id": "https://www.cinuteinfomedia.com/#organization" },
        "areaServed": ["United States", "India", "United Kingdom", "Australia", "Europe", "Asia Pacific"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Ecommerce SEO Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce Product Page SEO Optimization",
                        "description": "Optimize product pages with high-intent keywords, schema markup, and conversion-focused content"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Technical SEO for Ecommerce Websites",
                        "description": "Fix crawl errors, optimize site speed, Core Web Vitals, and ensure clean indexing for thousands of SKUs"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce SEO Services for Shopify Stores",
                        "description": "Shopify-specific optimization including Liquid templates, app integration, and collection page SEO"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce SEO Services for Magento Websites",
                        "description": "Enterprise Magento/Adobe Commerce SEO for large-scale stores with complex catalogs"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce Link Building and Authority Services",
                        "description": "Strategic backlink acquisition from industry-relevant, high-authority websites"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce SEO Audit and Strategy Services",
                        "description": "Comprehensive technical audit with prioritized action plan and revenue projections"
                    }
                }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is ecommerce SEO and why is it important?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ecommerce SEO is the process of optimizing online stores to rank higher in search engines for product-related searches, driving organic traffic that converts into sales. Unlike traditional SEO, ecommerce SEO strategy focuses on product page optimization, schema markup for ecommerce products, faceted navigation SEO, and technical challenges unique to large product catalogs.It's critical because 44% of shoppers begin their buying journey with Google search, and organic search drives 37% of all ecommerce traffic with the highest conversion rates (2.4% vs. 1.8% for paid). Strategic ecommerce SEO optimization delivers sustainable, long-term revenue growth without ongoing ad spend." },
            },
            {
                "@type": "Question",
                "name": "How much do ecommerce SEO services cost in 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ecommerce SEO cost for business 2026 varies by store size and complexity:• Small Online Stores (100-500 products): $1,500-$3,000/month• Mid-Size Ecommerce (500-5,000 products): $3,000-$7,000/month• Enterprise Brands (5,000+ products): $7,000-$15,000/month• Custom/Headless: $10,000-$25,000/monthPricing includes technical SEO for ecommerce websites, on-page optimization, content creation, link building, and monthly reporting. Most clients see a strong ROI within 6-9 months. One-time ecommerce SEO audit and strategy services range from $2,500-$8,000." },
            },
            {
                "@type": "Question",
                "name": "How do I optimize my ecommerce product pages for SEO?",
                "acceptedAnswer": { "@type": "Answer", "text": "Optimizing ecommerce product page SEO requires:• Unique Product Descriptions (300+ words with natural keyword integration, benefits-focused)• Optimized Title Tags (Primary keyword + brand + modifier, under 60 chars)• Compelling Meta Descriptions (150-155 chars with CTR hooks and pricing/benefits)• Schema Markup (Product, Offer, Review, AggregateRating structured data)• High-Quality Images (Alt text with descriptive keywords, compressed for speed)• User-Generated Content (Customer reviews, Q&A sections)• Internal Linking (Link to related products, categories, buying guides)• Technical Optimization (Fast load speed, mobile-responsive, clean URL structure)Focus on user intent for ecommerce search - answer questions buyers have during purchase decisions." },
            },
            {
                "@type": "Question",
                "name": "What is the best ecommerce platform for SEO in 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "The best platform depends on your needs:• Shopify: Best for small businesses/DTC brands - easy optimization, strong app ecosystem for ecommerce SEO services for Shopify stores• WooCommerce: Best for content-heavy stores - WordPress flexibility enables advanced ecommerce content marketing and SEO strategy• Magento/Adobe Commerce: Best for enterprise - handles 100,000+ SKUs with advanced ecommerce SEO services for Magento websites• BigCommerce: Best for mid-market - built-in SEO features, scalable SaaS infrastructureAll platforms can rank well with proper ecommerce website optimization. Technical expertise matters more than platform choice." },
            },
            {
                "@type": "Question",
                "name": "How long does it take to see results from ecommerce SEO?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ecommerce SEO timeline:• 30-60 days: Technical fixes implemented, indexation improves, low-competition keywords begin ranking• 60-90 days: Category pages rank for mid-competition keywords, organic traffic increases• 90-120 days: Product pages gain traction, featured snippets appear, traffic continues to grow• 6 months: Significant rankings for competitive keywords, significant traffic increase, measurable revenue growth• 12 months: Market dominance, sustained traffic increase, sustainable revenue from organic searchResults vary based on competition, starting authority, and implementation speed. Ecommerce SEO for international markets may take longer due to geo-targeting complexity." },
            },
            {
                "@type": "Question",
                "name": "What are ecommerce SEO ranking factors for 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Top ecommerce SEO ranking factors post-December 2025 core update:• Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1)• Helpful Product Content (Unique descriptions answering buyer questions)• E-E-A-T Signals (Author expertise, brand trust, verified reviews)• Schema Markup (Rich snippets with pricing, availability, ratings)• Mobile-First Experience (Responsive design, touch-friendly, fast mobile load)• User Engagement (Low bounce rate, time on page, add-to-cart rate)• Link Authority (Quality backlinks from industry sites)• Semantic Search Optimization (Natural language, topic coverage)• Internal Linking (Strategic flow of authority to money pages)• Technical Health (No errors, proper canonicals, clean indexing)" },
            },
            {
                "@type": "Question",
                "name": "Do you offer ecommerce SEO for international markets?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, our ecommerce SEO for international markets services include: • Hreflang Implementation (Proper language/region targeting) • Multi-Language Content (Native translation, cultural localization) • Geo-Targeting Setup (ccTLDs, subfolders, or subdomains) • International Link Building (Region-specific authority) • Currency/Shipping Optimization (Local payment methods, shipping calculators) We serve clients across US, EU, UK, India, APAC, and Latin America with localized ecommerce SEO strategy." },
            },
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main style={{ "--page-selection-bg": "#0EA5E9" } as React.CSSProperties}>
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
