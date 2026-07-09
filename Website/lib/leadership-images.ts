import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { resolveAsEditorialPhoto } from "@/lib/dam/resolve";
import type { EditorialPhoto } from "@/lib/dam/types";

function leadershipPhoto(assetId: string): EditorialPhoto {
  return resolveAsEditorialPhoto(assetId);
}

export const LEADERSHIP_IMAGES = {
  ceoSmiling: leadershipPhoto(ASSET_IDS.leadershipSmiling),
  ceoFormal: leadershipPhoto(ASSET_IDS.leadershipFormal),
  careersTraining: leadershipPhoto(ASSET_IDS.careersTraining),
  pressPortrait: leadershipPhoto(ASSET_IDS.leadershipPress),
} as const;
