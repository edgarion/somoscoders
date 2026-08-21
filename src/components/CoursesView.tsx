import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  BookOpen, 
  Clock, 
  Tag, 
  Award, 
  TrendingUp, 
  CheckCircle,
  HelpCircle,
  RefreshCw
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
  const [durationFilter, setDurationFilter] = useState<string>('Todos');

  // Categories helper list
  const categoryTabs: { label: string; value: CourseCategory | undefined }[] = [
    { label: 'Todos', value: undefined },
    { label: 'UX Design', value: 'ux' },
    { label: 'Vibe Coding', value: 'vibe-coding' },
    { label: 'QA Testing', value: 'qa' },
    { label: 'Testing', value: 'testing' }
  ];

  // Filtering Logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // 1. Search filter
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // 2. Category filter
      const matchesCategory = categoryFilter ? course.category === categoryFilter : true;

      // 3. Level filter
      const matchesLevel = levelFilter !== 'Todos' ? course.level === levelFilter : true;

      // 4. Duration filter
      let matchesDuration = true;
      if (durationFilter !== 'Todos') {
        const hours = parseInt(course.duration);
        if (durationFilter === 'Corto') {
          matchesDuration = hours <= 10;
        } else if (durationFilter === 'Largo') {
          matchesDuration = hours > 10;
        }
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });
  }, [courses, searchQuery, categoryFilter, levelFilter, durationFilter]);

  const handleCourseClick = (slug: string) => {
    onSetSelectedCourseSlug(slug);
    onNavigate(`curso-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchQuery('');
    onSetCategoryFilter(undefined);
    setLevelFilter('Todos');
    setDurationFilter('Todos');
  };

  return (
    <div className="space-y-10">
      {/* Search and Title Section */}
      <section className="text-center md:text-left space-y-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Todos los Cursos
        </h1>
        <p className="text-gray-500 max-w-2xl text-base">
          Explora nuestro catálogo abierto y gratuito de programas especializados en tecnología. Aprende a tu propio ritmo con las ayudas interactivas instaladas.
        </p>
      </section>

      {/* Main filter interface */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Filter Sidebar Panel */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-2xl border border-gray-100 h-fit space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <span className="font-bold text-gray-800 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-amber-500" />
              <span>Filtros</span>
            </span>
            <button 
              onClick={clearFilters}
              className="text-xs text-gray-400 hover:text-amber-500 font-medium transition flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Limpiar</span>
            </button>
          </div>

          {/* Level Filter */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gray-700">Nivel de Dificultad</h3>
            <div className="flex flex-col gap-2">
              {['Todos', 'Principiante', 'Intermedio', 'Avanzado'].map((level) => (
                <label 
                  key={level} 
                  className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none"
                >
                  <input 
                    type="radio" 
                    name="level" 
                    checked={levelFilter === level}
                    onChange={() => setLevelFilter(level)}
                    className="w-4 h-4 text-amber-500 focus:ring-amber-400 border-gray-300 rounded"
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-700">Duración del Curso</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Cualquier duración', value: 'Todos' },
                { label: 'Corto (≤ 10 horas)', value: 'Corto' },
                { label: 'Largo (&gt; 10 horas)', value: 'Largo' }
              ].map((dur) => (
                <label 
                  key={dur.value} 
                  className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 cursor-pointer select-none"
                >
                  <input 
                    type="radio" 
                    name="duration" 
                    checked={durationFilter === dur.value}
                    onChange={() => setDurationFilter(dur.value)}
                    className="w-4 h-4 text-amber-500 focus:ring-amber-400 border-gray-300 rounded"
                  />
                  <span dangerouslySetInnerHTML={{ __html: dur.label }} />
                </label>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest mb-1.5 font-mono">
              Inscripción Abierta
            </h4>
            <p className="text-xs text-amber-800 leading-relaxed font-sans">
              No hay plazos límite para iniciar o terminar los módulos. Puedes ingresar con tu cuenta simulada de SomosCoders Academy.
            </p>
          </div>
        </aside>

        {/* Right Side: Search and Courses Grid */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Search inputs and Quick tags */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative bg-white border border-gray-200 rounded-xl p-1 shadow-sm focus-within:border-amber-400 transition-all flex items-center pr-3">
              <input 
                type="text" 
                placeholder="Buscar por palabra clave..." 
                className="w-full text-sm py-2 px-3 text-gray-700 bg-transparent outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
            </div>
          </div>

          {/* Quick Categories Navigation tabs */}
          <div className="flex flex-wrap gap-1.5 pb-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => onSetCategoryFilter(tab.value)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition ${
                  categoryFilter === tab.value
                    ? 'bg-amber-400 text-gray-950 font-bold shadow-sm'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results statement */}
          <div className="text-xs text-gray-400 font-mono flex items-center justify-between">
            <span>Mostrando {filteredCourses.length} de {courses.length} cursos en total</span>
          </div>

          {/* Courses grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => {
                let catColor = 'bg-amber-100 text-amber-900';
                if (course.category === 'vibe-coding') catColor = 'bg-purple-100 text-purple-900';
                if (course.category === 'qa') catColor = 'bg-emerald-100 text-emerald-900';
                if (course.category === 'testing') catColor = 'bg-indigo-100 text-indigo-900';

                return (
                  <div 
                    key={course.id}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col justify-between course-card-shadow transition-all duration-300"
                  >
                    <div className="p-5 space-y-4">
                      {/* Top badges */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full ${catColor}`}>
                          {course.category}
                        </span>
                        <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
                        {course.title}
                      </h3>

                      {/* Pitch */}
                      <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                        {course.description}
                      </p>
                    </div>

                    {/* Stats bar */}
                    <div className="px-5 pb-5 pt-4 border-t border-gray-50 space-y-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                          <span>{course.lessonsCount} Lecciones</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      {/* Action */}
                      <button
                        onClick={() => handleCourseClick(course.slug)}
                        className="w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
                      >
                        Estudiar Gratis
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 space-y-4">
              <p className="text-gray-400 text-sm">No encontramos ningún Curso coincidente con los filtros seleccionados.</p>
              <button 
                onClick={clearFilters}
                className="bg-gray-150 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg transition"
              >
                Restaurar Filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
