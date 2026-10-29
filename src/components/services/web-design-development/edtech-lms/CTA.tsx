import { ArrowRight, GraduationCap, BookOpen, Video, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    const features = [
        "Custom LMS Development",
        "Course Builder & Management",
        "Video Streaming Integration",
        "Student Analytics Dashboard",
        "Mobile Learning Apps",
        "Certification System",
    ];

    return (
        <section
            className="py-20 transition-colors duration-300 relative overflow-hidden"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div
                    className="rounded-3xl p-6 md:p-12 lg:p-16 border overflow-hidden relative"
                    style={{
                        background: "linear-gradient(135deg, color-mix(in srgb, #a855f7 8%, var(--card-bg)), color-mix(in srgb, #ec4899 5%, var(--card-bg)))",
                        borderColor: "color-mix(in srgb, #a855f7 30%, var(--border-color))",
                    }}
                >
                    {/* Decorative icons */}
                    <div className="absolute top-8 right-8 opacity-10">
                        <GraduationCap className="w-32 h-32" style={{ color: "var(--brand-purple-text)" }} />
                    </div>
                    <div className="absolute bottom-8 left-8 opacity-10">
                        <BookOpen className="w-24 h-24" style={{ color: "#ec4899" }} />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                                Ready to Transform <span style={{ color: "var(--brand-purple-text)" }}>Learning</span>?
                            </h2>

                            <p className="text-base md:text-xl mb-8 leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                                Let's build an EdTech platform that engages learners, delivers measurable outcomes, and scales with your educational mission.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                                >
                                    Start Your EdTech Project
                                    <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base md:text-lg border transition-all duration-300 hover:scale-105"
                                    style={{
                                        borderColor: "#a855f7",
                                        color: "var(--brand-purple-text)",
                                    }}
                                >
                                    <Video className="w-5 h-5 flex-shrink-0" />
                                    Request Demo
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                        borderColor: "var(--border-color)",
                                    }}
                                >
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "var(--brand-purple-text)" }} />
                                    <span className="font-medium" style={{ color: "var(--foreground)" }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
