import React from 'react';

const ACTIVIDADES = [
  {
    id: '1',
    titulo: 'Talleres de Disección',
    descripcion: 'Sesiones prácticas de anatomía y habilidades quirúrgicas guiadas por mentores.',
  },
  {
    id: '2',
    titulo: 'Sesiones de Asesoría Académica',
    descripcion: 'Acompañamiento personalizado para el reforzamiento de materias clave en Medicina.',
  },
];

export default function Actividades() {
  return (
    <section id="actividades" className="scroll-mt-24 py-16 sm:py-20 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
          Programa
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
          Nuestras Actividades
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ACTIVIDADES.map((act) => (
            <div key={act.id} className="p-6 border border-stone-200 bg-white">
              <h3 className="text-xl font-semibold text-ink">{act.titulo}</h3>
              <p className="mt-2 text-stone-600">{act.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}