import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import {
  applyConsent,
  CONSENT_OPEN_EVENT,
  getStoredConsent,
  saveConsent,
  type ConsentPreferences,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);

    if (stored) {
      setAnalytics(stored.analytics);
      applyConsent(stored);
    } else {
      setShowBanner(true);
    }

    const openPreferences = () => {
      const latest = getStoredConsent();
      setAnalytics(latest?.analytics ?? false);
      setShowBanner(false);
      setShowPanel(true);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, openPreferences);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    if (!showPanel) return;

    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showPanel, consent]);

  const closePanel = () => {
    setShowPanel(false);
    if (!consent) setShowBanner(true);
  };

  const commit = (next: { analytics: boolean; marketing?: boolean }) => {
    const saved = saveConsent({
      analytics: next.analytics,
      marketing: next.marketing ?? false,
    });
    setConsent(saved);
    setAnalytics(saved.analytics);
    setShowBanner(false);
    setShowPanel(false);
  };

  const acceptAll = () => commit({ analytics: true, marketing: false });
  const rejectAll = () => commit({ analytics: false, marketing: false });
  const savePreferences = () => commit({ analytics, marketing: false });

  return (
    <>
      {showBanner && (
        <section
          aria-label={t.cookies.bannerAriaLabel}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-4 backdrop-blur md:px-6"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-border/60 bg-card p-5 text-card-foreground md:flex-row md:items-end md:justify-between md:p-6">
            <div className="max-w-3xl">
              <h2 className="text-xl">{t.cookies.bannerTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.cookies.bannerText}
              </p>
              <Link
                to="/politica-de-cookies"
                className="mt-3 inline-flex text-sm text-primary underline underline-offset-4"
              >
                {t.cookies.policyLink}
              </Link>
            </div>
            <div className="grid gap-2 sm:grid-cols-3 md:min-w-[28rem]">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.reject}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowPanel(true);
                }}
                className="rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.configure}
              </button>
            </div>
          </div>
        </section>
      )}

      {showPanel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="fixed inset-0 z-50 grid place-items-end bg-foreground/20 p-4 md:place-items-center"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background p-6 text-foreground outline-none md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="text-2xl md:text-3xl">
                  {t.cookies.panelTitle}
                </h2>
                <p
                  id={descriptionId}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                >
                  {t.cookies.panelIntro}
                </p>
              </div>
              <button
                type="button"
                onClick={closePanel}
                aria-label={t.cookies.close}
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg">{t.cookies.necessaryTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.cookies.necessaryText}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {t.cookies.alwaysActive}
                  </span>
                </div>
              </div>

              <label className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-lg">{t.cookies.analyticsTitle}</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.cookies.analyticsText}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    className="mt-1 size-5 accent-[var(--primary)]"
                  />
                </div>
              </label>
            </div>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.savePreferences}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.reject}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
