import type { Metadata } from "next";
import Hero from "@/components/services/seo-services/ecommerce-seo-services/Hero";
import ServiceOverview from "@/components/services/seo-services/ecommerce-seo-services/ServiceOverview";
import SolutionTypes from "@/components/services/seo-services/ecommerce-seo-services/SolutionTypes";
import TechStack from "@/components/services/seo-services/ecommerce-seo-services/TechStack";
import Process from "@/components/services/seo-services/ecommerce-seo-services/Process";
import WhyChooseUs from "@/components/services/seo-services/ecommerce-seo-services/WhyChooseUs";
import FAQ from "@/components/services/seo-services/ecommerce-seo-services/FAQ";
import CTA from "@/components/services/seo-services/ecommerce-seo-services/CTA";

export const metadata: Metadata = {
    title: "Ecommerce SEO Services | Shopify, Magento & WooCommerce 2026",
    description: "Expert Ecommerce SEO Services to boost sales and rankings. Optimize your Shopify, Magento, or WooCommerce store for maximum visibility.",
    alternates: {
        canonical: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services",
    },
    keywords: [
        "ecommerce SEO services",
        "Shopify SEO",
        "Magento SEO",
        "WooCommerce SEO",
        "online store optimization",
        "product page SEO",
        "technical ecommerce audit",
        "ecommerce SEO agency",
        "BigCommerce SEO",
        "ecommerce conversion rate optimization",
    ],
    openGraph: {
        title: "Ecommerce SEO Services | Shopify, Magento & WooCommerce 2026",
        description: "Expert Ecommerce SEO Services to boost sales and rankings. Optimize your Shopify, Magento, or WooCommerce store for maximum visibility.",
        url: "https://www.cinuteinfomedia.com/services/seo-services/ecommerce-seo-services",
        type: "website",
        images: [
            {
                url: "/og-images/ecommerce-seo-services.webp",
                width: 1200,
                height: 630,
                alt: "Ecommerce SEO Services | Shopify, Magento & WooCommerce 2026 by Cinute Infomedia",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ecommerce SEO Services | Shopify, Magento & WooCommerce 2026",
        description: "Expert Ecommerce SEO Services to boost sales and rankings. Optimize your Shopify, Magento, or WooCommerce store for maximum visibility.",
        images: ["/og-images/ecommerce-seo-services.webp"],
    },

};

export default function EcommerceSEOPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Ecommerce SEO Services",
        "provider": {
            "@type": "Organization",
            "name": "Cinute Infomedia",
            "url": "https://www.cinuteinfomedia.com",
            "logo": "https://www.cinuteinfomedia.com/logo.png",
            "description": "Global Web Design, Development & Digital Marketing Agency specializing in ecommerce SEO services for Shopify, Magento, WooCommerce, and BigCommerce platforms",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "Multiple (US, EU, India, APAC)"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9004988859",
                "contactType": "Sales",
                "availableLanguage": ["English", "Hindi"]
            }
        },
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
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ecommerce SEO is the process of optimizing online stores to rank higher in search engines for product-related searches, driving organic traffic that converts into sales. It's critical because 44% of shoppers begin their buying journey with Google search, and organic search drives 37% of all ecommerce traffic with the highest conversion rates (2.4% vs. 1.8% for paid)."
                }
            },
            {
                "@type": "Question",
                "name": "How much do ecommerce SEO services cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ecommerce SEO cost in 2026: Small stores (100-500 products) $1,500-$3,000/month, Mid-size (500-5,000 products) $3,000-$7,000/month, Enterprise (5,000+ products) $7,000-$15,000/month. Most clients see a strong ROI within 6-9 months."
                }
            },
            {
                "@type": "Question",
                "name": "How do I optimize my ecommerce product pages for SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Optimize ecommerce product pages with: unique 300+ word descriptions, optimized title tags (60 chars), compelling meta descriptions (155 chars), Product schema markup, high-quality images with alt text, user reviews, internal linking, and fast load speed. Focus on answering buyer questions during purchase decisions."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best ecommerce platform for SEO in 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Best platforms by use case: Shopify (small business/DTC), WooCommerce (content-heavy stores), Magento/Adobe Commerce (enterprise 100,000+ SKUs), BigCommerce (mid-market scalable). All can rank well with proper optimization—technical expertise matters more than platform choice."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to see results from ecommerce SEO?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ecommerce SEO timeline: 30-60 days (technical fixes, low-competition rankings), 60-90 days (growing organic traffic), 90-120 days (continued traffic growth), 6 months (significant traffic, measurable revenue), 12 months (sustained traffic, market dominance). Results vary by competition and starting authority."
                }
            }
        ]
    };

    return (
        <>
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
