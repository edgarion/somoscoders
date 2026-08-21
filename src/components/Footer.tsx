import React from 'react';
import { Logo } from './Logo';
import { Mail, Heart, Github, ExternalLink, ShieldCheck } from 'lucide-react';

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
    <footer id="app-footer" className="bg-gray-900 text-gray-300 pt-16 pb-12 mt-20 border-t-4 border-amber-400 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Info and Mission */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              El bootcamp totalmente accesible y gratis, sin límites de SomosCoders. Promovemos la integración de colectivos en riesgo de exclusión social y personas con diversidad funcional en el sector tecnológico.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
              <Heart className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
              <span>Proyecto social y sin fines de lucro</span>
            </div>
          </div>

          {/* Column 2: Courses / Categories */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-sm border-l-2 border-amber-400 pl-3">
              Áreas de Estudio
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleCategoryClick('ux')}
                  className="hover:text-amber-400 hover:underline transition text-left"
                >
                  Diseño UX y Accesibilidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('vibe-coding')}
                  className="hover:text-amber-400 hover:underline transition text-left"
                >
                  Vibe Coding & IA Creativa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('qa')}
                  className="hover:text-amber-400 hover:underline transition text-left"
                >
                  Aseguramiento de Calidad (QA)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('testing')}
                  className="hover:text-amber-400 hover:underline transition text-left"
                >
                  Automatización de Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-sm border-l-2 border-emerald-400 pl-3">
              Recursos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { onNavigate('cursos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition"
                >
                  Ver Todos los Cursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('foro'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition"
                >
                  Comunidad de Aprendizaje
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('sobre-nosotros'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition"
                >
                  Sobre la Asociación
                </button>
              </li>
              <li>
                <a 
                  href="https://somoscoders.org/es" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <span>Bootcamps Oficiales</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact / Volunteer */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-sm border-l-2 border-blue-400 pl-3">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@somoscoders.org" className="hover:text-white hover:underline truncate">
                  info@somoscoders.org
                </a>
              </li>
              <li className="text-xs text-gray-400 leading-relaxed pt-2">
                ¿Quieres colaborar como mentor, donar computadoras o patrocinar estudiantes? ¡Escríbenos hoy mismo!
              </li>
              <li className="pt-2">
                <a 
                  href="https://github.com/somoscoders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-3 py-1.5 text-xs transition"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub de la Comunidad</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>© 2026 SomosCoders. Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-6 mt-4 sm:mt-0 flex-wrap">
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate('legal-legal');
              }}
              className="hover:text-gray-300 hover:underline bg-transparent border-none cursor-pointer outline-none p-0 text-left font-mono"
            >
              Aviso Legal
            </button>
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate('legal-privacidad');
              }}
              className="hover:text-gray-300 hover:underline bg-transparent border-none cursor-pointer outline-none p-0 text-left font-mono"
            >
              Privacidad y RGPD
            </button>
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate('legal-cookies');
              }}
              className="hover:text-amber-400 hover:underline bg-transparent border-none cursor-pointer outline-none p-0 text-left font-mono text-amber-400 font-extrabold"
            >
              Cookies (Configurar)
            </button>
            <button 
              onClick={(e) => { 
                e.preventDefault(); 
                onNavigate('legal-accesibilidad');
              }}
              className="hover:text-gray-300 hover:underline bg-transparent border-none cursor-pointer outline-none p-0 text-left font-mono"
            >
              Accesibilidad WCAG AA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
