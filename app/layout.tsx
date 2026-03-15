import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICHTUS Technology Integrations S.A.S. | Soluciones AV & Seguridad",
  description:
    "Diseño e implementación de sistemas de audio, video, seguridad electrónica, iluminación, telecomunicaciones y automatización en Bogotá, Colombia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-[#060D1F] text-[#0A1628] dark:text-[#F0F4FA] transition-colors duration-200`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
