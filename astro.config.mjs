// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://harikums222.github.io',
  base: '/Project_tools',
  vite: {
    plugins: [tailwindcss()]
  }
});