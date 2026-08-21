import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Info, 
  UserCheck, 
  Eye, 
  Lock, 
  Cookie, 
  Activity, 
  CheckCircle2, 
  Scale, 
  Check, 
  Send,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

interface LegalViewProps {
  initialTab?: 'legal' | 'privacidad' | 'cookies' | 'accesibilidad';
}

export const LegalView: React.FC<LegalViewProps> = ({ initialTab = 'legal' }) => {
  const [activeTab, setActiveTab] = useState<'legal' | 'privacidad' | 'cookies' | 'accesibilidad'>(initialTab);

  // GDPR Exercise Rights Interactive Form
  const [exerciseRightType, setExerciseRightType] = useState('access');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentFullName, setStudentFullName] = useState('');
  const [verificationAttachment, setVerificationAttachment] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [rightsSubmitted, setRightsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  };

  const handleSendRightsRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentEmail.trim() && studentFullName.trim()) {
      setRightsSubmitted(true);
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold leading-none bg-amber-100 text-amber-950 font-mono tracking-wide uppercase">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>Centro de Cumplimiento Normativo</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-none font-display">
          Transparencia, Privacidad y RGPD
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          En <strong>SomosCoders</strong> defendemos tus derechos digitales con la misma firmeza con la que educamos. Encuentra aquí toda la información legal, de cookies y de protección de datos de nuestra academia.
        </p>
      </section>

      {/* Main Legal Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Navigation Sidebar Index */}
        <aside className="lg:col-span-1 bg-white p-4.5 rounded-2xl border border-gray-100 space-y-2 sticky top-24 shadow-sm">
          <span className="text-[10px] text-gray-405 font-mono uppercase tracking-wider block px-3 pb-2 font-bold">
            Documentos Oficiales
          </span>
          
          <button
            onClick={() => setActiveTab('legal')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition ${
              activeTab === 'legal'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Scale className="w-4 h-4 shrink-0" />
            <span>1. Aviso Legal</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidad')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition ${
              activeTab === 'privacidad'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Lock className="w-4 h-4 shrink-0" />
            <span>2. Política de Privacidad</span>
          </button>

          <button
            onClick={() => setActiveTab('cookies')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition ${
              activeTab === 'cookies'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Cookie className="w-4 h-4 shrink-0" />
            <span>3. Política de Cookies</span>
          </button>

          <button
            onClick={() => setActiveTab('accesibilidad')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-left transition ${
              activeTab === 'accesibilidad'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Eye className="w-4 h-4 shrink-0" />
            <span>4. Declaración Accesibilidad</span>
          </button>

          <div className="pt-4 border-t border-gray-100 mt-2 text-center">
            <button
              onClick={handleOpenCookieSettings}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 hover:border-slate-350 bg-slate-50 hover:bg-slate-100 transition rounded-lg text-[11px] font-bold text-slate-700 font-mono"
            >
              <Cookie className="w-3.5 h-3.5 text-amber-500 fill-amber-300" />
              <span>Mis Preferencias Cookies</span>
            </button>
          </div>
        </aside>

        {/* Content Sheet Area (The Selected Legal Document) */}
        <section className="lg:col-span-3 bg-white border border-gray-100 p-6 sm:p-10 rounded-3xl shadow-sm space-y-8 select-text">
          
          {activeTab === 'legal' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-mono uppercase">De conformidad con la Ley 34/2002 (LSSI-CE)</span>
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">1. Aviso Legal</h2>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se detallan a continuación los datos identificativos y normativos de la entidad gestora de la plataforma académica:
              </p>

              {/* Identity bento list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 text-xs font-sans">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 block font-mono">DENOMINACIÓN SOCIAL</span>
                  <span className="font-extrabold text-gray-800">Asociación de Tecnología Inclusiva SomosCoders</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 block font-mono">N.I.F. / IDENTIFICACIÓN FISCAL</span>
                  <span className="font-extrabold text-gray-800">G-26849312</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 block font-mono">SEDE DE REGISTRO DIRECCIÓN</span>
                  <span className="font-extrabold text-gray-800">Avenida Manuel Girona 18, Barcelona-Viladecans, España</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 block font-mono">CONTACTO OFICIAL</span>
                  <a href="mailto:info@somoscoders.org" className="font-extrabold text-amber-600 hover:underline">info@somoscoders.org</a>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-600 leading-relaxed font-sans">
                <h3 className="font-extrabold text-sm text-gray-900">1.1 Condiciones Generales de Uso</h3>
                <p>
                  El acceso y uso de este portal atribuye la condición de estudiante, quien acepta de manera íntegra estas condiciones de uso. Todos los recursos educativos ofrecidos en SomosCoders son de carácter estrictamente gratuito y se enfocan en fines pedagógicos e inclusivos.
                </p>

                <h3 className="font-extrabold text-sm text-gray-900">1.2 Propiedad Intelectual y Licenciamiento Abierto</h3>
                <p>
                  Salvo indicación expresa, el código de los cursos, proyectos prácticos y guías didácticas publicadas en esta plataforma de prácticas cuenta con una licencia abierta <strong>MIT</strong> o <strong>Creative Commons BY-NC-SA 4.0</strong>. Estás plenamente autorizado a reutilizar, practicar y distribuir los conocimientos adquiridos con fines formativos y de reinserción profesional de colectivos vulnerables.
                </p>

                <h3 className="font-extrabold text-sm text-gray-900">1.3 Exclusión de Responsabilidad Académica</h3>
                <p>
                  La academia SomosCoders ofrece simuladores educativos de aprendizaje (como cuestionarios interactivos, diplomas acreditativos y herramientas formativas en entornos locales o de nube). La superación de estos bootcamps otorga acreditaciones comunitarias digitales independientes de planes universitarios regulados oficialmente, aunque altamente valoradas por las agencias asociadas de empleabilidad técnica.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacidad' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-mono uppercase">Reglamento General de Protección de Datos (RGPD UE 2016/679)</span>
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">2. Política de Privacidad</h2>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Nuestra política de privacidad describe cómo recopilamos, respetamos y garantizamos la seguridad de la información personal de nuestros alumnos de acuerdo con la Ley Orgánica 3/2018 (LOPDGDD) y el Reglamento Europeo de Protección de Datos (RGPD):
              </p>

              {/* Summary table of treatments */}
              <div className="overflow-hidden border border-gray-150 rounded-2xl text-[11px] font-sans">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-gray-600 font-mono text-[10px]">
                      <th className="p-3 font-semibold">Aspecto</th>
                      <th className="p-3 font-semibold">Detalle del Tratamiento de Datos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 text-gray-700">
                    <tr>
                      <td className="p-3 font-bold bg-gray-50/50 w-36">Responsable</td>
                      <td className="p-3">Asociación de Tecnología Inclusiva SomosCoders. Contacto: dpd@somoscoders.org</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-gray-50/50">Finalidad</td>
                      <td className="p-3">Gestión de la matrícula del estudiante, guardado del progreso académico de lecciones cursadas y emisión automatizada de diplomas del bootcamp. No elaboramos perfiles comerciales.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-gray-50/50">Legitimación</td>
                      <td className="p-3">Consentimiento voluntario del usuario al registrar su nombre o inscribirse en los módulos didácticos (Art. 6.1.a RGPD).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-gray-50/50">Destinatarios</td>
                      <td className="p-3">Los datos se almacenan de forma local en tu computadora (localStorage) y se procesan en servidores seguros alojados en territorio de la Unión Europea. No se ceden datos a anunciantes ni corporaciones comerciales.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-gray-50/50">Tus Derechos</td>
                      <td className="p-3">Acceso, Rectificación, Limitación, Oposición, Portabilidad y Supresión total ("Derecho al Olvido") de tus aportes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Interactive Rights Panel */}
              <div className="bg-amber-100/10 border-2 border-dashed border-amber-400 p-6 rounded-2xl space-y-4">
                <div className="flex gap-3">
                  <UserCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left">
                    <h4 className="font-extrabold text-sm text-gray-900">Ejercicio Interactivo de tus Derechos Digitales (RGPD)</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      ¿Quieres suprimir todos tus datos de progreso del navegador o solicitar un archivo portable de tus credenciales de estudio? Completa esta solicitud formalizada de inmediato y nuestro Delegado de Protección de Datos la procesará con máxima prioridad.
                    </p>
                  </div>
                </div>

                {!rightsSubmitted ? (
                  <form onSubmit={handleSendRightsRequest} className="space-y-3.5 pt-2.5 text-xs font-sans">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1 flex flex-col">
                        <label className="font-bold text-gray-700">Nombre del Alumno Solicitante</label>
                        <input 
                          type="text" 
                          required
                          value={studentFullName}
                          onChange={(e) => setStudentFullName(e.target.value)}
                          placeholder="Ej: Edgar Costilla" 
                          className="bg-white border border-gray-250 p-2.5 rounded-lg outline-none text-xs focus:border-amber-400"
                        />
                      </div>
                      <div className="space-y-1 flex flex-col">
                        <label className="font-bold text-gray-700">Correo Asociado</label>
                        <input 
                          type="email" 
                          required
                          value={studentEmail}
                          onChange={(e) => setStudentEmail(e.target.value)}
                          placeholder="Ej: edgar@correo.com" 
                          className="bg-white border border-gray-250 p-2.5 rounded-lg outline-none text-xs focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                      <div className="space-y-1 flex flex-col">
                        <label className="font-bold text-gray-700">Derecho Fundamental que desea ejercer</label>
                        <select
                          value={exerciseRightType}
                          onChange={(e) => setExerciseRightType(e.target.value)}
                          className="bg-white border border-gray-250 p-2.5 rounded-lg outline-none text-xs focus:border-amber-400"
                        >
                          <option value="access">Acceso (Conocer mis datos almacenados)</option>
                          <option value="rectification">Rectificación (Modificar nombre en diplomas)</option>
                          <option value="erasure">Supresión / Derecho al Olvido (Eliminar todo el historial)</option>
                          <option value="export">Portabilidad (Exportar mis cursos y notas en JSON)</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2 pb-1 bg-white sm:bg-transparent p-2 rounded-lg sm:p-0 border border-gray-200 sm:border-0">
                        <input 
                          type="checkbox" 
                          id="verify-identity-chk"
                          checked={verificationAttachment}
                          onChange={(e) => setVerificationAttachment(e.target.checked)}
                          className="w-4 h-4 text-amber-500 rounded border-gray-300 focus:ring-amber-450"
                        />
                        <label htmlFor="verify-identity-chk" className="text-[11px] font-semibold text-gray-600 select-none cursor-pointer">
                          Confirmo ser el titular y adjuntar firma electrónica simulación
                        </label>
                      </div>
                    </div>

                    <div className="space-y-1 flex flex-col">
                      <label className="font-bold text-gray-700">Detalles adicionales de la solicitud (Opcional)</label>
                      <textarea
                        rows={2}
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        placeholder="Escribe detalles adicionales de los datos o progreso que deseas modificar o borrar de manera permanente..."
                        className="bg-white border border-gray-250 p-2.5 rounded-lg outline-none text-xs focus:border-amber-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Formalizar Solicitud de Derecho Digital</span>
                    </button>
                  </form>
                ) : (
                  <div className="bg-emerald-50 text-emerald-800 p-5 rounded-xl border border-emerald-150 space-y-2 text-center animate-in fade-in duration-300">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h5 className="font-extrabold text-sm">¡Solicitud Procesada Correctamente!</h5>
                    <p className="text-xs text-emerald-700 font-sans max-w-sm mx-auto leading-relaxed">
                      Muchas gracias, <strong>{studentFullName}</strong>. Conforme al RGPD europeo, hemos tramitado tu solicitud para el correo <strong>{studentEmail}</strong>. 
                      {exerciseRightType === 'erasure' && ' Se han eliminado del caché local todas las cookies secundarias de forma exitosa.'}
                      {exerciseRightType === 'export' && ' Tu archivo de progreso exportable se ha descargado del almacenamiento del navegador como copia portable.'}
                      Recibirás un acuse de resolución formal en un plazo máximo de 72 horas.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-mono uppercase font-bold">Directiva Europea de Privacidad Electrónica (ePrivacy)</span>
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">3. Política de Cookies</h2>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Este sitio web utiliza tecnologías similares a las cookies para almacenar preferencias inclusivas de tamaño de letra, contrastes, historiales de temas en los foros de debate y para guardar de manera persistente las lecciones completadas por el alumno. Lea los detalles del inventario técnico auditado de forma transparente:
              </p>

              {/* List table of cookies */}
              <div className="border border-gray-150 rounded-2xl overflow-hidden text-xs">
                <div className="bg-gray-50 p-3 font-mono text-[10px] uppercase font-bold text-gray-500 border-b border-gray-150 flex items-center justify-between">
                  <span>Inventario de Almacenamiento Auditado (2026)</span>
                  <span className="text-emerald-600">100% Libres de Rastreadores Comerciales</span>
                </div>
                
                <div className="divide-y divide-gray-150 font-sans">
                  <div className="p-4 flex flex-col sm:flex-row justify-between gap-3 bg-gray-50/35">
                    <div className="space-y-1">
                      <code className="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">somoscoders_cookie_consent</code>
                      <p className="text-[11px] text-gray-500">Almacena tus elecciones del panel RGPD para no volver a preguntarte en tus siguientes lecciones académicas del bootcamp.</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-bold text-gray-400 block uppercase font-mono">TIPO / DURACIÓN</span>
                      <span className="font-bold text-gray-700 text-[11px]">Técnica • 1 año</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row justify-between gap-3">
                    <div className="space-y-1">
                      <code className="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">localStorage (progreso formativo)</code>
                      <p className="text-[11px] text-gray-500">Almacena localmente tus respuestas de exámenes, lecciones logradas del bootcam y el nombre de perfil asignado al estudiante gratis.</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-bold text-gray-400 block uppercase font-mono">TIPO / DURACIÓN</span>
                      <span className="font-bold text-emerald-600 text-[11px]">Estudiante • Permanente</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col sm:flex-row justify-between gap-3">
                    <div className="space-y-1">
                      <code className="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold text-slate-800">fontSizeMultiplier / highContrast</code>
                      <p className="text-[11px] text-gray-500">Mantiene activos tus parámetros accesibles de visualización como el contraste especial para daltonismo y el tamaño tipográfico amigable.</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-bold text-gray-400 block uppercase font-mono">TIPO / DURACIÓN</span>
                      <span className="font-bold text-blue-600 text-[11px]">Accesibilidad • Sesión</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revoke option block */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <h4 className="font-extrabold text-sm text-amber-400">¿Deseas revocar tu consentimiento de cookies opcionales?</h4>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-md font-sans">
                    Puedes desactivar de inmediato la recopilación de estadísticas de telemetría haciendo clic en la re-configuración interactiva del RGPD.
                  </p>
                </div>
                <button
                  onClick={handleOpenCookieSettings}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs font-mono transition shadow-md shrink-0 cursor-pointer"
                >
                  Abrir Gestor de Cookies ⚙️
                </button>
              </div>
            </div>
          )}

          {activeTab === 'accesibilidad' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-mono uppercase font-bold">Inclusión Tecnológica Total (Pautas WCAG 2.1 - Nivel AA)</span>
                <h2 className="text-2xl font-extrabold text-gray-900 font-display">4. Declaración de Accesibilidad</h2>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium text-left">
                La Asociación de Tecnología Inclusiva SomosCoders se ha comprometido de manera inquebrantable a hacer accesible su aula digital de prácticas web, en cumplimiento de los estándares internacionales de la Iniciativa de Accesibilidad Web (WAI) del Consorcio de la World Wide Web (W3C), pautas de accesibilidad web 2.1 (nivel doble A).
              </p>

              <div className="space-y-4 text-xs text-gray-600 leading-relaxed font-sans">
                <h3 className="font-extrabold text-sm text-gray-900">4.1 Herramientas de Igualdad en Aula Digital</h3>
                <p>
                  Para garantizar que estudiantes en situaciones de brecha digital, discapacidad auditiva, debilidad visual o daltonismo puedan formarse con el 100% de eficacia, nuestra plataforma incluye por defecto en la cabecera:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  <li className="flex gap-2.5 items-start p-3.5 rounded-xl border border-gray-150 bg-gray-50/30">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 text-xs font-bold">✔</span>
                    <div>
                      <span className="font-bold text-gray-800 block text-[11px]">Alto Contraste Estricto</span>
                      <span className="text-xs text-gray-500">Paleta con máxima relación de contraste contrastando el fondo con tipografía legible.</span>
                    </div>
                  </li>

                  <li className="flex gap-2.5 items-start p-3.5 rounded-xl border border-gray-150 bg-gray-50/30">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 text-xs font-bold">✔</span>
                    <div>
                      <span className="font-bold text-gray-800 block text-[11px]">Escalado Fluido Tipográfico</span>
                      <span className="text-xs text-gray-500">Amplificación instantánea del contenido tipográfico hasta el 150% sin desmaquetar.</span>
                    </div>
                  </li>

                  <li className="flex gap-2.5 items-start p-3.5 rounded-xl border border-gray-150 bg-gray-50/30">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 text-xs font-bold">✔</span>
                    <div>
                      <span className="font-bold text-gray-800 block text-[11px]">Diseño Navegable por Teclado</span>
                      <span className="text-xs text-gray-500">Uso de etiquetas lógicas de anclaje semántico ID para navegación sin mouse o cursor táctil.</span>
                    </div>
                  </li>

                  <li className="flex gap-2.5 items-start p-3.5 rounded-xl border border-gray-150 bg-gray-50/30">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 text-xs font-bold">✔</span>
                    <div>
                      <span className="font-bold text-gray-800 block text-[11px]">Subtitulado Académico Multimedia</span>
                      <span className="text-xs text-gray-500">Módulos de video y explicaciones con soporte textual claro, paso a paso de programación interactiva.</span>
                    </div>
                  </li>
                </ul>

                <h3 className="font-extrabold text-sm text-gray-900 pt-4">4.2 Canal para Reportes e Incidencias</h3>
                <p>
                  Si experimentas alguna dificultad técnica de accesibilidad o deseas sugerir mejoras de compatibilidad con lectores de pantalla especiales (como JAWS o NVDA) e interfaces táctiles adaptadas, envíanos inmediatamente un correo a <a href="mailto:inclusion@somoscoders.org" className="font-bold text-amber-600 hover:underline">inclusion@somoscoders.org</a>. Tu retroalimentación impulsa la inclusión tecnológica.
                </p>
              </div>
            </div>
          )}

        </section>
      </div>

    </div>
  );
};
