import { Link } from "@tanstack/react-router";
import { Apple, BookOpen, Brain, CigaretteOff, Clock, MapPin } from "lucide-react";

import { useI18n } from "@/lib/i18n";

type EventCardsProps = {
  limit?: number;
  variant?: "compact" | "full";
  showEmpty?: boolean;
  status?: "all" | "upcoming" | "past";
  showHeadings?: boolean;
};

type EventItem = ReturnType<typeof useI18n>["t"]["events"]["items"][number];
type EventStatus = "upcoming" | "past";

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

export function EventCards({
  limit,
  variant = "full",
  showEmpty = true,
  status = "all",
  showHeadings = status === "all",
}: EventCardsProps) {
  const { t } = useI18n();
  const icons = [CigaretteOff, Brain, BookOpen, Apple];
  const { upcoming, past } = splitEvents(t.events.items);
  const eventsByStatus =
    status === "upcoming" ? upcoming : status === "past" ? past : [...upcoming, ...past];
  const events = typeof limit === "number" ? eventsByStatus.slice(0, limit) : eventsByStatus;

  if (events.length === 0) {
    if (!showEmpty) return null;

    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <h2 className="text-2xl">{t.events.empty}</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          {t.events.emptyText}
        </p>
        <Link
          to="/contacto"
          className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t.events.cta}
        </Link>
      </div>
    );
  }

  const renderBadge = (eventStatus: EventStatus) =>
    eventStatus === "past" ? t.events.pastBadge : t.events.badge;

  const renderCta = (eventStatus: EventStatus, className: string) =>
    eventStatus === "upcoming" ? (
      <Link to="/contacto" className={className}>
        {t.events.cta}
      </Link>
    ) : null;

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
              <p className="eyebrow">{renderBadge(eventStatus)}</p>
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
              {t.events.place}
            </p>

            {renderCta(
              eventStatus,
              "mt-6 inline-flex w-fit rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90",
            )}
          </article>
        );
      })}
    </div>
  );

  const renderFullCards = (cards: EventItem[]) => (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((event, index) => {
        const Icon = icons[index] ?? Brain;
        const eventStatus = getStatus(event);

        return (
          <article
            key={`${event.date}-${event.title}`}
            className="grid gap-6 rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)] sm:grid-cols-[8rem_1fr]"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl bg-secondary/60 p-5">
              <p className="eyebrow">{renderBadge(eventStatus)}</p>
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
                {t.events.place}
              </p>

              {renderCta(
                eventStatus,
                "mt-7 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90",
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
