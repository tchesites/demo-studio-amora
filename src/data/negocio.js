// Dados do Studio Amora — negócio fictício do projeto demonstrativo.
// Tudo que o dono trocaria no dia a dia fica aqui: serviços, preços, horários,
// endereço e links. O layout não precisa ser tocado.

export const negocio = {
  nome: 'Studio Amora',
  handle: '@studioamora',
  tagline: 'Unhas com identidade, em Sapucaia do Sul.',
  apoio: 'Atendimento individual no Centro, uma cliente por vez. Com hora marcada, sem fila.',
  endereco: {
    rua: 'Rua das Camélias, 128',
    bairro: 'Centro',
    cidade: 'Sapucaia do Sul/RS',
  },
  whatsappDisplay: '(51) 90000-0000',
  whatsappDigits: '5551900000000',
  instagram: 'https://www.instagram.com/studioamora/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Centro,+Sapucaia+do+Sul+-+RS',
  google: {
    nota: '4,9',
    total: 87,
    url: 'https://www.google.com/search?q=Studio+Amora+Sapucaia+do+Sul',
  },
  horarios: [
    { dias: 'Terça a sexta', horas: '9h às 19h', diasSemana: [2, 3, 4, 5], abre: 9, fecha: 19 },
    { dias: 'Sábado', horas: '9h às 17h', diasSemana: [6], abre: 9, fecha: 17 },
    { dias: 'Domingo e segunda', horas: 'Fechado', diasSemana: [0, 1] },
  ],
  servicos: [
    {
      nome: 'Alongamento em fibra',
      descricao: 'Comprimento e formato sob medida.',
      duracao: '2h30',
      preco: 180,
    },
    {
      nome: 'Manutenção',
      descricao: 'Pra manter o alongamento impecável.',
      duracao: '2h',
      preco: 130,
    },
    {
      nome: 'Esmaltação em gel',
      descricao: 'Cor intensa que dura semanas.',
      duracao: '1h',
      preco: 90,
    },
    {
      nome: 'Blindagem',
      descricao: 'Brilho e proteção na unha natural.',
      duracao: '45min',
      preco: 70,
    },
  ],
  galeria: [
    {
      arquivo: '/galeria/01-detalhe-dourado.jpg',
      alt: 'Mão com unhas coral e anel dourado, em fundo escuro.',
    },
    {
      arquivo: '/galeria/02-fundo-vermelho.jpg',
      alt: 'Unhas coral com aplicação de laço, em fundo vermelho.',
    },
    {
      arquivo: '/galeria/03-vermelho-creme.jpg',
      alt: 'Nail art vermelha e branca sobre superfície clara.',
    },
    {
      arquivo: '/galeria/04-traco-artistico.jpg',
      alt: 'Unhas vermelhas com traço artístico e detalhe dourado.',
    },
    {
      arquivo: '/galeria/05-flor.jpg',
      alt: 'Unhas rosadas com flor, em fundo claro.',
    },
    {
      arquivo: '/galeria/06-detalhe-ouro.jpg',
      alt: 'Unhas vermelhas com arte branca e anel dourado.',
    },
  ],
  depoimento: {
    texto: 'Saí com a unha do jeito que eu pedi — e com vontade de voltar.',
    autora: 'Juliana M.',
    desde: 'cliente desde 2024',
  },
};

export const whatsappLink = (mensagem) =>
  `https://wa.me/${negocio.whatsappDigits}?text=${encodeURIComponent(mensagem)}`;

export const precoBRL = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
