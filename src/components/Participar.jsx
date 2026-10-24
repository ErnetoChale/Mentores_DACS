
import React from 'react';

export default function Participar() {
  return (
    <section
      id="participar"
      className="scroll-mt-24 border-t border-stone-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Convocatoria
          </p>

          <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
            ¿Quieres participar?
          </h2>

          <p className="mt-4 leading-relaxed text-stone-600">
            Forma parte del Programa de Mentorías de Médico Cirujano
            de la DACS-UJAT y participa en una comunidad orientada al
            aprendizaje colaborativo y al fortalecimiento académico.
          </p>

          <p className="mt-3 leading-relaxed text-stone-600">
            Consulta los requisitos, las fechas y los procedimientos
            de ingreso en los canales oficiales del programa.
          </p>
        </div>
      </div>
    </section>
  );
}
