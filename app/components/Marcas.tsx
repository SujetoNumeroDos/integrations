const marcas = [
  { nombre: "Simplex",         cat: "Seguridad" },
  { nombre: "Shure",           cat: "Audio" },
  { nombre: "QSC",             cat: "Audio" },
  { nombre: "Phonic",          cat: "Audio" },
  { nombre: "PreSonus",        cat: "Audio" },
  { nombre: "Proel",           cat: "Audio" },
  { nombre: "Epson",           cat: "Video" },
  { nombre: "Samsung",         cat: "Video" },
  { nombre: "Crestron",        cat: "Automatización" },
  { nombre: "DSC",             cat: "Seguridad" },
  { nombre: "Dahua",           cat: "Videovigilancia" },
  { nombre: "Axis",            cat: "Videovigilancia" },
  { nombre: "Furukawa",        cat: "Telecomunicaciones" },
  { nombre: "Allied Telesis",  cat: "Redes" },
  { nombre: "Linksys / Cisco", cat: "Redes" },
];

export default function Marcas() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="flex-shrink-0">
            <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-2">
              Fabricantes
            </p>
            <p className="text-white font-bold text-lg max-w-[160px] leading-tight">
              Marcas que respaldan cada proyecto
            </p>
          </div>

          {/* Lista horizontal con separadores */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {marcas.map((m, i) => (
              <span
                key={m.nombre}
                className="text-[#F0F4FA]/40 text-sm hover:text-white transition-colors cursor-default"
                title={m.cat}
              >
                {m.nombre}
                {i < marcas.length - 1 && (
                  <span className="ml-6 text-white/10">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
