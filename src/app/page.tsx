import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteUrl } from "@/src/lib/utils";
import { getLatestWorks, getReleasedWorks } from "@/src/content/works";
import FeaturedWorkCard from "@/src/components/FeaturedWorkCard";
import LatestReleaseCard from "@/src/components/LatestReleaseCard";
import {
  getOrganizationSchema,
} from "@/src/lib/structured-data";
import { getSortedSocialLinks } from "@/src/lib/social-links";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Campaigne - Entering a Kingdom",
  description:
    "Campaigne - Official entity hub for Camryn Jackson (Campaigne). Discover books, music, apps, and creative works. Search for Campaigne music, Campaigne albums, Campaigne books.",
  keywords: ["Campaigne", "Campaigne music", "Campaigne artist", "Campaigne albums", "Campaigne books", "Camryn Jackson", "PNEUMA", "Tales of Time", "ORIGEN"],
  openGraph: {
    title: "Campaigne - Entering a Kingdom | Official Entity Hub",
    description:
      "Campaigne - Official entity hub for Camryn Jackson. Discover books, music, apps, and creative works.",
    url: siteUrl,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function HomePage() {
  const featuredWorks = getLatestWorks(4);
  const allWorks = getReleasedWorks();
  const socialLinks = getSortedSocialLinks();

  // Person and WebSite schemas are in root layout - no need to duplicate
  const orgSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-purple/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-brand-purple/20" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
          {/* Royal Seal Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <div className="relative w-96 h-96">
              {/* CJ Monogram using CSS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[20rem] font-serif text-brand-gold leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>
                  CJ
                </div>
              </div>
              {/* Crest ring */}
              <div className="absolute inset-0 rounded-full border-4 border-brand-gold/20" />
            </div>
          </div>
          
          <div className="mb-6 relative z-10">
            <span className="inline-block px-4 py-2 text-sm font-medium text-brand-gold/80 border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm">
              Campaigne
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 font-serif text-brand-gold tracking-tight leading-none relative z-10">
            Entering a Kingdom
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto font-light relative z-10">
            Welcome to Campaigne - the official source of truth for releases, images, bios,
            and links from Camryn Jackson (Campaigne). A curated collection of
            books, music, apps, and creative works that transcend boundaries.
          </p>
          
          {/* Gold divider with crown accent */}
          <div className="relative z-10 mb-12 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
            <div className="mx-4 text-brand-gold text-2xl">✦</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Link
              href="/about"
              className="btn-primary"
              aria-label="Learn more about Camryn Jackson"
            >
              Learn More
            </Link>
            <Link
              href="/books"
              className="btn-secondary"
              aria-label="Explore books"
            >
              Explore Works
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      {featuredWorks.length > 0 && (
        <section className="section-padding bg-black relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-brand-gold font-serif tracking-tight">
                Featured Works
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Curated selection of standout releases
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {featuredWorks.map((work) => (
                <FeaturedWorkCard key={work.id} work={work} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Releases */}
      {allWorks.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-black via-brand-purple/5 to-black relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-brand-gold font-serif tracking-tight">
                Latest Releases
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Explore all available works across books, music, and apps
              </p>
            </div>
            {/* Desktop: Horizontal scroll, Mobile: Grid */}
            <div className="hidden lg:flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {allWorks
                .sort((a, b) => {
                  if (!a.datePublished) return 1;
                  if (!b.datePublished) return -1;
                  return b.datePublished.localeCompare(a.datePublished);
                })
                .map((work) => (
                  <div key={work.id} className="flex-shrink-0 w-64">
                    <LatestReleaseCard work={work} />
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4">
              {allWorks
                .sort((a, b) => {
                  if (!a.datePublished) return 1;
                  if (!b.datePublished) return -1;
                  return b.datePublished.localeCompare(a.datePublished);
                })
                .map((work) => (
                  <LatestReleaseCard key={work.id} work={work} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Links */}
      <section className="py-16 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gold font-serif">
              Connect
            </h2>
            <p className="text-white/60 mb-8">
              Follow Campaigne across platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-lg font-semibold hover:bg-brand-gold/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                aria-label={`Visit ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-16 bg-black border-t border-brand-gold/10 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto container-padding text-center">
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto">
            <strong className="text-brand-gold font-medium">Canonical Entity Hub</strong> • Official metadata, images, and links.
          </p>
        </div>
      </footer>
    </>
  );
}

