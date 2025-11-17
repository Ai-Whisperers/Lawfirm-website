'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center border-b border-solid border-white/20 bg-blue-dark/95 text-white backdrop-blur-sm">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="size-6 text-primary">
            <svg className="text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.487a1.5 1.5 0 0 1 1.06.44l7.25 7.25a1.5 1.5 0 0 1 0 2.122l-7.25 7.25a1.5 1.5 0 0 1-2.122 0L3.717 11.3a1.5 1.5 0 0 1 0-2.122l7.25-7.25a1.5 1.5 0 0 1 1.03-.44zM12 3.608L5.828 9.78l6.171 6.172 6.172-6.172L12 3.608z"></path>
            </svg>
          </div>
          <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-primary transition-colors">
            Cardozo & Associates
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
          <Link href="/" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/practice-areas" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Practice Areas
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary px-4 text-sm font-bold text-blue-dark transition-opacity hover:opacity-90"
          >
            <span className="truncate">Contact on WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-dark/98 backdrop-blur-sm border-t border-white/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/practice-areas"
              className="text-sm font-medium text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center rounded-lg h-10 bg-primary px-4 text-sm font-bold text-blue-dark transition-opacity hover:opacity-90"
            >
              Contact on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
