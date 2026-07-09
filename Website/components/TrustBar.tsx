import Link from "next/link";
import { COMPANY } from "@/lib/company";

const FOOTER_NAV = [
  { href: "/tillid", label: "Tillidscenter" },
  { href: "/privatliv", label: "Privatliv" },
  { href: "/klager", label: "Klager" },
  { href: "/kommuner", label: "Til kommuner" },
  { href: "/karriere", label: "Karriere" },
  { href: "/min-historie", label: "Min historie" },
  { href: "/ledelse-og-governance", label: "Ledelse og governance" },
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
            <p className="site-footer-label">Navigation</p>
            <ul className="site-footer-nav mt-3">
              {FOOTER_NAV.map((item) => (
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
          <p className="site-footer-detail">
            © {year} {COMPANY.legalName}. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
