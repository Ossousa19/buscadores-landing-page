import type { Sala } from "@/lib/conteudo";
import { SITE_URL } from "@/lib/conteudo";
import { Marcador, NivelChip, Seta, cx, fundoGravura } from "./primitivos";

/**
 * Card de Sala — réplica do card da página /salas da plataforma.
 * Moldura de 8px (escura ou marfim), gravura cobrindo tudo, chip de conteúdos,
 * botão salvar e painel de vidro com título, descrição, nível, data e "Entrar na Sala".
 */
export function SalaCard({ sala, tema = "escuro", className, ordem = 0, degrade }: { sala: Sala; tema?: "escuro" | "claro"; className?: string; ordem?: number; degrade?: string }) {
  const escuro = tema === "escuro";
  return (
    <article
      data-revelar="subir"
      style={{ ["--i" as string]: ordem }}
      className={cx(
        "group/sala relative flex flex-col rounded-3xl p-2",
        escuro
          ? "bg-card-escuro shadow-[inset_0_0_0_1px_rgb(246_231_206/0.18),0_2px_4px_rgb(0_0_0/0.18),0_24px_48px_-16px_rgb(0_0_0/0.65)]"
          : "bg-marfim shadow-[inset_0_0_0_1px_rgb(57_0_7/0.12),0_2px_4px_rgb(57_0_7/0.03),0_18px_40px_-16px_rgb(57_0_7/0.12)]",
        className,
      )}
    >
      <div className="relative flex flex-1 flex-col justify-between gap-6 overflow-hidden rounded-2xl p-4">
        <div aria-hidden className="absolute inset-0 transition-[scale] duration-[1400ms] ease-galeria group-hover/sala:scale-[1.04]" style={fundoGravura(sala.imagem, degrade)} />
        <div className="relative flex items-start justify-between">
          <span className="rounded-xl bg-grafite/82 px-3 py-1.5 text-xs font-medium tracking-[-0.006em] text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.18)] backdrop-blur-md">
            {sala.conteudos} conteúdos
          </span>
          <button
            type="button"
            aria-label={`Salvar ${sala.titulo} para depois`}
            className="grid size-12 place-items-center rounded-xl bg-grafite/82 text-white shadow-[inset_0_0_0_1px_rgb(246_231_206/0.16),inset_0_1px_0_rgb(246_231_206/0.18)] transition-colors hover:bg-grafite"
          >
            <Marcador />
          </button>
        </div>

        <div className="vidro-escuro relative flex flex-col gap-4 rounded-2xl p-6">
          <h3 className="font-display text-[32px] leading-[35px] font-normal tracking-[-0.035em] text-white text-balance">
            {sala.titulo}
          </h3>
          <p className="max-w-[46ch] text-sm leading-[22px] text-white/94">{sala.descricao}</p>
          <div className="flex flex-col items-start gap-2">
            <NivelChip nivel={sala.nivel} />
            <span className="text-xs text-white/94">
              Atualizada em <time>{sala.atualizada}</time>
            </span>
          </div>
          <a
            href={`${SITE_URL}/salas/${sala.slug}`}
            className="group/entrar inline-flex w-fit items-center gap-2 rounded-xl bg-cinza-botao px-6 py-3 text-[15px] font-semibold tracking-[-0.01em] text-grafite shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_1px_2px_rgb(17_19_19/0.16)] transition-[background-color,scale] duration-200 hover:bg-white active:scale-[0.98]"
          >
            Entrar na Sala
            <span className="sr-only">{sala.titulo}</span>
            <Seta className="size-5 transition-transform duration-300 ease-galeria group-hover/entrar:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
