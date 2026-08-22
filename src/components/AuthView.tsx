import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuthController } from '../controllers/useAuthController';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Lock, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthViewProps {
  initialMode?: 'login' | 'register';
  onLoginSuccess: (user: any) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ initialMode = 'register', onLoginSuccess }) => {
  const auth = useAuthController();
  const { t } = useLanguage();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [role, setRole] = useState<'alumno' | 'mentor'>('alumno');

  // Fields
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [verificationStep, setVerificationStep] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [pendingUser, setPendingUser] = useState<any>(null);

  // Sincronizar mode
  useEffect(() => {
    setMode(initialMode);
    auth.clearMessages();
  }, [initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    auth.clearMessages();

    if (mode === 'register' && (!fullName.trim() || !lastName.trim())) {
      auth.setError('Por favor introduce tu nombre y apellido.');
      return;
    }

    if (mode === 'register' && !acceptTerms) {
      auth.setError('Debes aceptar los términos y condiciones para registrarte.');
      return;
    }

    if (password.length < 6) {
      auth.setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (mode === 'register') {
      if (role === 'mentor' && !email.toLowerCase().endsWith('@somoscoders.org')) {
        auth.setError('Para registrarte como mentor necesitas usar tu correo corporativo @somoscoders.org');
        return;
      }
      const result = await auth.register(fullName, email, password, undefined, 'local', lastName, role);
      if (!result.success || !result.user) return;

      setPendingUser({
        name: result.user.name,
        email: result.user.email,
        picture: result.user.picture || '',
        role: result.user.role
      });
      setVerificationStep(true);
    } else {
      const result = await auth.login(email, password);
      if (!result.success || !result.user) return;

      onLoginSuccess({
        name: result.user.name,
        email: result.user.email,
        picture: result.user.picture || '',
        role: result.user.role
      });
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const googleUser = await res.json();
        
          if (googleUser && googleUser.email) {
            if (role === 'mentor' && mode === 'register' && !googleUser.email.toLowerCase().endsWith('@somoscoders.org')) {
              auth.setError('Para registrarte como mentor necesitas usar tu correo corporativo @somoscoders.org');
              return;
            }
            
            const userName = googleUser.name || googleUser.email.split('@')[0];
            const userPicture = googleUser.picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(googleUser.email)}`;

          const result = await auth.register(userName, googleUser.email, undefined, userPicture, 'google', undefined, role);

          if (mode === 'register') {
            setPendingUser({
              name: result.user?.name || userName,
              email: result.user?.email || googleUser.email,
              picture: result.user?.picture || userPicture,
              role: result.user?.role
            });
            setVerificationStep(true);
          } else {
            onLoginSuccess({
              name: result.user?.name || userName,
              email: result.user?.email || googleUser.email,
              picture: result.user?.picture || userPicture,
              role: result.user?.role
            });
          }
        }
      } catch (err) {
        console.error('Google Auth Error:', err);
      }
    },
  });

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode === '1234' && pendingUser) {
      onLoginSuccess(pendingUser);
    } else {
      auth.setError('Código PIN incorrecto. Usa 1234 para esta demo.');
    }
  };

  if (verificationStep) {
    return (
      <div className="w-full max-w-md mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-[#C8FF00] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
          <div className="text-center relative z-10 space-y-4">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Verifica tu correo</h2>
            <p className="text-gray-600 text-sm">
              Hemos enviado un correo a <strong className="text-gray-900">{pendingUser?.email}</strong> con el enlace de validación y una copia en PDF de los textos legales.
            </p>
            <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
              Para continuar en esta versión de demostración, por favor introduce el código de prueba <span className="font-bold text-emerald-600 font-mono text-sm">1234</span>.
            </p>
            
            {auth.error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 font-medium">
                {auth.error}
              </div>
            )}

            <form onSubmit={handleVerifyPin} className="space-y-6 pt-4">
              <div className="space-y-2">
                <input
                  type="text"
                  required
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  placeholder="Introduce el código de 4 dígitos"
                  className="w-full text-center tracking-widest font-mono text-2xl px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#00A98F]/20 focus:border-[#00A98F] outline-none transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:tracking-normal"
                  maxLength={4}
                />
              </div>
              <button
                type="submit"
                className="w-full relative overflow-hidden bg-gray-900 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>Confirmar Cuenta</span>
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00] group-hover:scale-110 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F7F6F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Decoración decorativa */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-[#C8FF00] rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-[#00A98F] rounded-full opacity-10 blur-2xl"></div>

        <div className="text-center relative z-10">
          <img 
            src="/images/auth-dog.png" 
            alt="Mascota Somoscoders" 
            className="mx-auto w-32 h-32 object-contain rounded-full bg-white mb-4 shadow-xl border-4 border-white"
          />
          <h2 className="text-3xl font-extrabold text-gray-900">
            {mode === 'register' ? t('auth.title.register') : t('auth.title.login')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {mode === 'register' ? t('auth.subtitle.register') : t('auth.subtitle.login')}
          </p>
        </div>

        {auth.error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
            {auth.error}
          </div>
        )}
        
        {auth.successMsg && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <p>{auth.successMsg}</p>
          </div>
        )}

        <div className="flex bg-gray-100 p-1 rounded-xl relative z-10">
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
              mode === 'register' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('auth.tab.register')}
          </button>
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
              mode === 'login' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t('auth.tab.login')}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {mode === 'register' && (
            <>
              <div className="mb-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">{t('auth.role.question')}</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('alumno')}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all ${
                      role === 'alumno'
                        ? 'bg-[#00A98F] border-[#00A98F] text-white shadow-md'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-[#00A98F]/50'
                    }`}
                  >
                    {t('auth.role.student')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('mentor')}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all ${
                      role === 'mentor'
                        ? 'bg-[#00A98F] border-[#00A98F] text-white shadow-md'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-[#00A98F]/50'
                    }`}
                  >
                    {t('auth.role.mentor')}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">{t('auth.label.name')}</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder={t('auth.placeholder.name')}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                      required={mode === 'register'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">{t('auth.label.lastname')}</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('auth.placeholder.lastname')}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                      required={mode === 'register'}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">{t('auth.label.email')}</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                placeholder={t('auth.placeholder.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">{t('auth.label.password')}</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                placeholder={t('auth.placeholder.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                required
              />
            </div>
          </div>

          {mode === 'register' && (
            <div className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-xl border border-gray-100 mt-2">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 text-[#00A98F] bg-white border-gray-300 rounded focus:ring-[#00A98F] focus:ring-2 cursor-pointer"
                />
              </div>
              <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed cursor-pointer select-none">
                He leído y acepto los <a href="#" className="text-[#00A98F] font-semibold hover:underline">Términos de Servicio</a> y la <a href="#" className="text-[#00A98F] font-semibold hover:underline">Política de Privacidad</a> de SomosCoders, y autorizo el tratamiento de mis datos.
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={auth.isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[#0D1117] hover:bg-gray-800 text-white py-3 rounded-xl text-sm font-bold transition disabled:opacity-70 shadow-lg hover:shadow-xl"
          >
            {auth.isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'register' ? t('auth.btn.register') : t('auth.btn.login')}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="relative mt-6 z-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-500">{t('auth.or')}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => loginWithGoogle()}
          className="w-full relative z-10 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span>{mode === 'register' ? t('auth.google.register') : t('auth.google.login')}</span>
        </button>
      </div>
    </div>
  );
};
