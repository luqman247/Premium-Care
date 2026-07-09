import { NextResponse } from "next/server";
import { isImageProviderConfigured } from "@/lib/dam/image-provider";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    providerConfigured: isImageProviderConfigured(),
    provider: "openai",
    model: process.env.OPENAI_IMAGE_MODEL?.trim() || "dall-e-3",
  });
}
