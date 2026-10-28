import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X, ArrowLeft } from "lucide-react";

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
  const bannerTitleId = useId();
  const bannerDescId = useId();
  const panelTitleId = useId();
  const panelDescId = useId();

  const bannerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const closePanel = useCallback(() => {
    setShowPanel(false);
    if (!consent) setShowBanner(true);
  }, [consent]);

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
    if (showBanner) {
      bannerRef.current?.focus();
    }
  }, [showBanner]);

  useEffect(() => {
    if (!showPanel) return;

    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showPanel, closePanel]);

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
      {/* SCREEN 1: Centered banner obstructing content - 1 step to accept, 2 steps to reject */}
      {showBanner && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={bannerTitleId}
          aria-describedby={bannerDescId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <div
            ref={bannerRef}
            tabIndex={-1}
            className="w-full max-w-lg rounded-3xl border border-border/80 bg-background/98 p-6 sm:p-8 text-foreground shadow-2xl ring-1 ring-black/10 dark:ring-white/10 outline-none animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xl">
                🍪
              </span>
              <h2 id={bannerTitleId} className="text-xl sm:text-2xl font-medium tracking-tight">
                {t.cookies.bannerTitle}
              </h2>
            </div>

            <p
              id={bannerDescId}
              className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground"
            >
              {t.cookies.bannerText}
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={acceptAll}
                className="w-full rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.acceptAll}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowBanner(false);
                  setShowPanel(true);
                }}
                className="w-full rounded-full border border-border/80 bg-card px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {t.cookies.moreInfo}
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link
                to="/politica-de-cookies"
                className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                {t.cookies.policyLink}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 2: Details & Configuration modal - reject is available here */}
      {showPanel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={panelTitleId}
          aria-describedby={panelDescId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            className="my-auto max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-background p-6 text-foreground shadow-2xl outline-none md:p-8 animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <button
                  type="button"
                  onClick={closePanel}
                  className="mb-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>{t.cookies.back}</span>
                </button>
                <h2 id={panelTitleId} className="text-2xl md:text-3xl font-medium tracking-tight">
                  {t.cookies.panelTitle}
                </h2>
                <p id={panelDescId} className="mt-3 text-sm leading-relaxed text-muted-foreground">
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

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium">{t.cookies.necessaryTitle}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {t.cookies.necessaryText}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {t.cookies.alwaysActive}
                  </span>
                </div>
              </div>

              <label className="rounded-2xl border border-border bg-card p-5 cursor-pointer block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-base sm:text-lg font-medium">
                      {t.cookies.analyticsTitle}
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {t.cookies.analyticsText}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                    className="mt-1 size-5 accent-[var(--primary)] cursor-pointer"
                  />
                </div>
              </label>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-2.5 sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring order-3 sm:order-1"
              >
                {t.cookies.rejectAll}
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-center text-sm font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring order-2"
              >
                {t.cookies.savePreferences}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring order-1 sm:order-3"
              >
                {t.cookies.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
