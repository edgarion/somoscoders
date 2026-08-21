import React, { useState, useEffect } from 'react';
import { Shield, Settings, Info, Check, X, ShieldAlert, CheckCircle2, ListFilter } from 'lucide-react';

export interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  personalization: boolean;
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    personalization: true,
  });

  const [activeTab, setActiveTab] = useState<'info' | 'config'>('info');

  useEffect(() => {
    // Check if consent is already set
    const savedConsent = localStorage.getItem('somoscoders_cookie_consent');
    if (!savedConsent) {
      // If not saved, show banner after a small delay for premium entrance
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences({
          essential: true,
          analytics: !!parsed.analytics,
          personalization: !!parsed.personalization,
        });
      } catch (e) {
        // Fallback
        setShowBanner(true);
      }
    }
  }, []);

  // Listen to a custom event to reopen preferences from the footer or anywhere
  useEffect(() => {
    const handleReopen = () => {
      setShowModal(true);
      setActiveTab('config');
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleReopen);
    };
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('somoscoders_cookie_consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);

    // If analytics or personalization are disabled, we could clear their respective local data or dispatch an event
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: prefs }));
  };

  const handleAcceptAll = () => {
    const allOn = { essential: true, analytics: true, personalization: true };
    saveConsent(allOn);
  };

  const handleRejectAll = () => {
    const minOn = { essential: true, analytics: false, personalization: false };
    saveConsent(minOn);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* 1. GDPR Bottom Banner Panel */}
      {showBanner && !showModal && (
        <div 
          id="cookie-consent-banner"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-slate-900 border-t-4 border-amber-400 text-white shadow-2xl animate-in slide-in-from-bottom duration-500 ease-out"
          role="region"
          aria-label="Consentimiento de cookies"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-amber-400 text-slate-950 p-2.5 rounded-xl shrink-0 mt-1 shadow-md">
                <Shield className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold tracking-wide uppercase text-amber-400 font-mono flex items-center gap-2">
                  <span>Control de Privacidad (RGPD)</span>
                  <span className="bg-slate-800 text-gray-300 text-[9px] px-2 py-0.5 rounded-full font-semibold normal-case font-sans border border-slate-700">
                    Sello Inclusivo & Seguro
                  </span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed max-w-4xl text-left">
                  En <strong>SomosCoders</strong> respetamos al máximo tu privacidad de acuerdo con el Reglamento General de Protección de Datos (RGPD). Utilizamos cookies técnicas estrictamente necesarias para el funcionamiento de la plataforma (como el alto contraste o la fuente accesible) y, con tu consentimiento opcional, cookies adicionales para analizar de forma anónima tu navegación e impacto social, y personalizar tu experiencia formativa.
                </p>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto pt-2 md:pt-0">
              <button
                id="btn-cookie-config"
                onClick={() => setShowModal(true)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-gray-300 hover:text-white bg-slate-800 hover:bg-slate-750 transition border border-slate-700 font-mono shadow-sm"
              >
                <Settings className="w-4 h-4" />
                <span>Configurar</span>
              </button>
              
              <button
                id="btn-cookie-reject"
                onClick={handleRejectAll}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-200 bg-transparent hover:bg-slate-800 transition font-mono border border-slate-800"
              >
                Rechazar Opcionales
              </button>

              <button
                id="btn-cookie-accept"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 hover:bg-amber-500 text-slate-950 transition font-mono shadow-md"
              >
                Aceptar Todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Detailed Preference Modal */}
      {showModal && (
        <div 
          id="cookie-preference-overlay"
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border-4 border-amber-400/30 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-100 pb-4 shrink-0">
              <div className="space-y-1">
                <span className="text-[10px] text-amber-700 font-mono tracking-wider uppercase font-extrabold block">
                  Reglamento General de Protección de Datos
                </span>
                <h3 id="cookie-preferences-title" className="text-xl font-extrabold text-gray-900 font-display flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                  Centro de Preferencias de Privacidad
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition"
                aria-label="Cerrar panel de preferencias"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2.5 border-b border-gray-100 py-3 shrink-0 font-mono text-[11px] font-bold">
              <button
                onClick={() => setActiveTab('info')}
                className={`py-1.5 px-3 rounded-lg transition ${
                  activeTab === 'info' 
                    ? 'bg-amber-400 text-slate-950' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Información de Privacidad
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`py-1.5 px-3 rounded-lg transition ${
                  activeTab === 'config' 
                    ? 'bg-amber-400 text-slate-950' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                Configurar Cookies ({Object.values(preferences).filter(Boolean).length}/3)
              </button>
            </div>

            {/* Body Content with custom scrolling area */}
            <div className="flex-1 overflow-y-auto py-5 space-y-4 pr-1 min-h-0 text-left">
              {activeTab === 'info' && (
                <div className="space-y-4 text-xs text-gray-600 leading-relaxed font-sans">
                  <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-200/40 flex gap-3">
                    <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-amber-900">
                      <strong>Compromiso Ético de SomosCoders:</strong> Como academia sin fines de lucro y accesible, nunca vendemos, compartimos o comerciamos tus datos con terceros. La información almacenada se procesa localmente con el único propósito de formarte sin barreras.
                    </p>
                  </div>
                  
                  <p>
                    Cuando visitas nuestro bootcamp interactivo, guardamos información sobre tus interacciones a través de tecnologías similares a cookies (como <code>localStorage</code> y <code>cookies de sesión</code>). Estas tecnologías son necesarias para que la plataforma funcione correctamente y se adapte de forma inclusiva a las necesidades de cada estudiante.
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-extrabold text-sm text-gray-800">Tus derechos bajo el RGPD:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Derecho de Información:</strong> Conocer de forma transparente qué cookies utilizamos y para qué se destinan.</li>
                      <li><strong>Derecho de Oposición y Consentimiento:</strong> Decidir libremente qué categorías de cookies deseas activar (excepto las obligatorias para el servicio).</li>
                      <li><strong>Derecho de Acceso y Revocación:</strong> Modificar o eliminar tus preferencias en cualquier momento clicando en "Política de Cookies" en el pie de página de la academia.</li>
                    </ul>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    Nota: Los cambios surtirán efecto de inmediato. Retirar el consentimiento de cookies analíticas o de personalización detendrá las mediciones de rendimiento de manera instantánea.
                  </p>
                </div>
              )}

              {activeTab === 'config' && (
                <div className="space-y-5">
                  {/* Category 1: Essential Cookies */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-150 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-sm text-gray-900">Cookies Técnicas e Imperativas</h4>
                        <span className="text-[8px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-gray-200 text-gray-600">
                          Siempre Activas
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Estas tecnologías son imprescindibles para que el sitio funcione y no pueden desactivarse. Habilitan la accesibilidad (tamaño de letra extendido, contraste para daltonismo o debilidad visual), la progresión interactiva de cursos en la página y la sesión del alumno.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1 opacity-80 cursor-not-allowed">
                        <div className="w-4.5 h-4.5 bg-white rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Analytics Cookies */}
                  <div className="p-4 rounded-2xl border border-gray-150 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:border-gray-200 transition">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-sm text-gray-900">Cookies Analíticas e Impacto Social</h4>
                        <span className="text-[8px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          Opcional
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Nos permiten recopilar de forma 100% anónima estadísticas agregadas sobre el rendimiento académico de nuestros bootcamps gratuitos (como cuántos estudiantes aprueban el programa o descargan certificados). Estos datos respaldan nuestro informe social anual ante patrocinadores solidarios.
                      </p>
                    </div>
                    <div className="shrink-0 shadow-sm">
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${
                          preferences.analytics ? 'bg-amber-400 justify-end' : 'bg-gray-300 justify-start'
                        }`}
                        aria-label="Alternar cookies analíticas"
                      >
                        <div className="w-4.5 h-4.5 bg-white rounded-full flex items-center justify-center shadow-sm">
                          {preferences.analytics ? (
                            <Check className="w-3 h-3 text-amber-600" />
                          ) : (
                            <X className="w-2.5 h-2.5 text-gray-400" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Category 3: Personalization Cookies */}
                  <div className="p-4 rounded-2xl border border-gray-150 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:border-gray-200 transition">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-sm text-gray-900">Cookies de Personalización del Estudiante</h4>
                        <span className="text-[8px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          Opcional
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Facilitan recordar tu nombre de perfil personalizado, la última lección del curso en la que te detuviste y las sugerencias de estudio. Desactivarla restablecerá tu nombre a genérico al reiniciar el navegador y no te sugerirá continuar tus bootcamps.
                      </p>
                    </div>
                    <div className="shrink-0 shadow-sm">
                      <button
                        onClick={() => togglePreference('personalization')}
                        className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${
                          preferences.personalization ? 'bg-amber-400 justify-end' : 'bg-gray-300 justify-start'
                        }`}
                        aria-label="Alternar cookies de personalización"
                      >
                        <div className="w-4.5 h-4.5 bg-white rounded-full flex items-center justify-center shadow-sm">
                          {preferences.personalization ? (
                            <Check className="w-3 h-3 text-amber-600" />
                          ) : (
                            <X className="w-2.5 h-2.5 text-gray-400" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer buttons section */}
            <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 font-mono text-xs">
              <span className="text-[10px] text-gray-400 font-sans italic">
                Respetamos el principio de minimización de datos.
              </span>
              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold bg-gray-50 hover:bg-gray-100 text-gray-700 transition border border-gray-150"
                >
                  Minimo Obligatorio
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-extrabold bg-slate-900 hover:bg-slate-850 text-white transition shadow-md"
                >
                  Guardar Mi Configuración
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

// Help sub-component for premium looks
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
