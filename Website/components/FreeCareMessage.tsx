import Link from "next/link";
import { FREE_CARE_MESSAGE, FREE_CARE_NOTE } from "@/lib/free-care";

type FreeCareMessageProps = {
  className?: string;
  showNote?: boolean;
  showLink?: boolean;
  linkHref?: string;
  linkLabel?: string;
};

export function FreeCareMessage({
  className = "",
  showNote = true,
  showLink = true,
  linkHref = "/priser",
  linkLabel = "Læs om gratis hjemmepleje",
}: FreeCareMessageProps) {
  return (
    <div className={className}>
      <p className="type-lead text-midnight max-w-[42ch]">{FREE_CARE_MESSAGE}</p>
      {showNote ? (
        <p className="text-[17px] leading-body text-midnight/68 mt-6 max-w-[48ch]">
          {FREE_CARE_NOTE}
        </p>
      ) : null}
      {showLink && linkHref ? (
        <p className="mt-8">
          <Link
            href={linkHref}
            className="signature-link focus-ring"
          >
            {linkLabel}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
