import { RegisteredUser } from '../types';
import { supabase } from '../lib/supabase';

export class AuthRepository {
  private readonly SESSION_KEY = 'somoscoders_current_session';

  async getAllUsers(): Promise<RegisteredUser[]> {
    const { data, error } = await supabase.from('alumnos').select('*');
    if (error) {
      console.error('Error fetching users from Supabase:', error);
      return [];
    }
    return data || [];
  }

  async saveUsers(users: RegisteredUser[]): Promise<void> {
    // Deprecated for bulk saves in Supabase
    console.warn('saveUsers is deprecated. Use addUser instead.');
  }

  getCurrentSession(): RegisteredUser | null {
    const data = localStorage.getItem(this.SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  setCurrentSession(user: RegisteredUser): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
  }

  clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  async findUserByEmail(email: string): Promise<RegisteredUser | undefined> {
    const { data, error } = await supabase
      .from('alumnos')
      .select('*')
      .ilike('email', email)
      .single();
      
    if (error || !data) {
      return undefined;
    }
    
    // Mapear de snake_case (BD) a camelCase (Frontend)
    return {
      ...data,
      lastName: data.last_name,
    };
  }

  async addUser(user: RegisteredUser): Promise<void> {
    const { lastName, ...rest } = user;
    const dbUser = { ...rest, last_name: lastName };
    const { error } = await supabase.from('alumnos').insert([dbUser]);
    if (error) {
      console.error('Error adding user to Supabase:', error);
      throw error;
    }
  }
}
