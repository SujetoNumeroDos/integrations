const IMG = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80";

const sectores = [
  {
    titulo: "Corporativo",
    desc: "Salas de juntas, control de acceso, videoconferencia y redes de alta velocidad para sedes y oficinas.",
  },
  {
    titulo: "Educación",
    desc: "Aulas interactivas, auditorios y sistemas de amplificación para universidades e instituciones educativas.",
  },
  {
    titulo: "Iglesias",
    desc: "Audio de alta claridad, iluminación de ambientes y videovigilancia para comunidades religiosas.",
  },
  {
    titulo: "Industria",
    desc: "Redes eléctricas, telecomunicaciones industriales y sistemas de alerta para plantas y bodegas.",
  },
  {
    titulo: "Residencial",
    desc: "Automatización del hogar, seguridad perimetral, audio multiroom e iluminación inteligente.",
  },
  {
    titulo: "Comercial",
    desc: "Sonido ambiental, señalización digital y CCTV para centros comerciales, restaurantes y hoteles.",
  },
  {
    titulo: "Entretenimiento",
    desc: "Audio e iluminación de espectáculo para auditorios, teatros, cines y estadios.",
  },
];

export default function Sectores() {
  return (
    <section id="sectores" className="py-24 bg-[#060D1F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Dónde trabajamos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-xl leading-tight">
            Soluciones para todos los mercados.
          </h2>
        </div>

        {/* Grid — tamaños distintos, no uniforme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {sectores.map((s, i) => (
            <div
              key={s.titulo}
              className={`group relative bg-[#060D1F] p-7 hover:bg-[#0E1A35] transition-colors ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Imagen de fondo sutil solo en la primera */}
              {i === 0 && (
                <div className="absolute inset-0 overflow-hidden">
                  <img src={IMG} alt="" className="w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-bold text-white ${i === 0 ? "text-2xl md:text-3xl" : "text-base"}`}>
                    {s.titulo}
                  </h3>
                  <span className="text-[#F2B800] opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    ↗
                  </span>
                </div>
                <p className={`text-[#F0F4FA]/40 leading-relaxed ${i === 0 ? "text-sm" : "text-xs"}`}>
                  {s.desc}
                </p>
              </div>

              {/* Borde acento hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F2B800] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
