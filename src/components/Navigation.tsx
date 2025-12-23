"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/music", label: "Music" },
    { href: "/apps", label: "Apps" },
    { href: "/acting", label: "Acting" },
    { href: "/press", label: "Press" },
    { href: "/photos", label: "Photos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-brand-gold/10"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold text-brand-gold hover:text-brand-gold/80 transition-colors tracking-tight"
            aria-label="Home"
          >
            Campaigne
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black rounded-md px-4 py-2",
                    isActive
                      ? "text-brand-gold bg-brand-gold/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md p-2 transition-colors"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-gold/10 bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black",
                      isActive
                        ? "text-brand-gold bg-brand-gold/10 border-l-2 border-brand-gold"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

