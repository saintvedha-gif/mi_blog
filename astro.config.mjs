import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Reemplaza con tu usuario y el nombre exacto de tu repositorio
  site: 'https://saintvedha-gif.github.io',
  base: '/mi_blog/', 
  integrations: [tailwind()],
});