
import { useEffect, useState } from "react";
import { MENTORES } from "../data/mentoresData";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export default function Mentores() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [imagenAbierta, setImagenAbierta] = useState(false);

  const total = MENTORES.length;
  const mentor = MENTORES[indiceActual];

  const fotoActual = mentor?.foto
    ? mentor.foto.startsWith("http")
      ? mentor.foto
      : `${import.meta.env.BASE_URL}images/${mentor.foto}`
    : null;

  const anterior = () => {
    if (total === 0) return;

    setImagenAbierta(false);
    setIndiceActual((actual) => (actual - 1 + total) % total);
  };

  const siguiente = () => {
    if (total === 0) return;

    setImagenAbierta(false);
    setIndiceActual((actual) => (actual + 1) % total);
  };

  useEffect(() => {
    if (!imagenAbierta || !fotoActual) return;

    const manejarTeclado = (event) => {
      if (event.key === "Escape") {
        setImagenAbierta(false);
      }

      if (event.key === "ArrowLeft") {
        setIndiceActual((actual) => (actual - 1 + total) % total);
      }

      if (event.key === "ArrowRight") {
        setIndiceActual((actual) => (actual + 1) % total);
      }
    };

    const overflowAnterior = document.body.style.overflow;

    document.addEventListener("keydown", manejarTeclado);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", manejarTeclado);
      document.body.style.overflow = overflowAnterior;
    };
  }, [imagenAbierta, fotoActual, total]);

  if (total === 0) {
    return (
      <section
        id="mentores"
        className="w-full px-4 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-ink">
            Directorio de mentores
          </h2>

          <p className="mt-3 text-stone-600">
            Próximamente se publicará el directorio de mentores del programa.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="mentores"
      className="w-full px-4 py-10 sm:px-6 sm:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand">
            Programa de Mentorías Médico Cirujano
          </p>

          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Directorio de mentores
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-stone-600 sm:text-lg">
            Conoce a los estudiantes que forman parte del Programa de
            Mentorías de la División Académica de Ciencias de la Salud
            de la UJAT.
          </p>
        </header>

        {/* Carrusel */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-7">
          {/* Navegación */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={anterior}
              aria-label="Ver directorio anterior"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 text-brand transition hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-brand sm:h-12 sm:w-12"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              className="text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 sm:text-sm">
                Directorio
              </p>

              <p className="mt-1 text-base font-bold text-ink sm:text-lg">
                {indiceActual + 1} de {total}
              </p>
            </div>

            <button
              type="button"
              onClick={siguiente}
              aria-label="Ver siguiente directorio"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 text-brand transition hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-brand sm:h-12 sm:w-12"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Lámina del directorio */}
          <div
            key={mentor.id}
            className="mx-auto w-full"
          >
            <button
              type="button"
              onClick={() => {
                if (fotoActual) setImagenAbierta(true);
              }}
              disabled={!fotoActual}
              aria-label={`Ampliar ${mentor.nombre}`}
              className="group relative mx-auto block w-full cursor-zoom-in overflow-hidden rounded-xl bg-stone-50 focus-visible:outline-2 focus-visible:outline-brand disabled:cursor-default"
            >
              {fotoActual ? (
                <img
                  src={fotoActual}
                  alt={mentor.nombre}
                  className="mx-auto block h-auto max-h-[75vh] w-full object-contain"
                  loading="eager"
                />
              ) : (
                <div className="flex min-h-64 items-center justify-center text-stone-500">
                  Imagen no disponible
                </div>
              )}

              {fotoActual && (
                <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/75 px-3 py-2 text-sm font-semibold text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                  <ZoomIn size={17} />
                  Ampliar directorio
                </span>
              )}
            </button>

            <div className="px-2 pb-2 pt-5 text-center">
              <h3 className="text-xl font-bold text-ink sm:text-2xl">
                {mentor.nombre}
              </h3>

              <p className="mt-1 text-sm text-stone-600 sm:text-base">
                {mentor.area}
              </p>
            </div>
          </div>

          {/* Indicadores */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 border-t border-stone-100 pt-5">
            {MENTORES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setImagenAbierta(false);
                  setIndiceActual(index);
                }}
                aria-label={`Ver ${item.nombre}`}
                aria-current={indiceActual === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  indiceActual === index
                    ? "w-8 bg-brand"
                    : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Visor de imagen ampliada */}
      {imagenAbierta && fotoActual && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${mentor.nombre} ampliado`}
          onClick={() => setImagenAbierta(false)}
        >
          <button
            type="button"
            onClick={() => setImagenAbierta(false)}
            aria-label="Cerrar imagen ampliada"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-7 sm:top-7"
          >
            <X size={26} />
          </button>

          <div
            className="flex h-full w-full max-w-7xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Imagen centrada */}
            <div className="flex min-h-0 w-full flex-1 items-center justify-center">
              <img
                src={fotoActual}
                alt={mentor.nombre}
                className="block max-h-full max-w-full object-contain"
              />
            </div>

            {/* Información del directorio */}
            <div className="w-full shrink-0 px-4 pb-3 pt-4 text-center">
              <p className="m-0 text-center text-base font-semibold text-white sm:text-lg">
                {mentor.nombre}
              </p>

              <p className="mt-1 text-center text-sm text-white/75">
                {mentor.area}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
