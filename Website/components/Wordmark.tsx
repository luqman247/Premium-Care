"use client";

import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { useNav } from "@/components/Navigation";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";

/** Intrinsic render size (sharp); CSS box uses --header-mark-* tokens */
/* Ed1.1 shield master is 600x720 (3:3.6) */
const CREST_WIDTH = 48;
const CREST_HEIGHT = 58;

export function Wordmark() {
  const { headerTone, headerCompact } = useNav();

  return (
    <Link
      href="/"
      className={[
        "site-header-mark-link",
        headerTone === "dark" ? "site-header-mark-link-ink" : "site-header-mark-link-bone",
        headerCompact ? "site-header-mark-link--compact" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${COMPANY.brandName} - forside`}
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
