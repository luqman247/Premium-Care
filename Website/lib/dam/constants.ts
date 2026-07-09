import type { AssetStatus } from "@/lib/dam/types";

export const STATUS_LABELS: Record<AssetStatus, string> = {
  planned: "Planned",
  scheduled: "Scheduled",
  shot: "Shot",
  selected: "Selected",
  editing: "Editing",
  "colour-grading": "Colour Grading",
  approved: "Approved",
  optimised: "Optimised",
  published: "Published",
  archived: "Archived",
};

export const STATUS_COLOURS: Record<AssetStatus, string> = {
  planned: "dam-badge-planned",
  scheduled: "dam-badge-scheduled",
  shot: "dam-badge-shot",
  selected: "dam-badge-selected",
  editing: "dam-badge-editing",
  "colour-grading": "dam-badge-grading",
  approved: "dam-badge-approved",
  optimised: "dam-badge-optimised",
  published: "dam-badge-published",
  archived: "dam-badge-archived",
};

export const SCENE_NAMES: Record<number, string> = {
  0: "Brand Assets",
  1: "Homepage Hero",
  2: "Services",
  3: "About",
  4: "Trust",
  5: "Municipalities",
  6: "Careers",
  7: "Founder Story",
  8: "Detail Shots",
};
