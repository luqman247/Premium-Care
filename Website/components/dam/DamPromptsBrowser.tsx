"use client";

import Link from "next/link";
import { useState } from "react";
import type { PromptDocument } from "@/lib/dam/prompt-document";

type DamPromptsBrowserProps = {
  documents: PromptDocument[];
};

export function DamPromptsBrowser({ documents }: DamPromptsBrowserProps) {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const copyPrompt = async (document: PromptDocument) => {
    await navigator.clipboard.writeText(document.imagePrompt);
    setCopiedSlug(document.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Editorial Prompts</h1>
        <p className="dam-page-description">
          {documents.length} planned asset{documents.length === 1 ? "" : "s"} · one Markdown file
          per image
        </p>
      </div>

      <p className="dam-prompts-intro">
        Production prompts saved in <code>content/media/prompts/</code>. Upload a generated image
        via Generate or the asset control centre — the DAM publishes automatically and the website
        updates everywhere that asset is referenced
      </p>

      <ul className="dam-prompts-list">
        {documents.map((document) => (
          <li key={document.slug} className="dam-prompts-item">
            <div className="dam-prompts-item-header">
              <Link href={`/media/prompts/${document.slug}`} className="dam-prompts-slug">
                {document.slug}
              </Link>
              <span className="dam-prompts-asset-id">{document.assetId}</span>
            </div>
            <h2 className="dam-prompts-title">{document.title}</h2>
            <p className="dam-prompts-excerpt">{document.emotionalObjective}</p>
            <p className="dam-prompts-meta">
              {document.aspectRatio} · {document.resolution}
            </p>
            <div className="dam-prompts-actions">
              <Link href={`/media/prompts/${document.slug}`} className="dam-btn">
                View prompt
              </Link>
              <button
                type="button"
                className="dam-btn dam-btn--primary"
                onClick={() => copyPrompt(document)}
              >
                {copiedSlug === document.slug ? "Copied" : "Copy prompt"}
              </button>
              <Link href={`/media/generate`} className="dam-btn dam-btn--ghost">
                Generate
              </Link>
              <Link href={`/media/assets/${document.assetId}`} className="dam-btn dam-btn--ghost">
                Control centre
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
