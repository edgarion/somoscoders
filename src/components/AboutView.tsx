import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Send, 
  Users, 
  Laptop, 
  Sparkles, 
  CheckCircle,
  Award,
  Globe,
  Briefcase,
  Building2,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('mentor');
  const [volunteerMessage, setVolunteerMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRegisterVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (volunteerName.trim() && volunteerEmail.trim()) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 font-sans text-[#0D1117]">
      
      {/* Association Info Header 2026 */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-4 md:pt-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F6F1] border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
          <span className="text-[#00A98F]">✳</span>
          <span>Tecnología + Educación + Inclusión Social</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D1117] tracking-tight leading-tight font-display">
          Código. Comunidad. <span className="text-[#00A98F]">Oportunidades.</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          En SomosCoders trabajamos para democratizar el acceso al sector tecnológico y reducir la brecha digital con formación, proyectos reales y mentores 100% gratuitos.
        </p>
      </section>

      {/* Core statistics cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        <div className="bg-[#F7F6F1] p-6 rounded-3xl border border-gray-200/80 text-center space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#00A98F] font-display block">150</span>
          <span className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider block">Alumnos graduados</span>
        </div>
        <div className="bg-[#F7F6F1] p-6 rounded-3xl border border-gray-200/80 text-center space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#087A65] font-display block">65%</span>
          <span className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider block">Inserción laboral</span>
        </div>
        <div className="bg-[#F7F6F1] p-6 rounded-3xl border border-gray-200/80 text-center space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#00A98F] font-display block">25</span>
          <span className="text-xs font-bold font-mono text-gray-500 uppercase tracking-wider block">Empresas aliadas</span>
        </div>
        <div className="bg-[#C8FF00] p-6 rounded-3xl border-2 border-[#0D1117] text-center space-y-2 shadow-[3px_3px_0px_#0D1117]">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0D1117] font-display block">50</span>
          <span className="text-xs font-bold font-mono text-[#087A65] uppercase tracking-wider block">Mentores voluntarios</span>
        </div>
      </section>

      {/* Narrative Section with Characters and Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F7F6F1] p-8 sm:p-12 rounded-3xl border border-gray-200/80">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#087A65] text-xs font-bold font-mono">
            NUESTRA MISIÓN
          </div>
          <h2 className="text-3xl font-extrabold font-display text-[#0D1117]">
            Detrás de cada línea de código hay personas transformando su futuro.
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            SomosCoders no es una empresa de software ni una ONG corporativa convencional. Somos un ecosistema donde personas en riesgo de exclusión social y apasionados de la tecnología se encuentran para aprender, colaborar y acceder a oportunidades reales de empleo.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1">
              <span className="font-bold text-xs text-[#0D1117] block font-display">Diversidad Real</span>
              <p className="text-[11px] text-gray-500">Espacios adaptados para personas con diversidad funcional y de cualquier contexto.</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1">
              <span className="font-bold text-xs text-[#0D1117] block font-display">Mentoría Continua</span>
              <p className="text-[11px] text-gray-500">Profesionales en activo de la industria guiando paso a paso.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex items-center justify-center gap-4">
          <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-white flex items-center justify-center">
            <img 
              src="/images/char_dog_crown_happy.png" 
              alt="Mascota Oficial de SomosCoders" 
              className="w-44 h-auto object-contain hover:scale-105 transition"
            />
          </div>
          <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-white flex items-center justify-center">
            <img 
              src="/images/char_boy_backpack_peace.png" 
              alt="Estudiante con Mochila SomosCoders" 
              className="w-36 h-auto object-contain hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* Volunteer / Corporate Collaboration Form 2026 */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-gray-800">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C8FF00]">
            VOLUNTARIADO Y ALIANZAS EMPRESARIALES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Colabora con SomosCoders y sé parte activa del cambio.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Tanto si eres profesional del sector y quieres mentorizar como si representas a una empresa interesada en contratar talento diverso o patrocinar programas formativos, cuéntanos cómo te gustaría sumar.
          </p>

          {formSubmitted ? (
            <div className="bg-[#00A98F]/20 border border-[#00A98F] p-6 rounded-2xl text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-[#C8FF00] mx-auto" />
              <h4 className="font-bold text-base text-white">¡Mensaje recibido con éxito!</h4>
              <p className="text-xs text-gray-300">Nos pondremos en contacto contigo muy pronto para coordinar la colaboración.</p>
            </div>
          ) : (
            <form onSubmit={handleRegisterVolunteer} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Nombre o Empresa</label>
                  <input
                    type="text"
                    required
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    placeholder="Tu nombre o empresa"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={volunteerEmail}
                    onChange={(e) => setVolunteerEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">¿Cómo te gustaría colaborar?</label>
                <select
                  value={volunteerRole}
                  onChange={(e) => setVolunteerRole(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]"
                >
                  <option value="mentor">Ofrecer mentoría a estudiantes</option>
                  <option value="empresa">Empresa: Contratar talento formado</option>
                  <option value="patrocinio">Empresa: Patrocinar formación y becas</option>
                  <option value="voluntario">Voluntariado en eventos y proyectos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Mensaje o propuesta (opcional)</label>
                <textarea
                  rows={3}
                  value={volunteerMessage}
                  onChange={(e) => setVolunteerMessage(e.target.value)}
                  placeholder="Cuéntanos brevemente sobre ti o tu entidad..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#C8FF00] hover:bg-amber-300 text-[#0D1117] font-extrabold py-3 px-6 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-md cursor-pointer"
              >
                <span>ENVIAR SOLICITUD DE COLABORACIÓN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
