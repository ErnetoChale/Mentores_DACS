import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";

export default function ImagenAmpliable({
  src,
  alt = "Imagen ampliada",
  className = "",
  imageClassName = "",
  loading = "lazy",
}) {
  const [abierta, setAbierta] = useState(false);

  useEffect(() => {
    if (!abierta) return;

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") setAbierta(false);
    };

    document.addEventListener("keydown", cerrarConEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = "";
    };
  }, [abierta]);

  return (
    <>
      <button
        type="button"
        onClick={() => setAbierta(true)}
        aria-label={`Ampliar imagen: ${alt}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`block ${imageClassName}`}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-black/65 p-2 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
          <ZoomIn size={20} />
        </span>
      </button>

      {abierta &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setAbierta(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
          >
            <button
              type="button"
              onClick={() => setAbierta(false)}
              aria-label="Cerrar imagen"
              className="absolute right-4 top-4 rounded-full bg-white/15 p-3 text-white hover:bg-white/25"
            >
              <X size={28} />
            </button>

            <img
              src={src}
              alt={alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
            />
          </div>,
          document.body
        )}
    </>
  );
}
