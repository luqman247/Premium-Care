import { notFound } from "next/navigation";
import { DamPromptView } from "@/components/dam/DamPromptView";
import {
  buildPlannedPromptDocuments,
  readPromptFile,
  writePromptFile,
} from "@/lib/dam/prompt-files";
import { renderPromptMarkdown } from "@/lib/dam/prompt-document";
import { getAllAssets } from "@/lib/dam/registry.server";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export default async function MediaPromptDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const assets = getAllAssets();
  const documents = buildPlannedPromptDocuments(assets);
  const document = documents.find((entry) => entry.slug === slug);

  if (!document) {
    notFound();
  }

  let markdown = readPromptFile(slug);
  if (!markdown) {
    markdown = renderPromptMarkdown(document);
    writePromptFile(slug, markdown);
  }

  return <DamPromptView document={document} markdown={markdown} />;
}
