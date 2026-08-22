import React from 'react';
import { ShieldCheck, Users, Database, Settings, ArrowLeft } from 'lucide-react';

interface AdminViewProps {
  onNavigate: (view: string) => void;
  userEmail?: string;
}

export const AdminView: React.FC<AdminViewProps> = ({ onNavigate, userEmail }) => {
  if (userEmail !== 'edgar.costilla@somoscoders.org') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
        <ShieldCheck className="w-16 h-16 text-rose-500" />
        <h2 className="text-2xl font-bold font-display text-[#0D1117]">Acceso Denegado</h2>
        <p className="text-gray-600">No tienes permisos para ver esta página.</p>
        <button
          onClick={() => onNavigate('home')}
          className="mt-4 px-6 py-2 bg-[#00A98F] text-white font-bold rounded-full text-sm"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in pb-12 max-w-7xl mx-auto pt-6">
      <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-extrabold font-display text-[#0D1117]">Panel de Administración</h1>
          <p className="text-sm text-gray-500 font-mono mt-1">Acceso restringido: {userEmail}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#0D1117] text-lg">Gestión de Usuarios</h3>
            <p className="text-sm text-gray-500 mt-1">Ver y administrar alumnos y mentores registrados.</p>
          </div>
          <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition">
            Administrar Usuarios
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#0D1117] text-lg">Base de Datos</h3>
            <p className="text-sm text-gray-500 mt-1">Gestionar cursos, módulos y progreso.</p>
          </div>
          <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition">
            Acceder a BD
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#0D1117] text-lg">Configuración Global</h3>
            <p className="text-sm text-gray-500 mt-1">Ajustes del sistema y variables de entorno.</p>
          </div>
          <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition">
            Ajustes
          </button>
        </div>
      </div>
    </div>
  );
};
