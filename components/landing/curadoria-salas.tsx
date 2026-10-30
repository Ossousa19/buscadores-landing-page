import { SITE_URL, imagens, salas } from "@/lib/conteudo";
import { Botao, Rotulo, Titulo } from "@/components/ui/primitivos";
import { SalaCard } from "@/components/ui/sala-card";

const principios = [
  { n: "I", t: "Neutralidade doutrinária", d: "Salas em ordem alfabética; a ordem não indica importância." },
  { n: "II", t: "Fontes primárias à vista", d: "Original e tradução lado a lado, com a edição citada." },
  { n: "III", t: "Revisão da curadoria", d: "Nada vai ao ar sem revisão. Toda resposta aponta fontes." },
];

export function Curadoria() {
  return (
    <section id="curadoria" aria-labelledby="curadoria-titulo" className="grid bg-damasco lg:grid-cols-[640fr_800fr]">
      <figure data-revelar="cortina" className="relative flex min-h-[420px] items-end overflow-hidden bg-grafite p-6 sm:p-10 lg:min-h-[900px]">
        <div aria-hidden className="cortina-imagem absolute inset-0" style={{ backgroundImage: `url("${imagens.claustro}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <figcaption className="cortina-legenda relative flex flex-col gap-1 rounded-xl bg-marfim/92 px-4.5 py-3.5 backdrop-blur-md">
          <span className="text-[10.5px] font-semibold tracking-[0.14em] text-marca uppercase">Acervo · gravura</span>
          <span className="font-serif text-[15px] italic text-grafite">Claustro junto ao mar, ilustração do acervo</span>
        </figcaption>
      </figure>

      <div className="flex flex-col justify-center gap-8 px-5 py-20 sm:px-10 lg:py-0 lg:pr-[120px] lg:pl-[104px]">
        <Rotulo numero="I">Curadoria</Rotulo>
        <div id="curadoria-titulo">
          <Titulo linha1="Curador de museu," linha2="não pregador." />
        </div>
        <p className="max-w-[576px] font-serif text-[19px] leading-[1.6] text-texto-2">
          A Sala dos Buscadores organiza o conhecimento religioso, espiritual e filosófico da humanidade em Salas, cada uma dedicada a uma tradição ou corpus documental. A IA organiza o que o acervo diz; não determina qual crença é verdadeira.
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
      </div>
    </section>
  );
}

export function Salas() {
  const [apo, , ch, fep, cai, ura] = salas;
  return (
    <section id="salas" aria-labelledby="salas-titulo" className="bg-noite px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Rotulo numero="II" tom="escuro">Salas da curadoria</Rotulo>
            <div id="salas-titulo">
              <Titulo linha1="O acervo," linha2="em seis Salas." tom="escuro" />
            </div>
          </div>
          <div className="flex max-w-[380px] flex-col items-start gap-4.5">
            <p className="font-serif text-lg leading-[1.55] text-marfim/75">
              Cada Sala é dedicada a uma tradição ou corpus documental. Em ordem alfabética; novas Salas entram nos próximos ciclos.
            </p>
            <Botao href={`${SITE_URL}/salas`} variante="vidro">Ver todas as Salas</Botao>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          <SalaCard sala={ch} className="min-h-[560px] md:col-span-2 lg:col-span-8 lg:min-h-[600px]" />
          <SalaCard sala={apo} ordem={1} className="min-h-[560px] lg:col-span-4 lg:min-h-[600px]" />
          {[fep, cai, ura].map((s, i) => (
            <SalaCard key={s.slug} sala={s} ordem={i} className="min-h-[560px] lg:col-span-4 lg:min-h-[600px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
