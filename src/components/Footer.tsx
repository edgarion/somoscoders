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
              <li>
                <button onClick={() => onNavigate('equipo')} className="hover:text-[#C8FF00] transition">
                  Equipo
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

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center">
          <p className="text-xs text-gray-500 mb-4 font-bold tracking-wider uppercase">Con el apoyo de</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-70 hover:opacity-100 transition-opacity">
            {/* ACCIÓ Generalitat */}
            <a href="https://www.accio.gencat.cat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <span className="text-sm font-bold text-white tracking-wide">ACCIÓ</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest">Generalitat de Catalunya</span>
            </a>

            {/* Barcelona Activa */}
            <a href="https://www.barcelonactiva.cat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
              <span className="text-sm font-bold text-white tracking-tight">Barcelona <span className="font-normal text-gray-300">Activa</span></span>
            </a>

            {/* Vercel for Nonprofits */}
            <a href="https://vercel.com/nonprofits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/></svg>
              <span className="text-sm font-bold text-white tracking-wide">Vercel <span className="font-normal text-gray-400">for Nonprofits</span></span>
            </a>
            
            {/* Google for Nonprofits */}
            <a href="https://www.google.com/nonprofits/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 grayscale opacity-80" />
              <span className="text-sm font-bold text-white tracking-wide">Google <span className="font-normal text-gray-400">for Nonprofits</span></span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
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
