import distributionData from "@/data/dam/distribution-usage.json";
import type { UsageChannel } from "@/lib/dam/types";

export const DISTRIBUTION_CHANNEL_DEFINITIONS = [
  { key: "homepage", label: "Homepage", usageLabel: "Used on Homepage" },
  { key: "municipality-pack", label: "Municipality Pack", usageLabel: "Used in Municipality Pack" },
  { key: "investor-presentation", label: "Investor Presentation", usageLabel: "Used in Investor Presentation" },
  { key: "recruitment", label: "Recruitment", usageLabel: "Used in Recruitment" },
  { key: "brochure", label: "Brochure", usageLabel: "Used in Brochure" },
  { key: "linkedin-banner", label: "LinkedIn Banner", usageLabel: "Used in LinkedIn Banner" },
  { key: "email-signature", label: "Email Signature", usageLabel: "Used in Email Signature" },
] as const;

export type DistributionChannelKey =
  (typeof DISTRIBUTION_CHANNEL_DEFINITIONS)[number]["key"];

type DistributionUsageMap = Record<string, Partial<Record<DistributionChannelKey, boolean>>>;

const usageMap = distributionData as DistributionUsageMap;

export function formatImageLabel(imageNumber: number): string {
  return `IMG ${String(imageNumber).padStart(3, "0")}`;
}

export function getDistributionChannels(assetId: string): UsageChannel[] {
  const overrides = usageMap[assetId] ?? {};

  return DISTRIBUTION_CHANNEL_DEFINITIONS.map((channel) => ({
    key: channel.key,
    label: channel.label,
    usageLabel: channel.usageLabel,
    used: Boolean(overrides[channel.key]),
  }));
}

export function countActiveDistributionChannels(channels: UsageChannel[]): number {
  return channels.filter((channel) => channel.used).length;
}

export function distributionMatchesSearch(channels: UsageChannel[], query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  return channels.some(
    (channel) =>
      channel.used &&
      (channel.label.toLowerCase().includes(q) ||
        channel.key.replace(/-/g, " ").includes(q)),
  );
}
