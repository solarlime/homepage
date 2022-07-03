import React, { useMemo, useState } from 'react';

interface Theme {
  color: string, backgroundColor: string,
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
    color: '#282C34', backgroundColor: '#FFFFFF',
  },
  dark: {
    color: '#FFFFFF', backgroundColor: '#282C34',
  },
};

export const ThemeContext = React.createContext<ThemesContext>({} as ThemesContext);

export function ThemeProvider(props: { children: any }) {
  const [theme, setTheme] = useState(themes.light);
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
