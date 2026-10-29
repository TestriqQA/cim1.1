"use client";

import Image from "next/image";
import { Headphones, Target, ShoppingCart, Users, Stethoscope, Database, Landmark, Code2, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function TypesOfChatbots() {
    const chatbotTypes = [
        {
            icon: ShoppingCart,
            title: "AI Chatbot for Ecommerce Sales and Support",
            description: <span>Rocket your conversion rates with a <Link href="/services/web-design-development/shopify-development-services" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Shopify-integrated AI chatbot</Link>. Automatically recommend products, recover abandoned carts, and track orders 24/7.</span>,
            features: ["Visual product search", "Personalized upsells", "Order tracking", "Cart recovery"],
            gradient: "from-blue-600 to-cyan-500",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            animation: "cart-bounce",
            badge: "Ecommerce",
        },
        {
            icon: Users,
            title: "Conversational AI for B2B Lead Generation",
            description: <span>Automate your top-of-funnel. Our <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">Automated lead qualification</Link> with AI chatbots engages visitors instantly, scores leads based on behavior, and syncs directly with your CRM.</span>,
            features: ["Salesforce integration", "Lead scoring", "Instant engagement", "CRM sync"],
            gradient: "from-purple-600 to-pink-500",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-500",
            animation: "pulse-beat",
            badge: "B2B",
        },
        {
            icon: Stethoscope,
            title: "AI Chatbot for Healthcare Patient Engagement",
            description: <span>HIPAA-compliant assistants that handle <Link href="/services/additional-support-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">Automated appointment booking</Link> and symptom triage, freeing up your medical staff to focus on care.</span>,
            features: ["Secure patient intake", "Medical terminology NLU", "Appointment booking", "Symptom triage"],
            gradient: "from-emerald-600 to-teal-500",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
            animation: "pulse-beat",
            badge: "Healthcare",
        },
        {
            icon: Headphones,
            title: "AI Chatbot for Global Customer Service",
            description: "Slash wait times to zero. Our Multilingual AI chatbot for global customer service resolves 80% of Tier-1 queries instantly across time zones.",
            features: ["Zendesk integration", "Zero wait times", "Multilingual support", "Instant resolution"],
            gradient: "from-orange-600 to-amber-500",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-500",
            animation: "headphone-wave",
            badge: "Support",
        },
        {
            icon: Database,
            title: "Generative AI Chatbot for Internal Knowledge Base",
            description: "Empower your employees. Instantly retrieve policy documents, HR info, or technical specs using a Generative AI chatbot connected to your internal wiki.",
            features: ["Citation verification", "Policy retrieval", "HR automation", "Technical specs"],
            gradient: "from-indigo-600 to-blue-500",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-500",
            animation: "search-scan",
            badge: "Internal",
        },
        {
            icon: null,
            customIcon: "/images/ai_powered_chatbots_logos/WhatsApp-logo.webp",
            title: "AI Chatbot for WhatsApp and Social Media Automation",
            description: <span>Meet your customers where they are. We deploy <Link href="/services/social-media-marketing-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">AI chatbot for WhatsApp</Link>, Messenger, and Instagram to automate engagement and broadcast updates.</span>,
            features: ["Multimedia support", "Broadcast analytics", "Instagram automation", "Messenger bots"],
            gradient: "from-green-600 to-emerald-500",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
            animation: "message-bounce",
            badge: "Social",
        },
        {
            icon: Landmark,
            title: "AI Chatbot for Financial Services and Banking",
            description: "Secure, compliant bots for balance checks, fraud alerts, and loan eligibility. Expertly engineered for the high-trust finance sector.",
            features: ["Voice-enabled", "Fraud alerts", "Loan eligibility", "Balance checks"],
            gradient: "from-sky-600 to-blue-500",
            iconBg: "bg-sky-500/10",
            iconColor: "text-sky-500",
            animation: "shield-pulse",
            badge: "Finance",
        },
        {
            icon: Code2,
            title: "Low-Code AI Chatbot Builder for Small Business",
            description: "Need speed? We implement Low-code AI chatbot builder solutions that get you live in days, not months, without sacrificing intelligence.",
            features: ["Drag-and-drop design", "Quick deployment", "Smart intelligence", "Cost-effective"],
            gradient: "from-violet-600 to-purple-500",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-500",
            animation: "sparkle-shine",
            badge: "SMB",
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes headphone-wave {
                    0%, 100% { transform: rotate(0deg) translateY(0); }
                    25% { transform: rotate(-15deg) translateY(-3px); }
                    75% { transform: rotate(15deg) translateY(-3px); }
                }
                @keyframes target-focus {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.15) rotate(180deg); }
                }
                @keyframes search-scan {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(5px, -5px); }
                    50% { transform: translate(-5px, 5px); }
                    75% { transform: translate(5px, 5px); }
                }
                @keyframes phone-vibrate {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
                    20%, 40%, 60%, 80% { transform: translateX(2px); }
                }
                @keyframes message-bounce {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-8px) scale(1.1); }
                }
                @keyframes building-grow {
                    0%, 100% { transform: scaleY(1); transform-origin: bottom; }
                    50% { transform: scaleY(1.1); transform-origin: bottom; }
                }
                @keyframes sparkle-shine {
                    0%, 100% { 
                        transform: rotate(0deg) scale(1);
                        filter: brightness(1);
                    }
                    25% { 
                        transform: rotate(90deg) scale(1.2);
                        filter: brightness(1.5);
                    }
                    50% { 
                        transform: rotate(180deg) scale(1);
                        filter: brightness(1);
                    }
                    75% { 
                        transform: rotate(270deg) scale(1.2);
                        filter: brightness(1.5);
                    }
                }
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float-up-down {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes badge-pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                @keyframes feature-appear {
                    0% { 
                        transform: translateX(-10px);
                        opacity: 0;
                    }
                    100% { 
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes border-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes glow-pulse {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
                    }
                    50% { 
                        box-shadow: 0 0 30px 10px rgba(59, 130, 246, 0.2);
                    }
                }
                
                .animate-headphone-wave { animation: headphone-wave 3s ease-in-out infinite; }
                .animate-target-focus { animation: target-focus 3s ease-in-out infinite; }
                .animate-search-scan { animation: search-scan 2s ease-in-out infinite; }
                .animate-phone-vibrate { animation: phone-vibrate 2s ease-in-out infinite; }
                .animate-message-bounce { animation: message-bounce 2s ease-in-out infinite; }
                .animate-building-grow { animation: building-grow 3s ease-in-out infinite; }
                .animate-sparkle-shine { animation: sparkle-shine 4s ease-in-out infinite; }
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 4s ease infinite;
                }
                .animate-float-up-down { animation: float-up-down 3s ease-in-out infinite; }
                .animate-badge-pulse { animation: badge-pulse 2s ease-in-out infinite; }
                .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
                
                .feature-item {
                    animation: feature-appear 0.4s ease-out forwards;
                }
                .feature-item:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
                .feature-item:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
                .feature-item:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
                .feature-item:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
            `}</style>

            <section
                className="relative transition-colors duration-300 py-20 md:py-28 overflow-hidden"
                style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 10%, transparent)",
                                borderColor: "var(--brand-chatbot)",
                            }}
                        >
                            <Zap className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                            <span className="text-sm font-bold tracking-wide" style={{ color: "var(--accent-indigo-text)" }}>
                                COMPREHENSIVE SOLUTIONS
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Our Comprehensive <span style={{ color: "var(--accent-indigo-text)" }}>AI Chatbot Services</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We develop diverse chatbot solutions tailored to your industry and business objectives.
                        </p>
                    </div>

                    {/* Chatbot Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {chatbotTypes.map((type, index) => {
                            const Icon = type.icon as React.ComponentType<{ className?: string; strokeWidth?: number }> | null;
                            const animationClass = `animate-${type.animation}`;

                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Card container */}
                                    <div
                                        className="relative p-6 h-full border backdrop-blur-sm"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                            borderColor: "var(--border-color)",
                                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                        }}
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient-shift`}
                                        />

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div
                                                className={`px-3 py-1 rounded-full text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-badge-pulse bg-gradient-to-r ${type.gradient}`}
                                            >
                                                {type.badge}
                                            </div>
                                        </div>

                                        {/* Corner decoration */}
                                        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-l ${type.gradient}`} />
                                            <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${type.gradient}`} />
                                        </div>

                                        {/* Icon container */}
                                        <div className="relative mb-5 z-10">
                                            <div className="relative inline-block">
                                                {/* Rotating border */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div
                                                        className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${type.gradient} opacity-30 blur-md`}
                                                    />
                                                </div>

                                                {/* Icon box */}
                                                <div
                                                    className={`relative w-16 h-16 rounded-xl ${type.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
                                                >
                                                    {type.customIcon ? (
                                                        <Image
                                                            src={type.customIcon}
                                                            alt={type.title}
                                                            width={40}
                                                            height={40}
                                                            className={`object-contain ${animationClass}`}
                                                        />
                                                    ) : (
                                                        Icon && <Icon className={`w-8 h-8 ${type.iconColor} ${animationClass}`} strokeWidth={2.5} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--accent-indigo-text)]">
                                                {type.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                                {type.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2">
                                                {type.features.map((feature, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="feature-item flex items-center gap-2 group/item"
                                                    >
                                                        <div className={`w-5 h-5 rounded-full ${type.iconBg} flex items-center justify-center transition-all duration-300 group-hover/item:scale-110`}>
                                                            <CheckCircle2 className={`w-3 h-3 ${type.iconColor}`} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Explore button */}
                                            {/* Explore button */}
                                            {/* <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                                <span className="text-sm font-semibold" style={{ color: "var(--accent-indigo-text)" }}>
                                                    Explore
                                                </span>
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "var(--accent-indigo-text)" }} />
                                            </div> */}
                                        </div>

                                        {/* Bottom gradient line */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${type.gradient} group-hover:w-full transition-all duration-700 ease-out`}
                                        />

                                        {/* Large background icon watermark */}
                                        <div className="absolute -bottom-6 -right-6 opacity-0 group-hover:opacity-5 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                            {Icon && <Icon className={`w-32 h-32 ${type.iconColor}`} strokeWidth={0.5} />}
                                        </div>

                                        {/* Floating particles */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient} animate-ping`} />
                                            <div className={`absolute bottom-12 left-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient} animate-ping`} style={{ animationDelay: "0.5s" }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="mt-16">
                        <div
                            className="relative p-8 rounded-3xl border backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
                                borderColor: "var(--border-color)",
                            }}
                        >
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                            <Users className="w-8 h-8 text-white animate-float-up-down" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>
                                            Need a Custom Chatbot Solution?
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                            Let's discuss your specific requirements and build the perfect solution
                                        </p>
                                    </div>
                                </div>

                                <Link href="/contact" className="group/button px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}