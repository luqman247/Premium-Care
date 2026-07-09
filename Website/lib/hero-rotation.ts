import type { EditorialPhoto } from "@/lib/photography";
import { PHOTOGRAPHY } from "@/lib/photography";

export type HeroRotationPhoto = EditorialPhoto;

/** Curated hero rotation — premium, warm, elderly-friendly editorial photography */
export const HERO_ROTATION: HeroRotationPhoto[] = [
  PHOTOGRAPHY.hero,
  PHOTOGRAPHY.personalCare,
  PHOTOGRAPHY.companionship,
  PHOTOGRAPHY.palliative,
  PHOTOGRAPHY.calmInterior,
  PHOTOGRAPHY.professionalTraining,
];

export const HERO_ROTATION_INTERVAL_MS = 10_000;
export const HERO_ROTATION_FADE_MS = 1_800;
