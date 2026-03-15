"use client";
import { useState } from "react";

const servicios = [
  { id:1, num:"01", titulo:"Sistemas de Audio",
    descripcion:"Sonido ambiental, salas de conferencia, evacuación y alertas. Diseño acústico e instalación de equipos para cualquier escala de proyecto.",
    detalles:["Sonido ambiental multizona","Sistemas de conferencia y voceo","Evacuación y alerta","Diseño acústico"] },
  { id:2, num:"02", titulo:"Sistemas de Video",
    descripcion:"Monitores, proyectores, videowalls y extensores de señal. Desde una sala de reuniones hasta un auditorio para miles de personas.",
    detalles:["Monitores y pantallas comerciales","Proyectores y telones","Videowall y señalización digital","Extensores de señal HDMI/AV"] },
  { id:3, num:"03", titulo:"Seguridad Electrónica",
    descripcion:"CCTV con analíticas de video, control de acceso biométrico, detección de intrusión y sistemas contra incendios certificados.",
    detalles:["Cámaras IP y CCTV con analíticas","Control de acceso biométrico","Detección de intrusión y alarmas","Sistemas de detección de fuego"] },
  { id:4, num:"04", titulo:"Iluminación LED",
    descripcion:"Iluminación arquitectónica, ambiental y de fachadas con tecnología LED. Programación de escenas y control inteligente.",
    detalles:["Iluminación arquitectónica","Iluminación de fachadas y exteriores","Control de escenas y atenuadores","Ahorro energético LED"] },
  { id:5, num:"05", titulo:"Telecomunicaciones",
    descripcion:"Infraestructura de red para transmisión de datos: fibra óptica, cableado estructurado certificado y radioenlaces.",
    detalles:["Fibra óptica monomodo y multimodo","Cableado estructurado Cat6A / Cat7","Radioenlaces punto a punto","Certificación de redes"] },
  { id:6, num:"06", titulo:"Redes Eléctricas",
    descripcion:"Diseño e instalación de redes eléctricas reguladas, tableros de distribución y puesta a tierra para entornos comerciales e industriales.",
    detalles:["Redes eléctricas reguladas","Tableros de distribución","Canalizaciones y bandejería","Puesta a tierra y protecciones"] },
  { id:7, num:"07", titulo:"Integración y Automatización",
    descripcion:"Un solo control para audio, video e iluminación. Automatizamos hogares, salas de juntas, auditorios y teatros con plataformas como Crestron.",
    detalles:["Control centralizado (Crestron)","Automatización residencial","Salas de juntas inteligentes","Auditorios y teatros"] },
  { id:8, num:"08", titulo:"Energía Renovable",
    descripcion:"Sistemas fotovoltaicos y eólicos para reducir costos energéticos. Instalaciones on-grid, off-grid e híbridas con monitoreo remoto.",
    detalles:["Paneles solares fotovoltaicos","Energía eólica","Sistemas híbridos on/off-grid","Monitoreo de producción y consumo"] },
];

export default function Servicios() {
  const [activo, setActivo] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-24 bg-[#F8F9FC] dark:bg-[#0E1A35]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-4">Lo que hacemos</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A1628] dark:text-white leading-tight">
              8 líneas de servicio.<br />
              <span className="text-[#0A1628]/30 dark:text-[#F0F4FA]/40">Una sola empresa.</span>
            </h2>
          </div>
          <a href="#contacto" className="self-start md:self-auto border border-[#F2B800]/40 text-[#F2B800] px-6 py-2.5 text-sm hover:bg-[#F2B800]/10 transition-colors whitespace-nowrap">
            Pedir propuesta técnica
          </a>
        </div>

        <div className="divide-y divide-[#0A1628]/5 dark:divide-white/5">
          {servicios.map((s) => (
            <div key={s.id} onClick={() => setActivo(activo === s.id ? null : s.id)} className="group cursor-pointer">
              <div className="flex items-start gap-6 py-6 hover:bg-[#0A1628]/[0.02] dark:hover:bg-white/[0.02] px-2 transition-colors">
                <span className="text-xs text-[#0A1628]/20 dark:text-[#F0F4FA]/20 font-mono mt-0.5 w-6 flex-shrink-0">{s.num}</span>
                <span className="font-semibold text-[#0A1628] dark:text-white text-base md:text-lg w-48 md:w-56 flex-shrink-0 group-hover:text-[#F2B800] transition-colors">
                  {s.titulo}
                </span>
                <span className="hidden md:block text-[#0A1628]/40 dark:text-[#F0F4FA]/40 text-sm leading-relaxed flex-1">
                  {s.descripcion}
                </span>
                <span className="ml-auto text-[#0A1628]/30 dark:text-[#F0F4FA]/30 group-hover:text-[#F2B800] transition-colors text-lg">
                  {activo === s.id ? "−" : "+"}
                </span>
              </div>

              {activo === s.id && (
                <div className="pb-6 px-2 pl-14">
                  <p className="md:hidden text-[#0A1628]/50 dark:text-[#F0F4FA]/50 text-sm leading-relaxed mb-4">{s.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.detalles.map((d) => (
                      <span key={d} className="text-xs bg-[#1A4F8C]/10 dark:bg-[#1A4F8C]/20 border border-[#1A4F8C]/20 dark:border-[#1A4F8C]/30 text-[#1A4F8C] dark:text-[#F0F4FA]/60 px-3 py-1">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
