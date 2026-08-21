import React from 'react';
import { LogOut, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

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
  const [authError, setAuthError] = React.useState<string | null>(null);

  if (!isOpen) return null;

  // Custom login trigger via Google OAuth2 UserInfo API
  const loginWithCustomPopup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setAuthError(null);
        // Real fetch to Google UserInfo API
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const googleUser = await res.json();
        
        if (googleUser && googleUser.email) {
          onLoginSuccess({
            name: googleUser.name || googleUser.email.split('@')[0],
            email: googleUser.email,
            picture: googleUser.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
          });
          onClose();
        }
      } catch (err) {
        console.error('Error fetching Google UserInfo:', err);
        setAuthError('No se pudo obtener el perfil de Google. Inténtalo de nuevo.');
      }
    },
    onError: (error) => {
      console.error('Google OAuth error:', error);
      setAuthError('El inicio de sesión con Google fue cancelado o falló.');
    },
  });

  const handleCredentialSuccess = async (credentialResponse: any) => {
    try {
      setAuthError(null);
      if (credentialResponse.credential) {
        // Decode JWT token payload safely from Google One Tap / Button
        const base64Url = credentialResponse.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const payload = JSON.parse(jsonPayload);

        onLoginSuccess({
          name: payload.name || payload.email,
          email: payload.email,
          picture: payload.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        });
        onClose();
      }
    } catch (e) {
      console.error('Error decoding Google JWT:', e);
      setAuthError('Error al procesar las credenciales de Google.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-100 relative overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            {user ? 'Tu Cuenta' : 'Acceso & Registro con Google'}
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
                Sesión iniciada correctamente con tu cuenta de <strong>Google API</strong>.
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
                Inicia sesión o regístrate en <strong>SomosCoders</strong> con tu cuenta real de Google para guardar tus avances.
              </p>

              {authError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-3 py-2 rounded-xl text-xs flex items-center gap-2 justify-center">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div className="flex flex-col items-center justify-center gap-3">
                {/* Official Google OAuth Sign-In Component */}
                <div className="w-full flex justify-center">
                  <GoogleLogin
                    onSuccess={handleCredentialSuccess}
                    onError={() => setAuthError('Error al autenticar con la API de Google.')}
                    useOneTap
                    shape="pill"
                    size="large"
                    text="continue_with"
                  />
                </div>

                <div className="relative w-full my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-400 font-mono">o vía Popup OAuth</span>
                  </div>
                </div>

                {/* Backup OAuth Popup Trigger */}
                <button
                  onClick={() => loginWithCustomPopup()}
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-full border border-gray-300 shadow-sm transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                  <span>Abrir Ventana Google OAuth2</span>
                </button>
              </div>

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
