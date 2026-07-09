import Image from "next/image";
import type { Metadata } from "next";
import { HeroImage } from "@/components/HeroImage";

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

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <p className="text-[19px] leading-body text-ivory">
            Vi har ingen ejere i udlandet. Ingen investorer, der kræver afkast. Ingen
            planer om at sælge. Vi er her, fordi vi tror på, at omsorg er en
            institution — ikke en industri.
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory">
        <div className="w-full h-[60vh] relative">
          <HeroImage
            src="/images/team-portrait.jpg"
            alt="De mennesker, der passer på din mor"
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

      <section className="snap-section bg-ivory flex items-center justify-center">
        <Image
          src="/images/crest-monumental.png"
          alt="Premium Care våbenskjold"
          width={180}
          height={180}
          className="mx-auto"
          priority
        />
      </section>
    </div>
  );
}
