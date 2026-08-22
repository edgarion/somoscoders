import React, { useState } from 'react';
import { ShieldCheck, Users, Database, Settings, ArrowLeft, PlusCircle, Video, FileText, Trash2 } from 'lucide-react';
import { Course, CourseCategory, Lesson } from '../types';

interface AdminViewProps {
  onNavigate: (view: string) => void;
  userEmail?: string;
  onAddCourse?: (course: Course) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ onNavigate, userEmail, onAddCourse }) => {
  const isMentor = userEmail?.toLowerCase().endsWith('@somoscoders.org');
  
  const [showCourseForm, setShowCourseForm] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState<CourseCategory>('vibe-coding');
  const [level, setLevel] = useState<'Principiante' | 'Intermedio' | 'Avanzado'>('Principiante');
  const [lessons, setLessons] = useState<Partial<Lesson>[]>([
    { title: '', duration: '15 min', videoUrl: '', pdfUrl: '' }
  ]);

  if (!isMentor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
        <ShieldCheck className="w-16 h-16 text-rose-500" />
        <h2 className="text-2xl font-bold font-display text-[#0D1117]">Acceso Denegado</h2>
        <p className="text-gray-600">No tienes permisos para ver esta página. Debes usar un correo @somoscoders.org</p>
        <button
          onClick={() => onNavigate('home')}
          className="mt-4 px-6 py-2 bg-[#00A98F] text-white font-bold rounded-full text-sm"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const handleAddLesson = () => {
    setLessons([...lessons, { title: '', duration: '15 min', videoUrl: '', pdfUrl: '' }]);
  };

  const handleLessonChange = (index: number, field: keyof Lesson, value: string) => {
    const newLessons = [...lessons];
    newLessons[index] = { ...newLessons[index], [field]: value };
    setLessons(newLessons);
  };

  const handleRemoveLesson = (index: number) => {
    if (lessons.length > 1) {
      setLessons(lessons.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || lessons.length === 0 || !lessons[0].title) {
      alert("Por favor completa los campos obligatorios del curso y al menos una lección con título.");
      return;
    }

    const newCourse: Course = {
      id: `curso-${Date.now()}`,
      slug: title.toLowerCase().replace(/\s+/g, '-'),
      title,
      description,
      longDescription: longDescription || description,
      category,
      level,
      duration: `${lessons.length * 15} min`, // estimate
      lessonsCount: lessons.length,
      studentsCount: 0,
      rating: 5.0,
      instructor: {
        name: userEmail?.split('@')[0] || 'Mentor SomosCoders',
        role: 'Mentor de Plataforma',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail}`,
        bio: 'Instructor experto de la comunidad.'
      },
      syllabus: lessons.map(l => l.title || 'Lección sin título'),
      lessons: lessons.map((l, idx) => ({
        id: `lesson-${Date.now()}-${idx}`,
        title: l.title || `Lección ${idx + 1}`,
        duration: l.duration || '15 min',
        content: `Contenido de la lección generada por ${userEmail}. Revisa el material adjunto.`,
        exerciseType: 'reading',
        videoUrl: l.videoUrl,
        pdfUrl: l.pdfUrl
      }))
    };

    if (onAddCourse) {
      onAddCourse(newCourse);
      alert('¡Curso creado exitosamente! Se ha añadido al catálogo temporalmente.');
      setShowCourseForm(false);
      // Reset form
      setTitle('');
      setDescription('');
      setLongDescription('');
      setLessons([{ title: '', duration: '15 min', videoUrl: '', pdfUrl: '' }]);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12 max-w-7xl mx-auto pt-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold font-display text-[#0D1117]">Panel de Administración</h1>
            <p className="text-sm text-gray-500 font-mono mt-1">Acceso Mentor: {userEmail}</p>
          </div>
        </div>
        <button
          onClick={() => setShowCourseForm(!showCourseForm)}
          className="flex items-center gap-2 px-4 py-2 bg-[#00A98F] text-white rounded-lg text-sm font-bold shadow-md hover:bg-[#087A65] transition"
        >
          <PlusCircle className="w-4 h-4" />
          {showCourseForm ? 'Ocultar Formulario' : 'Crear Nuevo Curso'}
        </button>
      </div>

      {showCourseForm ? (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0D1117] border-b pb-4">Detalles del Curso</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Título del Curso</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#00A98F]" 
                  placeholder="Ej. Introducción al Testing QA" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Categoría</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CourseCategory)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#00A98F]"
                >
                  <option value="vibe-coding">Desarrollo Web (Vibe Coding)</option>
                  <option value="qa">QA Testing</option>
                  <option value="ux">Diseño UX/UI</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700">Nivel</label>
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value as any)}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#00A98F]"
                >
                  <option value="Principiante">Principiante</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">Descripción Corta</label>
              <input 
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#00A98F]" 
                placeholder="Un breve resumen del curso" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700">Descripción Larga</label>
              <textarea 
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#00A98F]" 
                placeholder="Explicación detallada de lo que el alumno aprenderá" 
              />
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#0D1117]">Lecciones (Vídeos / PDFs)</h2>
              <button 
                type="button" 
                onClick={handleAddLesson}
                className="text-xs font-bold text-[#00A98F] hover:bg-[#00A98F]/10 px-3 py-1.5 rounded-lg transition"
              >
                + Añadir Lección
              </button>
            </div>

            {lessons.map((lesson, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#0D1117] flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#00A98F]/20 text-[#087A65] rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    Lección
                  </h3>
                  {lessons.length > 1 && (
                    <button type="button" onClick={() => handleRemoveLesson(index)} className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Título de Lección</label>
                    <input 
                      type="text" 
                      value={lesson.title}
                      onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                      placeholder="Ej. Introducción" 
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1"><Video className="w-3 h-3"/> Enlace YouTube (Opcional)</label>
                    <input 
                      type="url" 
                      value={lesson.videoUrl}
                      onChange={(e) => handleLessonChange(index, 'videoUrl', e.target.value)}
                      placeholder="https://youtube.com/watch?v=..." 
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1"><FileText className="w-3 h-3"/> Enlace PDF (Opcional)</label>
                    <input 
                      type="url" 
                      value={lesson.pdfUrl}
                      onChange={(e) => handleLessonChange(index, 'pdfUrl', e.target.value)}
                      placeholder="https://..." 
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Duración</label>
                    <input 
                      type="text" 
                      value={lesson.duration}
                      onChange={(e) => handleLessonChange(index, 'duration', e.target.value)}
                      placeholder="Ej. 10 min" 
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="px-8 py-3 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold rounded-xl shadow-lg transition">
              Publicar Curso
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#0D1117] text-lg">Gestión de Usuarios</h3>
              <p className="text-sm text-gray-500 mt-1">Ver y administrar alumnos y mentores registrados.</p>
            </div>
            <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition">
              Administrar Usuarios
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#0D1117] text-lg">Base de Datos de Cursos</h3>
              <p className="text-sm text-gray-500 mt-1">Has publicado {0} cursos recientemente.</p>
            </div>
            <button onClick={() => setShowCourseForm(true)} className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-bold transition">
              Crear Nuevo Curso
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#0D1117] text-lg">Configuración Global</h3>
              <p className="text-sm text-gray-500 mt-1">Ajustes del sistema y variables de entorno.</p>
            </div>
            <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition">
              Ajustes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
