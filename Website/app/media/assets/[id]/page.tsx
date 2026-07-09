import Link from "next/link";
import { notFound } from "next/navigation";
import { DamAssetDetail } from "@/components/dam/DamAssetDetail";
import { buildAssetProfile } from "@/lib/dam/asset-profile";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MediaAssetDetailPage({ params }: PageProps) {
  const { id } = await params;
  const profile = buildAssetProfile(id);

  if (!profile) notFound();

  return (
    <div className="dam-page">
      <div className="dam-page-header">
        <Link href="/media/library" className="dam-text-link">
          ← Library
        </Link>
        <h1 className="dam-page-title">{profile.asset.title}</h1>
        <p className="dam-page-description">
          {profile.asset.id} · Scene {String(profile.asset.sceneNumber).padStart(2, "0")}-
          {String(profile.asset.imageNumber).padStart(3, "0")}
        </p>
      </div>
      <DamAssetDetail profile={profile} />
    </div>
  );
}
