"use client";

import { Search, Map, FileCode, Share2, Star, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Process() {
    // Local SEO Amber theme color
    const localAmber = "#F59E0B";

    const steps = [
        {
            icon: Search,
            title: "Local Presence Audit & Competitor Analysis",
            description: <><Link href="/services/seo-services" className="underline underline-offset-2 hover:underline">Audit & Competitor Analysis</Link>: Current Google Map Pack rankings for your primary keywords, NAP consistency across top 50 citation sources, review count/rating vs. top 3 competitors, GBP completeness score, website technical SEO for mobile and local schema. Deliverable: 25-page audit report with actionable recommendations.</>,
            animation: "slide-right"
        },
        {
            icon: Map,
            title: "Google Business Profile Optimization",
            description: "Complete setup & enhancement: Claim/verify GBP listing, select primary + 9 secondary categories based on search volume, upload 20+ geotagged photos, add all attributes. Timeline: 7-10 business days for full optimization.",
            animation: "slide-left"
        },
        {
            icon: FileCode,
            title: "On-Page Localization & Schema Implementation",
            description: <><Link href="/services/seo-services/technical-seo-services" className="underline underline-offset-2 hover:text-[var(--accent-green-text)] transition-colors">Technical on-site work</Link>: Install LocalBusiness schema with exact coordinates, create <Link href="/services/web-design-development/landing-pages" className="underline underline-offset-2 hover:text-[var(--accent-violet-text)] transition-colors">location-specific landing pages</Link>, optimize title tags with city + service keywords. SEO Impact: a measurable increase in geo-modified keyword rankings within 30 days.</>,
            animation: "fade-up"
        },
        {
            icon: Share2,
            title: "Citation Building & Data Cleanup",
            description: <><Link href="/services/seo-services/link-building" className="underline underline-offset-2 hover:text-[var(--brand-blue-text)] transition-colors">Building your digital footprint</Link>: Submit to 50+ high-authority directories, fix existing NAP inconsistencies, remove duplicate listings causing rank suppression. Result: Consistent NAP across your citation sources within 45 days.</>,
            animation: "scale"
        },
        {
            icon: Star,
            title: "Reputation Strategy & Review Generation",
            description: "Systematic 5-star growth: Set up automated post-service review requests (SMS/email), create branded review landing pages, respond to 100% of reviews within 24 hours. Average Outcome: 10-15 new Google reviews per month (above the industry average).",
            animation: "rotate"
        },
        {
            icon: TrendingUp,
            title: "Monthly Reporting & Continuous Optimization",
            description: "Transparent ROI tracking: Google Map Pack ranking changes (weekly monitoring), GBP insights (calls, direction requests, website clicks), call tracking data, review growth & sentiment analysis. Reporting Cadence: Detailed monthly reports + weekly updates.",
            animation: "flip"
        },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes slideRight {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideLeft {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes rotateIn {
                    from {
                        opacity: 0;
                        transform: rotate(-5deg) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: rotate(0) scale(1);
                    }
                }

                @keyframes flipIn {
                    from {
                        opacity: 0;
                        transform: perspective(1000px) rotateY(-15deg);
                    }
                    to {
                        opacity: 1;
                        transform: perspective(1000px) rotateY(0);
                    }
                }

                .animate-slide-right {
                    animation: slideRight 0.6s ease-out forwards;
                }

                .animate-slide-left {
                    animation: slideLeft 0.6s ease-out forwards;
                }

                .animate-fade-up {
                    animation: fadeUp 0.6s ease-out forwards;
                }

                .animate-scale {
                    animation: scaleIn 0.6s ease-out forwards;
                }

                .animate-rotate {
                    animation: rotateIn 0.6s ease-out forwards;
                }

                .animate-flip {
                    animation: flipIn 0.6s ease-out forwards;
                }

                .process-card {
                    opacity: 0;
                    animation-delay: calc(var(--index) * 0.15s);
                }

                .shine-effect {
                    position: relative;
                    overflow: hidden;
                }

                .shine-effect::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(245, 158, 11, 0.1),
                        transparent
                    );
                    transition: left 0.5s ease;
                }

                .shine-effect:hover::before {
                    left: 100%;
                }

                .gradient-border {
                    position: relative;
                    background: var(--card-bg);
                    border-radius: 1.5rem;
                }

                .gradient-border::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1.5rem;
                    padding: 2px;
                    background: linear-gradient(135deg, ${localAmber}40, transparent, ${localAmber}20);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .gradient-border:hover::before {
                    opacity: 1;
                }

                .icon-float {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .step-number {
                    transition: all 0.3s ease;
                }

                .process-card:hover .step-number {
                    transform: scale(1.5) rotate(5deg);
                    opacity: 0.08 !important;
                }
            `}</style>

            <section
                id="process"
                className="py-24 relative overflow-hidden border-t"
                style={{ backgroundColor: "var(--background)", borderColor: "#555555" }}
            >
                {/* Animated Background Circles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
                        style={{ backgroundColor: localAmber }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
                        style={{ backgroundColor: localAmber }}
                    />
                </div>

                <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            Our Local <span style={{ color: "var(--accent-amber-text)" }}>SEO Process</span>
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary-text)" }}>
                            A battle-tested 6-step framework proven across 50+ directories to put your business on the map (literally). We make you visible to ready-to-buy customers actively looking for your services.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div
                            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 hidden md:block"
                            style={{
                                background: `linear-gradient(to bottom, ${localAmber}00, ${localAmber}40, ${localAmber}00)`
                            }}
                        />

                        <div className="space-y-12">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                const isEven = idx % 2 === 0;

                                return (
                                    <div
                                        key={idx}
                                        className={`flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-0 relative`}
                                    >
                                        {/* Timeline Node */}
                                        <div
                                            className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 z-10 transform -translate-x-1/2 mt-8 hidden md:block shadow-lg"
                                            style={{
                                                borderColor: localAmber,
                                                backgroundColor: "var(--background)",
                                                boxShadow: `0 0 20px ${localAmber}60`
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0 rounded-full animate-ping"
                                                style={{ backgroundColor: localAmber, opacity: 0.3 }}
                                            />
                                        </div>

                                        {/* Content Card */}
                                        <div className={`w-full md:w-1/2 px-0 md:px-12 ${isEven ? "md:text-left" : "md:text-right"}`}>
                                            <div
                                                className={`process-card animate-${step.animation} gradient-border shine-effect p-8 rounded-3xl border transition-all duration-500 hover:shadow-2xl group relative`}
                                                style={{
                                                    '--index': idx,
                                                    borderColor: "var(--border-color)",
                                                    backgroundColor: "var(--card-bg)",
                                                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.05)`
                                                } as React.CSSProperties}
                                            >
                                                {/* Top Accent Line */}
                                                <div
                                                    className="absolute top-0 left-8 right-8 h-1 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4"
                                                    style={{
                                                        background: `linear-gradient(90deg, transparent, ${localAmber}, transparent)`
                                                    }}
                                                />

                                                <div className="flex items-start justify-between mb-6">
                                                    <div
                                                        className={`
                                                            w-16 h-16 rounded-2xl flex items-center justify-center 
                                                            transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                                                            relative
                                                        `}
                                                        style={{
                                                            background: `linear-gradient(135deg, ${localAmber}20, ${localAmber}10)`,
                                                            boxShadow: `0 8px 16px ${localAmber}20`
                                                        }}
                                                    >
                                                        {/* Icon Glow */}
                                                        <div
                                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                            style={{
                                                                boxShadow: `0 0 30px ${localAmber}60`
                                                            }}
                                                        />
                                                        <Icon className="w-8 h-8 relative z-10 icon-float" style={{ color: localAmber }} />
                                                    </div>

                                                    {/* Check Icon */}
                                                    <div
                                                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100"
                                                        style={{
                                                            backgroundColor: `${localAmber}20`
                                                        }}
                                                    >
                                                        <CheckCircle className="w-5 h-5" style={{ color: localAmber }} />
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[--hover-text]" style={{ color: "var(--foreground)" }}>
                                                    {step.title}
                                                </h3>

                                                <p className="leading-relaxed mb-4" style={{ color: "var(--secondary-text)" }}>
                                                    {step.description}
                                                </p>



                                                {/* Number Watermark */}
                                                <div
                                                    className="step-number absolute top-4 right-6 text-6xl font-black opacity-[0.04] pointer-events-none"
                                                    style={{ color: localAmber }}
                                                >
                                                    0{idx + 1}
                                                </div>

                                                {/* Bottom Corner Accent */}
                                                <div
                                                    className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{
                                                        background: `radial-gradient(circle at bottom right, ${localAmber}15, transparent 70%)`
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Spacer for the other side */}
                                        <div className="w-full md:w-1/2 hidden md:block" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-20">
                        <Link href="/contact">
                            <div
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                                style={{
                                    borderColor: localAmber,
                                    backgroundColor: `${localAmber}10`,
                                }}
                            >
                                <span className="font-semibold" style={{ color: "var(--accent-amber-text)" }}>
                                    Ready to Dominate Your Local Market? Get Started
                                </span>
                                <ArrowRight className="w-5 h-5" style={{ color: "var(--accent-amber-text)" }} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}