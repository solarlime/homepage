import React, { useMemo, useState } from 'react';
import { resolveContext, setContext } from './resolveContext';
import { Theme, Themes, ThemesContext } from './contextTypes';

const themes: Themes = {
  light: {
    name: 'light', color: '#282C34', backgroundColor: '#FFFFFF', accentColor: '#66A345', extraColor: '#F36B00',
  },
  dark: {
    name: 'dark', color: '#EEEEEE', backgroundColor: '#282C34', accentColor: '#78b856', extraColor: '#ffcf48',
  },
};

export const ThemeContext = React.createContext<ThemesContext>({} as ThemesContext);

const defaultTheme = themes.dark;

const initialTheme: Theme = resolveContext(defaultTheme);

export function ThemeProvider(props: { children: any }) {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    setTheme((oldTheme) => setContext(oldTheme, themes.dark, themes.light, 'theme'));
  };

  const { children } = props;
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
