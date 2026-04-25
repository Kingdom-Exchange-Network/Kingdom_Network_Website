"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CrownLogo from "./CrownLogo";

const navLinks = [
  { href: "/directory", label: "Directory" },
  { href: "/missions", label: "Missions" },
  { href: "/news", label: "News & Events" },
  { href: "/prayer", label: "Prayer" },
  { href: "/about", label: "About" },
  { href: "/donate", label: "Donate" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold-thin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-gold group-hover:text-gold-light transition-colors duration-200">
              <CrownLogo size={28} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-cream tracking-wide">
                Kingdom Exchange
              </span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-cream/50">
                Mission Network
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm px-3 py-1.5 tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-cream/70 hover:text-cream"
                } ${
                  link.label === "Donate"
                    ? "ml-2 border border-gold/40 text-gold hover:bg-gold hover:text-navy px-4 py-1.5"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream/70 hover:text-cream p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-light border-t border-gold-thin px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-sm py-2.5 px-3 tracking-wide transition-colors duration-200 border-b border-navy-border last:border-b-0 ${
                  pathname === link.href ? "text-gold" : "text-cream/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
