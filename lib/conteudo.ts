// Conteúdo real da plataforma (salas, temas, trilha, conquistas, FAQ).
// Ao mudar dados aqui, a página inteira acompanha.

export type Nivel = "Iniciante" | "Intermediário";

export type Sala = {
  slug: string;
  numero: string;
  titulo: string;
  descricao: string;
  conteudos: number;
  atualizada: string;
  nivel: Nivel;
  imagem: string;
  enquadramento?: { tamanho: string; posicao: string }; // altura e ponto focal, quando o painel de vidro cobriria o assunto da imagem
};

export const SITE_URL = "https://sala-dos-buscadores.vercel.app";

// Em ordem alfabética: a ordem não indica importância.
export const salas: Sala[] = [
  { slug: "apocrifos-cristianismo-primitivo", numero: "I", titulo: "Apócrifos do Cristianismo Primitivo", descricao: "Textos e perspectivas do cristianismo antigo para além do cânone.", conteudos: 5, atualizada: "10 set 2026", nivel: "Intermediário", imagem: "/imagens/portal/cristianismo-primitivo.webp" },
  { slug: "nag-hammadi", numero: "II", titulo: "Biblioteca de Nag Hammadi", descricao: "Manuscritos, mitos e caminhos de conhecimento em uma biblioteca da Antiguidade.", conteudos: 8, atualizada: "12 set 2026", nivel: "Iniciante", imagem: "/imagens/portal/nag-hammadi.webp" },
  { slug: "corpus-hermeticum", numero: "III", titulo: "Corpus Hermeticum", descricao: "Diálogos sobre mente, cosmos e conhecimento no hermetismo antigo.", conteudos: 3, atualizada: "3 set 2026", nivel: "Intermediário", imagem: "/imagens/portal/hermetismo.webp" },
  { slug: "fe-e-poder", numero: "IV", titulo: "Fé e Poder", descricao: "Relações entre textos, tradições religiosas e formas de autoridade.", conteudos: 3, atualizada: "29 out 2026", nivel: "Iniciante", imagem: "/imagens/provisorias/fe-e-poder.jpg" },
  { slug: "caibalion", numero: "V", titulo: "O Caibalion", descricao: "Os sete princípios em seu contexto de hermetismo moderno.", conteudos: 3, atualizada: "28 ago 2026", nivel: "Iniciante", imagem: "/imagens/portal/caibalion.webp" },
  { slug: "urantia", numero: "VI", titulo: "O Livro de Urântia", descricao: "Cosmologia, espiritualidade e narrativas de uma obra do século XX.", conteudos: 6, atualizada: "5 set 2026", nivel: "Iniciante", imagem: "/imagens/portal/urantia.webp", enquadramento: { tamanho: "135%", posicao: "38% 100%" } },
];

