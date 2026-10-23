import React from 'react';
import { BookOpen, Users, LogIn } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none" 
            onClick={() => setActiveTab('manuales')}
          >
            {/* Logo de Mentores DACS */}
            <img 
              src="/logo.png" 
              alt="Logo Mentores DACS" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
              }}
            />
            <div 
              style={{ backgroundColor: '#0a7429', display: 'none' }} 
              className="text-white font-bold text-sm px-3 py-1.5 rounded-md tracking-wider shadow-xs font-heading"
            >
              UJAT
            </div>

            <div className="border-l border-slate-200 pl-3">
              <h1 className="font-heading font-bold text-slate-900 text-lg leading-tight tracking-tight">
                Mentores DACS
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">División Académica de Ciencias de la Salud</p>
            </div>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('manuales')}
              style={activeTab === 'manuales' ? { backgroundColor: '#0a7429', color: '#ffffff' } : {}}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'manuales' 
                  ? 'shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Manuales Operativos</span>
            </button>

            <button
              onClick={() => setActiveTab('nosotros')}
              style={activeTab === 'nosotros' ? { backgroundColor: '#0a7429', color: '#ffffff' } : {}}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'nosotros' 
                  ? 'shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Programa</span>
            </button>

            <button
              onClick={() => alert("Módulo de autenticación en fase de integración.")}
              style={{ backgroundColor: '#04922d' }}
              className="flex items-center space-x-2 ml-2 px-3.5 py-2 text-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity shadow-xs"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Acceso Mentores</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}