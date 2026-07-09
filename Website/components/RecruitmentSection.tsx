import Link from "next/link";
import { HeroImage } from "@/components/HeroImage";
import { COMPANY } from "@/lib/company";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-images";
import { PHOTO_SIZES } from "@/lib/photography";

type RecruitmentSectionProps = {
  variant?: "ivory" | "midnight";
};

export function RecruitmentSection({ variant = "ivory" }: RecruitmentSectionProps) {
  const isMidnight = variant === "midnight";
  const textClass = isMidnight ? "text-ivory" : "text-midnight";
  const mutedClass = isMidnight ? "text-ivory/80" : "text-midnight/80";

  return (
    <section
      className={`section-padding page-margin ${isMidnight ? "bg-midnight" : "bg-ivory"}`}
      aria-labelledby="recruitment-heading"
    >
      <div className="reading-column">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,280px)] gap-10 items-start">
          <div>
            <h2
              id="recruitment-heading"
              className={`text-[30px] leading-normal ${textClass}`}
            >
              Bliv en del af Premium Care
            </h2>
            <p className={`text-[19px] leading-body ${mutedClass} mt-8 max-w-[55ch]`}>
              Vi leder efter mennesker, der bryder sig dybt om andre - og som vil arbejde
              med værdighed, struktur og faglighed
            </p>
            <ul className={`mt-8 space-y-4 list-none text-[17px] leading-body ${mutedClass}`}>
              <li>Professionel oplæring, mentorordning og løbende udvikling</li>
              <li>En arbejdsplads, hvor alle mødes med respekt - uanset baggrund</li>
              <li>Synlig ledelse og en kultur, hvor kvalitet og menneskelighed hænger sammen</li>
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("Ansøgning")}`}
                className={isMidnight ? "btn-primary" : "btn-primary"}
              >
                Send en ansøgning
              </a>
              <Link href="/karriere" className={isMidnight ? "btn-secondary" : "btn-secondary"}>
                Læs mere om arbejde hos os
              </Link>
            </div>
          </div>
          <figure className="relative w-full aspect-[4/3]">
            <HeroImage
              src={LEADERSHIP_IMAGES.careersTraining.src}
              alt={LEADERSHIP_IMAGES.careersTraining.alt}
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
