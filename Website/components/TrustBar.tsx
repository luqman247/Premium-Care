import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { CREST_SIZES } from "@/lib/brand";
import { COMPANY } from "@/lib/company";

const FOOTER_ESSENTIAL = [
  { href: "/services", label: "Ydelser" },
  { href: "/priser", label: "Gratis hjemmepleje" },
  { href: "/om-os", label: "Om os" },
  { href: "/min-historie", label: "Min historie" },
  { href: "/kontakt", label: "Kontakt" },
];

const FOOTER_TRUST = [
  { href: "/tillid", label: "Tillid" },
  { href: "/dokumentation", label: "Dokumentation" },
  { href: "/vores-loefte", label: "Vores løfte" },
  { href: "/privatliv", label: "Privatliv" },
  { href: "/klager", label: "Klager" },
  { href: "/karriere", label: "Karriere" },
];

export function TrustBar() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Virksomhedsoplysninger" className="site-footer">
      <div className="site-footer-inner page-margin">
        <div className="site-footer-signature">
          <div className="site-footer-identity">
            <Link
              href="/"
              className="site-footer-crest focus-ring"
              aria-label="Premium Care - forsiden"
            >
              <CrestSeal
                size={CREST_SIZES.sm}
                variant="white"
                decorative
                className="!p-0"
              />
            </Link>
            <div>
              <p className="site-footer-brand">{COMPANY.legalName}</p>
              <p className="site-footer-detail">CVR {COMPANY.cvr}</p>
              <p className="site-footer-trust-note">
                Privat hjemmepleje gennem frit valg
              </p>
            </div>
          </div>

          <div className="site-footer-contact">
            <a href={COMPANY.phone.href} className="site-footer-link focus-ring">
              {COMPANY.phone.display}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="site-footer-link focus-ring"
            >
              {COMPANY.email}
            </a>
            <span className="site-footer-detail">{COMPANY.openingHours.display}</span>
          </div>
        </div>

        <details className="site-footer-accordion">
          <summary className="site-footer-accordion-summary">Sider og tillid</summary>
          <div className="site-footer-accordion-body">
            <nav aria-label="Hovedsider">
              <ul className="site-footer-inline">
                {FOOTER_ESSENTIAL.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-footer-link focus-ring">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Tillid og juridisk" className="mt-4">
              <ul className="site-footer-inline site-footer-inline--quiet">
                {FOOTER_TRUST.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-footer-link focus-ring">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </details>

        <div className="site-footer-desktop-nav">
          <nav aria-label="Hovedsider">
            <ul className="site-footer-inline">
              {FOOTER_ESSENTIAL.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer-link focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Tillid og juridisk">
            <ul className="site-footer-inline site-footer-inline--quiet">
              {FOOTER_TRUST.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer-link focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="site-footer-legal">
          © {year} {COMPANY.legalName}
          <span className="site-footer-legal-sep" aria-hidden="true">
            ·
          </span>
          CVR {COMPANY.cvr}
        </p>
      </div>
    </footer>
  );
}
