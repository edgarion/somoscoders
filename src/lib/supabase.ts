import { createClient } from '@supabase/supabase-js';

// Reemplazar estas variables con las reales de tu proyecto o usar .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://eomqfjqjnfwkmgmnnwdh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'TU_ANON_KEY_AQUI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
