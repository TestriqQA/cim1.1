"use client";

import { MessageSquare, BarChart3, Headphones, TrendingUp, FileText, Lightbulb, Workflow, Bot, Database, Mail, GitBranch, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TypesOfAutomations() {
    const automationTypes = [
        {
            icon: Workflow,
            title: <Link href="/services/web-design-development/business-corporate" className="hover:text-[var(--accent-orange-text)] transition-colors">Business Process Automation (BPA)</Link>,
            description: "Revolutionize your back office. We automate end-to-end cycles - from procurement to payroll - reducing cycle times by up to 70%.",
            features: ["Workflow Orchestration", "Multi-step Automation", "Conditional Logic", "Error Handling"],
            gradient: "from-blue-600 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            logos: ["zapier", "nodedotjs", "ifttt"],
        },
        {
            icon: Bot,
            title: <Link href="/services/ai-chatbots-services" className="hover:text-[var(--accent-orange-text)] transition-colors">AI-Powered Chatbots & Assistants</Link>,
            description: "Deploy next-gen support. Unlike basic bots, our agents understand context, sentiment, and intent, resolving 80% of queries instantly.",
            features: ["Natural Language Processing", "Multi-language Support", "Context Awareness", "Escalation Handling"],
            gradient: "from-purple-600 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            logos: ["openai", "dialogflow", "microsoftazure"],
        },
        {
            icon: BarChart3,
            title: "Data & Reporting Automation",
            description: <span>Stop copy-pasting Excel sheets. We create pipelines that pull from 50+ sources to build live, self-updating <Link href="/blog/ai-workflows-automating-business-processes" className="hover:text-[var(--accent-green-text)] underline decoration-dotted transition-colors">BI dashboards</Link>.</span>,
            features: ["Data Extraction", "Real-time Dashboards", "Scheduled Reports", "Data Validation"],
            gradient: "from-emerald-600 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
            logos: ["tableau", "powerbi", "looker"],
        },
        {
            icon: TrendingUp,
            title: "Content & Marketing Automation",
            description: <span>Multiply your reach. Automatically turn one webinar into blog posts, <Link href="/services/social-media-marketing-services/linkedin-marketing-services" className="hover:text-[var(--accent-red-text)] underline decoration-dotted transition-colors">LinkedIn carousels</Link>, and tweets with AI-powered <Link href="/services/social-media-marketing-services/linkedin-marketing-services" className="hover:text-[var(--accent-red-text)] underline decoration-dotted transition-colors">LinkedIn marketing</Link> and outreach automation using proven <Link href="/blog/content-marketing-strategies-work" className="hover:text-[var(--accent-red-text)] underline decoration-dotted transition-colors">Content Repurposing</Link> strategies.</span>,
            features: ["Content Repurposing", "Social Media Scheduling", "SEO Optimization", "Sentiment Analysis"],
            gradient: "from-rose-600 to-pink-500",
            iconBg: "bg-rose-500/10",
            iconColor: "text-rose-500",
            logos: ["hubspot", "salesforce", "mailchimp"],
        },
        {
            icon: FileText,
            title: <Link href="/services/web-design-development/fintech-solutions" className="hover:text-[var(--accent-orange-text)] transition-colors">Document Processing & OCR</Link>,
            description: "Unlock trapped data. Our Topical Authority & Entity Extraction systems read invoices, contracts, and IDs with high accuracy.",
            features: ["OCR Technology", "Document Classification", "Data Extraction", "Compliance Validation"],
            gradient: "from-indigo-600 to-blue-500",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-500",
            logos: ["adobe", "docusign", "googlecloud"],
        },
        {
            icon: Sparkles,
            title: "Custom AI Workflow Solutions",
            description: <span>Need something unique? We build bespoke <Link href="/services/ai-chatbots-services" className="hover:text-[var(--accent-violet-text)] underline decoration-dotted transition-colors">Custom AI agents</Link> for business operations tailored to your exact edge cases.</span>,
            features: ["Custom Development", "API Integrations", "Predictive Models", "Scalable Architecture"],
            gradient: "from-violet-600 to-purple-500",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-500",
            logos: ["tensorflow", "pytorch", "openai"],
        },
    ];

    // Mapping of logo names to their local image paths
    const logoUrls: Record<string, string> = {
        // Business Process Automation
        zapier: "/images/ai_automation_logos/zapier-logo.svg",
        nodedotjs: "/images/techstack_logos/nodejs-logo.svg",
        ifttt: "/images/ai_automation_logos/IFTTT_Logo.svg.png",
        // AI Chatbots
        openai: "/images/ai_automation_logos/openai-logo.svg",
        dialogflow: "/images/ai_automation_logos/dialogflow-logo.webp",
        microsoftazure: "/images/techstack_logos/azure-logo.svg",
        // Data & Reporting
        tableau: "/images/ai_automation_logos/tableau-logo.svg",
        powerbi: "/images/ai_automation_logos/powerBI-logo.png",
        looker: "/images/ai_automation_logos/looker-logo.svg",
        // Customer Support
        zendesk: "/images/ai_automation_logos/zendesk-logo.svg",
        intercom: "/images/ai_automation_logos/intercom-logo.svg",
        livechat: "/images/ai_automation_logos/Livechat-logo.png",
        // Marketing & Sales
        hubspot: "/images/ai_automation_logos/hubspot-logo.png",
        salesforce: "/images/ai_automation_logos/salesforce-logo.png",
        mailchimp: "/images/ai_automation_logos/mailchimp-logo.svg",
        // Document Processing
        adobe: "/images/ai_automation_logos/adobe-logo.png",
        docusign: "/images/ai_automation_logos/docusign-logo.png",
        googlecloud: "/images/techstack_logos/googlecloud-logo.svg",
        // Custom AI
        tensorflow: "/images/ai_automation_logos/tensorflow-logo.png",
        pytorch: "/images/ai_automation_logos/pytorch-logo.png",
    };

    return (
        <>
            <style jsx>{`
                @keyframes morph {
                    0%, 100% { 
                        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                        transform: rotate(0deg) scale(1);
                    }
                    25% { 
                        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
                    }
                    50% { 
                        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
                        transform: rotate(5deg) scale(1.05);
                    }
                    75% { 
                        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
                    }
                }
                @keyframes swing {
                    0%, 100% { 
                        transform: rotate(0deg);
                        transform-origin: top center;
                    }
                    25% { transform: rotate(8deg); }
                    75% { transform: rotate(-8deg); }
                }
                @keyframes spiral {
                    0% { 
                        transform: rotate(0deg) scale(1) translateY(0);
                    }
                    50% { 
                        transform: rotate(180deg) scale(1.1) translateY(-5px);
                    }
                    100% { 
                        transform: rotate(360deg) scale(1) translateY(0);
                    }
                }
                @keyframes bounce-3d {
                    0%, 100% { 
                        transform: translateY(0) translateZ(0) rotateX(0deg);
                    }
                    25% { 
                        transform: translateY(-10px) translateZ(20px) rotateX(-5deg);
                    }
                    50% { 
                        transform: translateY(0) translateZ(0) rotateX(0deg);
                    }
                    75% { 
                        transform: translateY(-5px) translateZ(10px) rotateX(-2deg);
                    }
                }
                @keyframes wave {
                    0%, 100% { 
                        transform: skewY(0deg) translateX(0);
                    }
                    25% { 
                        transform: skewY(2deg) translateX(3px);
                    }
                    75% { 
                        transform: skewY(-2deg) translateX(-3px);
                    }
                }
                @keyframes breathe {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
                    }
                    50% { 
                        transform: scale(1.03);
                        box-shadow: 0 0 20px 5px rgba(99, 102, 241, 0.2);
                    }
                }
                @keyframes shimmer-rotate {
                    0% { 
                        transform: rotate(0deg);
                        filter: brightness(1) contrast(1);
                    }
                    50% { 
                        transform: rotate(180deg);
                        filter: brightness(1.2) contrast(1.1);
                    }
                    100% { 
                        transform: rotate(360deg);
                        filter: brightness(1) contrast(1);
                    }
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float-up {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                
                .animate-morph { animation: morph 6s ease-in-out infinite; }
                .animate-swing { animation: swing 3s ease-in-out infinite; }
                .animate-spiral { animation: spiral 4s ease-in-out infinite; }
                .animate-bounce-3d { 
                    animation: bounce-3d 2.5s ease-in-out infinite;
                    transform-style: preserve-3d;
                }
                .animate-wave { animation: wave 3s ease-in-out infinite; }
                .animate-breathe { animation: breathe 3s ease-in-out infinite; }
                .animate-shimmer-rotate { animation: shimmer-rotate 5s linear infinite; }
                .animate-gradient { 
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }
                .float-up-delay-1 { animation: float-up 2s ease-in-out infinite 0.2s; }
                .float-up-delay-2 { animation: float-up 2s ease-in-out infinite 0.4s; }
                .float-up-delay-3 { animation: float-up 2s ease-in-out infinite 0.6s; }
            `}</style>

            <section
                className="py-20 transition-colors duration-300"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                <div className="mx-auto px-6 md:px-12 xl:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Types of <span style={{ color: "var(--accent-orange-text)" }}>AI Workflows & Automations</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            We specialize in a comprehensive range of AI-powered automation solutions. Whether you need process automation, intelligent chatbots, or custom workflows, we have the expertise to deliver.
                        </p>
                    </div>

                    {/* Automation Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {automationTypes.map((type, index) => {
                            const Icon = type.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-3 border animate-fadeIn overflow-hidden"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                        animationDelay: `${0.2 + index * 0.1}s`,
                                        animationFillMode: "both",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Animated gradient background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 animate-gradient`}
                                    />

                                    {/* Animated particles */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-10 left-10 w-1 h-1 rounded-full ${type.iconBg} float-up-delay-1`} />
                                        <div className={`absolute top-20 right-10 w-1.5 h-1.5 rounded-full ${type.iconBg} float-up-delay-2`} />
                                        <div className={`absolute bottom-20 left-20 w-1 h-1 rounded-full ${type.iconBg} float-up-delay-3`} />
                                    </div>

                                    {/* Corner decoration */}
                                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${type.gradient} opacity-30`} />
                                        <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-l ${type.gradient} opacity-30`} />
                                    </div>

                                    {/* Icon container with unique animation */}
                                    <div className="relative mb-5 z-10">
                                        <div
                                            className={`w-16 h-16 rounded-xl ${type.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
                                        >
                                            <Icon className={`w-8 h-8 ${type.iconColor}`} strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 mb-4">
                                        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--accent-orange-text)]">
                                            {type.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                            {type.description}
                                        </p>
                                    </div>

                                    {/* Features with enhanced styling */}
                                    <div className="relative z-10 mb-4">
                                        <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--accent-orange-text)" }}>
                                            Key Features
                                        </p>
                                        <ul className="space-y-2">
                                            {type.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="text-sm flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200"
                                                >
                                                    <CheckCircle2
                                                        className="w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover/item:scale-110"
                                                        style={{ color: "var(--brand-orange)" }}
                                                    />
                                                    <span style={{ color: "var(--secondary-text)" }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technology logos */}
                                    <div className="relative z-10 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                                        <p className="text-xs font-semibold mb-2 opacity-60">Powered by:</p>
                                        <div className="flex items-center gap-3">
                                            {type.logos.map((logo, i) => (
                                                <div
                                                    key={i}
                                                    className="group/logo relative"
                                                    title={logo.charAt(0).toUpperCase() + logo.slice(1)}
                                                >
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/logo:scale-110 border border-gray-200" style={{ backgroundColor: "#ffffff" }}>
                                                        <img
                                                            src={logoUrls[logo] || `/images/ai_automation_logos/${logo}-logo.svg`}
                                                            alt={logo}
                                                            width={28}
                                                            height={28}
                                                            className="opacity-90 group-hover/logo:opacity-100 transition-opacity duration-300"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Animated bottom border */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${type.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                    />

                                    {/* Large background icon */}
                                    <div className="absolute -bottom-0 -right-0 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110">
                                        <Icon className={`w-32 h-32 ${type.iconColor}`} strokeWidth={1} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Custom Solutions CTA */}

                </div>
            </section >
        </>
    );
}