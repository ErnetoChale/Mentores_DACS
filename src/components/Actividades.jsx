import { ACTIVIDADES } from "../data/mentoresData";

export default function Actividades() {
  const imagenActividad = `${import.meta.env.BASE_URL}images/actividades/taller-espirometria.jpg`;

  return (
    <section
      id="actividades"
      className="bg-white py-16 sm:py-20 border-t border-stone-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Agenda académica
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
            Actividades
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-600">
            Próximas actividades y talleres del programa.
          </p>
        </div>

        {ACTIVIDADES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ACTIVIDADES.map((actividad) => (
              <article
                key={actividad.id}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={imagenActividad}
                    alt={actividad.titulo}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-brand">
                    Taller académico
                  </span>

                  <h2 className="mt-4 text-xl font-bold leading-snug text-ink">
                    {actividad.titulo}
                  </h2>

                  <div className="mt-4 space-y-2 text-sm text-stone-600">
                    <p>
                      <strong className="text-stone-800">Fecha:</strong>{" "}
                      {actividad.fecha}
                    </p>

                    <p>
                      <strong className="text-stone-800">Hora:</strong>{" "}
                      {actividad.hora}
                    </p>

                    <p>
                      <strong className="text-stone-800">Lugar:</strong>{" "}
                      {actividad.lugar}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-stone-700">
                    {actividad.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-stone-200 p-6 text-stone-600">
            Próximamente se publicarán nuevas actividades del programa.
          </p>
        )}
      </div>
    </section>
  );
}
