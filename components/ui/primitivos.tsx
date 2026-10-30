import type { ReactNode } from "react";
import type { Nivel } from "@/lib/conteudo";

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/* ---------- Ícones ---------- */
export function Seta({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Visto({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M3.5 8.4l3 3 6-6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Marcador({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M5.5 3.25h9a.75.75 0 0 1 .75.75v12.6l-5.25-3.35-5.25 3.35V4a.75.75 0 0 1 .75-.75z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
export function Selo({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M8 1.5l1.6 1.2 2-.1.6 1.9 1.6 1.2-.6 1.9.6 1.9-1.6 1.2-.6 1.9-2-.1L8 14.5l-1.6-1.2-2 .1-.6-1.9-1.6-1.2.6-1.9-.6-1.9 1.6-1.2.6-1.9 2 .1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5.6 8.1l1.6 1.6 3.2-3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Botão (Galeria/Botão) ---------- */
type Variante = "dourado" | "vidro" | "grafite" | "marfim";
const variantes: Record<Variante, string> = {
  dourado: "bg-ouro text-ouro-tinta shadow-[0_0_24px_rgb(211_179_110/0.35)] hover:bg-[#dcc183]",
  vidro: "bg-white/12 text-white ring-1 ring-inset ring-white/32 backdrop-blur-lg hover:bg-white/20",
  grafite: "bg-grafite text-white hover:bg-black",
  marfim: "bg-marfim text-grafite hover:bg-white",
};
export const classesBotao = (variante: Variante = "dourado") =>
  cx("group inline-flex items-center gap-3 rounded-full py-4 pr-6 pl-7 text-[15px] font-semibold tracking-[-0.01em] transition-[background-color,scale] duration-200 active:scale-[0.98]", variantes[variante]);

export function Botao({ href, children, variante = "dourado", seta = true, className }: { href: string; children: ReactNode; variante?: Variante; seta?: boolean; className?: string }) {
  return (
    <a href={href} className={cx(classesBotao(variante), className)}>
      {children}
      {seta && <Seta className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
}

/* ---------- Rótulo de seção: numeral romano + fio + texto ---------- */
export function Rotulo({ numero, children, tom = "claro" }: { numero: string; children: ReactNode; tom?: "claro" | "escuro" }) {
  const escuro = tom === "escuro";
  return (
    <p data-revelar="rotulo" className={cx("flex items-center gap-3.5", escuro ? "text-ouro" : "text-marca")}>
      <span className="font-display text-lg italic font-light">{numero}</span>
      <span aria-hidden className="fio h-px w-10 bg-current opacity-80" />
      <span className={cx("fio-texto text-xs font-semibold tracking-[0.14em] uppercase", escuro ? "text-ouro-claro/90" : "text-marca/90")}>{children}</span>
    </p>
  );
}

/* ---------- Título em duas linhas (segunda em itálico) ---------- */
export function Titulo({ linha1, linha2, tom = "claro", tamanho = "lg", centro, className, as: Tag = "h2" }: { linha1: string; linha2: string; tom?: "claro" | "escuro" | "bordo"; tamanho?: "md" | "galeria" | "lg" | "galeriaXl" | "xl"; centro?: boolean; className?: string; as?: "h1" | "h2" }) {
  const cor1 = tom === "claro" ? "text-grafite" : tom === "bordo" ? "text-damasco" : "text-marfim";
  const cor2 = tom === "claro" ? "text-bordo" : "text-ouro";
  const tam = {
    md: "text-[44px] sm:text-[56px] lg:text-[64px]",
    galeria: "text-[46px] sm:text-[64px] lg:text-[76px]",
    lg: "text-[46px] sm:text-[64px] lg:text-[80px]",
    galeriaXl: "text-[50px] leading-[0.965] sm:text-[72px] lg:text-[84px]",
    xl: "text-[52px] leading-[0.95] sm:text-[80px] lg:text-[88px]",
  }[tamanho];
  return (
    <Tag data-revelar="titulo" className={cx("display text-balance", tam, centro && "text-center", className)}>
      <span className="linha"><span className={cx("block", cor1)}>{linha1}</span></span>
      <span className="linha"><span className={cx("block italic", cor2)}>{linha2}</span></span>
    </Tag>
  );
}

/* ---------- Chip de nível (igual ao da plataforma) ---------- */
export function NivelChip({ nivel }: { nivel: Nivel }) {
  const inter = nivel === "Intermediário";
  return (
    <span className={cx("inline-flex h-8 items-center gap-2 rounded-full pr-3.5 pl-2.5 text-[12.5px] font-semibold tracking-[-0.006em]", inter ? "bg-intermediario text-intermediario-tinta" : "bg-iniciante text-iniciante-tinta")}>
      <span aria-hidden className="flex items-end gap-0.5">
        {[5, 9, 13].map((h, i) => (
          <i key={h} className={cx("block w-1 rounded-[1.5px] bg-current", i >= (inter ? 2 : 1) && "opacity-30")} style={{ height: h }} />
        ))}
      </span>
      {nivel}
    </span>
  );
}

/* ---------- Fundo de gravura em camadas (cor > brilho > imagem > degradê) ---------- */
// As imagens em /imagens/provisorias já trazem o degradê; as exportações reais usam DEGRADE_GRAVURA.
export const DEGRADE_GRAVURA = "linear-gradient(180deg, rgb(17 19 19/.2) 0%, rgb(17 19 19/0) 40%, rgb(17 19 19/.55) 100%)";
export function fundoGravura(imagem: string, degrade = "none") {
  return {
    backgroundColor: "var(--color-bordo)",
    backgroundImage: `${degrade}, url("${imagem}"), radial-gradient(90% 75% at 88% 0%, rgb(211 199 89/.32), rgb(211 199 89/0) 62%)`,
    backgroundSize: "cover, cover, cover",
    backgroundPosition: "center, center, center",
  } as const;
}

/* ---------- Selo de proveniência ---------- */
export function SeloAnfitriao({ tom = "claro" }: { tom?: "claro" | "escuro" }) {
  const escuro = tom === "escuro";
  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full py-2 pr-3.5 pl-2.5 text-[12.5px] font-semibold tracking-[-0.005em] ring-1 ring-inset", escuro ? "bg-ouro/16 text-ouro-claro ring-ouro/50" : "bg-areia text-marca ring-marca/25")}>
      <Selo />
      Anfitrião · revisado pela curadoria
    </span>
  );
}
