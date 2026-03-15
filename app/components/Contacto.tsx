"use client";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre:"", empresa:"", email:"", telefono:"", servicio:"", mensaje:"" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  const inputCls = "w-full bg-white dark:bg-[#0E1A35] border border-[#0A1628]/10 dark:border-[#1A4F8C]/30 rounded-sm px-4 py-3 text-[#0A1628] dark:text-white text-sm placeholder:text-[#0A1628]/25 dark:placeholder:text-[#F0F4FA]/20 focus:outline-none focus:border-[#F2B800]/60 transition-colors";

  return (
    <section id="contacto" className="py-24 bg-[#F8F9FC] dark:bg-[#0E1A35]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#F2B800] text-xs font-medium tracking-[0.2em] uppercase mb-4">Hablemos</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A1628] dark:text-white">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-[#0A1628]/50 dark:text-[#F0F4FA]/50 max-w-xl mx-auto text-sm">
            Nuestro equipo técnico te contactará en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-5">
              {[
                { label:"Ubicación",            value:"Bogotá, Colombia" },
                { label:"Teléfono fijo",         value:"(57) 6045426" },
                { label:"Celular / WhatsApp",    value:"312 384 7001" },
                { label:"Correo electrónico",    value:"info@ichtustech.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1A4F8C]/10 dark:bg-[#1A4F8C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#F2B800] rounded-full" />
                  </div>
                  <div>
                    <div className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/40 uppercase tracking-wider">{item.label}</div>
                    <div className="text-[#0A1628] dark:text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/573123847001" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white font-semibold px-6 py-3.5 hover:bg-green-500 transition-colors text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribir por WhatsApp
            </a>

            <div className="bg-white dark:bg-[#060D1F] border border-[#0A1628]/5 dark:border-[#1A4F8C]/20 p-6">
              <h4 className="text-[#0A1628] dark:text-white font-semibold mb-3 text-sm">Horario de atención</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#0A1628]/50 dark:text-[#F0F4FA]/50">Lunes – Viernes</span>
                  <span className="text-[#0A1628] dark:text-[#F0F4FA]/80">8:00 am – 6:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0A1628]/50 dark:text-[#F0F4FA]/50">Sábados</span>
                  <span className="text-[#0A1628] dark:text-[#F0F4FA]/80">9:00 am – 1:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#060D1F] border border-[#0A1628]/5 dark:border-[#1A4F8C]/20 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">Nombre *</label>
                <input required type="text" value={form.nombre} onChange={(e) => setForm({...form,nombre:e.target.value})} className={inputCls} placeholder="Tu nombre" />
              </div>
              <div>
                <label className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">Empresa</label>
                <input type="text" value={form.empresa} onChange={(e) => setForm({...form,empresa:e.target.value})} className={inputCls} placeholder="Empresa (opcional)" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({...form,email:e.target.value})} className={inputCls} placeholder="correo@empresa.com" />
              </div>
              <div>
                <label className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">Teléfono</label>
                <input type="tel" value={form.telefono} onChange={(e) => setForm({...form,telefono:e.target.value})} className={inputCls} placeholder="300 000 0000" />
              </div>
            </div>
            <div>
              <label className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">Servicio de interés</label>
              <select value={form.servicio} onChange={(e) => setForm({...form,servicio:e.target.value})} className={inputCls}>
                <option value="">Selecciona un servicio...</option>
                {["Sistemas de Audio","Sistemas de Video","Seguridad Electrónica","Sistemas de Iluminación","Telecomunicaciones","Redes Eléctricas","Integración y Automatización","Energía Renovable","Múltiples servicios"].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-[#0A1628]/40 dark:text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">Cuéntanos tu proyecto *</label>
              <textarea required rows={4} value={form.mensaje} onChange={(e) => setForm({...form,mensaje:e.target.value})} className={`${inputCls} resize-none`} placeholder="Describe brevemente tu proyecto, espacio y necesidades..." />
            </div>
            <button type="submit" className={`w-full font-bold py-4 text-sm transition-all duration-200 ${enviado ? "bg-green-600 text-white" : "bg-[#F2B800] text-[#060D1F] hover:bg-[#F2B800]/90"}`}>
              {enviado ? "Mensaje enviado — Te contactaremos pronto" : "Enviar solicitud →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
