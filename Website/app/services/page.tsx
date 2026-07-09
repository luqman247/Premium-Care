import type { Metadata } from "next";
import { HeroImage } from "@/components/HeroImage";
import { PHOTOGRAPHY, PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Services",
  description: "Hvad vi gør — og hvad vi ikke gør",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services · Premium Care",
    description: "Hvad vi gør — og hvad vi ikke gør",
    url: "https://premiumcare.dk/services",
  },
};

const SERVICES = [
  {
    slug: "personal-care",
    title: "Personlig pleje",
    photo: PHOTOGRAPHY.personalCare,
    text: "Vi hjælper din mor med det, hun ikke længere kan selv — bad, påklædning, mobilitet og medicinstøtte — i hendes tempo, aldrig urets. Også når hun protesterer. Også når hun ikke genkender os.",
  },
  {
    slug: "home-care",
    title: "Praktisk hjemmehjælp",
    text: "Vi holder hjemmet sikkert og velkendt — rengøring, mad, vask og indkøb, så hun kan blive, hvor minderne bor. Professionel støtte i de trygge rammer af hendes eget hjem.",
  },
  {
    slug: "companionship",
    title: "Selskab og social støtte",
    photo: PHOTOGRAPHY.companionship,
    text: "Nogle gange sidder vi bare sammen. Samtale, ledsagelse og fællesskab — for ensomhed er en sundhedsrisiko, og tilstedeværelse er det vigtigste for en person med demens.",
  },
  {
    slug: "dementia",
    title: "Demens- og Alzheimerpleje",
    text: "Demensvenlig kommunikation, beroligende rutiner og den samme caregiver hver gang — så hun genkender ansigtet, selv når hun ikke genkender navnet. Vi ved, hvad vi skal gøre, når hun vandrer.",
  },
  {
    slug: "palliative",
    title: "Palliativ pleje og pleje ved livets afslutning",
    photo: PHOTOGRAPHY.palliative,
    text: "Velvære, værdighed og livskvalitet i de sidste stadier — i tæt samarbejde med familie og sundhedspersonale. Vi er til stede, rolige og uforhastede.",
  },
  {
    slug: "recovery",
    title: "Genoptræning efter indlæggelse",
    text: "Overgangspleje efter udskrivning — medicinhåndtering, sårpleje, mobilitetsstøtte og koordinering med sundhedspersonale, så hun kommer sikkert hjem igen.",
  },
  {
    slug: "respite",
    title: "Aflastning",
    text: "Midlertidig aflastning for dig som pårørende — fra få timer til flere dage — med gnidningsfri kontinuitet, så familien trygt kan hvile og hente nye kræfter.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Hvad vi gør
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Helhedspleje, tilpasset hvert enkelt menneske — og hvad vi bevidst
            lader være.
          </p>
        </div>
      </section>

      {SERVICES.map((service) => (
        <section key={service.slug} className="snap-section bg-ivory">
          {"photo" in service && service.photo ? (
            <div className="w-full h-[45vh] relative">
              <HeroImage
                src={service.photo.src}
                alt={service.photo.alt}
                fill
                sizes={PHOTO_SIZES.service}
                objectPosition={service.photo.objectPosition}
              />
            </div>
          ) : null}
          <div className="section-padding reading-column">
            <h2 className="text-[24px] leading-normal text-midnight mb-4">
              {service.title}
            </h2>
            <p className="text-[19px] leading-body text-midnight">{service.text}</p>
          </div>
        </section>
      ))}

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Det gør vi ikke</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-12">
            Vi overtager ikke ansvaret fra dig. Du kender din mor bedst. Vi rådgiver
            ikke mod lægens ordination. Vi erstatter ikke familiens besøg. Vi er her,
            når I ikke kan være — ikke i stedet for jer. Og vi giver aldrig op, selv
            når hun siger nej.
          </p>
        </div>
      </section>
    </div>
  );
}
