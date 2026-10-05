import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { openCookiePreferences } from "@/lib/cookie-consent";
import { siteSettings } from "@/content/site-settings";
import mcLogoBlack from "@/assets/images/mc-negro-web.png";

export function SiteFooter() {
  const { t } = useI18n();

  const primaryLinks = [
    { to: "/como-funciona", label: t.nav.how },
    { to: "/ambitos", label: t.nav.areas },
    { to: "/sesiones", label: t.nav.sessions },
    { to: "/sobre-mi", label: t.nav.about },
    { to: "/blog", label: t.nav.journal },
    { to: "/empresas", label: t.nav.companies },
    { to: "/profesionales", label: "Colaboradores" },
    { to: "/eventos", label: t.nav.events },
    { to: "/faq", label: t.nav.faq },
    { to: "/contacto", label: t.nav.contact },
  ] as const;

  const serviceLinks = [
    { to: "/insomnio", label: "Insomnio y descanso profundo" },
    { to: "/ansiedad", label: "Hipnosis para la ansiedad" },
    { to: "/dejar-de-fumar", label: "Dejar de fumar" },
    { to: "/control-de-peso", label: "Control de peso" },
    { to: "/habitos-nerviosos", label: "Hábitos nerviosos y uñas" },
    { to: "/miedos-y-fobias", label: "Miedos y fobias" },
    { to: "/autoestima-y-confianza", label: "Autoestima y confianza" },
    { to: "/concentracion-y-foco", label: "Concentración y estudio" },
    { to: "/deporte-y-motivacion", label: "Deporte y motivación" },
  ] as const;

  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/60 pb-16 sm:pb-0">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={mcLogoBlack}
              alt=""
              className="h-12 w-auto object-contain"
              width={278}
              height={292}
              loading="lazy"
            />
            <p
              className="text-[0.78rem] uppercase leading-none text-foreground/80"
              style={{
                fontFamily: '"Helvetica Neue", Inter, Arial, sans-serif',
                fontWeight: 300,
                letterSpacing: "0.12em",
              }}
            >
              MARÍA A. CABO
            </p>
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t.tagline}</p>

          <div className="mt-5">
            <a
              href={siteSettings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs text-foreground transition-all hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-sm"
              aria-label="Instagram de María A. Cabo"
            >
              <Instagram className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              <span className="font-medium">{siteSettings.instagramHandle}</span>
            </a>
            <p className="mt-1.5 text-[0.72rem] text-muted-foreground">
              Divulgación, reflexiones y día a día
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            Navegación
          </p>
          <nav className="mt-3 grid gap-2 text-sm">
            {primaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            Ámbitos de hipnosis
          </p>
          <nav className="mt-3 grid gap-2 text-sm">
            {serviceLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">{t.contact.area}</p>
          <p className="mt-1 text-xs">{t.contact.languages}</p>

          <div className="mt-4 flex flex-col gap-1.5 text-xs">
            <Link to="/legal" className="text-muted-foreground hover:text-foreground">
              {t.footer.legal}
            </Link>
            <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-foreground">
              {t.cookies.policyLink}
            </Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="w-fit text-left text-muted-foreground hover:text-foreground"
            >
              {t.cookies.footerConfigure}
            </button>
          </div>

          <p className="mt-6 text-xs leading-relaxed">{t.footer.disclaimer}</p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
