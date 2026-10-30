import { Hero } from "@/components/landing/topo";
import { Curadoria, Salas } from "@/components/landing/curadoria-salas";
import { Comparar } from "@/components/landing/comparar";
import { Conquistas, Leitura, Trilhas } from "@/components/landing/meio";
import { Chamado, Perguntas, Rodape, SejaAnfitriao } from "@/components/landing/fim";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-marfim focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Hero />
      <main id="conteudo">
        <Curadoria />
        <Salas />
        <Comparar />
        <Trilhas />
        <Leitura />
        <Conquistas />
        <SejaAnfitriao />
        <Perguntas />
        <Chamado />
      </main>
      <Rodape />
    </>
  );
}
