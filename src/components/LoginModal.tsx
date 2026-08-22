import React, { useState, useEffect } from 'react';
import { LogOut, CheckCircle2, ShieldCheck, AlertCircle, Mail, Lock, User, ArrowRight, UserPlus, LogIn, Sparkles } from 'lucide-react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { authService, RegisteredUser } from '../services/authService';

interface UserProfile {
  name: string;
  email: string;
  picture: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  initialMode?: 'login' | 'register';
  onLoginSuccess: (user: UserProfile) => void;
  onLogout: () => void;
}

type AuthMode = 'login' | 'register';

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  user,
  initialMode = 'register',
  onLoginSuccess,
  onLogout,
}) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccessMsg, setAuthSuccessMsg] = useState<string | null>(null);

  // Form inputs for traditional Auth
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Sync mode when modal opens or initialMode changes
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setAuthError(null);
      setAuthSuccessMsg(null);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPassword('');
    setAuthError(null);
    setAuthSuccessMsg(null);
  };

  // Envío tradicional del Formulario de Registro o Login conectando a authService
  const handleTraditionalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccessMsg(null);

    if (!email.trim() || !password.trim()) {
      setAuthError('Por favor completa todos los campos requeridos.');
      return;
    }

    if (mode === 'register' && !fullName.trim()) {
      setAuthError('Por favor introduce tu nombre completo.');
      return;
    }

    if (password.length < 6) {
      setAuthError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (mode === 'register') {
        const result = authService.registerUser(fullName, email, password, undefined, 'local');
        if (!result.success || !result.user) {
          setAuthError(result.error || 'No se pudo completar el registro.');
          setIsLoading(false);
          return;
        }

        setAuthSuccessMsg('¡Cuenta creada con éxito! Bienvenido a SomosCoders.');
        onLoginSuccess({
          name: result.user.name,
          email: result.user.email,
          picture: result.user.picture
        });
        resetForm();
        setTimeout(() => onClose(), 600);
      } else {
        const result = authService.loginUser(email, password);
        if (!result.success || !result.user) {
          setAuthError(result.error || 'Credenciales inválidas.');
          setIsLoading(false);
          return;
        }

        setAuthSuccessMsg('¡Sesión iniciada correctamente!');
        onLoginSuccess({
          name: result.user.name,
          email: result.user.email,
          picture: result.user.picture
        });
        resetForm();
        setTimeout(() => onClose(), 600);
      }
      setIsLoading(false);
    }, 250);
  };

  // Google OAuth Popup Trigger
  const loginWithGooglePopup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setAuthError(null);
        setIsLoading(true);
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const googleUser = await res.json();
        
        if (googleUser && googleUser.email) {
          const userName = googleUser.name || googleUser.email.split('@')[0];
          const userPicture = googleUser.picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(googleUser.email)}`;

          // Almacenar en base de datos local
          const result = authService.registerUser(userName, googleUser.email, undefined, userPicture, 'google');

          onLoginSuccess({
            name: result.user?.name || userName,
            email: result.user?.email || googleUser.email,
            picture: result.user?.picture || userPicture,
          });
          resetForm();
          onClose();
        }
      } catch (err) {
        console.error('Error fetching Google UserInfo:', err);
        setAuthError('No se pudo verificar tu cuenta con Google. Inténtalo nuevamente.');
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => {
      setAuthError('La conexión con Google fue cancelada o no está configurada.');
    },
  });

  // Google One-Tap / Credential Success Handler
  const handleGoogleCredentialSuccess = async (credentialResponse: any) => {
    try {
      setAuthError(null);
      if (credentialResponse.credential) {
        const base64Url = credentialResponse.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const payload = JSON.parse(jsonPayload);

        const userName = payload.name || payload.email;
        const userPicture = payload.picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(payload.email)}`;

        // Almacenar en base de datos local
        const result = authService.registerUser(userName, payload.email, undefined, userPicture, 'google');

        onLoginSuccess({
          name: result.user?.name || userName,
          email: result.user?.email || payload.email,
          picture: result.user?.picture || userPicture,
        });
        resetForm();
        onClose();
      }
    } catch (e) {
      console.error('Error decoding Google JWT:', e);
      setAuthError('Error al validar las credenciales de Google.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1117]/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#F7F6F1] text-[#00A98F] border border-[#00A98F]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold font-display text-[#0D1117]">
                {user ? 'Tu Perfil' : mode === 'register' ? 'Crear Cuenta' : 'Iniciar Sesión'}
              </h2>
              <p className="text-xs text-gray-500 font-sans">
                {user ? 'Sesión activa en SomosCoders' : mode === 'register' ? 'Únete a la comunidad de aprendizaje' : 'Accede a tus cursos y progreso'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="pt-6">
          {user ? (
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-[#00A98F] shadow-md object-cover bg-[#F7F6F1]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`;
                  }}
                />
                <span className="absolute bottom-0 right-0 bg-[#00A98F] border-2 border-white w-5 h-5 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#0D1117]">{user.name}</h3>
                <p className="text-xs text-gray-500 font-mono">{user.email}</p>
              </div>
              <div className="bg-[#F7F6F1] rounded-2xl p-3.5 text-xs text-[#087A65] border border-[#00A98F]/30 font-medium">
                Sesión guardada en el navegador. Tienes acceso a todos los programas de formación y a los canales de la comunidad.
              </div>
              <button
                onClick={() => {
                  authService.logout();
                  onLogout();
                  onClose();
                }}
                className="w-full py-3 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold rounded-2xl transition flex items-center justify-center gap-2 border border-rose-200 text-xs cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Cerrar Sesión</span>
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              
              {/* Tab Selector: Register vs Login */}
              <div className="flex bg-[#F7F6F1] p-1.5 rounded-2xl border border-gray-200/80">
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setAuthError(null);
                    setAuthSuccessMsg(null);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    mode === 'register'
                      ? 'bg-[#00A98F] text-white shadow-sm'
                      : 'text-gray-600 hover:text-[#0D1117]'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Registrarse</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setAuthError(null);
                    setAuthSuccessMsg(null);
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                    mode === 'login'
                      ? 'bg-white text-[#0D1117] shadow-sm'
                      : 'text-gray-600 hover:text-[#0D1117]'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Iniciar Sesión</span>
                </button>
              </div>

              {authError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-3 py-2.5 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              {authSuccessMsg && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2.5 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{authSuccessMsg}</span>
                </div>
              )}

              {/* Formulario Tradicional (Nombre, Email, Contraseña) */}
              <form onSubmit={handleTraditionalSubmit} className="space-y-3.5 text-left">
                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Ej. Ana García"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                        required={mode === 'register'}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Contraseña *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-[#00A98F] hover:bg-[#087A65] disabled:opacity-50 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 text-xs font-sans shadow-sm mt-2 cursor-pointer"
                >
                  {isLoading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{mode === 'register' ? 'Crear Cuenta y Guardar' : 'Iniciar Sesión'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-gray-400 font-medium">o con Google</span>
                </div>
              </div>

              {/* Google Authentication */}
              <div className="space-y-2.5">
                <div className="w-full flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleCredentialSuccess}
                    onError={() => setAuthError('Para usar Google Login en producción añade tu VITE_GOOGLE_CLIENT_ID en el archivo .env')}
                    useOneTap
                    shape="pill"
                    size="large"
                    text={mode === 'register' ? 'signup_with' : 'signin_with'}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => loginWithGooglePopup()}
                  className="w-full flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-[#0D1117] font-semibold py-2.5 px-4 rounded-full border border-gray-200 text-xs transition shadow-xs cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                  <span>{mode === 'register' ? 'Registrarse con Google' : 'Entrar con Google'}</span>
                </button>
              </div>

              {/* Bottom switch mode hint */}
              <div className="text-xs text-gray-500 pt-2 text-center">
                {mode === 'register' ? (
                  <p>
                    ¿Ya tienes una cuenta registrada?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setAuthError(null);
                        setAuthSuccessMsg(null);
                      }}
                      className="font-bold text-[#00A98F] hover:underline cursor-pointer"
                    >
                      Inicia sesión aquí
                    </button>
                  </p>
                ) : (
                  <p>
                    ¿Aún no tienes cuenta?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('register');
                        setAuthError(null);
                        setAuthSuccessMsg(null);
                      }}
                      className="font-bold text-[#00A98F] hover:underline cursor-pointer"
                    >
                      Regístrate gratis
                    </button>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
