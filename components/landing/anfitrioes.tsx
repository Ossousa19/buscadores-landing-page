import { CANDIDATURA_URL, CURADORIA_EMAIL, alcanceSala, artigosHelena, etapasAnfitriao, imagensAnfitrioes, motivosAnfitriao, politicaEditorial, salaDemo } from "@/lib/conteudo";
import { Botao, DEGRADE_GRAVURA, Rotulo, SeloAnfitriao, Seta, Titulo, cx } from "@/components/ui/primitivos";
import { SalaCard } from "@/components/ui/sala-card";
import { EditorDemo } from "./editor-demo";
import { Chamado } from "./fim";
import { Cabecalho } from "./topo";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#editor", label: "O editor" },
  { href: "#revisao", label: "A revisão" },
  { href: "#duvidas", label: "Perguntas" },
];

export const colunasAnfitrioes = [
  { h: "Anfitriões", itens: [["Como funciona", "#como-funciona"], ["O editor", "#editor"], ["A revisão", "#revisao"], ["Candidatar-me", CANDIDATURA_URL]] },
  { h: "Acervo", itens: [["Salas", "/salas"], ["Comparar", "/comparar"], ["Assistente", "/assistente"]] },
  { h: "Sobre", itens: [["Política editorial", "/sobre#politica-editorial"], ["Como funciona o assistente", "/sobre#assistente"]] },
  { h: "Legal", itens: [["Termos em linguagem simples", "/sobre#termos"], ["Privacidade e LGPD", "/sobre#privacidade"]] },
];

const painel = { background: "linear-gradient(180deg, rgb(255 255 255/.045), rgb(255 255 255/.02)), rgb(26 28 28/.6)" };

