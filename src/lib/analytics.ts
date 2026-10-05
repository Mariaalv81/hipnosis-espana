declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", action, params);
    } catch (err) {
      console.warn("Analytics tracking warning:", err);
    }
  }
}

export function trackLeadSubmission(source: string, modality?: string) {
  trackEvent("generate_lead", {
    event_category: "Leads",
    event_label: source,
    lead_source: source,
    modality: modality || "No indicada",
  });
}

export function trackWhatsAppClick(source: string) {
  trackEvent("contact", {
    event_category: "WhatsApp",
    event_label: source,
    contact_method: "whatsapp",
  });
}

export function trackCalendarClick(source: string) {
  trackEvent("begin_checkout", {
    event_category: "Calendar",
    event_label: source,
    booking_channel: "google_calendar",
  });
}
