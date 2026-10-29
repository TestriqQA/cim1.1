import Link from 'next/link';
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'Page Not Found | Cinute InfoMedia',
    description: 'The page you are looking for does not exist. Browse our services, blog, or contact us for help.',
    url: '/404',
});

export default function NotFound() {
    return (
        <main
            className="min-h-screen flex items-center justify-center px-6"
            style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
            }}
        >
            <div className="text-center max-w-xl">
                <div className="mb-8">
                    <span className="text-8xl font-bold bg-gradient-to-r from-[#008ac1] to-[#00b5ca] bg-clip-text text-transparent">
                        404
                    </span>
                </div>
                <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                    Page Not Found
                </h1>
                <p className="text-lg mb-8" style={{ color: 'var(--secondary-text)' }}>
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <nav className="flex flex-wrap gap-4 justify-center" aria-label="Quick navigation">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-gradient-to-r from-[#008ac1] to-[#00b5ca] text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/services"
                        className="px-6 py-3 border rounded-full font-medium transition-all hover:scale-105"
                        style={{ borderColor: 'var(--border-color)', color: 'var(--foreground)' }}
                    >
                        Our Services
                    </Link>
                    <Link
                        href="/blog"
                        className="px-6 py-3 border rounded-full font-medium transition-all hover:scale-105"
                        style={{ borderColor: 'var(--border-color)', color: 'var(--foreground)' }}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border rounded-full font-medium transition-all hover:scale-105"
                        style={{ borderColor: 'var(--border-color)', color: 'var(--foreground)' }}
                    >
                        Contact Us
                    </Link>
                </nav>
                {/* Additional internal links for SEO crawlability */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <p className="text-sm mb-4" style={{ color: 'var(--secondary-text)' }}>
                        Popular pages you might be looking for:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center text-sm">
                        <Link href="/services/web-design-development" className="hover:underline" style={{ color: 'var(--brand-blue)' }}>Web Development</Link>
                        <span style={{ color: 'var(--secondary-text)' }}>•</span>
                        <Link href="/services/seo-services" className="hover:underline" style={{ color: 'var(--brand-blue)' }}>SEO Services</Link>
                        <span style={{ color: 'var(--secondary-text)' }}>•</span>
                        <Link href="/services/performance-marketing" className="hover:underline" style={{ color: 'var(--brand-blue)' }}>Performance Marketing</Link>
                        <span style={{ color: 'var(--secondary-text)' }}>•</span>
                        <Link href="/about" className="hover:underline" style={{ color: 'var(--brand-blue)' }}>About Us</Link>
                        <span style={{ color: 'var(--secondary-text)' }}>•</span>
                        <Link href="/careers" className="hover:underline" style={{ color: 'var(--brand-blue)' }}>Careers</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
