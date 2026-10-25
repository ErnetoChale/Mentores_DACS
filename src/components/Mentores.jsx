
export const PROGRAMA_INFO = {
  titulo: "Programa de Mentores DACS",
  universidad: "Universidad Juárez Autónoma de Tabasco",
  institucion: "División Académica de Ciencias de la Salud",
  descripcion:
    "Espacio de orientación, acompañamiento académico y desarrollo profesional para la comunidad estudiantil de la salud.",
};

// Carpeta de Google Drive con todos los manuales.
export const DRIVE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1t7Pb4bzcGpOhDExuXm-hYgAaQdPf-dYD?usp=sharing";

// Acepta el enlace completo de Drive o solo el ID del archivo.
export const getDriveId = (urlOrId) => {
  if (!urlOrId) return "";
  const match = urlOrId.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : urlOrId;
};

export const driveView = (urlOrId) =>
  `https://drive.google.com/file/d/${getDriveId(urlOrId)}/view?usp=sharing`;

export const driveDownload = (urlOrId) =>
  `https://drive.google.com/uc?export=download&id=${getDriveId(urlOrId)}`;

export const MANUALES = [
  {
    id: "1",
    titulo: "Disección de tejido porcino",
    categoria: "Mentorías DACS",
    autores:
      "Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "03-2026-010814421000-01",
    driveId:
      "https://drive.google.com/file/d/1TwHF5l0nC5NL_a2dThS3hWq9Oz2Benm3/view?usp=sharing",
  },
  {
    id: "2",
    titulo: "Disección de ojo",
    categoria: "Mentorías DACS",
    autores:
      "José Daniel Roche García, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Joshua Javier Hidalgo Hernández, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "03-2026-010814394500-01.",
    driveId:
      "https://drive.google.com/file/d/1tcaZa7ylIFpOvPn5zSu9YczhpEvOWdA6/view?usp=sharing",
  },
  {
    id: "3",
    titulo: "Estuche de disección",
    categoria: "Mentorías DACS",
    autores:
      "Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "03-2026-010911183600-01",
    driveId:
      "https://drive.google.com/file/d/1cCD5XIohg4zzg_TXr6sghS7hwVl67jjj/view?usp=sharing",
  },
  {
    id: "4",
    titulo: "Vestimenta quirúrgica",
    categoria: "Mentorías DACS",
    autores:
      "Alejandro Ernesto Chale de la Cruz, Karla del Socorro Celorio Gómez, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "03-2026-010911215609-01",
    driveId:
      "https://drive.google.com/file/d/1H9gYp_wbqPQq0xt6-JG8AUprCE-0pxrj/view?usp=sharing",
  },
  {
    id: "5",
    titulo: "Disección de riñón",
    categoria: "Mentorías DACS",
    autores:
      "Juan Antonio Hernández Cadenas, Lluvia Paola Pulido Ortiz, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "03-2026-010910185709-01",
    driveId:
      "https://drive.google.com/file/d/1IYeqDPuJNRQcJ06k6SOYzOQyCsIo3Ioc/view?usp=sharing",
  },
];

// ---------------------------------------------------------------------------
// CONTACTO
// ---------------------------------------------------------------------------
export const CONTACTO = {
  correo: "mentoriasdacsmed@gmail.com",
  direccion: "Av. Coronel Gregorio Méndez Magaña #2838-A, Col. Tamulté, C.P. 86150, Villahermosa, Tabasco, México.",
};

// ---------------------------------------------------------------------------
// REDES SOCIALES
// ---------------------------------------------------------------------------
export const REDES = {
  youtube: "https://www.youtube.com/@Mentor%C3%ADasDACS-UJAT",
  instagram: "https://www.instagram.com/mentores_dacs/",
  facebook:
    "https://www.facebook.com/p/Mentor%C3%ADas-M%C3%A9dico-Cirujano-DACS-61570120989971/",
};

