import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const CANAL_YOUTUBE_URL = 'https://www.youtube.com/@Mentor%C3%ADasDACS-UJAT';

const VIDEOS = [
  {
    id: '1',
    titulo: 'Curso de Mentorías DACS',
    descripcion: 'Lista de reproducción del curso completo del programa de Mentorías Médico Cirujano DACS.',
    url: 'https://youtube.com/playlist?list=PLfxTL4EbiZaY&si=zas6kwcF8HPeVMmq',
  },
];

const getYoutubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?list=|&list=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? match[2] : url;
};

export default function Videos() {
  const [actual, setActual] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);

  if (!VIDEOS.length) return null;

  const video = VIDEOS[actual];
  const esPlaylist = video.url.includes('list=');
  const idYoutube = getYoutubeId(video.url);

  const miniatura = (item) => {
    if (item.url.includes('list=')) {
      return `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60`;
    }
    return `https://i.ytimg.com/vi/${getYoutubeId(item.url)}/hqdefault.jpg`;
  };

  const elegir = (indice) => {
    setActual(indice);
    setReproduciendo(false);
  };

  const iframeSrc = esPlaylist
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${idYoutube}&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${idYoutube}?autoplay=1&rel=0`;

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
          {CANAL_YOUTUBE_URL && (
            <a
              href={CANAL_YOUTUBE_URL}
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
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-black">
              {reproduciendo ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={iframeSrc}
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
                  <img
                    src={miniatura(video)}
                    alt=""
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
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

          {VIDEOS.length > 1 && (
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
                    <img
                      src={miniatura(item)}
                      alt=""
                      className="w-32 aspect-video object-cover shrink-0 bg-stone-200"
                      loading="lazy"
                    />
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