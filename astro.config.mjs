import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yatoyataro.github.io',
  base: '/TestPort101/',
  output: 'static',
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false,
        },
      },
    },
  },
});