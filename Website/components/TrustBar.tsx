import Link from "next/link";
import { CrestSeal } from "@/components/CrestSeal";
import { CREST_SIZES } from "@/lib/brand";
import { COMPANY } from "@/lib/company";

const FOOTER_PRIMARY = [
  { href: "/services", label: "Ydelser" },
  { href: "/priser", label: "Gratis hjemmepleje" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/om-os", label: "Om os" },
  { href: "/min-historie", label: "Min historie" },
  { href: "/karriere", label: "Bliv en del af teamet" },
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

  return (
    <footer role="contentinfo" aria-label="Virksomhedsoplysninger" className="site-footer">
      <div className="site-footer-inner page-margin">
        <div className="site-footer-grid">
          <div>
            <p className="site-footer-brand">{COMPANY.legalName}</p>
            <p className="site-footer-detail">CVR {COMPANY.cvr}</p>
            <address className="site-footer-detail not-italic mt-4">
              {COMPANY.address.street}
              <br />
              {COMPANY.address.postalCode} {COMPANY.address.locality}
              <br />
              {COMPANY.address.country}
            </address>
            <p className="site-footer-detail mt-6 max-w-[32ch]">
              Hvis du er visiteret til hjemmepleje, kan du som udgangspunkt vælge
              privat leverandør uden ekstra betaling
            </p>
          </div>

          <div>
            <p className="site-footer-label">Kontakt</p>
            <p className="site-footer-detail mt-3">
              <a href={COMPANY.phone.href} className="site-footer-link focus-ring">
                {COMPANY.phone.display}
              </a>
            </p>
            <p className="site-footer-detail mt-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="site-footer-link focus-ring"
              >
                {COMPANY.email}
              </a>
            </p>
            <p className="site-footer-detail mt-4">{COMPANY.openingHours.display}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="site-footer-label">Sider</p>
            <ul className="site-footer-nav mt-3">
              {FOOTER_PRIMARY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer-link focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="site-footer-label mt-8">Tillid</p>
            <ul className="site-footer-nav mt-3">
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
          <p className="site-footer-detail">
            © {year} {COMPANY.legalName}. Alle rettigheder forbeholdes
          </p>
        </div>
      </div>
    </footer>
  );
}
