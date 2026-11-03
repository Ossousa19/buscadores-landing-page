import { SITE_URL, imagens, numeroPorExtenso, salas } from "@/lib/conteudo";
import { Botao, DEGRADE_GRAVURA, Gravura, Rotulo, Titulo } from "@/components/ui/primitivos";
import { SalaCard } from "@/components/ui/sala-card";

const principios = [
  { n: "I", t: "Contexto histórico", d: "Textos e estudos apresentados em seus contextos históricos e culturais." },
  { n: "II", t: "Referências identificadas", d: "Fontes à vista; original e tradução lado a lado, quando disponíveis." },
  { n: "III", t: "Revisão editorial", d: "Os conteúdos passam pela revisão da curadoria antes de ir ao ar." },
];

export function Curadoria() {
  return (
    <section id="curadoria" aria-labelledby="curadoria-titulo" className="grid bg-damasco lg:grid-cols-[640fr_800fr]">
      <figure data-revelar="cortina" className="relative flex min-h-[420px] items-end overflow-hidden bg-grafite p-6 sm:p-10 lg:min-h-[900px]">
        <div aria-hidden className="cortina-imagem absolute inset-0">
          <Gravura src={imagens.curadoria} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
        <figcaption className="cortina-legenda relative flex flex-col gap-1 rounded-xl bg-marfim/92 px-4.5 py-3.5 backdrop-blur-md">
          <span className="text-[10.5px] font-semibold tracking-[0.14em] text-marca uppercase">Acervo · ilustração</span>
          <span className="font-serif text-[15px] italic text-grafite">Ilustração de atmosfera do acervo</span>
        </figcaption>
      </figure>

      <div className="flex flex-col justify-center gap-8 px-5 py-20 sm:px-10 lg:py-0 lg:pr-[120px] lg:pl-[104px]">
        <Rotulo numero="I">Curadoria</Rotulo>
        <div id="curadoria-titulo">
          <Titulo linha1="Contexto para ler." linha2="Fontes para aprofundar." />
        </div>
        <p className="max-w-[576px] font-serif text-[19px] leading-[1.6] text-texto-2">
          Cada Sala reúne textos e estudos em seus contextos históricos e culturais. A proposta é apoiar a compreensão e a comparação, respeitando as diferenças entre as tradições.
        </p>
        <ul className="max-w-[576px]">
          {principios.map((p) => (
            <li key={p.n} className="flex gap-6 border-t border-bordo/14 py-[18px]">
              <span className="w-9 shrink-0 font-display text-[22px] font-light italic text-ouro">{p.n}</span>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-display text-[21px] text-grafite">{p.t}</h3>
                <p className="text-[15px] leading-[1.45] text-texto-2">{p.d}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="font-serif text-base text-marca italic">Curador de museu, não pregador.</p>
      </div>
    </section>
  );
}

export function Salas() {
  return (
    <section id="salas" data-cena="tunel" aria-labelledby="salas-titulo" className="tunel bg-noite px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="tunel-palco">
        {/* Céu do túnel: só aparece quando as cenas estão ativas (app/globals.css) */}
        <div aria-hidden className="tunel-fundo">
          <div className="tunel-ceu absolute inset-0">
            <Gravura src="/imagens/cosmos/ceu.webp" sizes="100vw" />
            <video muted loop playsInline preload="none" disablePictureInPicture className="absolute inset-0 size-full object-cover">
              <source src="/imagens/cosmos/cosmos.webm" type="video/webm" />
              <source src="/imagens/cosmos/cosmos.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="absolute inset-0 block bg-[radial-gradient(ellipse_at_center,rgb(11_12_12/.5)_0%,rgb(11_12_12/.2)_65%),linear-gradient(180deg,rgb(11_12_12/1)_0%,rgb(11_12_12/.1)_22%,rgb(11_12_12/.1)_78%,rgb(11_12_12/1)_100%)]" />
        </div>

        <div className="tunel-conteudo mx-auto flex max-w-[1200px] flex-col gap-16">
          <div className="tunel-abertura flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-4">
              <Rotulo numero="II" tom="escuro">Salas da curadoria</Rotulo>
              <div id="salas-titulo">
                <Titulo linha1="O acervo," linha2={`em ${numeroPorExtenso(salas.length)} Salas.`} tom="escuro" />
              </div>
            </div>
            <div className="flex max-w-[380px] flex-col items-start gap-4.5">
              <p className="font-serif text-lg leading-[1.55] text-marfim/75">
                Cada Sala é dedicada a uma tradição ou corpus documental. Em ordem alfabética; a ordem não indica importância.
              </p>
              <Botao href={`${SITE_URL}/salas`} variante="vidro">Ver todas as Salas</Botao>
            </div>
          </div>

          <ul className="tunel-lista grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {salas.map((s, i) => (
              <li key={s.slug} className="tunel-item flex" style={{ zIndex: salas.length - i }}>
                <SalaCard sala={s} ordem={i % 3} degrade={DEGRADE_GRAVURA} className="min-h-[560px] w-full lg:min-h-[600px]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
