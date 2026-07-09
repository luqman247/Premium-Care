"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SiteChromeProps = {
  children: ReactNode;
};

/** Hides public-site chrome on DAM routes */
export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  if (pathname?.startsWith("/media")) return null;
  return <>{children}</>;
}
