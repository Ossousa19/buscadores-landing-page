"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ferramentasEditor, requisitosEnvio } from "@/lib/conteudo";
import { Seta, Visto, classesBotao, cx } from "@/components/ui/primitivos";

type Ferramenta = (typeof ferramentasEditor)[number]["id"];

function Marca({ on, children, className }: { on: boolean; children: ReactNode; className?: string }) {
  return <span className={cx("-mx-0.5 rounded px-0.5 transition-colors duration-500", on && "bg-areia/70", className)}>{children}</span>;
}

/* Demonstração do editor: ao entrar na tela percorre Termo, Obra e Citar fonte uma vez e para.
   O visitante pode trocar a ferramenta e simular o envio; nada sai da página. */
export function EditorDemo() {
  const [ativa, setAtiva] = useState<Ferramenta>("citar");
  const [salvo, setSalvo] = useState(true);
  const [enviado, setEnviado] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const interagiu = useRef(false);

  useEffect(() => {
    if (!raiz.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tempos: number[] = [];
    const observador = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        observador.disconnect();
        setSalvo(false);
        setAtiva("termo");
        tempos.push(window.setTimeout(() => setSalvo(true), 1200));
        tempos.push(window.setTimeout(() => !interagiu.current && setAtiva("obra"), 1900));
        tempos.push(window.setTimeout(() => !interagiu.current && setAtiva("citar"), 3800));
      },
      { threshold: 0.35 },
    );
    observador.observe(raiz.current);
    return () => {
      observador.disconnect();
      tempos.forEach(clearTimeout);
    };
  }, []);

  const escolher = (f: Ferramenta) => {
    interagiu.current = true;
    setAtiva(f);
  };

  return (
    <div ref={raiz} className="flex w-full flex-col gap-14">
      <p className="sr-only">Demonstração do editor. Nada é enviado.</p>
      <div className="grid gap-6 xl:grid-cols-[816fr_360fr]">
        <div className="overflow-hidden rounded-3xl bg-marfim text-left shadow-[0_2px_4px_rgb(0_0_0/0.1),0_24px_48px_-16px_rgb(0_0_0/0.4)]">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-bordo/10 px-4 py-3 sm:pl-5">
            <div role="toolbar" aria-label="Ferramentas do editor" className="flex flex-wrap items-center gap-1 text-[13.5px] text-grafite">
              <span aria-hidden className="px-2 font-bold">N</span>
              <span aria-hidden className="px-2 italic">I</span>
              <span aria-hidden className="px-2">Link</span>
              <span aria-hidden className="mx-1 h-5 w-px bg-bordo/14" />
              {ferramentasEditor.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={ativa === f.id}
                  onClick={() => escolher(f.id)}
                  className={cx("rounded-lg px-3 py-1.5 transition-colors duration-300", ativa === f.id ? "bg-areia font-medium text-ouro-tinta" : "hover:bg-damasco")}
                >
                  {f.t}
                </button>
              ))}
            </div>
            <p role="status" className="text-[12.5px] text-texto-3">{enviado ? "Em revisão" : salvo ? "Rascunho salvo" : "Salvando…"}</p>
          </div>
          <div className="flex flex-col p-6 sm:px-10 sm:py-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-marca uppercase">Leituras do Evangelho de Tomé · Novo artigo</p>
            <h3 className="mt-3.5 font-display text-[30px] leading-[1.15] tracking-[-0.01em] text-grafite sm:text-4xl">O Hino da Pérola nos Atos de Tomé</h3>
            <p className="mt-4 font-serif text-lg leading-[30px] text-texto-2">
              Segundo os <Marca on={ativa === "obra"} className="text-grafite italic">Atos de Tomé</Marca>, o <Marca on={ativa === "termo"} className={ativa === "termo" ? "text-grafite" : ""}>hino</Marca> narra a viagem de um príncipe que esquece a própria origem <span className="font-semibold text-bordo">[1]</span>. A leitura que proponho aqui é a de um anfitrião, e as interpretações seguem as fontes citadas.
            </p>
            <div key={ativa === "citar" ? "citar" : "outra"} className={cx("mt-4 flex items-center gap-4 rounded-xl border border-bordo/10 bg-damasco px-4 py-3.5", ativa === "citar" && "troca")}>
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-bordo text-[12.5px] font-semibold text-marfim">1</span>
              <div>
                <p className="font-serif text-base text-grafite italic">
                  <Marca on={ativa === "obra"}>Atos de Tomé</Marca>
                </p>
                <p className="font-sans text-[13px] text-texto-3">Fonte primária · obra do card Fontes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-noite/55 p-7 text-left ring-1 ring-inset ring-ouro/30 backdrop-blur-lg">
          <p className="text-[11.5px] font-semibold tracking-[0.14em] text-ouro uppercase">Para enviar</p>
          <ul data-revelar="requisitos" className="mt-4.5 flex flex-col gap-[18px]">
            {requisitosEnvio.map((r, i) => (
              <li key={r} style={{ ["--i" as string]: i }} className="flex items-center gap-3">
                <span className="requisito-selo grid size-6 shrink-0 place-items-center rounded-full bg-ouro text-ouro-tinta">
                  <Visto />
                </span>
                <span className="requisito-texto text-[14.5px] text-marfim">{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-ouro/20 pt-5 text-[13.5px] leading-5 text-marfim/65">
            A curadoria revisa antes de publicar. Enquanto isso, o artigo fica em “Em revisão”.
          </p>
          <button type="button" aria-pressed={enviado} onClick={() => setEnviado((v) => !v)} className={cx(classesBotao(enviado ? "vidro" : "dourado"), "mt-6 w-fit whitespace-nowrap xl:mt-auto xl:translate-y-1")}>
            {enviado ? "Em revisão" : "Enviar para revisão"}
            {enviado ? <Visto /> : <Seta className="size-4 transition-transform group-hover:translate-x-0.5" />}
          </button>
        </div>
      </div>

      <ul className="grid gap-8 text-left md:grid-cols-[378fr_411fr_411fr] md:gap-0">
        {ferramentasEditor.map((f, i) => (
          <li key={f.id} className={cx("relative flex flex-col gap-1.5 border-t border-ouro/25 pt-5 md:pr-8", i > 0 && "md:border-l md:pl-8")}>
            <span aria-hidden className={cx("absolute inset-x-0 -top-px h-px origin-left bg-ouro transition-transform duration-700 ease-galeria", ativa === f.id ? "scale-x-100" : "scale-x-0")} />
            <h3 className="font-display text-[22px] text-damasco">{f.t}</h3>
            <p className="text-[15px] leading-[23px] text-damasco/65">{f.d}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
