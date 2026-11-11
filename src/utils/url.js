// Prefixa caminhos internos com a base do site (`import.meta.env.BASE_URL`).
//
// No GitHub Pages de projeto a base é o nome do repositório
// (`https://tchesites.github.io/demo-studio-amora/`), então todo link interno
// precisa deste prefixo — `href="/x/"` sozinho levaria para a raiz de
// `tchesites.github.io` e daria 404.
//
// Use `url('/caminho/')` em `href`, `src` e em dados que geram links.
// Âncoras internas (`#servicos`) não precisam: são relativas à página atual.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
