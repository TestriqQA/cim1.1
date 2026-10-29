import dynamic from 'next/dynamic';
import Hero from '@/components/services/ai-chatbots-services/Hero';
import ServiceOverview from '@/components/services/ai-chatbots-services/ServiceOverview';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = dynamic(() => import('@/components/services/ai-chatbots-services/WhyChooseUs'), {
    loading: () => <div className="py-20" />,
});
const TypesOfChatbots = dynamic(() => import('@/components/services/ai-chatbots-services/TypesOfChatbots'), {
    loading: () => <div className="py-20" />,
});
const IndustriesAndUseCases = dynamic(() => import('@/components/services/ai-chatbots-services/IndustriesAndUseCases'), {
    loading: () => <div className="py-20" />,
});
const Process = dynamic(() => import('@/components/services/ai-chatbots-services/Process'), {
    loading: () => <div className="py-20" />,
});
const Technologies = dynamic(() => import('@/components/services/ai-chatbots-services/Technologies'), {
    loading: () => <div className="py-20" />,
});
const FAQ = dynamic(() => import('@/components/services/ai-chatbots-services/FAQ'), {
    loading: () => <div className="py-20" />,
});
const CTA = dynamic(() => import('@/components/services/ai-chatbots-services/CTA'), {
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
    title: 'Custom AI Chatbot Development Agency | Cinute InfoMedia',
    description: 'Transform customer support with our Enterprise AI Chatbot Platform. Custom AI chatbots for eCommerce, SaaS & Healthcare. 10M+ conversations handled, high customer satisfaction, 50+ industries served, high automation, <1s response time, strong ROI.',
    url: '/services/ai-chatbots-services',
    keywords: [
        'AI Chatbot Services',
        'Custom AI Chatbot Development',
        'Enterprise AI Chatbot Platform',
        'AI Service Chatbot',
        'AI Chatbot Agency',
        'eCommerce AI chatbot',
        'healthcare AI chatbot',
    ],
    image: '/og-images/ai_powered_chatbots.webp',
});

