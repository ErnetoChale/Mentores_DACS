import React from 'react';
import { BookOpen, Users, LogIn } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('manuales')}>
            <div className="bg-sky-600 text-white p-2 rounded-lg font-bold text-xl">
              DACS
            </div>
            <div>
              <h1 className="font-bold text-slate-800 text-lg leading-tight">Mentores DACS</h1>
              <p className="text-xs text-slate-500">División Académica de Ciencias de la Salud</p>
            </div>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-4">
            <button
              onClick={() => setActiveTab('manuales')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'manuales' 
                  ? 'bg-sky-50 text-sky-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Manuales</span>
            </button>

            <button
              onClick={() => setActiveTab('nosotros')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'nosotros' 
                  ? 'bg-sky-50 text-sky-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Programa</span>
            </button>

            <button
              onClick={() => alert("Próximamente: Portal de Autenticación de Mentores")}
              className="flex items-center space-x-2 ml-2 px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              <LogIn className="w-4 h-4" />
              <span>Portal Mentores</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}