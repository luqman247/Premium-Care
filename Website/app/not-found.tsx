import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";
import { CrestSeal } from "@/components/CrestSeal";
import { CREST_SIZES } from "@/lib/brand";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-ivory section-padding flex flex-col items-center justify-center text-center page-margin">
      <CrestSeal
        size={CREST_SIZES.sm}
        decorative
        className="!p-0 mb-8"
      />
      <BrandWordmark variant="navy" className="mx-auto" />
      <h1 className="text-[30px] leading-normal text-midnight mt-12">
        Siden findes ikke
      </h1>
      <p className="text-[17px] leading-body text-midnight/70 mt-4 max-w-[42ch]">
        Den side, du leder efter, er ikke tilgængelig. Du kan vende tilbage til
        forsiden eller kontakte os direkte.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Til forsiden
      </Link>
    </div>
  );
}
