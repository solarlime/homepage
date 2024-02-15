export interface Theme {
  name: 'light' | 'dark', color: string, backgroundColor: string, accentColor: string, extraColor: string,
}

export interface Themes {
  light: Theme
  dark: Theme
}

export interface ThemesContext {
  theme: Theme
  toggleTheme: () => void
}

export interface Language {
  name: 'ru' | 'en'
}

export interface Languages {
  ru: Language
  en: Language
}

export interface LanguagesContext {
  language: Language,
  toggleLanguage: () => void
}
