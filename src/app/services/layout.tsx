import RelatedServices from "@/components/services/RelatedServices";

// Every /services/* page gets the "Related services" block after its own
// content (SEO change report, section 2.1). The /services hub itself and any
// page not listed in src/data/relatedServices.ts render nothing extra.
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <RelatedServices />
        </>
    );
}
