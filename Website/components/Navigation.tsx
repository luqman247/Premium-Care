"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Hjem" },
  { href: "/services", label: "Services" },
  { href: "/priser", label: "Priser" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/kommuner", label: "Til kommuner" },
  { href: "/karriere", label: "Karriere" },
  { href: "/tillid", label: "Tillid" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-[8%] z-50 text-[16px] font-body text-midnight hover:tracking-wide transition-all duration-300 focus-ring"
        aria-label="Åbn menu"
        aria-expanded={isOpen}
        aria-controls="site-nav-overlay"
      >
        Menu
      </button>

      <div
        id="site-nav-overlay"
        className={`nav-overlay ${isOpen ? "open" : ""}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-[8%] text-[16px] font-body text-midnight hover:tracking-wide transition-all duration-300 focus-ring"
          aria-label="Luk menu"
        >
          Luk
        </button>
        <nav className="flex flex-col items-center gap-6" aria-label="Primær">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-[24px] font-body text-midnight hover:font-medium transition-all duration-300 focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
