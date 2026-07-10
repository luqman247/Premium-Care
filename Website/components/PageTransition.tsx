"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 420);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`page-transition-overlay ${isTransitioning ? "active" : ""}`}
      aria-hidden="true"
    />
  );
}
