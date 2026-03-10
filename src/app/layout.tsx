import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
    default: "Camryn Jackson — Portfolio",
    template: "%s | Camryn Jackson",
  },
  description: "Camryn Jackson — Product Manager, Founder, and Creative. Portfolio spanning product development, AI tools, education technology, music, books, and film.",
  keywords: ["Camryn Jackson", "Product Manager", "PNEUOMA", "Campaigne", "portfolio", "AI tools", "education technology", "author", "musician", "app developer"],
  authors: [{ name: "Camryn Jackson", url: siteUrl }],
  creator: "Camryn Jackson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Camryn Jackson",
    title: "Camryn Jackson — Portfolio",
    description: "Product Manager, Founder, and Creative. Building human-centered systems across tech, education, and the arts.",
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
    title: "Camryn Jackson — Portfolio",
    description: "Product Manager, Founder, and Creative. Building human-centered systems.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LVXR62LPSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LVXR62LPSB');
          `}
        </Script>
      </head>
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

