"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", email: "", telefono: "", servicio: "", mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0E1A35] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F2B800]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F2B800] text-xs font-semibold uppercase tracking-widest">
            Hablemos
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            ¿Tienes un proyecto en mente?{" "}
            <span className="text-[#F2B800]">Escríbenos</span>
          </h2>
          <p className="mt-4 text-[#F0F4FA]/50 max-w-xl mx-auto">
            Nuestro equipo técnico te contactará en menos de 24 horas con
            una propuesta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Info de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-5">
                {[
                  { icon: <MapPin size={18} />, label: "Ubicación", value: "Bogotá, Colombia" },
                  { icon: <Phone size={18} />, label: "Teléfono fijo", value: "(57) 6045426" },
                  { icon: <MessageCircle size={18} />, label: "Celular / WhatsApp", value: "312 384 7001" },
                  { icon: <Mail size={18} />, label: "Correo electrónico", value: "info@ichtustech.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1A4F8C]/20 flex items-center justify-center text-[#F2B800] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#F0F4FA]/40 uppercase tracking-wider">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573123847001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-green-500 transition-colors"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>

            {/* Horario */}
            <div className="bg-[#060D1F] border border-[#1A4F8C]/20 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">Horario de atención</h4>
              <div className="space-y-1 text-sm text-[#F0F4FA]/50">
                <div className="flex justify-between">
                  <span>Lunes – Viernes</span>
                  <span className="text-[#F0F4FA]/80">8:00 am – 6:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="text-[#F0F4FA]/80">9:00 am – 1:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos y festivos</span>
                  <span className="text-[#F0F4FA]/50">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#060D1F] border border-[#1A4F8C]/20 rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">
                  Nombre *
                </label>
                <input
                  required
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full bg-[#0E1A35] border border-[#1A4F8C]/30 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#F0F4FA]/20 focus:outline-none focus:border-[#F2B800]/60 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-xs text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">
                  Empresa
                </label>
                <input
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full bg-[#0E1A35] border border-[#1A4F8C]/30 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#F0F4FA]/20 focus:outline-none focus:border-[#F2B800]/60 transition-colors"
                  placeholder="Empresa (opcional)"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0E1A35] border border-[#1A4F8C]/30 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#F0F4FA]/20 focus:outline-none focus:border-[#F2B800]/60 transition-colors"
                  placeholder="correo@empresa.com"
                />
              </div>
              <div>
                <label className="text-xs text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full bg-[#0E1A35] border border-[#1A4F8C]/30 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#F0F4FA]/20 focus:outline-none focus:border-[#F2B800]/60 transition-colors"
                  placeholder="300 000 0000"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">
                Servicio de interés
              </label>
              <select
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                className="w-full bg-[#0E1A35] border border-[#1A4F8C]/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F2B800]/60 transition-colors"
              >
                <option value="">Selecciona un servicio...</option>
                <option>Sistemas de Audio</option>
                <option>Sistemas de Video</option>
                <option>Seguridad Electrónica</option>
                <option>Sistemas de Iluminación</option>
                <option>Telecomunicaciones</option>
                <option>Redes Eléctricas</option>
                <option>Integración y Automatización</option>
                <option>Energía Renovable</option>
                <option>Múltiples servicios</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-[#F0F4FA]/50 uppercase tracking-wider block mb-1.5">
                Cuéntanos tu proyecto *
              </label>
              <textarea
                required
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full bg-[#0E1A35] border border-[#1A4F8C]/30 rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#F0F4FA]/20 focus:outline-none focus:border-[#F2B800]/60 transition-colors resize-none"
                placeholder="Describe brevemente tu proyecto, espacio y necesidades..."
              />
            </div>

            <button
              type="submit"
              className={`w-full font-bold py-4 rounded-xl transition-all duration-200 text-sm ${
                enviado
                  ? "bg-green-600 text-white"
                  : "bg-[#F2B800] text-[#060D1F] hover:bg-[#F2B800]/90"
              }`}
            >
              {enviado ? "✓ Mensaje enviado — Te contactaremos pronto" : "Enviar solicitud →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
