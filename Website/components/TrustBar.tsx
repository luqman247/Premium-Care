import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { CREST_SIZES } from "@/lib/brand";
import { COMPANY } from "@/lib/company";

const FOOTER_MAIN = [
  { href: "/services", label: "Ydelser" },
  { href: "/priser", label: "Gratis hjemmepleje" },
  { href: "/om-os", label: "Om os" },
  { href: "/min-historie", label: "Min historie" },
  { href: "/karriere", label: "Bliv en del af teamet" },
  { href: "/kontakt", label: "Kontakt" },
];

const FOOTER_TRUST = [
  { href: "/tillid", label: "Tillidscenter" },
  { href: "/dokumentation", label: "Dokumentation" },
  { href: "/vores-loefte", label: "Vores løfte" },
  { href: "/whistleblowing", label: "Whistleblower-ordning" },
  { href: "/privatliv", label: "Privatliv" },
  { href: "/cookiepolitik", label: "Cookiepolitik" },
  { href: "/klager", label: "Klager" },
];

export function TrustBar() {
  const year = new Date().getFullYear();
  const trustLeft = FOOTER_TRUST.slice(0, 4);
  const trustRight = FOOTER_TRUST.slice(4);

  return (
    <footer role="contentinfo" aria-label="Virksomhedsoplysninger" className="site-footer">
      <div className="site-footer-inner page-margin">
        <div className="site-footer-grid">
          <div className="site-footer-col">
            <p className="site-footer-brand">{COMPANY.legalName}</p>
            <p className="site-footer-detail">CVR {COMPANY.cvr}</p>
            <address className="site-footer-detail not-italic site-footer-address">
              {COMPANY.address.street}
              <br />
              {COMPANY.address.postalCode} {COMPANY.address.locality}
              <br />
              {COMPANY.address.country}
            </address>
            <p className="site-footer-trust-note">
              Privat hjemmepleje gennem frit valg, når du er visiteret af kommunen
            </p>
          </div>

          <div className="site-footer-col">
            <p className="site-footer-label">Kontakt</p>
            <ul className="site-footer-nav">
              <li>
                <a href={COMPANY.phone.href} className="site-footer-link focus-ring">
                  {COMPANY.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="site-footer-link focus-ring"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="site-footer-detail">{COMPANY.openingHours.display}</span>
              </li>
            </ul>
            <p className="site-footer-cta">
              <Link href="/kontakt" className="site-footer-link site-footer-link-cta focus-ring">
                Kontakt os om frit valg
              </Link>
            </p>
          </div>

          <nav className="site-footer-col" aria-label="Hovedsider">
            <p className="site-footer-label">Sider</p>
            <ul className="site-footer-nav">
              {FOOTER_MAIN.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer-link focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer-col" aria-label="Tillid og juridisk">
            <p className="site-footer-label">Tillid</p>
            <div className="site-footer-trust-grid">
              <ul className="site-footer-nav">
                {trustLeft.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-footer-link focus-ring">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="site-footer-nav">
                {trustRight.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="site-footer-link focus-ring">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="site-footer-bottom">
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
          <p className="site-footer-legal">
            © {year} {COMPANY.legalName}
            <span className="site-footer-legal-sep" aria-hidden="true">
              ·
            </span>
            CVR {COMPANY.cvr}
            <span className="site-footer-legal-sep" aria-hidden="true">
              ·
            </span>
            Alle rettigheder forbeholdes
          </p>
          <p className="site-footer-signature">
            Udviklet med omsorg, struktur og ansvar
          </p>
        </div>
      </div>
    </footer>
  );
}
