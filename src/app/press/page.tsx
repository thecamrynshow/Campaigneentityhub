import { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/src/lib/utils";
import { getProfilePageSchema } from "@/src/lib/structured-data";
import { shortBio, mediumBio, longBio } from "@/src/content/bio";
import { getSortedSocialLinks } from "@/src/content/links";
import { getLatestWorks, getReleasedWorks } from "@/src/content/works";
import WorkCard from "@/src/components/WorkCard";
import CopyButton from "@/src/components/CopyButton";
import { linktreeUrl } from "@/src/content/links";
import { FACTS } from "@/src/content/facts";

const siteUrl = getSiteUrl();
const pressEmail = "camryncjackson@gmail.com";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Official media kit and verified resources for Campaigne (Camryn Jackson). Press photos, bios, and contact information.",
  openGraph: {
    title: "Press | Campaigne",
    description:
      "Official media kit and verified resources for Campaigne (Camryn Jackson).",
    url: `${siteUrl}/press`,
  },
  alternates: {
    canonical: `${siteUrl}/press`,
  },
};

export default function PressPage() {
  const socialLinks = getSortedSocialLinks();
  const featuredProjects = getLatestWorks(6);
  const latestReleases = getReleasedWorks()
    .sort((a, b) => {
      if (!a.datePublished) return 1;
      if (!b.datePublished) return -1;
      return b.datePublished.localeCompare(a.datePublished);
    })
    .slice(0, 3);
  
  const profilePageSchema = getProfilePageSchema(featuredProjects);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <section className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-gold font-serif tracking-tight">
              Press
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Official media kit and verified resources for Campaigne (Camryn Jackson).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#downloads"
                className="px-8 py-4 bg-brand-gold text-black rounded-md font-semibold hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black shadow-lg"
              >
                Download Media Kit (PDF)
              </a>
              <a
                href="#press-contact"
                className="px-8 py-4 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
              >
                Contact
              </a>
            </div>
          </section>

          {/* Facts Section - Wikidata-Compatible */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Facts
            </h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Legal Name</dt>
                  <dd className="text-base text-white/90">{FACTS.legalName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Professional Name</dt>
                  <dd className="text-base text-white/90">{FACTS.professionalName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Occupations</dt>
                  <dd className="text-base text-white/90">{FACTS.occupations.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Nationality</dt>
                  <dd className="text-base text-white/90">{FACTS.nationality}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Active Years</dt>
                  <dd className="text-base text-white/90">{FACTS.activeYears}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Primary Language</dt>
                  <dd className="text-base text-white/90">{FACTS.primaryLanguage}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Official Website</dt>
                  <dd className="text-base text-white/90">
                    <a
                      href={FACTS.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:underline"
                    >
                      {FACTS.officialWebsite.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Known For</dt>
                  <dd className="text-base text-white/90">{FACTS.knownFor.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Quick Facts Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Quick Facts
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Name</dt>
                <dd className="text-lg text-white/90">Camryn Jackson (Campaigne)</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Location</dt>
                <dd className="text-lg text-white/90">United States</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Roles</dt>
                <dd className="text-lg text-white/90">Artist • Author • Filmmaker • App Developer</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Genres</dt>
                <dd className="text-lg text-white/90">R&B / Hip-Hop / House / Experimental</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Latest Releases</dt>
                <dd className="text-lg text-white/90">
                  {latestReleases.map((work, idx) => (
                    <span key={work.id}>
                      {work.title}
                      {idx < latestReleases.length - 1 ? " • " : ""}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Label / Publisher</dt>
                <dd className="text-lg text-white/90">IAM Records / The Scribes Publishing</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Website</dt>
                <dd className="text-lg text-white/90">
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline"
                  >
                    {siteUrl.replace(/^https?:\/\//, "")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Linktree</dt>
                <dd className="text-lg text-white/90">
                  <a
                    href={linktreeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline"
                  >
                    tr.ee/V7UH3N3M74
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          {/* Press Bio Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Press Bio
            </h2>

            {/* Short Bio */}
            <div className="mb-12">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-brand-gold">Short</h3>
                <CopyButton text={shortBio} label="Copy Bio" />
              </div>
              <p className="text-lg leading-relaxed text-white/90 bg-black/20 p-6 rounded-lg border border-brand-gold/20">
                {shortBio}
              </p>
            </div>

            {/* Medium Bio */}
            <div className="mb-12">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-brand-gold">Medium</h3>
                <CopyButton text={mediumBio} label="Copy Bio" />
              </div>
              <div className="text-lg leading-relaxed text-white/90 bg-black/20 p-6 rounded-lg border border-brand-gold/20 whitespace-pre-line">
                {mediumBio}
              </div>
            </div>

            {/* Long Bio */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-brand-gold">Long</h3>
                <CopyButton text={longBio} label="Copy Bio" />
              </div>
              <div className="text-lg leading-relaxed text-white/90 bg-black/20 p-6 rounded-lg border border-brand-gold/20 whitespace-pre-line space-y-4">
                {longBio.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Featured Projects
            </h2>
            <p className="text-white/60 mb-8">
              What should press look at first? Explore these key works across books, music, and apps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
          </section>

          {/* Assets / Downloads */}
          <section id="downloads" className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Assets / Downloads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/20 p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 transition-colors">
                <h3 className="text-xl font-semibold text-brand-gold mb-2">Press Photos (ZIP)</h3>
                <p className="text-white/60 mb-4 text-sm">
                  High-resolution press photos for media use.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  Download
                </a>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 transition-colors">
                <h3 className="text-xl font-semibold text-brand-gold mb-2">Logos (SVG / PNG)</h3>
                <p className="text-white/60 mb-4 text-sm">
                  Official logos and brand assets in multiple formats.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  Download
                </a>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 transition-colors">
                <h3 className="text-xl font-semibold text-brand-gold mb-2">Album Covers (ZIP)</h3>
                <p className="text-white/60 mb-4 text-sm">
                  High-resolution album artwork for all releases.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  Download
                </a>
              </div>

              <div className="bg-black/20 p-6 rounded-lg border border-brand-gold/20 hover:border-brand-gold/40 transition-colors">
                <h3 className="text-xl font-semibold text-brand-gold mb-2">One-Sheet (PDF)</h3>
                <p className="text-white/60 mb-4 text-sm">
                  Complete artist one-sheet with key information.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  Download
                </a>
              </div>
            </div>
          </section>

          {/* Social / Streaming Links */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Social / Streaming Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
              >
                Linktree
              </a>
            </div>
          </section>

          {/* Press Contact */}
          <section id="press-contact" className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Press Contact
            </h2>
            <p className="text-lg text-white/90 mb-6">
              For bookings, press inquiries, and collaborations:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a
                href={`mailto:${pressEmail}`}
                className="text-2xl font-semibold text-brand-gold hover:underline transition-colors"
              >
                {pressEmail}
              </a>
              <CopyButton text={pressEmail} label="Copy Email" />
            </div>
            <div className="bg-black/20 p-6 rounded-lg border border-brand-gold/20">
              <h3 className="text-lg font-semibold text-brand-gold mb-2">Management / Representation</h3>
              <p className="text-white/60">
                Contact information for management and representation will be available here.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
