const clientes = [
  { nombre: "Compensar",                   sector: "Social" },
  { nombre: "Colsubsidio",                 sector: "Social" },
  { nombre: "Misión ONU Colombia",         sector: "Internacional" },
  { nombre: "Escuela de Cadetes PGS",      sector: "Gubernamental" },
  { nombre: "TELCOS Ingeniería",           sector: "Corporativo" },
  { nombre: "ZX Ventures Colombia",        sector: "Corporativo" },
  { nombre: "Fitness 24 Seven",            sector: "Comercial" },
  { nombre: "Círculo Suboficiales FF.MM.", sector: "Gubernamental" },
  { nombre: "Panamericana",               sector: "Comercial" },
  { nombre: "Accuro",                      sector: "Corporativo" },
  { nombre: "Univ. de los Andes",          sector: "Educación" },
  { nombre: "Univ. Javeriana Bogotá",      sector: "Educación" },
  { nombre: "UNIMINUTO",                   sector: "Educación" },
  { nombre: "Alpina",                      sector: "Industria" },
  { nombre: "MasterPlan Desarrollo Urbano",sector: "Corporativo" },
  { nombre: "Comunidad Salvatorianos",     sector: "Iglesias" },
  { nombre: "Comunidad Salesianos",        sector: "Iglesias" },
];

export default function Clientes() {
  return (
    <section id="clientes" className="py-24 bg-[#0E1A35]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Clientes
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Empresas que confían <br className="hidden md:block" />
              en nuestro trabajo.
            </h2>
          </div>
          <p className="text-[#F0F4FA]/35 text-sm max-w-xs leading-relaxed">
            Organizaciones líderes en Colombia, desde universidades de
            élite hasta organismos internacionales.
          </p>
        </div>

        {/* Lista — no grid de tarjetas, sino filas limpias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {clientes.map((c) => (
            <div
              key={c.nombre}
              className="bg-[#0E1A35] hover:bg-[#162240] transition-colors px-6 py-5 flex items-center justify-between group"
            >
              <span className="text-white text-sm font-medium group-hover:text-[#F2B800] transition-colors">
                {c.nombre}
              </span>
              <span className="text-[10px] text-[#F0F4FA]/25 uppercase tracking-wider flex-shrink-0 ml-4">
                {c.sector}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
