# Relatório da revisão da landing (L01–L12)

Data: 31/10/2026. Base: `REVISAO-LANDING-PROMPT.txt` v1.
Estado: **alterações locais, sem commit e sem publicação.** A versão publicada segue no commit `639fdfb`.

**A landing ainda não pode ser declarada pronta.** O prompt exige catálogo e links resolvidos, e isso depende de acesso ao portal (ver "Dependências").

## Depois deste relatório

Foram adicionados, a pedido do designer, o túnel de Salas sobre o céu e a escada presa à rolagem, vindos do primeiro projeto. A página ficou mais longa. As capturas e as medições abaixo são anteriores a essa mudança; as capturas ainda não mostram essas cenas.

## Decisão que limita o escopo

O designer decidiu manter o design aprovado: só fotos e textos mudam, sem alterar layout, ordem das seções, paleta nem remover seções. Por isso, L11 e partes de L03, L05, L06 e L08 não foram aplicadas, mesmo sendo pedidas no prompt. Esses casos aparecem como "Não aplicado (design)".

## Situação por item

| Item | Situação | O que foi feito | O que falta |
|---|---|---|---|
| L01 Primeira dobra | Implementado | Selo, título, apoio, CTAs e navegação do prompt; menu no celular; foto da biblioteca; sem modal e sem texto no bitmap | — |
| L02 Salas | Parcial, dependência | 6 cards em ordem alfabética, com nomes e descrições do prompt; "seis" vem de `salas.length` | Confirmar lista, contagens, datas, níveis e slugs no catálogo publicado |
| L03 Direção e imagens | Parcial | Imagens do pacote aplicadas, pontos focais definidos, isotipo como favicon, atmosfera de luz dourada nas fotos | Imagem própria de Fé e Poder. Paleta proposta: não aplicado (design) |
| L04 Temas | Implementado | Título e apoio do prompt; seleção única com setas; mensagem de vazio do prompt | A curadoria pode completar os 7 temas vazios |
| L05 Artigos | Parcial, dependência | O link enganoso "Ler" virou "Ver na Sala"; "Comparar este tema" tem CTA próprio | URLs canônicas e publicação dos artigos. Seção "Leituras para começar": não aplicado (design) |
| L06 Trilhas | Parcial, dependência | "Comece por uma leitura", CTA, aviso "Trilhas guiadas em preparação"; estados pessoais removidos | Os 5 degraus ainda não são links: faltam URLs e confirmação de que estão publicados |
| L07 Curadoria | Parcial, dependência | Título, apoio, 3 pilares, assinatura, descrição neutra de Urântia, "quando disponíveis"; alternância da citação funciona | Conferir texto, tradução e edição de Poimandres; incluir link direto de leitura |
| L08 Assistente e progresso | Pendente, dependência | Promessas sobre fontes e sobre "Só você vê" removidas | Testar o assistente de ponta a ponta. CTA "Perguntar" segue ativo sem verificação. Redução das 8 pedras: não aplicado (design) |
| L09 Anfitriões | Implementado | Título, apoio e CTA do prompt; card sem link, marcado como exemplo; URL fictícia do perfil removida em `/anfitrioes` | Trocar por Sala real autorizada, se existir |
| L10 Rodapé e chamada | Parcial, dependência | YouTube genérico removido; chamada final do prompt; FAQ revisto; e-mail informado aplicado | Confirmar que a caixa recebe mensagens; conferir âncoras de políticas |
| L11 Nova ordem | Não aplicado (design) | Ordem aprovada mantida | Decisão do designer |
| L12 Acessibilidade e desempenho | Parcial | Ver "Testes" | 5 tipos de texto abaixo do contraste mínimo (decisão de design); CTAs do portal só verificados até o login |

## Dependências

**Portal.** Sem login, todas as rotas respondem 307 para `/entrar`, até uma rota inexistente. Por isso não foi possível conferir slugs, catálogo, artigos, `/trilhas` ou o assistente. Com uma conta de teste, é preciso:

