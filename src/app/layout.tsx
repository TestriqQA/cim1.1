import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProviderClient from "@/components/ThemeProviderClient"; // client wrapper
import DeferredGoogleAnalytics from "@/components/DeferredGoogleAnalytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cinuteinfomedia.com"),
  // Fallback only — every route but /cms (noindex) sets its own metadata. Kept as a
  // plain string, NOT a title.template: all page titles already carry the brand, so a
  // template would render "... | Cinute InfoMedia | Cinute InfoMedia".
  title: "Web Development & Digital Marketing | Cinute InfoMedia",
  description:
    "Cinute InfoMedia builds fast websites and mobile apps and runs SEO, performance marketing and AI automation. Mira Road, Mumbai. Book a free audit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* Put ThemeProviderClient inside the <body> */}
      <body
        className={`${inter.className} antialiased bg-white dark:bg-black text-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProviderClient>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderClient>
        <DeferredGoogleAnalytics gaId="G-X378ZPPV30" />
      </body>
    </html>
  );
}
