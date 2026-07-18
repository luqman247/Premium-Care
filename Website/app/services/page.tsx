import type { Metadata } from "next";
import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { PHOTO_SIZES } from "@/lib/photography";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Ydelser",
  description: "Hvad vi gør i hjemmet - og hvad vi bevidst lader være",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="page-flow">
      <section className="bg-ivory section-padding">
        <div className="reading-column">
          <p className="type-eyebrow">Ydelser</p>
          <h1 className="type-page-title text-midnight tracking-tight mt-4">
            Hvad vi gør
          </h1>
          <p className="type-lead text-midnight/75 mt-8 max-w-[34ch]">
            Pleje i hjemmet - i det tempo, borgeren kan
          </p>
          <FreeCareMessage className="mt-10" linkLabel="Sådan fungerer frit valg" />
        </div>
      </section>

      {SERVICE_CATEGORIES.map((service, index) => (
        <section
          key={service.id}
          className={`service-pathway${index % 2 === 1 ? " service-pathway--reverse" : ""}`}
          aria-labelledby={`service-${service.id}`}
        >
          {service.photo ? (
            <div className="service-pathway-media">
              <DamImage
                assetId={service.photo.assetId}
                category="services"
                fill
                sizes={PHOTO_SIZES.service}
                objectPosition={service.photo.objectPosition}
              />
            </div>
          ) : (
            <div className="service-pathway-media" aria-hidden="true" />
          )}
          <div className="service-pathway-copy">
            <p className="pathway-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              id={`service-${service.id}`}
              className="type-section-title text-midnight mt-4"
            >
              {service.title}
            </h2>
            <p className="type-lead text-midnight/75 mt-6 max-w-[36ch]">
              {service.intro}
            </p>
            {service.items ? (
              <ul className="mt-8 space-y-3 list-none">
                {service.items.map((item) => (
                  <li key={item} className="text-[17px] leading-body text-midnight/70">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="type-section-title text-ivory">Det gør vi ikke</h2>
          <p className="text-[17px] leading-body text-ivory/75 mt-10 max-w-[42ch]">
            Vi overtager ikke familiens plads. Du kender din mor bedst. Vi rådgiver
            ikke mod lægens ordination. Vi er her, når I ikke kan være. Og vi giver
            ikke op, fordi hun siger nej den første uge
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary btn-primary--on-dark">
              Kontakt os om frit valg
            </Link>
            <Link href="/priser" className="btn-secondary btn-secondary--on-dark">
              Læs om gratis hjemmepleje
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
