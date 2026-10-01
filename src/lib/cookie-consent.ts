export const CONSENT_VERSION = "1.0";
export const CONSENT_STORAGE_KEY = "maria-cabo-cookie-consent";
export const CONSENT_OPEN_EVENT = "maria-cabo:open-cookie-preferences";
export const GA_MEASUREMENT_ID = "G-HEF4PZK50X";

export type ConsentPreferences = {
  version: string;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<ConsentPreferences>;
    if (parsed.version !== CONSENT_VERSION || parsed.necessary !== true) return null;

    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      timestamp: typeof parsed.timestamp === "string" ? parsed.timestamp : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveConsent(
  preferences: Pick<ConsentPreferences, "analytics" | "marketing">,
): ConsentPreferences {
  const consent: ConsentPreferences = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    timestamp: new Date().toISOString(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  applyConsent(consent);
  return consent;
}

export function applyConsent(consent: ConsentPreferences): void {
  if (consent.analytics) {
    loadGoogleAnalytics();
    return;
  }

  disableGoogleAnalytics();
}

export function loadGoogleAnalytics(): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  if (!document.getElementById("google-analytics-gtag")) {
    const script = document.createElement("script");
    script.id = "google-analytics-gtag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function disableGoogleAnalytics(): void {
  if (typeof window === "undefined") return;

  (window as Window & Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  document.getElementById("google-analytics-gtag")?.remove();
  deleteGoogleAnalyticsCookies();
}

export function deleteGoogleAnalyticsCookies(): void {
  const hostParts = window.location.hostname.split(".");
  const domains = [
    window.location.hostname,
    `.${window.location.hostname}`,
    hostParts.length > 2 ? `.${hostParts.slice(-2).join(".")}` : "",
  ].filter(Boolean);

  ["_ga", `_ga_${GA_MEASUREMENT_ID.replace("G-", "")}`, "_gid", "_gat"].forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    });
  });
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
