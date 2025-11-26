// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kadzyly.github.io',
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  }
});
