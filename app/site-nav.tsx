"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="site-nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav-link ${isActive(link.href) ? "is-active" : ""}`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="site-nav-actions">
          <span className="desktop-theme-toggle">
            <ThemeToggle />
          </span>
          <button
            type="button"
            className={`nav-menu-button ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <span className="mobile-theme-toggle">
        <ThemeToggle />
      </span>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-nav-link ${isActive(link.href) ? "is-active" : ""}`}
            aria-current={isActive(link.href) ? "page" : undefined}
            style={{ transitionDelay: menuOpen ? `${index * 55}ms` : "0ms" }}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            <span>0{index + 1}</span>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
