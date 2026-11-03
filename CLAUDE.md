# Landing page — A Sala dos Buscadores

Landing pública (visitante não logado) da plataforma **A Sala dos Buscadores** (https://sala-dos-buscadores.vercel.app), uma biblioteca digital de estudos comparados de tradições religiosas, espirituais e filosóficas.
O design vem da versão **"v3 Galeria"** no Figma `Sala_Dos_Buscadores` (página "📱→ Handoff (Site_LandigPage)"), aprovada pelo Osvaldo (designer). Siga esse design; não invente outra direção visual.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript 5 (não usar TypeScript 7: o Next 15 quebra com ele).
- Tailwind CSS v4: tokens em `app/globals.css` (`@theme`). Não crie cores fora dos tokens.
- Fontes locais via `@fontsource-variable`: Fraunces (títulos), Source Serif 4 (textos de leitura), Inter (interface). EB Garamond (`font-grego`) só para citações em grego clássico, que a Source Serif não cobre.
- Comandos: `npm run dev`, `npm run build`, `npm run imagens` (baixa as imagens do site para `public/imagens`).

## Estrutura
- `app/page.tsx` monta as seções na ordem: Hero → Curadoria (I) → Salas (II) → Comparar (III) → Trilhas (IV) → Leitura (V) → Conquistas (VI) → Seja anfitrião (VII) → FAQ (VIII) → Chamado → Rodapé.
- `components/landing/*`: uma função por seção.
- `components/ui/primitivos.tsx`: Botao (dourado, vidro, grafite, marfim), Rotulo (numeral romano + fio + texto), Titulo (duas linhas, a segunda em itálico), NivelChip, SeloAnfitriao, Gravura.
- `components/ui/sala-card.tsx`: card de Sala baseado na página /salas da plataforma, sem o botão de favoritar (a landing é para visitante não logado).
- `lib/conteudo.ts`: todo o conteúdo real (Salas, temas, trilha, conquistas, FAQ, caminhos de imagem).

## Identidade (não mudar sem o designer)
- Cores: noite #0B0C0C, grafite #111313, card escuro #303635, bordô #390007, damasco #F6E7CE, canvas #EBDCC1, marfim #FDF8EF, ouro #D3B36E, marca #634018.
- Títulos: Fraunces Light, eixo óptico automático (`font-optical-sizing: auto`), duas linhas, a segunda em itálico (ouro no escuro, bordô no claro).
- Rótulo de seção: numeral romano em itálico + fio de 40px + texto em caixa alta pequena.
- Salas sempre em ordem alfabética nos textos ("a ordem não indica importância").
- Tom: "Curador de museu, não pregador". Neutralidade doutrinária; a IA não diz qual crença é verdadeira.
- Painéis sobre gravuras usam `vidro-escuro`. O orbe dourado (`orbe`) é o assistente.

## Movimento
- Em `app/globals.css` (seção "Movimento"), sem biblioteca. `components/ui/movimento.tsx` marca `data-visivel` nos elementos com `data-revelar` quando entram na tela.
- Lento e sem quique. Cada animação nasce de uma ideia do site: a porta abre (Hero), a escada sobe (Trilhas), a descoberta acende (Conquistas). Não acrescente efeito decorativo em cada seção.
- Estados ocultos só valem com `.anima` e sem `prefers-reduced-motion`: o conteúdo nunca depende da animação para aparecer.
- Duas cenas presas à rolagem (`data-cena`), adaptadas do primeiro projeto (`C:\Users\ceuma\Sala-do-Buscador`): o túnel de Salas sobre o céu (`public/imagens/cosmos`) e a escada que sobe. Lógica em `movimento.tsx`, regras em `globals.css`. Com movimento reduzido ou tela baixa, valem a grade e a escada comuns. O foco do teclado leva a rolagem até a Sala focada.

## Pendências
- Imagens: `public/imagens/portal` vem do pacote da revisão de 31/10/2026. Só Fé e Poder ainda usa recorte de `public/imagens/provisorias`, por falta de imagem própria. `npm run imagens` está obsoleto.
- Revisão `REVISAO-LANDING-PROMPT.txt`: aplicados fotos e textos, sem mudar layout, ordem nem cores (decisão do designer). Links de artigos levam à Sala até haver URLs canônicas.
- Logo: `public/imagens/marca/logo-damasco.svg`. Na exportação do Figma os nomes estão trocados: o logo horizontal (504×154) vem como `Logo_Vertical_Bege.svg`.
- Página `/anfitrioes` (`components/landing/anfitrioes.tsx`, `editor-demo.tsx`) segue o PDF "Landing Page — Anfitriões (crie sua Sala)"; as fotos em `public/imagens/anfitrioes` foram extraídas dele. As respostas 03 a 05 do FAQ estão fechadas no PDF e foram redigidas a partir do resto da página: a curadoria precisa revisar. A candidatura hoje é um `mailto` (`CANDIDATURA_URL` em `lib/conteudo.ts`); trocar quando houver formulário.
- Versão mobile foi feita responsiva a partir do desktop; revisar com o designer.

## Qualidade
- Acessibilidade: foco visível (ouro), `prefers-reduced-motion` respeitado, textos alternativos, botões com nome acessível.
- Sem rolagem horizontal em 390px. Teste em 390, 768, 1024 e 1440.
