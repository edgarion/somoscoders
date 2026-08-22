import React, { useState } from 'react';
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
  BookOpen,
  GraduationCap,
  Briefcase,
  Search
} from 'lucide-react';

interface TeamViewProps {
  onNavigate: (view: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<'todos' | 'mentores' | 'alumni' | 'referentes'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Cuadro 1: Lorena Criado y Jacobo Pedrosa
  const teamBox1 = {
    member1: {
      name: 'Lorena Criado',
      role: 'Coordinación, Estrategia & Diversidad',
      contribution: 'Impulsa la mentoría comunitaria, la inclusión de mujeres en el sector tecnológico y la coordinación pedagógica de los bootcamps accesibles en SomosCoders.',
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

  // Muro completo de Mentores, Fundadores, Referentes y Alumni con Skills y enlaces de LinkedIn
  const contributorsList = [
    // --- MENTORES & LIDERAZGO ---
    { 
      name: 'José Torres', 
      type: 'mentor',
      role: 'Agile Management & Resolución de Conflictos', 
      detail: 'Facilitación de dinámicas ágiles, mediación de equipos y metodologías Scrum aplicadas al desarrollo.',
      skills: ['Agile Management', 'Resolución de Conflictos', 'Scrum', 'Team Coaching'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Jose%20Torres%20Agile%20Management'
    },
    { 
      name: 'David Cruz', 
      type: 'mentor',
      role: 'Ingeniería de Software & Mentoría Técnica', 
      detail: 'Mentoría en desarrollo de software, testing de código y acompañamiento a estudiantes en retos reales.',
      skills: ['Software Engineering', 'Full Stack', 'Clean Code', 'Mentoría'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=David%20Cruz%20Software%20Engineer'
    },
    { 
      name: 'Sara Simon Willis', 
      type: 'mentor',
      role: 'Senior Software Engineer & Mentora Tech', 
      detail: 'Mentoría técnica avanzada en ingeniería de software, arquitectura de sistemas y acompañamiento a estudiantes en retos complejos.',
      skills: ['Software Engineering', 'System Architecture', 'Clean Code', 'Mentoría Técnica'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sara%20Simon%20Willis%20Software'
    },
    { 
      name: 'Gabriel Botana', 
      type: 'mentor',
      role: 'Arquitectura de Software & Full Stack', 
      detail: 'Asesoría en arquitectura web escalable, patrones de diseño y tutorías de código limpio.',
      skills: ['Software Architecture', 'Full Stack', 'JavaScript/TypeScript', 'Code Review'],
      linkedin: 'https://www.linkedin.com/in/gabriel-botana-/'
    },
    { 
      name: 'Karolina Ostrowska', 
      type: 'mentor',
      role: 'QA Testing & Aseguramiento de Calidad', 
      detail: 'Formación en metodologías de testing manual y automatizado para crear software robusto.',
      skills: ['Quality Assurance', 'Test Automation', 'Bug Tracking', 'A11y Testing'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Karolina%20Ostrowska%20QA'
    },
    { 
      name: 'Diego Córdoba', 
      type: 'mentor',
      role: 'Desarrollo Frontend & Formación Interactiva', 
      detail: 'Especialista en interfaces web dinámicas, frameworks modernos y preparación técnica para el empleo.',
      skills: ['Frontend Development', 'React', 'CSS/Tailwind', 'Web Standards'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Diego%20Cordoba%20Frontend'
    },
    { 
      name: 'Eudald Arraz', 
      type: 'mentor',
      role: 'Software Craftsman & TDD', 
      detail: 'Enseñanza de artesanía de software, desarrollo guiado por pruebas (TDD) y refactorización.',
      skills: ['Software Craftsmanship', 'TDD', 'Clean Architecture', 'Refactoring'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Eudald%20Software%20Craftsman'
    },
    { 
      name: 'Sofía Carballo', 
      type: 'mentor',
      role: 'Diseño UX/UI & Accesibilidad Frontend', 
      detail: 'Diseño de interfaces inclusivas, usabilidad digital y desarrollo de componentes accesibles.',
      skills: ['UI/UX Design', 'Figma', 'Web Accessibility (WCAG)', 'Design Systems'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sofia%20Carballo%20UX'
    },
    { 
      name: 'Renato Paolo', 
      type: 'mentor',
      role: 'Backend & Arquitectura de Datos', 
      detail: 'Tutorías en bases de datos, APIs REST y buenas prácticas de ingeniería en el lado servidor.',
      skills: ['Backend Development', 'Databases', 'API Design', 'Node.js/Python'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Renato%20Paolo%20Backend'
    },
    { 
      name: 'Israel Obando', 
      type: 'mentor',
      role: 'Desarrollo Full Stack & Mentoría', 
      detail: 'Acompañamiento integral en bootcamps intensivos, resolución de dudas y despliegues en producción.',
      skills: ['Full Stack Dev', 'Git/GitHub', 'CI/CD', 'Problem Solving'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Israel%20Obando%20Developer'
    },
    { 
      name: 'José Carlos Gil', 
      type: 'mentor',
      role: 'Ingeniería de Software & Algoritmos', 
      detail: 'Refuerzo de lógica computacional, estructura de datos y arquitectura de sistemas distribuidos.',
      skills: ['Algorithms', 'Data Structures', 'Software Design', 'Mentoría'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Jose%20Carlos%20Gil%20Software'
    },
    { 
      name: 'Javier Olano', 
      type: 'mentor',
      role: 'Cloud Engineering & DevOps', 
      detail: 'Infraestructura en la nube, servidores y automatización de despliegues para proyectos solidarios.',
      skills: ['Cloud Infrastructure', 'DevOps', 'Docker', 'Hosting Arsys'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Javier%20Olano%20DevOps'
    },
    { 
      name: 'Ángel Martínez', 
      type: 'mentor',
      role: 'Desarrollo Web & Calidad de Código', 
      detail: 'Testing unitario, integración continua y acompañamiento técnico a los graduados.',
      skills: ['Testing', 'JavaScript', 'Continuous Integration', 'Code Review'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Angel%20Martinez%20Developer'
    },
    { 
      name: 'Mateo Vásquez', 
      type: 'mentor',
      role: 'Desarrollo Web & Mentoría de Carrera', 
      detail: 'Preparación de portfolios, entrevistas técnicas y tutorías personalizadas de programación.',
      skills: ['Web Development', 'Career Coaching', 'Frontend', 'Portfolio Prep'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Mateo%20Vasquez%20Web%20Developer'
    },
    { 
      name: 'Joan Carazo', 
      type: 'mentor',
      role: 'Software Craftsman & Mentor Tech', 
      detail: 'Cultura de código mantenible, testing automatizado y ética profesional en el software.',
      skills: ['Software Craftsmanship', 'Clean Code', 'Automated Testing', 'Agile'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Joan%20Carazo%20Software'
    },
    { 
      name: 'Abraham Vallez', 
      type: 'mentor',
      role: 'Fundador & Divulgador Tech', 
      detail: 'Impulsor de la comunidad SomosCoders y divulgador en Software Crafters Barcelona sobre inclusión técnica.',
      skills: ['Community Leadership', 'Software Craftsmanship', 'Public Speaking', 'Inclusión'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Abraham%20Vallez%20SomosCoders'
    },

    // --- ALUMNI / GRADUADOS ---
    { 
      name: 'Mili Torres', 
      type: 'alumni',
      role: 'Alumni SomosCoders & QA Tester', 
      detail: 'Graduada del bootcamp #EmplearParaIgualar con Fundación Empujar. Especialista en QA testing y desarrollo web.',
      skills: ['QA Testing', 'Frontend Web', 'Scrum', 'Test Cases'],
      linkedin: 'https://www.linkedin.com/in/mili-torres/'
    },
    { 
      name: 'Fátima Benítez', 
      type: 'alumni',
      role: 'Alumni & Junior Frontend Developer', 
      detail: 'Reconversión profesional exitosa a través de SomosCoders. Actualmente desarrolladora frontend.',
      skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Responsive Design'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Fatima%20Benitez%20Developer'
    },
    { 
      name: 'Alejandro Morales', 
      type: 'alumni',
      role: 'Alumni & QA Automation Engineer', 
      detail: 'Graduado especializado en accesibilidad digital y automatización de pruebas de software.',
      skills: ['QA Automation', 'Cypress/Selenium', 'WCAG Accessibility', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Alejandro%20Morales%20QA%20Automation'
    },

    // --- REFERENTES CIENTÍFICOS & TECNOLÓGICOS HOMENAJEADOS ---
    { 
      name: 'Juan José Montiel', 
      type: 'referentes',
      role: 'Senior Software Engineer en Microsoft & Líder en Accesibilidad', 
      detail: 'Referente internacional en accesibilidad universal (a11y), desarrollo inclusivo y eliminación de barreras digitales.',
      skills: ['Accessibility (a11y)', 'Inclusive Design', 'Microsoft Tech', 'Assistive Technologies'],
      linkedin: 'https://www.linkedin.com/in/juanjomontiel/'
    },
    { 
      name: 'Barbara Liskov', 
      type: 'referentes',
      role: 'Premio Turing & Pionera de la Computación', 
      detail: 'Creadora del Principio de Sustitución de Liskov (L en SOLID), pilar fundamental del diseño de software orientado a objetos.',
      skills: ['Liskov Substitution Principle', 'SOLID', 'Type Theory', 'Computer Science'],
      linkedin: 'https://en.wikipedia.org/wiki/Barbara_Liskov'
    },
    { 
      name: 'Jeannette Marie Wing', 
      type: 'referentes',
      role: 'Pionera del Pensamiento Computacional & Catedrática', 
      detail: 'Referente mundial en la divulgación del pensamiento computacional como habilidad universal para todas las personas.',
      skills: ['Computational Thinking', 'Formal Methods', 'CS Education', 'Data Science'],
      linkedin: 'https://en.wikipedia.org/wiki/Jeannette_Wing'
    },
    { 
      name: 'Rebecca Parsons', 
      type: 'referentes',
      role: 'CTO Emérita de Thoughtworks & Diversidad Tech', 
      detail: 'Líder en arquitectura de software evolutiva, excelencia en ingeniería y fomento de mujeres y colectivos diversos en STEM.',
      skills: ['Evolutionary Architecture', 'Tech Leadership', 'Diversity in Tech', 'Software Strategy'],
      linkedin: 'https://www.linkedin.com/in/rebeccaparsons/'
    }
  ];

  const filteredContributors = contributorsList.filter((person) => {
    const matchesFilter = filterCategory === 'todos' ? true : person.type === filterCategory;
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          person.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
            Equipo, Mentores & <span className="text-[#00A98F]">Alumni.</span>
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

      {/* 3. Muro de Agradecimiento a Mentores, Alumni, Fundadores y Referentes de somoscoders.org */}
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
            <span>Muro de Gratitud & Red de Talento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Agradecimiento a quienes hacen grande a <span className="text-[#C8FF00]">SomosCoders.org</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            A cada mentor voluntario, estudiante graduado (alumni), fundador y pionero de la computación: <span className="text-white font-bold">vuestro talento, generosidad y compromiso social transforman vidas cada día.</span>
          </p>

          {/* Filtros de Categoría y Buscador */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'mentores', label: 'Mentores & Líderes' },
                { id: 'alumni', label: 'Alumni Graduados' },
                { id: 'referentes', label: 'Pioneros & Referentes' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-sans transition cursor-pointer ${
                    filterCategory === tab.id
                      ? 'bg-[#00A98F] text-white shadow-sm'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre o skill..."
                className="w-full bg-gray-900 border border-gray-700 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-gray-500 outline-none focus:border-[#00A98F]"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Grid / Muro de Personas con Skills y Enlace de LinkedIn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10 pt-2">
          {filteredContributors.map((person, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/90 border border-gray-800 p-5 rounded-2xl space-y-3 hover:border-[#00A98F] transition-all duration-200 hover:bg-gray-800/80 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {person.type === 'alumni' ? (
                      <GraduationCap className="w-4 h-4 text-[#00A98F] shrink-0" />
                    ) : person.type === 'referentes' ? (
                      <Sparkles className="w-4 h-4 text-[#C8FF00] shrink-0" />
                    ) : (
                      <Star className="w-4 h-4 text-[#C8FF00] fill-[#C8FF00] shrink-0" />
                    )}
                    <h4 className="font-bold text-sm text-white font-display leading-tight">{person.name}</h4>
                  </div>
                  
                  {/* Botón LinkedIn */}
                  <a 
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#C8FF00] p-1 rounded hover:bg-gray-800 transition shrink-0"
                    title={`Ver perfil de LinkedIn de ${person.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#00A98F] font-semibold">{person.role}</p>
                <p className="text-[11px] text-gray-400 font-sans leading-relaxed">{person.detail}</p>
              </div>

              {/* Skills Tags */}
              <div className="pt-2 border-t border-gray-800/60 flex flex-wrap gap-1.5">
                {person.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-gray-800/90 text-gray-300 border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cita de agradecimiento */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono relative z-10">
          <span>❤️ Gracias por democratizar el código y abrir oportunidades reales.</span>
          <button 
            onClick={() => onNavigate('colabora')}
            className="text-[#C8FF00] hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>¿Quieres sumar como mentor/a o empresa?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
