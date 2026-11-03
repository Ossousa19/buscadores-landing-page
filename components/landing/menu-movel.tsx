"use client";

import { useEffect, useState } from "react";

/* Menu do cabeçalho em telas sem espaço para a navegação completa. */
export function MenuMovel({ itens, entrarHref, className }: { itens: { href: string; label: string }[]; entrarHref: string; className?: string }) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!aberto) return;
    const fechar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, [aberto]);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={aberto}
        aria-controls="menu-movel"
        onClick={() => setAberto((v) => !v)}
        className="grid size-11 place-items-center rounded-full bg-white/12 text-white ring-1 ring-inset ring-white/32 backdrop-blur-lg"
      >
        <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
        <span aria-hidden className="relative block h-3 w-4.5">
          <i className={`absolute inset-x-0 h-[1.5px] bg-current transition-transform duration-200 ${aberto ? "top-1/2 rotate-45" : "top-0"}`} />
          <i className={`absolute inset-x-0 h-[1.5px] bg-current transition-transform duration-200 ${aberto ? "top-1/2 -rotate-45" : "bottom-0"}`} />
        </span>
      </button>
      {aberto && (
        <nav id="menu-movel" aria-label="Principal, menu" className="absolute inset-x-5 top-full z-30 rounded-2xl bg-grafite p-2 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.65)] ring-1 ring-inset ring-ouro/25 sm:left-auto sm:w-72">
          <ul>
            {itens.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setAberto(false)} className="block rounded-xl px-4 py-3 text-base text-marfim hover:bg-white/8">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-1 border-t border-ouro/18 pt-1 sm:hidden">
              <a href={entrarHref} className="block rounded-xl px-4 py-3 text-base font-semibold text-marfim hover:bg-white/8">Entrar</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
