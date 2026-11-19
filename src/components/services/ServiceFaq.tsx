import FaqSection from "@/components/ui/FaqSection";
import { generateFAQSchema } from "@/lib/schema";
import type { ServiceFaq as ServiceFaqItem } from "@/data/serviceFaqs";

/**
 * Visible FAQ + matching FAQPage structured data from one plain-text list
 * (src/data/serviceFaqs.ts), so the two can never drift apart.
 */
export default function ServiceFaq({
    faqs,
    accent,
    pageUrl,
    subtitle,
}: {
    faqs: ServiceFaqItem[];
    /** CSS colour for the open question and badge, e.g. "var(--accent-green-text)". */
    accent: string;
    /** Absolute page URL, used for the FAQPage @id. */
    pageUrl: string;
    subtitle?: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        ...generateFAQSchema(faqs, `${pageUrl}/#faq`),
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <FaqSection
                id="faq"
                faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))}
                accent={accent}
                subtitle={subtitle}
            />
        </>
    );
}
