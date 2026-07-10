"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  acceptAllConsent,
  COOKIE_CONSENT_KEY,
  rejectAllConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent";

const CATEGORIES = [
  { key: "necessary" as const, label: "Nødvendige cookies", locked: true },
  { key: "functional" as const, label: "Funktionalitet", locked: false },
  { key: "experience" as const, label: "Brugeroplevelse", locked: false },
];

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Omit<CookieConsentState, "decidedAt" | "necessary">>({
    functional: false,
    experience: false,
    measurement: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(state: CookieConsentState) {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  function handleAcceptAll() {
    saveConsent(acceptAllConsent());
  }

  function handleRejectAll() {
    saveConsent(rejectAllConsent());
  }

  function handleSaveChoices() {
    saveConsent({
      necessary: true,
      ...prefs,
      measurement: false,
      marketing: false,
      decidedAt: new Date().toISOString(),
    });
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="cookie-consent-inner page-margin">
        <div className="cookie-consent-content">
          <h2 id="cookie-consent-title" className="cookie-consent-title">
            Denne hjemmeside bruger cookies
          </h2>
          <p id="cookie-consent-desc" className="cookie-consent-body">
            Vi bruger nødvendige cookies for at få hjemmesiden til at fungere. Med dit
            samtykke kan vi også bruge cookies til at forbedre brugeroplevelsen
          </p>
          <p className="cookie-consent-body mt-3">
            <Link href="/cookiepolitik" className="cookie-consent-link focus-ring">
              Læs cookiepolitik
            </Link>
          </p>

          {expanded ? (
            <div className="cookie-consent-options mt-6">
              {CATEGORIES.map((category) => (
                <label key={category.key} className="cookie-consent-option focus-ring">
                  <input
                    type="checkbox"
                    checked={
                      category.key === "necessary" ? true : prefs[category.key]
                    }
                    disabled={category.locked}
                    onChange={(event) => {
                      if (category.locked || category.key === "necessary") return;
                      setPrefs((current) => ({
                        ...current,
                        [category.key]: event.target.checked,
                      }));
                    }}
                  />
                  <span>{category.label}</span>
                </label>
              ))}
            </div>
          ) : null}
        </div>

        <div className="cookie-consent-actions">
          <button
            type="button"
            className="cookie-consent-btn cookie-consent-btn-secondary focus-ring"
            onClick={handleRejectAll}
          >
            Afvis alle
          </button>
          {expanded ? (
            <button
              type="button"
              className="cookie-consent-btn cookie-consent-btn-secondary focus-ring"
              onClick={handleSaveChoices}
            >
              Gem valg
            </button>
          ) : (
            <button
              type="button"
              className="cookie-consent-btn cookie-consent-btn-secondary focus-ring"
              onClick={() => setExpanded(true)}
            >
              Tilpas
            </button>
          )}
          <button
            type="button"
            className="cookie-consent-btn cookie-consent-btn-primary focus-ring"
            onClick={handleAcceptAll}
          >
            Accepter alle
          </button>
        </div>
      </div>
    </div>
  );
}
