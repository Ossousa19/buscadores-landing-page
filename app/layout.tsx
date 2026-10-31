import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/source-serif-4/opsz.css";
import "@fontsource-variable/source-serif-4/opsz-italic.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/eb-garamond/wght-italic.css";
import "./globals.css";
import { Movimento, scriptAnima } from "@/components/ui/movimento";

export const metadata: Metadata = {
  title: "A Sala dos Buscadores · Biblioteca digital de estudos comparados",
  description:
    "Um acervo curado para compreender textos, ideias e cosmologias em seus próprios contextos, sem hierarquias, sem respostas prontas.",
};

export const viewport: Viewport = { themeColor: "#0b0c0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAnima }} />
      </head>
      <body>
        {children}
        <Movimento />
      </body>
    </html>
  );
}
