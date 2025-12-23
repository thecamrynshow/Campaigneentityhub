import { Metadata } from "next";
import Image from "next/image";
import { getSiteUrl } from "@/src/lib/utils";
import { getWebPageSchema, getMovieSchema } from "@/src/lib/structured-data";
import { ENTITY_ID } from "@/src/content/entity";

const siteUrl = getSiteUrl();

const imdbUrl = "https://www.imdb.com/name/nm13817235/";
const amazonPrimeUrl = "https://www.amazon.com/gp/video/detail/B0D86CSWWX/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0D862CL5F&qid=1766461841314";

export const metadata: Metadata = {
  title: "Acting & Film",
  description:
    "Screen appearances and film work by Camryn Jackson (professionally known as Campaigne).",
  openGraph: {
    title: "Acting & Film | Campaigne",
    description: "Screen appearances and film work by Camryn Jackson (Campaigne).",
    url: `${siteUrl}/acting`,
  },
  alternates: {
    canonical: `${siteUrl}/acting`,
  },
};

export default function ActingPage() {
  const webPageSchema = getWebPageSchema();
  const bonusTripSchema = getMovieSchema({
    name: "Bonus Trip",
    datePublished: "2024",
    url: amazonPrimeUrl,
    imdbUrl: imdbUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bonusTripSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero */}
          <section className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-gold font-serif tracking-tight">
              Acting & Film
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Screen appearances and film work by Camryn Jackson (professionally known as Campaigne).
            </p>
          </section>

          {/* Credits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Credits
            </h2>
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-brand-gold mb-4">
                Bonus Trip (2024)
              </h3>
              <p className="text-white/60 mb-6 text-sm">
                Film
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={amazonPrimeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  Watch on Amazon Prime Video
                </a>
                <a
                  href={imdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-brand-gold text-brand-gold rounded-md font-semibold hover:bg-brand-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  View on IMDb
                </a>
              </div>
            </div>
          </section>

          {/* Photos */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-square rounded-xl overflow-hidden group shadow-2xl">
                <Image
                  src="/images/photos/Bonus Triip.jpg"
                  alt="Bonus Trip - Film still"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden group shadow-2xl">
                <Image
                  src="/images/photos/Camryn Jackson and Bonus Trip cast at Premiere.JPG"
                  alt="Camryn Jackson and Bonus Trip cast at Premiere"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* Professional Profiles */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-brand-gold font-serif">
              Professional Profiles
            </h2>
            <div className="space-y-4">
              <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-brand-gold mb-2">
                  IMDb
                </h3>
                <p className="text-white/60 mb-4 text-sm">
                  Primary professional profile for film and television credits.
                </p>
                <a
                  href={imdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline text-base"
                >
                  {imdbUrl}
                </a>
              </div>
            </div>
          </section>

          {/* Identity Note */}
          <section className="mb-12">
            <div className="bg-black/20 border border-brand-gold/20 rounded-lg p-4">
              <p className="text-sm text-white/70 leading-relaxed">
                This page documents acting and film work by Camryn Jackson, professionally known as Campaigne.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

