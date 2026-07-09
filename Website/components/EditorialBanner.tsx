import { DamImage } from "@/components/DamImage";
import type { PublicImageCategory } from "@/lib/dam/public-image";
import { PHOTO_SIZES } from "@/lib/photography";

type EditorialBannerProps = {
  assetId: string;
  category?: PublicImageCategory;
  alt?: string;
  priority?: boolean;
};

export function EditorialBanner({
  assetId,
  category = "details",
  alt,
  priority = false,
}: EditorialBannerProps) {
  return (
    <div className="editorial-banner" aria-hidden={alt ? undefined : true}>
      <DamImage
        assetId={assetId}
        category={category}
        fill
        sizes={PHOTO_SIZES.service}
        alt={alt ?? ""}
        priority={priority}
      />
    </div>
  );
}
