import { Building2, Heart, Stethoscope, Pill, Brain } from "lucide-react";
import Link from "next/link";

export default function UseCases() {
    const useCases = [
        {
            icon: Building2,
            title: "Hospitals & Health Systems",
            description: "Enterprise patient portals, care coordination platforms, and population health management systems.",
        },
        {
            icon: Heart,
            title: "Primary Care Practices",
            description: "Patient engagement portals with scheduling, messaging, and telehealth capabilities.",
        },
        {
            icon: Stethoscope,
            title: "Specialty Clinics",
            description: "Specialized portals for cardiology, oncology, orthopedics, and other specialties.",
        },
        {
            icon: Pill,
            title: <Link href="/services/web-design-development/ecommerce-development-company" className="hover:underline">Pharmacies & Labs</Link>,
            description: "Prescription management, lab results delivery, and medication adherence platforms.",
        },
        {
            icon: Brain,
            title: "Behavioral Health",
            description: "Mental health platforms with therapy scheduling, progress tracking, and crisis resources.",
        },
    ];

    return (
        <section
            className="py-16 transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                        Who We <span style={{ color: "#3b82f6" }}>Serve</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Healthcare organizations of all sizes trust us to build their digital platforms.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1)" }}
                    />
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, idx) => {
                        const Icon = useCase.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                                style={{
                                    backgroundColor: "var(--background)",
                                    borderColor: "var(--border-color)",
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                                >
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                                    {useCase.title}
                                </h3>
                                <p style={{ color: "var(--secondary-text)" }}>
                                    {useCase.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                    >
                        Discuss Your Use Case
                    </Link>
                </div>
            </div>
        </section>
    );
}