export function HeroAnfitrioes() {
  return (
    <section aria-labelledby="hero-titulo" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-noite lg:min-h-[1000px]">
      <div
        aria-hidden
        className="hero-fundo absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgb(11 12 12/.5) 0%, rgb(11 12 12/.82) 100%), linear-gradient(180deg, rgb(11 12 12/.8) 0%, rgb(11 12 12/.5) 35%, rgb(11 12 12/.6) 70%, rgb(11 12 12/1) 100%), url("${imagensAnfitrioes.hero}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Cabecalho itens={links} inicio="/" cta={{ href: CANDIDATURA_URL, label: "Candidatar-me" }} />

      <div className="flex flex-1 flex-col items-center justify-center gap-7 px-5 py-14 text-center sm:px-10">
        <p className="hero-surge text-[13px] font-semibold tracking-[0.14em] text-ouro-claro/95 uppercase" style={{ ["--d" as string]: "120ms" }}>
          Para pesquisadores, professores e estudiosos de uma tradição
        </p>
        <h1 id="hero-titulo" className="display mt-2 text-[52px] tracking-[-0.035em] sm:text-[100px] lg:text-[148px]" style={{ lineHeight: 0.784 }}>
          <span className="linha"><span className="hero-linha block text-marfim" style={{ ["--d" as string]: "200ms" }}>Abra a sua Sala</span></span>
          <span className="linha"><span className="hero-linha block italic text-ouro" style={{ ["--d" as string]: "370ms" }}>no acervo</span></span>
        </h1>
        <p className="hero-surge mt-3 max-w-[800px] font-serif text-lg leading-[1.52] text-marfim/85 sm:text-[21px]" style={{ ["--d" as string]: "800ms" }}>
          A curadoria convida anfitriões para manter uma Sala própria: a sua leitura de uma tradição, com os seus artigos e as suas fontes, ao lado das Salas da curadoria.
        </p>
        <div className="hero-surge flex flex-wrap items-center justify-center gap-3.5 pt-2.5" style={{ ["--d" as string]: "940ms" }}>
          <Botao href={CANDIDATURA_URL}>Candidatar-me como anfitrião</Botao>
          <Botao href="#sala" variante="vidro" seta={false}>
            Ver uma Sala de anfitriã
          </Botao>
        </div>
      </div>

      <div className="hero-surge border-t border-ouro/28 bg-noite/40 backdrop-blur-md" style={{ ["--d" as string]: "1120ms" }}>
        <div className="flex items-center gap-8 overflow-x-auto px-5 py-6 sm:px-10 lg:justify-between lg:px-16 lg:py-7 [scrollbar-width:none]">
          <span className="shrink-0 text-[11px] font-semibold tracking-[0.14em] text-ouro uppercase">Do convite à Sala publicada</span>
          {etapasAnfitriao.map((p) => (
            <a key={p.n} href="#como-funciona" className="flex shrink-0 items-center gap-2.5 text-sm text-marfim/80 transition-colors hover:text-marfim">
              <span className="font-display text-base font-light italic text-ouro">{p.n}</span>
              {p.curto}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PorQue() {
  return (
    <section aria-labelledby="porque-titulo" className="grid bg-damasco lg:grid-cols-[800fr_640fr]">
      <div className="order-2 flex flex-col justify-center gap-8 px-5 py-20 sm:px-10 lg:order-1 lg:py-16 lg:pr-10 lg:pl-[120px] xl:py-0 xl:pr-14">
        <Rotulo numero="I">Por que ser anfitrião</Rotulo>
        <div id="porque-titulo">
          <Titulo linha1="Curadoria de museu," linha2="com a sua assinatura." tamanho="galeria" />
        </div>
        <p className="max-w-[560px] font-serif text-[19px] leading-[30px] text-texto-2">
          Sua pesquisa ganha uma Sala própria, organizada com o mesmo rigor do acervo: textos em seus próprios contextos, fontes à vista e nenhuma hierarquia entre tradições.
        </p>
        <ul className="max-w-[576px]">
          {motivosAnfitriao.map((v) => (
            <li key={v.n} className="flex gap-6 border-t border-bordo/14 py-5">
              <span className="w-9 shrink-0 font-display text-[22px] font-light italic text-ouro">{v.n}</span>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-display text-[21px] text-grafite">{v.t}</h3>
                <p className="max-w-[488px] text-[15px] leading-[22px] text-texto-2">{v.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figure data-revelar="cortina" className="relative order-1 flex min-h-[420px] items-end overflow-hidden bg-grafite p-6 sm:p-10 lg:order-2 lg:min-h-[900px]">
        <div aria-hidden className="cortina-imagem absolute inset-0" style={{ backgroundImage: `url("${imagensAnfitrioes.arco}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <figcaption className="cortina-legenda relative flex flex-col gap-1 rounded-xl bg-marfim/92 px-4.5 py-3.5 backdrop-blur-md">
          <span className="text-[10.5px] font-semibold tracking-[0.14em] text-marca uppercase">Acervo · gravura</span>
          <span className="font-serif text-[15px] italic text-grafite">O buscador diante do arco do céu</span>
        </figcaption>
      </figure>
    </section>
  );
}

export function ComoFicaSala() {
  return (
    <section id="sala" aria-labelledby="sala-titulo" className="bg-noite px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Rotulo numero="II" tom="escuro">Como fica a sua Sala</Rotulo>
            <div id="sala-titulo">
              <Titulo linha1="Uma Sala no acervo," linha2="com o seu nome." tom="escuro" tamanho="galeria" />
            </div>
          </div>
          <p className="max-w-[380px] font-serif text-lg leading-7 text-marfim/75">
            Exemplo de demonstração: a Sala de Helena Varga, publicada ao lado das Salas da curadoria, no mesmo card, na mesma grade.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[384px_1fr]">
          <SalaCard sala={salaDemo} degrade={DEGRADE_GRAVURA} className="mx-auto min-h-[600px] w-full max-w-[384px]" />
          <div className="flex min-w-0 flex-col gap-6">
            <div data-revelar="subir" style={{ ...painel, ["--i" as string]: 1 }} className="flex flex-wrap items-center gap-x-5 gap-y-4 rounded-3xl p-6 ring-1 ring-inset ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagensAnfitrioes.avatar} alt="" className="size-[72px] rounded-full object-cover ring-2 ring-ouro/60" />
              <div className="min-w-0 flex-1 basis-[240px]">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-ouro uppercase">Página pública do anfitrião</p>
                <p className="mt-1 font-display text-[26px] leading-tight text-marfim">Helena Varga (demonstração)</p>
                <p className="mt-1 text-sm break-words text-marfim/55">saladosbuscadores.org/anfitrioes/helena-varga</p>
              </div>
              <SeloAnfitriao tom="escuro" />
            </div>

            <ul data-revelar="subir" style={{ ...painel, ["--i" as string]: 2 }} className="rounded-3xl px-6 py-2 ring-1 ring-inset ring-white/10">
              {artigosHelena.map((a, i) => {
                const publicado = a.estado === "Publicado";
                return (
                  <li key={a.t} className={cx(i > 0 && "border-t border-white/10")}>
                    <a href="#editor" className="group/artigo flex items-center justify-between gap-5 py-[18px]">
                      <span className="flex min-w-0 flex-col gap-1">
                        <span className={cx("text-[11px] font-semibold tracking-[0.14em] uppercase", publicado ? "text-ouro" : "text-marfim/50")}>Artigo · {a.estado}</span>
                        <span className="font-display text-[21px] leading-[1.2] text-marfim transition-colors group-hover/artigo:text-ouro-claro">{a.t}</span>
                        <span className="text-sm text-marfim/55">{a.d}</span>
                      </span>
                      <Seta className="size-[18px] shrink-0 text-ouro transition-transform duration-300 ease-galeria group-hover/artigo:translate-x-1" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="grid gap-6 sm:grid-cols-2">
              {alcanceSala.map((a, i) => (
                <li key={a.t} data-revelar="subir" style={{ ...painel, ["--i" as string]: i + 3 }} className="flex flex-col gap-1.5 rounded-3xl p-6 ring-1 ring-inset ring-white/10">
                  <h3 className="font-display text-[21px] text-marfim">{a.t}</h3>
                  <p className="text-[14.5px] leading-[22px] text-marfim/60">{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SecaoEditor() {
  return (
    <section
      id="editor"
      aria-labelledby="editor-titulo"
      className="px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]"
      style={{ background: "radial-gradient(ellipse at center, var(--color-bordo-2) 0%, var(--color-bordo) 100%)" }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-14 text-center">
        <div className="flex flex-col items-center gap-[54px]">
          <Rotulo numero="III" tom="escuro">O editor</Rotulo>
          <div id="editor-titulo">
            <Titulo linha1="Escreva com rigor," linha2="cite cada fonte." tom="bordo" tamanho="galeriaXl" centro />
          </div>
          <p className="max-w-[620px] font-serif text-[19px] leading-[29px] text-damasco/75">
            Um editor de blocos feito para o acervo: o rascunho é salvo sozinho, e cada afirmação fica ligada a uma obra.
          </p>
        </div>
        <EditorDemo />
      </div>
    </section>
  );
}

export function ComoFunciona() {
  const fundo = ["bg-damasco", "bg-areia", "bg-damasco", "bg-areia", "bg-ouro"];
  return (
    <section id="como-funciona" aria-labelledby="como-titulo" className="overflow-hidden bg-canvas px-5 pt-24 sm:px-10 lg:px-[120px] lg:pt-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[72px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Rotulo numero="IV">Como funciona</Rotulo>
            <div id="como-titulo">
              <Titulo linha1="Do convite" linha2="à Sala publicada." tamanho="galeria" />
            </div>
          </div>
          <div className="flex w-full max-w-[340px] flex-col items-start gap-4.5">
            <p className="font-serif text-lg leading-7 text-texto-2">
              Cinco degraus. Você acompanha cada etapa na sua área de anfitrião, em “Minhas Salas”.
            </p>
            <Botao href={CANDIDATURA_URL} variante="grafite">Candidatar-me</Botao>
          </div>
        </div>

        <ol data-revelar="escada" aria-label="Etapas do convite à Sala publicada" className="grid grid-cols-1 gap-3 pb-20 sm:grid-cols-2 lg:flex lg:items-end lg:gap-0 lg:pb-0">
          {etapasAnfitriao.map((p, i) => {
            const ultimo = i === etapasAnfitriao.length - 1;
            return (
              <li
                key={p.n}
                style={{ ["--h" as string]: `${230 + i * 66}px`, ["--i" as string]: i }}
                className={cx("degrau flex flex-col gap-2.5 rounded-2xl border-bordo/12 px-[23px] py-6 lg:h-(--h) lg:flex-1 lg:rounded-none lg:rounded-t-[20px] lg:border-t lg:border-l", fundo[i])}
              >
                <span className={cx("font-display text-[30px] leading-[1.35] font-light italic", ultimo ? "text-bordo" : "text-marca")}>{p.n}</span>
                <h3 className="font-display text-[22px] leading-[1.2] text-grafite">{p.t}</h3>
                <p className={cx("text-sm leading-[21px]", ultimo ? "text-ouro-tinta" : "text-texto-2")}>{p.d}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Politica() {
  return (
    <section id="revisao" aria-labelledby="politica-titulo" className="bg-noite px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[54px]">
        <Rotulo numero="V" tom="escuro">Política editorial</Rotulo>
        <div id="politica-titulo">
          <Titulo linha1="Apresentar," linha2="não pregar." tom="escuro" tamanho="galeriaXl" centro />
        </div>
        <p className="mt-3 max-w-[600px] text-center font-serif text-[19px] leading-[29px] text-marfim/70">
          As mesmas regras valem para a curadoria e para os anfitriões. É isso que mantém o acervo comparável e confiável.
        </p>
        <ul className="mt-3 grid w-full gap-4 md:grid-cols-2">
          {politicaEditorial.map((c, i) => (
            <li key={c.n} data-revelar="subir" style={{ ["--i" as string]: i }}>
              <div style={painel} className="flex h-full gap-6 rounded-3xl px-[33px] py-[33px] ring-1 ring-inset ring-ouro/18 transition-[box-shadow,translate] duration-500 ease-galeria hover:-translate-y-0.5 hover:ring-ouro/45">
                <span className="font-display text-[30px] leading-[1.2] font-light italic text-ouro">{c.n}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-2xl text-marfim">{c.t}</h3>
                  <p className="text-[15px] leading-[23px] text-marfim/65">{c.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ChamadoAnfitrioes() {
  return (
    <Chamado
      linha1="A porta está aberta;"
      linha2="a sua Sala também pode estar."
      texto="Conte a sua pesquisa para a curadoria. Se fizer sentido para o acervo, o convite chega no seu e-mail."
      nota={CURADORIA_EMAIL}
      acoes={
        <>
          <Botao href={CANDIDATURA_URL}>Candidatar-me como anfitrião</Botao>
          <Botao href={`mailto:${CURADORIA_EMAIL}`} variante="vidro" seta={false}>Falar com a curadoria</Botao>
        </>
      }
    />
  );
}
