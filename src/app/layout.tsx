import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import { getSiteUrl } from "@/src/lib/utils";
import { getPersonSchema, getWebSiteSchema } from "@/src/lib/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Camryn Jackson | Campaigne - Official Entity Hub",
    template: "%s | Campaigne",
  },
  description: "Official source for releases, images, bios, and links from Camryn Jackson (Campaigne). Books, music, apps, and more.",
  keywords: ["Camryn Jackson", "Campaigne", "author", "musician", "app developer", "filmmaker"],
  authors: [{ name: "Camryn Jackson", url: siteUrl }],
  creator: "Camryn Jackson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Campaigne",
    title: "Camryn Jackson | Campaigne - Official Entity Hub",
    description: "Official source for releases, images, bios, and links from Camryn Jackson (Campaigne).",
    images: [
      {
        url: `${siteUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Campaigne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camryn Jackson | Campaigne",
    description: "Official source for releases, images, bios, and links.",
    images: [`${siteUrl}/images/og-default.jpg`],
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
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {/* Global Person Entity Schema - Single Source of Truth */}
        {/* @id: https://camrynjackson.com/#campaigne */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

