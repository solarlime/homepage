import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from '../themeSlice';
import { languageReducer } from '../languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

// Not obligatory to define, but can be useful
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
