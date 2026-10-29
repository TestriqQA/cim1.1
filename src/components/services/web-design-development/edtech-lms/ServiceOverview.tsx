import { BookOpen, Video, Users, Award, BarChart3, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceOverview() {
    const deliverables = [
        { icon: BookOpen, title: "Course Management", description: "Intuitive course builder with modules, lessons, and quizzes" },
        { icon: Video, title: "Video Streaming", description: "HD video delivery with adaptive bitrate streaming" },
        { icon: Users, title: "Student Portal", description: "Personalized dashboards with progress tracking" },
        { icon: Award, title: "Certifications", description: "Automated certificate generation and verification" },
        { icon: BarChart3, title: "Analytics Dashboard", description: "Comprehensive learning analytics and insights" },
        { icon: Zap, title: "Interactive Learning", description: "Quizzes, assignments, and gamification features" },
    ];

    return (
        <section
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}
        >
            <div className="mx-auto px-6 md:px-12 xl:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
                            Learning Platforms That{" "}
                            <span style={{ color: "var(--brand-purple-text)" }}>Inspire Growth</span>
                        </h2>

                        <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            We build comprehensive learning management systems inspired by industry leaders
                            like Udemy, Coursera, Canvas, and Moodle. Our platforms combine powerful
                            course delivery with engaging user experiences.
                        </p>

                        <p className="text-lg leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                            From <Link href="/services/web-design-development/business-corporate" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">corporate training portals</Link> to massive open online courses (<Link href="/services/web-design-development/entertainment-media" className="underline underline-offset-2 hover:underline text-[var(--brand-purple-text)]">MOOCs</Link>),
                            we deliver solutions that scale with your educational mission and drive
                            measurable learning outcomes.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                        >
                            Start Building Your LMS
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right Content - Deliverables */}
                    <div>
                        <h3 className="text-xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                            What We Deliver
                        </h3>

                        <div className="grid gap-4">
                            {deliverables.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                        style={{
                                            backgroundColor: "var(--background)",
                                            borderColor: "var(--border-color)",
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                                                {item.title}
                                            </h4>
                                            <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
