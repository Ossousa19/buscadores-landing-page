import type { ReactNode } from "react";
import { SITE_URL, imagens, passosAnfitriao, perguntas, salaDemo } from "@/lib/conteudo";
import { Botao, Rotulo, SeloAnfitriao, Titulo } from "@/components/ui/primitivos";
import { SalaCard } from "@/components/ui/sala-card";
import { Logo } from "./topo";

export function SejaAnfitriao() {
  return (
    <section id="anfitriao" aria-labelledby="anfitriao-titulo" className="bg-damasco px-5 py-24 sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 xl:grid-cols-[680px_1fr] xl:gap-24">
        <div className="flex flex-col gap-7.5">
          <Rotulo numero="VII">Para anfitriões</Rotulo>
          <div id="anfitriao-titulo">
            <Titulo linha1="Tem uma pesquisa?" linha2="Abra a sua Sala." className="tracking-[-0.03em]" />
          </div>
          <p className="max-w-[580px] font-serif text-[19px] leading-[1.6] text-texto-2">
            Pesquisadores, professores e estudiosos de uma tradição podem manter uma Sala própria no acervo, com os seus artigos e as suas fontes, ao lado das Salas da curadoria.
          </p>
          <ol className="grid gap-6 sm:grid-cols-3 sm:gap-0">
            {passosAnfitriao.map((p, i) => (
              <li key={p.n} className={`flex flex-col gap-1.5 border-t border-bordo/16 pt-5 sm:pr-5 ${i > 0 ? "sm:border-l sm:pl-5" : ""}`}>
                <span className="font-display text-xl font-light italic text-ouro">{p.n}</span>
                <h3 className="font-display text-[21px] text-grafite">{p.t}</h3>
                <p className="text-[14.5px] leading-[1.45] text-texto-2">{p.d}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Botao href="/anfitrioes" variante="grafite">Quero ser anfitrião</Botao>
            <a href="/anfitrioes#como-funciona" className="text-[15px] font-semibold tracking-[-0.01em] text-bordo hover:underline">Como funciona →</a>
          </div>
        </div>
        <figure className="flex flex-col items-center gap-4">
          <SeloAnfitriao />
          <SalaCard sala={salaDemo} tema="claro" className="min-h-[600px] w-full max-w-[384px]" />
          <figcaption className="text-[13px] text-texto-3">Exemplo de Sala de anfitriã (perfil de demonstração)</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Perguntas({
  itens = perguntas,
  numero = "VIII",
  linha1 = "Perguntas",
  linha2 = "frequentes.",
  convite = "Não achou o que procurava?",
  recuo,
}: {
  itens?: { p: string; r: string }[];
  numero?: string;
  linha1?: string;
  linha2?: string;
  convite?: string;
  recuo?: boolean;
}) {
  return (
    <section id="duvidas" aria-labelledby="faq-titulo" className="bg-canvas px-5 py-24 shadow-[0_-1px_0_var(--color-canvas)] sm:px-10 lg:px-[120px] lg:py-[140px]">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[360px_1fr] lg:gap-30">
        <div className="flex flex-col gap-6">
          <Rotulo numero={numero}>Dúvidas</Rotulo>
          <div id="faq-titulo">
            <Titulo linha1={linha1} linha2={linha2} tamanho="md" />
          </div>
          <p className="font-serif text-lg text-texto-2">{convite}</p>
          <a href="mailto:curadoria@saladosbuscadores.org" className="text-[15px] font-semibold tracking-[-0.01em] text-bordo hover:underline">
            curadoria@saladosbuscadores.org
          </a>
        </div>
        <div className="border-b border-bordo/14">
          {itens.map((q, i) => (
            <details key={q.p} open={i < 2} className="group border-t border-bordo/14 py-[31px]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <span className="flex gap-5">
                  <span className="pt-1 font-display text-lg font-light italic text-ouro">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl leading-[1.22] text-grafite">{q.p}</span>
                </span>
                <span aria-hidden className="relative mt-2 size-3.5 shrink-0 text-bordo">
                  <i className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                  <i className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rotate-90 bg-current transition-transform duration-300 ease-galeria group-open:rotate-0" />
                </span>
              </summary>
              <p className={`mt-3.5 max-w-[550px] text-base leading-[1.6] text-texto-2 ${recuo ? "pl-[42px] lg:max-w-[604px]" : ""}`}>{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Chamado({
  linha1 = "Abra espaço para",
  linha2 = "novas formas de conhecer.",
  texto = "Uma curadoria de conhecimentos para explorar, questionar e descobrir no seu próprio ritmo.",
  nota = "A conta é gratuita e guarda seu progresso só para você.",
  acoes,
}: {
  linha1?: string;
  linha2?: string;
  texto?: string;
  nota?: string;
  acoes?: ReactNode;
}) {
  return (
    <section
      aria-labelledby="chamado-titulo"
      className="relative isolate flex min-h-[760px] flex-col items-center justify-center gap-7.5 overflow-hidden bg-noite px-5 py-24 text-center sm:px-10 lg:min-h-[860px]"
    >
      <div
        aria-hidden
        className="chamado-fundo absolute inset-x-0 -inset-y-[5%] -z-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgb(11 12 12/.3) 0%, rgb(11 12 12/.8) 100%), linear-gradient(180deg, rgb(11 12 12/.85) 0%, rgb(11 12 12/.55) 50%, rgb(11 12 12/.9) 100%), url("${imagens.escada}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <h2 id="chamado-titulo" data-revelar="titulo" className="display text-[52px] tracking-[-0.03em] sm:text-[80px] lg:text-[96px]">
        <span className="linha"><span className="block text-marfim">{linha1}</span></span>
        <span className="linha"><span className="block italic text-ouro">{linha2}</span></span>
      </h2>
      <p className="max-w-[560px] font-serif text-xl leading-[1.5] text-marfim/82">{texto}</p>
      <div className="flex flex-wrap justify-center gap-3.5">
        {acoes ?? (
          <>
            <Botao href={`${SITE_URL}/criar-conta`}>Criar conta gratuita</Botao>
            <Botao href={`${SITE_URL}/entrar`} variante="vidro" seta={false}>Já tenho conta</Botao>
          </>
        )}
      </div>
      <p className="text-[13.5px] text-marfim/55">{nota}</p>
    </section>
  );
}

const colunasRodape = [
  { h: "Acervo", itens: [["Destaques", "/destaques"], ["Biblioteca", "/biblioteca"], ["Salas", "/salas"], ["Comparar", "/comparar"], ["Assistente", "/assistente"]] },
  { h: "Sobre", itens: [["Como funciona o assistente", "/sobre#assistente"], ["Política editorial", "/sobre#politica-editorial"], ["Política de publicidade", "/sobre#politica-publicidade"]] },
  { h: "Legal", itens: [["Termos em linguagem simples", "/sobre#termos"], ["Privacidade e LGPD", "/sobre#privacidade"]] },
  { h: "Canal", itens: [["YouTube", "https://www.youtube.com"]] },
];

export function Rodape({ colunas = colunasRodape, nota = "A IA organiza o que o acervo diz; não determina qual crença é verdadeira." }: { colunas?: { h: string; itens: string[][] }[]; nota?: string }) {
  return (
    <footer className="border-t border-ouro/18 bg-noite px-5 pt-24 pb-10 sm:px-10 lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex max-w-[310px] flex-col gap-4.5">
            <Logo className="h-[46px] w-auto self-start" />
            <p className="font-serif text-base leading-[1.5] text-marfim/60">Biblioteca digital de estudos comparados. A porta está aberta; a escada é de quem sobe.</p>
          </div>
          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-16 lg:gap-8 xl:flex xl:gap-16 xl:whitespace-nowrap">
            {colunas.map((c) => (
              <div key={c.h} className="flex flex-col gap-2">
                <h3 className="text-[11px] font-semibold tracking-[0.14em] text-ouro uppercase">{c.h}</h3>
                {c.itens.map(([label, href]) => (
                  <a key={label} href={/^(http|mailto:|#)/.test(href) ? href : `${SITE_URL}${href}`} className="text-[15px] text-marfim/65 transition-colors hover:text-marfim">
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <p aria-hidden className="display w-full text-center lg:mt-4 text-[7.2vw] whitespace-nowrap text-ouro/14 lg:text-[calc((100vw-240px)/11.6)] xl:text-[min(calc((100vw-240px)/10.8),112px)]" style={{ letterSpacing: "-0.03em" }}>
          A SALA DOS BUSCADORES
        </p>
        <div className="flex flex-col justify-between gap-3 border-t border-ouro/14 pt-5 text-[13.5px] text-marfim/45 sm:flex-row">
          <p>A Sala dos Buscadores · Curador de museu, não pregador</p>
          <p>{nota}</p>
        </div>
      </div>
    </footer>
  );
}
