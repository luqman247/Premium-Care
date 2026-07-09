export const ASSET_STATUSES = [
  "planned",
  "scheduled",
  "shot",
  "selected",
  "editing",
  "colour-grading",
  "approved",
  "optimised",
  "published",
  "archived",
] as const;

export type AssetStatus = (typeof ASSET_STATUSES)[number];

export const ASSET_PRIORITIES = ["low", "medium", "high", "critical"] as const;
export type AssetPriority = (typeof ASSET_PRIORITIES)[number];

export const MEDIA_TYPES = [
  "photography",
  "video",
  "drone",
  "brand-icon",
  "illustration",
  "certificate",
  "document",
  "marketing-pdf",
  "social-graphic",
  "recruitment",
  "training",
] as const;

export type MediaType = (typeof MEDIA_TYPES)[number];

export const ORIENTATIONS = ["landscape", "portrait", "square"] as const;
export type Orientation = (typeof ORIENTATIONS)[number];

export const IMAGE_VARIANTS = [
  "desktop",
  "tablet",
  "mobile",
  "retina",
  "thumbnail",
  "square",
  "portrait",
  "landscape",
  "open-graph",
  "social",
  "blur",
  "webp",
  "avif",
] as const;

export type ImageVariant = (typeof IMAGE_VARIANTS)[number];

export type AssetVersion = {
  versionNumber: number;
  src: string;
  uploadDate: string;
  note: string;
  approvedBy?: string;
  /** Lifecycle state when multiple versions exist — published wins on the website */
  status?: "draft" | "approved" | "published";
};

export type AssetVariants = Partial<Record<ImageVariant, string>>;

export type CreativeBrief = {
  sceneDescription: string;
  cameraNotes: string;
  emotionalObjective: string;
  composition: string;
  lighting: string;
  wardrobe: string;
  usageNotes: string;
  environment?: string;
  emotion?: string;
  purpose?: string;
  /** Production-quality prompt for AI image generation — built from brief fields */
  imagePrompt?: string;
};

export type GenerationPackage = {
  assetId: string;
  title: string;
  sceneNumber: number;
  imageNumber: number;
  sceneName: string;
  status: AssetStatus;
  imagePrompt: string;
  hasBrief: boolean;
  providerConfigured: boolean;
  orientation: Orientation;
  width: number;
  height: number;
  colourPalette: string[];
};

export type DamAsset = {
  id: string;
  sceneNumber: number;
  imageNumber: number;
  title: string;
  description: string;
  category: string;
  websitePages: string[];
  websiteComponents: string[];
  photographer: string;
  dateShot: string | null;
  status: AssetStatus;
  priority: AssetPriority;
  orientation: Orientation;
  aspectRatio: number;
  width: number;
  height: number;
  colourPalette: string[];
  dominantColours: string[];
  blurPlaceholder: string;
  altText: string;
  seoTitle: string;
  seoDescription: string;
  openGraphDescription: string;
  copyright: string;
  usageRights: string;
  versionNumber: number;
  uploadDate: string | null;
  lastModified: string;
  tags: string[];
  searchKeywords: string[];
  mediaType: MediaType;
  filename: string;
  src: string;
  objectPosition: string;
  sceneName: string;
  versions: AssetVersion[];
  variants: AssetVariants;
  creativeBrief?: CreativeBrief;
};

export type DamCatalog = {
  version: number;
  generatedAt: string;
  assets: DamAsset[];
};

export type EditorialPhoto = {
  assetId: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  authentic?: boolean;
};

export type ResolvedAsset = {
  id: string;
  /** Stable API route — always used for rendering so filesystem updates propagate */
  src: string;
  /** Resolved on-disk public path, if a file is available */
  publicSrc?: string | null;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  blurDataURL?: string;
  variants: AssetVariants;
  resolvedVariantSrc?: string | null;
};

export type DamDashboardStats = {
  totalImages: number;
  uploaded: number;
  missing: number;
  awaitingShoot: number;
  inEditing: number;
  published: number;
  unused: number;
  recentlyAdded: number;
  storageUsedMb: number;
};

export type DamFilters = {
  status?: AssetStatus | "all";
  page?: string;
  category?: string;
  orientation?: Orientation | "all";
  colour?: string;
  photographer?: string;
  priority?: AssetPriority | "all";
  search?: string;
  sort?: "date" | "title" | "scene" | "status" | "priority";
  sortDir?: "asc" | "desc";
};

export type UsageChannel = {
  key: string;
  label: string;
  used: boolean;
  usageLabel?: string;
};

export type SiteUsageLocation = {
  route: string;
  pageLabel: string;
  section: string;
  component: string;
};

export type OptimisationStatus = "optimised" | "partial" | "unoptimised" | "missing";

export type VariantAvailability = {
  available: boolean;
  path: string | null;
  sizeKb: number | null;
};

export type CropPreview = {
  label: string;
  objectPosition: string;
  aspectRatio: string;
};

export type AssetVersionEntry = {
  versionNumber: number;
  src: string;
  uploadDate: string;
  note: string;
  status?: "draft" | "approved" | "published";
  approvedBy?: string;
  sizeKb: number | null;
  isActive: boolean;
};

export type AssetProfile = {
  asset: DamAsset;
  previewUrl: string;
  usage: {
    locations: SiteUsageLocation[];
    pageCount: number;
    distribution: UsageChannel[];
    distributionCount: number;
  };
  altText: string;
  seoScore: number;
  accessibilityScore: number;
  fileSizeKb: number | null;
  fileSizeLabel: string;
  optimisationStatus: OptimisationStatus;
  webp: VariantAvailability;
  avif: VariantAvailability;
  lazyLoading: { enabled: boolean; note: string };
  blurPlaceholder: { configured: boolean; value: string | null };
  crops: CropPreview[];
  lastModified: string | null;
  versions: AssetVersionEntry[];
  reports: {
    accessibility: AccessibilityReport;
    seo: SeoReport;
    performance: PerformanceReport;
  };
  creativeBrief: CreativeBrief | null;
};

export type AssetSummary = {
  id: string;
  previewUrl: string;
  pageCount: number;
  seoScore: number;
  accessibilityScore: number;
  fileSizeLabel: string;
  optimisationStatus: OptimisationStatus;
  webpAvailable: boolean;
  avifAvailable: boolean;
  hasBlur: boolean;
  lazyLoading: boolean;
};

export type AccessibilityReport = {
  score: number;
  issues: string[];
  passed: string[];
};

export type SeoReport = {
  score: number;
  issues: string[];
  passed: string[];
};

export type PerformanceReport = {
  score: number;
  issues: string[];
  passed: string[];
  estimatedLoadKb: number;
};
