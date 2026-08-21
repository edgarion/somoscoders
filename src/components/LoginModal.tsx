import React from 'react';
import { LogOut, CheckCircle2, ShieldCheck } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  picture: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  onLoginSuccess: (user: UserProfile) => void;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  user,
  onLoginSuccess,
  onLogout,
}) => {
  if (!isOpen) return null;

  const handleSimulatedGoogleLogin = () => {
    // Google OAuth simulation
    const mockGoogleUser: UserProfile = {
      name: 'Edgar Costilla',
      email: 'edgar.costilla@gmail.com',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocIq7Z-example-avatar=s96-c',
    };
    onLoginSuccess(mockGoogleUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-100 relative overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            {user ? 'Tu Cuenta' : 'Iniciar Sesión'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6">
          {user ? (
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-amber-400 shadow-md object-cover"
                  onError={(e) => {
                    // Fallback image
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100';
                  }}
                />
                <span className="absolute bottom-0 right-0 bg-emerald-500 border-2 border-white w-5 h-5 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-3 text-xs text-amber-800 border border-amber-200">
                Sesión iniciada correctamente con tu cuenta de <strong>Google</strong>.
              </div>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded-xl transition flex items-center justify-center gap-2 border border-rose-200"
              >
                <LogOut className="w-4 h-4" />
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <p className="text-sm text-gray-600">
                Accede a tus cursos, guarda tu progreso y participa en la comunidad con tu cuenta institucional o personal.
              </p>

              {/* Official Google Login Button UI */}
              <button
                onClick={handleSimulatedGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border border-gray-300 shadow-sm transition-all transform active:scale-98 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
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
                <span>Continuar con Google</span>
              </button>

              <div className="text-xs text-gray-400">
                Al iniciar sesión, aceptas nuestras{' '}
                <a href="#legal" className="underline hover:text-gray-600">
                  Condiciones de Servicio
                </a>{' '}
                y{' '}
                <a href="#privacy" className="underline hover:text-gray-600">
                  Política de Privacidad
                </a>
                .
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
