// Enlace general a la carpeta de Google Drive
export const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/tu_id_de_carpeta_aqui";

// Funciones auxiliares para obtener el ID y generar los enlaces de visualización y descarga
export const getDriveId = (urlOrId) => {
  if (!urlOrId) return '';
  const match = urlOrId.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : urlOrId;
};

export const driveView = (urlOrId) => {
  const id = getDriveId(urlOrId);
  return `https://drive.google.com/file/d/${id}/view?usp=sharing`;
};

export const driveDownload = (urlOrId) => {
  const id = getDriveId(urlOrId);
  return `https://drive.google.com/uc?export=download&id=${id}`;
};

export const MANUALES = [
  {
    id: '1',
    titulo: 'Disección de tejido porcino',
    categoria: 'Mentorías DACS',
    autores: 'Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    descripcion: 'Autores: Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    driveId: 'https://drive.google.com/file/d/1TwHF5l0nC5NL_a2dThS3hWq9Oz2Benm3/view?usp=sharing'
  },
  {
    id: '2',
    titulo: 'Disección de ojo',
    categoria: 'Mentorías DACS',
    autores: 'José Daniel Roche García, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Joshua Javier Hidalgo Hernández, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    descripcion: 'Autores: José Daniel Roche García, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Joshua Javier Hidalgo Hernández, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    driveId: 'https://drive.google.com/file/d/1tcaZa7ylIFpOvPn5zSu9YczhpEvOWdA6/view?usp=sharing'
  },
  {
    id: '3',
    titulo: 'Estuche de disección',
    categoria: 'Mentorías DACS',
    autores: 'Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    descripcion: 'Autores: Irene del Carmen Castañeda Luna, Karla del Socorro Celorio Gómez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    driveId: 'https://drive.google.com/file/d/1cCD5XIohg4zzg_TXr6sghS7hwVl67jjj/view?usp=sharing'
  },
  {
    id: '4',
    titulo: 'Vestimenta quirúrgica',
    categoria: 'Mentorías DACS',
    autores: 'Alejandro Ernesto Chale de la Cruz, Karla del Socorro Celorio Gómez, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    descripcion: 'Autores: Alejandro Ernesto Chale de la Cruz, Karla del Socorro Celorio Gómez, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    driveId: 'https://drive.google.com/file/d/1cCD5XIohg4zzg_TXr6sghS7hwVl67jjj/view?usp=sharing'
  },
  {
    id: '5',
    titulo: 'Disección de riñón',
    categoria: 'Mentorías DACS',
    autores: 'Juan Antonio Hernández Cadenas, Lluvia Paola Pulido Ortiz, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    descripcion: 'Autores: Juan Antonio Hernández Cadenas, Lluvia Paola Pulido Ortiz, Karla del Socorro Celorio Méndez, Alejandro Ernesto Chale de la Cruz, Crystell Guadalupe Guzmán Priego, Sergio Quiroz Gómez y Cristian Adrián Romero Mendoza.',
    driveId: 'https://drive.google.com/file/d/1IYeqDPuJNRQcJ06k6SOYzOQyCsIo3Ioc/view?usp=sharing'
  }
]