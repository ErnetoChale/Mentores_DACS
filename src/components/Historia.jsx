import React from 'react';
import { HISTORIA, FUNDADORES, GALERIA } from '../data/mentoresData';

const iniciales = (nombre) =>
  nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0])
    .join('')
    .toUpperCase();

export default function Historia() {
  const parrafos = HISTORIA.parrafos || [];
  const hitos = HISTORIA.hitos || [];
  const hayTexto = parrafos.length > 0 || hitos.length > 0;

  if (!hayTexto && !FUNDADORES.length && !GALERIA.length) return null;

  const base = import.meta.env.BASE_URL;

  return (
    <section id="historia" className="scroll-mt-24 py-16 sm:py-20 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {hayTexto && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Nuestra historia
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
              Historia del programa
            </h2>

            <div className="mt-10 grid gap-12 lg:grid-cols-3">
              {parrafos.length > 0 && (
                <div className="lg:col-span-2 space-y-5">
                  {parrafos.map((parrafo) => (
                    <p key={parrafo} className="text-lg text-stone-700 leading-relaxed">
                      {parrafo}
                    </p>
                  ))}
                </div>
              )}

              {hitos.length > 0 && (
                <ol
                  className={`border-l-4 border-accent pl-6 space-y-6 self-start ${
                    parrafos.length ? '' : 'lg:col-span-3'
                  }`}
                >
                  {hitos.map((hito) => (
                    <li key={`${hito.anio}-${hito.texto}`}>
                      <p className="font-heading text-2xl font-bold text-brand leading-none">
                        {hito.anio}
                      </p>
                      <p className="mt-1.5 text-base text-stone-700 leading-relaxed">{hito.texto}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        )}

        {FUNDADORES.length > 0 && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Quiénes lo hicieron posible
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
              Fundadores
            </h2>

            <ul className="mt-10 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {FUNDADORES.map((persona) => (
                <li key={persona.id}>
                  <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
                    {persona.foto ? (
                      <img
                        src={`${base}images/fundadores/${persona.foto}`}
                        alt={`Fotografía de ${persona.nombre}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-brand text-white font-heading text-5xl font-bold">
                        {iniciales(persona.nombre)}
                      </div>
                    )}
                  </div>
                  <div className="border-t-4 border-accent pt-3">
                    <h3 className="font-heading text-lg font-semibold text-ink leading-snug">
                      {persona.nombre}
                    </h3>
                    {persona.cargo && (
                      <p className="text-sm font-semibold text-brand mt-1">{persona.cargo}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {GALERIA.length > 0 && (
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              En imágenes
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
              Galería
            </h2>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GALERIA.map((imagen) => (
                <li key={imagen.id}>
                  <figure>
                    <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
                      <img
                        src={`${base}images/galeria/${imagen.foto}`}
                        alt={imagen.pie || 'Fotografía del programa de mentores'}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {imagen.pie && (
                      <figcaption className="mt-2 text-sm text-stone-600 leading-snug">
                        {imagen.pie}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}