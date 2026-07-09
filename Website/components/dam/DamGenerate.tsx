"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import type { GenerationPackage } from "@/lib/dam/types";
import { STATUS_LABELS } from "@/lib/dam/constants";
import { formatImageLabel } from "@/lib/dam/distribution-channels";

type DamGenerateProps = {
  packages: GenerationPackage[];
  providerConfigured: boolean;
};

type CardState = {
  generating: boolean;
  uploading: boolean;
  error: string | null;
  published: boolean;
};

const DEFAULT_CARD_STATE: CardState = {
  generating: false,
  uploading: false,
  error: null,
  published: false,
};

function promptExcerpt(prompt: string, max = 220): string {
  if (prompt.length <= max) return prompt;
  return `${prompt.slice(0, max).trim()}…`;
}

export function DamGenerate({ packages, providerConfigured }: DamGenerateProps) {
  const [cardStates, setCardStates] = useState<Record<string, CardState>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const updateState = useCallback((id: string, patch: Partial<CardState>) => {
    setCardStates((prev) => ({
      ...prev,
      [id]: { ...(prev[id] ?? DEFAULT_CARD_STATE), ...patch },
    }));
  }, []);

  const getState = useCallback(
    (id: string): CardState => cardStates[id] ?? DEFAULT_CARD_STATE,
    [cardStates],
  );

  const copyPrompt = useCallback(async (pkg: GenerationPackage) => {
    await navigator.clipboard.writeText(pkg.imagePrompt);
    setCopiedId(pkg.assetId);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const generateImage = useCallback(async (pkg: GenerationPackage) => {
    updateState(pkg.assetId, { generating: true, error: null });

    try {
      const response = await fetch(`/api/dam/assets/${pkg.assetId}/generate`, {
        method: "POST",
      });
      const body = await response.json();

      if (!response.ok) {
        if (response.status === 503) {
          await navigator.clipboard.writeText(pkg.imagePrompt);
          updateState(pkg.assetId, {
            generating: false,
            error: "No API key — prompt copied to clipboard",
          });
          return;
        }
        throw new Error(body.error ?? "Generation failed");
      }

      updateState(pkg.assetId, { generating: false, published: true, error: null });
    } catch (error) {
      updateState(pkg.assetId, {
        generating: false,
        error: error instanceof Error ? error.message : "Generation failed",
      });
    }
  }, [updateState]);

  const uploadImage = useCallback(async (pkg: GenerationPackage, file: File) => {
    updateState(pkg.assetId, { uploading: true, error: null });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("version", "published");

    try {
      const response = await fetch(`/api/dam/assets/${pkg.assetId}/replace`, {
        method: "POST",
        body: formData,
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.error ?? "Upload failed");
      }

      updateState(pkg.assetId, { uploading: false, published: true, error: null });
    } catch (error) {
      updateState(pkg.assetId, {
        uploading: false,
        error: error instanceof Error ? error.message : "Upload failed",
      });
    }
  }, [updateState]);

  const activePackages = packages.filter((pkg) => !getState(pkg.assetId).published);

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <h1 className="dam-page-title">Editorial Image Generator</h1>
        <p className="dam-page-description">
          {activePackages.length} planned asset{activePackages.length === 1 ? "" : "s"} ·{" "}
          {packages.length} generation package{packages.length === 1 ? "" : "s"} ready
        </p>
      </div>

      {!providerConfigured ? (
        <div className="dam-generate-notice" role="status">
          <p>
            <strong>OPENAI_API_KEY</strong> is not configured. Use Copy Prompt to generate
            images in ChatGPT, then upload the result — the DAM will optimise and publish
            automatically
          </p>
        </div>
      ) : (
        <div className="dam-generate-notice dam-generate-notice--ready" role="status">
          <p>OpenAI image generation is configured. Click Generate Image to create and publish</p>
        </div>
      )}

      <div className="dam-generate-grid">
        {packages.map((pkg) => {
          const state = getState(pkg.assetId);
          const isDone = state.published;

          return (
            <article
              key={pkg.assetId}
              className={`dam-generate-card${isDone ? " is-published" : ""}`}
            >
              <div className="dam-generate-preview">
                {isDone ? (
                  <Image
                    src={`/api/dam/image/${pkg.assetId}`}
                    alt=""
                    fill
                    className="dam-generate-preview-image"
                    unoptimized
                    sizes="400px"
                  />
                ) : (
                  <div className="dam-generate-placeholder">
                    <span>{formatImageLabel(pkg.imageNumber)}</span>
                    <span>Scene {String(pkg.sceneNumber).padStart(2, "0")}</span>
                  </div>
                )}
              </div>

              <div className="dam-generate-body">
                <p className="dam-generate-meta">
                  {pkg.assetId} · Scene {String(pkg.sceneNumber).padStart(2, "0")}
                </p>
                <h2 className="dam-generate-title">{pkg.title}</h2>
                <p className="dam-generate-scene">{pkg.sceneName}</p>

                <div className="dam-generate-prompt">
                  <p className="dam-generate-prompt-label">Prompt preview</p>
                  <p className="dam-generate-prompt-text">{promptExcerpt(pkg.imagePrompt)}</p>
                </div>

                <div className="dam-generate-status">
                  <span className="dam-badge dam-badge-planned">
                    {isDone ? "Published" : STATUS_LABELS[pkg.status]}
                  </span>
                </div>

                {state.error ? (
                  <p className="dam-generate-error" role="alert">
                    {state.error}
                  </p>
                ) : null}

                <div className="dam-generate-actions">
                  <button
                    type="button"
                    className="dam-btn"
                    onClick={() => copyPrompt(pkg)}
                  >
                    {copiedId === pkg.assetId ? "Copied" : "Copy Prompt"}
                  </button>

                  <button
                    type="button"
                    className="dam-btn dam-btn--primary"
                    disabled={state.generating || state.uploading || isDone}
                    onClick={() => generateImage(pkg)}
                  >
                    {state.generating
                      ? "Generating…"
                      : providerConfigured
                        ? "Generate Image"
                        : "Copy & Generate"}
                  </button>

                  <label className="dam-btn dam-btn--ghost">
                    {state.uploading ? "Uploading…" : "Upload Image"}
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      className="dam-file-input"
                      disabled={state.uploading || state.generating}
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) uploadImage(pkg, file);
                        event.target.value = "";
                      }}
                    />
                  </label>

                  <Link href={`/media/assets/${pkg.assetId}`} className="dam-btn dam-btn--ghost">
                    Control centre
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
