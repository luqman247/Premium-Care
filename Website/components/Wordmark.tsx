"use client";

import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { useNav } from "@/components/Navigation";
import { ASSET_IDS } from "@/lib/dam/asset-ids";

/** Crest width — aspect yields ~44–46px height on desktop */
const CREST_WIDTH = 36;
const CREST_HEIGHT = 46;

export function Wordmark() {
  const { headerTone, headerCompact } = useNav();

  return (
    <Link
      href="/"
      className={[
        "site-header-mark-link",
        `site-header-mark-link--${headerTone}`,
        headerCompact ? "site-header-mark-link--compact" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="PremiumCare ApS - forside"
    >
      <span className="site-header-mark" aria-hidden="true">
        <span
          className={`site-header-mark-layer site-header-mark-layer--white${
            headerTone === "dark" ? " is-active" : ""
          }`}
        >
          <DamImage
            assetId={ASSET_IDS.brandCrestWhite}
            alt=""
            width={CREST_WIDTH}
            height={CREST_HEIGHT}
            priority
            quality={90}
            className="site-header-mark-img"
            sizes={`${CREST_WIDTH}px`}
            style={{
              width: CREST_WIDTH,
              height: "auto",
              maxHeight: CREST_HEIGHT,
              objectFit: "contain",
            }}
          />
        </span>
        <span
          className={`site-header-mark-layer site-header-mark-layer--navy${
            headerTone === "light" ? " is-active" : ""
          }`}
        >
          <DamImage
            assetId={ASSET_IDS.brandCrestNavy}
            alt=""
            width={CREST_WIDTH}
            height={CREST_HEIGHT}
            priority
            quality={90}
            className="site-header-mark-img"
            sizes={`${CREST_WIDTH}px`}
            style={{
              width: CREST_WIDTH,
              height: "auto",
              maxHeight: CREST_HEIGHT,
              objectFit: "contain",
            }}
          />
        </span>
      </span>
    </Link>
  );
}
