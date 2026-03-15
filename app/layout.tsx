import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICHTUS Technology Integrations S.A.S. | Soluciones AV & Seguridad",
  description:
    "Diseño e implementación de sistemas de audio, video, seguridad electrónica, iluminación, telecomunicaciones y automatización en Bogotá, Colombia.",
  keywords: "sistemas de audio, video, seguridad electrónica, automatización, telecomunicaciones, Bogotá, Colombia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#060D1F] text-[#F0F4FA]`}>
        {children}
      </body>
    </html>
  );
}
