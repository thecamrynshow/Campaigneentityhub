import { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/utils";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Camryn Jackson (Campaigne).",
  openGraph: {
    title: "Contact | Campaigne",
    description: "Get in touch.",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center text-brand-gold font-serif">
          Contact
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              General Inquiries
            </h2>
            <p className="text-lg text-white/90 mb-4">
              For general inquiries, collaborations, or questions:
            </p>
            <a
              href="mailto:camryncjackson@gmail.com"
              className="text-brand-gold hover:underline text-lg font-semibold"
            >
              camryncjackson@gmail.com
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Press Inquiries
            </h2>
            <p className="text-lg text-white/90 mb-4">
              For press, media, and interview requests:
            </p>
            <a
              href="mailto:camryncjackson@gmail.com"
              className="text-brand-gold hover:underline text-lg font-semibold"
            >
              camryncjackson@gmail.com
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-brand-gold">
              Business & Licensing
            </h2>
            <p className="text-lg text-white/90 mb-4">
              For business inquiries, licensing, and partnerships:
            </p>
            <a
              href="mailto:camryncjackson@gmail.com"
              className="text-brand-gold hover:underline text-lg font-semibold"
            >
              camryncjackson@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

