"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Ydelser" },
  { href: "/priser", label: "Gratis hjemmepleje" },
  { href: "/om-os", label: "Om os" },
  { href: "/min-historie", label: "Min historie" },
  { href: "/kontakt", label: "Kontakt" },
];

export type HeaderTone = "dark" | "light";

type NavContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  headerTone: HeaderTone;
  headerCompact: boolean;
  overlayId: string;
};

const NavContext = createContext<NavContextValue | null>(null);

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within NavigationProvider");
  }
  return context;
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const overlayId = useId().replace(/:/g, "");
  const [isOpen, setIsOpen] = useState(false);
  const [headerTone, setHeaderTone] = useState<HeaderTone>(() =>
    pathname === "/" ? "dark" : "light",
  );
  const [headerCompact, setHeaderCompact] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setHeaderCompact(window.scrollY > 40);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const darkHeader = document.querySelector<HTMLElement>(
      "[data-header-tone='dark']",
    );

    if (!darkHeader) {
      setHeaderTone("light");
      return;
    }

    const updateTone = () => {
      setHeaderTone(
        darkHeader.getBoundingClientRect().bottom > 28 ? "dark" : "light",
      );
    };

    updateTone();

    const observer = new IntersectionObserver(() => updateTone(), {
      threshold: [0, 0.15, 0.5, 1],
    });

    observer.observe(darkHeader);
    window.addEventListener("scroll", updateTone, { passive: true });
    window.addEventListener("resize", updateTone);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTone);
      window.removeEventListener("resize", updateTone);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const focusable = overlay?.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <NavContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close,
        headerTone,
        headerCompact,
        overlayId: `site-nav-overlay-${overlayId}`,
      }}
    >
      {children}
      {isOpen ? (
        <div
          ref={overlayRef}
          id={`site-nav-overlay-${overlayId}`}
          className="nav-overlay open"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <button
            type="button"
            onClick={close}
            className="nav-overlay-close focus-ring"
            aria-label="Luk menu"
          >
            <span className="nav-menu-pill-label">Luk</span>
          </button>
          <nav className="nav-overlay-nav" aria-label="Primær">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="nav-overlay-link focus-ring"
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
  const { isOpen, open, headerTone, headerCompact, overlayId } = useNav();

  if (isOpen) {
    return null;
  }

  const variantClass =
    variant === "fixed" ? "nav-menu-trigger--fixed" : "nav-menu-trigger--inline";

  return (
    <button
      type="button"
      onClick={open}
      className={[
        "nav-menu-trigger",
        "nav-menu-pill",
        `nav-menu-pill--${headerTone}`,
        headerCompact ? "nav-menu-pill--compact" : "",
        variantClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Åbn menu"
      aria-expanded={false}
      aria-controls={overlayId}
    >
      <span className="nav-menu-pill-label">Menu</span>
    </button>
  );
}
