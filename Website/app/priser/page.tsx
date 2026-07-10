import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Gratis hjemmepleje",
  description:
    "Frit valg af privat hjemmepleje når du er visiteret af kommunen - uden ekstra betaling",
  alternates: {
    canonical: "/priser",
  },
  openGraph: {
    title: "Gratis hjemmepleje · Premium Care",
    description:
      "Frit valg af privat hjemmepleje når du er visiteret af kommunen - uden ekstra betaling",
    url: "https://premiumcare.dk/priser",
  },
};

export default function FreeCarePage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <div className="mb-8">
            <CrestSeal size={48} decorative className="!p-0" />
          </div>
          <h1 className="type-page-title text-midnight tracking-tight">
            Gratis hjemmepleje
          </h1>
          <p className="text-[13px] uppercase tracking-wide text-midnight/60 mt-6">
            Frit valg af privat leverandør
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <FreeCareMessage showNote showLink={false} />
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Sådan fungerer frit valg
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8 max-w-[55ch]">
            Når kommunen har visiteret dig eller din pårørende til hjemmepleje, kan I
            som udgangspunkt vælge, hvem der skal levere plejen. Det betyder, at I kan
            skifte fra kommunal hjemmepleje til en privat leverandør uden selv at betale
            ekstra for den visiterede ydelse
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-6 max-w-[55ch]">
            Vi hjælper gerne med at forklare processen, hvad visitation betyder, og hvad
            der skal være på plads, før plejen kan starte
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding section-rule">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Tilkøb ud over visitationen
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Den kommunalt visiterede hjemmepleje forbliver gratis. Hvis I ønsker ekstra
            støtte - for eksempel ledsagelse, ekstra rengøring eller mere tid - aftales
            det særskilt. Ring, så forklarer vi, hvad der er muligt i jeres situation
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-midnight max-w-[42ch] mx-auto">
            Vil du høre, hvordan frit valg fungerer i jeres situation?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <Link href="/dokumentation" className="btn-secondary">
              Se vores dokumentation
            </Link>
          </div>
          <p className="text-[13px] text-midnight/50 mt-8">
            Eller ring{" "}
            <a href={COMPANY.phone.href} className="underline underline-offset-4 focus-ring">
              {COMPANY.phone.display}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
