
import { useState } from 'react';
import {
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Participar() {
  const formularioUrl = 'https://forms.gle/7cGEFhf3jFhnif5k8';

  const imagenes = [
    `${import.meta.env.BASE_URL}images/actividades/mentoria-1.jpg`,
    `${import.meta.env.BASE_URL}images/actividades/mentoria-2.jpg`,
    `${import.meta.env.BASE_URL}images/actividades/mentoria-3.jpg`,
  ];

  const [imagenActual, setImagenActual] = useState(0);

  const anterior = () => {
    setImagenActual(
      (actual) => (actual - 1 + imagenes.length) % imagenes.length
    );
  };

  const siguiente = () => {
    setImagenActual(
      (actual) => (actual + 1) % imagenes.length
    );
  };

  return (
    <section
      id="participar"
      className="scroll-mt-24 border-t border-stone-200 bg-stone-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Información de la convocatoria */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Convocatoria
            </p>

            <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
              ¿Quieres formar parte del programa?
            </h2>

            <p className="mt-4 leading-relaxed text-stone-600">
              Forma parte del Programa de Mentorías de Médico Cirujano
              de la División Académica de Ciencias de la Salud de la
              Universidad Juárez Autónoma de Tabasco (DACS-UJAT).
            </p>

            <p className="mt-3 leading-relaxed text-stone-600">
              Si estás interesado en participar, consulta la convocatoria
              y completa el formulario de postulación. Lee cuidadosamente
              los requisitos y proporciona la información solicitada.
            </p>

            <a
              href={formularioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
            >
              <FileText size={18} />
              Participar en la convocatoria
              <ExternalLink size={16} />
            </a>

            <p className="mt-3 text-sm text-stone-500">
              El formulario se abrirá en una nueva pestaña.
            </p>
          </div>

          {/* Proceso de postulación */}
          <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
              <FileText size={25} />
            </div>

            <h3 className="font-heading text-xl font-bold text-ink">
              Proceso de postulación
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                  1
                </span>
                <div>
                  <p className="font-semibold text-stone-800">
                    Consulta los requisitos
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Revisa las condiciones y los criterios de participación.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                  2
                </span>
                <div>
                  <p className="font-semibold text-stone-800">
                    Completa el formulario
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Registra tus datos y envía la información solicitada.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                  3
                </span>
                <div>
                  <p className="font-semibold text-stone-800">
                    Mantente al pendiente
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Consulta los canales oficiales del programa para conocer
                    las siguientes etapas del proceso.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-stone-200 pt-5">
              <p className="text-sm leading-relaxed text-stone-500">
                La postulación estará sujeta a los requisitos, plazos y
                procedimientos establecidos en la convocatoria vigente.
              </p>
            </div>
          </div>
        </div>

        {/* Carrusel de tres fotografías */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
            <img
              key={imagenActual}
              src={imagenes[imagenActual]}
              alt={`Actividad del Programa de Mentorías, fotografía ${imagenActual + 1}`}
              className="mx-auto block h-auto max-h-[520px] w-full object-contain"
            />

            {/* Botón anterior */}
            <button
              type="button"
              onClick={anterior}
              aria-label="Fotografía anterior"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-500"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Botón siguiente */}
            <button
              type="button"
              onClick={siguiente}
              aria-label="Fotografía siguiente"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-500"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2">
              {imagenes.map((_, indice) => (
                <button
                  key={indice}
                  type="button"
                  onClick={() => setImagenActual(indice)}
                  aria-label={`Mostrar fotografía ${indice + 1}`}
                  aria-current={
                    imagenActual === indice ? 'true' : undefined
                  }
                  className={`h-2.5 rounded-full transition-all ${
                    imagenActual === indice
                      ? 'w-7 bg-white'
                      : 'w-2.5 bg-white/60 hover:bg-white/90'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-sm text-stone-500">
            Programa de Mentorías · Médico Cirujano · DACS-UJAT
          </p>
        </div>
      </div>
    </section>
  );
}
