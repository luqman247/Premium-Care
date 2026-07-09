"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function MediaLibraryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Library unavailable</h1>
        <p className="dam-page-description">
          The asset library could not load. Try again, or return to the media dashboard
        </p>
      </div>
      <div className="dam-prompts-actions">
        <button type="button" className="dam-btn dam-btn--primary" onClick={reset}>
          Try again
        </button>
        <Link href="/media" className="dam-btn dam-btn--ghost">
          Media dashboard
        </Link>
      </div>
    </div>
  );
}
