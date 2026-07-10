import Link from "next/link";
import type { TrustPolicy } from "@/lib/trust-policies";
import { COMPANY } from "@/lib/company";

type PolicyStatementProps = {
  policy: TrustPolicy;
};

export function PolicyStatement({ policy }: PolicyStatementProps) {
  return (
    <article className="bg-ivory pb-24">
      <header className="section-padding page-margin">
        <div className="reading-column">
          <p className="text-[13px] uppercase tracking-wide text-midnight/60">
            Tillidscenter
          </p>
          <h1 className="text-[38px] leading-snug tracking-tight text-midnight mt-6">
            {policy.title}
          </h1>
          <p className="text-[19px] leading-body text-midnight/80 mt-8">
            {policy.description}
          </p>
        </div>
      </header>

      <div className="reading-column page-margin space-y-0">
        <section className="section-padding pt-0" aria-labelledby="policy-purpose">
          <h2 id="policy-purpose" className="text-[30px] leading-normal text-midnight">
            Formål
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            {policy.purpose}
          </p>
        </section>

        <section className="section-padding" aria-labelledby="policy-why">
          <h2 id="policy-why" className="text-[30px] leading-normal text-midnight">
            Hvorfor det betyder noget
          </h2>
          <p className="text-[19px] leading-body text-midnight/90 mt-8">
            {policy.whyItMatters}
          </p>
        </section>

        <section
          className="section-padding bg-midnight -mx-[8%] px-[8%]"
          aria-labelledby="policy-commitments"
        >
          <div className="reading-column mx-auto">
            <h2 id="policy-commitments" className="text-[30px] leading-normal text-ivory">
              Vores forpligtelser
            </h2>
            <ul className="mt-10 space-y-4 list-none">
              {policy.commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="text-[17px] leading-body text-ivory/90"
                >
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {policy.documentHref && (
          <section className="section-padding" aria-labelledby="policy-document">
            <h2 id="policy-document" className="text-[30px] leading-normal text-midnight">
              Fuldt dokument
            </h2>
            <p className="text-[17px] leading-body text-midnight/80 mt-8">
              Resuméet her er vejledende. Det fulde dokument gælder, hvis noget ikke
              stemmer overens
            </p>
            <a
              href={policy.documentHref}
              className="btn-secondary mt-8 inline-flex"
              download
            >
              {policy.documentLabel ?? "Download PDF"}
            </a>
          </section>
        )}

        {policy.contactNote && (
          <section className="section-padding" aria-labelledby="policy-contact">
            <h2 id="policy-contact" className="text-[30px] leading-normal text-midnight">
              Kontakt
            </h2>
            <p className="text-[17px] leading-body text-midnight/80 mt-8">
              {policy.contactNote}
            </p>
            <p className="text-[17px] leading-body text-midnight mt-6">
              <a
                href={COMPANY.phone.href}
                className="underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
              >
                {COMPANY.phone.display}
              </a>
              {" · "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="underline underline-offset-4 hover:text-midnight/80 transition-colors focus-ring"
              >
                {COMPANY.email}
              </a>
            </p>
          </section>
        )}

        <section className="section-padding border-t border-midnight/10">
          <p className="text-[17px] leading-body text-midnight/70">
            <Link
              href="/tillid"
              className="underline underline-offset-4 hover:text-midnight transition-colors focus-ring"
            >
              Tilbage til Tillidscenter
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
