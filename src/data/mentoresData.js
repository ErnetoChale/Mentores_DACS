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

// Cómo agregar un manual: copia el enlace de "Compartir" del archivo en Drive
// (con acceso "Cualquier persona con el enlace") y pégalo en "driveId".
export const MANUALES = [
  {
    id: "1",
    titulo: "Disección de tejido porcino",
    categoria: "Mentorías DACS",
    autores:
      "Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    driveId:
      "https://drive.google.com/file/d/1TwHF5l0nC5NL_a2dThS3hWq9Oz2Benm3/view?usp=sharing",
  },
  {
    id: "2",
    titulo: "Disección de ojo",
    categoria: "Mentorías DACS",
    autores:
      "José Daniel Roche García, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Joshua Javier Hidalgo Hernández, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    driveId:
      "https://drive.google.com/file/d/1tcaZa7ylIFpOvPn5zSu9YczhpEvOWdA6/view?usp=sharing",
  },
  {
    id: "3",
    titulo: "Estuche de disección",
    categoria: "Mentorías DACS",
    autores:
      "Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
    driveId:
      "https://drive.google.com/file/d/1cCD5XIohg4zzg_TXr6sghS7hwVl67jjj/view?usp=sharing",
  },
  {
    id: "4",
    titulo: "Vestimenta quirúrgica",
    categoria: "Mentorías DACS",
    autores:
      "Alejandro Ernesto Chale de la Cruz, Karla del Socorro Celorio Gómez, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.",
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
    driveId:
      "https://drive.google.com/file/d/1IYeqDPuJNRQcJ06k6SOYzOQyCsIo3Ioc/view?usp=sharing",
  },
];

// Datos de contacto para el pie de página. Deja vacío lo que no quieras mostrar.
export const CONTACTO = {
  correo: "",
  telefono: "",
  direccion: "",
};