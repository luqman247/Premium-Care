import Link from "next/link";
import {
  EXTRA_CARE_PRICING,
  EXTRA_CARE_SCHEDULES,
} from "@/lib/pricing";

export function ExtraCarePricing() {
  return (
    <section className="snap-section bg-ivory section-padding section-rule">
      <div className="reading-column">
        <h2 className="type-section-title text-midnight">
          {EXTRA_CARE_PRICING.title}
          <span className="pricing-title-accent">
            {" "}
            {EXTRA_CARE_PRICING.titleAccent}
          </span>
        </h2>

        <p className="text-[19px] leading-body text-midnight/90 mt-8 max-w-[55ch]">
          {EXTRA_CARE_PRICING.intro}
        </p>

        <p className="pricing-scope-note">{EXTRA_CARE_PRICING.scopeNote}</p>

        <div className="pricing-schedule-grid">
          {EXTRA_CARE_SCHEDULES.map((schedule) => (
            <article key={schedule.title} className="pricing-schedule-card">
              <h3 className="pricing-schedule-title">{schedule.title}</h3>
              <dl className="pricing-rate-list">
                {schedule.rates.map((rate) => (
                  <div key={rate.period} className="pricing-rate-row">
                    <dt>{rate.period}</dt>
                    <dd>{rate.amount}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="pricing-vat-note">{EXTRA_CARE_PRICING.vatNote}</p>

        <p className="text-[17px] leading-body text-midnight/80 mt-8 max-w-[55ch]">
          {EXTRA_CARE_PRICING.closing}
        </p>

        <p className="mt-10">
          <Link href="/kontakt" className="btn-primary">
            Kontakt os om tilkøb
          </Link>
        </p>
      </div>
    </section>
  );
}
