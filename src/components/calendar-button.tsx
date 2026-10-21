import React from "react";
import { ValuationModal } from "@/components/valuation-modal";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface CalendarButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  source?: string;
  defaultModality?: string;
}

/**
 * CalendarButton now opens the 15-minute valuation modal to capture the lead
 * directly into the Google Sheets CRM and email notifications, eliminating
 * direct calendar bookings and no-show risks so Maria has 100% schedule control.
 */
export function CalendarButton({
  className = "",
  children,
  label,
  source = "Web - Solicitud Valoración 15 min",
  defaultModality,
}: CalendarButtonProps) {
  const { t } = useI18n();
  const resolvedLabel =
    label ?? (typeof children === "string" ? children : undefined) ?? t.common.bookCalendar;

  return (
    <ValuationModal
      source={source}
      defaultModality={defaultModality}
      triggerLabel={resolvedLabel}
      triggerClassName={className}
    >
      {typeof children !== "string" && children ? (
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring",
            className
          )}
        >
          {children}
        </button>
      ) : undefined}
    </ValuationModal>
  );
}

export const ValuationButton = CalendarButton;
