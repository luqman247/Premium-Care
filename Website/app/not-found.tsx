import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";
import { COMPANY } from "@/lib/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-ivory section-padding flex flex-col items-center justify-center text-center page-margin">
      <BrandWordmark variant="navy" className="mx-auto" />
      <h1 className="type-section-title text-midnight mt-12">
        Siden findes ikke
      </h1>
      <p className="text-[17px] leading-body text-midnight/70 mt-4 max-w-[36ch]">
        Linket kan være forkert, eller siden er flyttet. Ring, hvis du har brug
        for hjælp nu.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <Link href="/" className="btn-primary">
          Til forsiden
        </Link>
        <a href={COMPANY.phone.href} className="btn-secondary">
          {COMPANY.phone.display}
        </a>
      </div>
    </div>
  );
}
