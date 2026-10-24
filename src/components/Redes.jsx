import React from 'react';

const propsSvg = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const IconoYoutube = () => (
  <svg {...propsSvg}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const IconoInstagram = () => (
  <svg {...propsSvg}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconoFacebook = () => (
  <svg {...propsSvg}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const REDES_DISPONIBLES = [
  { 
    clave: 'youtube', 
    nombre: 'YouTube', 
    url: 'https://www.youtube.com/@Mentor%C3%ADasDACS-UJAT', 
    Icono: IconoYoutube 
  },
  { 
    clave: 'instagram', 
    nombre: 'Instagram', 
    url: 'https://www.instagram.com/mentores_dacs/', 
    Icono: IconoInstagram 
  },
  { 
    clave: 'facebook', 
    nombre: 'Facebook', 
    url: 'https://www.facebook.com/p/Mentor%C3%ADas-M%C3%A9dico-Cirujano-DACS-61570120989971/', 
    Icono: IconoFacebook 
  },
];

export const hayRedes = () => REDES_DISPONIBLES.some((red) => red.url);

export default function Redes({ className = '' }) {
  const activas = REDES_DISPONIBLES.filter((red) => red.url);
  if (!activas.length) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {activas.map(({ clave, nombre, url, Icono }) => (
        <li key={clave}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${nombre} del Programa de Mentores DACS`}
            title={nombre}
            className="flex items-center justify-center w-10 h-10 border border-white/40 text-white hover:bg-accent hover:border-accent hover:text-brand-dark transition-colors"
          >
            <Icono />
          </a>
        </li>
      ))}
    </ul>
  );
}