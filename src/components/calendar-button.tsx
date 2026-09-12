import { useEffect, useRef } from "react";
import { siteSettings } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";

const SCRIPT_ID = "google-calendar-scheduling-button-script";
const STYLESHEET_ID = "google-calendar-scheduling-button-styles";

type SchedulingButton = {
  load: (options: { url: string; color: string; label: string; target: HTMLDivElement }) => void;
};

declare global {
  interface Window {
    calendar?: { schedulingButton?: SchedulingButton };
  }
}

function loadSchedulingScript(): Promise<void> {
  if (window.calendar?.schedulingButton) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Calendar script failed to load")),
        {
          once: true,
        },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendar script failed to load"));
    document.body.appendChild(script);
  });
}

export function CalendarButton({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    if (!document.getElementById(STYLESHEET_ID)) {
      const stylesheet = document.createElement("link");
      stylesheet.id = STYLESHEET_ID;
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
      document.head.appendChild(stylesheet);
    }

    let cancelled = false;
    loadSchedulingScript()
      .then(() => {
        if (cancelled) return;
        window.calendar?.schedulingButton?.load({
          url: siteSettings.calendarScheduleUrl,
          color: "#33503a",
          label: t.common.bookCalendar,
          target,
        });
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      target.innerHTML = "";
    };
  }, [t.common.bookCalendar]);

  return <div ref={targetRef} className={`calendar-button ${className}`} />;
}
