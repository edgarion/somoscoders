import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  Briefcase, 
  Building2, 
  HeartHandshake, 
  ArrowUpRight,
  Code2,
  ChevronRight,
  Quote,
  CheckCircle2,
  Lock,
  Search
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

  const handleCategorySelect = (cat: CourseCategory) => {
    onSetCategoryFilter(cat);
    onNavigate('cursos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 font-sans text-[#0D1117]">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-4 pb-12 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Izquierda: Titulares y CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left relative">
              {/* Overlay: Cuadrícula de cruces estilo editorial en la esquina superior izquierda */}
              <img 
                src="/images/stickers/sticker_cross_grid.png" 
                alt="Grid decorativo" 
                className="absolute -top-6 -left-6 w-14 h-auto opacity-30 pointer-events-none hidden sm:block" 
              />

              {/* Badge: TECNOLOGÍA CON IMPACTO SOCIAL */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F6F1] border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold tracking-wide">
                <span className="text-[#00A98F]">✳</span>
                <span>Tecnología con impacto social</span>
              </div>

              {/* Titular Principal */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#0D1117] leading-[1.1]">
                  Código.<br />
                  Comunidad.<br />
                  <span className="text-[#00A98F] relative inline-block">
                    Oportunidades.
                    {/* Overlay: Trazo verde lima tipo brocha subrayando Oportunidades */}
                    <img 
                      src="/images/stickers/sticker_lime_brush.png" 
                      alt="Subrayado lima" 
                      className="absolute -bottom-2 -left-2 w-full h-3.5 object-contain opacity-70 pointer-events-none -z-10" 
                    />
                  </span>
                </h1>
              </div>

              {/* Descripción */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                Formamos en tecnología a personas en riesgo de exclusión para que construyan un futuro con más oportunidades.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold px-7 py-3.5 rounded-full text-sm font-sans transition shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Conoce nuestros programas</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('colabora')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0D1117] font-semibold px-6 py-3.5 rounded-full text-sm border-2 border-gray-200 transition"
                >
                  <span>Colabora con nosotros</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Avatares oficiales SomosCoders y prueba social */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="flex -space-x-2">
                  <img className="w-8.5 h-8.5 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatars/avatar_girl_headphones.png" alt="Comunidad SomosCoders" />
                  <img className="w-8.5 h-8.5 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatars/avatar_boy_beanie.png" alt="Comunidad SomosCoders" />
                  <img className="w-8.5 h-8.5 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatars/avatar_girl_ponytail.png" alt="Comunidad SomosCoders" />
                  <img className="w-8.5 h-8.5 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatars/avatar_boy_curly.png" alt="Comunidad SomosCoders" />
                  <img className="w-8.5 h-8.5 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatars/avatar_dog_mascot.png" alt="Mascota SomosCoders" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  +150 alumnos graduados
                </span>
              </div>
            </div>

            {/* Derecha: Hero Ilustración Principal con Globo Animado (Reducida un 15% adicional) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none flex justify-center">
                
                {/* Globo de texto animado sobre la ilustración */}
                <div className="absolute -top-6 left-2 sm:left-6 z-20 bg-white border-2 border-[#0D1117] rounded-3xl px-4 py-2.5 shadow-[4px_4px_0px_#0D1117] animate-float hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00A98F] animate-ping" />
                    <span className="text-xs sm:text-sm font-extrabold text-[#0D1117] font-display tracking-tight">
                      Programar y aprender <span className="text-[#00A98F] underline decoration-[#C8FF00] decoration-2">sin barreras</span>
                    </span>
                  </div>
                  {/* Puntero del bocadillo */}
                  <div className="absolute -bottom-2 left-8 w-3.5 h-3.5 bg-white border-r-2 border-b-2 border-[#0D1117] transform rotate-45"></div>
                </div>

                <img 
                  src="/images/hero_main_characters.png"
                  alt="SomosCoders - Programar y aprender sin barreras"
                  className="w-[78%] max-w-[390px] h-auto object-contain max-h-[385px] drop-shadow-2xl hover:scale-[1.01] transition duration-300 mx-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE IMPACTO (Con Overlays en las Cajas) */}
      <section id="impact-section" className="bg-[#F7F6F1] rounded-3xl p-6 sm:p-10 border border-gray-200/80 relative overflow-hidden">
        {/* Overlay fondo: Cuadrícula de cruces sutil */}
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute top-4 right-6 w-16 h-auto opacity-20 pointer-events-none" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Bloque Izquierdo con Ilustración del estudiante */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative">
                <img 
                  src="/images/char_sitting_laptop.png" 
                  alt="Estudiante SomosCoders" 
                  className="w-16 h-16 object-contain rounded-2xl bg-white p-1 border border-gray-200 shadow-xs shrink-0" 
                />
                {/* Overlay: Huella de mascota con terminal sobre el avatar */}
                <img 
                  src="/images/stickers/sticker_paw_logo.png" 
                  alt="Huella coder" 
                  className="absolute -bottom-2 -right-2 w-6 h-6 object-contain drop-shadow-md" 
                />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">NUESTRO IMPACTO</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0D1117] mt-1">
                  Así transformamos vidas con <span className="text-[#00A98F] underline decoration-[#C8FF00] decoration-wavy">código</span>.
                </h2>
              </div>
            </div>

            {/* Grid 4 métricas con iconos lineales */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-1 relative overflow-hidden">
                <Users className="w-5 h-5 text-[#00A98F]" />
                <p className="text-2xl font-extrabold font-display text-[#0D1117]">150</p>
                <p className="text-xs text-gray-500 font-medium">Alumnos graduados</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-1 relative overflow-hidden">
                <Briefcase className="w-5 h-5 text-[#00A98F]" />
                <p className="text-2xl font-extrabold font-display text-[#0D1117]">65%</p>
                <p className="text-xs text-gray-500 font-medium">Inserción laboral</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-1 relative overflow-hidden">
                <Building2 className="w-5 h-5 text-[#00A98F]" />
                <p className="text-2xl font-extrabold font-display text-[#0D1117]">25</p>
                <p className="text-xs text-gray-500 font-medium">Empresas aliadas</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-1 relative overflow-hidden">
                <HeartHandshake className="w-5 h-5 text-[#00A98F]" />
                <p className="text-2xl font-extrabold font-display text-[#0D1117]">50</p>
                <p className="text-xs text-gray-500 font-medium">Mentores voluntarios</p>
              </div>
            </div>
          </div>

          {/* Bloque Destacado Verde Lima con Overlays */}
          <div className="lg:col-span-4 bg-[#C8FF00] p-6 rounded-3xl border-2 border-[#0D1117] text-[#0D1117] relative flex flex-col justify-between min-h-[200px] shadow-[4px_4px_0px_#0D1117] overflow-hidden">
            {/* Overlay: Bocadillo de terminal en esquina superior derecha de la caja */}
            <img 
              src="/images/stickers/sticker_speech_terminal.png" 
              alt="Terminal overlay" 
              className="absolute -top-2 -right-2 w-10 h-auto opacity-20 pointer-events-none" 
            />

            <div className="flex items-start justify-between gap-3 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087A65]">{"{ }"} Oportunidad</span>
                <h3 className="text-lg font-extrabold font-display leading-tight">
                  Cada línea de código es una nueva oportunidad.
                </h3>
              </div>
              <img 
                src="/images/char_girl_rocket.png" 
                alt="Impulsa tu futuro SomosCoders" 
                className="w-16 h-16 object-contain shrink-0 drop-shadow-md" 
              />
            </div>
            <div className="flex justify-end pt-4 relative z-10">
              <button 
                onClick={() => onNavigate('sobre-nosotros')}
                className="w-9 h-9 rounded-full bg-[#0D1117] text-white flex items-center justify-center hover:scale-105 transition cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROGRAMAS (Cards con Overlays estilizados y tamaño balanceado) */}
      <section id="programas-section" className="space-y-8 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">NUESTROS PROGRAMAS</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0D1117] mt-1">
              Formación práctica, gratuita y de calidad.
            </h2>
          </div>
          <button
            onClick={() => { onSetCategoryFilter(undefined); onNavigate('cursos'); }}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00A98F] hover:text-[#087A65] underline decoration-2 transition cursor-pointer"
          >
            <span>VER TODOS LOS PROGRAMAS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid de 4 tarjetas con stickers overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Desarrollo Web */}
          <div 
            onClick={() => handleCategorySelect('vibe-coding')}
            className="bg-[#F7F6F1] hover:bg-white rounded-3xl p-5 border border-gray-200/80 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          >
            <img 
              src="/images/stickers/sticker_tablet_terminal.png" 
              alt="Tablet terminal overlay" 
              className="absolute -top-3 -right-3 w-8 h-auto opacity-30 group-hover:opacity-80 transition duration-300 pointer-events-none" 
            />

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-[#00A98F]/10 text-[#00A98F]">
                  {"</>"} Desarrollo Web
                </span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white p-3 border border-gray-100 flex items-center justify-center">
                <img 
                  src="/images/char_girl_laptop.png"
                  alt="Desarrollo Web"
                  className="w-[70%] h-[70%] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm font-bold font-display text-[#0D1117] group-hover:text-[#00A98F] transition">
                Aprender a programar
              </span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#00A98F] text-gray-700 group-hover:text-white flex items-center justify-center transition border border-gray-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 2: Lógica & Arquitectura */}
          <div 
            onClick={() => handleCategorySelect('vibe-coding')}
            className="bg-[#F7F6F1] hover:bg-white rounded-3xl p-5 border border-gray-200/80 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          >
            <img 
              src="/images/stickers/sticker_cross_grid.png" 
              alt="Grid overlay" 
              className="absolute -top-2 -right-2 w-10 h-auto opacity-25 group-hover:opacity-60 transition duration-300 pointer-events-none" 
            />

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                  ⚡ Arquitectura & Lógica
                </span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white p-3 border border-gray-100 flex items-center justify-center">
                <img 
                  src="/images/char_whiteboard.png"
                  alt="Lógica y Algoritmos"
                  className="w-[70%] h-[70%] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm font-bold font-display text-[#0D1117] group-hover:text-[#00A98F] transition">
                Lógica & Arquitectura
              </span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#00A98F] text-gray-700 group-hover:text-white flex items-center justify-center transition border border-gray-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 3: QA & Testing */}
          <div 
            onClick={() => handleCategorySelect('qa')}
            className="bg-[#F7F6F1] hover:bg-white rounded-3xl p-5 border border-gray-200/80 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          >
            <img 
              src="/images/stickers/sticker_paw_logo.png" 
              alt="Huella overlay" 
              className="absolute -top-2 -right-2 w-7 h-7 opacity-30 group-hover:opacity-90 transition duration-300 pointer-events-none" 
            />

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  🔍 QA & Buenas Prácticas
                </span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white p-3 border border-gray-100 flex items-center justify-center">
                <img 
                  src="/images/char_sitting_laptop.png"
                  alt="QA y Prácticas"
                  className="w-[70%] h-[70%] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm font-bold font-display text-[#0D1117] group-hover:text-[#00A98F] transition">
                Calidad & Testing
              </span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#00A98F] text-gray-700 group-hover:text-white flex items-center justify-center transition border border-gray-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 4: Despegue Profesional */}
          <div 
            onClick={() => handleCategorySelect('ux')}
            className="bg-[#F7F6F1] hover:bg-white rounded-3xl p-5 border border-gray-200/80 hover:border-[#00A98F] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          >
            <img 
              src="/images/stickers/sticker_speech_terminal.png" 
              alt="Bocadillo overlay" 
              className="absolute -top-2 -right-2 w-8 h-auto opacity-25 group-hover:opacity-75 transition duration-300 pointer-events-none" 
            />

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                  🚀 Proyectos & Carrera
                </span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white p-3 border border-gray-100 flex items-center justify-center">
                <img 
                  src="/images/char_girl_rocket.png"
                  alt="Proyectos y Despegue Laboral"
                  className="w-[70%] h-[70%] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm font-bold font-display text-[#0D1117] group-hover:text-[#00A98F] transition">
                Despegue Profesional
              </span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#00A98F] text-gray-700 group-hover:text-white flex items-center justify-center transition border border-gray-200">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMUNIDAD (Sección Emocional con Stickers Overlay) */}
      <section id="comunidad-section" className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-12 border border-gray-200/80 relative overflow-hidden">
        {/* Overlay: Trazo de pintura lima sutil de fondo */}
        <img 
          src="/images/stickers/sticker_lime_brush.png" 
          alt="Brush overlay" 
          className="absolute -top-8 -left-8 w-32 h-auto opacity-25 pointer-events-none" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">COMUNIDAD</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1117]">
              El talento crece cuando se comparte.
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              SomosCoders es más que cursos: es un espacio seguro donde estudiantes, mentores y voluntarios colaboran diariamente para romper barreras en el sector tecnológico.
            </p>

            <ul className="space-y-3 pt-2 text-sm font-semibold text-[#0D1117]">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00A98F] text-white flex items-center justify-center text-xs">✓</span>
                <span>Espacios seguros e inclusivos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00A98F] text-white flex items-center justify-center text-xs">✓</span>
                <span>Mentoría personalizada y acompañamiento constante</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00A98F] text-white flex items-center justify-center text-xs">✓</span>
                <span>Eventos, hackathons y networking profesional</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('foro')}
                className="inline-flex items-center gap-2 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold px-6 py-3 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-sm cursor-pointer"
              >
                <span>ÚNETE A LA COMUNIDAD</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center relative">
            <div className="bg-white p-3.5 rounded-3xl border-4 border-white shadow-xl max-w-sm relative">
              <img 
                src="/images/char_team_highfive.png" 
                alt="Comunidad SomosCoders"
                className="rounded-2xl w-full object-contain"
              />
              {/* Overlay: Huella de mascota con terminal flotante sobre la foto de equipo */}
              <img 
                src="/images/stickers/sticker_paw_logo.png" 
                alt="Huella coder" 
                className="absolute -top-3 -right-3 w-8 h-8 object-contain drop-shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. COLABORA CON EMPRESAS con Overlays */}
      <section id="colabora-section" className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border-2 border-gray-800">
        {/* Overlay: Grid de cruces blanco transparente */}
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid decorativo" 
          className="absolute -bottom-6 -left-6 w-24 h-auto opacity-10 pointer-events-none" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C8FF00]">EMPRESAS Y ENTIDADES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
              Tu empresa también puede formar parte del cambio.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Impulsa tu compromiso social incorporando talento formado en SomosCoders, ofreciendo mentoría o patrocinando nuevas becas de estudio accesible.
            </p>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('colabora')}
                className="inline-flex items-center gap-2 bg-[#C8FF00] hover:bg-amber-300 text-[#0D1117] font-extrabold px-8 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-md cursor-pointer"
              >
                <span>COLABORA CON SOMOSCODERS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center relative">
            <img 
              src="/images/char_whiteboard.png" 
              alt="Colaboración y Formación de Talento" 
              className="w-40 h-auto object-contain drop-shadow-2xl" 
            />
            {/* Overlay: Bocadillo terminal en esquina del dibujo */}
            <img 
              src="/images/stickers/sticker_speech_terminal.png" 
              alt="Terminal sticker" 
              className="absolute top-0 right-4 w-8 h-auto drop-shadow-md" 
            />
          </div>
        </div>
      </section>

    </div>
  );
};
