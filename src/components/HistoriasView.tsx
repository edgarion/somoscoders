import React from 'react';
import { 
  Quote, 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Sparkles, 
  Heart, 
  ExternalLink,
  Award,
  GraduationCap,
  Linkedin,
  Video,
  Play
} from 'lucide-react';

interface HistoriasViewProps {
  onNavigate: (view: string) => void;
}

export const HistoriasView: React.FC<HistoriasViewProps> = ({ onNavigate }) => {
  const stories = [
    {
      id: 'mili-torres',
      name: 'Mili Torres',
      age: 26,
      role: 'Desarrolladora Web & QA Tester',
      background: 'Capacitada por SomosCoders en alianza con Fundación Empujar',
      program: 'Bootcamp Full Stack & Inserción Laboral IT',
      quote: 'SomosCoders y la Fundación Empujar me abrieron las puertas al mundo de la tecnología desde cero. Gracias al acompañamiento técnico y las mentorías, pude transformar mi vocación en mi profesión.',
      image: '/images/avatars/avatar_girl_headphones.png',
      badge: 'Alumni Destacada',
      time: 'Graduada SomosCoders',
      linkedin: 'https://www.linkedin.com/in/mili-torres/'
    },
    {
      id: 'fatima-frontend',
      name: 'Fátima Benítez',
      age: 27,
      role: 'Junior Frontend Developer en Globant',
      background: 'Participante en programas de reconversión profesional',
      program: 'Bootcamp Full Stack & Vibe Coding',
      quote: 'SomosCoders no solo me enseñó a picar código; me dio una red de mentores que creyeron en mí cuando yo misma dudaba. Hoy tengo estabilidad y un trabajo que me apasiona.',
      image: '/images/avatars/avatar_girl_ponytail.png',
      badge: 'Inserción Laboral',
      time: 'Graduada 2025'
    },
    {
      id: 'alejandro-qa',
      name: 'Alejandro Morales',
      age: 34,
      role: 'QA Automation Engineer en NTT DATA',
      background: 'Persona con diversidad auditiva y reconversión profesional',
      program: 'QA Testing y Accesibilidad Digital',
      quote: 'La accesibilidad de la plataforma y el apoyo personalizado me permitieron formarme a mi ritmo sin ninguna barrera de comunicación. Ahora audito la accesibilidad del software de grandes clientes.',
      image: '/images/avatars/avatar_boy_beanie.png',
      badge: 'Inclusión & A11y',
      time: 'Graduado 2025'
    }
  ];

  const youtubeContent = [
    {
      title: 'Charla en Software Crafters Barcelona: Inclusión, Comunidad y Código',
      speaker: 'Abraham Vallez & Equipo SomosCoders',
      duration: '42 min',
      url: 'https://www.youtube.com/@somoscoders8996',
      badge: 'Software Crafters BCN',
      desc: 'Ponencia sobre cómo democratizar el aprendizaje técnico y tender puentes de empleabilidad para colectivos diversos.'
    },
    {
      title: 'Graduación y Demo Day: Proyectos con Impacto Social',
      speaker: 'Estudiantes & Mentores SomosCoders',
      duration: '28 min',
      url: 'https://www.youtube.com/@somoscoders8996',
      badge: 'Demo Day',
      desc: 'Presentación en vivo de las aplicaciones web y soluciones accesibles creadas por los alumnos del bootcamp.'
    }
  ];

  return (
    <div className="space-y-16 font-sans text-[#0D1117]">
      
      {/* 1. Header Hero Historias de Éxito */}
      <section className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute top-4 right-6 w-30 h-auto opacity-25 pointer-events-none" 
        />

        <div className="lg:col-span-8 space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>Historias Reales & Perfiles Capacitados</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0D1117] leading-tight">
            Historias que <span className="text-[#00A98F]">inspiran.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Detrás de cada línea de código hay una persona que decidió transformar su realidad. Conoce los testimonios reales de graduados capacitados por SomosCoders y la Fundación Empujar en el sector IT.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <div>
              <span className="text-3xl font-extrabold font-display text-[#00A98F] block">65%</span>
              <span className="text-xs font-mono text-gray-500 uppercase">Tasa de Inserción</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <span className="text-3xl font-extrabold font-display text-[#087A65] block">&lt; 4 meses</span>
              <span className="text-xs font-mono text-gray-500 uppercase">Tiempo medio hasta el empleo</span>
            </div>
          </div>
        </div>

        {/* Personaje con laptop y bocadillo { } */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <div className="relative">
            <img 
              src="/images/char_boy_coder_braces.png" 
              alt="Graduado de SomosCoders" 
              className="w-40 h-auto object-contain drop-shadow-xl hover:scale-105 transition duration-300" 
            />
            {/* Overlay Bocadillo Terminal (+50% -> w-12) */}
            <img 
              src="/images/stickers/sticker_speech_terminal.png" 
              alt="Terminal" 
              className="absolute -top-4 -right-4 w-12 h-auto drop-shadow-md z-20" 
            />
          </div>
        </div>
      </section>

      {/* 2. Grid de Historias Reales con Enlace a LinkedIn */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-2 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">TESTIMONIOS Y TRAYECTORIAS</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0D1117] mt-1">
              Personas Capacitadas en SomosCoders
            </h2>
          </div>
          <a 
            href="https://es.linkedin.com/company/somoscoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A98F] hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            <span>Ver comunidad en LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article 
              key={story.id} 
              className="bg-white p-7 rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="bg-[#F7F6F1] text-[#087A65] text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-[#00A98F]/30">
                    {story.badge}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">{story.time}</span>
                </div>

                <div className="flex items-center gap-3.5 pt-2">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-14 h-14 rounded-full border-2 border-[#00A98F] object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-bold text-base font-display text-[#0D1117] leading-tight">{story.name}</h3>
                    <p className="text-xs text-[#00A98F] font-semibold mt-0.5">{story.role}</p>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">{story.background}</p>
                  </div>
                </div>

                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-[#C8FF00] fill-[#C8FF00] mb-2" />
                  <p className="text-xs text-gray-700 leading-relaxed font-sans italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>{story.program}</span>
                {story.linkedin ? (
                  <a 
                    href={story.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 hover:bg-[#F7F6F1] rounded-lg transition"
                    title="Ver perfil de LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                ) : (
                  <Sparkles className="w-4 h-4 text-[#00A98F]" />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Sección YouTube Oficial de SomosCoders */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 border-2 border-gray-800 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-mono font-bold">
              <Video className="w-4 h-4 text-red-500" />
              <span>Canal Oficial de YouTube</span>
            </div>
            <h2 className="text-3xl font-extrabold font-display leading-tight">
              Charlas, Masterclasses y Eventos en Vídeo
            </h2>
          </div>
          <a 
            href="https://www.youtube.com/@somoscoders8996" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-sm"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Ver Canal @somoscoders8996</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeContent.map((vid, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-3xl border border-gray-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00A98F]/20 text-[#00A98F]">
                  {vid.badge}
                </span>
                <h3 className="font-bold text-lg font-display text-white">{vid.title}</h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">{vid.desc}</p>
              </div>
              <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span>{vid.speaker}</span>
                <span className="font-mono text-[#C8FF00]">{vid.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Call to Action Social */}
      <section className="bg-[#C8FF00] p-8 sm:p-12 rounded-3xl border-2 border-[#0D1117] text-[#0D1117] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[6px_6px_0px_#0D1117]">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087A65]">
            TU HISTORIA EMPIEZA AQUÍ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            ¿Listo para escribir tu propio capítulo en el sector tecnológico?
          </h2>
          <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
            Inscríbete hoy en nuestros cursos gratuitos de desarrollo web, IA y testing con acompañamiento de mentores en activo.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('cursos')}
              className="inline-flex items-center gap-2 bg-[#0D1117] hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-md cursor-pointer"
            >
              <span>EXPLORAR CURSOS GRATUITOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <img 
            src="/images/char_boy_celebrating_win.png" 
            alt="Celebra tu éxito con SomosCoders" 
            className="w-30 h-auto object-contain drop-shadow-xl" 
          />
        </div>
      </section>

    </div>
  );
};
