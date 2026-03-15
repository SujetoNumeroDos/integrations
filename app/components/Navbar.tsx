"use client";
import { useState, useEffect } from "react";

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
          ? "bg-[#060D1F]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Línea dorada superior */}
      <div className="h-px bg-[#F2B800] w-full" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — solo texto, sin pill */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#1A4F8C] flex items-center justify-center">
            <span className="text-[#F2B800] font-bold text-base leading-none">I</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white text-xs tracking-[0.15em] uppercase">ICHTUS</span>
            <span className="text-[10px] text-[#F0F4FA]/35 tracking-wider uppercase">Technology</span>
          </div>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs text-[#F0F4FA]/50 hover:text-white transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-block bg-[#F2B800] text-[#060D1F] font-semibold text-xs px-5 py-2.5 hover:bg-[#F2B800]/90 transition-colors tracking-wide uppercase"
        >
          Cotizar
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#060D1F] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#F0F4FA]/60 hover:text-white transition-colors text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#F2B800] text-[#060D1F] font-semibold text-xs px-5 py-3 text-center uppercase tracking-wide"
          >
            Cotizar
          </a>
        </div>
      )}
    </header>
  );
}
