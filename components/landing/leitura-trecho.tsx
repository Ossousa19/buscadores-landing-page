"use client";

import { useState } from "react";
import { trechoLeitura } from "@/lib/conteudo";
import { cx } from "@/components/ui/primitivos";

const modos = [
  { id: "original", label: "Original" },
  { id: "traducao", label: "Tradução" },
  { id: "lado", label: "Lado a lado" },
] as const;

type Modo = (typeof modos)[number]["id"];

const citacao = "font-serif leading-[1.18] italic tracking-[-0.02em] text-grafite";
const grego = "font-grego leading-[1.18] italic text-grafite";
const grande = "text-[40px] sm:text-[52px] lg:text-[60px]";
const menor = "text-[28px] sm:text-[34px] lg:text-[38px]";
const rotuloLado = "text-[11px] font-semibold tracking-[0.14em] text-marca uppercase";

export function LeituraTrecho() {
  const [modo, setModo] = useState<Modo>("traducao");
  return (
    <>
      <figure className="flex w-full flex-col items-center gap-10">
        <div id="leitura-titulo" data-revelar="subir" className="flex w-full max-w-[1040px] items-center justify-center lg:min-h-[142px]">
          <div key={modo} className="troca w-full">
            {modo === "lado" ? (
              <div className="grid gap-8 md:grid-cols-2 md:gap-0">
                <blockquote lang="grc" className="flex flex-col gap-3 md:pr-10">
                  <span className={rotuloLado}>Original · grego</span>
                  <span className={cx(grego, menor)}>{trechoLeitura.original}</span>
                </blockquote>
                <blockquote className="flex flex-col gap-3 md:border-l md:border-bordo/14 md:pl-10">
                  <span className={rotuloLado}>Tradução</span>
                  <span className={cx(citacao, menor)}>{trechoLeitura.traducao}</span>
                </blockquote>
              </div>
            ) : modo === "original" ? (
              <blockquote lang="grc" className={cx(grego, grande)}>{trechoLeitura.original}</blockquote>
            ) : (
              <blockquote className={cx(citacao, grande)}>“{trechoLeitura.traducao}”</blockquote>
            )}
          </div>
        </div>
        <figcaption className="text-xs font-semibold tracking-[0.14em] text-marca uppercase">{trechoLeitura.fonte}</figcaption>
      </figure>
      <div role="group" aria-label="Como ler o trecho" className="inline-flex gap-0.5 rounded-full bg-marfim p-1 text-sm shadow-[0_2px_4px_rgb(0_0_0/0.06),0_24px_40px_-14px_rgb(57_0_7/0.32)]">
        {modos.map((m) => (
          <button
            key={m.id}
            type="button"
            aria-pressed={modo === m.id}
            onClick={() => setModo(m.id)}
            className={cx("rounded-full px-5 py-2 transition-colors duration-200", modo === m.id ? "bg-grafite font-semibold text-white" : "font-medium text-texto-2 hover:bg-damasco")}
          >
            {m.label}
          </button>
        ))}
      </div>
    </>
  );
}
