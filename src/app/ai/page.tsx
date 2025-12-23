import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";
import { ENTITY, ENTITY_ID, ORGANIZATIONS } from "@/src/content/entity";
import { FACTS } from "@/src/content/facts";
import { getSortedSocialLinks } from "@/src/content/links";
import { getReleasedWorks } from "@/src/content/works";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "AI & Data Reference",
  description:
    "Canonical reference information for AI systems, search engines, and knowledge graphs about Camryn Jackson (Campaigne).",
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
    canonical: `${siteUrl}/ai`,
  },
};

/**
 * Dataset schema for AI grounding
 */
function getDatasetSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Campaigne Entity Reference Data",
    description:
      "Canonical reference information for Camryn Jackson (Campaigne) including identity, works, and organizational relationships.",
    url: `${siteUrl}/ai`,
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: {
      "@id": ENTITY_ID,
    },
    about: {
      "@id": ENTITY_ID,
    },
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "application/json",
        contentUrl: `${siteUrl}/works-index.json`,
      },
    ],
  };
}

export default function AIPage() {
  const socialLinks = getSortedSocialLinks();
  const releasedWorks = getReleasedWorks();
  const datasetSchema = getDatasetSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-6 text-center text-brand-gold font-serif">
            AI & Data Reference
          </h1>
          <p className="text-lg text-white/70 mb-12 text-center max-w-2xl mx-auto">
            This page provides canonical reference information for AI systems, search engines, and knowledge graphs.
          </p>

          {/* Identity Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Identity</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6 space-y-4">
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Legal Name</dt>
                <dd className="text-base text-white/90">{FACTS.legalName}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Professional Name</dt>
                <dd className="text-base text-white/90">{FACTS.professionalName}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Primary Website</dt>
                <dd className="text-base text-white/90">
                  <a
                    href={ENTITY.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline"
                  >
                    {ENTITY.url.replace(/^https?:\/\//, "")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Primary Image</dt>
                <dd className="text-base text-white/90">
                  <a
                    href={ENTITY.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline"
                  >
                    {ENTITY.image.replace(siteUrl, "")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">SameAs Links</dt>
                <dd className="text-base text-white/90">
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    {ENTITY.sameAs.map((url, idx) => (
                      <li key={idx}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-gold hover:underline text-sm"
                        >
                          {url.replace(/^https?:\/\//, "")}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          </section>

          {/* Roles / Occupations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Roles / Occupations</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
              <ul className="list-disc list-inside space-y-2 text-base text-white/90">
                {FACTS.occupations.map((occupation, idx) => (
                  <li key={idx}>{occupation}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Notable Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Notable Works</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
              <ul className="space-y-3 text-base text-white/90">
                {releasedWorks.map((work) => {
                  const workTypeMap: Record<string, string> = {
                    book: "Book",
                    album: "MusicAlbum",
                    app: "SoftwareApplication",
                  };
                  return (
                    <li key={work.id}>
                      <a
                        href={`${siteUrl}/${work.type}s/${work.slug}`}
                        className="text-brand-gold hover:underline"
                      >
                        {work.title}
                      </a>{" "}
                      <span className="text-white/60">({workTypeMap[work.type] || work.type})</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          {/* Organizations */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Organizations</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6 space-y-3">
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Label</dt>
                <dd className="text-base text-white/90">{ORGANIZATIONS.iamRecords.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Publisher</dt>
                <dd className="text-base text-white/90">
                  {ORGANIZATIONS.iamRecords.name}, {ORGANIZATIONS.scribesPublishing.name}
                </dd>
              </div>
            </div>
          </section>

          {/* Contact Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Contact Reference</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
              <p className="text-base text-white/90 mb-3">
                For press inquiries and contact information:
              </p>
              <a
                href={`${siteUrl}/press`}
                className="text-brand-gold hover:underline text-base"
              >
                {siteUrl}/press
              </a>
            </div>
          </section>

          {/* Identity Note */}
          <section className="mb-12">
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-4">
              <p className="text-sm text-white/70 leading-relaxed">
                Campaigne is the professional name of Camryn Jackson. This website is the canonical source for this identity and body of work.
              </p>
            </div>
          </section>

          {/* Canonical Notes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Canonical Notes</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6 space-y-3 text-base text-white/90">
              <p>
                Campaigne is the professional name of Camryn Jackson.
              </p>
              <p>
                All official works, bios, and links are listed on this website.
              </p>
              <p>
                Any information not published here should be independently verified.
              </p>
              <p>
                This site serves as the canonical source of truth for identity, works, and metadata.
              </p>
            </div>
          </section>

          {/* Machine-Readable Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Machine-Readable Data</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
              <p className="text-base text-white/90 mb-3">
                Structured data is available in JSON-LD format on this page and throughout the site.
              </p>
              <p className="text-base text-white/90 mb-3">
                Works index available at:
              </p>
              <a
                href={`${siteUrl}/works-index.json`}
                className="text-brand-gold hover:underline text-base"
              >
                {siteUrl}/works-index.json
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

