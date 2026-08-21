import React, { useState } from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  Zap, 
  Users, 
  Award, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Search, 
  Heart, 
  HeartHandshake,
  CheckCircle,
  Laptop
} from 'lucide-react';
import { Course, CourseCategory } from '../types';

interface HomeViewProps {
  courses: Course[];
  onNavigate: (view: string) => void;
  onSetSelectedCourseSlug: (slug: string) => void;
  onSetCategoryFilter: (category: CourseCategory | undefined) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  courses,
  onNavigate,
  onSetSelectedCourseSlug,
  onSetCategoryFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 4 main categories list with description + course counts
  const categories: { key: CourseCategory; name: string; desc: string; count: number; color: string; bg: string; border: string }[] = [
    { 
      key: 'ux', 
      name: 'UX Design', 
      desc: 'Diseña experiencias accesibles y centradas en el usuario.', 
      count: 3, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50', 
      border: 'border-amber-200' 
    },
    { 
      key: 'vibe-coding', 
      name: 'Vibe Coding', 
      desc: 'Programa con bienestar y asistencia de Inteligencia Artificial creativa.', 
      count: 4, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50', 
      border: 'border-purple-200' 
    },
    { 
      key: 'qa', 
      name: 'QA Testing', 
      desc: 'Analiza requerimientos, detecta errores y asegura calidad técnica.', 
      count: 3, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50', 
      border: 'border-emerald-200' 
    },
    { 
      key: 'testing', 
      name: 'Testing', 
      desc: 'Automatiza pruebas exhaustivas con Cypress, Jest y APIs.', 
      count: 4, 
      color: 'text-indigo-600', 
      bg: 'bg-indigo-50', 
      border: 'border-indigo-200' 
    }
  ];

