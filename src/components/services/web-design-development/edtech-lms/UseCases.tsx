import { Building2, GraduationCap, Briefcase, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function UseCases() {
    const useCases = [
        {
            icon: GraduationCap,
            title: "Schools & Universities",
            description: "Complete academic LMS with grading, attendance, parent portals, and curriculum management.",
        },
        {
            icon: Building2,
            title: "Training Companies",
            description: "Course marketplaces and instructor platforms for educational businesses.",
        },
        {
            icon: Briefcase,
            title: "Corporate Training",
            description: <><Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:underline text-[var(--accent-pink-text)]">Employee onboarding</Link>, compliance training, and skill development platforms.</>,
        },
        {
            icon: Users,
            title: "Professional Associations",
            description: "Continuing education and certification programs for industry professionals.",
        },
        {
            icon: Globe,
            title: "Non-Profits & NGOs",
            description: <><Link href="/services/web-design-development/landing-pages" className="underline underline-offset-2 hover:underline text-[var(--accent-orange-text)]">Global education initiatives</Link> and community learning platforms.</>,
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
                        Who We <span style={{ color: "var(--brand-purple-text)" }}>Serve</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: "var(--secondary-text)" }}>
                        Educational organizations of all types trust us to build their learning platforms.
                    </p>
                    <div
                        className="w-24 h-1.5 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
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
                                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
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
                        style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                    >
                        Discuss Your Use Case
                    </Link>
                </div>
            </div>
        </section>
    );
}
