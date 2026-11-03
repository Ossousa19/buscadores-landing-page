import { conquistas, trilha } from "@/lib/conteudo";
import { Botao, Rotulo, Titulo, cx } from "@/components/ui/primitivos";
import { LeituraTrecho } from "./leitura-trecho";

export function Trilhas() {
  return (
    <section id="trilhas" data-cena="escada" aria-labelledby="trilhas-titulo" className="escada overflow-clip bg-canvas px-5 pt-24 sm:px-10 lg:px-[120px] lg:pt-[140px]">
      <div className="escada-palco mx-auto flex max-w-[1200px] flex-col gap-[63px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Rotulo numero="IV">Leituras</Rotulo>
            <div id="trilhas-titulo" className="escada-titulo">
              <Titulo linha1="Comece por" linha2="uma leitura." tamanho="lg" className="tracking-[-0.025em]" />
            </div>
          </div>
          <div className="flex max-w-[340px] flex-col items-start gap-4.5">
            <p className="font-serif text-lg leading-[1.55] text-texto-2">
              Escolha uma Sala, conheça seu contexto e avance pelos textos e referências.
            </p>
            <Botao href="#salas" variante="grafite">Escolher uma Sala</Botao>
            <p className="text-[13.5px] text-texto-3">Trilhas guiadas em preparação.</p>
          </div>
        </div>

        <ol data-revelar="escada" aria-label={trilha.nome} className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:items-end lg:gap-0">
          {trilha.degraus.map((d, i) => {
            const ultimo = i === trilha.degraus.length - 1;
            return (
              <li
                key={d.n}
                style={{ ["--h" as string]: `${200 + i * 70}px`, ["--i" as string]: i }}
                className={cx(
                  "degrau relative flex flex-col gap-3 rounded-2xl border-bordo/12 px-5.5 py-6.5 lg:h-(--h) lg:flex-1 lg:rounded-none lg:rounded-t-[20px] lg:border-t lg:border-l",
                  ultimo ? "bg-ouro" : i % 2 ? "bg-areia" : "bg-damasco",
                )}
              >
                <span className={cx("degrau-n origin-left font-display text-[30px] font-light italic", ultimo ? "text-bordo" : "text-marca")}>{d.n}</span>
                <span className={cx("text-[13px]", ultimo ? "text-ouro-tinta" : "text-texto-3")}>{d.tipo}</span>
                <h3 className="font-display text-xl leading-[1.18] tracking-[-0.01em] text-grafite">{d.titulo}</h3>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Leitura() {
  const recursos = [
    { t: "Original e tradução", d: "Alterne ou leia lado a lado, quando disponíveis, com a edição citada." },
    { t: "Glossário da Sala", d: "Demiurgo · grego · δημιουργός · artesão." },
    { t: "Continue de onde parou", d: "Retome a leitura no ponto em que parou." },
  ];
  return (
    <section aria-labelledby="leitura-titulo" className="bg-damasco px-5 py-24 shadow-[0_-1px_0_var(--color-damasco)] sm:px-10 lg:px-[120px] lg:py-[150px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 text-center">
        <h2 className="sr-only">Leitura na fonte</h2>
        <Rotulo numero="V">Leitura na fonte</Rotulo>
        <LeituraTrecho />
        <ul className="mt-[34px] grid w-full gap-8 text-left md:grid-cols-[378fr_411fr_411fr] md:gap-0">
          {recursos.map((r, i) => (
            <li key={r.t} className={cx("flex flex-col gap-2 border-t border-bordo/14 pt-6 md:pr-8", i > 0 && "md:border-l md:pl-8")}>
              <h3 className="font-display text-[22px] text-grafite">{r.t}</h3>
              <p className="text-[15px] leading-[1.5] text-texto-2">{r.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Conquistas() {
  return (
    <section aria-labelledby="conquistas-titulo" className="bg-noite px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[62px]">
        <Rotulo numero="VI" tom="escuro">Seu caminho no acervo</Rotulo>
        <div id="conquistas-titulo">
          <Titulo linha1="Cada descoberta" linha2="deixa uma marca." tom="escuro" centro />
        </div>
        <ul
          data-revelar="gemas"
          aria-label="Conquistas"
          className="grid w-full grid-cols-2 gap-x-6 gap-y-10 rounded-[28px] px-6 pt-12 pb-10 ring-1 ring-inset ring-ouro/20 backdrop-blur-xl sm:grid-cols-4 xl:flex xl:justify-between xl:px-9"
          style={{ background: "linear-gradient(180deg, rgb(255 255 255/.07), rgb(255 255 255/.02)), rgb(26 28 28/.6)" }}
        >
          {conquistas.map((c, i) => (
            <li key={c.gema} style={{ ["--i" as string]: i }} className="flex flex-col items-center gap-3 text-center xl:w-[126px]">
              <span
                aria-hidden
                className="gema size-[76px] rounded-full ring-1 ring-white/40"
                style={{ background: `radial-gradient(circle at 50% 40%, ${c.de}, ${c.para})`, boxShadow: `0 10px 30px ${c.de}73` }}
              />
              <span className="gema-texto text-[10.5px] font-semibold tracking-[0.14em] text-ouro uppercase xl:whitespace-nowrap">{c.gema}</span>
              <span className="gema-texto font-display text-base leading-[1.2] text-marfim">{c.titulo}</span>
            </li>
          ))}
        </ul>
        <p className="max-w-[560px] text-center font-serif text-lg leading-[1.55] text-marfim/70">
          Leituras, encontros com as fontes e conexões entre Salas. Cada jornada tem seu próprio ritmo.
        </p>
      </div>
    </section>
  );
}
