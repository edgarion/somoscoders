import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  Award, 
  ArrowRight,
  Sparkles,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Course, CourseCategory } from '../types';

interface CoursesViewProps {
  courses: Course[];
  onNavigate: (view: string) => void;
  onSetSelectedCourseSlug: (slug: string) => void;
  categoryFilter: CourseCategory | undefined;
  onSetCategoryFilter: (category: CourseCategory | undefined) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  courses,
  onNavigate,
  onSetSelectedCourseSlug,
  categoryFilter,
  onSetCategoryFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('Todos');

  const categoryTabs: { label: string; value: CourseCategory | undefined }[] = [
    { label: 'Todos', value: undefined },
    { label: 'Desarrollo Web', value: 'vibe-coding' },
    { label: 'Data & IA', value: 'vibe-coding' },
    { label: 'QA & Testing', value: 'qa' },
    { label: 'Diseño UX/UI', value: 'ux' }
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter ? course.category === categoryFilter : true;
      const matchesLevel = levelFilter !== 'Todos' ? course.level === levelFilter : true;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchQuery, categoryFilter, levelFilter]);

  const handleCourseClick = (slug: string) => {
    onSetSelectedCourseSlug(slug);
    onNavigate(`curso-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 font-sans text-[#0D1117]">
      {/* Header Sección Programas con Personaje de Diversidad */}
      <section className="bg-[#F7F6F1] rounded-3xl p-6 sm:p-10 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>Catálogo Abierto & Gratuito 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#0D1117]">
            Programas y <span className="text-[#00A98F]">Cursos.</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Formación práctica de alta calidad diseñada con la comunidad. Aprende Desarrollo Web, Inteligencia Artificial, QA Testing y Diseño UX/UI sin barreras económicas ni de acceso.
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-center">
          <img 
            src="/images/char_boy_magnifier_qa.png" 
            alt="Explora los cursos de SomosCoders" 
            className="w-30 h-auto object-contain drop-shadow-md hover:scale-105 transition" 
          />
        </div>
      </section>

      {/* Barra de Filtros y Búsqueda */}
      <section className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-[#F7F6F1] p-4 rounded-3xl border border-gray-200/80">
        {/* Pestañas de categorías */}
        <div className="flex flex-wrap gap-2">
          {categoryTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => onSetCategoryFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-sans transition ${
                categoryFilter === tab.value
                  ? 'bg-[#00A98F] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input 
            type="text" 
            placeholder="Buscar programa..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-xs outline-none focus:border-[#00A98F] transition"
          />
        </div>
      </section>

      {/* Grid de Cursos */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div 
            key={course.id}
            onClick={() => handleCourseClick(course.slug)}
            className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-[#00A98F] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-[#F7F6F1] text-[#087A65] border border-[#00A98F]/30 uppercase">
                  {course.category}
                </span>
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00A98F]" />
                  {course.duration}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#0D1117] group-hover:text-[#00A98F] transition leading-snug">
                {course.title}
              </h3>

              <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-8 h-8 rounded-full object-cover border border-amber-300"
                />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#0D1117]">{course.instructor.name}</p>
                  <p className="text-[10px] text-gray-400">{course.instructor.role}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-gray-100 mt-4">
              <span className="text-xs font-bold text-[#00A98F] flex items-center gap-1">
                <span>Acceso 100% Gratis</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <div className="w-9 h-9 rounded-full bg-[#F7F6F1] group-hover:bg-[#00A98F] text-gray-700 group-hover:text-white flex items-center justify-center transition">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
