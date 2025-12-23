import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";
import { getWorksByType } from "@/src/content/works";
import WorkCard from "@/src/components/WorkCard";
import { WorkType } from "@/src/content/works";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore books by Camryn Jackson (Campaigne). Official releases and works in progress.",
  openGraph: {
    title: "Books | Campaigne",
    description: "Explore books by Camryn Jackson (Campaigne).",
    url: `${siteUrl}/books`,
  },
  alternates: {
    canonical: `${siteUrl}/books`,
  },
};

export default function BooksPage() {
  const books = getWorksByType("book" as WorkType);
  const released = books.filter((b) => b.status === "released");
  const inProgress = books.filter((b) => b.status === "in-progress");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-brand-gold font-serif">
          Books
        </h1>

        {released.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-brand-gold">
              Released
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {released.map((book) => (
                <WorkCard key={book.id} work={book} />
              ))}
            </div>
          </section>
        )}

        {inProgress.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-brand-gold">
              In Progress
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {inProgress.map((book) => (
                <WorkCard key={book.id} work={book} />
              ))}
            </div>
          </section>
        )}

        {books.length === 0 && (
          <p className="text-center text-white/60 text-lg">
            No books available yet.
          </p>
        )}
      </div>
    </div>
  );
}

