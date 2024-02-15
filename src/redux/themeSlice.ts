import { createSlice } from '@reduxjs/toolkit';
import { Themes, Theme } from './contextTypes';
import { resolveContext, setContext } from './resolveContext';
import type { RootState } from './app/store';

const themes: Themes = {
  light: {
    name: 'light', color: '#282C34', backgroundColor: '#FFFFFF', accentColor: '#66A345', extraColor: '#F36B00',
  },
  dark: {
    name: 'dark', color: '#EEEEEE', backgroundColor: '#282C34', accentColor: '#78b856', extraColor: '#ffcf48',
  },
};

const defaultState = themes.dark;
const initialState = resolveContext(defaultState);
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => setContext(state, themes.dark, themes.light, 'theme'),
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme as Theme;
export const selectThemeName = (state: RootState) => (state.theme as Theme).name;

export const themeReducer = themeSlice.reducer;
