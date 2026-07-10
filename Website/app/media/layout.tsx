import type { Metadata } from "next";
import Link from "next/link";
import "./dam.css";

export const metadata: Metadata = {
  title: "Media",
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/media", label: "Dashboard" },
  { href: "/media/library", label: "Library" },
  { href: "/media/guide", label: "Photography Guide" },
  { href: "/media/generate", label: "Generate" },
  { href: "/media/prompts", label: "Prompts" },
  { href: "/media/table", label: "Table" },
];

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dam-app">
      <aside className="dam-sidebar">
        <div className="dam-sidebar-brand">
          <Link href="/media" className="dam-sidebar-title">
            PremiumCare Media
          </Link>
          <p className="dam-sidebar-subtitle">Editorial Asset Management</p>
        </div>
        <nav className="dam-sidebar-nav" aria-label="Media navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="dam-sidebar-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="dam-sidebar-footer">
          <Link href="/" className="dam-sidebar-back">
            ← Back to website
          </Link>
        </div>
      </aside>
      <div className="dam-main">
        <header className="dam-topbar">
          <p className="dam-topbar-label">Editorial Photography Bible</p>
          <p className="dam-topbar-meta">Single source of truth</p>
        </header>
        <div className="dam-content">{children}</div>
      </div>
    </div>
  );
}
