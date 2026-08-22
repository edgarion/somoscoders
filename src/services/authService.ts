import { AuthRepository } from '../repositories/AuthRepository';
import { RegisteredUser } from '../types';

export interface AuthResult {
  success: boolean;
  user?: RegisteredUser;
  error?: string;
}

export class AuthService {
  private repository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  getCurrentSession(): RegisteredUser | null {
    return this.repository.getCurrentSession();
  }

  logout(): void {
    this.repository.clearSession();
  }

  async registerUser(
    fullName: string,
    email: string,
    password?: string,
    pictureUrl?: string,
    provider: 'local' | 'google' = 'local',
    lastName?: string,
    role: 'alumno' | 'mentor' = 'alumno'
  ): Promise<AuthResult> {
    const cleanEmail = email.trim().toLowerCase();

    if (provider === 'local') {
      const existingUser = await this.repository.findUserByEmail(cleanEmail);
      if (existingUser) {
        return {
          success: false,
          error: 'Ya existe una cuenta con este correo electrónico.'
        };
      }
    }

    const newUser: RegisteredUser = {
      id: crypto.randomUUID(),
      name: fullName,
      lastName: lastName,
      email: cleanEmail,
      password: provider === 'local' ? password : undefined,
      picture: pictureUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      provider,
      registeredAt: new Date().toISOString(),
      role: role
    };

    if (provider === 'google') {
      const existingUser = await this.repository.findUserByEmail(cleanEmail);
      if (!existingUser) {
        await this.repository.addUser(newUser);
        this.repository.setCurrentSession(newUser);
        return { success: true, user: newUser };
      } else {
        this.repository.setCurrentSession(existingUser);
        return { success: true, user: existingUser };
      }
    }

    await this.repository.addUser(newUser);
    this.repository.setCurrentSession(newUser);
    return { success: true, user: newUser };
  }

  async loginUser(email: string, password?: string): Promise<AuthResult> {
    const cleanEmail = email.trim().toLowerCase();
    const foundUser = await this.repository.findUserByEmail(cleanEmail);

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

    this.repository.setCurrentSession(foundUser);
    return { success: true, user: foundUser };
  }
}

// Singleton instances
const repository = new AuthRepository();
export const authService = new AuthService(repository);
