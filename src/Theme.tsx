import React, { useMemo, useState } from 'react';

export interface Theme {
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

const defaultTheme = themes.dark;

let initialTheme: Theme;
const fromLocalStorage = window.localStorage.getItem('themeName');
if (fromLocalStorage) {
  try {
    const previousTheme = JSON.parse(fromLocalStorage);
    if (Object.keys(defaultTheme).every((key, i) => key === Object.keys(previousTheme)[i])) {
      console.log(`Using previously set ${previousTheme.name} theme.`);
      initialTheme = previousTheme;
    } else {
      throw Error('Parsed values don\'t seem to be a valid theme!');
    }
  } catch (e) {
    console.log((e as Error).message);
    console.log('There\'s a problem with parsing previous values! Using default theme.');
    initialTheme = defaultTheme;
  }
} else {
  console.log('No previous theme was found! Using default theme.');
  initialTheme = defaultTheme;
}

export function ThemeProvider(props: { children: any }) {
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    setTheme((oldTheme) => {
      let newTheme: Theme;
      if (oldTheme.name === themes.light.name) {
        newTheme = themes.dark;
      } else {
        newTheme = themes.light;
      }
      window.localStorage.setItem('themeName', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const { children } = props;
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
