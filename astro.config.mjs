import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://blog.walteringlezadv.com.br',
  integrations: [
    react(),
    tailwind(),
  ],
  output: 'static',
});
