import { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/src/lib/utils";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Camryn Jackson — Portfolio",
  description:
    "Camryn Jackson — Product Manager, Founder, and Creative. Portfolio spanning product development, AI tools, education technology, music, books, and film.",
  keywords: [
    "Camryn Jackson",
    "Product Manager",
    "PNEUOMA",
    "Campaigne",
    "portfolio",
    "AI tools",
    "education technology",
  ],
  openGraph: {
    title: "Camryn Jackson — Portfolio",
    description:
      "Product Manager, Founder, and Creative. Building human-centered systems across tech, education, and the arts.",
    url: siteUrl,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const portfolioSections = [
  {
    title: "Product",
    subtitle: "PM Portfolio & Case Studies",
    description:
      "Product strategy, user problem discovery, and MVP development across AI tools, regulation tech, and education systems.",
    href: "/product",
    accent: "brand-gold",
    tag: "Product Manager",
  },
  {
    title: "Campaigne",
    subtitle: "Music, Books & Creative Works",
    description:
      "The official entity hub for Campaigne — a curated collection of books, music, apps, and creative works that transcend boundaries.",
    href: "/campaigne",
    accent: "brand-purple",
    tag: "Artist & Author",
  },
  {
    title: "Apps",
    subtitle: "Software & Tools",
    description:
      "Applications built to solve real problems — from nervous system regulation to voice-based documentation and educational games.",
    href: "/apps",
    accent: "brand-gold",
    tag: "Builder",
  },
  {
    title: "Acting & Film",
    subtitle: "Screen Credits & Productions",
    description:
      "Film and acting work including Bonus Trip and other productions. On-screen presence meets behind-the-scenes vision.",
    href: "/acting",
    accent: "brand-purple",
    tag: "Filmmaker",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-purple/15 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-brand-purple/10" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto container-padding text-center">
          <div className="mb-8">
            <span className="inline-block px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold/80 border border-brand-gold/20 rounded-full bg-brand-gold/5 backdrop-blur-sm">
              Portfolio
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-serif text-white tracking-tight leading-[1.05]">
            Camryn Jackson
          </h1>

          <p className="text-xl md:text-2xl text-white/50 mb-4 font-light">
            Product Manager&ensp;·&ensp;Founder&ensp;·&ensp;Creative
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-brand-gold/40" />
            <span className="text-brand-gold/60 text-lg">✦</span>
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-brand-gold/40" />
          </div>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Building human-centered systems at the intersection of technology,
            education, and the arts. Founder of PNEUOMA. Former Dean of
            Students. Product builder across AI tools, mobile apps, and
            creative works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="px-8 py-4 text-base font-semibold text-black bg-brand-gold rounded-lg hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
            >
              Product Portfolio
            </Link>
            <Link
              href="/campaigne"
              className="px-8 py-4 text-base font-semibold text-brand-gold border-2 border-brand-gold/40 rounded-lg hover:bg-brand-gold/10 transition-all duration-300 hover:scale-105"
            >
              Creative Works
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight mb-4">
              Explore
            </h2>
            <p className="text-white/50 text-lg">
              Everything I build, create, and ship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 md:p-10 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold/70 border border-brand-gold/20 rounded-full">
                    {section.tag}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-4">
                  {section.subtitle}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-6 text-brand-gold/60 group-hover:text-brand-gold transition-colors text-sm font-medium flex items-center gap-2">
                  View
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Books", href: "/books" },
              { label: "Music", href: "/music" },
              { label: "Wrestling", href: "/wrestling" },
              { label: "Photos", href: "/photos" },
              { label: "Press", href: "/press" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-sm font-medium text-white/50 border border-white/10 rounded-lg hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
