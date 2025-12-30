import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Jika tadi install react juga

export default defineConfig({
  integrations: [tailwind(), react()]
});