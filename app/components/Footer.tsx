export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-[#060D1F] border-t border-[#0A1628]/5 dark:border-[#1A4F8C]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-[#1A4F8C] flex items-center justify-center">
                <span className="text-[#F2B800] font-bold text-base">I</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[#0A1628] dark:text-white text-xs tracking-[0.15em] uppercase">ICHTUS</span>
                <span className="text-[10px] text-[#0A1628]/35 dark:text-[#F0F4FA]/35 tracking-wider uppercase">Technology</span>
              </div>
            </div>
            <p className="text-[#0A1628]/40 dark:text-[#F0F4FA]/40 text-sm leading-relaxed max-w-xs">
              Transformando ideas en grandes soluciones tecnológicas. Bogotá, Colombia.
            </p>
            <p className="mt-3 text-[#F2B800] text-sm font-medium">info@ichtustech.com</p>
          </div>

          <div>
            <h4 className="text-[#0A1628] dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2 text-[#0A1628]/40 dark:text-[#F0F4FA]/40 text-sm">
              {["Audio","Video","Seguridad","Iluminación","Telecomunicaciones","Automatización","Energía Renovable"].map(s => (
                <li key={s}><a href="#servicios" className="hover:text-[#F2B800] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#0A1628] dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2 text-[#0A1628]/40 dark:text-[#F0F4FA]/40 text-sm">
              <li>Bogotá, Colombia</li>
              <li>(57) 6045426</li>
              <li>312 384 7001</li>
              <li><a href="mailto:info@ichtustech.com" className="hover:text-[#F2B800] transition-colors">info@ichtustech.com</a></li>
              <li><a href="http://www.ichtustech.com" className="hover:text-[#F2B800] transition-colors">www.ichtustech.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0A1628]/5 dark:border-[#1A4F8C]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#0A1628]/30 dark:text-[#F0F4FA]/30 text-xs">
            © {year} ICHTUS Technology Integrations S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-[#0A1628]/20 dark:text-[#F0F4FA]/20 text-xs">Bogotá D.C., Colombia</p>
        </div>
      </div>
    </footer>
  );
}
