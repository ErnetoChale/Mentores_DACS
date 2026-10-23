import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ManualesList from './components/ManualesList';
import { PROGRAMA_INFO } from './data/mentoresData';
import { GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('manuales');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="bg-gradient-to-r from-sky-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium border border-sky-400/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{PROGRAMA_INFO.institucion}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{PROGRAMA_INFO.titulo}</h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            {PROGRAMA_INFO.descripcion}
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'manuales' ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Manuales y Guías Operativas</h3>
              <p className="text-sm text-slate-500">Consulta y descarga la documentación oficial del programa.</p>
            </div>
            <ManualesList />
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4">Acerca del Programa de Mentorías</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex space-x-4">
                <div className="bg-sky-100 p-3 rounded-xl text-sky-700 h-fit">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-base">Acompañamiento entre Pares</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Mentores capacitados orientan a estudiantes de semestres iniciales en aspectos académicos y de integración universitaria.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-sky-100 p-3 rounded-xl text-sky-700 h-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-base">Calidad e Institucionalidad</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Todos los manuales y procesos se alinean con los lineamientos oficiales de la División Académica de Ciencias de la Salud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>© 2026 {PROGRAMA_INFO.institucion} — Plataforma Mentores DACS.</p>
      </footer>
    </div>
  );
}