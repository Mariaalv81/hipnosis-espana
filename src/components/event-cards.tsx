import { Link } from "@tanstack/react-router";
import { Apple, BookOpen, Brain, CigaretteOff, Clock, MapPin } from "lucide-react";

import { useI18n } from "@/lib/i18n";

type EventCardsProps = {
  limit?: number;
  variant?: "compact" | "full";
  showEmpty?: boolean;
};

export function EventCards({ limit, variant = "full", showEmpty = true }: EventCardsProps) {
  const { t } = useI18n();
  const events = typeof limit === "number" ? t.events.items.slice(0, limit) : t.events.items;
  const icons = [CigaretteOff, Brain, BookOpen, Apple];

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

  if (variant === "compact") {
    return (
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {events.map((event) => (
          <article
            key={`${event.date}-${event.title}`}
            className="flex min-h-full flex-col rounded-3xl border border-border/60 bg-card p-6"
          >
            <div>
              <p className="eyebrow">{t.events.badge}</p>
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

            <Link
              to="/contacto"
              className="mt-6 inline-flex w-fit rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.events.cta}
            </Link>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {events.map((event, index) => {
        const Icon = icons[index] ?? Brain;

        return (
          <article
            key={`${event.date}-${event.title}`}
            className="grid gap-6 rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)] sm:grid-cols-[8rem_1fr]"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl bg-secondary/60 p-5">
              <p className="eyebrow">{t.events.badge}</p>
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

              <Link
                to="/contacto"
                className="mt-7 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.events.cta}
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
