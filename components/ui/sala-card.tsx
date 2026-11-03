import type { Sala } from "@/lib/conteudo";
import { SITE_URL } from "@/lib/conteudo";
import { Gravura, NivelChip, Seta, cx } from "./primitivos";

/**
 * Card de Sala — baseado no card da página /salas da plataforma, sem o botão de salvar.
 * Moldura de 8px (escura ou marfim), gravura cobrindo tudo, chip de conteúdos
 * e painel de vidro com título, descrição, nível, data e "Explorar a Sala".
 */
export function SalaCard({ sala, tema = "escuro", className, ordem = 0, degrade, exemplo }: { sala: Sala; tema?: "escuro" | "claro"; className?: string; ordem?: number; degrade?: string; exemplo?: boolean }) {
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
        <div aria-hidden className="absolute inset-0 transition-[scale] duration-[1400ms] ease-galeria group-hover/sala:scale-[1.04]">
          <Gravura src={sala.imagem} sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" degrade={degrade} posicao={sala.enquadramento?.posicao} altura={sala.enquadramento?.tamanho} />
        </div>
        <div className="relative flex items-start justify-between">
          <span className="rounded-xl bg-grafite/82 px-3 py-1.5 text-xs font-medium tracking-[-0.006em] text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.18)] backdrop-blur-md">
            {sala.conteudos} conteúdos
          </span>
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
          {exemplo ? (
            // Sala demonstrativa: sem link, para não fingir conteúdo publicado
            <p className="w-fit rounded-xl bg-white/10 px-4 py-2 text-[13.5px] font-medium text-white/90 ring-1 ring-inset ring-white/20">Exemplo de demonstração</p>
          ) : (
          <a
            href={`${SITE_URL}/salas/${sala.slug}`}
            className="group/entrar inline-flex w-fit items-center gap-2 rounded-xl bg-cinza-botao px-6 py-3 text-[15px] font-semibold tracking-[-0.01em] text-grafite shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_1px_2px_rgb(17_19_19/0.16)] transition-[background-color,scale] duration-200 hover:bg-white active:scale-[0.98]"
          >
            Explorar a Sala
            <span className="sr-only">{sala.titulo}</span>
            <Seta className="size-5 transition-transform duration-300 ease-galeria group-hover/entrar:translate-x-1" />
          </a>
          )}
        </div>
      </div>
    </article>
  );
}
