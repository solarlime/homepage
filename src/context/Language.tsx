import React, { useMemo, useState } from 'react';
import { Language, Languages, LanguagesContext } from './contextTypes';
import { resolveContext, setContext } from './resolveContext';

const languages: Languages = {
  ru: { name: 'ru' },
  en: { name: 'en' },
};

export const LanguageContext = React.createContext<LanguagesContext>({} as LanguagesContext);

const systemLanguage = (navigator.language.includes('ru')) ? languages.ru : languages.en;

const initialLanguage: Language = resolveContext(systemLanguage);

export function LanguageProvider(props: { children: any }) {
  const [language, setLanguage] = useState(initialLanguage);
  const toggleLanguage = () => {
    setLanguage((oldLanguage) => setContext(oldLanguage, languages.ru, languages.en, 'language'));
  };

  const { children } = props;
  const value = useMemo(() => ({ language, toggleLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
