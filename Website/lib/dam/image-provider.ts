import "server-only";

import type { Orientation } from "@/lib/dam/types";

const OPENAI_IMAGE_URL = "https://api.openai.com/v1/images/generations";

export function isImageProviderConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}

function resolveOpenAiSize(
  width: number,
  height: number,
  orientation: Orientation,
): "1024x1024" | "1792x1024" | "1024x1792" {
  if (orientation === "square" || Math.abs(width - height) < 100) {
    return "1024x1024";
  }
  if (orientation === "portrait" || height > width) {
    return "1024x1792";
  }
  return "1792x1024";
}

export async function generateImageWithProvider(
  prompt: string,
  options: { width: number; height: number; orientation: Orientation },
): Promise<Buffer> {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const size = resolveOpenAiSize(options.width, options.height, options.orientation);
  const model = process.env.OPENAI_IMAGE_MODEL?.trim() || "dall-e-3";

  const response = await fetch(OPENAI_IMAGE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt: prompt.slice(0, 4000),
      n: 1,
      size,
      response_format: "b64_json",
      quality: "hd",
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Image generation failed: ${errorBody.slice(0, 300)}`);
  }

  const data = (await response.json()) as {
    data?: { b64_json?: string }[];
  };

  const b64 = data.data?.[0]?.b64_json;
  if (!b64) {
    throw new Error("Image generation returned no image data");
  }

  return Buffer.from(b64, "base64");
}
