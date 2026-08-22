/**
 * Servicio de Base de Datos Local y Autenticación de SomosCoders
 * Permite almacenar usuarios registrados de forma persistente, verificar credenciales
 * y gestionar la sesión activa del estudiante.
 */

export interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  password?: string; // En producción con backend se hashea
  picture: string;
  provider: 'local' | 'google';
  registeredAt: string;
}

const STORAGE_USERS_KEY = 'somoscoders_users_db_v1';
const STORAGE_CURRENT_USER_KEY = 'somoscoders_current_user_v1';

// Base de datos de prueba preconfigurada
const defaultUsers: RegisteredUser[] = [
  {
    id: 'user-demo-1',
    name: 'Estudiante Demo',
    email: 'estudiante@somoscoders.org',
    password: 'password123',
    picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=estudiante@somoscoders.org',
    provider: 'local',
    registeredAt: new Date().toISOString()
  }
];

export const authService = {
  // Obtener todos los usuarios registrados en la base de datos local
  getUsers(): RegisteredUser[] {
    try {
      const data = localStorage.getItem(STORAGE_USERS_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(defaultUsers));
        return defaultUsers;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Error al leer la base de datos de usuarios:', e);
      return defaultUsers;
    }
  },

  // Registrar un nuevo usuario con formulario
  registerUser(fullName: string, email: string, password?: string, picture?: string, provider: 'local' | 'google' = 'local'): { success: boolean; user?: RegisteredUser; error?: string } {
    const cleanEmail = email.trim().toLowerCase();
    const users = this.getUsers();

    const existingUser = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (existingUser && provider === 'local') {
      return {
        success: false,
        error: 'Ya existe una cuenta registrada con este correo electrónico. Por favor, inicia sesión.'
      };
    }

    if (existingUser && provider === 'google') {
      // Si ya existía con Google, actualizamos datos y retornamos
      this.setCurrentSession(existingUser);
      return { success: true, user: existingUser };
    }

    const newUser: RegisteredUser = {
      id: `sc-user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: fullName.trim(),
      email: cleanEmail,
      password: password || undefined,
      picture: picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(cleanEmail)}`,
      provider,
      registeredAt: new Date().toISOString()
    };

    const updatedUsers = [...users, newUser];
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(updatedUsers));
    } catch (e) {
      console.error('Error guardando usuario en localStorage:', e);
    }

    this.setCurrentSession(newUser);
    return { success: true, user: newUser };
  },

  // Iniciar sesión con email y contraseña
  loginUser(email: string, password?: string): { success: boolean; user?: RegisteredUser; error?: string } {
    const cleanEmail = email.trim().toLowerCase();
    const users = this.getUsers();

    const foundUser = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!foundUser) {
      return {
        success: false,
        error: 'No se encontró ninguna cuenta con este correo. Por favor, regístrate primero.'
      };
    }

    if (foundUser.provider === 'local') {
      if (foundUser.password && foundUser.password !== password) {
        return {
          success: false,
          error: 'Contraseña incorrecta. Por favor, verifica tus datos.'
        };
      }
    }

    this.setCurrentSession(foundUser);
    return { success: true, user: foundUser };
  },

  // Guardar la sesión activa del usuario
  setCurrentSession(user: RegisteredUser) {
    try {
      localStorage.setItem(STORAGE_CURRENT_USER_KEY, JSON.stringify(user));
    } catch (e) {
      console.error('Error guardando sesión:', e);
    }
  },

  // Obtener la sesión activa si existe
  getCurrentSession(): RegisteredUser | null {
    try {
      const data = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Error al recuperar sesión:', e);
    }
    return null;
  },

  // Cerrar sesión
  logout() {
    try {
      localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
    } catch (e) {
      console.error('Error al cerrar sesión:', e);
    }
  }
};
