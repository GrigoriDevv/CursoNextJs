//imports externos
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
//imports internos
import "./globals.css";
import { Header } from "@/components/header/header";

const nunito = Nunito({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Codarse - Os melhores cursos de programação gratuitos",
  description:
    "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={`${nunito.className} ${nunito.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