1. Confirmar as 6 Salas, com contagens, datas e níveis.
2. Confirmar que os slugs abrem as Salas certas.
3. Obter as URLs canônicas dos artigos e o estado de publicação de cada um.
4. Confirmar se `/comparar` aceita `?tema=`.
5. Testar o assistente, com referências e estados de erro.

**Curadoria.**

- Texto, tradução e edição do trecho de Poimandres.
- Revisão das respostas do FAQ.
- Escolha de 3 artigos introdutórios.
- Leituras para os 7 temas vazios.
- Imagem de Fé e Poder.

**E-mail.** O domínio `asaladosbuscadores.com.br` tem registros MX, mas a caixa `contato@` não foi testada: nenhuma mensagem foi enviada.

## Origem dos dados

Tudo vem de `lib/conteudo.ts`, escrito à mão. **A landing não lê o catálogo do portal**, então uma mudança no portal não aparece aqui sozinha. O prompt pede o conteúdo publicado como fonte de verdade; isso continua pendente.

Os temas só ligam os artigos que já estavam ligados no Figma. Nenhum resultado foi inventado para preencher os temas vazios.

## Imagens

| Lugar | Arquivo | Ponto focal |
|---|---|---|
| Hero | `portal/boas-vindas.webp` | centro |
| Curadoria | `portal/contemplacao.webp` | centro |
| Apócrifos | `portal/cristianismo-primitivo.webp` | centro |
| Nag Hammadi | `portal/nag-hammadi.webp` | centro; na mesa, 55% 46% |
| Corpus Hermeticum | `portal/hermetismo.webp` | centro; na mesa, 50% 30% |
| O Caibalion | `portal/caibalion.webp` | centro |
| O Livro de Urântia | `portal/urantia.webp` | altura 135%, 38% 100%; na mesa, 40% 56% |
| Fé e Poder | `provisorias/fe-e-poder.jpg` | centro |
| Exemplo de anfitriã | `anfitrioes/claustro.webp` | centro |
| Chamado | `anfitrioes/escada.webp` | centro |

**Fé e Poder não segue L03 ao pé da letra.** O prompt pede tratamento tipográfico provisório, e o card usa um recorte provisório. Trocar por tipografia mudaria o desenho do card, então a Sala aguarda imagem própria.

As imagens da landing passam por `next/image`, com tamanhos responsivos; `/anfitrioes` ainda usa parte delas sem esse recurso. Só a hero tem prioridade. Os originais em `public/imagens/portal` foram preservados.

## Matriz de links

Verificação sem login, em 31/10/2026. "307" confirma só que a rota exige login, não que a página existe.

| Destino | Onde aparece | Resultado |
|---|---|---|
| `/entrar` | Cabeçalho | 200 |
| `/cadastro` | Cabeçalho, hero, chamado | 200 |
| `/salas` | Salas, chamado, rodapé | 307, não confirmado |
| `/salas/apocrifos-cristianismo-primitivo` | Card | 307, não confirmado |
| `/salas/nag-hammadi` | Card, mesa | 307, não confirmado |
| `/salas/corpus-hermeticum` | Card, mesa | 307, não confirmado |
| `/salas/fe-e-poder` | Card | 307, não confirmado |
| `/salas/caibalion` | Card | 307, não confirmado |
| `/salas/urantia` | Card, mesa | 307, não confirmado |
| `/comparar`, `/comparar?tema=morte` | Temas, rodapé | 307, não confirmado |
| `/assistente` | Temas | 307, não confirmado |
| `/destaques`, `/biblioteca` | Rodapé | 307, não confirmado |
| `/sobre` e âncoras de políticas e termos | Rodapé | 307; âncoras não conferidas |
| `/anfitrioes` | Seção VII | 200 (local) |
| `#salas`, `#comparar`, `#trilhas`, `#curadoria` | Navegação | Presentes na página |
| `mailto:contato@asaladosbuscadores.com.br` | FAQ | Link correto; caixa não testada |

