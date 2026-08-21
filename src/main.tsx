import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {GoogleOAuthProvider} from '@react-oauth/google';
import App from './App.tsx';
import './index.css';

// Client ID de Google OAuth. Puede configurarse en .env como VITE_GOOGLE_CLIENT_ID
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '102938475612-placeholder.apps.googleusercontent.com';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
