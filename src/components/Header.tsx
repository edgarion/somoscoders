import React, { useState, useRef, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Sparkles, 
  Menu,
  X,
  UserCheck,
  UserPlus,
  LogIn,
  ChevronDown,
  LogOut,
  User,
  GraduationCap,
  Users,
  Briefcase,
  Heart,
  Video,
  FileText
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
  onOpenLogin: (mode?: 'login' | 'register') => void;
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
  const [isJoinDropdownOpen, setIsJoinDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsJoinDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'sobre-nosotros', label: 'Quiénes somos' },
    { id: 'cursos', label: 'Programas' },
    { id: 'foro', label: 'Comunidad' },
    { id: 'colabora', label: 'Colabora' },
    { id: 'historias', label: 'Historias' },
    { id: 'blog', label: 'Blog' },
    { id: 'equipo', label: 'Equipo' }
  ];

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO SOMOSCODERS */}
        <button 
          onClick={() => {
            onNavigate('home');
            setIsMobileMenuOpen(false);
          }} 
          className="hover:opacity-90 transition focus:outline-2 focus:outline-offset-4 focus:outline-[#00A98F] rounded-lg p-1"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation (Guía 2026): Inicio, Quiénes somos, Programas, Comunidad, Colabora, Historias, Blog, Equipo */}
        <nav className="hidden lg:flex items-center gap-6 font-sans text-sm font-semibold text-[#0D1117]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition relative py-1 cursor-pointer ${
                currentView === item.id || (item.id === 'cursos' && currentView.startsWith('curso-'))
                  ? 'text-[#00A98F] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00A98F]'
                  : 'hover:text-[#00A98F]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Dropdown interactivo: ÚNETE (Registrarse / Iniciar Sesión) */}
          <div className="relative" ref={dropdownRef}>
            {userEmail ? (
              // Usuario con sesión iniciada
              <button
                onClick={() => onOpenLogin('login')}
                className="flex items-center gap-2 bg-[#F7F6F1] hover:bg-gray-200/80 border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-[#0D1117] transition cursor-pointer"
              >
                {userPicture ? (
                  <img src={userPicture} alt={userName} className="w-5 h-5 rounded-full object-cover" />
                ) : (
                  <User className="w-4 h-4 text-[#00A98F]" />
                )}
                <span className="max-w-[100px] truncate">{userName}</span>
              </button>
            ) : (
              // Botón ÚNETE con opciones Registrarse / Iniciar Sesión
              <div className="relative">
                <button 
                  onClick={() => setIsJoinDropdownOpen((prev) => !prev)}
                  className="bg-[#00A98F] hover:bg-[#087A65] text-white font-bold px-5 py-2.5 rounded-full text-xs font-sans tracking-wider uppercase transition shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5 group"
                >
                  <span>ÚNETE</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isJoinDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Menú Desplegable de Autenticación */}
                {isJoinDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-fadeIn">
                    <div className="px-3 py-2 border-b border-gray-100 text-left">
                      <p className="text-[11px] font-bold text-gray-400 uppercase font-mono">Bienvenido/a</p>
                      <p className="text-xs font-bold text-[#0D1117]">Acceso a la comunidad</p>
                    </div>

                    <div className="space-y-1 pt-1.5">
                      <button
                        onClick={() => {
                          setIsJoinDropdownOpen(false);
                          onOpenLogin('register');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-left text-[#0D1117] hover:bg-[#F7F6F1] hover:text-[#00A98F] transition cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#00A98F]/10 text-[#00A98F] flex items-center justify-center shrink-0">
                          <UserPlus className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold leading-tight">Registrarse</p>
                          <p className="text-[10px] text-gray-500 font-normal">Crear cuenta gratis</p>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setIsJoinDropdownOpen(false);
                          onOpenLogin('login');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-left text-[#0D1117] hover:bg-[#F7F6F1] hover:text-[#087A65] transition cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
                          <LogIn className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold leading-tight">Iniciar Sesión</p>
                          <p className="text-[10px] text-gray-500 font-normal">Acceder a mis cursos</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Menú Hamburguesa (VISIBLE ÚNICAMENTE EN MÓVIL lg:hidden) */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition cursor-pointer"
            title="Abrir menú"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable (SOLO EN MOBILE lg:hidden) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-xl font-bold text-sm transition ${
                  currentView === item.id
                    ? 'bg-[#F7F6F1] text-[#00A98F]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botones de Registro / Login en Mobile */}
          <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogin('register');
              }}
              className="w-full py-2.5 px-3 bg-[#00A98F] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Registrarse</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogin('login');
              }}
              className="w-full py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-[#0D1117] font-bold rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Iniciar Sesión</span>
            </button>
          </div>
        </div>
      )}

      {/* Barra flotante inferior para acceso rápido en móvil */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-2 py-2 shadow-xl flex items-center justify-around">
        <button 
          onClick={() => onNavigate('home')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl cursor-pointer ${
            currentView === 'home' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Inicio</span>
        </button>
        <button 
          onClick={() => onNavigate('cursos')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl cursor-pointer ${
            currentView === 'cursos' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Programas</span>
        </button>
        <button 
          onClick={() => onNavigate('foro')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl cursor-pointer ${
            currentView === 'foro' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Comunidad</span>
        </button>
        <button 
          onClick={() => onNavigate('dashboard')} 
          className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl cursor-pointer ${
            currentView === 'dashboard' ? 'text-[#00A98F] font-bold bg-[#F7F6F1]' : 'text-gray-500'
          }`}
        >
          <span className="text-xs">Progreso</span>
        </button>
      </div>
    </header>
  );
};
