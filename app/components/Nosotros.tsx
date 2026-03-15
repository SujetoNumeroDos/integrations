const IMG = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-[#060D1F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header más simple */}
        <div className="mb-14">
          <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Una empresa colombiana especializada en integración tecnológica.
          </h2>
        </div>

        {/* Layout asimétrico: texto grande izquierda, imagen derecha */}
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Texto — ocupa 3 columnas */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-[#F0F4FA]/70 text-lg leading-relaxed">
              En ICHTUS llevamos más de una década diseñando, suministrando e
              instalando sistemas tecnológicos para espacios residenciales,
              corporativos, educativos e industriales en Colombia.
            </p>
            <p className="text-[#F0F4FA]/50 leading-relaxed">
              Somos integradores certificados de marcas líderes en audio
              profesional, videovigilancia, telecomunicaciones y automatización.
              Eso nos permite cubrir un proyecto de principio a fin sin
              depender de terceros.
            </p>
            <p className="text-[#F0F4FA]/50 leading-relaxed">
              Cada instalación la firmamos con garantía y soporte técnico
              post-entrega — porque un sistema bien instalado debe funcionar
              a largo plazo, no solo el día de la entrega.
            </p>

            <a
              href="#contacto"
              className="inline-block border-b border-[#F2B800] text-[#F2B800] text-sm pb-0.5 hover:opacity-70 transition-opacity"
            >
              Hablemos de tu proyecto →
            </a>

            {/* Diferenciadores — lista limpia sin emojis */}
            <div className="pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4">
              {[
                ["Diseño técnico a la medida", "Cada sistema se proyecta según las necesidades reales del espacio, sin soluciones genéricas."],
                ["Integración de extremo a extremo", "Nos encargamos del diseño, suministro, instalación y puesta en marcha."],
                ["Marcas certificadas", "Trabajamos únicamente con fabricantes reconocidos mundialmente."],
                ["Soporte post-instalación", "Acompañamos al cliente después de la entrega con mantenimiento y soporte técnico."],
              ].map(([titulo, desc]) => (
                <div key={titulo} className="space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F2B800] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{titulo}</p>
                      <p className="text-[#F0F4FA]/40 text-xs leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen — 2 columnas, sticky */}
          <div className="md:col-span-2 md:sticky md:top-24">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={IMG}
                alt="ICHTUS Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1F]/80 via-transparent to-transparent" />
              {/* Etiqueta discreta */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-bold text-sm">ICHTUS Technology</p>
                <p className="text-[#F0F4FA]/50 text-xs">Bogotá, Colombia</p>
              </div>
              {/* Borde acento */}
              <div className="absolute top-0 right-0 w-0.5 h-1/3 bg-[#F2B800]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
