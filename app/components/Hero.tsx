"use client";
const IMG = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden pb-20 md:pb-28">
      <div className="absolute inset-0">
        <img src={IMG} alt="" className="w-full h-full object-cover opacity-25 dark:opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 dark:from-[#060D1F] dark:via-[#060D1F]/85 dark:to-[#060D1F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#060D1F] via-transparent to-white/30 dark:to-[#060D1F]/30" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#F2B800] to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-6">
            Bogotá, Colombia — Desde 2010
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0A1628] dark:text-white leading-[1.05] mb-7">
            Integramos{" "}
            <br className="hidden sm:block" />
            la tecnología{" "}
            <br />
            <span className="text-[#1A4F8C]">en tu espacio.</span>
          </h1>

          <p className="text-base md:text-lg text-[#0A1628]/55 dark:text-[#F0F4FA]/55 max-w-xl leading-relaxed mb-10">
            Audio, video, seguridad, telecomunicaciones, iluminación y
            automatización — diseñados e instalados por especialistas.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#servicios" className="bg-[#F2B800] text-[#060D1F] font-semibold px-7 py-3 text-sm hover:bg-[#F2B800]/90 transition-colors">
              Nuestros servicios
            </a>
            <a href="#contacto" className="border border-[#0A1628]/20 dark:border-white/20 text-[#0A1628] dark:text-white px-7 py-3 text-sm hover:border-[#0A1628]/40 dark:hover:border-white/40 transition-colors">
              Solicitar propuesta
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#0A1628]/10 dark:border-white/10 pt-8">
            {[
              { num: "8",   label: "líneas de servicio" },
              { num: "+17", label: "clientes en Colombia" },
              { num: "15",  label: "fabricantes aliados" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#F2B800]">{s.num}</span>
                <span className="text-xs text-[#0A1628]/35 dark:text-[#F0F4FA]/35">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
