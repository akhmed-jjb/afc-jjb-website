import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://afc-jjb.fr', // URL correcte du site
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),

    // ✅ Configuration propre du sitemap
    sitemap({
      filter: (page) => {
        // 🔹 Supprime les anciennes pages inutiles
        const excludedPages = new Set([
          '/about',
          '/homes/mobile-app',
          '/homes/personal',
          '/homes/saas',
          '/homes/startup',
          '/landing/click-through',
          '/landing/lead-generation',
          '/landing/pre-launch',
          '/landing/product',
          '/landing/sales',
          '/landing/subscription',
          '/pricing',
          '/services'
        ]);
        return !excludedPages.has(new URL(page, 'https://afc-jjb.fr').pathname);
      },

      // 🔹 Ajoute seulement les pages utiles
      customPages: [
        'https://afc-jjb.fr/',
        'https://afc-jjb.fr/galerie',
        'https://afc-jjb.fr/contact',
        'https://afc-jjb.fr/conditions',
        'https://afc-jjb.fr/confidentialite'
      ],
    }),

    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
