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

// ---------------------------------------------------------------------------
// MANUALES
// - driveId: enlace de "Compartir" del archivo en Drive ("Cualquier persona con el enlace").
// - registro: número de registro de derecho de autor. Si lo dejas vacío, no se muestra.
//   Ejemplo: registro: "03-2026-102310460100-01"
// - El manual de corazón NO se incluye porque aún está en proceso.
//   Cuando esté listo, agrégalo aquí como un manual más.
// ---------------------------------------------------------------------------
export const MANUALES = [
  {
    id: "1",
    titulo: "Disección de tejido porcino",
    categoria: "Mentorías DACS",
    autores:
      "Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "",
    driveId:
      "https://drive.google.com/file/d/1TwHF5l0nC5NL_a2dThS3hWq9Oz2Benm3/view?usp=sharing",
  },
  {
    id: "2",
    titulo: "Disección de ojo",
    categoria: "Mentorías DACS",
    autores:
      "José Daniel Roche García, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Joshua Javier Hidalgo Hernández, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "",
    driveId:
      "https://drive.google.com/file/d/1tcaZa7ylIFpOvPn5zSu9YczhpEvOWdA6/view?usp=sharing",
  },
  {
    id: "3",
    titulo: "Estuche de disección",
    categoria: "Mentorías DACS",
    autores:
      "Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "",
    driveId:
      "https://drive.google.com/file/d/1cCD5XIohg4zzg_TXr6sghS7hwVl67jjj/view?usp=sharing",
  },
  {
    id: "4",
    titulo: "Vestimenta quirúrgica",
    categoria: "Mentorías DACS",
    autores:
      "Alejandro Ernesto Chale de la Cruz, Karla del Socorro Celorio Gómez, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "",
    // OJO: este enlace es el mismo que el de "Estuche de disección". Reemplázalo por el de este manual.
    driveId:
      "https://drive.google.com/file/d/1cCD5XIohg4zzg_TXr6sghS7hwVl67jjj/view?usp=sharing",
  },
  {
    id: "5",
    titulo: "Disección de riñón",
    categoria: "Mentorías DACS",
    autores:
      "Juan Antonio Hernández Cadenas, Lluvia Paola Pulido Ortiz, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    registro: "",
    driveId:
      "https://drive.google.com/file/d/1IYeqDPuJNRQcJ06k6SOYzOQyCsIo3Ioc/view?usp=sharing",
  },
];

// ---------------------------------------------------------------------------
// CONTACTO: aparece en el pie de página y en el menú. Deja vacío lo que no uses.
// ---------------------------------------------------------------------------
export const CONTACTO = {
  correo: "",
  telefono: "",
  direccion: "",
};

// ---------------------------------------------------------------------------
// REDES SOCIALES: las que dejes vacías no se muestran.
// ---------------------------------------------------------------------------
export const REDES = {
  youtube: "https://www.youtube.com/@Mentor%C3%ADasDACS-UJAT",
  instagram: "https://www.instagram.com/mentores_dacs/",
  facebook:
    "https://www.facebook.com/p/Mentor%C3%ADas-M%C3%A9dico-Cirujano-DACS-61570120989971/",
};

// Obtiene el ID de un video a partir de cualquier enlace de YouTube
// (watch?v=, youtu.be/, embed/ o shorts/) o del ID directo.
export const getYoutubeId = (urlOrId) => {
  if (!urlOrId) return "";
  const match = urlOrId.match(
    /(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : urlOrId;
};

// Obtiene el ID de una lista de reproducción (el valor después de "list=").
export const getYoutubeListId = (urlOrId) => {
  if (!urlOrId) return "";
  const match = urlOrId.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : urlOrId;
};

// ---------------------------------------------------------------------------
// VIDEOS: si la lista está vacía, la sección no aparece.
// - Un video:  url: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
// - Una lista de reproducción (curso):  lista: "https://youtube.com/playlist?list=..."
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
// HISTORIA DEL PROGRAMA: si todo está vacío, la sección no aparece.
// - parrafos: cada texto entre comillas es un párrafo.
// - hitos: línea de tiempo con año y texto.
//
// Ejemplo:
//  parrafos: [
//    "El programa nació en ... con el objetivo de ...",
//    "Con el tiempo ...",
//  ],
//  hitos: [
//    { anio: "2024", texto: "Inicio del programa." },
//    { anio: "2025", texto: "Publicación de los primeros manuales." },
//  ],
// ---------------------------------------------------------------------------
export const HISTORIA = {
  parrafos: [],
  hitos: [],
};

// ---------------------------------------------------------------------------
// FUNDADORES: si la lista está vacía, no aparecen.
// Las fotos van en public/images/fundadores/ (por ejemplo "nombre.jpg").
// Sin foto se muestran las iniciales.
//
// Ejemplo:
//  {
//    id: "f1",
//    nombre: "Nombre Apellido",
//    cargo: "Fundador y coordinador",
//    foto: "nombre.jpg",
//  },
// ---------------------------------------------------------------------------
export const FUNDADORES = [];

// ---------------------------------------------------------------------------
// GALERIA: si la lista está vacía, no aparece.
// Las fotos van en public/images/galeria/ (por ejemplo "taller1.jpg").
//
// Ejemplo:
//  { id: "g1", foto: "taller1.jpg", pie: "Taller de disección, 2026" },
// ---------------------------------------------------------------------------
export const GALERIA = [];

// ---------------------------------------------------------------------------
// MENTORES: si la lista está vacía, la sección no aparece en el sitio.
// Las fotos van en public/images/mentores/ (por ejemplo "ernesto.jpg").
// Si no pones foto, se muestran las iniciales.
//
// Ejemplo:
//  {
//    id: "m1",
//    nombre: "Nombre Apellido",
//    semestre: "6.º semestre",
//    area: "Anatomía y disección",
//    foto: "nombre.jpg",
//  },
// ---------------------------------------------------------------------------
export const MENTORES = [];

// ---------------------------------------------------------------------------
// ACTIVIDADES: si la lista está vacía, la sección no aparece.
// La fecha va en formato AAAA-MM-DD. Se ordenan solas por fecha.
//
// Ejemplo:
//  {
//    id: "a1",
//    titulo: "Taller de disección de ojo",
//    fecha: "2026-11-12",
//    hora: "10:00 h",
//    lugar: "Anfiteatro de la DACS",
//    descripcion: "Práctica guiada por los mentores del programa.",
//  },
// ---------------------------------------------------------------------------
export const ACTIVIDADES = [];

// ---------------------------------------------------------------------------
// PARTICIPAR: pega aquí el enlace de tu formulario (Google Forms, por ejemplo).
// Si dejas ambos enlaces vacíos, la sección no aparece.
// ---------------------------------------------------------------------------
export const PARTICIPAR = {
  mentorado: {
    descripcion: "Recibe acompañamiento académico de mentores de semestres avanzados.",
    enlace: "",
  },
  mentor: {
    descripcion: "Comparte tu experiencia y apoya a los estudiantes de nuevo ingreso.",
    enlace: "",
  },
};