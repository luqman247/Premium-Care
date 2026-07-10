"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CrestSeal } from "@/components/CrestSeal";

type HeaderTone = "dark" | "light";

/** Header crest width — PC-BR-010 aspect yields ~51px max height */
const HEADER_CREST_SIZE = 40;

export function Wordmark() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [tone, setTone] = useState<HeaderTone>("light");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setCompact(window.scrollY > 48);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const darkHeader = document.querySelector<HTMLElement>("[data-header-tone='dark']");

    if (!darkHeader) {
      setTone("light");
      return;
    }

    const updateTone = () => {
      setTone(darkHeader.getBoundingClientRect().bottom > 24 ? "dark" : "light");
    };

    updateTone();

    const observer = new IntersectionObserver(
      () => updateTone(),
      { threshold: [0, 0.15, 0.5, 1] },
    );

    observer.observe(darkHeader);
    window.addEventListener("scroll", updateTone, { passive: true });
    window.addEventListener("resize", updateTone);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTone);
      window.removeEventListener("resize", updateTone);
    };
  }, [pathname]);

  return (
    <Link
      href="/"
      className={`site-header-wordmark site-header-wordmark--${tone}${
        compact ? " site-header-wordmark--compact" : ""
      } focus-ring`}
      aria-label="PremiumCare ApS - forsiden"
    >
      <span className="site-header-wordmark-stack" aria-hidden="true">
        <CrestSeal
          size={HEADER_CREST_SIZE}
          variant="white"
          decorative
          className={`site-header-crest site-header-wordmark-img site-header-wordmark-img--white${
            tone === "dark" ? " is-visible" : " is-hidden"
          }`}
        />
        <CrestSeal
          size={HEADER_CREST_SIZE}
          variant="navy"
          decorative
          className={`site-header-crest site-header-wordmark-img site-header-wordmark-img--navy${
            tone === "light" ? " is-visible" : " is-hidden"
          }`}
        />
      </span>
    </Link>
  );
}
