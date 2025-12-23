"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

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
              className="text-white/90 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md p-2 transition-colors"
              aria-label="Menu"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

