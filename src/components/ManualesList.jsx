import React, { useState } from 'react';
import { Search, FileText, Download, ExternalLink } from 'lucide-react';
import { MANUALES, DRIVE_FOLDER_URL, driveView, driveDownload } from '../data/mentoresData';

export default function ManualesList() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const categorias = ['Todos', ...new Set(MANUALES.map((m) => m.categoria))];

  const filtrados = MANUALES.filter((manual) => {
    const texto = `${manual.titulo} ${manual.autores || ''} ${manual.registro || ''}`.toLowerCase();
    const coincideBusqueda = texto.includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todos' || manual.categoria === categoria;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-stone-300 pb-5">
        <div className="flex flex-wrap gap-x-6 gap-y-2" role="tablist" aria-label="Categorías">
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={categoria === cat}
              onClick={() => setCategoria(cat)}
              className={`pb-1 text-sm font-semibold border-b-2 transition-colors ${
                categoria === cat
                  ? 'text-brand border-accent'
                  : 'text-stone-500 border-transparent hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden="true" />
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar un documento"
            aria-label="Buscar un documento"
            className="w-full bg-white border border-stone-300 pl-9 pr-3 py-2 text-sm placeholder:text-stone-400 focus:border-brand"
          />
        </div>
      </div>

      <ul className="divide-y divide-stone-200">
        {filtrados.map((manual) => {
          const ver = manual.driveId ? driveView(manual.driveId) : DRIVE_FOLDER_URL;
          const descargar = manual.driveId ? driveDownload(manual.driveId) : DRIVE_FOLDER_URL;

          return (
            <li key={manual.id} className="py-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex gap-4">
                <FileText className="w-6 h-6 text-brand shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                    {manual.categoria}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-ink leading-snug mt-0.5">
                    {manual.titulo}
                  </h3>
                  {manual.autores && (
                    <p className="text-sm text-stone-600 mt-1.5 max-w-2xl leading-relaxed">
                      <span className="font-semibold text-stone-700">Autores: </span>
                      {manual.autores}
                    </p>
                  )}
                  {manual.registro && (
                    <p className="text-sm text-stone-600 mt-1.5">
                      <span className="font-semibold text-stone-700">
                        Registro de derecho de autor:{' '}
                      </span>
                      {manual.registro}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 md:pl-6">
                <a
                  href={ver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand text-brand px-4 py-2 text-sm font-semibold hover:bg-brand hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Ver
                </a>
                <a
                  href={descargar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark transition-colors"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Descargar
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      {filtrados.length === 0 && (
        <p className="py-12 text-center text-stone-500 border-b border-stone-200">
          No se encontraron documentos con esos criterios.
        </p>
      )}
    </div>
  );
}