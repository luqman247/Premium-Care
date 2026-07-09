export const COOKIE_CONSENT_KEY = "premium-care-cookie-consent-v1";

export type CookieCategory = "necessary" | "functional" | "experience" | "measurement" | "marketing";

export type CookieConsentState = {
  necessary: true;
  functional: boolean;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
  decidedAt: string;
};

export const DEFAULT_COOKIE_CONSENT: CookieConsentState = {
  necessary: true,
  functional: false,
  experience: false,
  measurement: false,
  marketing: false,
  decidedAt: "",
};

export function acceptAllConsent(): CookieConsentState {
  return {
    necessary: true,
    functional: true,
    experience: true,
    measurement: true,
    marketing: true,
    decidedAt: new Date().toISOString(),
  };
}

export function rejectAllConsent(): CookieConsentState {
  return {
    ...DEFAULT_COOKIE_CONSENT,
    decidedAt: new Date().toISOString(),
  };
}
