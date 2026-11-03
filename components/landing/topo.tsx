import { SITE_URL, imagens, salas } from "@/lib/conteudo";
import { Botao, Gravura } from "@/components/ui/primitivos";
import { MenuMovel } from "./menu-movel";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/imagens/marca/logo-damasco.svg" alt="A Sala dos Buscadores" className={className} />;
}

const links = [
  { href: "#salas", label: "Salas" },
  { href: "#comparar", label: "Temas" },
  { href: "#trilhas", label: "Leituras" },
  { href: "#curadoria", label: "Como funciona" },
];

export function Cabecalho({ itens = links, inicio = "#", cta }: { itens?: { href: string; label: string }[]; inicio?: string; cta?: { href: string; label: string } }) {
  const acao = cta ?? { href: `${SITE_URL}/cadastro`, label: "Criar conta" };
  return (
    <header className="hero-surge relative z-20 flex items-center justify-between gap-4 px-5 py-6 sm:px-10 lg:px-16 lg:py-7">
      <a href={inicio} aria-label="A Sala dos Buscadores, início">
        <Logo />
      </a>
      <nav aria-label="Principal" className={cta ? "hidden xl:block" : "hidden lg:block"}>
        <ul className="flex items-center gap-6 whitespace-nowrap xl:gap-10">
          {itens.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="relative text-[15px] font-normal tracking-[-0.01em] text-white/82 transition-colors after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-ouro after:transition-transform after:duration-300 after:ease-galeria hover:text-white hover:after:scale-x-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-3 sm:gap-6">
        <a href={`${SITE_URL}/entrar`} className="hidden text-[15px] font-semibold tracking-[-0.01em] text-white sm:inline">
          Entrar
        </a>
        <Botao href={acao.href} variante="vidro" seta={false} className="whitespace-nowrap !py-3 !pr-5 !pl-5 sm:!py-4 sm:!pr-7 sm:!pl-7">
          {acao.label}
        </Botao>
        <MenuMovel itens={itens} entrarHref={`${SITE_URL}/entrar`} className={cta ? "xl:hidden" : "lg:hidden"} />
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-noite lg:min-h-[1000px]"
    >
      <div aria-hidden className="hero-fundo absolute inset-0 -z-10">
        <Gravura
          src={imagens.hero}
          sizes="100vw"
          prioridade
          degrade="radial-gradient(ellipse at center, rgb(11 12 12/0) 0%, rgb(11 12 12/.8) 100%), linear-gradient(180deg, rgb(11 12 12/.8) 0%, rgb(11 12 12/.45) 35%, rgb(11 12 12/.65) 70%, rgb(11 12 12/1) 100%)"
        />
      </div>
      <Cabecalho />

      <div className="flex flex-1 flex-col items-center justify-center gap-7 px-5 pt-[76px] pb-16 text-center sm:px-10">
        <p className="hero-surge text-[12px] font-semibold tracking-[0.14em] text-ouro-claro uppercase sm:text-[13px]" style={{ ["--d" as string]: "60ms" }}>Biblioteca digital de estudos comparados</p>
        <h1 id="hero-titulo" className="display text-[48px] tracking-[-0.03em] sm:text-[72px] lg:text-[104px]" style={{ lineHeight: 0.98 }}>
          <span className="linha"><span className="hero-linha block text-marfim" style={{ ["--d" as string]: "150ms" }}>Muitas tradições.</span></span>
          <span className="linha"><span className="hero-linha block italic text-ouro" style={{ ["--d" as string]: "320ms" }}>Um espaço para compreender.</span></span>
        </h1>
        <p className="hero-surge mt-3 max-w-[720px] font-serif text-lg leading-[1.52] text-marfim/85 sm:text-[21px]" style={{ ["--d" as string]: "760ms" }}>
          Explore textos, ideias e cosmologias em seus contextos. Conheça as Salas, leia os artigos e acompanhe as fontes no seu próprio ritmo.
        </p>
        <div className="hero-surge flex flex-wrap items-center justify-center gap-3.5 pt-1.5" style={{ ["--d" as string]: "900ms" }}>
          <Botao href="#salas">Explorar as Salas</Botao>
          <Botao href={`${SITE_URL}/cadastro`} variante="vidro" seta={false}>
            Criar conta gratuita
          </Botao>
        </div>
      </div>

      <div className="hero-surge border-t border-ouro/28 bg-noite/40 backdrop-blur-md" style={{ ["--d" as string]: "1100ms" }}>
        <div className="flex items-center gap-8 overflow-x-auto px-5 py-6 sm:px-10 lg:justify-between lg:px-16 lg:py-7 [scrollbar-width:none]">
          <span className="shrink-0 text-[11px] font-semibold tracking-[0.14em] text-ouro uppercase">Em cartaz</span>
          {salas.map((s) => (
            <a key={s.slug} href={`${SITE_URL}/salas/${s.slug}`} className="flex shrink-0 items-center gap-2.5 text-sm text-marfim/80 transition-colors hover:text-marfim">
              <span className="font-display text-base font-light italic text-ouro">{s.numero}</span>
              {s.titulo.replace("Biblioteca de ", "").replace("O Livro de ", "").replace(" do Cristianismo Primitivo", "")}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
