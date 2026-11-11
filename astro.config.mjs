import { defineConfig } from 'astro/config';

// https://astro.build/config
// Publicado no GitHub Pages como site de projeto:
// https://tchesites.github.io/demo-studio-amora/
// `base` é o nome do repositório; os links internos passam por `src/utils/url.js`.
export default defineConfig({
  site: 'https://tchesites.github.io',
  base: '/demo-studio-amora',
});
