
"use client";


import { useState } from "react";
import { Job } from "@/types/careers";
import { ArrowUpRight, MapPin, Clock, Briefcase } from "lucide-react";
import JobDrawer from "./JobDrawer";


interface OpenPositionsProps {
    jobs: Job[];
}

export default function OpenPositions({ jobs }: OpenPositionsProps) {

    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedJob(null), 300); // Clear after animation
    };

    return (
        <section id="open-positions" data-scroll-target="open-positions" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#008ac1 1px, transparent 1px), linear-gradient(90deg, #008ac1 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Glow orbs */}
                <div
                    className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
                    style={{
                        background: "radial-gradient(circle, color-mix(in srgb, var(--brand-blue) 15%, transparent) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="mx-auto px-6 md:px-12 xl:px-20 relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors mx-auto"
                        style={{
                            background: "linear-gradient(135deg, color-mix(in srgb, var(--brand-blue) 10%, transparent), color-mix(in srgb, var(--brand-cyan) 5%, transparent))",
                            borderColor: "color-mix(in srgb, var(--brand-blue) 30%, transparent)",
                        }}
                    >
                        <Briefcase className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--brand-blue)" }}>Join Our Team</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                        Open <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(90deg, var(--brand-blue), var(--brand-cyan))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >Positions</span>
                    </h2>
                    <p className="text-[var(--secondary-text)] text-lg max-w-2xl mx-auto">
                        Join a team of forward-thinkers. Find the role where you can make the biggest impact.
                    </p>
                </div>

                <ul className="grid gap-4">
                    {jobs.map((job) => (
                        <li key={job.id}>
                        <div
                            onClick={() => handleJobClick(job)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleJobClick(job);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--brand-blue)] hover:shadow-lg bg-[var(--card-bg)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                            style={{ borderColor: "var(--border-color)" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--brand-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-3 flex-1">
                                    <h3 className="text-2xl font-bold group-hover:text-[var(--brand-blue)] transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--secondary-text)]">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            {job.department}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div
                                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:border-[var(--brand-blue)] group-hover:text-white"
                                        style={{ borderColor: "var(--border-color)", color: "var(--foreground)" }}
                                    >
                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                    </div>

                                    {/* Mobile Button - changed to div to avoid nested interactive controls since parent is button-role */}
                                    <div
                                        className="md:hidden w-full text-center py-3 rounded-xl font-semibold bg-[#006d97] text-white hover:bg-[#006d97]/90 transition-colors"
                                    >
                                        View Details
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedJob && (
                <JobDrawer
                    job={selectedJob}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}
