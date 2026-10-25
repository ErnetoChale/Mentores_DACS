
import ImagenAmpliable from "./ImagenAmpliable";
import { ACTIVIDADES } from "../data/mentoresData";
import { ExternalLink, ClipboardList } from "lucide-react";

export default function Actividades() {
  const imagenActividad = `${import.meta.env.BASE_URL}images/actividades/taller-espirometria.jpg`;
  const registroUrl = "https://forms.gle/G6MG2oNeCBoTfWgu7";

  return (
    <section
      id="actividades"
      className="border-t border-stone-200 bg-stone-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Formación académica
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Actividades
          </h2>

          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
            Conoce las actividades, talleres y experiencias de aprendizaje
            que fortalecen la formación académica de los estudiantes.
          </p>
        </div>

        {ACTIVIDADES.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {ACTIVIDADES.map((actividad) => (
              <article
                key={actividad.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Imagen ampliable */}
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <ImagenAmpliable
                    src={actividad.imagen || imagenActividad}
                    alt={actividad.titulo}
                    className="h-full w-full"
                    imageClassName="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand shadow-sm">
                    Taller académico
                  </span>

                  <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white">
                    Ver imagen ampliada
                  </span>
                </div>

                {/* Información de la actividad */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-snug text-ink">
                    {actividad.titulo}
                  </h3>

                  <div className="mt-5 space-y-3 border-y border-stone-100 py-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <rect x="3" y="5" width="18" height="16" rx="2" />
                          <path d="M16 3v4M8 3v4M3 11h18" />
                        </svg>
                      </span>
                      <p className="text-sm leading-relaxed text-stone-600">
                        <strong className="text-stone-800">Fecha:</strong>{" "}
                        {actividad.fecha}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      </span>
                      <p className="text-sm leading-relaxed text-stone-600">
                        <strong className="text-stone-800">Hora:</strong>{" "}
                        {actividad.hora}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>
                      <p className="text-sm leading-relaxed text-stone-600">
                        <strong className="text-stone-800">Lugar:</strong>{" "}
                        {actividad.lugar}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">
                    {actividad.descripcion}
                  </p>

                  {/* Inscripción */}
                  <div className="mt-6 border-t border-stone-100 pt-5">
                    <a
                      href={registroUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                    >
                      <ClipboardList size={18} />
                      Inscribirme
                      <ExternalLink size={15} />
                    </a>
                    <p className="mt-2 text-center text-xs text-stone-500">
                      El formulario se abrirá en una nueva pestaña.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-12 text-center">
            <h3 className="text-lg font-semibold text-ink">
              Próximamente
            </h3>
            <p className="mt-2 text-stone-600">
              Las próximas actividades del programa se publicarán aquí.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

