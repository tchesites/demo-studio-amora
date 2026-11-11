# Studio Amora (demo)

- **Cliente:** Studio Amora — *negócio fictício (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** `tchesites/demo-studio-amora` — `git@github.com-tchesites:tchesites/demo-studio-amora.git`
- **Como rodar:** `npm install` e depois `npm run dev` (http://localhost:4321/demo-studio-amora/)

## Sobre

Página de bio de um estúdio de unhas fictício em Sapucaia do Sul, criada como
**projeto demonstrativo** para o portfólio da Tchê Sites. É o exemplo vivo do
serviço "Bio do Instagram" (R$ 300): uma página só, mobile-first, com identidade
própria, serviços com preço, galeria, depoimento, endereço e um único caminho de
conversão — o WhatsApp.

Marca, endereço, telefone e avaliações são fictícios. O rodapé avisa isso.

## Estrutura

- `src\` — código-fonte (pages, components, layouts, styles, data)
- `src\data\negocio.js` — dados editáveis (serviços, preços, horários, links, galeria)
- `public\galeria\` — fotos da galeria
- `public\favicon.svg` — ícone da marca
- `dist\` — build (gerado por `npm run build`)

## Seções (página única)

1. Abertura — marca, status aberto/fechado, promessa e CTA
2. Serviços e valores — lista com preço e duração
3. Do estúdio — galeria em mosaico
4. Depoimento — prova social e nota do Google
5. Onde fica — endereço, horários e link do Maps
6. Rodapé — aviso de demonstração e crédito

## Decisões

- **Ameixa domina, creme escreve, terracota só na ação.** Evita o clichê
  creme + serifada + terracota que toda agência usa em 2026.
- **Fraunces (display, itálico no wordmark) + DM Sans (texto).**
- **Serviços em lista de menu com linha pontilhada**, não em cards — o preço é
  a informação principal e a leitura fica mais rápida no celular.
- **Status aberto/fechado calculado no navegador** a partir dos horários em
  `negocio.js`; sem backend.
- **CTA fixo no rodapé só no celular**; no desktop a abertura já resolve.
- **Fotos do Pexels** (licença livre, sem atribuição obrigatória), com IDs
  `34885844`, `34885842`, `34871570`, `34871614`, `34835286` e `34871734`.
  O ideal é trocar por fotos reais de cliente quando o serviço for vendido.
- **Um único momento de animação:** a abertura entra junta; o resto é estático.
  `prefers-reduced-motion` desliga tudo.

## Deploy

**GitHub Pages**, por **GitHub Actions** (`.github\workflows\deploy.yml`): cada
push em `main` roda `npm ci` + `astro build` e publica o artefato.

- **URL:** <https://tchesites.github.io/demo-studio-amora/>
- O subcaminho é o nome do repositório. `astro.config.mjs` fixa `site` + `base`,
  e **todo link interno passa por `url()` de `src\utils\url.js`**.
- **Local:** `npm run dev` serve em
  `http://localhost:4321/demo-studio-amora/`.

O nome do repositório segue a convenção de `projetos\README.md`: `demo-` marca
cliente fictício.
