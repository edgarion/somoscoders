import React from 'react';
import { Logo } from './Logo';
import { Mail, Heart, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSetCategoryFilter?: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSetCategoryFilter }) => {
  const handleCategoryClick = (cat: string) => {
    if (onSetCategoryFilter) {
      onSetCategoryFilter(cat);
    }
    onNavigate('cursos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#0D1117] text-gray-300 pt-16 pb-24 md:pb-12 mt-20 border-t-4 border-[#00A98F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Columna 1: LOGO ACTUAL + Mascota con sudadera + Misión */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl inline-block">
                <Logo size="sm" />
              </div>
              <img 
                src="/images/char_dog_back_hoodie.png" 
                alt="Mascota SomosCoders con sudadera" 
                className="w-12 h-auto object-contain" 
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              SomosCoders es el bootcamp tecnológico inclusivo y 100% gratuito. Promovemos la integración de colectivos en riesgo de exclusión en el sector tecnológico.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C8FF00] font-mono">
              <Heart className="w-4 h-4 fill-[#C8FF00] text-[#00A98F]" />
              <span>Código. Comunidad. Oportunidades.</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 border-l-2 border-[#00A98F] pl-2 font-display">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#C8FF00] transition">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sobre-nosotros')} className="hover:text-[#C8FF00] transition">
                  Quiénes somos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cursos')} className="hover:text-[#C8FF00] transition">
                  Programas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('foro')} className="hover:text-[#C8FF00] transition">
                  Comunidad
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('colabora')} className="hover:text-[#C8FF00] transition">
                  Colabora
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Programas */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 border-l-2 border-[#00A98F] pl-2 font-display">
              Programas
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => handleCategoryClick('vibe-coding')} className="hover:text-[#C8FF00] transition">
                  Desarrollo Web
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('vibe-coding')} className="hover:text-[#C8FF00] transition">
                  Data & IA
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('qa')} className="hover:text-[#C8FF00] transition">
                  QA & Testing
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('ux')} className="hover:text-[#C8FF00] transition">
                  Diseño UX/UI
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter & Redes */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm border-l-2 border-[#00A98F] pl-2 font-display">
              Newsletter
            </h3>
            <p className="text-xs text-gray-400">Recibe noticias y convocatorias de nuevos programas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-gray-800 border border-gray-700 text-xs px-3 py-2 rounded-xl w-full text-white outline-none focus:border-[#00A98F]"
              />
              <button className="bg-[#00A98F] hover:bg-[#087A65] text-white text-xs font-bold px-3 py-2 rounded-xl">
                Unirme
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 SomosCoders. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('legal-privacidad')} className="hover:text-gray-300">Privacidad</button>
            <button onClick={() => onNavigate('legal-cookies')} className="hover:text-gray-300">Cookies</button>
            <button onClick={() => onNavigate('legal-accesibilidad')} className="hover:text-gray-300">Accesibilidad</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
