import React from 'react';
import { 
  Heart, 
  Linkedin, 
  Sparkles, 
  Users, 
  Code2, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Terminal,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Star,
  BookOpen
} from 'lucide-react';

interface TeamViewProps {
  onNavigate: (view: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onNavigate }) => {
  // Cuadro 1: Lorena Criado y Jacobo Pedrosa
  const teamBox1 = {
    member1: {
      name: 'Lorena Criado',
      role: 'Coordinación, Estrategia & Diversidad',
      contribution: 'Impulsa la mentoría comunitaria, la inclusión de mujeres en el sector tecnológico y la coordinación de programas y bootcamps accesibles en SomosCoders.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lorena%20Criado%20SomosCoders'
    },
    member2: {
      name: 'Jacobo Pedrosa',
      role: 'Especialista en IA, Testing & Mentoría Senior',
      contribution: 'Impartición de masterclasses, mentorías avanzadas en buenas prácticas de ingeniería, testing automatizado y adopción de IA con impacto social.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Jacobo%20Pedrosa%20SomosCoders'
    }
  };

  // Cuadro 2: Lucas Salvatori y Edgar Costilla (el chico de canas es Edgar Costilla)
  const teamBox2 = {
    member1: {
      name: 'Lucas Salvatori',
      role: 'Ingeniería de Software & Mentoría Técnica',
      contribution: 'Diseño de itinerarios formativos en desarrollo web moderno, arquitectura de aplicaciones y acompañamiento directo a los alumnos en retos de código.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lucas%20Salvatori%20SomosCoders'
    },
    member2: {
      name: 'Edgar Costilla',
      role: 'Liderazgo de Producto, UI/UX & Plataforma',
      contribution: 'Desarrollo de la experiencia de usuario accesible, arquitectura digital y despliegue del ecosistema de aprendizaje interactivo de SomosCoders.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Edgar%20Costilla%20SomosCoders'
    }
  };

  // Muro de Agradecimientos completo con todos los mentores, fundadores y referentes indicados
  const contributorsList = [
    { name: 'David Cruz', role: 'Mentor & Ingeniero de Software', detail: 'Mentoría técnica y acompañamiento en desarrollo' },
    { name: 'Rosa Pali', role: 'Mentora & Coordinación', detail: 'Apoyo a estudiantes y fomento de la diversidad' },
    { name: 'Gabriel Botana', role: 'Mentor de Software & Arquitectura', detail: 'Buenas prácticas y tutoría de proyectos' },
    { name: 'Karolina Ostrowska', role: 'Mentora Tech & QA', detail: 'Calidad de software y testing inclusivo' },
    { name: 'Diego Córdoba', role: 'Mentor & Desarrollador Web', detail: 'Formación frontend y retos interactivos' },
    { name: 'Eudald Arraz', role: 'Mentor & Craftsmanship', detail: 'Artesanía de código y testing guiado' },
    { name: 'Sofía Carballo', role: 'Mentora de Frontend & UI', detail: 'Diseño accesible y desarrollo web moderno' },
    { name: 'Renato Paolo', role: 'Mentor de Backend & Sistemas', detail: 'Lógica de datos y tutorías 1 a 1' },
    { name: 'Israel Obando', role: 'Mentor & Desarrollador Full Stack', detail: 'Acompañamiento en bootcamps técnicos' },
    { name: 'José Torres', role: 'Mentor de Programación', detail: 'Fundamentos de código y resolución de dudas' },
    { name: 'José Carlos Gil', role: 'Mentor de Software & Algoritmos', detail: 'Arquitectura limpia y mentoría continua' },
    { name: 'Javier Olano', role: 'Mentor & Ingeniero Cloud', detail: 'Despliegues, DevOps e infraestructura' },
    { name: 'Ángel Martínez', role: 'Mentor de Desarrollo & Calidad', detail: 'Testing automatizado y revisión de código' },
    { name: 'Mateo Vásquez', role: 'Mentor de Desarrollo Web', detail: 'Tutorías prácticas y preparación laboral' },
    { name: 'Joan Carazo', role: 'Mentor & Software Craftsman', detail: 'Cultura de código limpio y testing' },
    { name: 'Juan José Montiel', role: 'Referente en Accesibilidad Digital (a11y) & Microsoft', detail: 'Inspiración y mentoría en tecnología universal sin barreras' },
    { name: 'Barbara Liskov', role: 'Pionera de la Computación (Principio Liskov - SOLID)', detail: 'Referente teórica y homenaje por sus aportes fundamentales al software' },
    { name: 'Jeannette Marie Wing', role: 'Pionera del Pensamiento Computacional', detail: 'Inspiración metodológica para enseñar a razonar con código' },
    { name: 'Rebecca Parsons', role: 'CTO Emérita de Thoughtworks & Diversidad Tech', detail: 'Referente en liderazgo técnico inclusivo y arquitectura evolutiva' },
    { name: 'Abraham Vallez', role: 'Fundador & Divulgador Tech', detail: 'Impulsor de la comunidad y ponente en Software Crafters BCN' }
  ];

  return (
    <div className="space-y-16 font-sans text-[#0D1117]">
      
      {/* 1. Header Hero Equipo */}
      <section className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        {/* Overlay Cuadrícula de cruces (+50%) */}
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute top-4 right-6 w-30 h-auto opacity-25 pointer-events-none" 
        />

        <div className="lg:col-span-8 space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>El Alma de SomosCoders</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0D1117] leading-tight">
            Equipo & <span className="text-[#00A98F]">Colaboradores.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Personas apasionadas por la tecnología y el impacto social que dedican su conocimiento, tiempo y energía para hacer de la programación un puente accesible de transformación vital.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-gray-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#00A98F]" />
              <span>100% Sin Ánimo de Lucro</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#00A98F]" />
              <span>Comunidad Open Source</span>
            </div>
          </div>
        </div>

        {/* Overlay Huella Mascota (+50%) */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <div className="relative">
            <img 
              src="/images/stickers/sticker_paw_logo.png" 
              alt="SomosCoders Mascot Paw" 
              className="w-28 h-28 object-contain drop-shadow-xl hover:scale-105 transition" 
            />
          </div>
        </div>
      </section>

      {/* 2. Ilustraciones del Equipo y Perfiles Clave (Sin etiquetas, descripciones agrupadas) */}
      <section className="space-y-10">
        <div className="text-left space-y-2 pb-2 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">EQUIPO IMPULSOR Y TÉCNICO</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0D1117] mt-1">
              Quienes lideran y acompañan el proyecto
            </h2>
          </div>
          <a 
            href="https://es.linkedin.com/company/somoscoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A98F] hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            <span>SomosCoders en LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid con los 2 Cuadros Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CUADRO 1: Lorena Criado y Jacobo Pedrosa */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-6 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden bg-[#F7F6F1] border border-gray-200/80 p-2 flex items-center justify-center">
              <img 
                src="/images/team_lorena_lucas.jpg" 
                alt="Lorena Criado y Jacobo Pedrosa - SomosCoders" 
                className="w-full h-auto object-cover rounded-xl drop-shadow-sm hover:scale-[1.02] transition duration-300" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Lorena Criado */}
              <div className="space-y-2.5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-100 sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox1.member1.name}</h3>
                  <a 
                    href={teamBox1.member1.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Lorena Criado"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox1.member1.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox1.member1.contribution}</p>
              </div>

              {/* Jacobo Pedrosa */}
              <div className="space-y-2.5 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox1.member2.name}</h3>
                  <a 
                    href={teamBox1.member2.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Jacobo Pedrosa"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox1.member2.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox1.member2.contribution}</p>
              </div>
            </div>
          </div>

          {/* CUADRO 2: Lucas Salvatori y Edgar Costilla (el chico de canas es Edgar Costilla) */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-6 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden bg-[#F7F6F1] border border-gray-200/80 p-2 flex items-center justify-center">
              <img 
                src="/images/team_edgar_jacobo.jpg" 
                alt="Lucas Salvatori y Edgar Costilla - SomosCoders" 
                className="w-full h-auto object-cover rounded-xl drop-shadow-sm hover:scale-[1.02] transition duration-300" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Lucas Salvatori */}
              <div className="space-y-2.5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-100 sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox2.member1.name}</h3>
                  <a 
                    href={teamBox2.member1.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Lucas Salvatori"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox2.member1.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox2.member1.contribution}</p>
              </div>

              {/* Edgar Costilla (el chico de canas) */}
              <div className="space-y-2.5 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox2.member2.name}</h3>
                  <a 
                    href={teamBox2.member2.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Edgar Costilla"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox2.member2.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox2.member2.contribution}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Muro de Agradecimiento a Mentores, Fundadores y Referentes de somoscoders.org */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 border-2 border-gray-800 space-y-8 relative overflow-hidden shadow-2xl">
        {/* Overlay Grid */}
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute -bottom-8 -left-8 w-36 h-auto opacity-10 pointer-events-none" 
        />

        <div className="space-y-4 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono font-bold">
            <Heart className="w-4 h-4 fill-[#C8FF00]" />
            <span>Muro de Gratitud & Referentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Agradecimiento a quienes inspiran e impulsan <span className="text-[#C8FF00]">SomosCoders.org</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            A cada mentor, voluntario, fundador y referente científico del mundo del software que ha guiado nuestros pasos: <span className="text-white font-bold">vuestro legado y generosidad hacen posible esta comunidad.</span>
          </p>
        </div>

        {/* Listado / Muro de Personas, Mentores y Referentes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10 pt-2">
          {contributorsList.map((person, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/90 border border-gray-800 p-4 rounded-2xl space-y-1.5 hover:border-[#00A98F] transition hover:bg-gray-800/80"
            >
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#C8FF00] fill-[#C8FF00] shrink-0" />
                <h4 className="font-bold text-sm text-white font-display leading-tight">{person.name}</h4>
              </div>
              <p className="text-xs text-[#00A98F] font-semibold">{person.role}</p>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">{person.detail}</p>
            </div>
          ))}
        </div>

        {/* Cita de agradecimiento */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono relative z-10">
          <span>❤️ Gracias por democratizar el código y abrir oportunidades reales.</span>
          <button 
            onClick={() => onNavigate('colabora')}
            className="text-[#C8FF00] hover:underline font-bold flex items-center gap-1"
          >
            <span>¿Quieres sumar como mentor/a o empresa?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
