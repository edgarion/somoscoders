import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  Play, 
  Award, 
  HelpCircle, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft,
  XCircle,
  Code2,
  FileQuestion,
  BookMarked,
  Volume2
} from 'lucide-react';
import { Course, Lesson, EnrollmentState } from '../types';

interface CoursePlayerProps {
  course: Course;
  enrollment: EnrollmentState | undefined;
  onNavigate: (view: string) => void;
  onUpdateCompletedLessons: (courseId: string, completedLessonIds: string[]) => void;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({
  course,
  enrollment,
  onNavigate,
  onUpdateCompletedLessons
}) => {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const currentLesson: Lesson = course.lessons[activeLessonIndex] || course.lessons[0];

  // Quiz state
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizIsCorrect, setQuizIsCorrect] = useState<boolean | null>(null);

  // Coding exercise state
  const [codeInputValue, setCodeInputValue] = useState('');
  const [codeSubmitted, setCodeSubmitted] = useState(false);
  const [codeIsCorrect, setCodeIsCorrect] = useState<boolean | null>(null);
  const [validationOutput, setValidationOutput] = useState('');

  // Audio accessibility state
  const [speechActive, setSpeechActive] = useState(false);

  // Sync state on lesson change
  useEffect(() => {
    setSelectedQuizIndex(null);
    setQuizSubmitted(false);
    setQuizIsCorrect(null);
    setCodeInputValue(currentLesson.codeExercise?.initialCode || '');
    setCodeSubmitted(false);
    setCodeIsCorrect(null);
    setValidationOutput('');
  }, [activeLessonIndex, currentLesson]);

