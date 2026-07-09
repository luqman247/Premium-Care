"use client";

import { EDITORIAL_TICKER_STATEMENTS } from "@/lib/editorial-ticker";

export function EditorialTicker() {
  const items = [...EDITORIAL_TICKER_STATEMENTS, ...EDITORIAL_TICKER_STATEMENTS];

  return (
    <div
      className="editorial-ticker border-y border-midnight/[0.06] bg-ivory overflow-hidden"
      aria-label="Premium Care værdier"
    >
      <div className="editorial-ticker-track">
        {items.map((statement, index) => (
          <span key={`${statement}-${index}`} className="editorial-ticker-item">
            {statement}
          </span>
        ))}
      </div>
    </div>
  );
}
