"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { withRupeeSign } from "@/components/RupeeSign";

// Phone input with country codes
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Validation utilities
import {
    validateFullName,
    validateEmail,
    validatePhone,
    validateMessage,
    validateRequired
} from '@/lib/formValidation';

interface FormData {
    name: string;
    website: string;
    email: string;
    phone: string;
    referral: string;
    services: string[];
    goal: string;
    budget: string;
    timeline: string;
}

// Brand colors for this section
const BRAND = {
    primary: "#4b277a",
    secondary: "#97288e",
    accent: "#fab900",
};

// BRAND stays vivid for backgrounds, borders and gradients. TEXT uses the
// theme-aware tokens: #4b277a is only 1.55:1 on the dark background and
// #fab900 under 2:1 on the light one.
const BRAND_TEXT = {
    primary: "var(--accent-violet-text)",
    secondary: "var(--brand-purple-text)",
    accent: "var(--accent-amber-text)",
};

export default function GetInTouchClient() {
    const hpRef = useRef<HTMLInputElement>(null);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        website: "",
        email: "",
        phone: "",
        referral: "",
        services: [],
        goal: "",
        budget: "",
        timeline: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(8);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const services = [
        { value: "web-design", label: "Web Design & Development", icon: "🌐" },
        { value: "mobile-app", label: "Mobile App Development", icon: "📱" },
        { value: "social-media", label: "Social Media Marketing", icon: "📣" },
        { value: "ai-workflows", label: "AI Workflows & Automations", icon: "⚡" },
        { value: "ai-chatbots", label: "AI-Powered Chatbots", icon: "🤖" },
        { value: "seo", label: "Organic Growth & SEO", icon: "📈" },
        { value: "performance-marketing", label: "Performance Marketing", icon: "🎯" },
        { value: "brand-identity", label: "Brand Identity & Design", icon: "🎨" },
        { value: "support-services", label: "Additional Support Services", icon: "🎧" },
    ];

    const budgetOptions = [
        { value: "under-15k", title: "Just starting", desc: "Under ₹15,000" },
        { value: "15k-50k", title: "Testing stage", desc: "₹15,000 – ₹50,000" },
        { value: "50k-100k", title: "Scaling", desc: "₹50,000 – ₹1,00,000" },
        { value: "100k-plus", title: "Aggressive growth", desc: "₹1,00,000+" },
        { value: "finalizing", title: "Finalizing budget", desc: "Need suggestions" },
    ];

    const timelineOptions = [
        { value: "right-away", title: "Right away" },
        { value: "this-week", title: "This week" },
        { value: "this-month", title: "This month" },
        { value: "exploring", title: "Just exploring" },
    ];

    const validateStep1 = (): boolean => {
        const newErrors: Record<string, string> = {};

        // Name validation
        const nameError = validateFullName(formData.name);
        if (nameError) newErrors.name = nameError;

        // Website validation
        if (!formData.website.trim()) {
            newErrors.website = "Please enter your website";
        } else if (!isValidURL(formData.website)) {
            newErrors.website = "Please enter a valid URL";
        }

        // Email validation
        const emailError = validateEmail(formData.email);
        if (emailError) newErrors.email = emailError;

        // Phone validation
        const phoneError = validatePhone(formData.phone);
        if (phoneError) newErrors.phone = phoneError;

        // Referral validation
        if (!formData.referral) newErrors.referral = "Please select how you found us";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (formData.services.length === 0) newErrors.services = "Please select at least one service";
        if (!formData.goal.trim()) newErrors.goal = "Please describe your goal or challenge";
        if (!formData.budget) newErrors.budget = "Please select a budget range";
        if (!formData.timeline) newErrors.timeline = "Please select a timeline";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidURL = (url: string): boolean => {
        const pattern = /^(https?:\/\/)?(?:www\.([\w-]+\.)+[\w-]{2,}|(?!www\.)([\w-]+\.)+[\w-]{2,})(\/.*)?$/i;
        return pattern.test(url);
    };

    const toggleService = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(value)
                ? prev.services.filter((s) => s !== value)
                : [...prev.services, value],
        }));
    };

    const handleNext = (step: number) => {
        if (step === 2 && !validateStep1()) return;
        if (step === 3 && !validateStep2()) return;
        setCurrentStep(step);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('/api/get-in-touch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, hp_field: hpRef.current?.value || "" }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit form');
            }

            setShowSuccess(true);
            try { (window as any).gtag?.("event", "generate_lead", { form_id: "get-in-touch" }); } catch { /* analytics best-effort */ }
            setTimeout(() => {
                window.location.href = "https://www.cinuteinfomedia.com/";
            }, 2000);
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitError(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (currentStep !== 3) return;

        if (countdown <= 0) {
            handleSubmit();
            return;
        }

        const timer = setTimeout(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentStep, countdown]);

    const gradient = `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})`;

    return (
        <main
            className="min-h-screen relative overflow-hidden py-8 sm:py-12"
            style={{ background: "var(--background)", color: "var(--foreground)", scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}
        >
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-15 animate-blob"
                    style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.secondary})` }}
                />
                <div
                    className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15 animate-blob"
                    style={{ background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.secondary})`, animationDelay: "5s" }}
                />
                <div
                    className="absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15 animate-blob"
                    style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`, animationDelay: "10s" }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {currentStep === 1 && (
                    <header className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                            <span style={{
                                background: gradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Let&apos;s Build Something That Grows</span> 🚀
                        </h1>
                        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                            Quick onboarding. No spam. Just a few questions to understand your goals and share the right plan.
                        </p>
                    </header>
                )}

                <div
                    className="rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 animate-slide-up"
                    style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)" }}
                >
                    <div className="flex justify-between mb-12 relative">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex flex-col items-center flex-1 relative">
                                {step !== 1 && (
                                    <div
                                        className="absolute top-5 -left-1/2 w-full h-0.5 transition-all duration-500"
                                        style={{
                                            background: currentStep > step - 1 ? BRAND.accent : "var(--border-color)",
                                            zIndex: -1,
                                        }}
                                    />
                                )}
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-500"
                                    style={{
                                        background:
                                            currentStep === step
                                                ? gradient
                                                : currentStep > step
                                                    ? BRAND.accent
                                                    : "var(--hover-bg)",
                                        color: currentStep >= step ? "white" : "var(--secondary-text)",
                                        transform: currentStep === step ? "scale(1.1)" : "scale(1)",
                                        boxShadow: currentStep === step ? "0 8px 20px rgba(75, 39, 122, 0.3)" : "none",
                                    }}
                                >
                                    {step}
                                </div>
                                <span
                                    className="text-xs sm:text-sm mt-2 font-medium"
                                    style={{ color: currentStep === step ? BRAND_TEXT.primary : "var(--secondary-text)" }}
                                >
                                    {step === 1 ? "Basic Details" : step === 2 ? "Goals & Budget" : "Confirmation"}
                                </span>
                            </div>
                        ))}
                    </div>

                    {currentStep === 1 && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: BRAND_TEXT.primary }}>
                                    Let&apos;s understand what you&apos;re building
                                </h2>
                                <p style={{ color: "var(--secondary-text)" }} className="max-w-xl mx-auto">
                                    This will take less than 60 seconds. No pressure. No long forms. Just a few quick questions.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <input ref={hpRef} type="text" name="hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                        We love knowing who we&apos;re speaking to! <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex flex-col w-full md:w-1/2">
                                            <input
                                                type="text"
                                                placeholder="What&apos;s your name?*"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all focus:ring-4"
                                                style={{
                                                    background: "var(--hover-bg)",
                                                    borderColor: errors.name ? "#ef4444" : "var(--border-color)",
                                                    color: "var(--foreground)",
                                                }}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/2">
                                            <input
                                                type="text"
                                                placeholder="Link to website or socials?*"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all focus:ring-4"
                                                style={{
                                                    background: "var(--hover-bg)",
                                                    borderColor: errors.website ? "#ef4444" : "var(--border-color)",
                                                    color: "var(--foreground)",
                                                }}
                                            />
                                            {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                        How can we reach you? <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <p className="text-xs mb-2" style={{ color: "var(--secondary-text)" }}>
                                        Only for sharing your strategy plan. No spam ever.
                                    </p>

                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex flex-col w-full md:w-1/2">
                                            <label className="block text-sm font-medium mb-1" style={{ color: "var(--secondary-text)" }}>
                                                Email <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all focus:ring-4"
                                                style={{
                                                    background: "var(--hover-bg)",
                                                    borderColor: errors.email ? "#ef4444" : "var(--border-color)",
                                                    color: "var(--foreground)",
                                                }}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                        <div className="flex flex-col w-full md:w-1/2">
                                            <label className="block text-sm font-medium mb-1" style={{ color: "var(--secondary-text)" }}>
                                                Phone / WhatsApp <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                            </label>
                                            <div
                                                className="phone-input-wrapper"
                                                style={{
                                                    borderColor: errors.phone ? "#ef4444" : "var(--border-color)",
                                                    background: "var(--hover-bg)"
                                                }}
                                            >
                                                <PhoneInput
                                                    international
                                                    defaultCountry="IN"
                                                    value={formData.phone}
                                                    onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                                                    placeholder="Enter phone number"
                                                    className="phone-input-field"
                                                    numberInputProps={{ 'aria-label': 'Phone number' }}
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <label htmlFor="referral" className="block text-sm font-semibold mt-5 py-2" style={{ color: "var(--foreground)" }}>
                                        How did you find us? <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <select
                                        id="referral"
                                        value={formData.referral}
                                        onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all cursor-pointer focus:ring-4"
                                        style={{
                                            background: "var(--hover-bg)",
                                            borderColor: errors.referral ? "#ef4444" : "var(--border-color)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        <option value="">Select an option</option>
                                        <option value="reference">Reference</option>
                                        <option value="email">Email</option>
                                        <option value="call">Call</option>
                                        <option value="instagram">Instagram</option>
                                        <option value="facebook">Facebook</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="google">Google Search</option>
                                        <option value="youtube">YouTube</option>
                                        <option value="ai">AI</option>
                                        <option value="other">Other Mediums</option>
                                    </select>
                                    {errors.referral && <p className="text-red-500 text-sm mt-1">{errors.referral}</p>}
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={() => handleNext(2)}
                                    className="flex items-center justify-center w-full font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg gap-4"
                                    style={{ background: BRAND.primary, color: "#ffffffff" }}
                                >
                                    Next <ArrowRight aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="animate-fade-in">
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                        What are you looking to grow or fix right now? <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        Pick whichever feels closest. We&apos;ll figure the rest out together.
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                        {services.map((service) => (
                                            <div
                                                key={service.value}
                                                onClick={() => toggleService(service.value)}
                                                className="p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative"
                                                style={{
                                                    borderColor: formData.services.includes(service.value)
                                                        ? BRAND.primary
                                                        : "var(--border-color)",
                                                    background: formData.services.includes(service.value)
                                                        ? `linear-gradient(135deg, ${BRAND.primary}10, ${BRAND.secondary}10)`
                                                        : "transparent",
                                                }}
                                            >
                                                {formData.services.includes(service.value) && (
                                                    <div
                                                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                                        style={{ background: BRAND.accent }}
                                                    >
                                                        ✓
                                                    </div>
                                                )}
                                                <div className="text-2xl sm:text-3xl mb-2 text-center flex justify-center items-center h-10 w-full">
                                                    {service.icon}
                                                </div>
                                                <div className="text-[10px] sm:text-sm font-semibold text-center break-words leading-tight" style={{ color: "var(--foreground)" }}>
                                                    {service.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {errors.services && <p className="text-red-500 text-sm mt-2">{errors.services}</p>}
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                        What&apos;s your main goal or challenge? <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        This gives us context before suggesting anything.
                                    </p>
                                    <textarea
                                        placeholder="Low leads? Not enough sales? Unsure what to fix?"
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all min-h-[120px] resize-y focus:ring-4"
                                        style={{
                                            background: "var(--hover-bg)",
                                            borderColor: errors.goal ? "#ef4444" : "var(--border-color)",
                                            color: "var(--foreground)",
                                        }}
                                    />
                                    {errors.goal && <p className="text-red-500 text-sm mt-1">{errors.goal}</p>}
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                        Your monthly budget range? <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <p className="text-sm mb-4" style={{ color: "var(--secondary-text)" }}>
                                        This will help us match the right plan.
                                    </p>
                                    <div className="space-y-3">
                                        {budgetOptions.map((option) => (
                                            <label
                                                key={option.value}
                                                className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:translate-x-1"
                                                style={{
                                                    borderColor: formData.budget === option.value ? BRAND.primary : "var(--border-color)",
                                                    background: formData.budget === option.value
                                                        ? `linear-gradient(90deg, ${BRAND.primary}10, ${BRAND.secondary}10)`
                                                        : "transparent",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="budget"
                                                    value={option.value}
                                                    checked={formData.budget === option.value}
                                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    className="sr-only"
                                                />
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-all"
                                                        style={{ borderColor: formData.budget === option.value ? BRAND.primary : "var(--border-color)" }}
                                                    >
                                                        {formData.budget === option.value && (
                                                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: BRAND.primary }} />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold" style={{ color: "var(--foreground)" }}>{option.title}</div>
                                                        <div className="text-sm" style={{ color: "var(--secondary-text)" }}>{withRupeeSign(option.desc)}</div>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget}</p>}
                                </div>

                                <div>
                                    <label className="block text-lg font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                                        How soon do you want to get started? <span style={{ color: BRAND_TEXT.accent }}>*</span>
                                    </label>
                                    <div className="space-y-3">
                                        {timelineOptions.map((option) => (
                                            <label
                                                key={option.value}
                                                className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:translate-x-1"
                                                style={{
                                                    borderColor: formData.timeline === option.value ? BRAND.primary : "var(--border-color)",
                                                    background: formData.timeline === option.value
                                                        ? `linear-gradient(90deg, ${BRAND.primary}10, ${BRAND.secondary}10)`
                                                        : "transparent",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="timeline"
                                                    value={option.value}
                                                    checked={formData.timeline === option.value}
                                                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                                    className="sr-only"
                                                />
                                                <div className="flex items-center">
                                                    <div
                                                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-all"
                                                        style={{ borderColor: formData.timeline === option.value ? BRAND.primary : "var(--border-color)" }}
                                                    >
                                                        {formData.timeline === option.value && (
                                                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: BRAND.primary }} />
                                                        )}
                                                    </div>
                                                    <div className="font-semibold" style={{ color: "var(--foreground)" }}>{option.title}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.timeline && <p className="text-red-500 text-sm mt-2">{errors.timeline}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button
                                    onClick={() => setCurrentStep(1)}
                                    className="flex items-center gap-2 sm:w-auto px-6 py-3 font-semibold rounded-xl transition-all"
                                    style={{ background: "var(--hover-bg)", color: "var(--foreground)" }}
                                >
                                    <ArrowLeft /> Back
                                </button>
                                <button
                                    onClick={() => handleNext(3)}
                                    className="flex-1 font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
                                    style={{ background: BRAND.primary, color: "#ffffffff" }}
                                >
                                    🚀 Let&apos;s Build This
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="animate-fade-in text-center py-8">
                            <div className="text-6xl mb-6 animate-scale-in">🎉</div>
                            <h2 className="text-3xl font-bold mb-4" style={{ color: BRAND_TEXT.primary }}>
                                Thanks for sharing this!
                            </h2>
                            <p className="text-lg mb-2" style={{ color: "var(--secondary-text)" }}>
                                Someone from our team will reach out with a tailored plan for your goals.
                            </p>
                            <p className="text-lg font-semibold mb-4" style={{ color: BRAND_TEXT.primary }}>
                                No spam. No pressure. Just real solutions.
                            </p>
                            <div className="mb-8 p-4 rounded-xl" style={{ background: `linear-gradient(90deg, ${BRAND.primary}15, ${BRAND.secondary}15)` }}>
                                {isSubmitting ? (
                                    <p className="text-sm flex items-center justify-center gap-2" style={{ color: "var(--secondary-text)" }}>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending your inquiry...
                                    </p>
                                ) : (
                                    <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                        Redirecting automatically in <span className="font-bold text-lg" style={{ color: BRAND_TEXT.primary }}>{countdown}</span> seconds...
                                    </p>
                                )}
                            </div>

                            {submitError && (
                                <div className="mb-6 p-4 rounded-xl border-2" style={{ borderColor: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' }}>
                                    <p className="text-sm text-center" style={{ color: '#ef4444' }}>
                                        {submitError}
                                    </p>
                                </div>
                            )}

                            <div className="space-y-4 max-w-md mx-auto mb-8">
                                <a
                                    href="https://www.cinuteinfomedia.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 border-2 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        borderColor: BRAND.primary,
                                        color: BRAND_TEXT.primary,
                                        background: `linear-gradient(90deg, ${BRAND.primary}08, ${BRAND.secondary}08)`,
                                    }}
                                >
                                    👉 Learn more about us here
                                </a>
                            </div>

                            <div className="flex justify-center flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    style={{ background: BRAND.primary, color: "#ffffffff" }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Check /> Done
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showSuccess && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in"
                    style={{ background: "color-mix(in srgb, var(--background) 95%, transparent)" }}
                >
                    <div className="text-center">
                        <div
                            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in"
                            style={{ background: gradient }}
                        >
                            <div className="text-white text-5xl">✓</div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2" style={{ color: BRAND_TEXT.primary }}>Success!</h2>
                        <p style={{ color: "var(--secondary-text)" }}>Redirecting you to our homepage...</p>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scale-in {
                    from {
                        transform: scale(0);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-blob {
                    animation: blob 20s ease-in-out infinite;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.5s ease-out;
                }

                /* Phone Input Styles */
                .phone-input-wrapper {
                    border: 2px solid var(--border-color);
                    border-radius: 0.75rem;
                    padding: 0.65rem 1rem;
                    transition: all 0.2s ease;
                }
                .phone-input-wrapper:focus-within {
                    border-color: #4b277a;
                    box-shadow: 0 0 0 4px rgba(75, 39, 122, 0.1);
                }
                .phone-input-field {
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .phone-input-field .PhoneInputInput {
                    flex: 1;
                    border: none !important;
                    background: transparent;
                    outline: none !important;
                    box-shadow: none !important;
                    font-size: 1rem;
                    color: var(--foreground);
                    padding: 0.25rem 0;
                }
                .phone-input-field .PhoneInputInput:focus {
                    outline: none !important;
                    border: none !important;
                    box-shadow: none !important;
                }
                .phone-input-field .PhoneInputInput::placeholder {
                    color: var(--secondary-text);
                    opacity: 1;
                }
                .phone-input-field .PhoneInputCountry {
                    margin-right: 0.75rem;
                }
                .phone-input-field .PhoneInputCountryIcon {
                    width: 1.5rem;
                    height: 1.125rem;
                    border-radius: 0.125rem;
                    overflow: hidden;
                }
                .phone-input-field .PhoneInputCountrySelectArrow {
                    margin-left: 0.25rem;
                    color: var(--secondary-text);
                }
                .phone-input-field .PhoneInputCountrySelect {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }
            `}</style>
        </main>
    );
}
