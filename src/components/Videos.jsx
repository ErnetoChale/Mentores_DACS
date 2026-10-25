import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { VIDEOS, REDES, getYoutubeId, getYoutubeListId } from '../data/mentoresData';

const esLista = (item) => Boolean(item.lista);

const miniatura = (item) =>
  esLista(item) ? null : `https://i.ytimg.com/vi/${getYoutubeId(item.url)}/hqdefault.jpg`;

const srcReproductor = (item) =>
  esLista(item)
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${getYoutubeListId(item.lista)}&autoplay=1&rel=0`
    : `https://www.youtube-nocookie.com/embed/${getYoutubeId(item.url)}?autoplay=1&rel=0`;

export default function Videos() {
  const [actual, setActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);

  if (!VIDEOS.length) return null;

  const video = VIDEOS[actual];
  const unico = VIDEOS.length === 1;

  const elegir = (indice) => {
    setActual(indice);
    setReproduciendo(false);
  };

  return (
    <section id="videos" className="scroll-mt-24 py-16 sm:py-20 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              Videoteca
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
              Videos del programa
            </h2>
          </div>
          {REDES.youtube && (
            <a
              href={REDES.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark underline underline-offset-4"
            >
              Ver nuestro canal de YouTube
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className={unico ? 'lg:col-span-3 max-w-4xl' : 'lg:col-span-2'}>
            <div className="relative aspect-video bg-black">
              {reproduciendo ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={srcReproductor(video)}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setReproduciendo(true)}
                  className="group absolute inset-0 w-full h-full"
                  aria-label={`Reproducir: ${video.titulo}`}
                >
                  {miniatura(video) ? (
                    <img
                      src={miniatura(video)}
                      alt=""
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <span className="absolute inset-0 bg-brand-dark flex items-end p-6 text-left">
                      <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                        Lista de reproducción
                      </span>
                    </span>
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-20 h-20 bg-brand text-white group-hover:bg-accent group-hover:text-brand-dark transition-colors">
                      <Play className="w-9 h-9" fill="currentColor" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              )}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-ink mt-5">{video.titulo}</h3>
            {video.descripcion && (
              <p className="mt-2 text-base text-stone-600 leading-relaxed max-w-2xl">
                {video.descripcion}
              </p>
            )}
          </div>

          {!unico && (
            <ul className="space-y-3 lg:max-h-[28rem] lg:overflow-y-auto" aria-label="Lista de videos">
              {VIDEOS.map((item, indice) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => elegir(indice)}
                    aria-current={indice === actual}
                    className={`w-full flex gap-3 text-left p-2 border-l-4 transition-colors ${
                      indice === actual
                        ? 'border-accent bg-paper'
                        : 'border-transparent hover:bg-paper'
                    }`}
                  >
                    {miniatura(item) ? (
                      <img
                        src={miniatura(item)}
                        alt=""
                        className="w-32 aspect-video object-cover shrink-0 bg-stone-200"
                        loading="lazy"
                      />
                    ) : (
                      <span className="w-32 aspect-video shrink-0 bg-brand text-white flex items-center justify-center">
                        <Play className="w-6 h-6" fill="currentColor" aria-hidden="true" />
                      </span>
                    )}
                    <span className="text-sm font-semibold text-ink leading-snug">
                      {item.titulo}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}