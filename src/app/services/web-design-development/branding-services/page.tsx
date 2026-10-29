import dynamic from 'next/dynamic';
import Hero from '@/components/services/web-design-development/branding-services/Hero';
import ServiceOverview from '@/components/services/web-design-development/branding-services/ServiceOverview';
import WhyChooseUs from '@/components/services/web-design-development/branding-services/WhyChooseUs';
import Process from '@/components/services/web-design-development/branding-services/Process';
import CTA from '@/components/services/web-design-development/branding-services/CTA';

// Lazy load below-the-fold interactive components
const SolutionTypes = dynamic(() => import('@/components/services/web-design-development/branding-services/SolutionTypes'), {
    loading: () => <div className="py-20" />,
});
const TechStack = dynamic(() => import('@/components/services/web-design-development/branding-services/TechStack'), {
    loading: () => <div className="py-20" />,
});
const UseCases = dynamic(() => import('@/components/services/web-design-development/branding-services/UseCases'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/web-design-development/branding-services/FAQ'), {
    loading: () => <div className="py-20" />,
});

import { getPageMetadata } from '@/lib/metadata';
import {
    generateGraphSchema,
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateWebPageSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateItemListSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateNavigationSchema,
} from '@/lib/schema';

export const metadata = getPageMetadata({
    title: 'Personal Branding Services & Portfolio Website Design',
    description: 'Elevate your digital presence with global Personal Branding Services & Portfolio Website Design. Expert development for creatives, execs & founders. Get a Free Strategy Audit!',
    url: '/services/web-design-development/branding-services',
    keywords: [
        'Personal Branding Services',
        'Portfolio Website Design',
        'Personal Brand Strategy',
        'Executive Personal Branding',
        'Custom Portfolio Development',
        'Online Reputation Management',
        'Personal Brand Audit',
        'Next.js Portfolio'
    ],
    image: '/og-images/portfolio_sites.jpeg',
});

export default function PortfolioPersonalPage() {
    const brandSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Personal Branding Services & Portfolio Website Design",
            description: "Elevate your digital presence with global Personal Branding Services & Portfolio Website Design. Expert development for creatives, execs & founders. Get a Free Strategy Audit!",
            urlPath: "/services/web-design-development/branding-services",
            datePublished: "2025-01-01",
            dateModified: "2026-03-17",
            aboutId: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Web Design & Development", url: "/services/web-design-development" },
            { name: "Personal Branding & Portfolio Design", url: "/services/web-design-development/branding-services" },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#breadcrumb"),

        generateServiceSchema({
            name: "Personal Branding Services & Portfolio Website Design",
            description: "In the competitive landscape of 2026, a generic resume isn't enough. You need a powerful, automated 24/7 personal branding engine. We build stunning portfolio websites for creatives, executives, and founders.",
            urlPath: "/services/web-design-development/branding-services",
            serviceType: "Personal Branding & Portfolio Design",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                validFrom: "2025-01-01",
                description: "Book your free brand audit. Tiered packages available for personal branding and portfolio website design.",
            },
        }),

        generateItemListSchema({
            id: "/services/web-design-development/branding-services/#itemList",
            name: "Personal Branding & Portfolio Solutions",
            description: "Comprehensive personal branding and portfolio solutions for professionals, creatives, and executives.",
            items: [
                { name: "Project Galleries", description: "Custom grid layouts, masonry styles, and immersive lightboxes for visual masterpieces and creative portfolios." },
                { name: "Case Study Modules", description: "Deep-dive case study modules using the STAR method, ideal for consultants and job seekers." },
                { name: "Personal Branding Identity", description: "Alignment of visual identity with career trajectory using color psychology, typography, and brand strategy." },
                { name: "Professional Bio & About Pages", description: "Professional bio writing and branding services to humanize your digital presence and build authority." },
                { name: "Testimonial & Social Proof Systems", description: "Dynamic social proof displays and Knowledge Panel Optimization signals to build credibility." },
                { name: "Industry-Specific Portfolios", description: "Tailored portfolio solutions for photographers, developers, designers, freelancers, creators, and artists." },
            ],
        }),

        generateFAQSchema([
            { question: "What is included in your personal branding services?", answer: "Our personal branding services include a comprehensive brand audit, visual identity design, custom website development, professional bio writing, and online reputation management advice to build your digital presence." },
            { question: "How long does it take to build a portfolio website?", answer: "A typical portfolio website project takes 3-5 weeks from the initial discovery call to the final launch, depending on the complexity and content requirements." },
            { question: "Do you offer professional bio writing services?", answer: "Yes, our professional copywriters specialize in personal branding and use the STAR method for case studies. We craft compelling bios that highlight your expertise and achievements." },
            { question: "Are your portfolio websites mobile-friendly and SEO optimized?", answer: "Absolutely. All our portfolio websites are fully responsive from 4K screens to mobile devices and are optimized for personal brand ranking with built-in technical SEO." },
            { question: "Can I update my portfolio website content myself?", answer: "Yes, all portfolios are built on headless CMS platforms like Strapi or user-friendly content management systems that allow you to easily update content without developer assistance." },
            { question: "How much does a personal branding website cost?", answer: "We offer tiered packages for personal branding and portfolio website design. Pricing depends on the scope and features required. Contact us for a custom quote tailored to your specific needs." },
            { question: "Why is personal branding important for executives?", answer: "Personal branding for executives establishes authority in your industry, attracts top talent to your organization, and opens doors for speaking engagements and board seats. It is your 24/7 professional reputation engine." },
            { question: "How can I improve my personal brand search ranking?", answer: "Improving your personal brand search ranking requires a mix of technical SEO, quality backlinks, thought leadership content, and Schema markup implementation to enhance your visibility in search results." },
            { question: "What are the best platforms for portfolio websites?", answer: "For the best results, custom-coded portfolios using Next.js or React, or Headless CMS solutions with Strapi are the gold standard. These outperform DIY website builders in performance, SEO, and customization." },
        ], "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#faq"),

        generateHowToSchema({
            name: "Our Creative Process for Personal Branding",
            description: "A proven 6-step creative process for building powerful personal brands and portfolio websites that generate more inquiries.",
            steps: [
                { name: "Discovery Call", text: "A deep-dive interview to understand your unique value proposition, career goals, and target audience.", url: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#step-discovery" },
                { name: "Design Concepts", text: "Translating your personality into pixels via prototyping, mood boards, and visual identity exploration.", url: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#step-design" },
                { name: "Development", text: "Bringing designs to life with clean, semantic code using Next.js, React, and modern frameworks.", url: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#step-development" },
                { name: "Content Setup", text: "Professional copywriting, keyword optimization, and content structuring for maximum impact.", url: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#step-content" },
                { name: "Review & Launch", text: "Rigorous cross-browser testing, performance checks, and a polished launch experience.", url: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#step-launch" },
                { name: "Ongoing Support", text: "Optional retainers for brand monitoring, content updates, and continuous optimization of your personal brand.", url: "https://www.cinuteinfomedia.com/services/web-design-development/branding-services/#step-support" },
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
        <main className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", "--page-selection-bg": "#06b6d4" } as React.CSSProperties}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <SolutionTypes />
            <Process />
            <TechStack />
            <UseCases />
            <FAQ />
            <CTA />
        </main>
    );
}
