import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyStatement } from "@/components/PolicyStatement";
import { getTrustPolicy, TRUST_POLICIES } from "@/lib/trust-policies";

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

  return {
    title: `${policy.title} | Premium Care`,
    description: policy.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${policy.title} | Premium Care`,
      description: policy.description,
      url: `https://premiumcare.dk/${slug}`,
    },
  };
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getTrustPolicy(slug);
  if (!policy) notFound();

  return <PolicyStatement policy={policy} />;
}