const EXTENSO = ["zero", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
export const numeroPorExtenso = (n: number) => EXTENSO[n] ?? String(n);

export const temas: { nome: string; slug: string; pergunta?: string }[] = [
  { nome: "Morte", slug: "morte", pergunta: "vida após a morte" },
  { nome: "Alma", slug: "alma" },
  { nome: "Meditação", slug: "meditacao" },
  { nome: "Origem do universo", slug: "origem-do-universo" },
  { nome: "Conhecimento interior", slug: "conhecimento-interior" },
  { nome: "Formação da Bíblia", slug: "formacao-da-biblia" },
  { nome: "Monoteísmo", slug: "monoteismo" },
  { nome: "Origem do mal", slug: "origem-do-mal" },
  { nome: "Manuscritos antigos", slug: "manuscritos-antigos" },
  { nome: "Jesus", slug: "jesus" },
];

type ItemMesa = { sala: string; salaSlug: string; titulo: string; tipo: string; imagem: string; posicaoImagem: string };

const subidaEsferas: ItemMesa = { sala: "Corpus Hermeticum", salaSlug: "corpus-hermeticum", titulo: "Poimandres, §24–26: a subida pelas esferas", tipo: "Fonte primária · 6 min", imagem: "/imagens/portal/hermetismo.webp", posicaoImagem: "50% 30%" };
const apocrifoJoao: ItemMesa = { sala: "Biblioteca de Nag Hammadi", salaSlug: "nag-hammadi", titulo: "O Apócrifo de João e o mito de Sofia", tipo: "Artigo", imagem: "/imagens/portal/nag-hammadi.webp", posicaoImagem: "55% 46%" };
const vidaContinua: ItemMesa = { sala: "O Livro de Urântia", salaSlug: "urantia", titulo: "A vida continua: Urântia e espiritismo", tipo: "Artigo", imagem: "/imagens/portal/urantia.webp", posicaoImagem: "40% 56%" };
const evangelhoTome: ItemMesa = { sala: "Biblioteca de Nag Hammadi", salaSlug: "nag-hammadi", titulo: "O Evangelho de Tomé e os 114 ditos", tipo: "Artigo", imagem: "/imagens/portal/nag-hammadi.webp", posicaoImagem: "55% 46%" };

// Só as ligações que aparecem no Figma. Tema sem lista mostra "Ainda não há leituras selecionadas":
// a ausência aqui não significa ausência do tema na tradição.
export const mesaPorTema: Record<string, ItemMesa[]> = {
  morte: [subidaEsferas, apocrifoJoao, vidaContinua],
  "conhecimento-interior": [evangelhoTome],
  jesus: [evangelhoTome],
};

// Corpus Hermeticum I, 26. O grego foi transcrito sem consulta à edição usada na plataforma: a curadoria precisa conferir.
export const trechoLeitura = {
  original: "τοῦτό ἐστι τὸ ἀγαθὸν τέλος τοῖς γνῶσιν ἐσχηκόσι…",
  traducao: "Este é o bom fim para os que alcançaram o conhecimento…",
  fonte: "Corpus Hermeticum · Tratado I, 26 · Poimandres",
};

export const trilha = {
  sala: "Corpus Hermeticum",
  nome: "Sequência sugerida de leituras",
  degraus: [
    { n: "I", titulo: "O que é o hermetismo", tipo: "Artigo · 12 min", },
    { n: "II", titulo: "Poimandres: a Mente que fala a Hermes", tipo: "Artigo · 11 min", },
    { n: "III", titulo: "Poimandres, §24–26: a subida pelas esferas", tipo: "Fonte primária · 6 min" },
    { n: "IV", titulo: "Tratado XIII: renascimento e silêncio", tipo: "Artigo · 16 min" },
    { n: "V", titulo: "Fontes usadas nesta Sala", tipo: "Leitura guiada" },
  ] as const,
};

export const conquistas = [
  { gema: "Citrino", titulo: "Primeiro passo", de: "#F2C14E", para: "#B9770E" },
  { gema: "Esmeralda", titulo: "Palavra por palavra", de: "#5FD39A", para: "#0E6B43" },
  { gema: "Cristal de rocha", titulo: "Na fonte", de: "#F4F8FA", para: "#9FB3BF" },
  { gema: "Safira", titulo: "Além da primeira leitura", de: "#6E95F0", para: "#1C3A8A" },
  { gema: "Turmalina", titulo: "Lado a lado", de: "#F59AB5", para: "#2E9C6A" },
  { gema: "Opala", titulo: "Entre Salas", de: "#EAF2F8", para: "#B7A6D9" },
  { gema: "Ametista", titulo: "Leitura atenta", de: "#B48CE0", para: "#4E2A80" },
  { gema: "Rubi", titulo: "Caminho percorrido", de: "#F0566F", para: "#7A0B1E" },
];

export const perguntas = [
  { p: "A Sala dos Buscadores defende alguma religião?", r: "Não. O acervo organiza tradições religiosas, espirituais e filosóficas com neutralidade doutrinária. As Salas aparecem em ordem alfabética, e a ordem não indica importância." },
  { p: "A conta é paga?", r: "Não. A conta é gratuita." },
  { p: "Quem escreve os conteúdos?", r: "As equipes editoriais de cada Sala e anfitriões convidados. Nada vai ao ar sem a revisão da curadoria." },
  { p: "Os conteúdos indicam as fontes?", r: "Os textos trazem referências identificadas. Original e tradução aparecem lado a lado quando disponíveis." },
  { p: "Preciso informar minha religião?", r: "Não. Se quiser, você pode informar religião ou convicção no cadastro; só é salva com seu consentimento, e dá para mudar ou apagar em Ajustes." },
];

export const imagens = {
  hero: "/imagens/portal/boas-vindas.webp",
  curadoria: "/imagens/portal/contemplacao.webp",
  escada: "/imagens/anfitrioes/escada.webp",
  anfitria: "/imagens/anfitrioes/claustro.webp",
};

/* ---------- Anfitriões ---------- */

// Enquanto não houver formulário próprio, a candidatura começa por e-mail.
export const CURADORIA_EMAIL = "contato@asaladosbuscadores.com.br";
export const CANDIDATURA_URL = `mailto:${CURADORIA_EMAIL}?subject=Candidatura%20para%20anfitri%C3%A3o`;

export const passosAnfitriao = [
  { n: "I", t: "Candidatura", d: "Você conta a sua pesquisa." },
  { n: "II", t: "Convite", d: "A curadoria analisa e convida." },
  { n: "III", t: "Revisão", d: "Nada vai ao ar sem aprovação." },
];

export const salaDemo: Sala = {
  ...salas[0],
  slug: "leituras-do-evangelho-de-tome",
  titulo: "Leituras do Evangelho de Tomé",
  descricao: "Sala de anfitriã · Helena Varga (demonstração)",
  conteudos: 2,
  atualizada: "7 out 2026",
  nivel: "Iniciante",
  imagem: imagens.anfitria,
};

// Página /anfitrioes: textos do PDF "Landing Page — Anfitriões (crie sua Sala)".
export const imagensAnfitrioes = {
  hero: "/imagens/anfitrioes/hero.webp",
  arco: "/imagens/anfitrioes/arco-do-ceu.webp",
  avatar: "/imagens/anfitrioes/avatar.webp",
};

export const motivosAnfitriao = [
  { n: "I", t: "A sua leitura, com o seu nome", d: "Cada artigo traz a sua assinatura e o selo de anfitrião. O leitor sabe que é a leitura de um anfitrião." },
  { n: "II", t: "Toda afirmação com fonte", d: "Termos, obras e chamadas de fonte ficam marcados no texto e ligados às obras citadas." },
  { n: "III", t: "A curadoria revisa, não reescreve", d: "Nada vai ao ar sem revisão, mas a curadoria aprova ou reprova sem editar o seu conteúdo." },
];

export const artigosHelena = [
  { estado: "Publicado", t: "O Hino da Pérola nos Atos de Tomé", d: "Escrito por um anfitrião na própria Sala e aprovado pela curadoria." },
  { estado: "Em revisão", t: "O príncipe que esquece: a narrativa do Hino da Pérola", d: "Esperando a decisão da curadoria." },
  { estado: "Em revisão", t: "Quem compôs o Hino? Hipóteses sobre a origem siríaca", d: "Esperando a decisão da curadoria." },
];

export const alcanceSala = [
  { t: "Na grade comparativa", d: "A Sala entra no Comparar, ao lado das Salas da curadoria." },
  { t: "No acervo do assistente", d: "As respostas do assistente citam a sua Sala como fonte." },
];

export const ferramentasEditor = [
  { id: "termo", t: "Termo", d: "Para o vocabulário próprio da tradição. Vira verbete no glossário da Sala." },
  { id: "obra", t: "Obra", d: "Para títulos de obras, sempre marcados do mesmo jeito em todo o acervo." },
  { id: "citar", t: "Citar fonte", d: "Insere a chamada [n] ligada a uma obra do card Fontes." },
] as const;

export const requisitosEnvio = ["Título e apresentação", "Pelo menos uma fonte", "Toda afirmação atribuída a uma fonte", "Sala escolhida"];

export const etapasAnfitriao = [
  { n: "I", curto: "Candidatura", t: "Candidatura", d: "Você conta a sua pesquisa e a tradição ou corpus que quer apresentar." },
  { n: "II", curto: "Convite da curadoria", t: "Convite", d: "A curadoria analisa e envia um convite. A conta de anfitrião usa o e-mail do convite." },
  { n: "III", curto: "Sala e artigos", t: "Sala e artigos", d: "Você cria a Sala, escreve os artigos e indica vídeos. O rascunho é salvo sozinho." },
  { n: "IV", curto: "Revisão", t: "Revisão", d: "A curadoria aprova ou reprova, sem editar o seu conteúdo." },
  { n: "V", curto: "Publicação", t: "Publicação", d: "A Sala vai ao portal com o selo de anfitrião e a sua página pública." },
];

export const politicaEditorial = [
  { n: "01", t: "Neutralidade doutrinária", d: "A Sala apresenta uma tradição em seus próprios contextos, sem tratá-la como superior às outras." },
  { n: "02", t: "Toda afirmação com origem", d: "Cada afirmação é atribuída a uma fonte (“Segundo o Poimandres…”). Artigo sem fonte não é publicado." },
  { n: "03", t: "Leitura sinalizada", d: "Artigos de anfitrião avisam o leitor que trazem a leitura de um anfitrião, com assinatura e selo." },
  { n: "04", t: "Revisão antes de publicar", d: "Salas e artigos passam pela curadoria. A decisão aparece na sua área: publicados, em revisão ou reprovados." },
];

// As respostas 03 a 05 estão fechadas no PDF: foram escritas a partir do resto da página e precisam de revisão da curadoria.
export const perguntasAnfitriao = [
  { p: "Como eu me torno anfitrião?", r: "Pela candidatura. A curadoria analisa a proposta e, se fizer sentido para o acervo, envia um convite para o seu e-mail. A conta de anfitrião é criada com o e-mail do convite." },
  { p: "A curadoria edita o meu texto?", r: "Não. A curadoria revisa e aprova ou reprova Salas e artigos, sem editar o conteúdo do anfitrião." },
  { p: "O que acontece se um artigo for reprovado?", r: "O artigo não é publicado. A decisão aparece na sua área de anfitrião, em “Minhas Salas”." },
  { p: "Posso indicar vídeos na minha Sala?", r: "Sim. Depois do convite, você cria a Sala, escreve os artigos e indica vídeos." },
  { p: "Posso manter mais de uma Sala?", r: `Converse com a curadoria antes de propor uma nova Sala: ${CURADORIA_EMAIL}.` },
];
