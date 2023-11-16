import React, { useMemo, useState } from 'react';

interface Theme {
  name: 'light' | 'dark', color: string, backgroundColor: string, accentColor: string, extraColor: string,
}

interface Themes {
  light: Theme
  dark: Theme
}

interface ThemesContext {
  theme: Theme
  toggleTheme: () => void
}

const themes: Themes = {
  light: {
    name: 'light', color: '#282C34', backgroundColor: '#FFFFFF', accentColor: '#66A345', extraColor: '#F36B00',
  },
  dark: {
    name: 'dark', color: '#EEEEEE', backgroundColor: '#282C34', accentColor: '#78b856', extraColor: '#ffcf48',
  },
};

export const ThemeContext = React.createContext<ThemesContext>({} as ThemesContext);

const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const systemTheme = (isDark.matches) ? themes.dark : themes.light;

export function ThemeProvider(props: { children: any }) {
  const [theme, setTheme] = useState(systemTheme);
  const toggleTheme = () => {
    setTheme((oldTheme) => ((oldTheme === themes.light) ? themes.dark : themes.light));
  };

  const { children } = props;
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
