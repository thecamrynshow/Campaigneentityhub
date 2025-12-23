import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-brand-gold/10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-6">
          <p className="text-white/50 text-sm leading-relaxed">
            <strong className="text-brand-gold font-medium">Canonical Entity Hub</strong> • Official metadata, images, and links.
          </p>
        </div>
        <div className="text-center">
          <p className="text-white/40 text-xs mb-2">Identity & References</p>
          <Link
            href="/disambiguation"
            className="text-brand-gold/60 hover:text-brand-gold text-xs transition-colors"
          >
            Identity Clarification
          </Link>
        </div>
      </div>
    </footer>
  );
}

