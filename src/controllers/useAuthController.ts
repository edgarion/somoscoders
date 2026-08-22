import { useState } from 'react';
import { authService, AuthResult } from '../services/authService';
import { RegisteredUser } from '../types';

export const useAuthController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const register = async (
    fullName: string,
    email: string,
    password?: string,
    pictureUrl?: string,
    provider: 'local' | 'google' = 'local',
    lastName?: string,
    role: 'alumno' | 'mentor' = 'alumno'
  ): Promise<AuthResult> => {
    setIsLoading(true);
    setError(null);
    setSuccessMsg(null);

    const result = await authService.registerUser(fullName, email, password, pictureUrl, provider, lastName, role);
    
    if (result.success) {
      setSuccessMsg('¡Cuenta creada con éxito! Bienvenido a SomosCoders.');
    } else {
      setError(result.error || 'No se pudo completar el registro.');
    }
    
    setIsLoading(false);
    return result;
  };

  const login = async (email: string, password?: string): Promise<AuthResult> => {
    setIsLoading(true);
    setError(null);
    setSuccessMsg(null);

    const result = await authService.loginUser(email, password);
    
    if (result.success) {
      setSuccessMsg('¡Sesión iniciada correctamente!');
    } else {
      setError(result.error || 'Credenciales inválidas.');
    }

    setIsLoading(false);
    return result;
  };

  const logout = () => {
    authService.logout();
  };

  const getCurrentSession = (): RegisteredUser | null => {
    return authService.getCurrentSession();
  };

  const clearMessages = () => {
    setError(null);
    setSuccessMsg(null);
  };

  return {
    isLoading,
    error,
    successMsg,
    register,
    login,
    logout,
    getCurrentSession,
    clearMessages,
    setError,
  };
};
