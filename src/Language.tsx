import React, { useMemo, useState } from 'react';

type Language = 'ru' | 'en';

interface Languages {
  ru: Language
  en: Language
}

interface LanguagesContext {
  language: Language,
  toggleLanguage: () => void
}

const languages: Languages = {
  ru: 'ru',
  en: 'en',
};

export const LanguageContext = React.createContext<LanguagesContext>({} as LanguagesContext);

const systemLanguage = (navigator.language.includes('ru')) ? languages.ru : languages.en;

export function LanguageProvider(props: { children: any }) {
  const [language, setLanguage] = useState(systemLanguage);
  const toggleLanguage = () => {
    setLanguage(
      (oldLanguage: Language) => ((oldLanguage === languages.ru) ? languages.en : languages.ru),
    );
  };

  const { children } = props;
  const value = useMemo(() => ({ language, toggleLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
