import React from 'react';
import { Logo } from './Logo';
import { 
  BookOpen, 
  MessageSquare, 
  GraduationCap, 
  HelpCircle, 
  Sparkles, 
  User, 
  Eye, 
  Plus, 
  Minus, 
  ChevronRight,
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
    <header id="app-header" className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div id="accessibility-toolbar" className="bg-gray-900 text-white text-xs py-1.5 px-4 flex justify-between items-center select-none font-mono">
        <div className="flex items-center gap-1.5 text-gray-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Plataforma de Aprendizaje Accesible e Inclusiva</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Font resizing */}
          <div className="flex items-center gap-1 border-r border-gray-700 pr-3.5">
            <span className="text-gray-400 mr-1.5">Tamaño de Texto:</span>
            <button 
              onClick={() => onAdjustFontSize(false)}
              className="p-1 rounded hover:bg-gray-800 hover:text-amber-400 transition"
              title="Disminuir texto"
              aria-label="Disminuir texto"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs bg-gray-800 px-2 py-0.5 rounded text-amber-400 font-bold font-sans">
              {Math.round(fontSizeMultiplier * 100)}%
            </span>
            <button 
              onClick={() => onAdjustFontSize(true)}
              className="p-1 rounded hover:bg-gray-800 hover:text-amber-400 transition"
              title="Aumentar texto"
              aria-label="Aumentar texto"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          {/* Contrast Mode */}
          <button
            onClick={onToggleHighContrast}
            className={`flex items-center gap-1 py-0.5 px-2 rounded text-xs transition font-sans ${
              highContrast 
                ? 'bg-amber-400 text-gray-900 font-bold' 
                : 'hover:bg-gray-800 text-gray-300 hover:text-white'
            }`}
            title="Cambiar Contraste de Color"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{highContrast ? 'Alto Contraste ON' : 'Alto Contraste'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Interactive Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:opacity-85 transition focus:outline-2 focus:outline-offset-4 focus:outline-amber-400 rounded-lg p-1"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          <button
            onClick={() => onNavigate('cursos')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
              currentView === 'cursos' || currentView.startsWith('curso-')
                ? 'bg-amber-100 text-amber-900 border-b-2 border-amber-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Cursos</span>
          </button>
          
          <button
            onClick={() => onNavigate('foro')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
              currentView === 'foro'
                ? 'bg-amber-100 text-amber-900 border-b-2 border-amber-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>Comunidad</span>
          </button>

          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
              currentView === 'dashboard'
                ? 'bg-amber-100 text-amber-900 border-b-2 border-amber-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <span>Mi Progreso</span>
          </button>

          <button
            onClick={() => onNavigate('sobre-nosotros')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
              currentView === 'sobre-nosotros'
                ? 'bg-amber-100 text-amber-900 border-b-2 border-amber-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>Sobre Nosotros</span>
          </button>
        </nav>

        {/* User profile action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs text-gray-400">
              {userEmail ? userEmail : 'Mi Cuenta'}
            </span>
            <span className="text-sm font-semibold text-gray-800 flex items-center gap-1">
              {userName}
              <UserCheck className="w-3.5 h-3.5 text-emerald-500 inline" />
            </span>
          </div>

          <button 
            onClick={onOpenLogin}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 hover:border-amber-400 shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-amber-400"
            title="Cuenta / Iniciar sesión con Google"
          >
            {userPicture ? (
              <img 
                src={userPicture} 
                alt={userName} 
                className="w-7 h-7 rounded-full object-cover border border-amber-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2.01 10.05.01 12c0 1.95.45 3.8 1.26 5.42l4.01-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            )}
            <span className="text-xs font-semibold text-gray-700 hidden lg:inline">
              {userEmail ? 'Perfil' : 'Google Login'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav indicator bar */}
      <div className="md:hidden flex items-center justify-around border-t border-gray-100 py-2 bg-gray-50 text-xs text-gray-500">
        <button 
          onClick={() => onNavigate('cursos')} 
          className={`flex flex-col items-center gap-1 px-3 ${currentView === 'cursos' ? 'text-amber-600 font-bold' : ''}`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Cursos</span>
        </button>
        <button 
          onClick={() => onNavigate('foro')} 
          className={`flex flex-col items-center gap-1 px-3 ${currentView === 'foro' ? 'text-emerald-600 font-bold' : ''}`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Foro</span>
        </button>
        <button 
          onClick={() => onNavigate('dashboard')} 
          className={`flex flex-col items-center gap-1 px-3 ${currentView === 'dashboard' ? 'text-blue-600 font-bold' : ''}`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Progreso</span>
        </button>
        <button 
          onClick={() => onNavigate('sobre-nosotros')} 
          className={`flex flex-col items-center gap-1 px-3 ${currentView === 'sobre-nosotros' ? 'text-indigo-600 font-bold' : ''}`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Nosotros</span>
        </button>
      </div>
    </header>
  );
};
