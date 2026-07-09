import type { Metadata } from "next";
import Link from "next/link";
import { DamImage } from "@/components/DamImage";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Ydelser",
  description: "Hvad vi gør i hjemmet - og hvad vi bevidst lader være",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Ydelser · Premium Care",
    description: "Hvad vi gør i hjemmet - og hvad vi bevidst lader være",
    url: "https://premiumcare.dk/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="type-page-title text-midnight tracking-tight">
            Hvad vi gør
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Pleje i hjemmet, tilpasset den enkelte borger
          </p>
          <FreeCareMessage className="mt-10" />
        </div>
      </section>

      {SERVICE_CATEGORIES.map((service) => (
        <section key={service.id} className="snap-section bg-ivory">
          {service.photo ? (
            <div className="w-full h-[40vh] relative">
              <DamImage
                assetId={service.photo.assetId}
                category="services"
                fill
                sizes={PHOTO_SIZES.service}
                objectPosition={service.photo.objectPosition}
              />
            </div>
          ) : null}
          <div className="section-padding reading-column">
            <h2 className="text-[30px] leading-normal text-midnight">{service.title}</h2>
            <p className="text-[19px] leading-body text-midnight/80 mt-6 max-w-[55ch]">
              {service.intro}
            </p>
            {service.items ? (
              <ul className="mt-8 space-y-3 list-none">
                {service.items.map((item) => (
                  <li key={item} className="text-[17px] leading-body text-midnight/80">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="snap-section bg-midnight section-padding">
        <div className="reading-column">
          <h2 className="text-[30px] leading-normal text-ivory">Det gør vi ikke</h2>
          <p className="text-[17px] leading-body text-ivory/80 mt-12 max-w-[55ch]">
            Vi overtager ikke familiens plads. Du kender din mor bedst. Vi rådgiver
            ikke mod lægens ordination. Vi er her, når I ikke kan være. Og vi giver
            ikke op, fordi hun siger nej den første uge.
          </p>
          <div className="mt-10">
            <Link href="/kontakt" className="btn-primary">
              Kontakt os, hvis du vil høre, hvordan frit valg fungerer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
