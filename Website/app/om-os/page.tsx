import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { HeroImage } from "@/components/HeroImage";
import { COMPANY } from "@/lib/company";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-images";

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
  { title: "Medfølelse", body: "Ægte omsorg og tålmodighed for hver klient" },
  { title: "Respekt", body: "Værdighed for hvert menneske, uanset alder og baggrund" },
  { title: "Ekspertise", body: "Den højeste standard i hver del af vores arbejde" },
  { title: "Integritet", body: "Vi taler sandt, indfrier forpligtelser og forbliver troværdige" },
  { title: "Forbedring", body: "Stadig bedre måder at tjene, forbedre systemer og udvikle mennesker" },
  { title: "Forvaltning", body: "Ansvarlig ledelse og kontinuerlig kvalitetsudvikling" },
];

const LEADERSHIP_PRINCIPLES = [
  "Gå foran som eksempel — vis de standarder, du forventer",
  "Lyt, før du beslutter — søg input, og handl derefter",
  "Beslut på et oplyst grundlag — databaseret og gennemsigtig",
  "Styrk andre til at lykkes — udvikl dit team",
  "Gå aldrig på kompromis med integriteten — principper frem for profit",
];

export default function AboutPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Hvorfor vi findes
          </h1>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-midnight">
            Premium Care er ikke en virksomhed. Det er en institution. Vi blev ikke
            grundlagt for at tjene penge. Vi blev grundlagt, fordi vi troede, at
            ældrepleje kunne gøres bedre — mere menneskelig, mere respektfuld, mere
            dansk.
          </p>
          <p className="mt-12">
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
                <HeroImage
                  src={LEADERSHIP_IMAGES.ceoFormal.src}
                  alt={LEADERSHIP_IMAGES.ceoFormal.alt}
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
                Dowezai — med synlig ledelse tæt på borgere, medarbejdere og drift.
              </p>
              <p className="mt-10">
                <Link
                  href="/ledelse-og-governance"
                  className="text-[17px] leading-body text-gold underline underline-offset-4 hover:text-gold-light transition-colors focus-ring"
                >
                  Læs om ledelse og governance
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
            At yde omsorgsfuld, værdig og professionel pleje til ældre — så de kan
            leve trygt og komfortabelt i deres eget hjem. At støtte familier med
            ærlighed og pålidelighed. At skabe en arbejdsplads, hvor medarbejdere
            værdsættes og udvikles.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Vision</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            At blive Danmarks mest betroede udbyder af ældrepleje — anerkendt for
            enestående standarder inden for pleje, medfølelse, professionalisme og
            etisk ledelse. En organisation, der respekteres lige så meget for sin
            betydning for familier og lokalsamfund som for sin drift.
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
            Hver caregiver, der træder ind i dit hjem, er ansat af os — ikke hyret
            gennem et bureau. Vi træner dem. Vi kender dem. Vi står inde for dem.
            Hvis noget går galt, er det vores ansvar. Ikke deres alene.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-midnight">Særlig oplæring</h2>
          <p className="text-[17px] leading-body text-midnight/80 mt-8">
            Vores caregivers gennemgår særlig oplæring i demenspleje og
            faldforebyggelse. De ved, hvordan man taler med en person, der ikke
            husker. De ved, hvordan man sikrer et hjem, så hun ikke falder igen. De
            ved, hvornår man skal ringe til dig, og hvornår man skal ringe til
            lægen. Og de ved, at den samme caregiver hver dag er ikke en luksus — det
            er en nødvendighed.
          </p>
        </div>
      </section>

      <div className="brand-divider" aria-hidden="true">
        <CrestSeal size={64} decorative className="!p-0" />
      </div>

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
            Hver beslutning vurderes mod otte spørgsmål: Tjener det klientens bedste
            interesse? Er det lovligt? Bevarer det retfærdigheden? Beskytter det
            vores medarbejdere? Styrker det virksomheden på lang sigt? Ville vi
            forklare denne beslutning åbent?
          </p>
          <p className="text-[17px] leading-body text-midnight/80 mt-6">
            Kultur er ikke en plakat på væggen — det er summen af hver daglig
            kontakt
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">
            Forretningskontinuitet
          </h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-8">
            Vi har ingen ejere i udlandet. Ingen investorer, der kræver afkast. Ingen
            planer om at sælge. Virksomheden bygger på stærke værdier og
            langsigtede principper, der sikrer stabilitet og kontinuitet — uanset hvem
            der leder den. Vi bygger en arv, ikke blot en forretning.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <div className="w-full h-[60vh] relative">
          <HeroImage
            src="/images/about-caregiver.jpg"
            alt="En Premium Care caregiver i omsorgsfuld kontakt med en ældre klient"
            fill
            sizes="100vw"
          />
        </div>
        <div className="section-padding reading-column text-center">
          <p className="text-[13px] uppercase tracking-wide text-midnight/60">
            De mennesker, der passer på din mor
          </p>
        </div>
      </section>
    </div>
  );
}