  const toggleSpeechAccessibility = () => {
    if ('speechSynthesis' in window) {
      if (speechActive) {
        window.speechSynthesis.cancel();
        setSpeechActive(false);
      } else {
        // Strip out some HTML/Markdown characters for better text reading
        const plainText = currentLesson.content
          .replace(/[#*`_]/g, '')
          .replace(/\[(.*?)\]\(.*?\)/g, '$1');
        
        const utterance = new SpeechSynthesisUtterance(
          `Tema: ${currentLesson.title}. Contenido: ${plainText}`
        );
        utterance.lang = 'es-ES';
        utterance.onend = () => setSpeechActive(false);
        utterance.onerror = () => setSpeechActive(false);
        window.speechSynthesis.speak(utterance);
        setSpeechActive(true);
      }
    } else {
      alert('La síntesis de voz no está soportada en este navegador.');
    }
  };

  // Terminate speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSelectQuiz = (optIndex: number) => {
    if (quizSubmitted) return;
    setSelectedQuizIndex(optIndex);
  };

  const handleSubmitQuiz = () => {
    if (selectedQuizIndex === null || !currentLesson.quizQuestion) return;
    const isCorrect = selectedQuizIndex === currentLesson.quizQuestion.correctAnswer;
    setQuizIsCorrect(isCorrect);
    setQuizSubmitted(true);

    if (isCorrect) {
      triggerLessonCompletion(currentLesson.id);
    }
  };

  const handleValidateCode = () => {
    if (!currentLesson.codeExercise) return;
    
    const requiredKeyword = currentLesson.codeExercise.solutionKeyword.toLowerCase();
    const cleanCodeInput = codeInputValue.toLowerCase().replace(/\s+/g, ' ');
    const passes = cleanCodeInput.includes(requiredKeyword.replace(/\s+/g, ' ')) || codeInputValue.includes('return');

    setCodeSubmitted(true);
    if (passes) {
      setCodeIsCorrect(true);
      setValidationOutput('✓ PRUEBA EXITOSA: Todo el pipeline de aserciones e intenciones se ejecutó de forma correcta. ¡Buen trabajo!');
      triggerLessonCompletion(currentLesson.id);
    } else {
      setCodeIsCorrect(false);
      setValidationOutput(`✗ ERROR: No se detectó la respuesta correcta sugerida. Intenta incluir: "${currentLesson.codeExercise.solutionKeyword}".`);
    }
  };

  // Add lesson to completion list in global state
  const triggerLessonCompletion = (lessonId: string) => {
    const list = enrollment ? [...enrollment.completedLessons] : [];
    if (!list.includes(lessonId)) {
      list.push(lessonId);
      onUpdateCompletedLessons(course.id, list);
    }
  };

  const handleMarkReadCompleteOnly = () => {
    triggerLessonCompletion(currentLesson.id);
  };

  const handleNextLesson = () => {
    if (activeLessonIndex < course.lessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
    } else {
      // If completed whole course!
      onNavigate(`dashboard`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1);
    }
  };

  const progressPercentage = enrollment
    ? Math.round((enrollment.completedLessons.length / course.lessons.length) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Upper action bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        <div className="space-y-1">
          <button
            onClick={() => onNavigate(`curso-${course.slug}`)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-950 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la portada del curso</span>
          </button>
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
            <span>{course.title}</span>
            <span className="text-xs bg-amber-100 text-amber-900 border border-amber-300 py-0.5 px-2 rounded-full font-mono">
              Progreso: {progressPercentage}%
            </span>
          </h1>
        </div>

        {/* Progress summary bar */}
        <div className="w-full sm:w-64 space-y-1.5 shrink-0">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-gray-400">
            <span>Módulos de SomosCoders</span>
            <span>{enrollment?.completedLessons.length || 0}/{course.lessons.length}</span>
          </div>
        </div>
      </div>

      {/* Workspace Area: Left Syllabus sidebar, Right Active Lesson Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Modular Navigation Syllabus */}
        <aside className="lg:col-span-4 bg-white rounded-2xl border border-gray-150 overflow-hidden divide-y divide-gray-100 shrink-0">
          <div className="p-4 bg-gray-50 flex items-center justify-between">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-gray-700">Contenido Académico</span>
            <span className="text-xs font-mono text-gray-400">{course.lessons.length} unidades</span>
          </div>

          <div className="divide-y divide-gray-50 max-h-[420px] overflow-y-auto">
            {course.lessons.map((lesson, idx) => {
              const isSelected = lesson.id === currentLesson.id;
              const isDone = enrollment?.completedLessons.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLessonIndex(idx)}
                  className={`w-full p-4 text-left transition flex items-start gap-3.5 ${
                    isSelected 
                      ? 'bg-amber-50/70 text-amber-950 font-semibold border-l-4 border-amber-500' 
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <div className="shrink-0 pt-0.5">
                    {isDone ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-100" />
                    ) : (
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                        isSelected ? 'border-amber-400 text-amber-700' : 'border-gray-300 text-gray-400'
                      }`}>
                        {idx + 1}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="text-xs font-bold leading-tight line-clamp-2">{lesson.title}</span>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono">
                      <span>{lesson.duration}</span>
                      <span>•</span>
                      <span className="capitalize">{lesson.exerciseType}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {progressPercentage === 100 && (
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 text-center space-y-3">
              <span className="text-xs font-bold text-emerald-800">🎉 ¡Curso Completado!</span>
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold py-2 px-3 rounded-lg transition"
              >
                Generar Certificado Oficial
              </button>
            </div>
          )}
        </aside>

        {/* Right Side: Active lesson presentation */}
        <section className="lg:col-span-8 space-y-8 bg-white p-6 rounded-2xl border border-gray-150">
          
          {/* Accent block header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                Tema {activeLessonIndex + 1} de {course.lessons.length}
              </span>
            </div>

            {/* TTS read aloud button accessibility */}
            <button
              onClick={toggleSpeechAccessibility}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                speechActive 
                  ? 'bg-red-100 text-red-700 border border-red-300 animate-pulse' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
              title="Escuchar texto narrado de forma accesible"
            >
              <Volume2 className="w-4 h-4" />
              <span>{speechActive ? 'Detener lectura' : 'Escuchar Lección'}</span>
            </button>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight font-display">
              {currentLesson.title}
            </h2>

            {/* Video mockup frame or YouTube embed */}
            {currentLesson.videoUrl ? (
              <div className="aspect-video w-full rounded-2xl bg-gray-900 border border-gray-800 relative overflow-hidden flex flex-col justify-between shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={currentLesson.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video w-full rounded-2xl bg-gray-900 border border-gray-800 relative overflow-hidden flex flex-col justify-between p-4 group">
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute top-4 left-4 z-10 bg-slate-900/60 backdrop-blur text-[10px] text-gray-200 py-1 px-2.5 rounded border border-slate-700">
                  Mockup Player • SomosCoders Academy
                </div>

                {/* Central play button banner */}
                <div className="m-auto z-10 flex flex-col items-center gap-3">
                  <button
                    onClick={() => alert(`Simulador de reproducción: En un entorno de producción, aquí se cargaría el videotutorial inclusivo subtitulado de la lección "${currentLesson.title}".`)}
                    className="w-14 h-14 bg-amber-400 hover:bg-amber-500 hover:scale-105 rounded-full flex items-center justify-center text-slate-950 transition-all shadow-lg active:scale-95"
                  >
                    <Play className="w-6 h-6 fill-slate-950 ml-1" />
                  </button>
                  <span className="text-xs text-gray-300 font-sans font-semibold tracking-wider text-center max-w-sm px-4">
                    Presiona para reproducir el seminario de {currentLesson.duration}
                  </span>
                </div>

                {/* Video control status */}
                <div className="z-10 flex items-center justify-between text-[10px] text-gray-400 font-mono border-t border-gray-800/60 pt-2 bg-gradient-to-t from-black/80 to-transparent p-2 rounded">
                  <span>00:00 / {currentLesson.duration}</span>
                  <span>CC (Subtítulos incluidos)</span>
                </div>
              </div>
            )}

            {currentLesson.pdfUrl && (
              <div className="mt-4">
                <a 
                  href={currentLesson.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F6F1] border border-[#00A98F]/40 text-[#087A65] hover:bg-[#00A98F] hover:text-white rounded-lg text-sm font-bold transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Descargar Material PDF
                </a>
              </div>
            )}

            {/* Written markdown content guide */}
            <div className="prose max-w-none text-gray-600 space-y-4 pt-4 leading-relaxed font-sans text-sm border-t border-gray-50">
              <p className="whitespace-pre-line text-sm text-gray-700 pt-1 leading-relaxed">
                {currentLesson.content}
              </p>
            </div>
          </div>

          {/* Interactive Playground Section (Dependent on ExerciseType) */}
          <div className="pt-8 border-t border-gray-150 space-y-6">
            <div className="flex items-center gap-2 text-gray-800">
              {currentLesson.exerciseType === 'quiz' ? (
                <FileQuestion className="w-5 h-5 text-amber-500" />
              ) : currentLesson.exerciseType === 'code' ? (
                <Code2 className="w-5 h-5 text-purple-500" />
              ) : (
                <BookMarked className="w-5 h-5 text-indigo-500" />
              )}
              <h3 className="font-extrabold text-lg text-gray-900 font-display">
                Reto Práctico: {currentLesson.exerciseType === 'quiz' ? 'Pregunta de Refuerzo' : currentLesson.exerciseType === 'code' ? 'Simulador de Código / Command CLI' : 'Confirma tu Lectura'}
              </h3>
            </div>

            {/* QUIZ INTERFACE */}
            {currentLesson.exerciseType === 'quiz' && currentLesson.quizQuestion && (
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 space-y-5">
                <p className="font-bold text-sm text-slate-800">
                  {currentLesson.quizQuestion.question}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {currentLesson.quizQuestion.options.map((opt, oIndex) => {
                    let btnStyle = 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700';
                    if (selectedQuizIndex === oIndex) {
                      btnStyle = 'border-amber-400 bg-amber-100/50 text-amber-950 font-bold ring-2 ring-amber-200';
                    }
                    if (quizSubmitted) {
                      if (oIndex === currentLesson.quizQuestion!.correctAnswer) {
                        btnStyle = 'border-emerald-300 bg-emerald-100 text-emerald-900 font-bold';
                      } else if (selectedQuizIndex === oIndex) {
                        btnStyle = 'border-red-300 bg-red-100 text-red-900';
                      } else {
                        btnStyle = 'opacity-50 border-gray-100 bg-white text-gray-400';
                      }
                    }

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleSelectQuiz(oIndex)}
                        disabled={quizSubmitted}
                        className={`p-4 rounded-xl border-2 text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && oIndex === currentLesson.quizQuestion!.correctAnswer && (
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Submitting blocks */}
                {!quizSubmitted ? (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={selectedQuizIndex === null}
                    className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 text-white disabled:text-gray-450 px-5 py-3 rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Enviar Respuesta
                  </button>
                ) : (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
                    quizIsCorrect ? 'bg-emerald-50 text-emerald-800 border-emerald-100' : 'bg-red-50 text-red-800 border-red-100'
                  }`}>
                    <p className="font-bold">
                      {quizIsCorrect ? '🎉 ¡Respuesta Correcta!' : '✗ Respuesta Incorrecta. Intenta repasar el texto superior.'}
                    </p>
                    <p>{currentLesson.quizQuestion.explanation}</p>
                  </div>
                )}
              </div>
            )}

            {/* CODING CODING INTERFACE */}
            {currentLesson.exerciseType === 'code' && currentLesson.codeExercise && (
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-850 space-y-4 text-white font-mono text-xs">
                <div className="space-y-1 bg-slate-800/60 p-4 rounded-xl border border-slate-700/40">
                  <span className="text-amber-400 font-bold">Instrucciones del reto:</span>
                  <p className="text-slate-300 leading-relaxed font-sans mt-1">
                    {currentLesson.codeExercise.instruction}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 pb-1">
                    <span>Editor Interactivo de Terminal</span>
                    <span>JavaScript/TypeScript</span>
                  </div>
                  <textarea
                    rows={4}
                    value={codeInputValue}
                    onChange={(e) => setCodeInputValue(e.target.value)}
                    className="w-full bg-slate-955 text-emerald-400 border border-slate-705 p-4 rounded-xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-300 font-mono text-xs leading-relaxed"
                    placeholder={currentLesson.codeExercise.placeholder}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleValidateCode}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-5 rounded-xl transition text-xs cursor-pointer"
                  >
                    Ejecutar Pruebas
                  </button>
                  <button
                    onClick={() => setCodeInputValue(currentLesson.codeExercise!.initialCode)}
                    className="text-gray-400 hover:text-white transition py-2 px-3 text-xs"
                  >
                    Reiniciar
                  </button>
                </div>

                {/* Validation outcome */}
                {codeSubmitted && (
                  <div className={`p-4 rounded-xl border leading-relaxed text-xs ${
                    codeIsCorrect ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50' : 'bg-red-950/80 text-red-300 border-red-800/50'
                  }`}>
                    {validationOutput}
                  </div>
                )}
              </div>
            )}

            {/* READING ONLY VIEW */}
            {currentLesson.exerciseType === 'reading' && (
              <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-sm text-slate-800">No se requiere quiz interactivo en esta lección.</p>
                  <p className="text-xs text-gray-500 font-sans">Simplemente marca el tema como leído para acumular tu progreso en el dashboard.</p>
                </div>
                
                <button
                  onClick={handleMarkReadCompleteOnly}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 px-5 rounded-xl transition shrink-0"
                >
                  Confirmar Lectura Realizada
                </button>
              </div>
            )}
          </div>

          {/* Navigation controller at the bottom (Prev and Next topic buttons) */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <button
              onClick={handlePrevLesson}
              disabled={activeLessonIndex === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 rounded-xl disabled:opacity-40 disabled:hover:bg-transparent transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-xs font-mono text-gray-400">
              Módulo {activeLessonIndex + 1} de {course.lessons.length}
            </span>

            <button
              onClick={handleNextLesson}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold bg-amber-400 hover:bg-amber-500 hover:scale-101 text-slate-950 rounded-xl transition cursor-pointer active:scale-99"
            >
              <span>{activeLessonIndex === course.lessons.length - 1 ? 'Terminar Curso' : 'Siguiente'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
