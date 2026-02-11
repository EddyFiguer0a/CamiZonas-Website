import { defineConfig } from 'astro/import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()],
  image: {
    domains: ['res.cloudinary.com'],
  },
});