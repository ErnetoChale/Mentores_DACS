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

// Enlaces directos a un archivo de Drive a partir de su ID.
export const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;
export const driveDownload = (id) =>
  `https://drive.google.com/uc?export=download&id=${id}`;

// Cómo agregar un manual:
//  1. En Drive, clic derecho al archivo > Compartir > "Cualquier persona con el enlace".
//  2. Copia el enlace. Tiene la forma https://drive.google.com/file/d/ESTE_ES_EL_ID/view
//  3. Pega ese ID en "driveId". Si lo dejas vacío, los botones abren la carpeta completa.
export const MANUALES = [
  {
    id: "manual-bienvenida",
    titulo: "Manual de Bienvenida al Estudiante",
    categoria: "Guía General",
    descripcion:
      "Información esencial sobre trámites, vida universitaria y servicios de la DACS.",
    driveId: "",
  },
  {
    id: "guia-tutorias",
    titulo: "Guía de Operación del Módulo de Mentorías",
    categoria: "Académico",
    descripcion:
      "Lineamientos y estructura de las sesiones de asesoría entre pares y mentores.",
    driveId: "",
  },
];

// Datos de contacto para el pie de página. Deja vacío lo que no quieras mostrar.
export const CONTACTO = {
  correo: "",
  telefono: "",
  direccion: "",
};