import Image from "next/image";
import Link from "next/link";
import { HeroImage } from "@/components/HeroImage";

export default function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* SECTION 1: HERO — One image, text BELOW, no CTA */}
      <section className="snap-section min-h-screen relative">
        <div className="absolute inset-0">
          <HeroImage
            src="/images/hero-stillness.jpg"
            alt="En caregiver og en ældre kvinde sidder sammen i et dansk hjem"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mt-[60vh] page-margin pb-24">
          <h1 className="text-[48px] leading-tight tracking-tight text-midnight max-w-[20ch]">
            Din mor fortjener at blive hjemme.
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 max-w-[42ch] mt-8">
            At beslutte sig for hjemmehjælp er ikke nemt. Nogle situationer kan
            ikke vente. Hvis du er bekymret for hendes sikkerhed, ringer du
            bare. Vi finder en løsning i dag.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE RECOGNITION */}
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[30px] leading-normal text-midnight">
            Hun har boet i det samme hus i fyrre år. Tanken om at forlade det
            er ikke bare ubelejlig — det er en slags sorg.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE APPROACH */}
      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <p className="text-[30px] leading-normal text-ivory">
            Vi kommer ikke for at ændre hendes liv. Vi kommer for at sikre, at
            hun kan leve det.
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-12">
            Hver caregiver, der træder ind i dit hjem, er ansat af os — ikke
            hyret gennem et bureau. Vi træner dem. Vi kender dem. Vi står inde
            for dem. Hvis noget går galt, er det vores ansvar. Ikke deres alene.
          </p>
        </div>
      </section>

      {/* SECTION 4: SAFETY — Dementia and falls */}
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Hvis hun er faldet. Hvis hun har demens. Hvis hun vandrer.
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Vi har erfaring med det. Før vi starter, laver vi en
            sikkerhedsvurdering af hjemmet. Den samme caregiver kommer hver
            gang. Hvis der er en nødsituation, ringer vi dig med det samme. Og
            hvis hun siger nej den første dag — så kommer vi alligevel den
            næste.
          </p>
        </div>
      </section>

      {/* SECTION 5: THE EVIDENCE — 94% + two testimonials */}
      <section className="snap-section bg-ivory section-padding text-center">
        <div className="reading-column">
          <p className="text-[64px] leading-tight text-gold font-body">94%</p>
          <p className="text-[16px] text-midnight/60 uppercase tracking-wide mt-4">
            Årlig klienttilfredshed, målt af uafhængig part.
          </p>
          <div className="mt-24 text-left">
            <p className="text-[19px] leading-body text-midnight max-w-[55ch]">
              De første to uger sagde min mor nej til alt. Den tredje uge
              spurgte hun, om Mette kunne komme tidligere.
            </p>
            <p className="text-[13px] font-medium uppercase tracking-wide text-midnight/60 mt-8">
              EN SØN, KØBENHAVN
            </p>
          </div>
          <div className="mt-16 text-left border-t border-midnight/10 pt-16">
            <p className="text-[19px] leading-body text-midnight max-w-[55ch]">
              Min mor har demens. Hun vidste ikke, hvem Lene var den første dag.
              Den femte dag smilede hun, da Lene kom ind ad døren. Den tiende
              dag holdt hun Lenes hånd.
            </p>
            <p className="text-[13px] font-medium uppercase tracking-wide text-midnight/60 mt-8">
              EN SØN, FREDERIKSBERG
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE CTA — Dual path: calm + urgent */}
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column text-center">
          <p className="text-[30px] leading-normal text-midnight">
            Du behøver ikke at beslutte noget i dag.
          </p>
          <p className="text-[17px] leading-body text-midnight/60 mt-6">
            Men hvis du har brug for hjælp nu, ringer du bare. Vi kan starte i
            morgen.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt" className="btn-primary">
              Ring, når du er klar
            </Link>
            <a href="tel:+4500000000" className="btn-secondary">
              Jeg har brug for hjælp i dag
            </a>
          </div>
          <p className="text-[13px] text-midnight/50 mt-6">
            Vi besvarer alle opkald inden for to timer. Også om lørdagen.
            Akutlinje: 24 timer.
          </p>
        </div>
      </section>

      {/* SECTION 7: THE CREST — Monumental scale */}
      <section className="snap-section bg-ivory flex items-center justify-center">
        <Image
          src="/images/crest-monumental.png"
          alt="Premium Care våbenskjold"
          width={240}
          height={240}
          className="mx-auto"
          priority
        />
      </section>
    </div>
  );
}
