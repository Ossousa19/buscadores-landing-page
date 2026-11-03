"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SITE_URL, mesaPorTema, temas } from "@/lib/conteudo";
import { Botao, Gravura, Rotulo, Titulo, cx } from "@/components/ui/primitivos";

export function Comparar() {
  const [ativo, setAtivo] = useState(temas[0]);
  const grupo = useRef<HTMLDivElement>(null);
  const resultados = mesaPorTema[ativo.slug] ?? [];

  // Seleção única: as setas percorrem os temas
  const aoTeclar = (e: KeyboardEvent, i: number) => {
    const passo = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!passo) return;
    e.preventDefault();
    const proximo = (i + passo + temas.length) % temas.length;
    setAtivo(temas[proximo]);
    grupo.current?.querySelectorAll<HTMLButtonElement>("[role=radio]")[proximo]?.focus();
  };
  return (
    <section
      id="comparar"
      aria-labelledby="comparar-titulo"
      className="px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]"
      style={{ background: "radial-gradient(ellipse at center, var(--color-bordo-2) 0%, var(--color-bordo) 100%)" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[54px]">
        <Rotulo numero="III" tom="escuro">Temas</Rotulo>
        <div id="comparar-titulo">
          <Titulo linha1="Por onde começa" linha2="a sua busca?" tom="bordo" tamanho="xl" centro />
        </div>
        <p className="-mt-6 max-w-[560px] text-center font-serif text-[19px] leading-[1.55] text-damasco/82">Escolha uma pergunta e descubra como ela aparece em diferentes textos e tradições.</p>

        <div ref={grupo} role="radiogroup" aria-label="Escolha um tema" className="flex max-w-[1000px] flex-wrap justify-center gap-2.5">
          {temas.map((t, i) => {
            const on = t.slug === ativo.slug;
            return (
              <button
                key={t.slug}
                type="button"
                role="radio"
                aria-checked={on}
                tabIndex={on ? 0 : -1}
                onClick={() => setAtivo(t)}
                onKeyDown={(e) => aoTeclar(e, i)}
                className={cx(
                  "rounded-full px-4.5 py-2.5 text-[14.5px] font-medium ring-1 ring-inset transition-colors",
                  on ? "bg-ouro text-ouro-tinta ring-ouro" : "bg-white/4 text-damasco ring-ouro/40 hover:bg-white/10",
                )}
              >
                {t.nome}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">Tema selecionado: {ativo.nome}</p>

        {resultados.length === 0 && (
          <p key={ativo.slug} className="troca w-full rounded-3xl bg-marfim px-6 py-10 text-center font-serif text-lg text-texto-2">Ainda não há leituras selecionadas para este tema.</p>
        )}

        <ul key={`lista-${ativo.slug}`} className="flex w-full flex-wrap justify-center gap-6 empty:hidden">
          {resultados.map((c, i) => (
            <li key={c.titulo} style={{ ["--i" as string]: i }} className="troca group/mesa w-full overflow-hidden rounded-3xl bg-marfim shadow-[0_2px_4px_rgb(0_0_0/0.1),0_24px_48px_-16px_rgb(0_0_0/0.28)] transition-[translate] duration-500 ease-galeria hover:-translate-y-1 md:w-[calc((100%-48px)/3)]">
              <div className="h-[220px] overflow-hidden">
                <div className="relative h-full transition-[scale] duration-[1400ms] ease-galeria group-hover/mesa:scale-[1.05]">
                  <Gravura src={c.imagem} sizes="(min-width: 768px) 384px, 100vw" posicao={c.posicaoImagem} />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-marca uppercase">{c.sala}</p>
                <h3 className="font-display text-[23px] leading-[1.18] text-grafite">{c.titulo}</h3>
                <div className="mt-0.5 flex items-center justify-between border-t border-bordo/10 pt-2.5">
                  <span className="text-[13.5px] text-texto-3">{c.tipo}</span>
                  <a href={`${SITE_URL}/salas/${c.salaSlug}`} className="text-[13.5px] font-semibold text-bordo hover:underline">
                    Ver na Sala <span className="sr-only">: {c.titulo}</span>→
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Botao href={`${SITE_URL}/comparar?tema=${ativo.slug}`} variante="marfim">Comparar este tema</Botao>

        <div className="flex w-full flex-col items-start gap-5 rounded-[28px] bg-noite/55 p-5 ring-1 ring-inset ring-ouro/35 backdrop-blur-lg sm:flex-row sm:items-center sm:rounded-full sm:py-5 sm:pr-5 sm:pl-5">
          <span aria-hidden className="orbe size-13 shrink-0" />
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-base font-semibold tracking-[-0.01em] text-marfim">Perguntar ao assistente: «{ativo.nome.toLowerCase()}»</p>
            <p className="text-sm text-marfim/65">A IA organiza o que o acervo diz; não determina qual crença é verdadeira.</p>
          </div>
          <Botao href={`${SITE_URL}/assistente`}>Perguntar</Botao>
        </div>
      </div>
    </section>
  );
}
