import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { themeReducer } from '../theme/themeSlice';
import { languageReducer } from '../language/languageSlice';
import { contentApi } from '../content/contentSlice';
import imageSlice from '../content/imageSlice';
import { sourceSlice } from '../content/sourceSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  [contentApi.reducerPath]: contentApi.reducer,
  [imageSlice.reducerPath]: imageSlice.reducer,
  [sourceSlice.reducerPath]: sourceSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    // For caching and other features
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(contentApi.middleware),
    preloadedState,
  });

export const store = setupStore();

// Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Not obligatory to define, but can be useful
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
