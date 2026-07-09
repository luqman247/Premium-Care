import type { Metadata } from "next";
import Link from "next/link";
import { HeroImage } from "@/components/HeroImage";
import { FreeCareMessage } from "@/components/FreeCareMessage";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { PHOTO_SIZES } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Services",
  description: "Hvad vi gør - og hvad vi bevidst lader være",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services · Premium Care",
    description: "Hvad vi gør - og hvad vi bevidst lader være",
    url: "https://premiumcare.dk/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="page-flow">
      <section className="snap-section bg-ivory section-padding">
        <div className="reading-column">
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight">
            Hvad vi gør
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            Helhedspleje tilpasset hvert menneske - og hvad vi bevidst lader være
          </p>
          <FreeCareMessage className="mt-10" />
        </div>
      </section>

      {SERVICE_CATEGORIES.map((service) => (
        <section key={service.id} className="snap-section bg-ivory">
          {service.photo ? (
            <div className="w-full h-[40vh] relative">
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
            Vi overtager ikke ansvaret fra dig. Du kender din mor bedst. Vi rådgiver
            ikke mod lægens ordination. Vi erstatter ikke familiens besøg. Vi er her,
            når I ikke kan være - ikke i stedet for jer. Og vi giver aldrig op, selv
            når hun siger nej.
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
