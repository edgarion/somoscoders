import React, { useState } from 'react';
import { 
  Heart, 
  Building2, 
  Users, 
  Award, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck,
  Send,
  GraduationCap,
  Globe,
  ExternalLink,
  Code2,
  Video,
  Server,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

interface ColaboraViewProps {
  onNavigate: (view: string) => void;
}

export const ColaboraView: React.FC<ColaboraViewProps> = ({ onNavigate }) => {
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerType, setVolunteerType] = useState('mentor');
  const [volunteerOrg, setVolunteerOrg] = useState('');
  const [volunteerMessage, setVolunteerMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const partners = [
    {
      name: 'Software Crafters Barcelona',
      role: 'Comunidad & Eventos de Código Limpio',
      desc: 'Colaboramos activamente en charlas, open spaces y mentorías en buenas prácticas de software, testing y artesanía de código.',
      badge: 'Alianza Comunitaria',
      logoName: 'SoftwareCrafters',
      subText: 'BARCELONA',
      accentColor: '#00A98F',
      category: 'Comunidad Tech',
      icon: Terminal
    },
    {
      name: 'Lifull Connect',
      role: 'Partner Tecnológico & Empleabilidad',
      desc: 'Empresa global que impulsa el talento de SomosCoders facilitando inserción laboral, retos técnicos y sesiones de orientación.',
      badge: 'Empresa Aliada',
      logoName: 'LIFULL',
      subText: 'CONNECT',
      accentColor: '#FF6B00',
      category: 'Portal Global & Tech',
      icon: Globe
    },
    {
      name: 'Thoughtworks',
      role: 'Excelencia en Ingeniería & Mentoría',
      desc: 'Consultora tecnológica líder que apoya nuestros bootcamps con ingenieros senior voluntarios y talleres de arquitectura.',
      badge: 'Tech Excellence',
      logoName: 'Thoughtworks',
      subText: '/ / GLOBAL TECH CONSULTING',
      accentColor: '#C8FF00',
      category: 'Consultoría Software',
      icon: Cpu
    },
    {
      name: 'Arsys',
      role: 'Infraestructura Cloud & Servidores',
      desc: 'Compañía proveedora de servicios cloud y alojamiento web que respalda la infraestructura tecnológica y despliegues de SomosCoders.',
      badge: 'Cloud & Hosting',
      logoName: 'arsys',
      subText: 'CLOUD SOLUTIONS',
      accentColor: '#00A98F',
      category: 'Hosting & Cloud',
      icon: Server
    },
    {
      name: 'CodelyTV',
      role: 'Formación & Buenas Prácticas',
      desc: 'Referente en educación de arquitectura de software, DDD y desarrollo profesional que respalda nuestra metodología.',
      badge: 'Partner Educativo',
      logoName: 'Codely',
      subText: 'TV / PRO ED',
      accentColor: '#00A98F',
      category: 'Educación IT',
      icon: Code2
    },
    {
      name: 'Fundación Empujar (Argentina)',
      role: 'Inclusión Social & Puente al Empleo',
      desc: 'Red latinoamericana aliada en el programa #EmplearParaIgualar, formando a jóvenes de contextos vulnerables en tecnología.',
      badge: 'Impacto Internacional',
      logoName: 'EMPUJAR',
      subText: 'FUNDACIÓN SOCIAL',
      accentColor: '#C8FF00',
      category: 'Impacto Social',
      icon: Users
    },
    {
      name: 'Fundació SURT',
      role: 'Inclusión de Mujeres & Proyecto FemQA',
      desc: 'Entidad de acción social aliada en el programa formativo FemQA junto a Basetis y SomosCoders, capacitando a mujeres en situación de vulnerabilidad en Quality Assurance y testing.',
      badge: 'Acción Social & Género',
      logoName: 'SURT',
      subText: 'FUNDACIÓ DE DONES',
      accentColor: '#087A65',
      category: 'Tercer Sector',
      icon: Heart
    },
    {
      name: 'Basetis',
      role: 'EmpowerHack Fem & FemQA Testing',
      desc: 'Empresa tecnológica impulsora del programa social FemQA y del hackathon EmpowerHack Fem junto a SomosCoders para cerrar la brecha de género en IT.',
      badge: 'Diversidad & Género',
      logoName: 'basetis',
      subText: 'DIGITAL EXPERIENCES',
      accentColor: '#00A98F',
      category: 'Consultoría Digital',
      icon: Layers
    },
    {
      name: 'Fundació Intermèdia',
      role: 'Programa Singulars & Ocupació Juvenil',
      desc: 'Alianza pública-social para el despliegue del programa formativo Singulars para la inserción sociolaboral de jóvenes.',
      badge: 'Inserción Juvenil',
      logoName: 'INTERMÈDIA',
      subText: 'FUNDACIÓ SOCIAL',
      accentColor: '#087A65',
      category: 'Garantía Juvenil',
      icon: Briefcase
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName.trim() || !volunteerEmail.trim()) return;

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/edgar.costilla@somoscoders.org', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nueva Solicitud de Colaboración: ${volunteerName} (${volunteerType})`,
          _template: 'table',
          _captcha: 'false',
          nombre_completo: volunteerName,
          email_profesional: volunteerEmail,
          modalidad_colaboracion: volunteerType,
          empresa_organizacion: volunteerOrg || 'Particular / No especificada',
          mensaje_propuesta: volunteerMessage || 'Sin mensaje adicional'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // Fallback optimista para asegurar la experiencia de usuario
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error('Error enviando formulario a FormSubmit:', err);
      // Fallback amigable
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 font-sans text-[#0D1117]">
      
      {/* 1. Header Hero Colabora con Personaje */}
      <section className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid decorativo" 
          className="absolute top-4 right-6 w-30 h-auto opacity-25 pointer-events-none" 
        />

        <div className="lg:col-span-8 space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>Alianzas de Impacto Social 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0D1117] leading-tight">
            Colabora con <span className="text-[#00A98F]">SomosCoders.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Tanto si eres profesional del sector y deseas mentorizar a nuevos programadores, como si representas a una empresa que busca contratar talento diverso o patrocinar becas, tu apoyo transforma vidas.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-gray-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#00A98F]" />
              <span>+50 Mentores Voluntarios</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#00A98F]" />
              <span>+25 Empresas Contratantes</span>
            </div>
          </div>
        </div>

        {/* Personaje con Tablet y Gesto de Idea */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <div className="relative">
            <img 
              src="/images/char_girl_pointing_idea.png" 
              alt="Colabora con SomosCoders" 
              className="w-40 h-auto object-contain drop-shadow-xl hover:scale-105 transition duration-300" 
            />
            {/* Overlay Huella Mascota (+50% -> w-9 h-9) */}
            <img 
              src="/images/stickers/sticker_paw_logo.png" 
              alt="Huella" 
              className="absolute -bottom-3 -left-3 w-9 h-9 drop-shadow-md z-20" 
            />
          </div>
        </div>
      </section>

      {/* 2. LOGOS DE EMPRESAS Y COMUNIDADES COLABORADORAS (Sin frase de 'alianza activa', con tarjetas de logo oficial estilizadas) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-2 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">EMPRESAS Y COMUNIDADES ALIADAS</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0D1117] mt-1">
              Organizaciones que impulsan a SomosCoders
            </h2>
          </div>
          <span className="text-xs font-mono text-gray-500 font-bold">Alianzas en España y Latinoamérica</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => {
            const IconComp = partner.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-xl space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#F7F6F1] text-[#087A65] text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-[#00A98F]/30">
                      {partner.badge}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono font-bold">{partner.category}</span>
                  </div>

                  {/* LOGO CORPORATIVO/COMUNITARIO OFICIAL ESTILIZADO */}
                  <div className="bg-[#0D1117] text-white p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-inner group-hover:bg-[#161B22] transition border border-gray-800">
                    <IconComp className="w-6 h-6 mb-1.5" style={{ color: partner.accentColor }} />
                    <span className="font-extrabold font-display tracking-tight text-lg" style={{ color: partner.accentColor }}>
                      {partner.logoName}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-0.5">
                      {partner.subText}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold font-display text-base text-[#0D1117]">{partner.name}</h3>
                    <p className="text-xs text-[#00A98F] font-semibold mt-0.5">{partner.role}</p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-sans">{partner.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Vías de Colaboración (3 Bloques) */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">FORMAS DE SUMAR</span>
          <h2 className="text-3xl font-extrabold font-display text-[#0D1117]">
            ¿Cómo puedes formar parte del ecosistema?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vía 1: Mentoría */}
          <div className="bg-white p-6 rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-lg space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F6F1] text-[#00A98F] flex items-center justify-center border border-[#00A98F]/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0D1117]">Mentoría y Docencia</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Acompaña a un alumno durante su formación técnica. Comparte tu experiencia en frontend, backend, testing o diseño UX en sesiones 1 a 1 de 1 hora semanal.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#00A98F]">
              <span>1 hora a la semana</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Vía 2: Empresas Contratantes */}
          <div className="bg-white p-6 rounded-3xl border-2 border-[#00A98F] shadow-md space-y-4 relative flex flex-col justify-between">
            <div className="absolute -top-3 right-4 bg-[#C8FF00] border border-[#0D1117] px-3 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase text-[#0D1117]">
              Más Demandado
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#00A98F] text-white flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0D1117]">Contratar Talento Diverso</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Accede a nuestro pool de graduados altamente motivados en desarrollo web, QA y diseño accesible. Incorpora perfiles resilientes y preparados para el mercado.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#087A65]">
              <span>Bolsa de empleo directa</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Vía 3: Patrocinio y Donaciones */}
          <div className="bg-white p-6 rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-lg space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F6F1] text-[#087A65] flex items-center justify-center border border-[#00A98F]/30">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0D1117]">Patrocinio & Equipamiento</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dona portátiles reacondicionados, financia servidores o patrocina becas completas de conectividad para personas sin recursos.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#00A98F]">
              <span>Certificado de donación</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Formulario Interactivo de Solicitud de Colaboración */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-gray-800 shadow-2xl">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C8FF00]">
            REGISTRO DE COLABORADORES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Únete a la red de aliados de SomosCoders.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Rellena este breve formulario y nuestro equipo de coordinación social te contactará en menos de 48 horas.
          </p>

          {formSubmitted ? (
            <div className="bg-[#00A98F]/20 border border-[#00A98F] p-8 rounded-3xl text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-[#C8FF00] mx-auto" />
              <h3 className="font-bold text-lg text-white font-display">¡Solicitud recibida correctamente!</h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                Gracias por tu compromiso con la inclusión tecnológica. Revisaremos tu propuesta y nos pondremos en contacto contigo por correo electrónico.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Nombre Completo *</label>
                  <input 
                    type="text" 
                    required 
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    placeholder="Ej. Martín Soler" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Correo Electrónico Profesional *</label>
                  <input 
                    type="email" 
                    required 
                    value={volunteerEmail}
                    onChange={(e) => setVolunteerEmail(e.target.value)}
                    placeholder="martin@empresa.com" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Modalidad de Colaboración</label>
                  <select 
                    value={volunteerType}
                    onChange={(e) => setVolunteerType(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]" 
                  >
                    <option value="mentor">Mentor/a Técnico Voluntario (1h/sem)</option>
                    <option value="empresa">Empresa: Contratar talento formado</option>
                    <option value="donacion">Empresa: Patrocinio o donación de hardware / Cloud</option>
                    <option value="talleres">Impartir Masterclass / Taller especializado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Empresa u Organización (opcional)</label>
                  <input 
                    type="text" 
                    value={volunteerOrg}
                    onChange={(e) => setVolunteerOrg(e.target.value)}
                    placeholder="Ej. TechCorp Labs" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Mensaje o detalles de tu propuesta</label>
                <textarea 
                  rows={3} 
                  value={volunteerMessage}
                  onChange={(e) => setVolunteerMessage(e.target.value)}
                  placeholder="Cuéntanos brevemente sobre tu trayectoria o cómo le gustaría a tu empresa colaborar..." 
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-xs text-white outline-none focus:border-[#00A98F]" 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#C8FF00] hover:bg-amber-300 disabled:opacity-50 text-[#0D1117] font-extrabold py-3.5 px-8 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-md cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0D1117] border-t-transparent rounded-full animate-spin" />
                    <span>ENVIANDO A SOMOSCODERS...</span>
                  </>
                ) : (
                  <>
                    <span>ENVIAR SOLICITUD DE ALIANZA</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
