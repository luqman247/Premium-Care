import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { EditorialTicker } from "@/components/EditorialTicker";
import { RotatingHero } from "@/components/RotatingHero";
import { ASSET_IDS } from "@/lib/dam/asset-ids";
import { COMPANY } from "@/lib/company";
import { FREE_CARE_MESSAGE } from "@/lib/free-care";
import { PHOTO_SIZES } from "@/lib/photography";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { VORES_LOFTE_COMPASS } from "@/lib/vores-lofte";

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
              <h1 className="hero-statement text-ivory">
                Pleje, der føles trygt
              </h1>
              <p className="hero-quality text-ivory/85">
                Den samme medarbejder. Tydelig besked til familien
              </p>
              <div className="hero-actions">
                <a href={COMPANY.phone.href} className="btn-primary btn-primary--on-dark">
                  Ring {COMPANY.phone.display}
                </a>
                <Link href="/priser" className="hero-secondary-link hero-secondary-link--on-dark">
                  Gratis hjemmepleje
                </Link>
              </div>
              <p className="hero-trust-line">
                <span>CVR {COMPANY.cvr}</span>
                <span aria-hidden="true">·</span>
                <span>{COMPANY.openingHours.display}</span>
              </p>
            </div>
          </div>
        </div>
        <EditorialTicker />
      </header>

      <section className="act-fritvalg" aria-labelledby="fritvalg-heading">
        <div className="page-margin">
          <div className="act-fritvalg-stage">
            <h2 id="fritvalg-heading" className="act-fritvalg-statement">
              {FREE_CARE_MESSAGE}
            </h2>
            <p className="act-fritvalg-actions">
              <Link href="/priser" className="signature-link">
                Sådan fungerer frit valg
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        className="wow-compass"
        aria-labelledby="compass-heading"
        data-header-tone="dark"
      >
        <div className="wow-compass-media" aria-hidden="true">
          <DamImage
            assetId={ASSET_IDS.homepageCompass}
            category="founder"
            fill
            sizes={PHOTO_SIZES.hero}
            className="object-cover"
            objectPosition="center 30%"
            priority
          />
        </div>
        <div className="wow-compass-veil" aria-hidden="true" />
        <div className="wow-compass-content page-margin">
          <h2 id="compass-heading" className="wow-compass-quote">
            {VORES_LOFTE_COMPASS}
          </h2>
          <p className="wow-compass-lede">
            Det spørgsmål stiller vi os, før vi træder ind i et hjem
          </p>
          <p className="mt-14">
            <Link href="/min-historie" className="signature-link signature-link--on-dark">
              Min historie
            </Link>
          </p>
        </div>
      </section>

      <section
        className="act-pathways section-padding"
        aria-labelledby="pathways-heading"
      >
        <div className="page-margin act-pathways-layout">
          <div className="act-pathways-intro">
            <h2 id="pathways-heading" className="type-section-title text-midnight">
              Ydelser
            </h2>
            <p className="mt-8">
              <Link href="/services" className="signature-link">
                Se, hvad vi gør
              </Link>
            </p>
          </div>
          <ol className="pathway-list">
            {SERVICE_CATEGORIES.map((service, index) => (
              <li key={service.id} className="pathway-item pathway-item--title">
                <span className="pathway-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="pathway-title">{service.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="act-trust section-padding" aria-labelledby="trust-heading">
        <div className="page-margin act-trust-layout">
          <h2 id="trust-heading" className="type-section-title text-ivory">
            Tillid
          </h2>
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
          <h2 className="type-section-title text-midnight">
            Kontakt os
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={COMPANY.phone.href} className="btn-primary">
              {COMPANY.phone.display}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="signature-link"
            >
              {COMPANY.email}
            </a>
          </div>
          <p className="act-close-meta">
            CVR {COMPANY.cvr}
            <span aria-hidden="true"> · </span>
            {COMPANY.openingHours.display}
          </p>
        </div>
      </section>
    </div>
  );
}
