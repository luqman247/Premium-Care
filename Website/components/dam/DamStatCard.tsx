type DamStatCardProps = {
  label: string;
  value: number | string;
  accent?: "positive" | "warning" | "muted";
};

export function DamStatCard({ label, value, accent }: DamStatCardProps) {
  return (
    <article className={`dam-stat-card${accent ? ` dam-stat-card--${accent}` : ""}`}>
      <p className="dam-stat-label">{label}</p>
      <p className="dam-stat-value">{value}</p>
    </article>
  );
}
