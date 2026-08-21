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
  TrendingUp,
  HeartHandshake
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
    <div className="space-y-16">
      
      {/* Association Info Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-4 md:pt-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold leading-none bg-amber-100 text-amber-950 font-mono tracking-wide uppercase">
          <Heart className="w-4 h-4 fill-amber-400 stroke-amber-800" />
          <span>Asociación de Tecnología Inclusiva</span>
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none font-display">
          Aprende Tecnología Sin Límites
        </h1>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          En SomosCoders luchamos activamente por democratizar el acceso al sector tecnológico y reducir la brecha digital con formación, equipos y mentores 100% gratuitos.
        </p>
      </section>

      {/* Core statistics cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
          <span className="text-3xl font-extrabold text-amber-500 font-display block">+500</span>
          <span className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest block">Alumnos formados</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
          <span className="text-3xl font-extrabold text-emerald-500 font-display block">100%</span>
          <span className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest block">Gratuito y Abierto</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
          <span className="text-3xl font-extrabold text-blue-500 font-display block">+40</span>
          <span className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest block">Mentores Voluntarios</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center space-y-2">
          <span className="text-3xl font-extrabold text-indigo-500 font-display block">70%</span>
          <span className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest block">Empleabilidad</span>
        </div>
      </section>

      {/* Three Pillars breakdown layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight font-display border-l-4 border-amber-400 pl-4">
            Nuestra Misión Social
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed font-sans">
            La transformación digital genera millones de puestos de trabajo estables e inclusivos, pero muchas personas no poseen los recursos o las facilidades para acceder a esta formación especializada. 
          </p>
          <p className="text-sm text-gray-500 leading-relaxed font-sans">
            En SomosCoders conectamos de forma solidaria el conocimiento de profesionales activos del sector de software, con personas con diversidad funcional o en situaciones de vulnerabilidad socioeconómica.
          </p>
          
          <div className="space-y-3.5 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-xs font-bold text-gray-700">Equipamiento tecnológico gratuito para alumnos que lo requieran.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <p className="text-xs font-bold text-gray-700">Tutorías grupales interactivas semanales subtituladas e inclusivas.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <p className="text-xs font-bold text-gray-700">Alianzas activas con agencias de empleo para colocación profesional.</p>
            </div>
          </div>
        </div>

        {/* Local centers vector representation */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl" />
          <h3 className="font-extrabold text-lg text-white font-display">Comunidades de SomosCoders</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Disponemos de núcleos interactivos de mentorías presenciales y soporte remoto y físico en múltiples ubicaciones:
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3.5 font-sans">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-amber-400 shrink-0 border border-gray-700">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs block">Barcelona / Viladecans, España</span>
                <span className="text-[10px] text-gray-400 block font-mono">Espacio presencial adaptado • Talleres de Vibe Coding y UX</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 font-sans">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-emerald-400 shrink-0 border border-gray-700">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs block">La Rioja, España</span>
                <span className="text-[10px] text-gray-400 block font-mono">Campamento QA y automatización de pruebas web</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 font-sans">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-sky-400 shrink-0 border border-gray-700">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs block">Buenos Aires, Argentina</span>
                <span className="text-[10px] text-gray-400 block font-mono">Plataforma remota y círculos de mentoría inclusiva regional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Registration Form */}
      <section className="bg-white rounded-3xl border border-gray-100 max-w-3xl mx-auto p-8 md:p-12 space-y-6 shadow-sm">
        <div className="text-center space-y-2">
          <HeartHandshake className="w-10 h-10 text-amber-500 mx-auto" />
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight font-display">Únete como Voluntario o Colaborador</h2>
          <p className="text-gray-500 text-xs max-w-md mx-auto">
            ¿Eres desarrollador, diseñador, QA o empresa? Dedica unas horas semanales para guiar alumnos y ayúdanos a cambiar vidas.
          </p>
        </div>

        {!formSubmitted ? (
          <form onSubmit={handleRegisterVolunteer} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-bold text-gray-700">Nombre completo</label>
                <input 
                  type="text" 
                  required
                  value={volunteerName}
                  onChange={(e) => setVolunteerName(e.target.value)}
                  placeholder="Ej: Marcos Pérez" 
                  className="bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl outline-none"
                />
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-bold text-gray-700">Correo electrónico</label>
                <input 
                  type="email" 
                  required
                  value={volunteerEmail}
                  onChange={(e) => setVolunteerEmail(e.target.value)}
                  placeholder="Ej: marcos@correo.com" 
                  className="bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5 flex flex-col">
              <label className="text-xs font-bold text-gray-700">Rol sugerido de apoyo</label>
              <select
                value={volunteerRole}
                onChange={(e) => setVolunteerRole(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl outline-none"
              >
                <option value="mentor">Quiero ser mentor voluntario (técnico o diseño)</option>
                <option value="hardware">Deseo donar hardware o computadoras adaptadas</option>
                <option value="company">Tengo una empresa y deseo ofrecer vacantes inclusivas</option>
                <option value="student">Deseo registrarme para futuros bootcamps presenciales</option>
              </select>
            </div>

            <div className="space-y-1.5 flex flex-col">
              <label className="text-xs font-bold text-gray-700">Mensaje de presentación</label>
              <textarea 
                rows={3}
                value={volunteerMessage}
                onChange={(e) => setVolunteerMessage(e.target.value)}
                placeholder="Cuéntanos un poco sobre ti, tu trayectoria o cómo te gustaría colaborar con SomosCoders..." 
                className="bg-gray-50 border border-gray-200 text-xs p-3 rounded-xl outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition select-none cursor-pointer"
            >
              Enviar Solicitud Solidaria
            </button>
          </form>
        ) : (
          <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl text-center border border-emerald-100 space-y-3 animate-in fade-in duration-300">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="font-extrabold text-base">¡Solicitud recibida correctamente!</h3>
            <p className="text-xs text-emerald-700 leading-relaxed font-sans max-w-sm mx-auto">
              Muchas gracias por tu solidaridad, {volunteerName}. Nos pondremos en contacto contigo vía {volunteerEmail} para coordinar tu colaboración. ¡Haces de la tecnología un lugar mejor!
            </p>
          </div>
        )}
      </section>

    </div>
  );
};
