import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-brand-purple/10 to-black flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-brand-gold font-serif">
          404
        </h1>
        <p className="text-xl text-white/90 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-brand-gold text-black rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

