
import Image from "next/image";

export default function Culture() {
    return (
        <section className="py-20 overflow-hidden relative">
            <div className="mx-auto px-6 md:px-12 xl:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        {/* Images Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                        alt="Team collaboration"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                        alt="Brainstorming session"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                        alt="Office culture"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                                        alt="Remote team meeting"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div
                            className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl opacity-30 animate-pulse"
                            style={{ backgroundColor: "var(--brand-purple)" }}
                        />
                        <div
                            className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full blur-3xl opacity-30 animate-pulse"
                            style={{ backgroundColor: "var(--brand-cyan)", animationDelay: "2s" }}
                        />
                    </div>

                    <div className="lg:pl-8">
                        <span style={{ color: "var(--brand-blue-text)", fontWeight: 600, letterSpacing: "0.05em" }} className="uppercase text-sm mb-4 block">
                            Our Culture
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            More Than Just a <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, var(--brand-blue), var(--brand-purple))" }}>
                                Workplace
                            </span>
                        </h2>
                        <p className="text-[var(--secondary-text)] text-lg mb-6 leading-relaxed">
                            At CIM, we foster a culture of curiosity, collaboration, and continuous improvement. We are a diverse team of thinkers and doers who are passionate about using technology to solve real-world problems.
                        </p>
                        <p className="text-[var(--secondary-text)] text-lg mb-8 leading-relaxed">
                            Whether we are brainstorming new ideas, debugging code, or celebrating a launch, we do it together. We support each other's growth and celebrate each other's wins.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Open and transparent communication",
                                "Emphasis on work-life balance",
                                "Opportunities for continuous learning",
                                "Inclusive and diverse environment"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brand-teal)" }} />
                                    <span className="text-[var(--foreground)] font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
