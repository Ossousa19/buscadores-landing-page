import type { Metadata } from "next";
import { ChamadoAnfitrioes, ComoFicaSala, ComoFunciona, HeroAnfitrioes, PorQue, Politica, SecaoEditor, colunasAnfitrioes } from "@/components/landing/anfitrioes";
import { Perguntas, Rodape } from "@/components/landing/fim";
import { perguntasAnfitriao } from "@/lib/conteudo";

export const metadata: Metadata = {
  title: "Seja anfitrião · A Sala dos Buscadores",
  description:
    "A curadoria convida anfitriões para manter uma Sala própria: a sua leitura de uma tradição, com os seus artigos e as suas fontes, ao lado das Salas da curadoria.",
};

export default function Anfitrioes() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-marfim focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <HeroAnfitrioes />
      <main id="conteudo">
        <PorQue />
        <ComoFicaSala />
        <SecaoEditor />
        <ComoFunciona />
        <Politica />
        <Perguntas itens={perguntasAnfitriao} numero="VI" linha1="Perguntas de" linha2="anfitriões." convite="Quer conversar antes de se candidatar?" recuo />
        <ChamadoAnfitrioes />
      </main>
      <Rodape colunas={colunasAnfitrioes} nota="Nada vai ao ar sem a revisão da curadoria." />
    </>
  );
}
