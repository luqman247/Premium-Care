"use client";

import Link from "next/link";
import { useState } from "react";
import type { PromptDocument } from "@/lib/dam/prompt-document";

type DamPromptViewProps = {
  document: PromptDocument;
  markdown: string;
};

export function DamPromptView({ document, markdown }: DamPromptViewProps) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(document.imagePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <p className="dam-prompts-back">
          <Link href="/media/prompts">← All prompts</Link>
        </p>
        <h1 className="dam-page-title">
          {document.slug} — {document.title}
        </h1>
        <p className="dam-page-description">
          {document.assetId} · {document.aspectRatio} · {document.resolution}
        </p>
      </div>

      <div className="dam-prompts-actions dam-prompts-actions--detail">
        <button type="button" className="dam-btn dam-btn--primary" onClick={copyPrompt}>
          {copied ? "Copied" : "Copy prompt"}
        </button>
        <Link href={`/media/generate`} className="dam-btn">
          Generate image
        </Link>
        <Link href={`/media/assets/${document.assetId}`} className="dam-btn dam-btn--ghost">
          Control centre
        </Link>
      </div>

      <article className="dam-prompt-markdown">
        <pre>{markdown}</pre>
      </article>
    </div>
  );
}
