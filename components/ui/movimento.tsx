"use client";

import { useEffect } from "react";

const limita = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/* Mesmas condições das cenas presas em app/globals.css */
const CENAS_ATIVAS = "(prefers-reduced-motion: no-preference) and (min-height: 560px)";

/* Túnel de Salas: as Salas vêm do fundo do céu em direção a quem rola a página.
   Distâncias em px no espaço 3D: `inicio` é onde a primeira Sala nasce, `passo` separa as Salas. */
const TUNEL = {
  largo: { inicio: 3400, passo: 1400, saida: 1200, desfoque: 6 },
  estreito: { inicio: 3400, passo: 1000, saida: 900, desfoque: 0 },
};
const POSICOES = [
  { x: -22, y: -7 },
  { x: 22, y: -5 },
  { x: -18, y: 7 },
  { x: 20, y: 5 },
  { x: -23, y: -3 },
  { x: 19, y: 3 },
];

const progressoDaCena = (cena: HTMLElement) => {
  const r = cena.getBoundingClientRect();
  return limita(-r.top / Math.max(1, r.height - innerHeight));
};

function montaTunel(cena: HTMLElement) {
  const itens = [...cena.querySelectorAll<HTMLElement>(".tunel-item")];
  const abertura = cena.querySelector<HTMLElement>(".tunel-abertura");
  const ceu = cena.querySelector<HTMLElement>(".tunel-ceu");
  const video = cena.querySelector("video");
  const medidas = () => {
    const estreito = innerWidth < 768;
    const m = estreito ? TUNEL.estreito : TUNEL.largo;
    return { ...m, estreito, total: m.inicio + (itens.length - 1) * m.passo + m.saida };
  };

  const quadro = () => {
    const { inicio, passo, desfoque, estreito, total } = medidas();
    const p = progressoDaCena(cena);
    itens.forEach((item, i) => {
      const d = inicio + i * passo - p * total; // distância até o plano da tela; negativa já passou por quem olha
      const pos = POSICOES[i % POSICOES.length];
      const x = innerWidth < 640 ? 0 : pos.x;
      const y = estreito ? (i % 2 ? 3 : -3) : pos.y;
      item.style.transform = `translate(-50%, -50%) translate3d(${x}vw, ${y}svh, ${-d}px)`;
      // Em tela estreita as Salas passam uma atrás da outra: a da frente some antes de a seguinte surgir, sem sobrepor os textos
      const chegada = estreito && i > 0 ? (passo - 180 - d) / 170 : 1.25 - d / 2800;
      const partida = estreito ? 1 + d / 180 : 1 + d / 600;
      item.style.opacity = String(limita(Math.min(chegada, partida)));
      item.style.filter = desfoque && d > 0 && d < 2800 ? `blur(${((d / inicio) * desfoque).toFixed(1)}px)` : "none";
      item.style.pointerEvents = d > -250 && d < 900 ? "auto" : "none";
      item.toggleAttribute("data-longe", d >= 900 || d <= -300); // sem vidro enquanto o efeito nem se percebe: a rolagem fica mais leve
    });
    // O título abre a cena e volta ao fim, com o botão para o acervo
    const volta = 1 - (inicio + (itens.length - 1) * passo + 600) / total;
    const a = Math.max(limita(1 - (p - 0.05) / 0.07), limita((p - (1 - volta)) / (volta * 0.7)));
    if (abertura) {
      abertura.style.opacity = String(a);
      abertura.style.pointerEvents = a > 0.5 ? "auto" : "none";
    }
    ceu?.style.setProperty("scale", String(1.02 + p * 0.1));
  };

  // O teclado nunca cai numa Sala escondida: o foco leva a rolagem até ela
  const aoFocar = (e: FocusEvent) => {
    const alvo = e.target as HTMLElement;
    if (!alvo.matches(":focus-visible")) return;
    const { inicio, passo, total } = medidas();
    const i = itens.findIndex((item) => item.contains(alvo));
    const p = i < 0 ? 0 : (inicio + i * passo - 150) / total;
    const topo = cena.getBoundingClientRect().top + scrollY;
    scrollTo({ top: topo + p * (cena.offsetHeight - innerHeight), behavior: "instant" });
  };
  cena.addEventListener("focusin", aoFocar);

  // O vídeo só baixa e roda enquanto a cena está na tela
  const vigia = new IntersectionObserver(([e]) => {
    if (!video) return;
    if (e.isIntersecting) video.play().catch(() => {});
    else video.pause();
  }, { rootMargin: "20% 0px" });
  vigia.observe(cena);

  return {
    quadro,
    desmonta: () => {
      cena.removeEventListener("focusin", aoFocar);
      vigia.disconnect();
      video?.pause();
      for (const el of [...itens, abertura, ceu]) {
        el?.removeAttribute("style");
        el?.removeAttribute("data-longe");
      }
    },
  };
}

/* Escada: expõe o progresso da rolagem em --p; o resto é CSS (app/globals.css) */
function montaEscada(cena: HTMLElement) {
  const lista = cena.querySelector<HTMLElement>("ol");
  return {
    quadro: () => {
      cena.style.setProperty("--p", progressoDaCena(cena).toFixed(4));
      if (!lista) return;
      // No celular a lista não fica presa: o progresso é a passagem dela pela tela
      const r = lista.getBoundingClientRect();
      lista.style.setProperty("--q", limita((innerHeight * 0.85 - r.top) / r.height).toFixed(4));
    },
    desmonta: () => {
      cena.style.removeProperty("--p");
      lista?.style.removeProperty("--q");
    },
  };
}

/* Marca como visíveis os elementos com data-revelar quando entram na tela e
   conduz as cenas ligadas à rolagem. As animações em si estão em app/globals.css. */
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

  useEffect(() => {
    const consulta = matchMedia(CENAS_ATIVAS);
    let cenas: { quadro: () => void; desmonta: () => void }[] = [];
    let pedido = 0;
    const agenda = () => {
      cancelAnimationFrame(pedido);
      pedido = requestAnimationFrame(() => cenas.forEach((c) => c.quadro()));
    };
    const monta = () => {
      cenas.forEach((c) => c.desmonta());
      cenas = !consulta.matches ? [] : [...document.querySelectorAll<HTMLElement>("[data-cena]")].map((el) => (el.dataset.cena === "tunel" ? montaTunel(el) : montaEscada(el)));
      agenda();
    };
    monta();
    consulta.addEventListener("change", monta);
    addEventListener("scroll", agenda, { passive: true });
    addEventListener("resize", agenda);
    return () => {
      cancelAnimationFrame(pedido);
      consulta.removeEventListener("change", monta);
      removeEventListener("scroll", agenda);
      removeEventListener("resize", agenda);
      cenas.forEach((c) => c.desmonta());
    };
  }, []);
  return null;
}

/* Roda antes da pintura para evitar que o conteúdo pisque antes de se esconder.
   Se o JS da página não carregar em 5s, desiste das revelações e mostra tudo. */
export const scriptAnima = `document.documentElement.classList.add("anima");setTimeout(function(){if(!window.__movimento)document.documentElement.classList.remove("anima")},5000);`;
