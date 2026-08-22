import { createClient } from '@supabase/supabase-js';

// Reemplazar estas variables con las reales de tu proyecto o usar .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yeklmhrklldozlatibff.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlla2xtaHJrbGxkb3psYXRpYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczOTIzMjEsImV4cCI6MjEwMjk2ODMyMX0.xFRPSmSQag167hRpXalOwxe3Nbu8Ckg8R1gpvGTeY0A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
