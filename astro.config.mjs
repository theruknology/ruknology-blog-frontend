import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: 'kec0w2ha',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});