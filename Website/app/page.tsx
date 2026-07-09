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
      <header className="homepage-hero">
        <div className="rotating-hero-wrap">
          <RotatingHero />
        </div>
        <div className="bg-ivory hero-intro page-margin">
          <div className="reading-column">
            <CrisisHelp />
            <div className="hero-trust-anchor">
              <CrestSeal size={44} decorative className="!p-0" />
              <p className="hero-eyebrow">Omsorg · Tryghed · Faglighed</p>
            </div>
            <h1 className="hero-statement text-midnight max-w-[22ch]">
              Tryghed i hjemmet
            </h1>
            <p className="hero-quality text-midnight max-w-[32ch]">
              Struktur, nærvær og faglighed
            </p>
            <p className="hero-human text-midnight/85 max-w-[38ch]">
              Din mor fortjener at blive hjemme
            </p>
            <p className="hero-support text-midnight/70 max-w-[42ch]">
              Hvis du er bekymret for hendes sikkerhed, ringer du bare. Vi finder
              en løsning - også i dag
            </p>
            <div className="hero-actions">
              <a href={COMPANY.phone.href} className="btn-primary">
                Ring os nu
              </a>
              <Link href="/kontakt" className="btn-secondary">
                Skriv til os
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
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

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Gratis hjemmepleje gennem frit valg
          </h2>
          <FreeCareMessage className="mt-8" linkLabel="Læs mere om frit valg" />
        </div>
      </section>

      <section className="bg-ivory section-padding">
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
                år - gennemsnitlig levealder i Danmark
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[30px] leading-normal text-midnight">
            Hun har boet i det samme hus i fyrre år. Tanken om at forlade det
            er ikke bare ubelejlig - det er en slags sorg
          </p>
        </div>
      </section>

      <section className="bg-midnight section-padding">
        <div className="reading-column">
          <p className="text-[13px] uppercase tracking-wide text-gold mb-8">
            Løftet i vores navn
          </p>
          <div className="space-y-10">
            <div>
              <h2 className="text-[30px] leading-normal text-ivory">Omsorg</h2>
              <p className="text-[17px] leading-body text-ivory/80 mt-4">
                Ægte menneskelig varme i hver handling. Vi ser mennesket - aldrig
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
              Læs om vores løfte
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight/70">
            Nogle virksomheder bliver skabt ud fra en forretningsidé. Andre bliver
            skabt ud fra en livshistorie
          </p>
          <h2 className="text-[30px] leading-normal text-midnight mt-12">
            Hvorfor Premium Care findes
          </h2>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Vi er til for at yde omsorgsfuld, værdig og professionel pleje til ældre
            - så de kan leve trygt og med værdighed i deres eget hjem
          </p>
          <p className="text-[19px] leading-body text-midnight mt-8">
            Vi leverer ikke bare pleje. Vi giver ro i sindet - til hende, og til
            dem, der elsker hende
          </p>
          <p className="text-[17px] leading-body text-midnight/70 mt-8">
            Et dansk plejeinstitut, 100% familieejet, forankret i den danske
            velfærdstradition. Bygget på værdighed, tillid og konsistens - ikke på
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

      <section className="bg-midnight section-padding">
        <div className="reading-column">
          <p className="text-[30px] leading-normal text-ivory">
            Vi kommer ikke for at ændre hendes liv. Vi kommer for at sikre, at
            hun kan leve det
          </p>
          <p className="text-[17px] leading-body text-ivory/80 mt-12">
            Hver caregiver, der træder ind i dit hjem, er ansat af os - ikke
            hyret gennem et bureau. Vi træner dem. Vi kender dem. Vi står inde
            for dem. Hvis noget går galt, er det vores ansvar. Ikke deres alene
          </p>
        </div>
      </section>

      <section className="testimonial-section bg-ivory section-padding">
        <div className="reading-column text-center">
          <p className="text-[64px] leading-tight text-gold font-body">94%</p>
          <p className="text-[16px] text-midnight/60 uppercase tracking-wide mt-4">
            Årlig klienttilfredshed, målt af uafhængig part
          </p>
          <div className="mt-16 text-left">
            <p className="text-[19px] leading-body text-midnight max-w-[55ch]">
              De første to uger sagde min mor nej til alt. Den tredje uge
              spurgte hun, om Mette kunne komme tidligere
            </p>
            <p className="text-[13px] font-medium uppercase tracking-wide text-midnight/60 mt-8">
              EN SØN, KØBENHAVN
            </p>
          </div>
          <div className="mt-16 text-left border-t border-midnight/10 pt-16">
            <p className="text-[19px] leading-body text-midnight max-w-[55ch]">
              Min mor har demens. Hun vidste ikke, hvem Lene var den første dag.
              Den femte dag smilede hun, da Lene kom ind ad døren. Den tiende
              dag holdt hun Lenes hånd
            </p>
            <p className="text-[13px] font-medium uppercase tracking-wide text-midnight/60 mt-8">
              EN SØN, FREDERIKSBERG
            </p>
          </div>
        </div>
      </section>

      <RecruitmentSection />

      <section className="bg-ivory section-padding">
        <div className="reading-column text-center">
          <p className="text-[30px] leading-normal text-midnight">
            Har du brug for hjælp nu, ringer du
          </p>
          <p className="text-[17px] leading-body text-midnight/60 mt-6">
            Du behøver ikke at have alle svar klar. Vi tager alvorligt akut
            henvendelse og finder en vej - også i dag
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={COMPANY.phone.href} className="btn-primary">
              Ring os nu
            </a>
            <Link href="/kontakt" className="btn-secondary">
              Skriv til os
            </Link>
          </div>
          <p className="text-[13px] text-midnight/50 mt-6">
            {COMPANY.openingHours.display}
          </p>
        </div>
      </section>

      <EditorialTicker />

      <section className="bg-ivory py-20" aria-label="Premium Care institutionelt våbenskjold">
        <CrestSeal size={120} decorative className="mx-auto" />
      </section>
    </div>
  );
}
