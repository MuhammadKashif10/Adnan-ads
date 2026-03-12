import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanupdubai.ae"),
  title: {
    default: "Junk Removal Dubai | Professional Waste Management Service",
    template: "%s | CleanUp Dubai",
  },
  description:
    "CleanUp Dubai offers professional junk removal, waste management, and garbage removal services across all Dubai areas. Fast, affordable, and eco-friendly. Call now!",
  keywords: [
    "junk removal dubai",
    "waste management service",
    "garbage removal service",
    "dubai waste collection",
    "junk removal service",
    "waste removal services",
    "junk removal near me",
    "waste management in dubai",
    "garbage removal dubai",
    "collect junk",
    "collecting garbage",
    "removal junk services",
  ],
  authors: [{ name: "CleanUp Dubai" }],
  creator: "CleanUp Dubai",
  publisher: "CleanUp Dubai",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.cleanupdubai.ae",
    siteName: "CleanUp Dubai",
    title: "Junk Removal Dubai | Professional Waste Management Service",
    description:
      "Dubai's #1 junk removal and waste management service. Furniture removal, appliance disposal, construction debris cleanup. Fast, reliable, eco-friendly.",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 600,
        alt: "CleanUp Dubai — Junk Removal & Waste Management Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Dubai | Professional Waste Management Service",
    description:
      "Dubai's #1 junk removal and waste management service. Fast, reliable, eco-friendly garbage removal across all Dubai areas.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <StickyButtons />
          </div>
        </Providers>
      </body>
    </html>
  );
}
