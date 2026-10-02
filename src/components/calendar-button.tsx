import { siteSettings } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";

export function CalendarButton({
  className = "",
  children,
  label,
}: {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}) {
  const { t } = useI18n();

  return (
    <a
      href={siteSettings.calendarScheduleUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring ${className}`}
    >
      {children ?? label ?? t.common.bookCalendar}
    </a>
  );
}
