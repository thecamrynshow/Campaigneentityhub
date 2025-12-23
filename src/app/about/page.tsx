import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";
import { getAboutPageSchema } from "@/src/lib/structured-data";
import { getSortedSocialLinks } from "@/src/lib/social-links";
import { shortBio, mediumBio, longBio } from "@/src/content/bio";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Camryn Jackson (Campaigne) - artist, author, filmmaker, and app developer creating works that transcend boundaries.",
  openGraph: {
    title: "About | Campaigne",
    description:
      "Learn about Camryn Jackson (Campaigne) - artist, author, filmmaker, and app developer.",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  const aboutPageSchema = getAboutPageSchema();
  const socialLinks = getSortedSocialLinks();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold mb-12 text-center text-brand-gold font-serif">
            About
          </h1>

          {/* Short Bio */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Bio (Short)
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              {shortBio}
            </p>
          </section>

          {/* Medium Bio */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Bio (Medium)
            </h2>
            <div className="text-lg leading-relaxed text-white/90 whitespace-pre-line">
              {mediumBio}
            </div>
          </section>

          {/* Long Bio */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Bio (Long)
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/90 whitespace-pre-line">
              {longBio}
            </div>
          </section>

          {/* Roles */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Roles
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-white/90">
              <li>Artist</li>
              <li>Author</li>
              <li>Filmmaker</li>
              <li>App Developer</li>
              <li>Musician</li>
            </ul>
          </section>

          {/* Official Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Official Links
            </h2>
            <p className="text-white/60 mb-4">
              Connect with Campaigne across platforms:
            </p>
            <ul className="space-y-3 text-lg text-white/90">
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Canonical Notes
            </h2>
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

