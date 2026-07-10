import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { CrisisHelp } from "@/components/CrisisHelp";
import { EditorialTicker } from "@/components/EditorialTicker";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { RecruitmentSection } from "@/components/RecruitmentSection";
import { RotatingHero } from "@/components/RotatingHero";
import { COMPANY } from "@/lib/company";

export default function HomePage() {
  return (
    <div className="page-flow">
      <header className="homepage-hero" data-header-tone="dark">
        <div className="rotating-hero-wrap">
          <RotatingHero />
        </div>
        <EditorialTicker />
        <div className="bg-ivory hero-intro page-margin">
          <div className="reading-column">
            <CrisisHelp />
            <div className="hero-trust-anchor">
              <CrestSeal size={44} decorative className="!p-0" />
              <p className="hero-eyebrow">Aarhus og Østjylland</p>
            </div>
            <h1 className="hero-statement text-midnight max-w-[22ch]">
              Tryghed i hjemmet
            </h1>
            <p className="hero-quality text-midnight max-w-[36ch]">
              Den samme medarbejder. Tydelig besked til familien
            </p>
            <p className="hero-human text-midnight/85 max-w-[40ch]">
              De fleste vil helst blive hjemme. Det prøver vi at gøre muligt
            </p>
            <p className="hero-support text-midnight/70 max-w-[44ch]">
              Hvis du er bekymret for hendes sikkerhed, ringer du bare. Vi finder
              en løsning - også i dag
            </p>
            <div className="hero-actions">
              <Link href="/kontakt" className="btn-primary">
                Kontakt os om frit valg
              </Link>
              <Link href="/priser" className="btn-secondary">
                Læs om gratis hjemmepleje
              </Link>
            </div>
            <p className="text-[15px] text-midnight/60 mt-6">
              Eller ring{" "}
              <a
                href={COMPANY.phone.href}
                className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
              >
                {COMPANY.phone.display}
              </a>
            </p>
          </div>
        </div>
      </header>

      <section className="bg-ivory section-padding section-rule">
        <div className="reading-column">
          <h2 className="type-section-title text-midnight">
            Hvis hun er faldet. Hvis du er bange nu
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Vi har erfaring med det. Hvis der er en nødsituation, ringer vi dig med
            det samme. Før vi starter, laver vi en sikkerhedsvurdering af hjemmet.
            Den samme medarbejder kommer hver gang
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Du behøver ikke have styr på alt med det samme. Ring - så finder vi ud
            af resten sammen
          </p>
        </div>
      </section>

      <section className="bg-ivory section-padding section-rule">
        <div className="reading-column">
          <h2 className="type-section-title text-midnight">
            Gratis hjemmepleje gennem frit valg
          </h2>
          <FreeCareMessage
            className="mt-8"
            linkLabel="Sådan fungerer frit valg"
          />
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-pullquote text-midnight">
            Hun har boet i det samme hus i fyrre år. Tanken om at forlade det
            er ikke bare ubelejlig - det er en slags sorg
          </p>
        </div>
      </section>

      <section className="bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="type-section-title text-ivory">
            Det, vi lover at gøre
          </h2>
          <div className="mt-10 space-y-6 text-[17px] leading-body text-ivory/80">
            <p>
              Vi tager os tid til at lære huset at kende. Den samme person kommer
              igen, når det er muligt. Vi ringer, når noget ændrer sig
            </p>
            <p>
              Hvis hun siger nej den første uge, kommer vi alligevel tilbage.
              Tillid tager tid
            </p>
          </div>
          <p className="mt-12">
            <Link
              href="/vores-loefte"
              className="text-[17px] leading-body text-gold underline underline-offset-4 hover:text-gold-light transition-colors focus-ring"
            >
              Læs om vores løfte
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-ivory section-padding section-rule">
        <div className="reading-column">
          <h2 className="type-section-title text-midnight">Hvad vi gør</h2>
          <p className="type-lead text-midnight/80 mt-8">
            Praktisk hjælp, personlig pleje, sygepleje, fysioterapi, ergoterapi og
            tilkøb - altid i borgerens eget hjem
          </p>
          <p className="mt-10">
            <Link
              href="/services"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Se vores ydelser
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="type-section-title text-midnight">Hvem vi er</h2>
          <p className="type-lead text-midnight/80 mt-8">
            Premium Care blev stiftet af Bibi Naziyh Dowezai, med baggrund i
            hjemmepleje i Aarhus, Vejle og Fredericia. Virksomheden er familieejet
            og har hjemsted i Viby J
          </p>
          <p className="type-lead text-midnight mt-8">
            Bibi voksede op med en farmor, der fik værdig pleje i Danmark. Det er
            udgangspunktet for alt, vi gør
          </p>
          <p className="mt-10">
            <Link
              href="/min-historie"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Læs grundlæggerens historie
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-midnight section-padding">
        <div className="reading-column">
          <p className="type-pullquote text-ivory">
            Vores medarbejdere er ansatte hos os
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-10">
            Vi træner dem selv. Vi kender dem. Når noget går galt, er det vores
            ansvar, ikke deres alene
          </p>
        </div>
      </section>

      <section className="testimonial-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="type-section-title text-midnight text-center">
            Det, familier fortæller os
          </h2>
          <div className="mt-16 text-left">
            <p className="type-lead text-midnight max-w-[55ch]">
              De første to uger sagde min mor nej til alt. Den tredje uge
              spurgte hun, om Mette kunne komme tidligere
            </p>
            <p className="text-[13px] text-midnight/55 mt-8">
              Søn til borger
            </p>
          </div>
          <div className="mt-16 text-left border-t border-midnight/10 pt-16">
            <p className="type-lead text-midnight max-w-[55ch]">
              Min mor har demens. Hun vidste ikke, hvem Lene var den første dag.
              Den femte dag smilede hun, da Lene kom ind ad døren. Den tiende
              dag holdt hun Lenes hånd
            </p>
            <p className="text-[13px] text-midnight/55 mt-8">
              Søn til borger med demens
            </p>
          </div>
          <p className="mt-16 text-center">
            <Link
              href="/dokumentation"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Se vores dokumentation
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-ivory section-padding section-rule">
        <div className="reading-column text-center">
          <p className="type-pullquote text-midnight">
            Har du brug for hjælp nu, ringer du
          </p>
          <p className="text-[17px] leading-body text-midnight/60 mt-6">
            Du behøver ikke have styr på papirerne endnu. Ring, så tager vi den
            derfra
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <a href={COMPANY.phone.href} className="btn-secondary">
              Ring {COMPANY.phone.display}
            </a>
          </div>
          <p className="text-[13px] text-midnight/50 mt-6">
            {COMPANY.openingHours.display}
          </p>
        </div>
      </section>

      <RecruitmentSection variant="quiet" />
    </div>
  );
}
