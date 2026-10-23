import React, { useState } from 'react';
import { MANUALES } from '../data/mentoresData';
import { Search, FileText, Download, Eye, Tag } from 'lucide-react';

export default function ManualesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categorias = ['Todos', ...new Set(MANUALES.map(m => m.categoria))];

  const manualesFiltrados = MANUALES.filter(manual => {
    const coincideBusqueda = manual.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             manual.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const coincideCategoria = selectedCategory === 'Todos' || manual.categoria === selectedCategory;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar manual o guía..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <Tag className="w-4 h-4 text-slate-400 flex-shrink-0" />
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manualesFiltrados.map((manual) => (
          <div key={manual.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-sky-800 bg-sky-100 rounded-full">
                  {manual.categoria}
                </span>
                <span className="text-xs text-slate-400">{manual.fecha}</span>
              </div>

              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 text-base leading-snug">{manual.titulo}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{manual.descripcion}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href={manual.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visualizar</span>
              </a>
              <a
                href={manual.archivo}
                download
                className="flex items-center justify-center p-2 bg-sky-50 text-sky-600 hover:bg-sky-100 rounded-lg transition-colors"
                title="Descargar PDF"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {manualesFiltrados.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500 text-sm">No se encontraron manuales que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  );
}