  const handleCategorySelect = (cat: CourseCategory) => {
    onSetCategoryFilter(cat);
    onNavigate('cursos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseClick = (slug: string) => {
    onSetSelectedCourseSlug(slug);
    onNavigate(`curso-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get only first 4 courses for the featured section
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-transparent pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Info */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold leading-none bg-amber-100 text-amber-950 font-mono tracking-wide uppercase">
                <Sparkles className="w-4 h-4 fill-amber-300 stroke-amber-800" />
                <span>Bootcamp de Acceso Gratuito & 100% Inclusivo</span>
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Aprende tecnología <span className="text-amber-500 underline decoration-amber-300 decoration-wavy py-1">sin límites</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Plataforma de e-learning inclusiva de <strong>SomosCoders</strong>. Cursos diseñados y adaptados de UX Design, Vibe Coding, QA y Testing para impulsar tu carrera en la industria del software.
              </p>

              {/* Direct Search Bar */}
              <div className="pt-2 max-w-md mx-auto lg:mx-0">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSetCategoryFilter(undefined);
                    onNavigate('cursos');
                  }}
                  className="flex items-center bg-white border-2 border-gray-200 rounded-xl p-1 shadow-sm focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-200 transition-all"
                >
                  <Search className="w-5 h-5 text-gray-400 ml-3" />
                  <input 
                    type="text" 
                    placeholder="¿Qué habilidad quieres aprender hoy?..." 
                    className="w-full text-sm py-2 px-3 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition"
                  >
                    Buscar
                  </button>
                </form>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-6 py-3.5 rounded-xl transition shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Explorar Cursos</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('sobre-nosotros')}
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 transition"
                >
                  <span>Conocer SomosCoders</span>
                </button>
              </div>
            </div>

            {/* Hero Right Graph representation (Vector aesthetic) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl bg-amber-400 p-3.5 rotate-2 shadow-xl hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between font-mono text-xs select-none">
                  {/* Top Bar of Code Panel */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-slate-500 text-[10px]">interactive_player.tsx</span>
                  </div>

                  {/* Code body lines */}
                  <div className="space-y-4 py-6 overflow-hidden">
                    <p className="text-amber-400">// Bienvenido a la academia inclusiva</p>
                    <p className="text-slate-400">
                      <span className="text-emerald-400">const</span> developer = &#123;
                    </p>
                    <p className="text-slate-400 pl-4">
                      nombre: <span className="text-sky-300">"Tu Nombre Completo"</span>,
                    </p>
                    <p className="text-slate-400 pl-4">
                      motivo: <span className="text-sky-300">"Aprender tecnología gratis"</span>,
                    </p>
                    <p className="text-slate-400 pl-4">
                      accesible: <span className="text-amber-400">true</span>,
                    </p>
                    <p className="text-slate-400 pl-4">
                      comunidad: <span className="text-sky-400">["Barcelona", "La Rioja", "Mundial"]</span>
                    </p>
                    <p className="text-slate-400">
                      &#125;;
                    </p>
                    <p className="text-emerald-400 animate-pulse font-bold">
                      &gt;_ cargando_modulo_de_exito_profesional...
                    </p>
                  </div>

                  {/* Mini stats cards inside editor */}
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/50 flex justify-between items-center text-[10px] font-sans">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-semibold text-gray-200">70% Empleabilidad</span>
                    </div>
                    <span className="text-amber-400 font-bold">100% Accesible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explora por Categoría
          </h2>
          <p className="text-gray-500">
            Encuentra el camino de aprendizaje perfecto para ti entre nuestras cuatro áreas prioritarias de especialización
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategorySelect(cat.key)}
              className={`p-6 rounded-2xl border-2 text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-slate-50 border-gray-100 opacity-95 hover:opacity-100 flex flex-col justify-between aspect-[4/3] relative overflow-hidden`}
            >
              <div className="space-y-4">
                <span className={`inline-block px-3 py-1 text-xs font-bold font-mono rounded-full ${cat.bg} ${cat.color} ${cat.border}`}>
                  {cat.count} Cursos
                </span>
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans line-clamp-3">
                  {cat.desc}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-amber-600 mt-4 pt-3 border-t border-gray-50">
                <span>Ver cursos</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Courses / Cursos Destacados */}
      <section id="featured-courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Cursos Destacados
            </h2>
            <p className="text-gray-500">
              Los programas formativos interactivos más populares para iniciar tu formación hoy mismo de forma gratuita
            </p>
          </div>
          <button
            onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 hover:underline transition shrink-0"
          >
            <span>Ver todos los cursos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => {
            // Category badges helper
            let badgeBg = 'bg-amber-100 text-amber-900';
            if (course.category === 'vibe-coding') badgeBg = 'bg-purple-100 text-purple-950';
            if (course.category === 'qa') badgeBg = 'bg-emerald-100 text-emerald-950';
            if (course.category === 'testing') badgeBg = 'bg-indigo-100 text-indigo-950';

            return (
              <div 
                key={course.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col justify-between course-card-shadow transition-all duration-300"
              >
                {/* Course Header card */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full ${badgeBg}`}>
                      {course.category}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Course Footer statistics */}
                <div className="px-5 pb-5 pt-4 border-t border-gray-50 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                      <span>{course.lessonsCount} Lecciones</span>
                    </div>
                    <span>{course.duration}</span>
                  </div>

                  <button
                    onClick={() => handleCourseClick(course.slug)}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition"
                  >
                    <span>Ver Curso</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "Why SomosCoders" Value Proposition */}
      <section id="values-section" className="bg-slate-900 text-white py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-amber-400 font-bold font-mono text-xs tracking-wider uppercase">Nuestro ADN Social</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Por qué SomosCoders Academy
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Nuestro compromiso inquebrantable es ofrecer educación tecnológica gratuita, accesible y de alta calidad para favorecer a personas en toda Hispanoamérica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/40 space-y-4 font-sans hover:border-amber-400/40 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">100% Accesible</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plataforma diseñada de extremo a extremo para personas con necesidades especiales o diversidad funcional. Contenido y interfaces con validación WCAG AA de accesibilidad digital.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/40 space-y-4 font-sans hover:border-emerald-400/40 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Totalmente Gratis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Luchamos activamente contra la brecha digital y la exclusión de recursos. Ningún curso, recurso o tutoría de SomosCoders tendrá jamás un costo monetario para ti.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/40 space-y-4 font-sans hover:border-blue-400/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Mentoría Personalizada</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No aprendes solo. Contamos con una red de mentores voluntarios dispuestos a revisar tu código, agendar llamadas para resolver dudas y brindarte orientación personalizada.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/40 space-y-4 font-sans hover:border-purple-400/40 transition">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Metodologías Ágiles</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aprenderás bajo dinámicas reales de la industria del software: Programación extrema (XP), metodologías Agile/Scrum, e integración de herramientas colaborativas.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/40 space-y-4 font-sans hover:border-indigo-400/40 transition">
              <div className="w-12 h-12 rounded-xl bg-indigo-400/10 flex items-center justify-center text-indigo-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">Comunidad Activa</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Entras a formar parte permanente de una red viva de coders y tecnólogos solidarios localizados en Barcelona, La Rioja, Buenos Aires y más sedes internacionales.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/40 space-y-4 font-sans hover:border-pink-400/40 transition">
              <div className="w-12 h-12 rounded-xl bg-pink-400/10 flex items-center justify-center text-pink-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">70% de Empleabilidad</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Te preparamos con habilidades prácticas enfocadas en el trabajo real. Apoyamos activamente tu inserción laboral en empresas asociadas que valoran la diversidad y el talento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Footer Banner */}
      <section id="cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8">
        <div className="bg-gradient-to-r from-amber-400 to-amber-300 rounded-3xl p-10 md:p-16 text-gray-950 space-y-6 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/50 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Comienza tu carrera en tecnología hoy mismo
          </h2>
          <p className="text-gray-800 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Únete a miles de estudiantes que ya están transformando sus vidas con SomosCoders. Formación gratuita, accesible e inclusiva con salida profesional directa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl transition shadow"
            >
              <span>Explorar Catálogo</span>
              <BookOpen className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('sobre-nosotros')}
              className="inline-flex items-center gap-2 bg-white/70 hover:bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-xl border border-amber-500/20 transition"
            >
              <span>Preguntas Frecuentes</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
