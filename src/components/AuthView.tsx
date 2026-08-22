import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuthController } from '../controllers/useAuthController';
import { Mail, Lock, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthViewProps {
  initialMode?: 'login' | 'register';
  onLoginSuccess: (user: any) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ initialMode = 'register', onLoginSuccess }) => {
  const auth = useAuthController();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [role, setRole] = useState<'alumno' | 'mentor'>('alumno');

  // Fields
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    if (password.length < 6) {
      auth.setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (mode === 'register') {
      const result = await auth.register(fullName, email, password, undefined, 'local', lastName, role);
      if (!result.success || !result.user) return;

      onLoginSuccess({
        name: result.user.name,
        email: result.user.email,
        picture: result.user.picture || '',
        role: result.user.role
      });
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
          const userName = googleUser.name || googleUser.email.split('@')[0];
          const userPicture = googleUser.picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(googleUser.email)}`;

          const result = await auth.register(userName, googleUser.email, undefined, userPicture, 'google', undefined, role);

          onLoginSuccess({
            name: result.user?.name || userName,
            email: result.user?.email || googleUser.email,
            picture: result.user?.picture || userPicture,
            role: result.user?.role
          });
        }
      } catch (err) {
        console.error('Google Auth Error:', err);
      }
    },
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F7F6F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Decoración decorativa */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-[#C8FF00] rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-[#00A98F] rounded-full opacity-10 blur-2xl"></div>

        <div className="text-center relative z-10">
          <div className="mx-auto w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 shadow-md">
            <Sparkles className="w-6 h-6 text-[#C8FF00]" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {mode === 'register' ? 'Crea tu cuenta' : 'Bienvenido de nuevo'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {mode === 'register' ? 'Únete a la comunidad de aprendizaje' : 'Accede a tus cursos y progreso'}
          </p>
        </div>

        {auth.errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
            {auth.errorMsg}
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
            Registrarse
          </button>
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
              mode === 'login' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Iniciar Sesión
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {mode === 'register' && (
            <>
              <div className="mb-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">¿Cómo quieres participar?</label>
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
                    Soy Alumno
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
                    Soy Mentor
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Nombre</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Ej. Ana"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                      required={mode === 'register'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Apellido</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ej. García"
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
            <label className="block text-xs font-bold text-gray-700 mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#F7F6F1] border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#00A98F] transition"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={auth.isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[#0D1117] hover:bg-gray-800 text-white py-3 rounded-xl text-sm font-bold transition disabled:opacity-70 shadow-lg hover:shadow-xl"
          >
            {auth.isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === 'register' ? 'Crear Cuenta y Entrar' : 'Iniciar Sesión'}</span>
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
            <span className="px-2 bg-white text-gray-500">O continúa con</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => loginWithGoogle()}
          className="w-full relative z-10 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          <span>{mode === 'register' ? 'Registrarse con Google' : 'Entrar con Google'}</span>
        </button>
      </div>
    </div>
  );
};
