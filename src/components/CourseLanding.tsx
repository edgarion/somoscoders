import React from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Award, 
  Users, 
  Star, 
  CheckCircle, 
  User, 
  Play, 
  Lock,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Course, EnrollmentState } from '../types';

interface CourseLandingProps {
  course: Course;
  enrollment: EnrollmentState | undefined;
  user: { name: string; email: string; picture: string } | null;
  onRequestAuth: () => void;
  onNavigate: (view: string) => void;
  onEnroll: (courseId: string) => void;
  fontSizeMultiplier: number;
}

export const CourseLanding: React.FC<CourseLandingProps> = ({
  course,
  enrollment,
  user,
  onRequestAuth,
  onNavigate,
  onEnroll,
}) => {
  const isEnrolled = !!enrollment;
  const progressPercent = enrollment
    ? Math.round((enrollment.completedLessons.length / course.lessons.length) * 100)
    : 0;

  const handleStartResume = () => {
    // Si NO está registrado, requerir registro primero
    if (!user) {
      onRequestAuth();
      return;
    }

    if (!isEnrolled) {
      onEnroll(course.id);
    }
    onNavigate(`player-${course.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 font-sans text-[#0D1117]">
      {/* Return button */}
      <button
        onClick={() => { onNavigate('cursos'); }}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#00A98F] transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a Catálogo de Programas</span>
      </button>

      {/* Hero Header panel 2026 */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border-2 border-gray-800 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A98F]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-[#00A98F] text-white font-bold font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                {course.category}
              </span>
              <span className="bg-gray-800 text-gray-200 font-semibold px-3 py-1 rounded-full border border-gray-700">
                Nivel {course.level}
              </span>
              <span className="bg-[#F7F6F1] text-[#087A65] font-semibold font-mono px-3 py-1 rounded-full border border-[#00A98F]/30">
                100% Gratuito & Accesible
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl font-sans">
              {course.longDescription}
            </p>

            {/* Course general facts */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C8FF00]" />
                <span>{course.duration} de estudio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#00A98F]" />
                <span>{course.lessons.length} Módulos interactivos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#C8FF00]" />
                <span>{course.studentsCount} Alumnos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">{course.rating}</span>
                <span>/ 5.0</span>
              </div>
            </div>
          </div>

          {/* Call to action panel card */}
          <div className="lg:col-span-4 bg-gray-900 border border-gray-800 p-6 rounded-3xl space-y-5 shadow-2xl">
            <h3 className="font-bold text-base text-white font-display flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00A98F]" />
              <span>Inscripción Gratuita</span>
            </h3>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              {user 
                ? 'Estás conectado como ' + user.name + '. Tu progreso y certificado se guardarán en tu cuenta.' 
                : 'Para iniciar el curso y guardar tu progreso necesitas registrarte gratis en SomosCoders.'}
            </p>

            {isEnrolled && user && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#C8FF00]">Tu Progreso actual:</span>
                  <span className="text-white">{progressPercent}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#00A98F] h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleStartResume}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider font-sans transition shadow cursor-pointer text-center"
            >
              {user ? (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isEnrolled ? 'Continuar Curso' : 'Comenzar Formación Gratis'}</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Regístrate para Iniciar Curso</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-gray-400 text-center uppercase font-mono tracking-wider">
              100% Sin Costo • Certificado Digital Incluido
            </p>
          </div>
        </div>
      </section>

      {/* Main curriculum content layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left main: Syllabus, what you will learn */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Syllabus Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold font-display text-[#0D1117] tracking-tight">
              ¿Qué vas a aprender en este programa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.syllabus.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#F7F6F1] p-4 rounded-2xl border border-gray-200/80 flex items-start gap-3.5"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00A98F] text-white text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold text-gray-700 leading-relaxed pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* List of lessons (Curriculum) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold font-display text-[#0D1117] tracking-tight">
                Módulos del Curso
              </h2>
              <span className="text-xs font-mono text-gray-500">
                {course.lessons.length} Temas totales
              </span>
            </div>

            <div className="space-y-3">
              {course.lessons.map((lesson, idx) => {
                const isCompleted = enrollment?.completedLessons.includes(lesson.id);
                return (
                  <div 
                    key={lesson.id}
                    className="bg-white p-5 rounded-2xl border border-gray-200/80 flex items-center justify-between hover:border-[#00A98F] transition"
                  >
                    <div className="flex items-center gap-4">
                      {isCompleted ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#00A98F] flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5 fill-emerald-100" />
                        </div>
                      ) : (
                        <span className="flex items-center justify-center w-6 h-6 text-gray-400 text-xs font-mono font-bold shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      )}
                      <div>
                        <h4 className="text-xs font-bold text-[#0D1117]">
                          {lesson.title}
                        </h4>
                        <span className="text-[10px] text-gray-500 mt-0.5 block font-mono">
                          Actividad: <span className="font-semibold text-gray-700 capitalize">{lesson.exerciseType}</span>
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-[10px] bg-[#F7F6F1] text-[#087A65] py-1 px-2.5 rounded-lg border border-gray-200 font-bold font-mono shrink-0">
                      {lesson.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right side Info: Instructor profile, cert */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Instructor Bio */}
          <div className="bg-[#F7F6F1] p-6 rounded-3xl border border-gray-200/80 space-y-4">
            <h3 className="text-base font-bold font-display text-[#0D1117] flex items-center gap-2">
              <User className="w-4 h-4 text-[#00A98F]" />
              <span>Mentor del Bootcamp</span>
            </h3>
            <div className="flex items-center gap-3">
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-[#00A98F]"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-xs font-bold text-[#0D1117]">{course.instructor.name}</h4>
                <p className="text-[10px] text-gray-500">{course.instructor.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              {course.instructor.bio}
            </p>
          </div>

          {/* Certificate Award Info con Overlay de Libros y Planta (+50%) */}
          <div className="bg-[#C8FF00] p-6 rounded-3xl border-2 border-[#0D1117] space-y-3 text-center text-[#0D1117] shadow-[4px_4px_0px_#0D1117] relative overflow-hidden">
            {/* Overlay: Pila de libros con planta (+50% -> w-24) */}
            <img 
              src="/images/stickers/sticker_books_plant.png" 
              alt="Libros de estudio" 
              className="absolute -top-3 -right-3 w-24 h-auto opacity-45 pointer-events-none z-10" 
            />

            <div className="relative z-20 space-y-3">
              <div className="mx-auto w-10 h-10 bg-[#0D1117] text-[#C8FF00] rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold font-display">
                Consigue tu Certificado
              </h3>
              <p className="text-xs text-[#0D1117] leading-relaxed font-medium">
                Completa todos los módulos y retos interactivos para obtener tu credencial oficial firmada por SomosCoders.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};
