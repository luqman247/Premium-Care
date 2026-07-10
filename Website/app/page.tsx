import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { EditorialTicker } from "@/components/EditorialTicker";
import { RecruitmentSection } from "@/components/RecruitmentSection";
import { RotatingHero } from "@/components/RotatingHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { FREE_CARE_MESSAGE, FREE_CARE_NOTE } from "@/lib/free-care";
import { PHOTO_SIZES } from "@/lib/photography";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { VORES_LOFTE_COMPASS } from "@/lib/vores-lofte";

const HOME_PATHWAYS = SERVICE_CATEGORIES.slice(0, 4);

export default function HomePage() {
  return (
    <div className="page-flow">
      <header className="homepage-hero" data-header-tone="dark">
        <div className="cinematic-hero">
          <div className="rotating-hero-wrap">
            <RotatingHero />
          </div>
          <div className="cinematic-hero-veil" aria-hidden="true" />
          <div className="cinematic-hero-content page-margin">
            <div className="cinematic-hero-inner">
              <div className="hero-trust-anchor">
                <CrestSeal size={40} variant="white" decorative className="!p-0" />
                <p className="hero-eyebrow hero-eyebrow--on-dark">
                  Aarhus og Østjylland
                </p>
              </div>
              <h1 className="hero-statement text-ivory">Tryghed i hjemmet</h1>
              <p className="hero-quality text-ivory/90">
                Den samme medarbejder. Tydelig besked til familien
              </p>
              <p className="hero-human text-ivory/72">
                Privat hjemmepleje gennem frit valg — når du er visiteret af
                kommunen
              </p>
              <div className="hero-actions">
                <Link href="/kontakt" className="btn-primary btn-primary--on-dark">
                  Kontakt os om frit valg
                </Link>
                <Link href="/priser" className="btn-secondary btn-secondary--on-dark">
                  Læs om gratis hjemmepleje
                </Link>
              </div>
              <p className="hero-trust-line">
                <a href={COMPANY.phone.href} className="focus-ring">
                  {COMPANY.phone.display}
                </a>
                <span aria-hidden="true">·</span>
                <span>CVR {COMPANY.cvr}</span>
                <span aria-hidden="true">·</span>
                <span>{COMPANY.openingHours.display}</span>
              </p>
            </div>
          </div>
        </div>
        <EditorialTicker />
      </header>

      <section
        className="signature-promise"
        aria-labelledby="quiet-promise-heading"
      >
        <div className="signature-promise-inner page-margin">
          <p className="type-eyebrow signature-promise-eyebrow">Det stille løfte</p>
          <h2 id="quiet-promise-heading" className="signature-promise-statement">
            Vi lover aldrig at glemme, at der bag hver plejeplan står et menneske
          </h2>
          <p className="signature-promise-lede">
            Planen er vigtig. Personen bag den er vigtigere
          </p>
          <p className="mt-10">
            <Link href="/vores-loefte" className="signature-link signature-link--on-dark">
              Læs om vores løfte
            </Link>
          </p>
        </div>
      </section>

      <section
        className="signature-fritvalg section-padding"
        aria-labelledby="fritvalg-heading"
      >
        <div className="page-margin">
          <div className="signature-fritvalg-panel">
            <p className="type-eyebrow">Gratis hjemmepleje</p>
            <h2 id="fritvalg-heading" className="signature-fritvalg-statement">
              {FREE_CARE_MESSAGE}
            </h2>
            <p className="signature-fritvalg-note">{FREE_CARE_NOTE}</p>
            <div className="signature-fritvalg-actions">
              <Link href="/priser" className="btn-primary">
                Sådan fungerer frit valg
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Få hjælp til at skifte
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="signature-compass"
        aria-labelledby="compass-heading"
      >
        <div className="signature-compass-media">
          <DamImage
            assetId={ASSET_IDS.founderStory}
            category="founder"
            fill
            sizes={PHOTO_SIZES.service}
            className="object-cover"
            objectPosition="center 30%"
          />
        </div>
        <div className="signature-compass-copy page-margin">
          <p className="type-eyebrow">Grundlæggerens kompas</p>
          <h2 id="compass-heading" className="signature-compass-quote">
            {VORES_LOFTE_COMPASS}
          </h2>
          <p className="signature-compass-lede">
            Det spørgsmål stiller vi os, før vi træder ind i et hjem. Det er
            udgangspunktet for Premium Care
          </p>
          <p className="mt-10">
            <Link href="/min-historie" className="signature-link">
              Læs grundlæggerens historie
            </Link>
          </p>
        </div>
      </section>

      <section
        className="signature-pathways section-padding section-rule"
        aria-labelledby="pathways-heading"
      >
        <div className="page-margin signature-pathways-layout">
          <div className="signature-pathways-intro">
            <p className="type-eyebrow">Ydelser</p>
            <h2 id="pathways-heading" className="type-section-title text-midnight">
              Rolige veje ind i hjemmet
            </h2>
            <p className="type-lead text-midnight/75 mt-6 max-w-[36ch]">
              Praktisk hjælp, personlig pleje, sygepleje og genoptræning — altid i
              borgerens eget tempo
            </p>
            <p className="mt-8">
              <Link href="/services" className="signature-link">
                Se alle ydelser
              </Link>
            </p>
          </div>
          <ol className="pathway-list">
            {HOME_PATHWAYS.map((service, index) => (
              <li key={service.id} className="pathway-item">
                <span className="pathway-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pathway-body">
                  <h3 className="pathway-title">{service.title}</h3>
                  <p className="pathway-intro">{service.intro}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="signature-trust section-padding"
        aria-labelledby="trust-heading"
      >
        <div className="page-margin">
          <div className="signature-trust-inner">
            <div className="signature-trust-intro">
              <p className="type-eyebrow signature-trust-eyebrow">Tillid som bevis</p>
              <h2 id="trust-heading" className="type-section-title text-ivory">
                Synlig ansvarlighed
              </h2>
              <p className="signature-trust-lede">
                Dokumentation, kvalitet og klageadgang er ikke bilag. Det er den
                måde, vi står til ansvar på
              </p>
            </div>
            <ul className="trust-evidence-list">
              <li>
                <Link href="/dokumentation" className="trust-evidence-link focus-ring">
                  <span className="trust-evidence-label">Dokumentation</span>
                  <span className="trust-evidence-desc">
                    Kvalitetshåndbog, politikker og årsregnskab
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tillid" className="trust-evidence-link focus-ring">
                  <span className="trust-evidence-label">Tillidscenter</span>
                  <span className="trust-evidence-desc">
                    Privatliv, cookies og whistleblower
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/klager" className="trust-evidence-link focus-ring">
                  <span className="trust-evidence-label">Klager</span>
                  <span className="trust-evidence-desc">
                    En tydelig vej, hvis noget ikke er i orden
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/vores-loefte" className="trust-evidence-link focus-ring">
                  <span className="trust-evidence-label">Vores løfte</span>
                  <span className="trust-evidence-desc">
                    Det, vi lover at gøre — og hvordan
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="signature-voice section-padding section-rule">
        <div className="reading-column">
          <p className="type-pullquote text-midnight">
            De første to uger sagde min mor nej til alt. Den tredje uge spurgte
            hun, om Mette kunne komme tidligere
          </p>
          <p className="signature-voice-attribution">Søn til borger</p>
        </div>
      </section>

      <section className="signature-close section-padding">
        <div className="reading-column text-center">
          <CrestSeal size={48} decorative className="!p-0 mx-auto mb-10" />
          <h2 className="type-section-title text-midnight">
            Har du brug for hjælp nu, ringer du
          </h2>
          <p className="type-lead text-midnight/65 mt-6 mx-auto max-w-[36ch]">
            Du behøver ikke have styr på papirerne endnu. Ring, så tager vi den
            derfra
          </p>
          <div className="hero-actions justify-center mt-12">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os om frit valg
            </Link>
            <a href={COMPANY.phone.href} className="btn-secondary">
              Ring {COMPANY.phone.display}
            </a>
          </div>
          <p className="text-[13px] text-midnight/50 mt-8">
            {COMPANY.openingHours.display}
            {" · "}
            Ved akut livstruende fare:{" "}
            <a href="tel:112" className="underline underline-offset-4 focus-ring">
              ring 112
            </a>
          </p>
        </div>
      </section>

      <RecruitmentSection variant="quiet" />
    </div>
  );
}
