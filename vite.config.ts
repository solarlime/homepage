import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [viteSvgr(), react()],
});
