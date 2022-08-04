import React, { useMemo, useState } from 'react';

interface Theme {
  name: 'light' | 'dark', color: string, backgroundColor: string,
}

interface Themes {
  light: Theme
  dark: Theme
}

interface ThemesContext {
  theme: Theme
  toggleTheme: () => void
}

export const themes: Themes = {
  light: {
    name: 'light', color: '#282C34', backgroundColor: '#FFFFFF',
  },
  dark: {
    name: 'dark', color: '#FFFFFF', backgroundColor: '#282C34',
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
