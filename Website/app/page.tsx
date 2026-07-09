import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { HeroImage } from "@/components/HeroImage";
import { COMPANY } from "@/lib/company";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";

export default function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* SECTION 1: HERO — One image, text BELOW, no CTA */}
      <section className="snap-section min-h-screen relative">
        <div className="absolute inset-0">
          <HeroImage
            src={PHOTOGRAPHY.hero.src}
            alt={PHOTOGRAPHY.hero.alt}
            fill
            priority
            sizes={PHOTO_SIZES.hero}
            objectPosition={PHOTOGRAPHY.hero.objectPosition}
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

      {/* SECTION 2: DENMARK'S AGEING POPULATION — key statistics */}
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Danmark bliver ældre. Flere vil blive hjemme
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <p className="text-[48px] leading-tight text-gold font-body">20%</p>
              <p className="text-[13px] text-midnight/60 uppercase tracking-wide mt-2">
                af danskerne er 65+ i 2030
              </p>
            </div>
            <div>
              <p className="text-[48px] leading-tight text-gold font-body">87%</p>
              <p className="text-[13px] text-midnight/60 uppercase tracking-wide mt-2">
                foretrækker at blive gamle i eget hjem
              </p>
            </div>
            <div>
              <p className="text-[48px] leading-tight text-gold font-body">81,5</p>
              <p className="text-[13px] text-midnight/60 uppercase tracking-wide mt-2">
                år — gennemsnitlig levealder i Danmark
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE RECOGNITION */}
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[30px] leading-normal text-midnight">
            Hun har boet i det samme hus i fyrre år. Tanken om at forlade det
            er ikke bare ubelejlig — det er en slags sorg.
          </p>
        </div>
      </section>

      {/* SECTION 4: BRAND PROMISES — Omsorg · Tryghed · Hver dag */}
      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <p className="text-[13px] uppercase tracking-wide text-gold mb-8">
            Løftet i vores navn
          </p>
          <div className="space-y-10">
            <div>
              <h2 className="text-[30px] leading-normal text-ivory">Omsorg</h2>
              <p className="text-[17px] leading-body text-ivory/80 mt-4">
                Ægte menneskelig varme i hver handling. Vi ser mennesket — aldrig
                blot opgaven
              </p>
            </div>
            <div>
              <h2 className="text-[30px] leading-normal text-ivory">Tryghed</h2>
              <p className="text-[17px] leading-body text-ivory/80 mt-4">
                Pålidelighed, som familier kan bygge deres liv omkring. De samme
                ansigter, de samme tider, hver gang
              </p>
            </div>
            <div>
              <h2 className="text-[30px] leading-normal text-ivory">Hver dag</h2>
              <p className="text-[17px] leading-body text-ivory/80 mt-4">
                Konsekvent dagligt nærvær. Ikke af og til. Ikke for det meste. Hver
                eneste dag
              </p>
            </div>
          </div>
          <p className="mt-12">
            <Link
              href="/vores-loefte"
              className="text-[17px] leading-body text-gold underline underline-offset-4 hover:text-gold-light transition-colors focus-ring"
            >
              Læs vores fulde løfte
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 5: WHY WE EXIST */}
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight/70">
            Nogle virksomheder bliver skabt ud fra en forretningsidé. Andre bliver
            skabt ud fra en livshistorie.
          </p>
          <h2 className="text-[30px] leading-normal text-midnight mt-12">
            Hvorfor Premium Care findes
          </h2>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Vi er til for at yde omsorgsfuld, værdig og professionel pleje til ældre
            — så de kan leve trygt og med værdighed i deres eget hjem
          </p>
          <p className="text-[19px] leading-body text-midnight mt-8">
            Vi leverer ikke bare pleje. Vi giver ro i sindet — til hende, og til
            dem, der elsker hende
          </p>
          <p className="text-[17px] leading-body text-midnight/70 mt-8">
            Et dansk plejeinstitut, 100% familieejet, forankret i den danske
            velfærdstradition. Bygget på værdighed, tillid og konsistens — ikke på
            kortsigtet vækst
          </p>
          <p className="mt-10">
            <Link
              href="/min-historie"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Læs grundlæggerens historie
            </Link>
          </p>
          <div className="mt-12 flex justify-start">
            <CrestSeal size={96} decorative className="!p-0" />
          </div>
        </div>
      </section>

      {/* SECTION 6: THE APPROACH */}
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
            <a href={COMPANY.phone.href} className="btn-secondary">
              Jeg har brug for hjælp i dag
            </a>
          </div>
          <p className="text-[13px] text-midnight/50 mt-6">
            {COMPANY.openingHours.display} · Svar inden for to arbejdsdage
          </p>
        </div>
      </section>

      {/* SECTION 11: THE CREST — Institutional seal */}
      <section className="snap-section bg-ivory" aria-label="Premium Care institutionelt våbenskjold">
        <CrestSeal size={160} decorative className="mx-auto" />
      </section>
    </div>
  );
}
