"use client";

import { useEffect } from "react";

/* Marca como visíveis os elementos com data-revelar quando entram na tela.
   As animações em si estão em app/globals.css. */
export function Movimento() {
  useEffect(() => {
    (window as Window & { __movimento?: boolean }).__movimento = true;
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.visivel = "";
          observador.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -14% 0px" },
    );
    document.querySelectorAll("[data-revelar]").forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);
  return null;
}

/* Roda antes da pintura para evitar que o conteúdo pisque antes de se esconder.
   Se o JS da página não carregar em 5s, desiste das revelações e mostra tudo. */
export const scriptAnima = `document.documentElement.classList.add("anima");setTimeout(function(){if(!window.__movimento)document.documentElement.classList.remove("anima")},5000);`;
