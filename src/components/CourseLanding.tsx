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
  FileText,
  Workflow,
  Sparkles
} from 'lucide-react';
import { Course, EnrollmentState } from '../types';

interface CourseLandingProps {
  course: Course;
  enrollment: EnrollmentState | undefined;
  onNavigate: (view: string) => void;
  onEnroll: (courseId: string) => void;
  fontSizeMultiplier: number;
}

export const CourseLanding: React.FC<CourseLandingProps> = ({
  course,
  enrollment,
  onNavigate,
  onEnroll,
  fontSizeMultiplier
}) => {
  const isEnrolled = !!enrollment;
  const progressPercent = enrollment
    ? Math.round((enrollment.completedLessons.length / course.lessons.length) * 100)
    : 0;

  const handleStartResume = () => {
    if (!isEnrolled) {
      onEnroll(course.id);
    }
    onNavigate(`player-${course.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* Return button */}
      <button
        onClick={() => { onNavigate('cursos'); }}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a Catálogo de Cursos</span>
      </button>

      {/* Hero Header panel */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-amber-400 text-slate-950 font-bold font-mono tracking-wider uppercase px-3 py-1 rounded-full">
                {course.category}
              </span>
              <span className="bg-slate-800 text-gray-200 font-semibold px-3 py-1 rounded-full border border-slate-700">
                {course.level}
              </span>
              <span className="bg-slate-800 text-emerald-400 font-semibold font-mono px-3 py-1 rounded-full border border-slate-700">
                Gratuito e Inclusivo
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
              {course.longDescription}
            </p>

            {/* Course general facts */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>{course.duration} de estudio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>{course.lessons.length} Módulos interactivos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-5 h-5 text-sky-400" />
                <span>{course.studentsCount} Alumnos inscritos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">{course.rating}</span>
                <span>puntuación media</span>
              </div>
            </div>
          </div>

          {/* Call to action panel card */}
          <div className="lg:col-span-4 bg-slate-800 border border-slate-700 p-6 rounded-2xl space-y-6">
            <h3 className="font-bold text-lg text-white">Inscripción libre</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Accede de inmediato a las lecturas, simulación de código práctico y cuestionarios teóricos interactivos.
            </p>

            {isEnrolled && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-amber-400">Tu Progreso actual:</span>
                  <span className="text-white">{progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleStartResume}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition shadow cursor-pointer text-center"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>
                {isEnrolled ? 'Continuar Curso' : 'Comenzar Formación Gratis'}
              </span>
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
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              ¿Qué vas a aprender en este programa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.syllabus.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3.5"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-700 leading-relaxed pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* List of lessons (Curriculum) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Módulos del Curso
              </h2>
              <span className="text-sm font-mono text-gray-400">
                {course.lessons.length} Temas totales
              </span>
            </div>

            <div className="space-y-3">
              {course.lessons.map((lesson, idx) => {
                const isCompleted = enrollment?.completedLessons.includes(lesson.id);
                return (
                  <div 
                    key={lesson.id}
                    className="bg-white p-5 rounded-xl border border-gray-100 flex items-center justify-between hover:border-gray-200 transition"
                  >
                    <div className="flex items-center gap-4">
                      {isCompleted ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5 fill-emerald-100" />
                        </div>
                      ) : (
                        <span className="flex items-center justify-center w-6 h-6 text-gray-400 text-xs font-mono font-bold shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">
                          {lesson.title}
                        </h4>
                        <span className="text-xs text-gray-400 mt-1 block">
                          Actividad de tipo:{' '}
                          <span className="font-semibold text-gray-500 capitalize">{lesson.exerciseType}</span>
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-xs bg-gray-50 text-gray-500 py-1 px-2.5 rounded-lg border border-gray-100 font-semibold shrink-0">
                      {lesson.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right side Info: Instructor profile, cert */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Instructor Bio */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <User className="w-4 h-4 text-amber-500" />
              <span>Mentor del Bootcamp</span>
            </h3>
            <div className="flex items-center gap-3">
              <img 
                src={course.instructor.avatar} 
                alt={course.instructor.name} 
                className="w-12 h-12 rounded-full object-cover border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-800">{course.instructor.name}</h4>
                <p className="text-xs text-gray-400">{course.instructor.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-sans">
              {course.instructor.bio}
            </p>
          </div>

          {/* Certificate Award Info */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 space-y-4 text-center">
            <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-indigo-950 font-display">
              Consigue el Certificado
            </h3>
            <p className="text-xs text-indigo-800 leading-relaxed font-sans">
              Completa todos los módulos respondiendo los retos teóricos y prácticos de forma interactiva y genera una credencial digital imprimible firmada por la organización.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};
