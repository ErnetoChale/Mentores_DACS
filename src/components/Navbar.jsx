import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  PROGRAMA_INFO,
  ACTIVIDADES,
  MENTORES,
  VIDEOS,
  PARTICIPAR,
  CONTACTO,
} from '../data/mentoresData';

// Solo aparecen en el menú las secciones que tienen contenido.
const ENLACES = [
  { href: '#inicio', etiqueta: 'Inicio' },
  { href: '#programa', etiqueta: 'El programa' },
  ACTIVIDADES.length > 0 && { href: '#actividades', etiqueta: 'Actividades' },
  MENTORES.length > 0 && { href: '#mentores', etiqueta: 'Mentores' },
  VIDEOS.length > 0 && { href: '#videos', etiqueta: 'Videos' },
  { href: '#manuales', etiqueta: 'Manuales' },
  (PARTICIPAR.mentorado.enlace || PARTICIPAR.mentor.enlace) && {
    href: '#participar',
    etiqueta: 'Participa',
  },
  (CONTACTO.correo || CONTACTO.telefono || CONTACTO.direccion) && {
    href: '#contacto',
    etiqueta: 'Contacto',
  },
].filter(Boolean);

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const logo = `${import.meta.env.BASE_URL}images/logo.png`;

  return (
    <>
      {/* Franja institucional */}
      <div className="bg-brand-dark text-white text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <span className="tracking-wide">{PROGRAMA_INFO.universidad}</span>
          <span className="hidden sm:block text-white/80">{PROGRAMA_INFO.institucion}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-4" aria-label="Ir al inicio">
            <img src={logo} alt="Logo del Programa de Mentores DACS" className="h-14 w-auto" />
            <span className="border-l border-stone-300 pl-4 leading-tight">
              <span className="block font-heading text-xl font-bold text-brand">
                Mentores DACS
              </span>
              <span className="block text-xs text-stone-500">{PROGRAMA_INFO.institucion}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {ENLACES.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                className="text-sm font-semibold text-ink hover:text-brand py-2 border-b-2 border-transparent hover:border-accent transition-colors"
              >
                {enlace.etiqueta}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-ink"
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
          >
            {abierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {abierto && (
          <nav className="md:hidden border-t border-stone-200 bg-white" aria-label="Navegación móvil">
            <ul className="max-w-6xl mx-auto px-4 py-2">
              {ENLACES.map((enlace) => (
                <li key={enlace.href}>
                  <a
                    href={enlace.href}
                    onClick={() => setAbierto(false)}
                    className="block py-3 text-sm font-semibold text-ink border-b border-stone-100"
                  >
                    {enlace.etiqueta}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}