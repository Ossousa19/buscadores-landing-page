import { SITE_URL, imagens, salas } from "@/lib/conteudo";
import { Botao } from "@/components/ui/primitivos";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/imagens/marca/logo-damasco.svg" alt="A Sala dos Buscadores" className={className} />;
}

const links = [
  { href: "#salas", label: "Salas" },
  { href: "#comparar", label: "Comparar" },
  { href: "#trilhas", label: "Trilhas" },
  { href: "#comparar", label: "Assistente" },
  { href: "#curadoria", label: "Sobre" },
  { href: "#anfitriao", label: "Seja anfitrião" },
];

export function Cabecalho({ itens = links, inicio = "#", cta, selo }: { itens?: { href: string; label: string }[]; inicio?: string; cta?: { href: string; label: string }; selo?: string }) {
  const acao = cta ?? { href: `${SITE_URL}/criar-conta`, label: "Criar conta" };
  return (
    <header className="hero-surge flex items-center justify-between gap-6 px-5 py-6 sm:px-10 lg:px-16 lg:py-7">
      <div className="flex items-center gap-4">
        <a href={inicio} aria-label="A Sala dos Buscadores, início">
          <Logo />
        </a>
        {selo && <span className="hidden rounded-full px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.14em] text-ouro-claro uppercase ring-1 ring-inset ring-ouro/60 sm:inline">{selo}</span>}
      </div>
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
      <div className="flex items-center gap-6">
        <a href={`${SITE_URL}/entrar`} className="hidden text-[15px] font-semibold tracking-[-0.01em] text-white sm:inline">
          Entrar
        </a>
        <Botao href={acao.href} variante="vidro" seta={false} className="whitespace-nowrap !pr-7">
          {acao.label}
        </Botao>
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
      <div
        aria-hidden
        className="hero-fundo absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgb(11 12 12/0) 0%, rgb(11 12 12/.8) 100%), linear-gradient(180deg, rgb(11 12 12/.8) 0%, rgb(11 12 12/.45) 35%, rgb(11 12 12/.65) 70%, rgb(11 12 12/1) 100%), url("${imagens.hero}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Cabecalho />

      <div className="flex flex-1 flex-col items-center justify-center gap-7 px-5 pt-[76px] pb-16 text-center sm:px-10">
        <h1 id="hero-titulo" className="display text-[64px] tracking-[-0.035em] sm:text-[112px] lg:text-[156px]" style={{ lineHeight: 0.8 }}>
          <span className="linha"><span className="hero-linha block text-marfim" style={{ ["--d" as string]: "150ms" }}>A porta</span></span>
          <span className="linha"><span className="hero-linha block italic text-ouro" style={{ ["--d" as string]: "320ms" }}>continua aberta</span></span>
        </h1>
        <p className="hero-surge mt-3 max-w-[720px] font-serif text-lg leading-[1.52] text-marfim/85 sm:text-[21px]" style={{ ["--d" as string]: "760ms" }}>
          Um acervo curado para compreender textos, ideias e cosmologias em seus próprios contextos, sem hierarquias, sem respostas prontas.
        </p>
        <div className="hero-surge flex flex-wrap items-center justify-center gap-3.5 pt-1.5" style={{ ["--d" as string]: "900ms" }}>
          <Botao href={`${SITE_URL}/criar-conta`}>Criar conta gratuita</Botao>
          <Botao href="#salas" variante="vidro" seta={false}>
            Visitar as Salas
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
