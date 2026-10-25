import { MENTORES } from "../data/mentoresData";

export default function Mentores() {
  const mentores = Array.isArray(MENTORES) ? MENTORES : [];

  return (
    <section
      id="mentores"
      className="bg-white py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Comunidad académica
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-3">
            Nuestros mentores
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-600">
            Conoce a quienes comparten su experiencia y acompañan la formación
            académica de los estudiantes de Médico Cirujano de la DACS-UJAT.
          </p>
        </div>

        {mentores.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {mentores.map((mentor, index) => {
              const foto = mentor.foto
                ? mentor.foto.startsWith("http")
                  ? mentor.foto
                  : `${import.meta.env.BASE_URL}images/${
                      mentor.foto.includes("/")
                        ? mentor.foto
                        : `mentores/${mentor.foto}`
                    }`
                : null;

              return (
                <article
                  key={mentor.id ?? index}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    {foto ? (
                      <img
                        src={foto}
                        alt={mentor.nombre || "Mentor del programa"}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-stone-400">
                        <span className="text-sm">Fotografía próximamente</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 h-1 w-12 rounded-full bg-accent" />

                    <h2 className="font-heading text-lg font-bold leading-snug text-brand [overflow-wrap:anywhere]">
                      {mentor.nombre || "Mentor del programa"}
                    </h2>

                    {mentor.semestre && (
                      <p className="mt-2 text-sm font-medium text-stone-500">
                        {mentor.semestre}
                      </p>
                    )}

                    {mentor.area && (
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-stone-700">
                        {mentor.area}
                      </p>
                    )}

                    {mentor.descripcion && (
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">
                        {mentor.descripcion}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-stone-200 bg-stone-50 px-6 py-10 text-center">
            <p className="text-stone-600">
              Próximamente se publicará el directorio de mentores del programa.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
