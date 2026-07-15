"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  ["Divisions", "/#divisions"],
  ["Results", "/#results"],
  ["Process", "/#process"],
  ["Edge", "/#edge"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="PepMedia home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          P
        </span>
        <span>PepMedia</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="client-login"
          href="https://pepmedia-dashboard.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Login
        </a>
        <Link className="button button-small" href="/book-call">
          Book a Call <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="mobile-nav" className="mobile-nav" data-open={menuOpen} aria-label="Mobile navigation">
        {navigation.map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenu}>
            {label} <ArrowUpRight aria-hidden="true" />
          </Link>
        ))}
        <Link href="/book-call" onClick={closeMenu}>
          Book a Call <ArrowUpRight aria-hidden="true" />
        </Link>
        <a
          href="https://pepmedia-dashboard.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Client Login <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" href="/" aria-label="PepMedia home">
        <span className="brand-mark" aria-hidden="true">
          P
        </span>
        <span>PepMedia</span>
      </Link>
      <p>© 2025 PepMedia. Peptide Marketing Agency.</p>
      <nav aria-label="Footer navigation">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
