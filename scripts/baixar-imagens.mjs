// Baixa para /public/imagens as imagens que já estão publicadas no site da plataforma.
// Uso: npm run imagens
// As que não existem no site (gravuras do Figma) aparecem listadas no final para exportar do Figma.
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const SITE = "https://sala-dos-buscadores.vercel.app";
const PUBLIC = join(process.cwd(), "public");

const doSite = {
  "imagens/hero/colunata.webp": "/imagens/banner/marca-colunata.webp",
  "imagens/salas/corpus-hermeticum.webp": "/imagens/salas/corpus-hermeticum.webp",
  "imagens/salas/caibalion.webp": "/imagens/salas/caibalion.webp",
  "imagens/salas/urantia.webp": "/imagens/salas/urantia.webp",
};

const doFigma = {
  "imagens/salas/apocrifos.webp": "gravura da Sala Apócrifos (basílica com colunas)",
  "imagens/salas/nag-hammadi.webp": "gravura da Sala Nag Hammadi (biblioteca de pergaminhos)",
  "imagens/salas/fe-e-poder.webp": "gravura da Sala Fé e Poder (pátio mourisco)",
  "imagens/gravuras/claustro.webp": "claustro junto ao mar (seção Curadoria e Sala de anfitriã)",
  "imagens/gravuras/escada.webp": "escada de livros (seção Chamado)",
  "imagens/marca/logo-damasco.svg": "logo horizontal na cor bege/damasco (Style-guide)",
};

const existe = async (p) => access(p).then(() => true, () => false);

for (const [destino, origem] of Object.entries(doSite)) {
  const alvo = join(PUBLIC, destino);
  try {
    const r = await fetch(SITE + origem);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    await mkdir(dirname(alvo), { recursive: true });
    await writeFile(alvo, Buffer.from(await r.arrayBuffer()));
    console.log("ok      ", destino);
  } catch (e) {
    console.log("falhou  ", destino, "-", e.message);
  }
}

const faltando = [];
for (const [destino, desc] of Object.entries(doFigma)) if (!(await existe(join(PUBLIC, destino)))) faltando.push(`  public/${destino}  ←  ${desc}`);
if (faltando.length) {
  console.log("\nExporte do Figma (Sala_Dos_Buscadores) e salve com estes nomes:");
  console.log(faltando.join("\n"));
  console.log("\nEnquanto não existirem, os cards mostram o fundo bordô com brilho dourado, como na plataforma.");
}
