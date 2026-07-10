import { DamImage } from "@/components/DamImage";
import type { PublicImageCategory } from "@/lib/dam/public-image";
import { PHOTO_SIZES } from "@/lib/photography";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  assetId: string;
  category?: PublicImageCategory;
  objectPosition?: string;
  eyebrow?: string;
};

/** Full-bleed cinematic page hero — reuses homepage cinematic language */
export function PageHero({
  title,
  subtitle,
  assetId,
  category = "hero",
  objectPosition = "center 38%",
  eyebrow,
}: PageHeroProps) {
  return (
    <header className="editorial-page-hero" data-header-tone="dark">
      <div className="editorial-page-hero-media" aria-hidden="true">
        <DamImage
          assetId={assetId}
          category={category}
          fill
          priority
          sizes={PHOTO_SIZES.hero}
          objectPosition={objectPosition}
          className="object-cover"
        />
      </div>
      <div className="editorial-page-hero-veil" aria-hidden="true" />
      <div className="editorial-page-hero-content page-margin">
        <div className="editorial-page-hero-inner">
          {eyebrow ? (
            <p className="type-eyebrow text-ivory/55 mb-4">{eyebrow}</p>
          ) : null}
          <h1 className="hero-statement text-ivory">{title}</h1>
          {subtitle ? (
            <p className="hero-quality text-ivory/85 mt-4">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
