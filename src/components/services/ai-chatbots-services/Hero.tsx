"use client";

import { Sparkles, ArrowRight, Home, ChevronRight, Zap, MessageCircle, Brain, Gauge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        >
            {/* Animated Background with AI-centric visuals */}

            <div className="mx-auto px-4 sm:px-6 md:px-12 xl:px-20 py-8 sm:py-12 relative">
                {/* Breadcrumbs */}
                <nav
                    className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm mb-5 justify-center lg:justify-start"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <Link
                        href="/services"
                        className="hover:underline transition-colors p-2"
                        style={{ color: "var(--secondary-text)" }}
                    >
                        Services
                    </Link>

                    <ChevronRight className="w-4 h-4" style={{ color: "var(--secondary-text)" }} />

                    <span
                        className="font-semibold p-2"
                        style={{ color: "var(--accent-indigo-text)" }}
                    >
                        AI-Powered Chatbots
                    </span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors"
                            style={{
                                background:
                                    "linear-gradient(90deg, color-mix(in srgb, var(--brand-chatbot) 8%, transparent), color-mix(in srgb, var(--brand-blue) 8%, transparent))",
                                borderColor: "color-mix(in srgb, var(--brand-chatbot) 20%, transparent)",
                                color: "var(--accent-indigo-text)",
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: "var(--accent-indigo-text)" }} />
                            <span className="text-sm font-semibold">Custom AI Chatbot Development Services</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        "var(--brand-chatbot)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                <span style={{ color: "var(--foreground)" }}>Empower Your Business with</span> Intelligent, 24/7 Conversations <span style={{ color: "var(--foreground)" }}>at Scale</span>
                            </span>
                        </h1>

                        {/* Underline */}
                        <div
                            className="w-32 h-1.5 mb-8 rounded-full lg:mx-0 mx-auto mt-6"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--brand-chatbot), var(--brand-blue))",
                            }}
                        />

                        {/* Tagline */}
                        <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            As an expert AI Chatbot Agency, we specialize in <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Custom AI Chatbot Development</Link> that drives real <Link href="/services/performance-marketing" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">ROI</Link>. Our Enterprise AI Chatbot Platform solutions don't just answer questions-they understand context, gauge sentiment, and personalize every interaction using advanced Large Language Models (LLMs) and <Link href="/services/ai-workflows-automations-services" className="underline underline-offset-2 hover:text-[var(--accent-indigo-text)] transition-colors">Natural Language Processing (NLP)</Link>.
                        </p>

                        {/* Feature Highlights */}
                        {/* 2x2 while the hero is one column. From lg the columns are
                            max-content, so each tile is only as wide as its icon + label
                            and the group hugs the left edge with no dead space. Equal
                            columns (xl:grid-cols-4) gave 118px at 1280px while "Lightning
                            Fast" needs 138px; a flex-wrap row fit, but broke 3+1 at 1024px.
                            Explicit counts keep the rows even: 2x2 at lg, one line from xl. */}
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-[repeat(2,max-content)] xl:grid-cols-[repeat(4,max-content)] lg:gap-2.5 mb-8">
                            <div className="flex items-center justify-center gap-2.5 px-3 lg:px-2.5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <Brain className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-indigo-text)" }} />
                                <span className="text-xs font-bold whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    AI-Powered
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2.5 px-3 lg:px-2.5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <MessageCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-indigo-text)" }} />
                                <span className="text-xs font-bold whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    24/7 Support
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2.5 px-3 lg:px-2.5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <Zap className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-indigo-text)" }} />
                                <span className="text-xs font-bold whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    Lightning Fast
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2.5 px-3 lg:px-2.5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 8%, transparent)",
                                }}
                            >
                                <Gauge className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-indigo-text)" }} />
                                <span className="text-xs font-bold whitespace-nowrap" style={{ color: "var(--foreground)" }}>
                                    Scalable
                                </span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 p-4 sm:p-6 rounded-2xl"
                            style={{
                                backgroundColor: "color-mix(in srgb, var(--card-bg) 50%, transparent)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid var(--border-color)",
                            }}
                        >
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-chatbot))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    High
                                </div>
                                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                    Conversations
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-chatbot))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    98%
                                </div>
                                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                    Satisfaction
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold mb-1"
                                    style={{
                                        background: "linear-gradient(90deg, var(--brand-blue), var(--brand-chatbot))",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Broad
                                </div>
                                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider" style={{ color: "var(--secondary-text)" }}>
                                    Industries
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--brand-chatbot)] to-[#006d97] hover:from-[var(--brand-chatbot)] hover:to-[var(--brand-chatbot)] text-white rounded-2xl text-base font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Book Free AI Strategy Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* RIGHT VISUAL ELEMENT */}
                    <div
                        className="relative flex flex-col items-center gap-8 sm:gap-12 justify-center animate-fadeIn lg:-mt-10"
                        style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                    >

                        {/* Feature Card */}
                        <div
                            className="relative flex items-center justify-center rounded-3xl shadow-2xl border hover:scale-105 transition-transform duration-300 max-w-lg w-full"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            <Image
                                src="/images/services-images/ai-chatbot-illustration-2.png"
                                alt="AI-Powered Chatbots"
                                width={638}
                                height={565}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 638px"
                                className="w-[90%] h-[90%] rounded-3xl p-5"
                            />
                        </div>

                        {/* Additional Info Section */}
                        <div
                            className="w-full p-5 sm:p-6 rounded-2xl border"
                            style={{
                                backgroundColor: "var(--card-bg)",
                                borderColor: "var(--border-color)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                                Why Choose Us?
                            </h2>
                            <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                We combine cutting-edge AI technology with proven methodologies to deliver intelligent chatbot solutions that enhance customer experiences and drive business growth.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--accent-indigo-text)",
                                    }}
                                >
                                    NLP & ML
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--accent-indigo-text)",
                                    }}
                                >
                                    Multi-Platform
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--accent-indigo-text)",
                                    }}
                                >
                                    24/7 Support
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--brand-chatbot) 15%, transparent)",
                                        color: "var(--accent-indigo-text)",
                                    }}
                                >
                                    Analytics
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
