import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { DamImage } from "@/components/DamImage";
import { EditorialTicker } from "@/components/EditorialTicker";
import { RotatingHero } from "@/components/RotatingHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { FREE_CARE_MESSAGE, FREE_CARE_NOTE } from "@/lib/free-care";
import { PHOTO_SIZES } from "@/lib/photography";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { VORES_LOFTE_COMPASS } from "@/lib/vores-lofte";

export default function HomePage() {
  return (
    <div className="page-flow">
      {/* ACT 1 — Arrival */}
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
              <h1 className="hero-statement text-ivory">
                Pleje, der føles tryg
              </h1>
              <p className="hero-quality text-ivory/90">
                Den samme medarbejder. Tydelig besked til familien
              </p>
              <p className="hero-human text-ivory/70">
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

      {/* ACT 2 — Free choice revelation */}
      <section
        className="act-fritvalg"
        aria-labelledby="fritvalg-heading"
      >
        <div className="page-margin">
          <div className="act-fritvalg-stage">
            <p className="type-eyebrow">Frit valg</p>
            <h2 id="fritvalg-heading" className="act-fritvalg-statement">
              {FREE_CARE_MESSAGE}
            </h2>
            <p className="act-fritvalg-note">{FREE_CARE_NOTE}</p>
            <div className="act-fritvalg-actions">
              <Link href="/priser" className="btn-primary">
                Sådan fungerer det
              </Link>
              <Link href="/kontakt" className="signature-link">
                Få hjælp til at skifte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 3 — Founder compass (WOW) */}
      <section
        className="wow-compass"
        aria-labelledby="compass-heading"
        data-header-tone="dark"
      >
        <div className="wow-compass-media" aria-hidden="true">
          <DamImage
            assetId={ASSET_IDS.founderStory}
            category="founder"
            fill
            sizes={PHOTO_SIZES.hero}
            className="object-cover"
            objectPosition="center 28%"
            priority
          />
        </div>
        <div className="wow-compass-veil" aria-hidden="true" />
        <div className="wow-compass-content page-margin">
          <CrestSeal size={48} variant="white" decorative className="!p-0 mb-10" />
          <p className="type-eyebrow wow-compass-eyebrow">Kompasset</p>
          <h2 id="compass-heading" className="wow-compass-quote">
            {VORES_LOFTE_COMPASS}
          </h2>
          <p className="wow-compass-lede">
            Det spørgsmål stiller vi os, før vi træder ind i et hjem
          </p>
          <p className="mt-12">
            <Link href="/min-historie" className="signature-link signature-link--on-dark">
              Læs grundlæggerens historie
            </Link>
          </p>
        </div>
      </section>

      {/* Quiet institutional breath */}
      <section className="act-breath" aria-label="Vores løfte">
        <div className="page-margin">
          <p className="act-breath-line">
            Vi lover aldrig at glemme, at der bag hver plejeplan står et menneske
          </p>
        </div>
      </section>

      {/* ACT 4 — Services as pathways */}
      <section
        className="act-pathways section-padding"
        aria-labelledby="pathways-heading"
      >
        <div className="page-margin act-pathways-layout">
          <div className="act-pathways-intro">
            <p className="type-eyebrow">Ydelser</p>
            <h2 id="pathways-heading" className="type-section-title text-midnight">
              Seks veje ind i hjemmet
            </h2>
            <p className="type-lead text-midnight/70 mt-6 max-w-[32ch]">
              Altid i borgerens tempo. Altid med respekt for det, der er privat
            </p>
            <p className="mt-8">
              <Link href="/services" className="signature-link">
                Se alle ydelser
              </Link>
            </p>
          </div>
          <ol className="pathway-list pathway-list--full">
            {SERVICE_CATEGORIES.map((service, index) => (
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

      {/* ACT 5 — Trust and action */}
      <section
        className="act-trust section-padding"
        aria-labelledby="trust-heading"
      >
        <div className="page-margin act-trust-layout">
          <div>
            <p className="type-eyebrow act-trust-eyebrow">Tillid</p>
            <h2 id="trust-heading" className="type-section-title text-ivory">
              Synlig ansvarlighed
            </h2>
            <p className="act-trust-lede">
              Dokumentation, klager og whistleblower er ikke bilag. Det er den
              måde, vi står til ansvar på
            </p>
          </div>
          <ul className="act-trust-list">
            <li>
              <Link href="/dokumentation" className="act-trust-link focus-ring">
                Dokumentation
              </Link>
            </li>
            <li>
              <Link href="/tillid" className="act-trust-link focus-ring">
                Tillidscenter
              </Link>
            </li>
            <li>
              <Link href="/klager" className="act-trust-link focus-ring">
                Klager
              </Link>
            </li>
            <li>
              <Link href="/whistleblowing" className="act-trust-link focus-ring">
                Whistleblower
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="act-close section-padding">
        <div className="reading-column text-center">
          <CrestSeal size={44} decorative className="!p-0 mx-auto mb-10" />
          <h2 className="type-section-title text-midnight">
            Ring, hvis du er i tvivl
          </h2>
          <p className="type-lead text-midnight/60 mt-6 mx-auto max-w-[32ch]">
            Du behøver ikke have styr på papirerne endnu
          </p>
          <div className="hero-actions justify-center mt-12">
            <a href={COMPANY.phone.href} className="btn-primary">
              Ring {COMPANY.phone.display}
            </a>
            <Link href="/kontakt" className="btn-secondary">
              Skriv til os
            </Link>
          </div>
          <p className="act-close-meta">
            CVR {COMPANY.cvr}
            <span aria-hidden="true"> · </span>
            {COMPANY.openingHours.display}
            <span aria-hidden="true"> · </span>
            Ved akut livstruende fare:{" "}
            <a href="tel:112" className="underline underline-offset-4 focus-ring">
              ring 112
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
