import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyStatement } from "@/components/PolicyStatement";
import { getTrustPolicy, TRUST_POLICIES } from "@/lib/trust-policies";
import { buildPageMetadata } from "@/lib/seo";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TRUST_POLICIES.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({
  params,
}: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getTrustPolicy(slug);
  if (!policy) return {};

  return buildPageMetadata({
    title: policy.title,
    description: policy.description,
    path: `/${slug}`,
  });
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getTrustPolicy(slug);
  if (!policy) notFound();

  return <PolicyStatement policy={policy} />;
}
