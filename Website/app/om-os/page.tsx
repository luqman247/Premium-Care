import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { COMPANY } from "@/lib/company";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-images";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Om os",
  description: "Hvorfor vi findes",
  alternates: {
    canonical: "/om-os",
  },
  openGraph: {
    title: "Om os · Premium Care",
    description: "Hvorfor vi findes",
    url: "https://premiumcare.dk/om-os",
  },
};

const CORE_VALUES = [
  { title: "Ærlighed", body: "Vi siger, hvad vi ser, også når det er svært" },
  { title: "Respekt", body: "For borgeren, familien og kollegerne" },
  { title: "Faglighed", body: "Uddannelse, procedurer og oplæring" },
  { title: "Kontinuitet", body: "Den samme medarbejder, når det er muligt" },
];

const LEADERSHIP_PRINCIPLES = [
  "Gå foran, når det er nødvendigt",
  "Lyt, før du beslutter",
  "Beslut på dokumenteret grundlag",
  "Giv medarbejdere det, de skal bruge for at gøre arbejdet ordentligt",
  "Gå ikke på kompromis med sikkerheden",
];

export default function AboutPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="type-page-title text-midnight tracking-tight">
            Hvorfor vi findes
          </h1>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight">
            Premium Care er et familieejet selskab i Viby J. Vi blev stiftet, fordi
            grundlæggeren havde arbejdet i hjemmeplejen og vidste, hvad der skulle til
            for at gøre det ordentligt.
          </p>
          <p className="mt-12">
            <Link
              href="/vores-loefte"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Læs vores offentlige løfte
            </Link>
            {" · "}
            <Link
              href="/min-historie"
              className="text-[17px] leading-body text-midnight underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
            >
              Læs grundlæggerens historie
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Registreret selskab
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            {COMPANY.legalName}
            <br />
            CVR {COMPANY.cvr}
            <br />
            {COMPANY.address.street}, {COMPANY.address.postalCode}{" "}
            {COMPANY.address.locality}
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            <a
              href={COMPANY.phone.href}
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              {COMPANY.phone.display}
            </a>
            {" · "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              {COMPANY.email}
            </a>
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,200px)_1fr] gap-10 items-start">
            <figure className="md:order-2">
              <div className="relative w-full aspect-[3/4] max-w-[200px] mx-auto md:mx-0">
                <DamImage
                  assetId={LEADERSHIP_IMAGES.ceoFormal.assetId}
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
            <div className="md:order-1">
              <h2 className="text-[30px] leading-normal text-ivory">Ledelse</h2>
              <p className="text-[17px] leading-body text-ivory/80 mt-8">
                Premium Care ledes af grundlægger og administrerende direktør Bibi Naziyh
                Dowezai - med synlig ledelse tæt på borgere, medarbejdere og drift.
              </p>
              <p className="mt-10">
                <Link
                  href="/ledelse-og-governance"
                  className="text-[17px] leading-body text-gold underline underline-offset-4 hover:text-gold-light transition-colors focus-ring"
                >
                  Læs om ledelse og ansvar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Mission</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            At yde hjemmepleje, borgere kan leve med i eget hjem. At støtte familier
            med ærlig besked. At være en arbejdsplads, medarbejdere gider blive i.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Vision</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            At blive en hjemmepleje, familier vælger, kommuner kan samarbejde med, og
            medarbejdere gerne arbejder for.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <CrestSeal size={64} decorative className="!p-0 mb-8" />
          <h2 className="text-[30px] leading-normal text-midnight">
            Hvorfor logoet betyder noget
          </h2>
          <p className="text-[19px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
            Logoet minder os om, hvorfor vi startede. Det er ikke pynt.
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
            Grundlæggerens farmor fik værdig pleje i Danmark. Våbenskjoldet er en
            påmindelse om den taknemmelighed og det ansvar, der følger med.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Kerneværdier</h2>
          <ul className="mt-10 space-y-6 list-none">
            {CORE_VALUES.map((value) => (
              <li key={value.title}>
                <h3 className="text-[19px] text-midnight">{value.title}</h3>
                <p className="text-[17px] leading-body text-midnight/70 mt-2">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight">
            Vores medarbejdere er ansatte hos os. Vi træner dem selv. Når noget går
            galt, er det vores ansvar.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Særlig oplæring</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Oplæring i demenspleje og faldforebyggelse. Hvordan man taler med en, der
            ikke husker. Hvornår man ringer til familien, og hvornår man ringer til
            lægen. Og hvorfor den samme medarbejder hver dag betyder noget.
          </p>
        </div>
      </section>

      <div className="brand-divider" aria-hidden="true">
        <CrestSeal size={64} decorative className="!p-0" />
      </div>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Ledelse og ansvar
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8 max-w-[55ch]">
            Premium Care er bygget på synlig ledelse, dokumenteret ansvar og en
            ledelsesstruktur, der kan redegøres for over for borgere, familier og
            kommuner
          </p>
          <Link
            href="/ledelse-og-governance"
            className="block py-5 text-[17px] text-gold hover:tracking-wide transition-all duration-300 focus-ring"
          >
            Ledelse og ansvar →
          </Link>
          <Link
            href="/whistleblowing"
            className="block py-5 text-[17px] text-ivory hover:tracking-wide transition-all duration-300 focus-ring"
          >
            Whistleblower-ordning →
          </Link>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Ledelsesprincipper
          </h2>
          <ul className="mt-10 space-y-4 list-none">
            {LEADERSHIP_PRINCIPLES.map((principle) => (
              <li key={principle} className="text-[17px] leading-body text-ivory/80">
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">
            Etisk fundament
          </h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Før vi træffer en væsentlig beslutning, spørger vi: Tjener det borgeren?
            Er det lovligt? Kan vi forklare det åbent? Ville vi gøre det samme, hvis
            det var vores egen familie?
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Forretningskontinuitet
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Familieejet. Ingen udenlandske ejere. Ingen investorer, der kræver
            hurtigt afkast. Vi bygger noget, der skal holde
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <div className="w-full h-[60vh] relative">
          <DamImage
            assetId={PHOTOGRAPHY.about.assetId}
            fill
            sizes={PHOTO_SIZES.hero}
            objectPosition={PHOTOGRAPHY.about.objectPosition}
          />
        </div>
        <div className="section-padding reading-column text-center">
          <p className="text-[13px] uppercase tracking-wide text-midnight/60">
            De mennesker, der passer på din mor
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <Link href="/min-historie" className="btn-secondary">
              Læs grundlæggerens historie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
