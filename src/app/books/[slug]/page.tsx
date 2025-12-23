import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSiteUrl } from "@/src/lib/utils";
import { getWorkBySlug } from "@/src/content/works";
import WorkHero from "@/src/components/WorkHero";
import {
  getBookSchema,
} from "@/src/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work || work.type !== "book") {
    return {
      title: "Book Not Found",
    };
  }

  const siteUrl = getSiteUrl();

  return {
    title: work.title,
    description: work.shortDescription,
    openGraph: {
      title: `${work.title} | Campaigne`,
      description: work.shortDescription,
      url: `${siteUrl}/books/${slug}`,
      images: [
        {
          url: `${siteUrl}${work.coverImage}`,
          width: 1200,
          height: 1200,
          alt: `${work.title} cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.title,
      description: work.shortDescription,
      images: [`${siteUrl}${work.coverImage}`],
    },
    alternates: {
      canonical: `${siteUrl}/books/${slug}`,
    },
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work || work.type !== "book") {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const bookSchema = getBookSchema(work);
  // Person schema is in root layout - no need to duplicate

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      <div
        className="min-h-screen"
        style={{
          background: `linear-gradient(to bottom, ${work.theme.bg} 0%, ${work.theme.accent2} 50%, black 100%)`,
        }}
      >
        <WorkHero work={work} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* About This Work */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold mb-6 font-serif"
              style={{ color: work.theme.accent }}
            >
              About This Work
            </h2>
            <div
              className="prose prose-lg max-w-none"
              style={{ color: work.theme.fg }}
            >
              <p className="text-lg leading-relaxed">{work.longDescription}</p>
            </div>
          </section>

          {/* Metadata */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold mb-6 font-serif"
              style={{ color: work.theme.accent }}
            >
              Metadata
            </h2>
            <dl className="space-y-4">
              {work.datePublished && (
                <div>
                  <dt
                    className="font-semibold mb-1"
                    style={{ color: work.theme.accent }}
                  >
                    Release Date
                  </dt>
                  <dd style={{ color: work.theme.fg }}>
                    {new Date(work.datePublished).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </dd>
                </div>
              )}
              {work.identifiers.isbn && (
                <div>
                  <dt
                    className="font-semibold mb-1"
                    style={{ color: work.theme.accent }}
                  >
                    ISBN
                  </dt>
                  <dd style={{ color: work.theme.fg }}>
                    {work.identifiers.isbn}
                  </dd>
                </div>
              )}
              <div>
                <dt
                  className="font-semibold mb-1"
                  style={{ color: work.theme.accent }}
                >
                  Creator
                </dt>
                <dd style={{ color: work.theme.fg }}>{work.creatorName}</dd>
              </div>
            </dl>
          </section>

          {/* Back to Index */}
          <div className="pt-8 border-t" style={{ borderColor: work.theme.accent }}>
            <Link
              href="/books"
              className="inline-flex items-center text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
              style={{
                color: work.theme.accent,
              }}
            >
              ← Back to Books
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

