"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-16 relative z-10">
                <div className="relative rounded-[2.5rem] overflow-hidden">
                    {/* Painted Background */}
                    <div className="absolute inset-0 bg-[var(--brand-black)]">
                        {/* Mesh Gradients */}

                        {/* Noise Overlay for "Painted" Texture */}
                        <div
                            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                filter: 'contrast(120%) brightness(120%)'
                            }}
                        />

                        {/* Glass Shine */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 70%)",
                                backgroundSize: "200% 200%",
                                animation: "shine 8s linear infinite"
                            }}
                        />
                    </div>

                    <div className="relative z-10 p-12 md:p-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto space-y-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                                Don&apos;t See the Right Role?
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                We are always looking for talented individuals to join our team. If you think you&apos;d be a great fit, we&apos;d love to hear from you.
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="mailto:contact@cinuteinfomedia.com"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[var(--brand-black)] bg-white transition-all hover:scale-105 hover:bg-opacity-90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Send Us Your Resume</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
