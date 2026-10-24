
import React from 'react';

const MENTORES = [];

export default function Mentores() {
  return (
    <section
      id="mentores"
      className="scroll-mt-24 border-t border-stone-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
          Comunidad académica
        </p>

        <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
          Nuestros mentores
        </h2>

        <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">
          Conoce a quienes participan en el Programa de Mentorías de
          Médico Cirujano de la División Académica de Ciencias de la
          Salud de la UJAT.
        </p>

        {MENTORES.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENTORES.map((mentor) => (
              <article
                key={mentor.id}
                className="border border-stone-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {mentor.nombre}
                </h3>

                {mentor.cargo && (
                  <p className="mt-2 text-sm text-stone-600">
                    {mentor.cargo}
                  </p>
                )}

                {mentor.descripcion && (
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {mentor.descripcion}
                  </p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-stone-500">
            Próximamente se publicará la información de los mentores.
          </p>
        )}
      </div>
    </section>
  );
}
