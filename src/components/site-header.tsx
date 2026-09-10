import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LANGS, useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/como-funciona", label: t.nav.how },
    { to: "/ambitos", label: t.nav.areas },
    { to: "/sesiones", label: t.nav.sessions },
    { to: "/sobre-mi", label: t.nav.about },
    { to: "/eventos", label: t.nav.events },
    { to: "/blog", label: t.nav.journal },
    { to: "/faq", label: t.nav.faq },
    { to: "/contacto", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-serif text-xl tracking-tight text-primary">
          Holistic-o
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border bg-card p-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link
            to="/reservar"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.nav.book}
          </Link>

          <button
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground"
                activeProps={{ className: "py-2.5 text-sm text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reservar"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-4 py-2.5 text-center text-sm text-primary-foreground"
            >
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
