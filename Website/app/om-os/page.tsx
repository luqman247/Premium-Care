import type { Metadata } from "next";
import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { PageHero } from "@/components/PageHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY, companyLocalityLine } from "@/lib/company";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-images";
import { MISSION_FULL } from "@/lib/mission";
import { PHOTO_SIZES } from "@/lib/photography";
import { VORES_LOFTE_COMPASS } from "@/lib/vores-lofte";

export const metadata: Metadata = {
  title: "Om PremiumCare ApS",
  description:
    "Skabt ud fra erfaring, taknemmelighed og ønsket om at give værdighed tilbage til hjemmeplejen",
  alternates: {
    canonical: "/om-os",
  },
  openGraph: {
    title: "Om PremiumCare ApS",
    description:
      "Skabt ud fra erfaring, taknemmelighed og ønsket om at give værdighed tilbage til hjemmeplejen",
    url: `${COMPANY.url}/om-os`,
  },
};

const VALUES = [
  {
    title: "Værdighed",
    body: "Borgeren mødes som et menneske - ikke som en post på en liste",
  },
  {
    title: "Tryghed",
    body: "Kontinuitet, tydelig besked og ro i de små beslutninger",
  },
  {
    title: "Nærvær",
    body: "Tid til vaner, grænser og det, der føles privat",
  },
  {
    title: "Faglighed",
    body: "Oplæring, procedurer og medarbejdere, der er forberedte",
  },
  {
    title: "Ansvar",
    body: "Navngivet ejerskab. Når noget halter, siger vi det",
  },
  {
    title: "Ordentlighed",
    body: "Respekt for borgere, familier og kolleger - også på de svære dage",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="page-flow">
      <PageHero
        title="Om PremiumCare ApS"
        subtitle="Skabt ud fra erfaring, taknemmelighed og ønsket om at give værdighed tilbage til hjemmeplejen"
        assetId={ASSET_IDS.aboutPageHero}
        category="hero"
        objectPosition="center 35%"
      />

      <section className="editorial-pull">
        <div className="page-margin">
          <p className="editorial-pull-quote text-midnight">
            Nogle virksomheder bliver skabt ud fra en forretningsidé. Andre bliver
            skabt ud fra en livshistorie
          </p>
          <p className="mt-10 text-center">
            <Link href="/min-historie" className="signature-link">
              Læs grundlæggerens historie
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-eyebrow">Selskab</p>
          <h2 className="type-section-title text-midnight mt-4">
            {COMPANY.legalName}
          </h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-8 max-w-[48ch]">
            Familieejet hjemmepleje i {companyLocalityLine()}. CVR {COMPANY.cvr}. Vi
            leverer pleje efter kommunal visitation og frit valg - med synlig ledelse
            tæt på borgere og medarbejdere
          </p>
          <p className="text-[17px] leading-body text-midnight/75 mt-6">
            <a href={COMPANY.phone.href} className="underline underline-offset-4 focus-ring">
              {COMPANY.phone.display}
            </a>
            {" · "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="underline underline-offset-4 focus-ring"
            >
              {COMPANY.email}
            </a>
          </p>
        </div>
      </section>

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <p className="type-eyebrow text-ivory/50">Mission</p>
          <p className="type-pullquote text-ivory mt-6 max-w-[28ch]">
            {MISSION_FULL}
          </p>
        </div>
      </section>

      <section className="editorial-split">
        <div className="editorial-split-media">
          <DamImage
            assetId={LEADERSHIP_IMAGES.ceoFormal.assetId}
            category="about"
            fill
            sizes={PHOTO_SIZES.service}
            objectPosition="center 18%"
          />
        </div>
        <div className="editorial-split-copy">
          <p className="type-eyebrow">Ledelse</p>
          <h2 className="type-section-title text-midnight mt-4">
            Synlig ledelse
          </h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-6 max-w-[42ch]">
            PremiumCare ApS ledes af grundlægger og administrerende direktør Bibi Naziyh
            Dowezai. Ledelsen er tæt på borgerne, tæt på medarbejderne og tæt på de
            beslutninger, der former hverdagen
          </p>
          <p className="text-[17px] leading-body text-midnight/75 mt-4 max-w-[42ch]">
            Vi leder ikke på afstand. Kvalitet afgøres i de små valg - i hjemmet, i
            oplæringen og i den besked, familien får
          </p>
          <p className="mt-8">
            <Link href="/ledelse-og-ansvar" className="signature-link">
              Læs om ledelse og ansvar
            </Link>
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <div className="mb-10">
            <CrestSeal size={72} decorative className="!p-0 !justify-start" />
          </div>
          <p className="type-eyebrow">Identitet</p>
          <h2 className="type-section-title text-midnight mt-4">
            Hvorfor logoet ser ud, som det gør
          </h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-8 max-w-[48ch]">
            Logoet er inspireret af taknemmelighed over for Danmark - et land, der gav
            en familie tryghed, og som gav en farmor værdighed i hendes sidste kapitel
          </p>
          <p className="text-[17px] leading-body text-midnight/75 mt-4 max-w-[48ch]">
            Crestet minder os om ansvar, kontinuitet og tillid. Det er ikke dekoration.
            Det er et tegn på den forpligtelse, PremiumCare ApS bærer hver dag
          </p>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding section-rule">
        <div className="reading-column">
          <p className="type-eyebrow">Værdier</p>
          <h2 className="type-section-title text-midnight mt-4">
            Det, vi måler os på
          </h2>
          <ul className="editorial-value-list mt-10">
            {VALUES.map((value) => (
              <li key={value.title} className="editorial-value-item">
                <h3 className="editorial-value-title">{value.title}</h3>
                <p className="editorial-value-body">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="editorial-split editorial-split--reverse">
        <div className="editorial-split-media">
          <DamImage
            assetId={ASSET_IDS.aboutClosing}
            category="details"
            fill
            sizes={PHOTO_SIZES.service}
            objectPosition="center 40%"
          />
        </div>
        <div className="editorial-split-copy">
          <p className="type-eyebrow">Tillid</p>
          <h2 className="type-section-title text-midnight mt-4">
            Fra ord til dokumentation
          </h2>
          <p className="text-[17px] leading-body text-midnight/75 mt-6 max-w-[42ch]">
            Historien forklarer, hvorfor vi findes. Dokumentationen viser, hvordan vi
            arbejder. Løftet beskriver, hvad I kan holde os op på
          </p>
          <p className="mt-8 flex flex-col gap-3">
            <Link href="/vores-loefte" className="signature-link">
              Vores løfte
            </Link>
            <Link href="/dokumentation" className="signature-link">
              Dokumentation
            </Link>
            <Link href="/min-historie" className="signature-link">
              Min historie
            </Link>
            <Link href="/kontakt" className="signature-link">
              Kontakt
            </Link>
          </p>
        </div>
      </section>

      <section className="founder-kompas" aria-labelledby="about-compass">
        <div className="founder-kompas-inner page-margin">
          <p className="wow-compass-eyebrow mb-10">Kompasset</p>
          <blockquote id="about-compass" className="founder-kompas-quote">
            {VORES_LOFTE_COMPASS}
          </blockquote>
        </div>
      </section>

      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column text-center">
          <p className="text-[19px] leading-body text-midnight max-w-[40ch] mx-auto">
            Vil du tale med os om frit valg, samarbejde eller vores arbejde?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt PremiumCare
            </Link>
            <Link href="/vores-lofte" className="btn-secondary">
              Læs vores løfte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
