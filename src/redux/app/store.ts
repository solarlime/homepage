import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { themeReducer } from '../theme/themeSlice';
import { languageReducer } from '../language/languageSlice';
import { contentApi } from '../content/contentSlice';
import imageSlice from '../content/imageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    [contentApi.reducerPath]: contentApi.reducer,
    [imageSlice.reducerPath]: imageSlice.reducer,
  },
  // For caching and other features
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contentApi.middleware),
});

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Not obligatory to define, but can be useful
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
