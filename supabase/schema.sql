-- Script SQL para inicializar la base de datos de SomosCoders en Supabase

-- 1. Crear tabla de alumnos
CREATE TABLE IF NOT EXISTS public.alumnos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    picture TEXT,
    provider TEXT DEFAULT 'local',
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Configurar Row Level Security (RLS)
-- Esto protege tu base de datos para que no cualquiera pueda leer o escribir datos sin permiso.
ALTER TABLE public.alumnos ENABLE ROW LEVEL SECURITY;

-- 3. Crear Políticas de Acceso (Policies)
-- Política para permitir que los usuarios puedan registrarse (Insertar)
CREATE POLICY "Permitir registro público" ON public.alumnos
    FOR INSERT 
    WITH CHECK (true);

-- Política para permitir la lectura (Seleccionar)
CREATE POLICY "Permitir lectura de perfiles" ON public.alumnos
    FOR SELECT 
    USING (true);