// ---------------------------------------------------------------------------
// YOUTUBE: obtiene el ID de un video a partir de su enlace o ID directo.
// ---------------------------------------------------------------------------
export const getYoutubeId = (urlOrId) => {
  if (!urlOrId) return "";
  const match = urlOrId.match(
    /(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : urlOrId;
};

// Obtiene el ID de una lista de reproducción.
export const getYoutubeListId = (urlOrId) => {
  if (!urlOrId) return "";
  const match = urlOrId.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : urlOrId;
};

// ---------------------------------------------------------------------------
// VIDEOS
// ---------------------------------------------------------------------------
export const VIDEOS = [
  {
    id: "curso-introduccion-medicina",
    titulo: "Curso de introducción a la medicina",
    descripcion: "Serie de videos del canal Mentorías DACS-UJAT.",
    lista: "https://youtube.com/playlist?list=PLfxTL4EbiZaY&si=zas6kwcF8HPeVMmq",
  },
];

// ---------------------------------------------------------------------------
// HISTORIA DEL PROGRAMA
// ---------------------------------------------------------------------------
export const HISTORIA = {
  destacado: {
    etiqueta: "Todo comenzó en",
    anio: "2024",
    frase:
      "Un proyecto nacido para que nadie recorra solo los primeros pasos de la medicina.",
  },
  parrafos: [
    "En 2024 nació el Programa de Mentores DACS con una idea sencilla y ambiciosa: que la experiencia de quienes ya recorrieron el camino sirva de guía a quienes apenas lo comienzan.",
    "Desde entonces, el programa ha crecido hasta convertirse en una comunidad que enseña, comparte y publica: manuales, videos y cursos que acompañan a los estudiantes de ciencias de la salud en su formación.",
  ],
  hitos: [],
};

export const FUNDADORES = [
  {
    id: "sergio-quiroz",
    nombre: "Dr. Sergio Quiroz Gómez",
    cargo: "Responsable de Acreditación Médica · Profesor investigador",
    descripcion:
      "Responsable del proceso de acreditación médica y profesor investigador. Participa en el programa como coautor de sus manuales operativos.",
    foto: "sergio.quiroz.jpg",
  },
  {
    id: "ernesto-chale",
    nombre: "Alejandro Ernesto Chale de la Cruz",
    cargo: "Cofundador del programa",
    descripcion:
      "Cofundador del Programa de Mentores DACS y coautor de sus manuales operativos.",
    foto: "ernesto.chale.jpg",
  },
];

export const GALERIA = [
  {
    id: "g1",
    foto: "diseccion-corazon.jpg",
    pie: "Práctica académica de disección de corazón",
  },
  {
    id: "g2",
    foto: "diseccion-piel.jpg",
    pie: "Práctica académica de disección de piel",
  },
  {
    id: "g3",
    foto: "ceremonia.jpg",
    pie: "Ceremonia del Programa de Mentorías Médico Cirujano DACS-UJAT",
  },
];
export const MENTORES = [
  {
    id: "directorio-1",
    nombre: "Directorio 1",
    area: "Directorio de mentores",
    foto: "directorio1.jpg",
  },
  {
    id: "directorio-2",
    nombre: "Directorio 2",
    area: "Directorio de mentores",
    foto: "directorio2.jpg",
  },
  {
    id: "directorio-3",
    nombre: "Directorio 3",
    area: "Directorio de mentores",
    foto: "directorio3.jpg",
  },
  {
    id: "directorio-4",
    nombre: "Directorio 4",
    area: "Directorio de mentores",
    foto: "directorio4.jpg",
  },
];

export const ACTIVIDADES = [
  {
    id: "curso-espirometria",
    titulo: "Interpretación de una espirometría",
    fecha: "05 de noviembre de 2026",
    hora: "12:00 P.M",
    lugar: "Aula de simulación DACS, a un costado de la coordinación de Médico Cirujano",
    descripcion:
      "Aprende a interpretar los resultados de una espirometría y su importancia en la práctica clínica. Este taller está dirigido a estudiantes de medicina y profesionales de la salud interesados en mejorar sus habilidades en la evaluación respiratoria.",
  },
];

export const PARTICIPAR = {
  mentorado: {
    descripcion:
      "Recibe acompañamiento académico de mentores de semestres avanzados.",
    enlace: "https://docs.google.com/forms/d/e/1FAIpQLSdzWVvlHDdI0kp6yt97Qs_U53iXutUJQAdq5VJWT7ZavO_oUQ/viewform",
  },
  mentor: {
    descripcion:
      "Comparte tu experiencia y apoya a los estudiantes de nuevo ingreso.",
      Registro: "https://forms.gle/7cGEFhf3jFhnif5k8",
      Descripción: no te quedes fuera de esta gran oportunidad de formar parte del Programa de Mentores DACS y contribuir al desarrollo académico de los estudiantes de nuevo ingreso. Regístrate como mentor y comparte tu experiencia y conocimientos para guiar a la próxima generación de profesionales de la salud.
  },
};
