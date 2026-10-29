import dynamic from 'next/dynamic';
import Hero from '@/components/services/additional-support-services/Hero';
import SupportServices from '@/components/services/additional-support-services/SupportServices';

// Lazy load below-the-fold components for better performance
const SupportPlans = dynamic(() => import('@/components/services/additional-support-services/SupportPlans'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/additional-support-services/FAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/additional-support-services/CTA'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateItemListSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Business Support Services | Outsourced Administrative & IT Support 24/7',
    description: 'Optimize your operations with premium Business Support Services designed for global scalability. From technical maintenance to administrative efficiency, we provide the backbone your business needs. 500+ happy clients, an experienced team, 50+ support staff, rigorously tested maintenance, significant operational efficiency improvements.',
    url: '/services/additional-support-services',
    image: "/og-images/additional-support-services.webp",
    keywords: [
        'business support services',
        'outsourced administrative services',
        'IT business support',
        'virtual assistant services',
        'managed support services',
        'outsourced back-office support',
        'customer support outsourcing',
        'data management services',
        'operational efficiency consulting',
        '24/7 IT support services',
    ],
});

export default function AdditionalSupportServicesPage() {
    const supportSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Business Support Services | Outsourced Administrative & IT Support 24/7",
            description: "Optimize your operations with premium Business Support Services designed for global scalability. From technical maintenance to administrative efficiency, we provide the backbone your business needs. 500+ happy clients, an experienced team, 50+ support staff, rigorously tested maintenance, significant operational efficiency improvements.",
            urlPath: "/services/additional-support-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/additional-support-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/additional-support-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/additional-support-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Additional Support Services", url: "/services/additional-support-services" },
        ], "https://www.cinuteinfomedia.com/services/additional-support-services/#breadcrumb"),

        {
            "@type": "Service",
            "@id": "https://www.cinuteinfomedia.com/services/additional-support-services/#service",
            "name": "Business Support Services",
            "description": "Ongoing Support. Lasting Success. Optimize your operations with premium Business Support Services designed for global scalability. From technical maintenance to administrative efficiency, we provide the backbone your business needs to thrive. 500+ happy clients, an experienced team, 50+ dedicated support staff, rigorously tested technical maintenance, significant operational efficiency improvements. a meaningful reduction in overhead costs. Seamless integration with client tools like Jira and Slack. Serving global markets: US, EU, India, and APAC with 24/7 coverage.",
            "url": "https://www.cinuteinfomedia.com/services/additional-support-services",
            "serviceType": "Outsourced Business & IT Support Services",
            "provider": {
                "@id": "https://www.cinuteinfomedia.com/#organization"
            },
            "areaServed": ["IN", "US", "GB", "AU", "AE"],
            "offers": [
                {
                    "@type": "Offer",
                    "@id": "https://www.cinuteinfomedia.com/services/additional-support-services/#offer-essential",
                    "name": "Essential Plan",
                    "url": "https://www.cinuteinfomedia.com/contact",
                    "priceCurrency": "INR",
                    "price": "299",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01",
                    "description": "10 Hours/Month Virtual Assistant, Basic IT Monitoring, Email Support.",
                    "seller": { "@id": "https://www.cinuteinfomedia.com/#organization" }
                },
                {
                    "@type": "Offer",
                    "@id": "https://www.cinuteinfomedia.com/services/additional-support-services/#offer-professional",
                    "name": "Professional Plan",
                    "url": "https://www.cinuteinfomedia.com/contact",
                    "priceCurrency": "INR",
                    "price": "599",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01",
                    "description": "40 Hours/Month Dedicated Support, Priority Managed Support, Weekly Reporting.",
                    "seller": { "@id": "https://www.cinuteinfomedia.com/#organization" }
                },
                {
                    "@type": "Offer",
                    "@id": "https://www.cinuteinfomedia.com/services/additional-support-services/#offer-enterprise",
                    "name": "Enterprise Plan",
                    "url": "https://www.cinuteinfomedia.com/contact",
                    "priceCurrency": "INR",
                    "price": "1299",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01",
                    "description": "Dedicated Project Manager, 24/7 IT Business Support, Comprehensive Security.",
                    "seller": { "@id": "https://www.cinuteinfomedia.com/#organization" }
                }
            ]
        },

        generateItemListSchema({
            id: "/services/additional-support-services/#coreServicesList",
            name: "Core Business Support Services",
            description: "Five core business support categories: IT Support, Administrative & Virtual Assistants, Data Management & Back-Office, Specialized Industry Support, and Customer Support & Lead Generation.",
            items: [
                { name: "IT Business Support Services", description: "Regular updates and patch management, uptime monitoring, and additional technical support for seamless operations." },
                { name: "Outsourced Administrative & Virtual Assistants", description: "On-demand administrative assistance, outsourced HR support, and additional legal administrative support." },
                { name: "Data Management & Back-Office", description: "Outsourced data management, order processing, and supplementary financial support for streamlined operations." },
                { name: "Specialized Industry Support", description: "Healthcare admin assistance, real estate listing management, and additional marketing support for industry-specific needs." },
                { name: "Customer Support & Lead Generation", description: "Supplementary customer support, lead generation services, and 24/7 chat resolution for continuous engagement." },
            ],
        }),

        generateItemListSchema({
            id: "/services/additional-support-services/#pricingTiersList",
            name: "Business Support Pricing Tiers",
            description: "Three pricing tiers: Essential (₹299/mo, 10hrs VA + basic IT), Professional (₹599/mo, 40hrs dedicated + priority), and Enterprise (₹1,299/mo, 24/7 + dedicated PM).",
            items: [
                { name: "Essential — ₹299/month", description: "10 Hours/Month Virtual Assistant, Basic IT Monitoring, Email Support." },
                { name: "Professional — ₹599/month", description: "40 Hours/Month Dedicated Support, Priority Managed Support, Weekly Reporting." },
                { name: "Enterprise — ₹1,299/month", description: "Dedicated Project Manager, 24/7 IT Business Support, Comprehensive Security." },
            ],
        }),

        generateFAQSchema([
            { question: "What are additional support services in business?", answer: "Additional support services encompass external assistance for non-core business activities, including IT business support, outsourced administrative tasks, data management, and customer service. These services allow your core team to focus on strategic growth while we handle the operational details." },
            { question: "Why should businesses outsource their support services?", answer: "Outsourcing offers Cost-Effective Solutions and instant Scalability. By leveraging our Managed Support services, you gain access to expert talent and advanced technology without the overhead of hiring full-time staff, ensuring Resource Optimization and 24/7 coverage." },
            { question: "What are the benefits of supplementary business support?", answer: "Benefits include increased Operational Efficiency, access to Core Competencies not available in-house, Workflow Automation, and reduced operational risks. Our clients often see a a meaningful reduction in overhead costs." },
            { question: "How do I choose the right business support service provider?", answer: "Look for E-E-A-T signals: proven experience (case studies), technical expertise (modern tech stack), and clear communication. We offer transparent Service Level Agreements (SLAs) and have a track record of serving global clients in the US, EU, and APAC." },
            { question: "What is included in a business support services package?", answer: "Our packages are flexible. A standard package might include Professional virtual assistant support, basic IT monitoring, and Outsourced back-office support solutions. Enterprise packages add dedicated project management, advanced security, and Supplementary project management support." },
        ], "https://www.cinuteinfomedia.com/services/additional-support-services/#faq"),

        generateHowToSchema({
            name: "How to Get Started with Business Support Services",
            description: "A simple 4-step onboarding process to start leveraging outsourced business support services with customized integration into your existing workflows.",
            steps: [
                { name: "Consultation & Needs Assessment", text: "Free consultation to understand your business operations, pain points, and support requirements.", url: "https://www.cinuteinfomedia.com/services/additional-support-services/#step-consultation" },
                { name: "Custom Plan Selection", text: "Choose from Essential, Professional, or Enterprise tiers, or request a custom package tailored to your needs.", url: "https://www.cinuteinfomedia.com/services/additional-support-services/#step-plan" },
                { name: "Seamless Integration & Onboarding", text: "Customized onboarding with integration into your tools including Jira, Slack, and existing workflows.", url: "https://www.cinuteinfomedia.com/services/additional-support-services/#step-onboarding" },
                { name: "Ongoing Support & Reporting", text: "24/7 continuous support with regular performance reporting and SLA adherence tracking.", url: "https://www.cinuteinfomedia.com/services/additional-support-services/#step-support" },
            ],
        }),

        generateNavigationSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Blog", url: "/blog" },
            { name: "About", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Contact", url: "/contact" },
        ])
    );

    return (
        <main data-page-theme="purple" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(supportSchema) }}
            />
            <Hero />
            <SupportServices />
            <SupportPlans />
            <FAQ />
            <CTA />
        </main>
    );
}
