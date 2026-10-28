import {
  Apple,
  BookOpen,
  Brain,
  CigaretteOff,
  Clock,
  Heart,
  MapPin,
  Sparkles,
  Sun,
} from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/content/site-settings";
import { trackWhatsAppClick } from "@/lib/analytics";

type EventCardsProps = {
  limit?: number;
  variant?: "compact" | "full";
  showEmpty?: boolean;
  status?: "all" | "upcoming" | "past";
  showHeadings?: boolean;
};

type EventItem = ReturnType<typeof useI18n>["t"]["events"]["items"][number];
type EventStatus = "upcoming" | "past";

function getEventIcon(title: string, index: number) {
  const lower = title.toLowerCase();
  if (lower.includes("tabac") || lower.includes("fumar")) return CigaretteOff;
  if (
    lower.includes("querer") ||
    lower.includes("voler") ||
    lower.includes("love") ||
    lower.includes("perderte") ||
    lower.includes("perdre't")
  ) {
    return Heart;
  }
  if (lower.includes("calma") || lower.includes("seren")) return Sparkles;
  if (lower.includes("estudio") || lower.includes("estudi") || lower.includes("examen"))
    return BookOpen;
  if (
    lower.includes("peso") ||
    lower.includes("pes") ||
    lower.includes("hábito") ||
    lower.includes("habit") ||
    lower.includes("weight")
  ) {
    return Apple;
  }
  if (
    lower.includes("ansiedad") ||
    lower.includes("ansietat") ||
    lower.includes("miedo") ||
    lower.includes("por") ||
    lower.includes("fear")
  ) {
    return Brain;
  }
  const defaults = [Sparkles, Heart, Sun, Brain, BookOpen];
  return defaults[index % defaults.length];
}

function todayStart() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
}

function eventTime(event: EventItem) {
  return new Date(`${event.dateISO}T00:00:00`).getTime();
}

function splitEvents(events: EventItem[]) {
  const today = todayStart();

  return {
    upcoming: events
      .filter((event) => eventTime(event) >= today)
      .sort((a, b) => eventTime(a) - eventTime(b)),
    past: events
      .filter((event) => eventTime(event) < today)
      .sort((a, b) => eventTime(b) - eventTime(a)),
  };
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function EventCards({
  limit,
  variant = "full",
  showEmpty = true,
  status = "all",
  showHeadings = status === "all",
}: EventCardsProps) {
  const { t, lang } = useI18n();
  const { upcoming, past } = splitEvents(t.events.items);
  const eventsByStatus =
    status === "upcoming" ? upcoming : status === "past" ? past : [...upcoming, ...past];
  const events = typeof limit === "number" ? eventsByStatus.slice(0, limit) : eventsByStatus;

  if (events.length === 0) {
    if (!showEmpty) return null;

    const emptyMsg =
      lang === "va"
        ? "Hola María, m'agradaria que m'avises quan es publiquen noves dates de tallers i esdeveniments..."
        : lang === "en"
          ? "Hello Maria, please let me know when new workshop and event dates are published..."
          : "Hola María, me gustaría que me avisaras cuando publiques nuevas fechas de talleres y eventos...";

    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <h2 className="text-2xl">{t.events.empty}</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {t.events.emptyText}
        </p>
        <a
          href={getWhatsAppUrl(emptyMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            trackWhatsAppClick("event_empty_state");
            const url = getWhatsAppUrl(emptyMsg);
            if (url && url !== "#") {
              if (e.currentTarget.getAttribute("href") === "#") {
                e.preventDefault();
                window.open(url, "_blank", "noopener,noreferrer");
              }
            }
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:shadow-md"
        >
          <WhatsAppIcon className="size-4 shrink-0 fill-current" />
          <span>{t.events.cta}</span>
        </a>
      </div>
    );
  }

  const renderBadge = (event: EventItem, eventStatus: EventStatus) =>
    eventStatus === "past" ? t.events.pastBadge : (event.badge ?? t.events.badge);

  const renderCta = (event: EventItem, className: string) => {
    const defaultMsg =
      lang === "va"
        ? `Hola María, m'agradaria reservar la meua plaça per al taller "${event.title}" (${event.date} a ${event.place ?? t.events.place}).`
        : lang === "en"
          ? `Hello Maria, I would like to reserve a spot for the workshop "${event.title}" (${event.date} at ${event.place ?? t.events.place}).`
          : `Hola María, me gustaría reservar mi plaza para el taller "${event.title}" (${event.date} en ${event.place ?? t.events.place}).`;

    const message = event.whatsappMessage || defaultMsg;
    const whatsappUrl = getWhatsAppUrl(message);

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          trackWhatsAppClick(`event_${event.dateISO}`);
          const url = getWhatsAppUrl(message);
          if (url && url !== "#") {
            if (e.currentTarget.getAttribute("href") === "#") {
              e.preventDefault();
              window.open(url, "_blank", "noopener,noreferrer");
            }
          }
        }}
        className={className}
      >
        <WhatsAppIcon className="size-4 shrink-0 fill-current" />
        <span>{event.ctaText ?? t.events.cta}</span>
      </a>
    );
  };

  const getStatus = (event: EventItem): EventStatus =>
    eventTime(event) < todayStart() ? "past" : "upcoming";

  const renderCompactCards = (cards: EventItem[]) => (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {cards.map((event) => {
        const eventStatus = getStatus(event);

        return (
          <article
            key={`${event.date}-${event.title}`}
            className="flex min-h-full flex-col rounded-3xl border border-border/60 bg-card p-6"
          >
            <div>
              <p className="eyebrow">{renderBadge(event, eventStatus)}</p>
              <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-2">
                <p className="font-serif text-4xl leading-none text-primary">{event.date}</p>
                <p className="mb-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  {event.time}
                </p>
              </div>
            </div>

            <h3 className="mt-6 text-xl leading-tight">{event.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{event.text}</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-primary" />
              {event.place ?? t.events.place}
            </p>

            {renderCta(
              event,
              "mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:shadow-md",
            )}
          </article>
        );
      })}
    </div>
  );

  const renderFullCards = (cards: EventItem[]) => (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((event, index) => {
        const Icon = getEventIcon(event.title, index);
        const eventStatus = getStatus(event);

        return (
          <article
            key={`${event.date}-${event.title}`}
            className="grid gap-6 rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)] sm:grid-cols-[8rem_1fr]"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl bg-secondary/60 p-5">
              <p className="eyebrow">{renderBadge(event, eventStatus)}</p>
              <div className="mt-8">
                <p className="font-serif text-4xl leading-none text-primary">{event.date}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  {event.time}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl leading-tight">{event.title}</h2>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <Icon className="size-6" />
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{event.text}</p>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" />
                {event.place ?? t.events.place}
              </p>

              {renderCta(
                event,
                "mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:shadow-md",
              )}
            </div>
          </article>
        );
      })}
    </div>
  );

  if (variant === "compact") {
    return renderCompactCards(events);
  }

  if (!showHeadings || status !== "all") return renderFullCards(events);

  return (
    <div className="grid gap-12">
      {upcoming.length > 0 && (
        <section>
          <h2 className="text-3xl">{t.events.upcomingTitle}</h2>
          <div className="mt-6">{renderFullCards(upcoming)}</div>
        </section>
      )}

      {past.length > 0 && (
        <section>
          <h2 className="text-3xl">{t.events.pastTitle}</h2>
          <div className="mt-6">{renderFullCards(past)}</div>
        </section>
      )}
    </div>
  );
}
