import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ManualesList from './components/ManualesList';
import { PROGRAMA_INFO } from './data/mentoresData';
import { Building2, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('manuales');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Banner Principal */}
      <section 
        style={{ backgroundColor: '#0a7429' }} 
        className="text-white py-10 px-4 sm:px-6 lg:px-8 border-b-4 border-[#9dc112]"
      >
        <div className="max-w-7xl mx-auto space-y-2.5">
          <div 
            style={{ color: '#9dc112' }} 
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{PROGRAMA_INFO.institucion}</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {PROGRAMA_INFO.titulo}
          </h2>
          <p className="text-emerald-100 max-w-3xl text-xs sm:text-sm leading-relaxed">
            {PROGRAMA_INFO.descripcion}
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'manuales' ? (
          <div className="space-y-5">
            <div className="border-b border-slate-200 pb-4 flex justify-between items-end">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Documentación Operativa y Guías</h3>
                <p className="text-xs text-slate-500 mt-0.5">Repositorio oficial de recursos normativos para mentores y tutorados.</p>
              </div>
            </div>
            <ManualesList />
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 space-y-6 max-w-4xl mx-auto shadow-xs">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">Estructura del Programa de Mentorías</h3>
              <p className="text-xs text-slate-500 mt-1">Estrategia institucional de orientación y desarrollo estudiantil en ciencias de la salud.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60 space-y-2">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4" style={{ color: '#04922d' }} />
                  <span>Acompañamiento Académico</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Asesoría y guía entre pares orientada al fortalecimiento de competencias disciplinares e integración a la vida universitaria.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/60 space-y-2">
                <div className="flex items-center space-x-2 text-slate-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" style={{ color: '#04922d' }} />
                  <span>Alineación Institucional</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lineamientos, formatos y procesos estandarizados bajo la supervisión de la Coordinación de Docencia de la DACS.
                </p>
              </div>
            </div>

            <div 
              style={{ backgroundColor: '#f9fbe8', borderColor: '#9dc112' }} 
              className="p-4 rounded-lg border space-y-2"
            >
              <h4 style={{ color: '#0a7429' }} className="font-heading text-xs font-bold uppercase tracking-wide">
                Objetivos Clave
              </h4>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#04922d' }} />
                  <span>Reducir los índices de rezago e inserción en los primeros semestres.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#04922d' }} />
                  <span>Promover el desarrollo integral y el bienestar de los estudiantes de salud.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Pie de Página */}
      <footer className="bg-white border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 Universidad Juárez Autónoma de Tabasco — DACS.</p>
          <p className="text-slate-400">Portal de Mentores v1.0</p>
        </div>
      </footer>
    </div>
  );
}