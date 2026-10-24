import React from 'react';
import Navbar from './components/Navbar';
import ManualesList from './components/ManualesList';
import Footer from './components/Footer';
import Actividades from './components/Actividades';
import Mentores from './components/Mentores';
import Videos from './components/Videos';
import Participar from './components/Participar';
import { PROGRAMA_INFO, DRIVE_FOLDER_URL } from './data/mentoresData';
import { ArrowRight, ExternalLink } from 'lucide-react';

const PILARES = [
  {
    titulo: 'Acompañamiento académico',
    texto:
      'Asesoría y guía entre pares orientada al fortalecimiento de competencias disciplinares e integración a la vida universitaria.',
  },
  {
    titulo: 'Alineación institucional',
    texto:
      'Lineamientos, formatos y procesos estandarizados bajo la supervisión de la Coordinación de Docencia de la DACS.',
  },
];

const OBJETIVOS = [
  'Reducir los índices de rezago e inserción en los primeros semestres.',
  'Promover el desarrollo integral y el bienestar de los estudiantes de salud.',
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-ink font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Portada */}
        <section id="inicio" className="bg-brand text-white scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid gap-12 lg:grid-cols-3 lg:items-end">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {PROGRAMA_INFO.institucion}
              </p>
              <h1 className="font-heading text-4xl sm:text-6xl font-bold leading-[1.05] mt-4">
                {PROGRAMA_INFO.titulo}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
                {PROGRAMA_INFO.descripcion}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#manuales"
                  className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 text-sm font-bold hover:bg-accent hover:text-brand-dark transition-colors"
                >
                  Consultar manuales
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#programa"
                  className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Conocer el programa
                </a>
              </div>
            </div>

            <aside className="bg-brand-dark border-t-4 border-accent p-6" aria-label="Accesos rápidos">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
                Accesos rápidos
              </h2>
              <ul className="mt-4 divide-y divide-white/15 text-sm font-semibold">
                <li>
                  <a href="#manuales" className="flex items-center justify-between py-3 hover:text-accent">
                    Manuales y guías operativas
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#programa" className="flex items-center justify-between py-3 hover:text-accent">
                    Estructura del programa
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={DRIVE_FOLDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 hover:text-accent"
                  >
                    Carpeta completa en Drive
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* El programa */}
        <section id="programa" className="scroll-mt-24 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
              El programa
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 max-w-2xl leading-tight">
              Estructura del Programa de Mentorías
            </h2>
            <p className="mt-4 text-lg text-stone-600 max-w-3xl leading-relaxed">
              Estrategia institucional de orientación y desarrollo estudiantil en ciencias de la salud.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {PILARES.map((pilar) => (
                <article key={pilar.titulo} className="border-t-4 border-accent pt-5">
                  <h3 className="font-heading text-2xl font-semibold text-brand">{pilar.titulo}</h3>
                  <p className="mt-3 text-base text-stone-700 leading-relaxed">{pilar.texto}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 bg-paper border-l-4 border-brand p-6 sm:p-8">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand">
                Objetivos clave
              </h3>
              <ol className="mt-5 space-y-4">
                {OBJETIVOS.map((objetivo, i) => (
                  <li key={objetivo} className="flex gap-4">
                    <span className="font-heading text-2xl font-bold text-accent leading-none">
                      {i + 1}
                    </span>
                    <span className="text-base text-stone-800 leading-relaxed">{objetivo}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Actividades />
        <Mentores />
        <Videos />

        {/* Manuales */}
        <section id="manuales" className="scroll-mt-24 bg-paper py-16 sm:py-20 border-t border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
                  Documentación
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mt-2 leading-tight">
                  Manuales y documentos
                </h2>
                <p className="mt-3 text-lg text-stone-600 max-w-2xl leading-relaxed">
                  Repositorio oficial de recursos normativos para mentores y tutorados.
                </p>
              </div>
              <a
                href={DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark underline underline-offset-4"
              >
                Abrir carpeta en Google Drive
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <ManualesList />
          </div>
        </section>

        <Participar />
      </main>

      <Footer />
    </div>
  );
}