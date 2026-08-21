import React from 'react';
import { Logo } from './Logo';
import { 
  Sparkles, 
  Eye, 
  Plus, 
  Minus, 
  Menu,
  UserCheck
} from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onPrevView?: () => void;
  fontSizeMultiplier: number;
  onAdjustFontSize: (increment: boolean) => void;
  highContrast: boolean;
  onToggleHighContrast: () => void;
  currentCategoryFilter?: string;
  onSetCategoryFilter?: (cat: string | undefined) => void;
  userName: string;
  userEmail?: string;
  userPicture?: string;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  fontSizeMultiplier,
  onAdjustFontSize,
  highContrast,
  onToggleHighContrast,
  userName,
  userEmail,
  userPicture,
  onOpenLogin,
}) => {
  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      {/* Main Header 2026 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO SOMOSCODERS (REGLA PRINCIPAL: CONSERVAR EL LOGO EXACTO) */}
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:opacity-90 transition focus:outline-2 focus:outline-offset-4 focus:outline-[#00A98F] rounded-lg p-1"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation (Guía 2026): Inicio, Quiénes somos, Programas, Comunidad, Colabora, Historias, Blog */}
        <nav className="hidden lg:flex items-center gap-6 font-sans text-sm font-semibold text-[#0D1117]">
          <button
            onClick={() => onNavigate('home')}
            className={`transition relative py-1 ${
              currentView === 'home'
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Inicio
          </button>
          
          <button
            onClick={() => onNavigate('sobre-nosotros')}
            className={`transition relative py-1 ${
              currentView === 'sobre-nosotros'
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Quiénes somos
          </button>

          <button
            onClick={() => onNavigate('cursos')}
            className={`transition relative py-1 ${
              currentView === 'cursos' || currentView.startsWith('curso-')
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Programas
          </button>

          <button
            onClick={() => onNavigate('foro')}
            className={`transition relative py-1 ${
              currentView === 'foro'
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Comunidad
          </button>

          <button
            onClick={() => onNavigate('colabora')}
            className={`transition relative py-1 ${
              currentView === 'colabora'
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Colabora
          </button>

          <button
            onClick={() => onNavigate('historias')}
            className={`transition relative py-1 ${
              currentView === 'historias'
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Historias
          </button>

          <button
            onClick={() => onNavigate('blog')}
            className={`transition relative py-1 ${
              currentView === 'blog'
                ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                : 'hover:text-[#00A98F]'
            }`}
          >
            Blog
          </button>
        </nav>

        {/* Action Buttons: ÚNETE + Menu Hamburguesa */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenLogin}
            className="bg-[#00A98F] hover:bg-[#087A65] text-white font-bold px-6 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>ÚNETE</span>
          </button>

          {/* Menú Hamburguesa */}
          <button
            onClick={onOpenLogin}
            className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
            title="Menú"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Bar para vista móvil */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-2 py-2 shadow-xl flex items-center justify-around">
        <button 
          onClick={() => onNavigate('home')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl ${
            currentView === 'home' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Inicio</span>
        </button>
        <button 
          onClick={() => onNavigate('cursos')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl ${
            currentView === 'cursos' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Programas</span>
        </button>
        <button 
          onClick={() => onNavigate('foro')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl ${
            currentView === 'foro' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Comunidad</span>
        </button>
        <button 
          onClick={() => onNavigate('dashboard')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl ${
            currentView === 'dashboard' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Progreso</span>
        </button>
      </div>
    </header>
  );
};
