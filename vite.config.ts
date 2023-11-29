import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [viteSvgr(), react({
    jsxImportSource: '@welldone-software/why-did-you-render',
  })],
  css: {
    postcss: {
      plugins: [autoprefixer],
    }
  }
});
