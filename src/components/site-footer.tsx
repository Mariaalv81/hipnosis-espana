import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import mcLogoBlack from "@/assets/images/mc-negro-web.png";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
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
          <Link to="/como-funciona" className="text-muted-foreground hover:text-foreground">
            {t.nav.how}
          </Link>
          <Link to="/ambitos" className="text-muted-foreground hover:text-foreground">
            {t.nav.areas}
          </Link>
          <Link to="/sesiones" className="text-muted-foreground hover:text-foreground">
            {t.nav.sessions}
          </Link>
          <Link to="/eventos" className="text-muted-foreground hover:text-foreground">
            {t.nav.events}
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground">
            {t.nav.journal}
          </Link>
          <Link to="/legal" className="text-muted-foreground hover:text-foreground">
            {t.footer.legal}
          </Link>
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
