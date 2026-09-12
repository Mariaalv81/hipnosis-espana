import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Dict } from "@/content/site-content";

export type Lang = "es" | "va" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "va", label: "VA" },
  { code: "en", label: "EN" },
];

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "es",
  setLang: () => {},
  t: dictionaries.es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("holistico-lang") as Lang | null;
    if (stored && stored in dictionaries) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "va" ? "ca-ES-valencia" : lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("holistico-lang", l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
