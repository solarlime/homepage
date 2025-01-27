import { createSlice } from '@reduxjs/toolkit';
import { Languages, Language } from '../contextTypes';
import { resolveContext, setContext } from '../resolveContext';
import type { RootState } from '../app/store';

export const ru: Language = { name: 'ru' };
export const en: Language = { name: 'en' };

const languages: Languages = { ru, en };

const systemState = navigator.language.includes('ru')
  ? languages.ru
  : languages.en;
const initialState: Language = resolveContext(systemState);
export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) =>
      setContext(state, languages.ru, languages.en, 'language'),
  },
});

export const { toggleLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState) => state.language as Language;
export const selectLanguageName = (state: RootState) =>
  (state.language as Language).name;

export const languageReducer = languageSlice.reducer;
