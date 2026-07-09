import Link from "next/link";

export function TrustBar() {
  return (
    <footer role="contentinfo" aria-label="Virksomhedsoplysninger">
      <nav
        className="text-center py-6 border-t border-midnight/10"
        aria-label="Footer"
      >
        <Link
          href="/min-historie"
          className="text-[13px] uppercase tracking-wide text-midnight/60 hover:text-midnight transition-colors focus-ring"
        >
          Min historie
        </Link>
      </nav>
      <div className="trust-bar">
        CVR: 00 00 00 00 · Godkendt af Københavns Kommune · Dansk Arbejdsmiljø ·
        ISO 9001:2015
      </div>
    </footer>
  );
}
