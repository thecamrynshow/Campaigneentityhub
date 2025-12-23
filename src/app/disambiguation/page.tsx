import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";
import { ENTITY, ENTITY_ID } from "@/src/content/entity";
import { FACTS } from "@/src/content/facts";
import { getSortedSocialLinks } from "@/src/content/links";
import { getReleasedWorks } from "@/src/content/works";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Identity Clarification",
  description:
    "Identity clarification to distinguish Camryn Jackson (Campaigne) from others with similar names.",
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
    canonical: `${siteUrl}/disambiguation`,
  },
};

/**
 * WebPage schema for disambiguation
 */
function getDisambiguationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Identity Clarification – Camryn Jackson (Campaigne)",
    description:
      "Identity clarification page to distinguish this individual from others with similar names.",
    url: `${siteUrl}/disambiguation`,
    about: {
      "@id": ENTITY_ID,
    },
    isPartOf: {
      "@type": "WebSite",
      url: siteUrl,
    },
  };
}

export default function DisambiguationPage() {
  const socialLinks = getSortedSocialLinks();
  const releasedWorks = getReleasedWorks();
  const disambiguationSchema = getDisambiguationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disambiguationSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-6 text-center text-brand-gold font-serif">
            Identity Clarification
          </h1>
          <p className="text-lg text-white/70 mb-12 text-center max-w-2xl mx-auto">
            This page provides identity clarification to distinguish this individual from others with similar names.
          </p>

          {/* Primary Identity */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Primary Identity</h2>
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
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Official Website</dt>
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
                <dt className="text-sm font-semibold text-brand-gold/80 mb-1">Primary Roles</dt>
                <dd className="text-base text-white/90">{FACTS.occupations.join(", ")}</dd>
              </div>
            </div>
          </section>

          {/* Canonical Identifiers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Canonical Identifiers</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6 space-y-4">
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Official Website</dt>
                <dd className="text-base text-white/90">
                  <a
                    href={ENTITY.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline"
                  >
                    {ENTITY.url}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Official Social Profiles</dt>
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
              <div>
                <dt className="text-sm font-semibold text-brand-gold/80 mb-2">Official Works Pages</dt>
                <dd className="text-base text-white/90">
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    {releasedWorks.map((work) => (
                      <li key={work.id}>
                        <a
                          href={`${siteUrl}/${work.type}s/${work.slug}`}
                          className="text-brand-gold hover:underline text-sm"
                        >
                          {work.title} ({siteUrl}/{work.type}s/{work.slug})
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          </section>

          {/* Clarification Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-brand-gold">Clarification Statement</h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
              <p className="text-base text-white/90 leading-relaxed">
                This website represents the professional work and identity of Camryn Jackson known as Campaigne. Other individuals with similar or identical names are not affiliated unless explicitly stated.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

