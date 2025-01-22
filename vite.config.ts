/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['ios12'],
  },
  server: {
    open: true,
  },
  plugins: [
    viteSvgr(),
    react({
      jsxImportSource: '@welldone-software/why-did-you-render',
    }),
    // For iOS 12
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  test: {
    globals: true,
    setupFiles: ['./tests/setupTests.ts'],
    environment: 'happy-dom',
  },
});
