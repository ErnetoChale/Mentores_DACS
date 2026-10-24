import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PROGRAMA_INFO, DRIVE_FOLDER_URL, CONTACTO } from '../data/mentoresData';
import Redes, { hayRedes } from './Redes';

export default function Footer() {
  const logo = `${import.meta.env.BASE_URL}images/logo.png`;
  const hayContacto = CONTACTO.correo || CONTACTO.telefono || CONTACTO.direccion;

  return (
    <footer id="contacto" className="scroll-mt-24 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-4">
            <img src={logo} alt="" className="h-14 w-auto bg-white p-1" />
            <p className="font-heading text-xl font-bold leading-tight">Mentores DACS</p>
          </div>
          <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-xs">
            {PROGRAMA_INFO.institucion}
            <br />
            {PROGRAMA_INFO.universidad}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#programa" className="hover:underline">El programa</a></li>
            <li><a href="#manuales" className="hover:underline">Manuales y documentos</a></li>
            <li>
              <a href={DRIVE_FOLDER_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Carpeta de documentos en Drive
              </a>
            </li>
          </ul>
        </div>

        {hayRedes() && (
          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Síguenos
            </h2>
            <Redes className="mt-4" />
          </div>
        )}

        {hayContacto && (
          <div>
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {CONTACTO.correo && (
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${CONTACTO.correo}`} className="hover:underline break-all">
                    {CONTACTO.correo}
                  </a>
                </li>
              )}
              {CONTACTO.telefono && (
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{CONTACTO.telefono}</span>
                </li>
              )}
              {CONTACTO.direccion && (
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{CONTACTO.direccion}</span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/70">
          <p>© 2026 {PROGRAMA_INFO.universidad} — DACS. Todos los derechos reservados.</p>
          <p>Portal del Programa de Mentores</p>
        </div>
      </div>
    </footer>
  );
}