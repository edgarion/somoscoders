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
  Star
} from 'lucide-react';

interface TeamViewProps {
  onNavigate: (view: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onNavigate }) => {
  // Miembros principales del equipo impulsor y técnico
  const coreTeam = [
    {
      name: 'Lorena Criado',
      role: 'Coordinación, Estrategia & Diversidad',
      contribution: 'Impulsa la mentoría comunitaria, la inclusión de mujeres en el sector tecnológico y la coordinación de programas y bootcamps accesibles en SomosCoders.',
      badge: 'Equipo Núcleo',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lorena%20Criado%20SomosCoders',
      accent: '#00A98F',
      specialty: 'Diversidad & Coordinación Pedagógica'
    },
    {
      name: 'Lucas Salvatori',
      role: 'Ingeniería de Software & Mentoría Técnica',
      contribution: 'Diseño de itinerarios formativos en desarrollo web moderno, arquitectura de aplicaciones y acompañamiento directo a los alumnos en retos de código.',
      badge: 'Equipo Técnico',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lucas%20Salvatori%20SomosCoders',
      accent: '#C8FF00',
      specialty: 'Full Stack & Arquitectura Web'
    },
    {
      name: 'Edgar Costilla',
      role: 'Liderazgo de Producto & Desarrollo Plataforma',
      contribution: 'Desarrollo de la experiencia de usuario accesible, arquitectura digital y despliegue del ecosistema de aprendizaje interactivo de SomosCoders.',
      badge: 'Equipo Núcleo',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Edgar%20Costilla%20SomosCoders',
      accent: '#00A98F',
      specialty: 'Producto, UI/UX & Plataforma'
    },
    {
      name: 'Jacobo Pedrosa',
      role: 'Especialista en IA, Testing & Mentoría Senior',
      contribution: 'Impartición de masterclasses, mentorías avanzadas en buenas prácticas de ingeniería, testing automatizado y adopción de IA con impacto social.',
      badge: 'Mentoría Senior',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Jacobo%20Pedrosa%20SomosCoders',
      accent: '#087A65',
      specialty: 'Inteligencia Artificial & Calidad'
    }
  ];

  // Listado de personas, colaboradores y mentores que han pasado por somoscoders.org
  const contributorsList = [
    { name: 'Abraham Vallez', role: 'Fundador & Divulgador Tech', org: 'Software Crafters BCN / SomosCoders' },
    { name: 'Mili Torres', role: 'Alumni & QA Tester', org: 'Graduada Bootcamp & Fundación Empujar' },
    { name: 'Fátima Benítez', role: 'Alumni Frontend', org: 'Reconversión Laboral' },
    { name: 'Alejandro Morales', role: 'Alumni QA Automation', org: 'Inclusión & Accesibilidad Digital' },
    { name: 'Martín Soler', role: 'Mentor de JavaScript y React', org: 'Comunidad Voluntaria' },
    { name: 'Elena Gómez', role: 'Mentora de Diseño UX/UI', org: 'Voluntariado Social' },
    { name: 'Carlos Mendoza', role: 'Tutor de Backend & Node.js', org: 'Software Craftsmanship' },
    { name: 'Nuria Valls', role: 'Coordinadora de Inserción', org: 'Alianzas Tercer Sector' },
    { name: 'Sebastián Ramos', role: 'Mentor de Algoritmos & Git', org: 'Comunidad Open Source' },
    { name: 'Lucía Fernández', role: 'Docente de Fundamentos Web', org: 'Voluntaria Docente' },
    { name: 'Diego Romero', role: 'Facilitador de Retos Técnicos', org: 'Comunidad IT' },
    { name: 'Paula Giménez', role: 'Mentora de Calidad & QA', org: 'FemQA / Basetis' },
    { name: 'Andrés Morales', role: 'Tutor de Accesibilidad Web (a11y)', org: 'Inclusión Digital' },
    { name: 'Camila Navarro', role: 'Coordinadora de Empleabilidad', org: 'Fundación Empujar' },
    { name: 'Javier Domínguez', role: 'Mentor de Cloud & DevOps', org: 'Comunidad Arsys / Tech' },
    { name: 'Mariana Silva', role: 'Mentora de Python & Data', org: 'Voluntaria Tech' }
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

      {/* 2. Ilustraciones del Equipo y Perfiles Clave */}
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

        {/* Grid con las 2 Ilustraciones Oficiales del Equipo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card Ilustración 1: Lorena Criado y Lucas Salvatori */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-6 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-[#F7F6F1] border border-gray-200/80 p-2 flex items-center justify-center">
              <img 
                src="/images/team_lorena_lucas.jpg" 
                alt="Lorena Criado y Lucas Salvatori - SomosCoders" 
                className="w-full h-auto object-cover rounded-xl drop-shadow-sm hover:scale-[1.02] transition duration-300" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Lorena Criado */}
              <div className="space-y-2.5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-100 sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <span className="bg-[#00A98F]/10 text-[#087A65] text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full">
                    {coreTeam[0].badge}
                  </span>
                  <a 
                    href={coreTeam[0].linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Lorena Criado"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{coreTeam[0].name}</h3>
                <p className="text-xs text-[#00A98F] font-bold">{coreTeam[0].role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{coreTeam[0].contribution}</p>
              </div>

              {/* Lucas Salvatori */}
              <div className="space-y-2.5 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <span className="bg-[#C8FF00]/40 text-[#0D1117] text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full">
                    {coreTeam[1].badge}
                  </span>
                  <a 
                    href={coreTeam[1].linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Lucas Salvatori"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{coreTeam[1].name}</h3>
                <p className="text-xs text-[#00A98F] font-bold">{coreTeam[1].role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{coreTeam[1].contribution}</p>
              </div>
            </div>
          </div>

          {/* Card Ilustración 2: Edgar Costilla y Jacobo Pedrosa */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-6 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-[#F7F6F1] border border-gray-200/80 p-2 flex items-center justify-center">
              <img 
                src="/images/team_edgar_jacobo.jpg" 
                alt="Edgar Costilla y Jacobo Pedrosa - SomosCoders" 
                className="w-full h-auto object-cover rounded-xl drop-shadow-sm hover:scale-[1.02] transition duration-300" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Edgar Costilla */}
              <div className="space-y-2.5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-100 sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <span className="bg-[#00A98F]/10 text-[#087A65] text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full">
                    {coreTeam[2].badge}
                  </span>
                  <a 
                    href={coreTeam[2].linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Edgar Costilla"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{coreTeam[2].name}</h3>
                <p className="text-xs text-[#00A98F] font-bold">{coreTeam[2].role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{coreTeam[2].contribution}</p>
              </div>

              {/* Jacobo Pedrosa */}
              <div className="space-y-2.5 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <span className="bg-purple-100 text-purple-800 text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full">
                    {coreTeam[3].badge}
                  </span>
                  <a 
                    href={coreTeam[3].linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Jacobo Pedrosa"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{coreTeam[3].name}</h3>
                <p className="text-xs text-[#00A98F] font-bold">{coreTeam[3].role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{coreTeam[3].contribution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Muro de Agradecimiento a Todas las Personas que han pasado por somoscoders.org */}
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
            <span>Comunidad & Gratitud Eterna</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Agradecimiento a quienes hacen posible <span className="text-[#C8FF00]">SomosCoders.org</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            A cada mentor voluntario, estudiante, empresa aliada y colaborador que ha dedicado su tiempo, sus ganas y su conocimiento a la comunidad: <span className="text-white font-bold">este proyecto existe y crece gracias a todos vosotros.</span>
          </p>
        </div>

        {/* Listado / Muro de Personas y Mentores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10 pt-2">
          {contributorsList.map((person, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/90 border border-gray-800 p-4 rounded-2xl space-y-1.5 hover:border-[#00A98F] transition hover:bg-gray-800/80"
            >
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-[#C8FF00] fill-[#C8FF00]" />
                <h4 className="font-bold text-sm text-white font-display">{person.name}</h4>
              </div>
              <p className="text-xs text-[#00A98F] font-medium">{person.role}</p>
              <p className="text-[10px] text-gray-400 font-mono">{person.org}</p>
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