## Testes executados

Chrome, servidor local, depois das últimas mudanças de imagem. `npm run build` e `tsc --noEmit` terminaram sem erro. Console sem erros nem avisos.

| Teste | Resultado |
|---|---|
| Rolagem horizontal da landing em 390, 768, 1280 e 1440 | Nenhuma |
| Rolagem horizontal da landing com zoom de 200% (720×450 ×2) | Nenhuma |
| Rolagem horizontal de `/anfitrioes` em 390 e 1440 | Nenhuma; 768, 1280 e zoom não medidos nesta rodada |
| H1, hierarquia de títulos, botões e links com nome | 1 H1, sem saltos, nenhum sem nome (nas duas páginas) |
| Imagens | Nenhuma quebrada, nenhuma sem `alt` |
| Carga da imagem sob demanda | Inconclusivo: só a hero tem prioridade no código, mas o número de imagens carregadas antes de rolar variou de 1 a 10 entre as rodadas, algumas com a página recarregada |
| Conteúdo revelado por animação | Todo visível ao rolar |
| Temas | 10 opções, seleção funciona, seta muda de tema; 3 com leituras, 7 com a mensagem de vazio |
| Original, Tradução, Lado a lado | Grego e português alternam corretamente |
| Menu do celular | Abre com os 5 itens e fecha com Esc |
| Faixa "Em cartaz" | Sem movimento automático; rolagem manual no celular |

**Não testado de fato:**

- Foco visível e redução de movimento: as regras existem no CSS, mas não foram exercitadas nesta rodada.
- Formulários, criação de conta, candidatura e perguntas à IA: fora do escopo, conforme o prompt.
- Leitor de tela real.

### Contraste

Textos sobre foto: medidos pixel a pixel, ignorando 1% de pontos extremos. A hero e o Chamado foram medidos em 1440 e 390; os cards, só em 1440. Todos passam: o pior caso é 3,84 em 1440 e 3,98 em 390, em títulos grandes (mínimo 3). Os alertas em chips vinham dos cantos arredondados; na área interna, o menor valor é 8,83.

Combinações abaixo do mínimo, **não alteradas porque mudar cor é decisão de design**:

| Texto | Contraste | Mínimo | Onde |
|---|---|---|---|
| Numerais I, II, III em ouro sobre fundo claro | 1,65 | 4,5 | Curadoria, seção VII |
| Numerais 01, 02… do FAQ | 1,49 | 4,5 | FAQ |
| "Artigo · 11 min", "Artigo · 16 min" | 3,55 | 4,5 | Degraus dourados |
| "Trilhas guiadas em preparação" | 4,21 | 4,5 | Seção IV |
| Linha final do rodapé | 4,34 | 4,5 | Rodapé |

O prompt (L03) diz que o dourado não deve ser cor de texto sobre fundo claro, então os numerais são o ponto mais importante. Essa medição foi feita só na landing em 1440.

## Funcionalidades: disponibilidade verificada

| Funcionalidade | Situação |
|---|---|
| Cadastro e login | Páginas abrem; não foram usados |
| Trilhas | O prompt registra "Em preparação"; não reconfirmado, exige login |
| Assistente | Não verificado; a landing mantém o CTA "Perguntar" |
| Salas, artigos, comparação | Não verificados, exigem login |
| Conquistas | Não verificado; a seção é demonstrativa |

## Capturas

- `landing-1440.jpeg`, `anfitrioes-1440.jpeg`, `anfitrioes-390.jpeg`
- `landing-390-primeira-dobra.jpeg`, `landing-390-rodape.jpeg`
- `landing-390.jpeg`: a página passa do limite de captura do navegador (16.384 px). O trecho final repete o topo; o fim real está em `landing-390-rodape.jpeg`.
