"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";
import { WORDMARK_HEIGHT } from "@/lib/brand";

export function Wordmark() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      setVisible(!isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible && scrolled) return null;

  return (
    <Link
      href="/"
      className="fixed top-5 left-[8%] z-50 brand-wordmark-wrap transition-opacity duration-300 focus-ring"
      style={{ opacity: visible ? 1 : 0 }}
      aria-label="Premium Care - forsiden"
    >
      <BrandWordmark
        variant="navy"
        height={WORDMARK_HEIGHT.header}
        priority
        className="brand-wordmark-img"
      />
    </Link>
  );
}
