import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  PROGRAMA_INFO,
  HISTORIA,
  FUNDADORES,
  GALERIA,
  ACTIVIDADES,
  MENTORES,
  VIDEOS,
  PARTICIPAR,
} from '../data/mentoresData';

const hayHistoria =
  Boolean(HISTORIA.destacado) ||
  (HISTORIA.parrafos || []).length > 0 ||
  (HISTORIA.hitos || []).length > 0 ||
  FUNDADORES.length > 0 ||
  GALERIA.length > 0;

const ENLACES = [
  { id: 'inicio', etiqueta: 'Inicio' },
  { id: 'programa', etiqueta: 'El programa' },
  hayHistoria && { id: 'historia', etiqueta: 'Historia' },
  ACTIVIDADES.length > 0 && { id: 'actividades', etiqueta: 'Actividades' },
  MENTORES.length > 0 && { id: 'mentores', etiqueta: 'Mentores' },
  VIDEOS.length > 0 && { id: 'videos', etiqueta: 'Videos' },
  { id: 'manuales', etiqueta: 'Manuales' },
  (PARTICIPAR.mentorado?.enlace || PARTICIPAR.mentor?.enlace) && {
    id: 'participar',
    etiqueta: 'Participa',
  },
].filter(Boolean);

export default function Navbar({ activeTab, onNavigate }) {
  const [abierto, setAbierto] = useState(false);
  const logo = `${import.meta.env.BASE_URL}images/logo.png`;

  const navegar = (id) => {
    onNavigate(id);
    setAbierto(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const enlaceClase = (id) =>
    `whitespace-nowrap text-sm font-semibold py-2 border-b-2 transition-colors ${
      activeTab === id
        ? 'text-brand border-accent'
        : 'text-ink border-transparent hover:text-brand hover:border-accent'
    }`;

  return (
    <>
      <div className="bg-brand-dark text-white text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-9 flex items-center justify-between gap-4">
          <span className="tracking-wide">{PROGRAMA_INFO.universidad}</span>
          <span className="hidden sm:block text-white/80">
            {PROGRAMA_INFO.institucion}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-20 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navegar('inicio')}
            className="flex items-center gap-3 min-w-0 text-left"
            aria-label="Ir al inicio"
          >
            <img
              src={logo}
              alt="Logo del Programa de Mentorías DACS"
              className="h-12 sm:h-14 w-auto shrink-0"
            />
            <span className="border-l border-stone-300 pl-3 leading-tight">
              <span className="block font-heading text-lg sm:text-xl font-bold text-brand whitespace-nowrap">
                Mentores DACS
              </span>
              <span className="block lg:hidden text-xs text-stone-500">
                {PROGRAMA_INFO.institucion}
              </span>
            </span>
          </button>

          <nav
            className="hidden lg:flex items-center gap-3 xl:gap-5"
            aria-label="Navegación principal"
          >
            {ENLACES.map((enlace) => (
              <button
                key={enlace.id}
                type="button"
                onClick={() => navegar(enlace.id)}
                aria-current={activeTab === enlace.id ? 'page' : undefined}
                className={enlaceClase(enlace.id)}
              >
                {enlace.etiqueta}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 text-ink rounded-md hover:bg-stone-100"
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
          >
            {abierto ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {abierto && (
          <nav
            className="lg:hidden border-t border-stone-200 bg-white"
            aria-label="Navegación móvil"
          >
            <ul className="max-w-6xl mx-auto px-4 py-2">
              {ENLACES.map((enlace) => (
                <li key={enlace.id}>
                  <button
                    type="button"
                    onClick={() => navegar(enlace.id)}
                    aria-current={activeTab === enlace.id ? 'page' : undefined}
                    className={`block w-full text-left py-3 text-sm font-semibold border-b border-stone-100 ${
                      activeTab === enlace.id
                        ? 'text-brand'
                        : 'text-ink hover:text-brand'
                    }`}
                  >
                    {enlace.etiqueta}
                    {activeTab === enlace.id && (
                      <span className="ml-2 text-accent" aria-hidden="true">
                        ●
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
