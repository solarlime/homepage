import React, { useMemo, useState } from 'react';
import { Language, Languages, LanguagesContext } from './contextTypes';
import { resolveContext } from './resolveContext';

const languages: Languages = {
  ru: { name: 'ru' },
  en: { name: 'en' },
};

export const LanguageContext = React.createContext<LanguagesContext>({} as LanguagesContext);

const systemLanguage = (navigator.language.includes('ru')) ? languages.ru : languages.en;

const initialLanguage = resolveContext(systemLanguage);

export function LanguageProvider(props: { children: any }) {
  const [language, setLanguage] = useState(initialLanguage);
  const toggleLanguage = () => {
    setLanguage((oldLanguage) => {
      let newLanguage: Language;
      if (oldLanguage.name === languages.ru.name) {
        newLanguage = languages.en;
      } else {
        newLanguage = languages.ru;
      }
      window.localStorage.setItem('language', JSON.stringify(newLanguage));
      return newLanguage;
    });
  };

  const { children } = props;
  const value = useMemo(() => ({ language, toggleLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
