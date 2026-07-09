import Image from "next/image";

type CrestSealProps = {
  size?: number;
  variant?: "fullcolour" | "gold";
  className?: string;
};

export function CrestSeal({
  size = 180,
  variant = "fullcolour",
  className = "",
}: CrestSealProps) {
  const src =
    variant === "gold"
      ? "/assets/brand/crest-emblem-gold.png"
      : "/assets/brand/crest-emblem-fullcolour.png";

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <Image
        src={src}
        alt="Premium Care våbenskjold"
        width={size}
        height={Math.round(size * 1.28)}
        className="object-contain"
        style={{ width: size, height: "auto", maxHeight: Math.round(size * 1.28) }}
      />
    </div>
  );
}
