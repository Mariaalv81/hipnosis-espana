import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { openCookiePreferences } from "@/lib/cookie-consent";
import mcLogoBlack from "@/assets/images/mc-negro-web.png";

export function SiteFooter() {
  const { t } = useI18n();

  const primaryLinks = [
    { to: "/como-funciona", label: t.nav.how },
    { to: "/ambitos", label: t.nav.areas },
    { to: "/dejar-de-fumar", label: t.smokingPage.eyebrow },
    { to: "/empresas", label: t.nav.companies },
    { to: "/sesiones", label: t.nav.sessions },
    { to: "/sobre-mi", label: t.nav.about },
    { to: "/blog", label: t.nav.journal },
  ] as const;

  const secondaryLinks = [
    { to: "/eventos", label: t.nav.events },
    { to: "/faq", label: t.nav.faq },
    { to: "/contacto", label: t.nav.contact },
    { to: "/legal", label: t.footer.legal },
    { to: "/politica-de-cookies", label: t.cookies.policyLink },
  ] as const;

  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
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
              MARÍA CABO
            </p>
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t.tagline}</p>
        </div>

        <nav className="grid gap-2 text-sm">
          {primaryLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="grid gap-2 text-sm">
          {secondaryLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openCookiePreferences}
            className="w-fit text-left text-muted-foreground hover:text-foreground"
          >
            {t.cookies.footerConfigure}
          </button>
        </nav>

        <div className="text-sm text-muted-foreground">
          <p>{t.contact.area}</p>
          <p className="mt-1">{t.contact.languages}</p>
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
