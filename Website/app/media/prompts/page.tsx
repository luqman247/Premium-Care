import { DamPromptsBrowser } from "@/components/dam/DamPromptsBrowser";
import { buildPlannedPromptDocuments } from "@/lib/dam/prompt-files";
import { getAllAssets } from "@/lib/dam/registry.server";

export const dynamic = "force-dynamic";

export default function MediaPromptsPage() {
  const documents = buildPlannedPromptDocuments(getAllAssets());

  return <DamPromptsBrowser documents={documents} />;
}
