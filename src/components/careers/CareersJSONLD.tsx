"use client";

import { Job } from "@/types/careers";

interface CareersJSONLDProps {
    jobs: Job[];
}

export default function CareersJSONLD({ jobs }: CareersJSONLDProps) {
    const allJobs = jobs;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": allJobs.map((job) => {
            const publishedDate = (job as any).publishedAt ? (job as any).publishedAt : new Date().toISOString();

            return {
                "@type": "JobPosting",
                "title": job.title,
                "description": job.description,
                "datePosted": publishedDate.split('T')[0],
                "validThrough": new Date(new Date(publishedDate).setFullYear(new Date(publishedDate).getFullYear() + 1)).toISOString().split('T')[0],
                "employmentType": job.type === "Full-time" ? "FULL_TIME" : job.type === "Part-time" ? "PART_TIME" : "CONTRACTOR",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "Cinute InfoMedia",
                    "sameAs": "https://cinuteinfomedia.com",
                    "logo": "https://cinuteinfomedia.com/logo.png"
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": job.location === "Remote" ? "Remote" : job.location,
                        "addressCountry": "IN"
                    }
                },
                "applicantLocationRequirements": job.location === "Remote" ? {
                    "@type": "Country",
                    "name": "IN"
                } : undefined,
                "jobLocationType": job.location === "Remote" ? "TELECOMMUTE" : undefined
            };
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
