import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Lang, translations } from '../data/translations';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: typeof translations['es'];
}

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('es');
  const toggle = () => setLang(prev => prev === 'es' ? 'en' : 'es');
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};
