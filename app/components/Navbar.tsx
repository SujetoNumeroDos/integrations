"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores",  href: "#sectores" },
  { label: "Clientes",  href: "#clientes" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#060D1F]/95 backdrop-blur-md border-b border-black/5 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="h-px bg-[#F2B800] w-full" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#1A4F8C] flex items-center justify-center">
            <span className="text-[#F2B800] font-bold text-base leading-none">I</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[#0A1628] dark:text-white text-xs tracking-[0.15em] uppercase">ICHTUS</span>
            <span className="text-[10px] text-[#0A1628]/40 dark:text-[#F0F4FA]/35 tracking-wider uppercase">Technology</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs text-[#0A1628]/50 dark:text-[#F0F4FA]/50 hover:text-[#0A1628] dark:hover:text-white transition-colors tracking-wide">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contacto"
            className="bg-[#F2B800] text-[#060D1F] font-semibold text-xs px-5 py-2.5 hover:bg-[#F2B800]/90 transition-colors tracking-wide uppercase"
          >
            Cotizar
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-[#0A1628] dark:text-white text-xl" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#060D1F] border-t border-black/5 dark:border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[#0A1628]/60 dark:text-[#F0F4FA]/60 hover:text-[#0A1628] dark:hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="mt-2 bg-[#F2B800] text-[#060D1F] font-semibold text-xs px-5 py-3 text-center uppercase tracking-wide">
            Cotizar
          </a>
        </div>
      )}
    </header>
  );
}
