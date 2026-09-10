"use client";

import React, { useEffect, useState } from 'react';
import { Star, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const testimonials = [
        {
            // NAME CORRECTION ONLY — the quote text is untouched. The client is
            // Testriq QA Lab: their own site's Organization schema uses that
            // name and the string "Technologies" appears nowhere on
            // www.testriq.com. This quote was credited to "Testriq
            // Technologies" here while /portfolio credited the same engagement
            // to Testriq QA Lab, so the site contradicted itself.
            company: "Testriq QA Lab",
            industry: "QA & Testing Solutions",
            quote:
                "Cinute InfoMedia transformed our outdated website into a lead-generation powerhouse. The custom web development solution they delivered exceeded our expectations, and the ongoing SEO support has significantly grown our organic traffic.",
            result: "Strong Organic Traffic",
            avatar: "T",
        },
        {
            company: "CloudScale.io",
            industry: "SaaS Startup",
            quote:
                "As a fast-growing SaaS startup, we needed a web development company that understood scalability. Their team delivered a Next.js application that handles high concurrent traffic with strong performance.",
            result: "High Concurrency",
            avatar: "C",
        },
        {
            company: "CDPL Institute",
            industry: "Education Technology",
            quote:
                "The AI chatbot they built has transformed our customer support. We're saving significant hours monthly while providing better, faster service to our students.",
            result: "Significant Hours Saved",
            avatar: "D",
        },
    ];

    useEffect(() => {
        const int = setInterval(() => {
            setTestimonialIndex((i) => (i + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(int);
    }, [testimonials.length]);

    const goToPrevious = () => {
        setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setTestimonialIndex((i) => (i + 1) % testimonials.length);
    };

    return (
        <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
            <div className="mx-auto px-6 md:px-12 xl:px-64">
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <div style={{ display: "inline-flex", gap: 8, padding: "8px 16px", borderRadius: 999, backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)", marginBottom: 12 }}>
                        <Star className="w-4 h-4" style={{ color: "var(--brand-yellow)" }} />
                        <span style={{ fontWeight: 700, color: "var(--foreground)" }}>What Our Clients Say</span>
                    </div>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--foreground)" }}>Trusted by <span style={{ background: "linear-gradient(90deg, var(--brand-purple), var(--brand-orange))", WebkitBackgroundClip: "text", color: "transparent" }}>Industry Leaders</span></h2>
                </div>

                <div style={{ padding: 32, borderRadius: 24, border: "2px solid var(--border-color)", backgroundColor: "var(--card-bg)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                    <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ width: 96, height: 96, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))", color: "#fff", fontSize: 28, fontWeight: 800, flexShrink: 0 }}>
                            {testimonials[testimonialIndex].avatar}
                        </div>

                        <div style={{ flex: 1 }}>
                            <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, fontStyle: "italic", color: "var(--foreground)" }}>"{testimonials[testimonialIndex].quote}"</p>
                            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                                <div style={{ fontWeight: 800, color: "var(--foreground)" }}>{testimonials[testimonialIndex].company}</div>
                                <div style={{ color: "var(--secondary-text)" }}>{testimonials[testimonialIndex].industry}</div>
                            </div>
                            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: "8px 12px", borderRadius: 999, backgroundColor: "var(--background)", border: "1px solid var(--border-color)" }}>
                                <Award className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--foreground)" }}>{testimonials[testimonialIndex].result}</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border-color)" }}>
                        {/* Left/Right Arrow Buttons */}
                        <div style={{ display: "flex", gap: 12 }}>
                            <button
                                onClick={goToPrevious}
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "var(--background)",
                                    border: "1px solid var(--border-color)",
                                    color: "var(--foreground)",
                                    transition: "all 0.2s",
                                }}
                                className="hover:bg-[var(--hover-bg)]"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={goToNext}
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "var(--background)",
                                    border: "1px solid var(--border-color)",
                                    color: "var(--foreground)",
                                    transition: "all 0.2s",
                                }}
                                className="hover:bg-[var(--hover-bg)]"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