export default function AIPoweredChatbotsPage() {
    const chatbotSchema = generateGraphSchema(
        generateOrganizationSchema({
            description: "Cinute InfoMedia (CIM) is a digital growth agency helping businesses build, market, and scale through creativity, data, and technology.",
            slogan: "Build. Market. Scale.",
        }),

        generateWebSiteSchema(),

        generateWebPageSchema({
            name: "Custom AI Chatbot Development Agency | Cinute InfoMedia",
            description: "Transform customer support with our Enterprise AI Chatbot Platform. Custom AI chatbots for eCommerce, SaaS & Healthcare. 10M+ conversations handled, high customer satisfaction, 50+ industries served, high automation, <1s response time, strong ROI.",
            urlPath: "/services/ai-chatbots-services",
            datePublished: "2025-01-01",
            dateModified: "2026-04-10",
            aboutId: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#service",
            mainEntityId: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#service",
            breadcrumbId: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#breadcrumb",
        }),

        generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: "AI Chatbot Services", url: "/services/ai-chatbots-services" },
        ], "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#breadcrumb"),

        generateServiceSchema({
            name: "AI Chatbot Services",
            description: "Empower your business with intelligent, 24/7 conversations at scale. Custom AI Chatbot Development Agency building enterprise AI platforms with context understanding and sentiment analysis using LLMs and NLP. 10M+ conversations handled, high customer satisfaction, 50+ industries served, Tier-1 query automation, high engagement, <1s response time, high accuracy.",
            urlPath: "/services/ai-chatbots-services",
            serviceType: "Custom AI Chatbot Development & Enterprise Platforms",
            areaServed: ["IN", "US", "GB", "AU", "AE"],
            offer: {
                url: "/contact",
                priceCurrency: "USD",
                price: "500",
                validFrom: "2025-01-01",
                description: "Custom AI chatbot solutions starting from $500/month. Includes free AI strategy audit, live demo, GPT-4o/Claude 3.5 powered chatbots, RAG architecture, SOC2-compliant security, and 24/7 engagement.",
            },
        }),

        generateItemListSchema({
            id: "/services/ai-chatbots-services/#chatbotSolutionsList",
            name: "AI Chatbot Solutions by Use Case",
            description: "Purpose-built AI chatbot solutions for eCommerce, B2B lead gen, healthcare, customer service, internal knowledge bases, WhatsApp/social, financial services, and low-code deployment.",
            items: [
                { name: "eCommerce AI Chatbots", description: "Shopify-integrated chatbots with product recommendations, cart recovery, and order tracking." },
                { name: "B2B Lead Generation Chatbots", description: "Top-of-funnel qualification bots with CRM sync to Salesforce and HubSpot." },
                { name: "Healthcare AI Chatbots", description: "HIPAA-compliant chatbots for appointment booking, symptom triage, and patient engagement." },
                { name: "Customer Service Chatbots", description: "Resolves 80% of Tier-1 queries autonomously with Zendesk and Intercom integration." },
                { name: "Internal Knowledge Base AI", description: "Generative AI for HR policy retrieval, onboarding, and internal knowledge management." },
                { name: "WhatsApp & Social Media Chatbots", description: "Omnichannel automation for WhatsApp Business, Facebook Messenger, and Instagram DMs." },
                { name: "Financial Services Chatbots", description: "Secure, voice-enabled AI assistants with fraud alerts and transaction support." },
                { name: "Low-Code Chatbot Builder", description: "Rapid deployment platform for small businesses needing quick AI chatbot setup." },
            ],
        }),

        generateFAQSchema([
            { question: "What are the benefits of AI chatbots for businesses?", answer: "AI chatbots improve operational efficiency by automating routine queries, increase customer satisfaction with instant 24/7 responses, and deliver a strong ROI through reduced support costs." },
            { question: "How can AI chatbots improve customer service?", answer: "AI chatbots provide instant responses with less than 1 second response time, handle multiple conversations simultaneously, and escalate complex queries to human agents seamlessly." },
            { question: "What is the difference between rule-based and AI chatbots?", answer: "Rule-based chatbots follow predefined scripts and decision trees. AI chatbots understand context and intent using NLP and LLMs like GPT-4o, enabling natural conversations and handling unstructured queries." },
            { question: "How much does it cost to build an AI chatbot?", answer: "Custom AI chatbot solutions start from $500 per month. Pricing varies based on complexity, integrations, conversation volume, and whether you need enterprise features like HIPAA compliance or SOC2 security." },
            { question: "How do I choose the right AI chatbot for my business?", answer: "Consider your industry requirements, integration needs (CRM, eCommerce, helpdesk), compliance requirements (HIPAA, SOC2), conversation volume, and whether you need multi-language or omnichannel support." },
        ]),

        generateHowToSchema({
            name: "Our 6-Step AI Chatbot Development Process",
            description: "A proven 6-step methodology for building enterprise AI chatbots that handle 10M+ conversations with high customer satisfaction and Tier-1 automation.",
            steps: [
                { name: "Discovery & Strategy", text: "Understanding business goals, user journeys, integration requirements, and defining chatbot personality. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#step-discovery" },
                { name: "Conversation Design", text: "Mapping dialog flows, intent architecture, fallback strategies, and multi-turn conversation blueprints. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#step-design" },
                { name: "Development & Training", text: "Building the chatbot with GPT-4o/Claude 3.5, RAG architecture, vector databases, and custom NLP training. Timeline: 4-6 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#step-development" },
                { name: "Integration", text: "Connecting to CRM (Salesforce/HubSpot), helpdesk (Zendesk), eCommerce (Shopify), and omnichannel platforms. Timeline: 2-3 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#step-integration" },
                { name: "Testing & Optimization", text: "End-to-end conversation testing, accuracy validation, load testing, and performance tuning to high accuracy. Timeline: 1-2 weeks.", url: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#step-testing" },
                { name: "Launch & Evolve", text: "Go-live deployment, continuous learning from conversations, and iterative improvements based on analytics. Ongoing.", url: "https://www.cinuteinfomedia.com/services/ai-chatbots-services/#step-launch" },
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
        <main data-page-theme="chatbot" className="bg-white dark:bg-black" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotSchema) }}
            />
            <Hero />
            <ServiceOverview />
            <WhyChooseUs />
            <TypesOfChatbots />
            <IndustriesAndUseCases />
            <Process />
            <Technologies />
            <FAQ />
            <CTA />
        </main>
    );
}
