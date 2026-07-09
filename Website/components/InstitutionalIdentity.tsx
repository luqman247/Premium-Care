import Link from "next/link";
import { COMPANY_IDENTITY_LINE } from "@/lib/institutional";

type InstitutionalIdentityProps = {
  showMunicipalLink?: boolean;
  className?: string;
};

export function InstitutionalIdentity({
  showMunicipalLink = false,
  className = "",
}: InstitutionalIdentityProps) {
  return (
    <div className={`institutional-identity ${className}`.trim()}>
      <p className="institutional-identity-line">{COMPANY_IDENTITY_LINE}</p>
      {showMunicipalLink ? (
        <p className="institutional-identity-links">
          <Link href="/kommuner" className="institutional-link focus-ring">
            Kommunal indkøb og beslutningsgrundlag
          </Link>
          {" · "}
          <Link href="/tillid" className="institutional-link focus-ring">
            Tillidscenter
          </Link>
          {" · "}
          <Link href="/dokumentation" className="institutional-link focus-ring">
            Dokumentation
          </Link>
        </p>
      ) : null}
    </div>
  );
}
