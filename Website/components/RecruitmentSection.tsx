import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { COMPANY } from "@/lib/company";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { PHOTO_SIZES } from "@/lib/photography";
import {
  RECRUITMENT_EMAIL,
  RECRUITMENT_REGION,
  WORKPLACE_BENEFITS,
  WORKPLACE_PROMISES,
} from "@/lib/recruitment";

type RecruitmentSectionProps = {
  variant?: "ivory" | "midnight" | "quiet";
};

export function RecruitmentSection({ variant = "ivory" }: RecruitmentSectionProps) {
  const isQuiet = variant === "quiet";
  const isMidnight = variant === "midnight";
  const textClass = isMidnight ? "text-ivory" : "text-midnight";
  const mutedClass = isMidnight ? "text-ivory/80" : "text-midnight/80";

  if (isQuiet) {
    return (
      <section
        className="section-padding page-margin bg-ivory section-rule"
        aria-labelledby="recruitment-heading"
      >
        <div className="reading-column">
          <p className="type-eyebrow text-midnight/60">{RECRUITMENT_REGION}</p>
          <h2
            id="recruitment-heading"
            className="type-section-title text-midnight mt-3"
          >
            Bliv en del af Premium Care
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
            Vi søger faglige plejemedarbejdere, der vil gøre arbejdet ordentligt -
            med tid til borgeren og respekt for kollegerne
          </p>
          <p className="mt-8">
            <Link
              href="/karriere"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Bliv en del af Premium Care
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`section-padding page-margin ${isMidnight ? "bg-midnight" : "bg-ivory"}`}
      aria-labelledby="recruitment-heading"
    >
      <div className="reading-column">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,280px)] gap-10 items-start">
          <div>
            <p className={`type-eyebrow ${isMidnight ? "text-gold" : "text-midnight/60"}`}>
              {RECRUITMENT_REGION}
            </p>
            <h2
              id="recruitment-heading"
              className={`type-section-title ${textClass} mt-3`}
            >
              Bliv en del af Premium Care
            </h2>
            <p className={`text-[19px] leading-body ${mutedClass} mt-6 max-w-[55ch]`}>
              {WORKPLACE_PROMISES[0].body}
            </p>
            <ul className={`mt-8 space-y-3 list-none text-[17px] leading-body ${mutedClass}`}>
              {WORKPLACE_BENEFITS.slice(0, 4).map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${RECRUITMENT_EMAIL}?subject=${encodeURIComponent("Ansøgning")}`}
                className="btn-primary"
              >
                Send en ansøgning
              </a>
              <Link href="/karriere" className="btn-secondary">
                Bliv en del af Premium Care
              </Link>
            </div>
            <p className={`text-[13px] mt-6 ${isMidnight ? "text-ivory/60" : "text-midnight/60"}`}>
              Spørgsmål? Ring{" "}
              <a href={COMPANY.phone.href} className="underline underline-offset-4 focus-ring">
                {COMPANY.phone.display}
              </a>
            </p>
          </div>
          <figure className="relative w-full aspect-[4/3]">
            <DamImage
              assetId={ASSET_IDS.careersTraining}
              category="careers"
              fill
              sizes={PHOTO_SIZES.section}
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
