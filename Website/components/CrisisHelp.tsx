import { COMPANY } from "@/lib/company";

type CrisisHelpProps = {
  className?: string;
  compact?: boolean;
};

export function CrisisHelp({ className = "", compact = false }: CrisisHelpProps) {
  return (
    <div
      className={`crisis-help ${compact ? "crisis-help-compact" : ""} ${className}`.trim()}
      role="note"
      aria-label="Akut hjælp"
    >
      <p className="crisis-help-lead">Har du brug for hjælp nu?</p>
      <p className="crisis-help-primary">
        <a href={COMPANY.phone.href} className="crisis-help-phone focus-ring">
          Ring {COMPANY.phone.display}
        </a>
      </p>
      <p className="crisis-help-secondary">
        {COMPANY.openingHours.display}
        {" · "}
        Ved akut livstruende fare:{" "}
        <a href="tel:112" className="crisis-help-emergency focus-ring">
          ring 112
        </a>
      </p>
    </div>
  );
}
