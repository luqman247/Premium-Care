"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Hjem" },
  { href: "/services", label: "Ydelser" },
  { href: "/priser", label: "Gratis hjemmepleje" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/tillid", label: "Tillid" },
];

type NavContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const NavContext = createContext<NavContextValue | null>(null);

function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("MenuTrigger must be used within NavigationProvider");
  }
  return context;
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <NavContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close,
      }}
    >
      {children}
      {isOpen ? (
        <div
          id="site-nav-overlay"
          className="nav-overlay open"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-[8%] type-caption text-midnight/70 hover:text-midnight transition-colors duration-500 focus-ring"
            aria-label="Luk menu"
          >
            Luk
          </button>
          <nav className="flex flex-col items-center gap-6" aria-label="Primær">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-[24px] font-body text-midnight hover:opacity-70 transition-opacity duration-500 focus-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </NavContext.Provider>
  );
}

type MenuTriggerProps = {
  variant?: "inline" | "fixed";
  className?: string;
};

export function MenuTrigger({
  variant = "inline",
  className = "",
}: MenuTriggerProps) {
  const { isOpen, open } = useNav();

  if (isOpen) {
    return null;
  }

  const variantClass =
    variant === "fixed" ? "nav-menu-trigger--fixed" : "nav-menu-trigger--inline";

  return (
    <button
      type="button"
      onClick={open}
      className={`nav-menu-trigger ${variantClass} type-caption text-midnight/70 hover:text-midnight transition-colors duration-500 focus-ring ${className}`.trim()}
      aria-label="Åbn menu"
      aria-expanded={false}
      aria-controls="site-nav-overlay"
    >
      Menu
    </button>
  );
}
