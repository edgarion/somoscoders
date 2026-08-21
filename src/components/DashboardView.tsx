import React, { useState, useMemo } from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ExternalLink, 
  Lock, 
  Printer, 
  RefreshCw, 
  TrendingUp, 
  Trophy, 
  User, 
  X,
  Share2,
  Bookmark,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Course, EnrollmentState } from '../types';

interface DashboardViewProps {
  courses: Course[];
  enrollments: EnrollmentState[];
  userName: string;
  onSetUserName: (name: string) => void;
  onNavigate: (view: string) => void;
  onSetCategoryFilter: (category: any) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  courses,
  enrollments,
  userName,
  onSetUserName,
  onNavigate,
  onSetCategoryFilter
}) => {
  const [editingName, setEditingName] = useState(false);
  const [profileNameInput, setProfileNameInput] = useState(userName);

  // Active certificate dialog state
  const [certificateCourse, setCertificateCourse] = useState<Course | null>(null);

  // Stats calculators
  const totalEnrolled = enrollments.length;
  
  const completedCoursesCount = useMemo(() => {
    return enrollments.filter((e) => e.completedLessons.length === courses.find((c) => c.id === e.courseId)?.lessons.length).length;
  }, [enrollments, courses]);

  const totalCompletedLessonsCount = useMemo(() => {
    return enrollments.reduce((sum, e) => sum + e.completedLessons.length, 0);
  }, [enrollments]);

  // Total study progress calculate
  const totalStudyHoursEstimated = useMemo(() => {
    return enrollments.reduce((hours, e) => {
      const course = courses.find((c) => c.id === e.courseId);
      if (!course) return hours;
      // Rough interpolation
      const completedRatio = e.completedLessons.length / course.lessons.length;
      const totalHoursNum = parseInt(course.duration) || 10;
      return hours + Math.round(completedRatio * totalHoursNum);
    }, 0);
  }, [enrollments, courses]);

  // List of active user enrollments mapped with course static parameters
  const enrolledCoursesList = useMemo(() => {
    return enrollments.map((e) => {
      const courseDetails = courses.find((c) => c.id === e.courseId);
      const isDone = e.completedLessons.length === courseDetails?.lessons?.length;
      return {
        ...e,
        courseDetails,
        isDone
      };
    }).filter((x) => x.courseDetails !== undefined);
  }, [enrollments, courses]);

  const handleSaveProfileName = (e: React.FormEvent) => {
    e.preventDefault();
    if (profileNameInput.trim()) {
      onSetUserName(profileNameInput.trim());
      setEditingName(false);
    }
  };

  // Generate unique randomized certificate hash credentials
  const generateVerificationHash = (courseId: string) => {
    let hash = 0;
    const str = `${courseId}-${userName}-somoscoders`;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, '4');
    return `SC-A11Y-${hex}-2026`;
  };

  const handleOpenCertificate = (course: Course) => {
    setCertificateCourse(course);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  // Crafting mock activity data for handcrafted SVG chart: study sessions over past 7 days
  const weeklyStudyMinutes = [45, 90, 0, 120, 60, 45, 10];
  const weekdaysLabel = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const maxMins = 120;

  return (
    <div className="space-y-10">
      
      {/* Upper Student Profile Summary Panel */}
      <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4.5">
          <div className="w-16 h-16 rounded-full bg-[#F7F6F1] flex items-center justify-center border-2 border-[#00A98F] shrink-0 overflow-hidden relative shadow-inner">
            <img 
              src="/images/avatars/avatar_girl_headphones.png" 
              alt="Estudiante SomosCoders" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs text-gray-400 font-mono tracking-wider uppercase">Estudiante Certificado</span>
            {editingName ? (
              <form onSubmit={handleSaveProfileName} className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={profileNameInput}
                  onChange={(e) => setProfileNameInput(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-sm font-bold text-gray-800 p-2 rounded-lg outline-none focus:border-amber-400"
                  required
                />
                <button 
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3.5 py-1.8 rounded-lg font-semibold transition"
                >
                  Guardar
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-display">
                  {userName}
                </h2>
                <button 
                  onClick={() => setEditingName(true)}
                  className="text-xs text-amber-600 hover:text-amber-700 font-semibold hover:underline"
                >
                  (Editar nombre)
                </button>
              </div>
            )}
            <p className="text-xs text-gray-500 font-sans">Miembro pionero de la academia inclusiva SomosCoders</p>
          </div>
        </div>

        {/* Level metrics counters badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 text-center shrink-0">
            <span className="text-[10px] text-gray-450 block uppercase font-mono tracking-wider">Cursos de Alta</span>
            <span className="text-lg font-bold text-gray-800 font-display">{totalEnrolled}</span>
          </div>
          <div className="bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 text-center shrink-0">
            <span className="text-[10px] text-gray-450 block uppercase font-mono tracking-wider">Módulos Logrados</span>
            <span className="text-lg font-bold text-emerald-600 font-display">{totalCompletedLessonsCount}</span>
          </div>
          <div className="bg-gradient-to-br from-amber-400/15 to-transparent px-4 py-2.5 rounded-xl border border-amber-200/50 text-center shrink-0">
            <span className="text-[10px] text-amber-900 block uppercase font-mono tracking-wider">Graduado</span>
            <span className="text-lg font-bold text-amber-700 font-display flex items-center justify-center gap-1">
              <Trophy className="w-4 h-4 text-amber-500 inline fill-amber-300" />
              <span>{completedCoursesCount}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Stats, hours metrics, and Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Enrolled list of active course progressions */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-gray-950 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500 animate-pulse-slow" />
              <span>Mis Cursos Matriculados</span>
            </h2>
            <button
              onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
              className="text-xs font-semibold text-amber-600 hover:text-amber-700 hover:underline"
            >
              Matricular nuevo curso+
            </button>
          </div>

          {enrolledCoursesList.length > 0 ? (
            <div className="space-y-4">
              {enrolledCoursesList.map((enroll) => {
                const course = enroll.courseDetails!;
                const compCount = enroll.completedLessons.length;
                const totalMod = course.lessons.length;
                const ratio = Math.round((compCount / totalMod) * 100);

                return (
                  <div 
                    key={enroll.courseId}
                    className="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 tracking-wide shadow-sm hover:border-gray-150 transition"
                  >
                    {/* Basic details */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[9px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                          {course.category}
                        </span>
                        <span className="text-[9px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                          {course.level}
                        </span>
                      </div>
                      
                      <h3 className="font-extrabold text-base leading-snug text-gray-900">
                        {course.title}
                      </h3>
                      
                      {/* Percent slide bar indicator */}
                      <div className="space-y-1.5 max-w-sm pt-1">
                        <div className="flex items-center justify-between text-[11px] font-semibold">
                          <span className="text-gray-500">Progreso formativo:</span>
                          <span className={ratio === 100 ? 'text-emerald-600 font-bold' : 'text-amber-600'}>
                            {ratio}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-300 ${
                              ratio === 100 ? 'bg-emerald-500' : 'bg-amber-400'
                            }`}
                            style={{ width: `${ratio}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Operational metrics action */}
                    <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                      {ratio === 100 ? (
                        <button
                          onClick={() => handleOpenCertificate(course)}
                          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition shadow-sm"
                        >
                          <Award className="w-4 h-4 fill-emerald-100 text-white" />
                          <span>Descargar Diploma</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => onNavigate(`player-${course.slug}`)}
                          className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3.5 rounded-lg transition"
                        >
                          Continuar lección
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 space-y-4">
              <p className="text-gray-400 text-sm">¿Aún no te has matriculado en ningún curso?</p>
              <button
                onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs py-2.5 px-5 rounded-xl transition shadow-sm"
              >
                Inscribirme en mi primer Curso Gratis
              </button>
            </div>
          )}
        </div>

        {/* Right column: Weekly activities tracking metrics - Handcrafted SVG design chart */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Handcrafted precise native SVG chart wrapper */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-2">
              <div className="space-y-0.5">
                <span className="text-[10px] text-amber-400 font-mono tracking-wider uppercase block">Rendimiento</span>
                <h3 className="font-bold text-sm">Minutos de Estudio Semanales</h3>
              </div>
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>

            {/* Handcrafted pristine SVG Bar Chart */}
            <div className="relative pt-2">
              <svg 
                className="w-full h-36" 
                viewBox="0 0 350 150" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal reference dashed lines */}
                {/* 120min line */}
                <line x1="40" y1="10" x2="330" y2="10" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <text x="5" y="14" fill="#64748b" className="text-[9px] font-mono">120m</text>
                
                {/* 60min line */}
                <line x1="40" y1="60" x2="330" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <text x="5" y="64" fill="#64748b" className="text-[9px] font-mono">60m</text>
                
                {/* 0min line */}
                <line x1="40" y1="110" x2="330" y2="110" stroke="#475569" strokeWidth="1" />
                <text x="5" y="114" fill="#64748b" className="text-[9px] font-mono">0m</text>

                {/* Draw animated responsive bar columns */}
                {weeklyStudyMinutes.map((mins, idx) => {
                  const barX = 64 + idx * 40;
                  const ratioValue = mins / maxMins;
                  const barHeight = ratioValue * 100; // max height is 100
                  const barY = 110 - barHeight;

                  return (
                    <g key={idx}>
                      {/* Interactive rect columns */}
                      <rect
                        x={barX}
                        y={barY}
                        width="18"
                        height={barHeight || 2} // at least 2px high so visible
                        rx="4"
                        fill={mins > 0 ? '#fbbf24' : '#1e293b'}
                        className="transition-all duration-500 hover:fill-amber-500 cursor-pointer"
                        title={`${mins} minutos`}
                      />
                      {/* Week labels */}
                      <text
                        x={barX + 2}
                        y="130"
                        fill="#94a3b8"
                        className="text-[9px] font-mono"
                      >
                        {weekdaysLabel[idx]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Total learning tracking hours summary */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4 text-center">
              <div>
                <span className="text-[9px] text-slate-400 block uppercase font-mono tracking-wider">Total Estudiado</span>
                <span className="text-base font-bold text-white font-display mt-0.5 block">{totalStudyHoursEstimated} horas</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block uppercase font-mono tracking-wider">Racha Semanal</span>
                <span className="text-base font-bold text-amber-400 font-display mt-0.5 block">4 días seguidos</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* STUNNING PRINTABLE ACADEMIC CERTIFICATE EXPANDED OVERLAY */}
      {certificateCourse && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl space-y-6 relative border-8 border-double border-amber-400 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Close dialog */}
            <button
              onClick={() => setCertificateCourse(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-150 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition print:hidden"
              title="Cerrar diploma"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Printable Frame Area of Certificate */}
            <div id="printable-credential-sheet" className="p-8 border-4 border-gray-900 rounded-xl space-y-8 text-center relative overflow-hidden bg-stone-50 select-none">
              
              {/* Decorative watermarks */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-amber-100 rounded-full flex items-center justify-center pointer-events-none">
                <span className="text-amber-100 font-sans tracking-[0.4em] font-extrabold uppercase text-[24px] rotate-12 select-none opacity-40">
                  SOMOSCODERS SELLO ACADÉMICO
                </span>
              </div>

              {/* Header certificate block */}
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-1.5">
                  {/* Embedded vector badge */}
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 font-extrabold text-[24px] text-white">
                    ★
                  </span>
                  <span className="text-[12px] font-mono tracking-[0.3em] font-extrabold text-amber-700 uppercase">
                    SomosCoders Academy
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 tracking-tight leading-none uppercase">
                  DIPLOMA DE LOGRO ACADÉMICO
                </h1>
                <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  Por cuanto se certifica la excelencia formativa inclusiva
                </p>
              </div>

              {/* Award description details */}
              <div className="space-y-6 relative z-10">
                <p className="text-sm font-sans italic text-gray-500">Este certificado oficial de acreditación digital se otorga a:</p>
                
                <h2 className="text-2xl md:text-3.5xl font-extrabold font-display text-gray-950 underline decoration-amber-400 decoration-wavy underline-offset-8">
                  {userName}
                </h2>

                <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-xl mx-auto pt-2">
                  Por haber completado con éxito, de forma gratuita y adaptada el programa curricular completo del bootcamp especializado:
                </p>
                
                <h3 className="text-xl md:text-2xl font-extrabold text-amber-700 tracking-tight">
                  "{certificateCourse.title}"
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Impartido mediante plataformas interactivas con un total acumulado y auditado de <strong className="text-gray-750 font-semibold">{certificateCourse.duration}</strong> lectivas e interacciones.
                </p>
              </div>

              {/* Signatures and dates validation hashes block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200 text-left items-end">
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-[10px] text-gray-400 block font-mono uppercase">Fecha de Expedición</span>
                  <span className="text-xs font-semibold text-gray-700 flex items-center justify-center md:justify-start gap-1 justify-center">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>2026-06-04 (Válido para siempre)</span>
                  </span>
                </div>

                <div className="space-y-1 text-center md:text-right">
                  {/* Autor firm mock details */}
                  <span className="font-display italic text-base block text-gray-700">Elena Gómez</span>
                  <line className="w-32 border-b border-gray-300 block mx-auto md:ml-auto pb-1" />
                  <span className="text-[9px] text-gray-400 block font-mono uppercase">Directora de Educación Directa</span>
                </div>
              </div>

              {/* Validation tracking codes bar */}
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-450 border-t border-gray-150/50 font-mono">
                <span>Código de Verificación: {generateVerificationHash(certificateCourse.id)}</span>
                <span className="text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider text-[9px]">
                  SomosCoders Inclusivo
                </span>
              </div>
            </div>

            {/* Print action utilities footer */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 items-center justify-between print:hidden">
              <span className="text-xs text-gray-400 font-sans italic">
                Sugerencia: Puedes imprimir esta credencial en papel Opalina o guardarla como PDF de alta resolución.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintCertificate}
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir / Guardar PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
