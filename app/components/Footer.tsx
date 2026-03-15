export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060D1F] border-t border-[#1A4F8C]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-sm bg-[#1A4F8C] flex items-center justify-center">
                <span className="text-[#F2B800] font-bold text-lg">I</span>
              </div>
              <span className="font-bold text-white tracking-widest uppercase text-sm">
                ICHTUS <span className="text-[#F2B800]">Tech</span>
              </span>
            </div>
            <p className="text-[#F0F4FA]/40 text-sm leading-relaxed max-w-xs">
              Transformando ideas en grandes soluciones tecnológicas. Bogotá, Colombia.
            </p>
            <p className="mt-3 text-[#F2B800] text-sm font-medium">
              info@ichtustech.com
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2 text-[#F0F4FA]/40 text-sm">
              {["Audio","Video","Seguridad","Iluminación","Telecomunicaciones","Automatización","Energía Renovable"].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-[#F2B800] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-[#F0F4FA]/40 text-sm">
              <li>Bogotá, Colombia</li>
              <li>(57) 6045426</li>
              <li>312 384 7001</li>
              <li>
                <a href="mailto:info@ichtustech.com" className="hover:text-[#F2B800] transition-colors">
                  info@ichtustech.com
                </a>
              </li>
              <li>
                <a href="http://www.ichtustech.com" className="hover:text-[#F2B800] transition-colors">
                  www.ichtustech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1A4F8C]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F0F4FA]/30 text-xs">
            © {year} ICHTUS Technology Integrations S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-[#F0F4FA]/20 text-xs">
            NIT: — · Bogotá D.C., Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
