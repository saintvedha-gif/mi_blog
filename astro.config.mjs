import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://saintvedha-gif.github.io',
  base: '/mi_blog/',
  vite: {
    plugins: [tailwindcss()],
  },
});