export interface Theme {
  name: 'light' | 'dark', color: string, backgroundColor: string, accentColor: string, extraColor: string,
}

export interface Themes {
  light: Theme
  dark: Theme
}

export interface Language {
  name: 'ru' | 'en'
}

export interface Languages {
  ru: Language
  en: Language
}
